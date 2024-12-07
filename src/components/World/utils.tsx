import { Trail } from "../../lib/types";
import { AnimatedSprite } from "../AnimatedSprite";

export type Sprite = {
  key: string;
  image: string;
  offset: { x: number; y: number; scale?: { x?: number; y?: number } };
  rotation?: number;
  component?: React.ComponentType;
};

type TrailInfo = {
  trail: Trail;
  final?: boolean;
};

const humanTrainsSpritesInfo = [
  {
    key: "human30",
    spritesheet: "./spritesheet/human30.json",
    props: { scale: { x: 1, y: 1 } },
  },
  {
    key: "human33",
    spritesheet: "./spritesheet/human33.json",
    props: { scale: { x: 1, y: 1 } },
  },
  {
    key: "human32",
    spritesheet: "./spritesheet/human32.json",
    props: { scale: { x: 1, y: 1 } },
  },
  {
    key: "human34",
    spritesheet: "./spritesheet/human34.json",
    props: { scale: { x: 1, y: 1 } },
  },
  {
    key: "human31",
    spritesheet: "./spritesheet/human31.json",
    props: { scale: { x: 1, y: 1 } },
  },
  {
    key: "human28",
    spritesheet: "./spritesheet/human28.json",
    props: { scale: { x: 0.9, y: 0.9 } },
  },
];

const humanTrainTrails: TrailInfo[] = [
  // human 30
  {
    trail: { x: -450, y: 500, stopAnimation: true, delayMs: 2000, speed: 1 },
  },
  {
    trail: { x: -450, y: 500, durationMs: 2000 },
  },
  {
    trail: { x: -475, y: 485, visible: true, speed: 1 },
  },
  {
    trail: {
      x: -475,
      y: 485,
      delayMs: 1000,
      visible: false,
      speed: 1,
      skipLinearInterpolation: true,
    },
    final: true,
  },

  // human28
  {
    trail: { x: -320, y: 575, stopAnimation: true, delayMs: 2000, speed: 1 },
  },
  {
    trail: { x: -320, y: 575, durationMs: 2000 },
  },
  // human31
  {
    trail: { x: -346, y: 560, stopAnimation: true, delayMs: 2000, speed: 1 },
  },
  {
    trail: { x: -346, y: 560, durationMs: 2000 },
  },
  // human34
  {
    trail: { x: -372, y: 545, stopAnimation: true, delayMs: 2000, speed: 1 },
  },
  {
    trail: { x: -372, y: 545, durationMs: 2000 },
  },
  // human32
  {
    trail: { x: -398, y: 530, stopAnimation: true, delayMs: 2000, speed: 1 },
  },
  {
    trail: { x: -398, y: 530, durationMs: 2000 },
  },
  // human33
  {
    trail: { x: -424, y: 515, stopAnimation: true, delayMs: 2000, speed: 1 },
  },
  {
    trail: { x: -424, y: 515, durationMs: 2000 },
  },
];

export function createHumanTrainAnimatedSprites() {
  const humanAnimatedSprites: Sprite[] = [];

  // i: 0 -> [], [0:humanTrainTrails.length-1]
  // i: 1 -> [humanTrainTrails.length-2:humanTrainTrails.length-1], [0:humanTrainTrails.length-3]
  // i: 2 -> [humanTrainTrails.length-4:humanTrainTrails.length-1], [0:humanTrainTrails.length-5]
  // i: 3 -> [humanTrainTrails.length-6:humanTrainTrails.length-1], [0:humanTrainTrails.length-7]
  // i: 4 -> [humanTrainTrails.length-8:humanTrainTrails.length-1], [0:humanTrainTrails.length-9]
  // i: 5 -> [humanTrainTrails.length-10:humanTrainTrails.length-1], [0:humanTrainTrails.length-11]

  for (let i = 0; i < humanTrainsSpritesInfo.length; i++) {
    const trails: Trail[] = [];

    const left: Trail[] = [];

    const leftStart = humanTrainTrails.length - 2 * i;
    for (let j = leftStart; j < humanTrainTrails.length; j++) {
      left.push(humanTrainTrails[j].trail);
    }

    const right: Trail[] = [];
    const rightEnd = humanTrainTrails.length - 2 * i - 1;
    for (let j = 0; j <= rightEnd; j++) {
      right.push(humanTrainTrails[j].trail);
    }

    trails.push(...left);
    trails.push(...right);

    humanAnimatedSprites.push({
      key: humanTrainsSpritesInfo[i].key,
      image: "",
      component: (props) => (
        <AnimatedSprite
          {...props}
          spritesheet={humanTrainsSpritesInfo[i].spritesheet}
          animationSpeed={0.07}
          trails={trails}
        />
      ),
      offset: { x: 0, y: 0, scale: humanTrainsSpritesInfo[i].props.scale },
    });
  }

  return humanAnimatedSprites;
}

