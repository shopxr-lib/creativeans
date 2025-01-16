import {
  Sprite,
  useTick,
  AnimatedSprite as PixiAnimatedSprite,
} from "@pixi/react";
import { type EventMode } from "@pixi/events";
import React, { useEffect, useState } from "react";
import { useWorld } from "../../context/World/hooks";
import { glowFilter } from "../../constants/filters";
import { Texture, Resource, Assets } from "pixi.js";
import { useSidebar } from "../../context/Sidebar/hooks";
import { usePointerHandler } from "../../lib/hooks/usePointerHandler";
import { useEventContext } from "../../context/Event/hooks";
import { type Trail } from "../../lib/types";

const defaultSpeed = 0.005;
const defaultDelay = 0;

type Props = React.ComponentProps<typeof Sprite> &
  Partial<React.ComponentProps<typeof PixiAnimatedSprite>> & {
    trails?: Trail[];
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
    initialSpriteAnimationPlaying?: boolean;
    metadata?: { objectKey: string; onClickType: onClickType };
    customInitialFrame?: number;
  };

type onClickType = "openSidebar" | "openParentPopup";

const AnimatedSprite: React.FC<Props> = ({
  trails,
  customInitialFrame,
  ...props
}) => {
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
  const [isPlaying, setIsPlaying] = useState(
    props.initialSpriteAnimationPlaying ?? true,
  );
  const [initialFrame, setInitialFrame] = useState(customInitialFrame ?? 0);

  const sidebarContext = useSidebar();
  const pointerHandler = usePointerHandler({
    handleClick: () => {
      switch (props.metadata?.onClickType) {
        case "openSidebar":
          sidebarContext.openSidebar(props.metadata?.objectKey ?? "");
          break;
        case "openParentPopup":
          window.parent.postMessage(
            props.metadata?.objectKey,
            "https://www.creativeans.com",
          );
          break;
        default:
          break;
      }
    },
    onPointerUp: () => setHover(false),
  });

  const onMouseOver = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };

  const isAnimating = trails && trails.length > 1;

  useTick((delta, ticker) => {
    if (!trails || trails.length < 2) {
      return;
    }

    const currentTrail = trails[currentIndex];

    const nextIndex = (currentIndex + 1) % trails.length;
    const nextTrail = trails[nextIndex];

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

    if (currentTrail.stopAnimation) {
      setInitialFrame(customInitialFrame ?? 0);
    }
    setIsPlaying(!currentTrail.stopAnimation);

    // Handle delay, skip progress update if delay is not met
    const delay = currentTrail?.delayMs ?? defaultDelay;
    if (delayTimer < delay) {
      setDelayTimer((prev) => prev + ticker.deltaMS);
      return;
    }

    // Update progress (prioritize durationMs)
    let newProgress;
    if (currentTrail.durationMs) {
      newProgress = progress + (delta * 16.67) / currentTrail.durationMs; // Convert delta to milliseconds
    } else {
      const speed = currentTrail?.speed ?? defaultSpeed;
      newProgress = progress + delta * speed;
    }

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
        initialFrame={initialFrame}
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
