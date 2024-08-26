import { Sprite, useTick } from "@pixi/react";
import React, { useState } from "react";
import { useWorld } from "../../context/World/hooks";

type Props = React.ComponentProps<typeof Sprite> & {
  trails?: { x: number; y: number; visible?: boolean }[];
};

const PlantPot: React.FC<Props> = (props) => {
  const worldContext = useWorld();
  const [position, setPosition] = useState({
    x: props.x || 0,
    y: props.y || 0,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useTick((delta) => {
    if (!props.trails || props.trails.length < 2) {
      return;
    }

    const nextIndex = (currentIndex + 1) % props.trails.length;
    const currentPoint = calculateActualPosition(props.trails[currentIndex], {
      position: {
        x: worldContext.position.x,
        y: worldContext.position.y,
      },
      scale: worldContext.scale,
    });
    const nextPoint = calculateActualPosition(props.trails[nextIndex], {
      position: {
        x: worldContext.position.x,
        y: worldContext.position.y,
      },
      scale: worldContext.scale,
    });

    // Linear interpolation
    const newX = currentPoint.x + (nextPoint.x - currentPoint.x) * progress;
    const newY = currentPoint.y + (nextPoint.y - currentPoint.y) * progress;

    setPosition({ x: newX, y: newY });

    // Update opacity based on visibility
    if (props.trails[currentIndex].visible === false) {
      setOpacity((prev) => Math.max(0, prev - delta * 0.05)); // Fade out
    } else {
      setOpacity((prev) => Math.min(1, prev + delta * 0.05)); // Fade in
    }

    // Update progress
    const newProgress = progress + delta * 0.005; // Adjust speed by changing the multiplier
    if (newProgress >= 1) {
      setProgress(0);
      setCurrentIndex(nextIndex);
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

export default PlantPot;