const walkingBridgeHumanSpritesInfo = [
  {
    key: "walking-human1",
    spritesheet: "./spritesheet/walking-human1.json",
    props: {
      scale: { x: 1, y: 1 },
      spriteProps: {
        customInitialFrame: 1,
      },
    },
    startingTrail: 0,
  },

  {
    key: "human27",
    spritesheet: "./spritesheet/human27.json",
    props: {
      scale: { x: 1, y: 1 },
      spriteProps: {
        customInitialFrame: 0,
      },
    },
    startingTrail: 4,
  },
  {
    key: "human29",
    spritesheet: "./spritesheet/human29.json",
    props: {
      scale: { x: 1, y: 1 },
      spriteProps: {
        customInitialFrame: 0,
      },
    },
    startingTrail: 7,
  },
];

const walkingBridgeHumanTrails: Trail[] = [
  // walking-human1,
  {
    x: 300,
    y: 192,
    durationMs: 3000,
  },
  {
    x: 220,
    y: 120,
    delayMs: 3000,
    stopAnimation: true,
  },
  {
    x: 220,
    y: 120,
    stopAnimation: false,
    durationMs: 6000,
  },
  {
    x: 56,
    y: 0,
    durationMs: 6000,
  },
  // human27
  {
    x: -130,
    y: -70,
    delayMs: 3000,
    stopAnimation: true,
  },
  {
    x: -130,
    y: -70,
    durationMs: 3000,
  },
  {
    x: -196,
    y: -90,
    durationMs: 3000,
  },
  // human29,
  {
    x: -260,
    y: -120,
    stopAnimation: true,
    delayMs: 3000,
  },
  {
    x: -260,
    y: -120,
    durationMs: 3000,
  },
  {
    x: -310,
    y: -170,
    speed: 1,
  },
  {
    x: -310,
    y: -170,
    visible: false,
    delayMs: 3000,
    skipLinearInterpolation: true,
  },
];

export function createWalkingBridgeHumanAnimatedSprites() {
  const walkingBridgeHumanAnimatedSprites: Sprite[] = [];

  for (let i = 0; i < walkingBridgeHumanSpritesInfo.length; i++) {
    const left: Trail[] = [];

    const leftStart = walkingBridgeHumanSpritesInfo[i].startingTrail;
    for (let j = leftStart; j < walkingBridgeHumanTrails.length; j++) {
      left.push(walkingBridgeHumanTrails[j]);
    }

    const right: Trail[] = [];
    const rightEnd = leftStart - 1;
    for (let j = 0; j <= rightEnd; j++) {
      right.push(walkingBridgeHumanTrails[j]);
    }

    const trails: Trail[] = [];
    trails.push(...left);
    trails.push(...right);

    walkingBridgeHumanAnimatedSprites.push({
      key: walkingBridgeHumanSpritesInfo[i].key,
      image: "",
      component: (props) => (
        <AnimatedSprite
          {...props}
          spritesheet={walkingBridgeHumanSpritesInfo[i].spritesheet}
          animationSpeed={0.07}
          trails={trails}
          {...walkingBridgeHumanSpritesInfo[i].props.spriteProps}
        />
      ),
      offset: {
        x: 0,
        y: 0,
        scale: walkingBridgeHumanSpritesInfo[i].props.scale,
      },
    });
  }

  return walkingBridgeHumanAnimatedSprites;
}
