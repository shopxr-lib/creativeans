import BridgeTop from "../../assets/images/Creativeans-bridge-top.webp";
import BrainImg from "../../assets/images/Creativeans-brain.webp";
import BrainShadowImg from "../../assets/images/Creativeans-Brain-Factory-Shadow.webp";
import CBuildingImg from "../../assets/images/Creativeans-C-building.webp";
import CBuildingShadowImg from "../../assets/images/Creativeans-C-House-Shadow.webp";
import TrainImg from "../../assets/images/Creativeans-train.webp";
import TrainPlatformImg from "../../assets/images/Creativeans-train-platform.webp";
import Building1Img from "../../assets/images/Creativeans-building1.webp";
import DepotShadow from "../../assets/images/Creativeans-Depot-Shadow.webp";
import Building3Img from "../../assets/images/Creativeans-building3.webp";
import MainFactoryShadowImg from "../../assets/images/Creativeans-Main-Factory-Shadow.webp";
import Building4Img from "../../assets/images/Creativeans-building4.webp";
import PowerPlantShadowImg from "../../assets/images/Creativeans-Power-Plant-Shadow.webp";
import Building6Img from "../../assets/images/Creativeans-building6.webp";
import Building7Img from "../../assets/images/Creativeans-building7.webp";
import YellowBallImg from "../../assets/images/Creativeans-yellow-ball.webp";
import PurpleBallImg from "../../assets/images/Creativeans-purple-ball.webp";
import TreeImg from "../../assets/images/Creativeans-tree.webp";
import GlobeImg from "../../assets/images/Creativeans-globe.webp";
import TrainStrawberryImg from "../../assets/images/Creativeans-Train-Strawberry.webp";
import TrainStrawberryShadowImg from "../../assets/images/Creativeans-Pink-Train-Strawberry-Shadow.webp";
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
import WaterBridgeShadow from "../../assets/images/Creativeans-water-bridge-shadow.webp";
import SpotsBallImg from "../../assets/images/Creativeans-spots-ball.webp";
import StripesBallImg from "../../assets/images/Creativeans-stripes-ball.webp";
import Lollipop from "../Lollipop/LolliPop";
import CottonTree from "../../assets/images/Creativeans-Cotton-Tree.webp";
import Human8Shadow from "../../assets/images/Creativeans-shadow-human-8.webp";
import Human25Shadow from "../../assets/images/Creativeans-shadow-human-25.webp";
import Human4Shadow from "../../assets/images/Creativeans-shadow-human-4.webp";
import HumanGenericShadow from "../../assets/images/Creativeans-shadow-generic-x5.png";
import HumanGenericShadowLight from "../../assets/images/Creativeans-shadow-generic-x3.png";
import RockImg from "../../assets/images/rock.png";
import AnimatedSprite from "../AnimatedSprite/AnimatedSprite";
import CustomSprite from "../CustomSprite";
import {
  createHumanTrainAnimatedSprites,
  createWalkingBridgeHumanAnimatedSprites,
  type Sprite,
} from "./utils";

