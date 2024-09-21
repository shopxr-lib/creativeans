import { Sprite } from "@pixi/react";
import BridgeTop from "../../assets/images/Creativeans-bridge-top.webp";
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
import TrainHoleTopLayer from "../../assets/images/Creativeans-train-hole-top-layer.webp";
import YellowFishImg from "../../assets/images/Creativeans-yellow-fish.webp";
import PinkFishImg from "../../assets/images/Creativeans-pink-fish.webp";
import BlueFishImg from "../../assets/images/Creativeans-blue-fish.webp";
import FishBlueGerman from "../../assets/images/Creativeans-blue-german-fish.webp";
import FishAngel from "../../assets/images/Creativeans-angel-fish.webp";
import PipeImg from "../../assets/images/Creativeans-pipes.webp";
import RedLolliPopImg from "../../assets/images/Creativeans-red-lollipop-top.webp";
import PurpleLolliPopImg from "../../assets/images/Creativeans-purple-lollipop-top.webp";
import FishOrange from "../../assets/images/Creativeans-orange-fish.webp";
import FishOrangePartial from "../../assets/images/Creativeans-orange-fish-partial.webp";
import PlantPot1 from "../../assets/images/Creativeans-plant-pot1.webp";
import PlantPot2 from "../../assets/images/Creativeans-plant-pot2.webp";
import PlantPot3 from "../../assets/images/Creativeans-plant-pot3.webp";
import Otter from "../../assets/images/Creativeans-otter.webp";
import WaterBridgeShadow from "../../assets/images/Creativeans-water-bridge-shadow.webp";
import SpotsBallImg from "../../assets/images/Creativeans-spots-ball.webp";
import StripesBallImg from "../../assets/images/Creativeans-stripes-ball.webp";
import Lollipop from "../Lollipop/LolliPop";
import AnimatedSprite from "../AnimatedSprite/AnimatedSprite";
import CustomSprite from "../CustomSprite";

