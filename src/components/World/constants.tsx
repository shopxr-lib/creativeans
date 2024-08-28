import BrainImg from "../../assets/images/Creativeans-brain.webp";
import CBuildingImg from "../../assets/images/Creativeans-C-building.webp";
import TrainImg from "../../assets/images/Creativeans-train.webp";
import TrainPlatformImg from "../../assets/images/Creativeans-train-platform.webp";
import Building1Img from "../../assets/images/Creativeans-building1.webp";
import Building3Img from "../../assets/images/Creativeans-building3.webp";
import Building4Img from "../../assets/images/Creativeans-building4.webp";
import Building6Img from "../../assets/images/Creativeans-building6.webp";
import Building7Img from "../../assets/images/Creativeans-building7.webp";
import YellowBallImg from "../../assets/images/Creativeans-yellow-ball.webp";
import PurpleBallImg from "../../assets/images/Creativeans-purple-ball.webp";
import TreeImg from "../../assets/images/Creativeans-tree.webp";
import GlobeImg from "../../assets/images/Creativeans-globe.webp";
import TrainStrawberryImg from "../../assets/images/Creativeans-Train-Strawberry.webp";
import TrainChocolateImg from "../../assets/images/Creativeans-Train-Chocolate.webp";
import FishDenisonImg from "../../assets/images/Creativeans-Fish-Denison-Barp.webp";
import FishBlueGerman from "../../assets/images/Creativeans-blue-german-fish.webp";
import FishAngel from "../../assets/images/Creativeans-angel-fish.webp";
import PipeImg from "../../assets/images/Creativeans-pipes.webp";
import RedLolliPopImg from "../../assets/images/Creativeans-red-lollipop-top.webp";
import PurpleLolliPopImg from "../../assets/images/Creativeans-purple-lollipop-top.webp";
import FishOrange from "../../assets/images/Creativeans-orange-fish.webp";
import PlantPot1 from "../../assets/images/Creativeans-plant-pot1.webp";
import PlantPot2 from "../../assets/images/Creativeans-plant-pot2.webp";
import PlantPot3 from "../../assets/images/Creativeans-plant-pot3.webp";
import Otter from "../../assets/images/Creativeans-otter.webp";
import Lollipop from "../Lollipop/LolliPop";
import AnimatedSprite from "../AnimatedSprite/ AnimatedSprite";

type Sprite = {
  key: string;
  image: string;
  offset: { x: number; y: number; scale?: { x?: number; y?: number } };
  rotation?: number;
  component?: React.ComponentType;
};

