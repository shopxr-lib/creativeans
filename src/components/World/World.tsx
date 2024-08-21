import React, { useState, useEffect } from "react";
import { Sprite, Stage } from "@pixi/react";
import WorldBaseImg from "../../assets/images/Creativeans-world-Base layer.webp";
import { sprites } from "./constants";

const initialScale = 0.3;
const worldBaseImgWidth = 4096;
const worldBaseImgHeight = 2671;

const World: React.FC = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(initialScale);
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

        // Calculate boundaries based on the scaled image dimensions
        const scaledWidth = worldBaseImgWidth * scale;
        const scaledHeight = worldBaseImgHeight * scale;
        const minX = window.innerWidth / 2 - scaledWidth / 2;
        const maxX = window.innerWidth / 2 + scaledWidth / 2;
        const minY = window.innerHeight / 2 - scaledHeight / 2;
        const maxY = window.innerHeight / 2 + scaledHeight / 2;

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
    if (event.touches.length === 1) {
      setIsDragging(true);
      setLastPosition({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      });
    } else if (event.touches.length === 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      setInitialDistance(Math.sqrt(dx * dx + dy * dy));
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (isDragging && event.touches.length === 1) {
      const dx = event.touches[0].clientX - lastPosition.x;
      const dy = event.touches[0].clientY - lastPosition.y;
      setPosition((prevPosition) => {
        const newX = prevPosition.x + dx;
        const newY = prevPosition.y + dy;

        // Define boundaries
        const minX = window.innerWidth * -4 * scale;
        const maxX = window.innerWidth * 6 * scale;
        const minY = window.innerHeight * -1 * scale;
        const maxY = window.innerHeight * 3 * scale;

        return {
          x: Math.max(minX, Math.min(maxX, newX)),
          y: Math.max(minY, Math.min(maxY, newY)),
        };
      });
      setLastPosition({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      });
    } else if (event.touches.length === 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const newDistance = Math.sqrt(dx * dx + dy * dy);
      const scaleChange = newDistance / initialDistance;

      const dampingFactor = 0.05; // Adjust this value to control the smoothness
      const adjustedScaleChange = 1 + (scaleChange - 1) * dampingFactor;

      const midpoint = {
        x: (event.touches[0].clientX + event.touches[1].clientX) / 2,
        y: (event.touches[0].clientY + event.touches[1].clientY) / 2,
      };

      setScale((prevScale) => {
        const newScale = Math.max(
          initialScale,
          Math.min(3, prevScale * adjustedScaleChange)
        );
        const scaleRatio = newScale / prevScale;

        setPosition((prevPosition) => {
          const newX = midpoint.x - (midpoint.x - prevPosition.x) * scaleRatio;
          const newY = midpoint.y - (midpoint.y - prevPosition.y) * scaleRatio;

          // Calculate boundaries based on the new scaled image dimensions
          const scaledWidth = worldBaseImgWidth * newScale;
          const scaledHeight = worldBaseImgHeight * newScale;
          const minX = window.innerWidth / 2 - scaledWidth / 2;
          const maxX = window.innerWidth / 2 + scaledWidth / 2;
          const minY = window.innerHeight / 2 - scaledHeight / 2;
          const maxY = window.innerHeight / 2 + scaledHeight / 2;

          return {
            x: Math.max(minX, Math.min(maxX, newX)),
            y: Math.max(minY, Math.min(maxY, newY)),
          };
        });

        return newScale;
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={{ backgroundColor: 0x10bb99 }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "none" }} // Prevent default touch actions
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
          const scaledOffset = {
            x: sprite.offset.x * scale,
            y: sprite.offset.y * scale,
          };
          const internalScale = {
            x: sprite.offset.scale?.x || 1,
            y: sprite.offset.scale?.y || 1,
          };

          const Component = sprite.component || Sprite;

          return (
            <Component
              key={sprite.key}
              image={sprite.image}
              anchor={0.5}
              x={position.x + scaledOffset.x}
              y={position.y + scaledOffset.y}
              scale={{ x: scale * internalScale.x, y: scale * internalScale.y }}
              rotation={sprite.rotation}
            />
          );
        })}
      </Stage>
    </div>
  );
};

export default World;
