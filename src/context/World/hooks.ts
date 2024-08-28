import React from "react";
import { WorldContext } from "./WorldContext";

export const useWorld = () => {
  const context = React.useContext(WorldContext);
  if (!context) {
    throw new Error("useWorld must be used within a WorldProvider");
  }
  return context;
};