export const sprites: Sprite[] = [
  {
    key: "c-building",
    image: CBuildingImg,
    offset: { x: 960, y: -583 },
  },
  {
    key: "train",
    image: TrainImg,
    offset: { x: -1427, y: 230 },
  },
  {
    key: "train-platform",
    image: TrainPlatformImg,
    offset: { x: -1427, y: 230 },
  },
  {
    key: "building1",
    image: Building1Img,
    offset: { x: -1680, y: -620 },
  },
  {
    key: "pipe",
    image: PipeImg,
    offset: { x: -1485, y: -210 },
  },
  {
    key: "fish-blue-german",
    image: FishBlueGerman,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: -2424,
            y: 183,
            visible: true,
            speed: 0.001,
          },
          {
            x: 259,
            y: -1367,
            visible: true,
            speed: 1,
            skipLinearInterpolation: true,
          },
          {
            x: 259,
            y: -1367,
            visible: false, // fade out
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: -433, y: -967 },
  },
  {
    key: "building4",
    image: Building4Img,
    offset: { x: 0, y: -767 },
  },
  {
    key: "building3",
    image: Building3Img,
    offset: { x: -653, y: -410 },
  },
  {
    key: "building6",
    image: Building6Img,
    offset: { x: 593, y: 267 },
  },
  {
    key: "building7",
    image: Building7Img,
    offset: { x: 1313, y: 57 },
  },
  {
    key: "brain",
    image: BrainImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: 1483, y: -400, visible: true, speed: 0.01 },
          { x: 1483, y: -350, visible: true, speed: 0.01 },
        ]}
      />
    ),
    offset: { x: 1483, y: -400 },
  },
  {
    key: "yellow-ball",
    image: YellowBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: 1032,
            y: 460,
            visible: true,
            delayMs: 15000,
            speed: 1,
            skipLinearInterpolation: true,
          },
          {
            x: 1574,
            y: -25,
            visible: true,
            speed: 0.01,
          },
          {
            x: 1666,
            y: 32,
            visible: true,
          },
          {
            x: 1530,
            y: 125,
            visible: false,
            speed: 0.003,
          },
          {
            x: 1240,
            y: 248,
            visible: true,
          },
          {
            x: 1050,
            y: 380,
            visible: true,
            speed: 0.05,
          },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  {
    key: "purple-ball",
    image: PurpleBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: 1574,
            y: -25,
            visible: true,
            speed: 0.01,
          },
          {
            x: 1666,
            y: 32,
            visible: true,
          },
          {
            x: 1530,
            y: 125,
            visible: false,
            speed: 0.003,
          },
          {
            x: 1240,
            y: 248,
            visible: true,
          },
          {
            x: 1050,
            y: 380,
            visible: true,
            speed: 0.05,
          },
          {
            x: 1032,
            y: 460,
            visible: true,
            delayMs: 15000,
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  // {
  //   key: "pipe",
  //   image: PipeImg,
  //   offset: { x: -1485, y: -210 },
  // },
  // near building 3
  {
    key: "tree-building-3",
    image: TreeImg,
    offset: { x: -1040, y: -450 },
  },
  {
    key: "globe",
    image: GlobeImg,
    offset: { x: -750, y: -1033 },
  },
  {
    key: "train-strawberry",
    image: TrainStrawberryImg,
    offset: { x: -367, y: 473 },
  },
  {
    key: "train-chocolate",
    image: TrainChocolateImg,
    offset: { x: 893, y: 867 },
  },
  {
    key: "fish-denison-1",
    image: FishDenisonImg,
    offset: { x: -900, y: 333 },
  },
  {
    key: "fish-denison-2",
    image: FishDenisonImg,
    offset: { x: -1017, y: 267 },
  },
  {
    key: "fish-denison-3",
    image: FishDenisonImg,
    offset: { x: 617, y: 700 },
  },
  {
    key: "fish-angel-1",
    image: FishAngel,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: -2865,
            y: -217,
            visible: true,
            speed: 0.001,
          },
          {
            x: 1032,
            y: 2033,
            visible: true,
            speed: 1,
          },
          {
            x: 1032,
            y: 2033,
            visible: false,
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: -700, y: 833 },
  },
  {
    key: "fish-angel-2",
    image: FishAngel,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -2065, y: 433, speed: 0.001 },
          { x: 1400, y: 2433, speed: 1, visible: true },
          {
            x: 1400,
            y: 2433,
            speed: 1,
            visible: false,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: -333, y: 1433 },
  },
  {
    key: "red-lollipop-1",
    image: RedLolliPopImg,
    component: Lollipop,
    offset: { x: 340, y: -1160, scale: { x: 0.5, y: 0.5 } },
  },
  {
    key: "red-lollipop-2",
    component: Lollipop,
    image: RedLolliPopImg,
    offset: { x: 340, y: -1040, scale: { x: 0.18, y: 0.18 } },
  },
  {
    key: "purple-lollipop-1",
    component: Lollipop,
    image: PurpleLolliPopImg,
    offset: { x: 270, y: -1070, scale: { x: 0.25, y: 0.25 } },
  },
  {
    key: "purple-lollipop-2",
    component: Lollipop,
    image: PurpleLolliPopImg,
    offset: { x: 420, y: -1065, scale: { x: 0.25, y: 0.25 } },
  },

  {
    key: "purple-lollipop-3",
    component: Lollipop,
    image: PurpleLolliPopImg,
    offset: { x: -1534, y: -135, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "red-lollipop-3",
    component: Lollipop,
    image: RedLolliPopImg,
    offset: { x: -1480, y: -74, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "red-lollipop-4",
    component: Lollipop,
    image: RedLolliPopImg,
    offset: { x: 954, y: -180, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "purple-lollipop-4",
    component: Lollipop,
    image: PurpleLolliPopImg,
    offset: { x: 1000, y: -117, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "fish-orange",
    image: FishOrange,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: 2316, y: -64, visible: true, speed: 0.001 },
          {
            x: -368,
            y: -1614,
            visible: true,
            speed: 1,
          },
          {
            x: -368,
            y: -1614,
            visible: false, // fade-out
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: 1797, y: -364 },
  },
  {
    key: "plant-pot-1",
    image: PlantPot1,
    component: ({ ...props }) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -1020, y: 76, visible: true },
          { x: -1276, y: -80, visible: true },
          { x: -1072, y: -196, visible: false },
          { x: -1020, y: -224, visible: false },
          { x: -744, y: -374, visible: false },
          { x: -480, y: -180, visible: false },
          { x: -948, y: 104, visible: false },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  {
    key: "plant-pot-2",
    image: PlantPot2,
    component: ({ ...props }) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -948, y: 104, visible: false },
          { x: -1010, y: 70, visible: true },
          { x: -1276, y: -80, visible: true },
          { x: -1072, y: -196, visible: false },
          { x: -1020, y: -224, visible: false },
          { x: -744, y: -374, visible: false },
          { x: -480, y: -180, visible: false },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  {
    key: "plant-pot-3",
    image: PlantPot3,
    component: ({ ...props }) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -480, y: -180, visible: false },
          { x: -948, y: 104, visible: false },
          { x: -1020, y: 76, visible: true },
          { x: -1276, y: -80, visible: true },
          { x: -1072, y: -196, visible: false },
          { x: -1020, y: -224, visible: false },
          { x: -744, y: -374, visible: false },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  {
    key: "otter-1",
    image: Otter,
    offset: { x: -254, y: 270 },
  },
  {
    key: "otter-2",
    image: Otter,
    offset: { x: 270, y: -107, scale: { x: -1 } },
  },
];