export const sprites: Sprite[] = [
  {
    key: "c-building-shadow",
    image: CBuildingShadowImg,
    offset: { x: 960, y: -310 },
  },
  {
    key: "c-building",
    image: CBuildingImg,
    offset: { x: 960, y: -583 },
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          objectKey: "building-c",
        }}
      />
    ),
  },
  {
    key: "human-4-shadow",
    image: Human4Shadow,
    offset: { x: 765, y: -853, scale: { x: 0.05, y: 0.05 } },
  },
  {
    key: "human4",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human4.json"
        animationSpeed={0.1}
      />
    ),
    offset: { x: 760, y: -870, scale: { x: 0.5, y: 0.5 } },
  },
  {
    key: "redbubble",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/redbubble.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 1116, y: -426 },
  },
  {
    key: "purplebubble",
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
          objectKey: "train",
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
    key: "depot-shadow",
    image: DepotShadow,
    offset: { x: -1620, y: -420 },
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
          objectKey: "building-1",
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
    key: "power-plant-shadow",
    image: PowerPlantShadowImg,
    offset: { x: 0, y: -580 },
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
          objectKey: "building-4",
        }}
      />
    ),
  },
  {
    key: "creativeans-leaves",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/creativeans-leaves.json"
        animationSpeed={0.05}
      />
    ),
    offset: { x: 23, y: -1185 },
  },
  {
    key: "main-factory-shadow",
    image: MainFactoryShadowImg,
    offset: { x: -680, y: -330 },
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
          objectKey: "building-3",
        }}
      />
    ),
  },
  {
    key: "bubble-2",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/bubble-2.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -586, y: -445 },
  },
  {
    key: "bubble-1",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/bubble-1.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -670, y: -775 },
  },
  ...createWalkingBridgeHumanAnimatedSprites(),
  {
    key: "bridge-top",
    image: BridgeTop,
    offset: { x: 32, y: 70 },
  },
  {
    key: "brain-factory-shadow",
    image: BrainShadowImg,
    offset: { x: 1370, y: 20 },
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
          objectKey: "brain",
          onClickType: "openSidebar",
        }}
      />
    ),
    offset: { x: 1483, y: -400 },
  },
  {
    key: "bubble-3",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/bubble-3.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 1150, y: 7 },
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
    component: (props) => (
      <CustomSprite
        {...props}
        enableGlowEffect
        metadata={{
          objectKey: "globe",
        }}
      />
    ),
  },
  {
    key: "yellow-pins",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/yellow-pins.json"
        animationSpeed={0.03}
      />
    ),
    offset: { x: -815, y: -1055, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "blue-pins",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/blue-pins.json"
        animationSpeed={0.03}
      />
    ),
    offset: { x: -805, y: -1038, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "green-pins",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/green-pins.json"
        animationSpeed={0.03}
      />
    ),
    offset: { x: -850, y: -1105, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "train-strawberry-shadow",
    image: TrainStrawberryShadowImg,
    offset: { x: -380, y: 510 },
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
        initialSpriteAnimationPlaying
        trails={[
          { x: 285, y: 1040, delayMs: 1000, speed: 1 },
          {
            x: 285,
            y: 1040,
            stopAnimation: true,
            delayMs: 10000,
            speed: 1,
          },
        ]}
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
            durationMs: 7000,
          },
          {
            x: -1964,
            y: 2517,
            speed: 1,
            skipLinearInterpolation: true,
          },
          { x: 1473, y: 532, durationMs: 3000 },
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
    key: "human9",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human9.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 1280, y: -910 },
  },
  {
    key: "human11",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human11.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 1310, y: -915 },
  },
  {
    key: "human7",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human7.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 1340, y: -810, scale: { x: 0.8, y: 0.8 } },
  },
  {
    key: "human10",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human10.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 1375, y: -815, scale: { x: 0.8, y: 0.8 } },
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
    key: "human1",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human1.json"
        animationSpeed={0.07}
        trails={[
          { x: 3432, y: 626, visible: true, speed: 0.0003 },
          {
            x: -1937,
            y: -2474,
            visible: true,
            speed: 1,
          },
          {
            x: -1937,
            y: -2474,
            visible: false, // fade-out
            speed: 1,
            skipLinearInterpolation: true,
          },
        ]}
      />
    ),
    offset: { x: 1700, y: -374, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "khairul",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/khairul.json"
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
    offset: { x: 1727, y: -364, scale: { x: 0.5, y: 0.5 } },
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
          { x: -985, y: 65, visible: true, speed: 0.003 },
          { x: -1227, y: -75, visible: true, speed: 0.003 },
          {
            x: -1010,
            y: -200,
            visible: false,
          },
          {
            x: -924,
            y: -250,
            visible: false,
            skipLinearInterpolation: true,
            speed: 1,
          },
        ]}
      />
    ),
    offset: { x: -985, y: 65 },
  },
  {
    key: "plant-pot-2",
    image: PlantPot2,
    component: ({ ...props }) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: -1222,
            y: -84,
            speed: 0.003,
          },
          {
            x: -1005,
            y: -209,
            visible: false,
          },
          {
            x: -919,
            y: -259,
            visible: false,
            skipLinearInterpolation: true,
            speed: 1,
          },
          { x: -980, y: 56, speed: 0.003 },
        ]}
      />
    ),
    offset: { x: -980, y: 56 },
  },
  {
    key: "plant-pot-3",
    image: PlantPot3,
    component: ({ ...props }) => (
      <AnimatedSprite
        {...props}
        trails={[
          {
            x: -1010,
            y: -200,
            visible: false,
          },
          {
            x: -924,
            y: -250,
            visible: false,
            skipLinearInterpolation: true,
            speed: 1,
          },
          { x: -985, y: 65, visible: true, speed: 0.003 },
          { x: -1227, y: -75, visible: true, speed: 0.003 },
        ]}
      />
    ),
    offset: { x: 0, y: 0 },
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
    key: "shiba-shadow",
    image: HumanGenericShadow,
    offset: { x: 40, y: 1030, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "shiba",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/shiba.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 30, y: 1010, scale: { x: 0.3, y: 0.3 } },
  },

  {
    key: "water-bridge-shadow",
    image: WaterBridgeShadow,
    offset: { x: 305, y: -305 },
  },
  {
    key: "otter1",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/otter1.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -254, y: 270, scale: { x: 0.3, y: 0.3 } },
  },
  {
    key: "otter2",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/otter2.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -186, y: 148, scale: { x: 0.5, y: 0.5 } },
  },
  {
    key: "otter3",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/otter3.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 244, y: -90, scale: { x: 0.5, y: 0.5 } },
  },
  {
    key: "otter4",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/otter4.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 182, y: -156, scale: { x: 0.3, y: 0.3 } },
  },
  {
    key: "human3a-shadow",
    image: HumanGenericShadow,
    offset: { x: -600, y: -153, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "human3a",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human3a.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -600, y: -180, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "human4a-shadow",
    image: HumanGenericShadow,
    offset: { x: -565, y: -151, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "human4a",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human4a.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -570, y: -180, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "human5a-shadow",
    image: HumanGenericShadowLight,
    offset: { x: -1560, y: -718, scale: { x: 0.25, y: 0.25 } },
  },
  {
    key: "human5a",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human5a.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -1560, y: -760, scale: { x: 0.3, y: 0.3 } },
  },
  {
    key: "human8-shadow",
    image: Human8Shadow,
    offset: { x: -1505, y: -690, scale: { x: 0.04, y: 0.04 } },
  },
  {
    key: "human8",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human8.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -1500, y: -705, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "human25-shadow",
    image: Human25Shadow,
    offset: { x: 150, y: 300, scale: { x: 0.05, y: 0.05 } },
  },
  {
    key: "human25",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human25.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 110, y: 260, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "human19-shadow",
    image: HumanGenericShadow,
    offset: { x: 70, y: 328, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "human19",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human19.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 80, y: 250, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "cotton-tree",
    image: CottonTree,
    offset: { x: -50, y: 286 },
  },
  {
    key: "human20-shadow",
    image: HumanGenericShadow,
    offset: { x: 330, y: 745, scale: { x: 0.22, y: 0.22 } },
  },
  {
    key: "human20",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human20.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 330, y: 720, scale: { x: 0.26, y: 0.26 } },
  },
  {
    key: "human21-shadow",
    image: HumanGenericShadow,
    offset: { x: 380, y: 782, scale: { x: 0.26, y: 0.26 } },
  },
  {
    key: "human21",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human21.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 380, y: 750, scale: { x: 0.3125, y: 0.3125 } },
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
          objectKey: "building-6",
        }}
      />
    ),
  },
  {
    key: "fish-angel-1",
    image: FishAngel,
    component: (props) => (
      <AnimatedSprite
        {...props}
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
    offset: { x: -700, y: 833, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "fish-angel-2",
    image: FishAngel,
    component: (props) => (
      <AnimatedSprite
        {...props}
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
    offset: { x: -333, y: 1433, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "kenneth",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/kenneth.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -410, y: -880 },
  },
  {
    key: "rock",
    image: RockImg,
    offset: { x: -430, y: -800, scale: { x: 1, y: 1 } },
  },
  {
    key: "mentis",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/mentis.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -410, y: -810 },
  },
  {
    key: "beetle",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/beetle.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -450, y: -810 },
  },
  {
    key: "human22",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human22.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -360, y: -800, scale: { x: 1.25, y: 1.25 } },
  },
  {
    key: "human23",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human23.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -300, y: -810, scale: { x: 1.25, y: 1.25 } },
  },
  {
    key: "human24",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human24.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -340, y: -870, scale: { x: 1, y: 1 } },
  },
  {
    key: "human6-1",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human6-1.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -1360, y: -400 },
  },
  {
    key: "human13",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human13.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 600, y: 80, scale: { x: 1, y: 1 } },
  },
  {
    key: "human14",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human14.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 450, y: 186, scale: { x: 1, y: 1 } },
  },
  {
    key: "human15",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human15.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 490, y: 180, scale: { x: 1, y: 1 } },
  },
  {
    key: "human16",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/human16.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: 380, y: 236, scale: { x: 1, y: 1 } },
  },
  {
    key: "yulia",
    image: "",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/yulia.json"
        animationSpeed={0.07}
      />
    ),
    offset: { x: -800, y: -50, scale: { x: 1, y: 1 } },
  },
  ...createHumanTrainAnimatedSprites(),
  {
    key: "cny-coins-1",
    image: "spritesheet/cny-coins.png",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/cny-coins.json"
        animationSpeed={0.7}
        enableGlowEffect
        metadata={{
          objectKey: "cnyform1",
          onClickType: "openParentPopup",
        }}
      />
    ),
    offset: { x: -390, y: -80, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "cny-coins-2",
    image: "spritesheet/cny-coins.png",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/cny-coins.json"
        animationSpeed={0.7}
        enableGlowEffect
        metadata={{
          objectKey: "cnyform2",
          onClickType: "openParentPopup",
        }}
      />
    ),
    offset: { x: -1290, y: 100, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "cny-coins-3",
    image: "spritesheet/cny-coins.png",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/cny-coins.json"
        animationSpeed={0.7}
        enableGlowEffect
        metadata={{
          objectKey: "cnyform3",
          onClickType: "openParentPopup",
        }}
      />
    ),
    offset: { x: 0, y: 700, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "cny-coins-4",
    image: "spritesheet/cny-coins.png",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/cny-coins.json"
        animationSpeed={0.7}
        enableGlowEffect
        metadata={{
          objectKey: "cnyform4",
          onClickType: "openParentPopup",
        }}
      />
    ),
    offset: { x: 392, y: -835, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "cny-coins-5",
    image: "spritesheet/cny-coins.png",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/cny-coins.json"
        animationSpeed={0.7}
        enableGlowEffect
        metadata={{
          objectKey: "cnyform5",
          onClickType: "openParentPopup",
        }}
      />
    ),
    offset: { x: 1810, y: 0, scale: { x: 0.6, y: 0.6 } },
  },
  {
    key: "cny-coins-6",
    image: "spritesheet/cny-coins.png",
    component: (props) => (
      <AnimatedSprite
        {...props}
        spritesheet="./spritesheet/cny-coins.json"
        animationSpeed={0.7}
        enableGlowEffect
        metadata={{
          objectKey: "cnyform6",
          onClickType: "openParentPopup",
        }}
      />
    ),
    offset: { x: 921, y: -657, scale: { x: 0.6, y: 0.6 } },
  },
];

const starSpriteSheetChoices = [
  "./spritesheet/star-1.json",
  "./spritesheet/star-2.json",
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
          scale={0.03}
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
