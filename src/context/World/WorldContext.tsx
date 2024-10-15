import React, { useState, useEffect } from "react";

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

type WorldProviderProps = {
  scale: number;
  width: number;
  height: number;
  children: React.ReactNode;
};

export const WorldProvider: React.FC<WorldProviderProps> = ({
  children,
  scale,
  width,
  height,
}) => {
  const [position, setPosition] = useState({
    // Center building3 by default
    x: window.innerWidth / 2 + (653 + 100) * scale,
    y: window.innerHeight / 2 + (410 + 450) * scale,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

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
        const minX = window.innerWidth / 2 - scaledWidth / 3;
        const maxX = window.innerWidth / 2 + scaledWidth / 3;
        const minY = window.innerHeight / 2 - scaledHeight / 2.5;
        const maxY = window.innerHeight / 2 + scaledHeight / 2.5;

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
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (isDragging && event.touches.length === 1) {
      const dx = event.touches[0].clientX - lastPosition.x;
      const dy = event.touches[0].clientY - lastPosition.y;
      setPosition((prevPosition) => {
        const newX = prevPosition.x + dx;
        const newY = prevPosition.y + dy;

        // Calculate boundaries based on the scaled image dimensions
        const scaledWidth = width * scale;
        const scaledHeight = height * scale;
        const minX = window.innerWidth / 2 - scaledWidth / 2;
        const maxX = window.innerWidth / 2 + scaledWidth / 2;
        const minY = window.innerHeight / 2 - scaledHeight / 2.5;
        const maxY = window.innerHeight / 2 + scaledHeight / 2.5;

        return {
          x: Math.max(minX, Math.min(newX, maxX)),
          y: Math.max(minY, Math.min(newY, maxY)),
        };
      });
      setLastPosition({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
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
        scale, // hardcoded for now, since we decided not to implement zooming
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
