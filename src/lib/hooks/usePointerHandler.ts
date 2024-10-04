import { FederatedEventHandler } from "@pixi/events";
import { useRef } from "react";

const thresholdDistance = 5;

export const usePointerHandler = ({
  handleClick,
  onPointerDown,
  onPointerUp,
}: {
  handleClick?: () => void;
  onPointerUp?: () => void;
  onPointerDown?: () => void;
}) => {
  const startPos = useRef({ x: 0, y: 0 });

  const onpointerdown: FederatedEventHandler = (event) => {
    startPos.current = { x: event.clientX, y: event.clientY };
    onPointerDown?.();
  };

  const onpointerup: FederatedEventHandler = (event) => {
    const endPos = { x: event.clientX, y: event.clientY };
    const distance = Math.sqrt(
      Math.pow(endPos.x - startPos.current.x, 2) +
        Math.pow(endPos.y - startPos.current.y, 2),
    );

    const isClicking = distance < thresholdDistance;
    if (isClicking) {
      handleClick?.();
    } else {
      onPointerUp?.();
    }
  };

  return { onpointerup, onpointerdown };
};
