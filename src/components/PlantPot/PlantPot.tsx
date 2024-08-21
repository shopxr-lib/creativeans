import { Sprite, useTick } from "@pixi/react";
import React, { useState } from "react";
import { useWorld } from "../../context/World/hooks";

type Props = React.ComponentProps<typeof Sprite> & {
  trails?: { x: number; y: number }[];
};

const PlantPot: React.FC<Props> = (props) => {
  const [position, setPosition] = useState({
    x: props.x || 0,
    y: props.y || 0,
  });
  const worldContext = useWorld();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useTick((delta) => {
    if (!props.trails || props.trails.length < 2) {
      return;
    }

    const nextIndex = (currentIndex + 1) % props.trails.length;
    const currentPoint = props.trails[currentIndex];
    const nextPoint = props.trails[nextIndex];

    // Linear interpolation
    const newX =
      (currentPoint.x + (nextPoint.x - currentPoint.x) * progress) *
        worldContext.scale +
      worldContext.position.x;
    const newY =
      (currentPoint.y + (nextPoint.y - currentPoint.y) * progress) *
        worldContext.scale +
      worldContext.position.y;

    setPosition({ x: newX, y: newY });

    // Update progress
    const newProgress = progress + delta * 0.01; // Adjust speed by changing the multiplier
    if (newProgress >= 1) {
      setProgress(0);
      setCurrentIndex(nextIndex);
    } else {
      setProgress(newProgress);
    }
  });

  return <Sprite {...props} x={position.x} y={position.y} />;
};

export default PlantPot;
