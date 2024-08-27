import { Sprite, useTick } from "@pixi/react";
import React, { useState } from "react";
import { useWorld } from "../../context/World/hooks";

const defaultSpeed = 0.005;
const defaultDelay = 0;

type Props = React.ComponentProps<typeof Sprite> & {
  trails?: {
    x: number;
    y: number;
    visible?: boolean;
    speed?: number;
    delayMs?: number;
    skipLinearInterpolation?: boolean;
  }[];
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

  return <Sprite {...props} x={position.x} y={position.y} alpha={opacity} />;
};

function calculateActualPosition(
  offset: { x: number; y: number },
  worldContext: { position: { x: number; y: number }; scale: number }
) {
  return {
    x: offset.x * worldContext.scale + worldContext.position.x,
    y: offset.y * worldContext.scale + worldContext.position.y,
  };
}

export default AnimatedSprite;
