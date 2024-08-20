import React, { useState, useEffect } from "react";
import { Sprite, Stage } from "@pixi/react";
import WorldBaseImg from "../../assets/images/Creativeans-world-Base layer.webp";
import { sprites } from "./constants";

const World: React.FC = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.3);
  const [initialDistance, setInitialDistance] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setLastPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      const dx = event.clientX - lastPosition.x;
      const dy = event.clientY - lastPosition.y;
      setPosition((prevPosition) => {
        const newX = prevPosition.x + dx;
        const newY = prevPosition.y + dy;

        // Define boundaries
        const minX = window.innerWidth * 0.1;
        const maxX = window.innerWidth * 0.9;
        const minY = window.innerHeight * 0.1;
        const maxY = window.innerHeight * 0.9;

        return {
          x: Math.max(minX, Math.min(newX, maxX)),
          y: Math.max(minY, Math.min(newY, maxY)),
        };
      });
      setLastPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      // pinch to zoom
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      setInitialDistance(Math.sqrt(dx * dx + dy * dy));
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const scaleChange = distance / initialDistance;
      setScale((prevScale) =>
        Math.max(0.1, Math.min(prevScale * scaleChange, 2))
      );
      setInitialDistance(distance);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      options={{ backgroundColor: 0x10bb99 }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Sprite
        image={WorldBaseImg}
        anchor={0.5}
        x={position.x}
        y={position.y}
        scale={{ x: scale, y: scale }}
        pointerdown={handleMouseDown}
      />

      {sprites.map((sprite) => {
        return (
          <Sprite
            key={sprite.key}
            image={sprite.image}
            anchor={0.5}
            x={position.x + sprite.offset.x}
            y={position.y + sprite.offset.y}
            scale={{ x: scale, y: scale }}
          />
        );
      })}
    </Stage>
  );
};

export default World;