export type Sprite = {
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
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          iframeUrl:
            "https://www.creativeans.com/contact-objects/?section=section_object_4",
        }}
      />
    ),
  },
  {
    key: "human-4",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human4.json"
        animationSpeed={0.1}
        scale={0.3}
      />
    ),
    offset: { x: 760, y: -870 },
  },
  {
    key: "red-bubble",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/redbubble.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 1118, y: -430 },
  },
  {
    key: "purple-bubble",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/purplebubble.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 966, y: -294 },
  },
  {
    key: "train",
    image: TrainImg,
    offset: { x: -1427, y: 230 },
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          iframeUrl:
            "https://www.creativeans.com/contact-objects/?section=section_object_7",
        }}
      />
    ),
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
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          iframeUrl:
            "https://www.creativeans.com/contact-objects/?section=section_object_2",
        }}
      />
    ),
  },
  {
    key: "pipe",
    image: PipeImg,
    offset: { x: -1485, y: -210 },
  },
  {
    key: "building4",
    image: Building4Img,
    offset: { x: 0, y: -767 },
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          iframeUrl:
            "https://www.creativeans.com/contact-objects/?section=section_object_3",
        }}
      />
    ),
  },
  {
    key: "building3",
    image: Building3Img,
    offset: { x: -653, y: -410 },
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          iframeUrl:
            "https://www.creativeans.com/contact-objects/?section=section_object_1",
        }}
      />
    ),
  },
  {
    key: "human-2",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human2.json"
        animationSpeed={0.07}
        trails={[
          {
            x: 300,
            y: 192,
            speed: 0.003,
          },
          {
            x: 56,
            y: 0,
            speed: 0.003,
          },
          {
            x: -196,
            y: -90,
            speed: 0.005,
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
            delayMs: 2000,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: -310, y: -170, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "bridge-top",
    image: BridgeTop,
    offset: { x: 30, y: 70 },
  },
  {
    key: "building6",
    image: Building6Img,
    offset: { x: 593, y: 267 },
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          iframeUrl:
            "https://www.creativeans.com/contact-objects/?section=section_object_6",
        }}
      />
    ),
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
        enableGlowEffect
        metadata={{
          iframeUrl:
            "https://www.creativeans.com/contact-objects/?section=section_object_5",
        }}
      />
    ),
    offset: { x: 1483, y: -400 },
  },
  // A
  {
    key: "yellow-ball",
    image: YellowBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          // A
          {
            x: 1574,
            y: -25,
            visible: true,
            speed: 0.01,
          },
          // A'
          {
            x: 1666,
            y: 32,
            visible: true,
          },
          // B
          {
            x: 1544,
            y: 102,
            visible: false,
            speed: 0.004,
          },
          // C
          {
            x: 1240,
            y: 248,
            visible: true,
          },
          // C'
          {
            x: 1050,
            y: 380,
            visible: true,
            speed: 0.05,
          },
          // D
          {
            x: 1032,
            y: 460,
            visible: true,
            delayMs: 5000,
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  // B
  {
    key: "purple-ball-2",
    image: PurpleBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: 1544,
            y: 102,
            visible: false,
            speed: 0.004,
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
            delayMs: 5000,
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
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  // C
  {
    key: "yellow-ball-2",
    image: YellowBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
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
            delayMs: 5000,
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
            x: 1544,
            y: 102,
            visible: false,
            speed: 0.004,
          },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
  },
  // D
  {
    key: "purple-ball",
    image: PurpleBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: 1032,
            y: 460,
            visible: true,
            delayMs: 5000,
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
            x: 1544,
            y: 102,
            visible: false,
            speed: 0.004,
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
    offset: { x: 1240, y: 248 },
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
    key: "elevator",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/elevator.json"
        animationSpeed={0.1}
        spriteAnimationIntervals={[1000, 8900]}
        initialSpriteAnimationPlaying
      />
    ),
    offset: { x: 285, y: 1040 },
  },
  {
    key: "train-chocolate",
    image: TrainChocolateImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          // stop at elevator
          {
            x: 373,
            y: 1167,
            delayMs: 1000,
            speed: 0.003,
          },
          {
            x: -1964,
            y: 2517,
            speed: 1,
            skipLinearInterpolation: true,
          },
          { x: 1473, y: 532 },
        ]}
      />
    ),
    offset: { x: 1473, y: 532 },
  },
  {
    key: "fish-denison-1",
    image: YellowFishImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -900, y: 333 },
          { x: -900, y: 303 },
        ]}
      />
    ),
    offset: { x: -900, y: 333 },
  },
  {
    key: "fish-denison-2",
    image: PinkFishImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -1017, y: 267, speed: 0.003 },
          { x: -1017, y: 237, speed: 0.003 },
        ]}
      />
    ),
    offset: { x: -1017, y: 267 },
  },
  {
    key: "fish-denison-3",
    image: BlueFishImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: 617, y: 700, speed: 0.004 },
          { x: 617, y: 670, speed: 0.004 },
        ]}
      />
    ),
    offset: { x: 617, y: 700 },
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
          { x: 3529, y: 636, visible: true, speed: 0.0003 },
          {
            x: -1840,
            y: -2464,
            visible: true,
            speed: 1,
          },
          {
            x: -1840,
            y: -2464,
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
    key: "human-1",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human1.json"
        animationSpeed={0.07}
        trails={[
          { x: 3459, y: 636, visible: true, speed: 0.0003 },
          {
            x: -1910,
            y: -2464,
            visible: true,
            speed: 1,
          },
          {
            x: -1910,
            y: -2464,
            visible: false, // fade-out
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: 1727, y: -364, scale: { x: 0.7, y: 0.7 } },
  },
  {
    key: "fish-orange-partial",
    image: FishOrangePartial,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: 3529, y: 636, visible: true, speed: 0.0003 },
          {
            x: -1840,
            y: -2464,
            visible: true,
            speed: 1,
          },
          {
            x: -1840,
            y: -2464,
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
          { x: -1020, y: 76, visible: true, speed: 0.003 },
          { x: -1279, y: -74, visible: true, speed: 0.003 },
          {
            x: -1063,
            y: -199,
            visible: false,
          },
          {
            x: -976,
            y: -249,
            visible: false,
            skipLinearInterpolation: true,
            speed: 1,
          },
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
          {
            x: -1265,
            y: -89,
            speed: 0.003,
          },
          {
            x: -1048,
            y: -214,
            visible: false,
          },
          {
            x: -961,
            y: -264,
            visible: false,
            skipLinearInterpolation: true,
            speed: 1,
          },
          { x: -1014, y: 56, speed: 0.003 },
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
          {
            x: -1063,
            y: -199,
            visible: false,
          },
          {
            x: -976,
            y: -249,
            skipLinearInterpolation: true,
            visible: false,
            speed: 1,
          },
          { x: -1020, y: 76, speed: 0.003 },
          { x: -1279, y: -74, speed: 0.003 },
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
  {
    key: "spots-ball",
    image: SpotsBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -870, y: -312, speed: 0.01 },
          { x: -900, y: -308, speed: 0.01 },
          { x: -956, y: -340, speed: 0.01 },
          { x: -950, y: -375, speed: 0.003 },
          { x: -846, y: -435, speed: 0.01 },
          { x: -855, y: -453, speed: 0.003 },
          { x: -1062, y: -573, speed: 0.01 },
          { x: -1065, y: -610, speed: 0.003 },
          { x: -891, y: -710, speed: 0.003 },
          { x: -860, y: -700, speed: 1, skipLinearInterpolation: true },
          {
            x: -860,
            y: -700,
            speed: 1,
            visible: false,
            skipLinearInterpolation: true,
            delayMs: 1000,
          },
        ]}
      />
    ),
    offset: { x: -874, y: -308 },
  },
  {
    key: "stripes-ball",
    image: StripesBallImg,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          { x: -846, y: -435, speed: 0.01 },
          { x: -855, y: -453, speed: 0.003 },
          { x: -1062, y: -573, speed: 0.01 },
          { x: -1065, y: -610, speed: 0.003 },
          { x: -891, y: -710, speed: 0.003 },
          { x: -860, y: -700, speed: 1, skipLinearInterpolation: true },
          {
            x: -860,
            y: -700,
            speed: 1,
            visible: false,
            skipLinearInterpolation: true,
            delayMs: 1000,
          },
          { x: -870, y: -312, speed: 0.01 },
          { x: -900, y: -308, speed: 0.01 },
          { x: -956, y: -340, speed: 0.01 },
          { x: -950, y: -375, speed: 0.003 },
        ]}
      />
    ),
    offset: { x: -874, y: -308 },
  },
  {
    key: "tree-building-3",
    image: TreeImg,
    offset: { x: -1040, y: -450 },
  },
  {
    key: "fish-blue-german",
    image: FishBlueGerman,
    component: (props) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: -3550,
            y: 833,
            visible: true,
            speed: 0.0003,
          },
          {
            x: 1818,
            y: -2267,
            visible: true,
            speed: 1,
            skipLinearInterpolation: true,
          },
          {
            x: 1818,
            y: -2267,
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
    key: "train-hole-top-layer",
    image: TrainHoleTopLayer,
    offset: { x: 1692, y: 427 },
  },
  {
    key: "shiba",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/shiba.json"
        scale={0.2}
        animationSpeed={0.07}
      />
    ),
    offset: { x: 26, y: 980, scale: { x: 0.8, y: 0.8 } },
  },

  {
    key: "water-bridge-shadow",
    image: WaterBridgeShadow,
    offset: { x: 305, y: -305 },
  },

  {
    key: "leaf",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/leaf.json"
        animationSpeed={0.01}
      />
    ),
    offset: { x: 15, y: -1200 },
  },
  {
    key: "human-3",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human3.json"
        animationSpeed={0.07}
        scale={0.3}
      />
    ),
    offset: { x: 336, y: 622 },
  },
  {
    key: "human-5",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human5.json"
        animationSpeed={0.07}
        scale={0.2}
      />
    ),
    offset: { x: 100, y: 770 },
  },
  {
    key: "fish-angel-1",
    image: FishAngel,
    component: (props) => (
      <AnimatedSprite
        {...props}
        scale={{ x: 0.3, y: 0.3 }}
        trails={[
          {
            x: -3456,
            y: -1367,
            visible: true,
            speed: 0.0003,
          },
          {
            x: 3731,
            y: 2783,
            visible: true,
            speed: 1,
          },
          {
            x: 3731,
            y: 2783,
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
        scale={{ x: 0.4, y: 0.4 }}
        trails={[
          { x: -2764, y: -967, speed: 0.0003 },
          {
            x: 3731,
            y: 2783,
            visible: true,
            speed: 1,
          },
          {
            x: 3731,
            y: 2783,
            visible: false,
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: -333, y: 1433 },
  },
];

const starSpriteSheetChoices = [
  "./spritesheet/starOne.json",
  "./spritesheet/starTwo.json",
];

export const generateRandomStars = (
  maxNumber: number,
  worldScale: number,
): Sprite[] => {
  const stars: Sprite[] = [];

  const minX = -1200;
  const maxX = 1200;
  const minY = -1000;
  const maxY = 800;

  for (let i = 0; i < maxNumber; i++) {
    const randomSpriteSheetIdx = Math.floor(Math.random() * 2);
    const spritesheet = starSpriteSheetChoices[randomSpriteSheetIdx];
    const randomPoint = generateRandomPointWithinBoundingBox(
      minX,
      maxX,
      minY,
      maxY,
    );

    // random animationSpeed from 0.07 to 0.1
    const randomAnimationSpeed = Math.random() * (0.1 - 0.07) + 0.07;

    stars.push({
      key: `star-${i}`,
      image: "",
      component: (props) => (
        <AnimatedSprite
          {...props}
          spritesheet={spritesheet}
          animationSpeed={randomAnimationSpeed}
          scale={0.2}
        />
      ),
      offset: {
        x: randomPoint.x * (1 / worldScale),
        y: randomPoint.y * (1 / worldScale),
      },
    });
  }

  return stars;
};

function generateRandomPointWithinBoundingBox(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
) {
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;
  return { x, y };
}

export const stars: Sprite[] = generateRandomStars(200, 0.5);
