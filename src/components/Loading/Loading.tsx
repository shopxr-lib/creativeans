import { AnimatedSprite, Stage } from "@pixi/react";
import { Assets, Texture } from "pixi.js";
import { useState, useEffect } from "react";
import DragIcon from "../../assets/images/drag-icon.gif";

const loaderSprite = "./spritesheet/preloaderHumans.json";

const width = 100;
const height = 100;

type Props = {
  progress: number;
};

const Loading: React.FC<Props> = ({ progress }) => {
  const [frames, setFrames] = useState<Texture[]>([]);

  useEffect(() => {
    Assets.load(loaderSprite).then((resource) => {
      setFrames(
        Object.keys(resource.data.frames).map((frame) => Texture.from(frame)),
      );
    });
  }, []);

  if (frames.length === 0) {
    return null;
  }

  return (
    <div className="fixed z-10 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-black/80 backdrop-blur-md">
      <Stage
        width={width}
        height={height}
        options={{
          backgroundAlpha: 0,
        }}
      >
        <AnimatedSprite
          textures={frames}
          isPlaying
          anchor={0.5}
          position={{
            x: width / 2,
            y: height / 2,
          }}
          animationSpeed={0.1}
          scale={0.1}
          alpha={0.8}
        />
      </Stage>
      {/* Progress bar */}
      <div className="h-2 w-64 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-white">
        Pan around & click on the buildings to explore!
      </p>
      <img src={DragIcon} alt="Drag Icon" className="h-10 w-10" />
    </div>
  );
};

export default Loading;
