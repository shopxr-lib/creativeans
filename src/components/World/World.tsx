import React from "react";
import { Sprite as PixiSprite } from "@pixi/react";
import WorldBaseImg from "../../assets/images/Creativeans-world-Base layer.webp";
import { sprites, stars, type Sprite } from "./constants";
import { Stage } from "../../context/World/ContextBridge";
import { useWorld } from "../../context/World/hooks";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../../context/Sidebar/hooks";

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

  const sidebarContext = useSidebar();

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
    <div className="relative m-0 h-screen w-screen overflow-hidden p-0">
      <Sidebar />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          touchAction: "none", // Prevent default touch actions
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {renderSprite(stars)}
        <PixiSprite
          image={WorldBaseImg}
          anchor={0.5}
          x={position.x}
          y={position.y}
          scale={{ x: scale, y: scale }}
          pointerdown={handleMouseDown}
          interactive
          onclick={sidebarContext.closeSidebar}
        />
        {renderSprite(sprites)}
      </Stage>
    </div>
  );
};

export default World;
