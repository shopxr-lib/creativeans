import React from "react";
import { Sprite as PixiSprite } from "@pixi/react";
import WorldBaseImg from "../../assets/images/Creativeans-world-Base layer.webp";
import { sprites, stars, type Sprite } from "./constants";
import { Stage } from "../../context/World/ContextBridge";
import { useWorld } from "../../context/World/hooks";

const World: React.FC = () => {
  const {
    position,
    scale,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useWorld();

  const renderSprite = (sprite: Sprite[]) => {
    return sprite.map((sprite) => {
      const scaledOffset = {
        x: sprite.offset.x * scale,
        y: sprite.offset.y * scale,
      };
      const internalScale = {
        x: sprite.offset.scale?.x || 1,
        y: sprite.offset.scale?.y || 1,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Component: React.ComponentProps<any> =
        sprite.component || PixiSprite;

      return (
        <Component
          key={sprite.key}
          image={sprite.image}
          anchor={0.5}
          x={position.x + scaledOffset.x}
          y={position.y + scaledOffset.y}
          scale={{ x: scale * internalScale.x, y: scale * internalScale.y }}
          rotation={sprite.rotation || 0}
        />
      );
    });
  };

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
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "none" }} // Prevent default touch actions
      >
        {renderSprite(stars)}
        <PixiSprite
          image={WorldBaseImg}
          anchor={0.5}
          x={position.x}
          y={position.y}
          scale={{ x: scale, y: scale }}
          pointerdown={handleMouseDown}
        />
        {renderSprite(sprites)}
      </Stage>
    </div>
  );
};

export default World;
