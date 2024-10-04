import {
  Sprite,
  useTick,
  AnimatedSprite as PixiAnimatedSprite,
} from "@pixi/react";
import { type EventMode } from "@pixi/events";
import React, { useEffect, useRef, useState } from "react";
import { useWorld } from "../../context/World/hooks";
import { glowFilter } from "../../constants/filters";
import { Texture, Resource, Assets } from "pixi.js";
import { useSidebar } from "../../context/Sidebar/hooks";
import { usePointerHandler } from "../../lib/hooks/usePointerHandler";
import { useEventContext } from "../../context/Event/hooks";

const defaultSpeed = 0.005;
const defaultDelay = 0;

type Props = React.ComponentProps<typeof Sprite> &
  Partial<React.ComponentProps<typeof PixiAnimatedSprite>> & {
    trails?: {
      x: number;
      y: number;
      visible?: boolean;
      speed?: number;
      delayMs?: number;
      skipLinearInterpolation?: boolean;
    }[];
    scale?:
      | number
      | {
          x: number;
          y: number;
        };
    scaleMultipler?: {
      xl: number;
    };
    enableGlowEffect?: boolean;
    spritesheet?: string;
    spriteAnimationIntervals?: number[];
    initialSpriteAnimationPlaying?: boolean;
    metadata?: { objectKey: string };
  };

const AnimatedSprite: React.FC<Props> = (props) => {
  const worldContext = useWorld();
  const [position, setPosition] = useState({
    x: props.x || 0,
    y: props.y || 0,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [delayTimer, setDelayTimer] = useState(0);
  const [hover, setHover] = useState(false);

  const sidebarContext = useSidebar();
  const pointerHandler = usePointerHandler({
    handleClick: () => {
      sidebarContext.openSidebar(props.metadata?.objectKey ?? "");
    },
    onPointerUp: () => setHover(false),
  });

  const onMouseOver = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };

  const isAnimating = props.trails && props.trails.length > 1;

  useTick((delta, ticker) => {
    if (!props.trails || props.trails.length < 2) {
      return;
    }

    const currentTrail = props.trails[currentIndex];

    const nextIndex = (currentIndex + 1) % props.trails.length;
    const nextTrail = props.trails[nextIndex];

    const currentPoint = calculateActualPosition(currentTrail, {
      position: {
        x: worldContext.position.x,
        y: worldContext.position.y,
      },
      scale: worldContext.scale,
    });
    const nextPoint = calculateActualPosition(nextTrail, {
      position: {
        x: worldContext.position.x,
        y: worldContext.position.y,
      },
      scale: worldContext.scale,
    });

    let newX;
    let newY;
    if (currentTrail.skipLinearInterpolation) {
      newX = Math.round(progress) === 0 ? currentPoint.x : nextPoint.x;
      newY = Math.round(progress) === 0 ? currentPoint.y : nextPoint.y;
    } else {
      // Linear interpolation
      newX = currentPoint.x + (nextPoint.x - currentPoint.x) * progress;
      newY = currentPoint.y + (nextPoint.y - currentPoint.y) * progress;
    }

    setPosition({ x: newX, y: newY });

    // Update opacity based on visibility
    if (currentTrail.visible === false) {
      setOpacity((prev) => Math.max(0, prev - delta * 0.05)); // Fade out
    } else {
      setOpacity((prev) => Math.min(1, prev + delta * 0.05)); // Fade in
    }

    // Handle delay, skip progress update if delay is not met
    const delay = currentTrail?.delayMs ?? defaultDelay;
    if (delayTimer < delay) {
      setDelayTimer((prev) => prev + ticker.deltaMS);
      return;
    }

    // Update progress
    const speed = currentTrail?.speed ?? defaultSpeed;
    const newProgress = progress + delta * speed;
    if (newProgress >= 1) {
      setProgress(0);
      setCurrentIndex(nextIndex);
      setDelayTimer(0);
    } else {
      setProgress(newProgress);
    }
  });

  const [frames, setFrames] = useState<Texture<Resource>[]>([]);

  useEffect(() => {
    if (!props.spritesheet) return;

    Assets.load(props.spritesheet).then((resource) => {
      setFrames(
        Object.keys(resource.data.frames).map((frame) => Texture.from(frame)),
      );
    });
  }, [props.spritesheet]);

  const [isPlaying, setIsPlaying] = useState(
    props.initialSpriteAnimationPlaying ?? true,
  );
  const intervalIndexRef = useRef(0);
  const elapsedRef = useRef(0);

  useTick((delta) => {
    if (
      props.spriteAnimationIntervals &&
      props.spriteAnimationIntervals.length > 0
    ) {
      elapsedRef.current += delta * 16.67; // Convert delta to milliseconds

      if (
        elapsedRef.current >=
        props.spriteAnimationIntervals[intervalIndexRef.current]
      ) {
        elapsedRef.current = 0;
        intervalIndexRef.current =
          (intervalIndexRef.current + 1) %
          props.spriteAnimationIntervals.length;
        setIsPlaying((prev) => !prev);
      }
    }
  });

  const eventContext = useEventContext();

  const commonProps = {
    ...props,
    x: isAnimating ? position.x : props.x,
    y: isAnimating ? position.y : props.y,
    alpha: opacity,
    eventMode: (eventContext.enabled
      ? "static"
      : "none") satisfies EventMode as EventMode,
    filters: props.enableGlowEffect && hover ? [glowFilter] : [],
    mouseover: onMouseOver,
    mouseout: onMouseOut,
    mousedown: onMouseOver,
    onpointermove: () => setHover(true),
    ...(props.enableGlowEffect && { cursor: "pointer", ...pointerHandler }),
  };

  if (props.spritesheet) {
    // required check to prevent crashing
    if (frames.length === 0) return null;

    return (
      <PixiAnimatedSprite
        {...props}
        {...commonProps}
        textures={frames}
        isPlaying={isPlaying}
      />
    );
  }

  return <Sprite {...props} {...commonProps} />;
};

function calculateActualPosition(
  offset: { x: number; y: number },
  worldContext: { position: { x: number; y: number }; scale: number },
) {
  return {
    x: offset.x * worldContext.scale + worldContext.position.x,
    y: offset.y * worldContext.scale + worldContext.position.y,
  };
}

export default AnimatedSprite;
