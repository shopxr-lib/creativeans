import React, { PropsWithChildren, useState, useEffect } from "react";

type WorldContextType = {
  position: { x: number; y: number };
  scale: number;
  isDragging: boolean;
  handleMouseDown: (event: React.MouseEvent) => void;
  handleMouseMove: (event: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleTouchStart: (event: React.TouchEvent) => void;
  handleTouchMove: (event: React.TouchEvent) => void;
  handleTouchEnd: () => void;
};

export const WorldContext = React.createContext<WorldContextType | null>(null);

export const WorldProvider: React.FC<
  PropsWithChildren & { initialScale: number; width: number; height: number }
> = ({ children, initialScale, width, height }) => {
  const [position, setPosition] = useState({
    // Center at C-logo of building-c by default
    x: window.innerWidth / 2 - (960 - 100) * initialScale,
    y: window.innerHeight / 2 + 863 * initialScale,
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
        const scaledWidth = width * scale;
        const scaledHeight = height * scale;
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
          const scaledWidth = width * newScale;
          const scaledHeight = height * newScale;
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
    <WorldContext.Provider
      value={{
        position,
        scale,
        isDragging,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
};
