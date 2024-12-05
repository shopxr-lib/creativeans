export type Trail = {
  x: number;
  y: number;
  visible?: boolean;
  speed?: number;
  delayMs?: number;
  skipLinearInterpolation?: boolean;
  durationMs?: number;
  stopAnimation?: boolean;
};
