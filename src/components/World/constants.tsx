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

type Sprite = {
  key: string;
  image: string;
  offset: { x: number; y: number; scale?: { x?: number; y?: number } };
  rotation?: number;
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
    offset: { x: 1483, y: -400 },
  },
  {
    key: "yellow-ball",
    image: YellowBallImg,
    offset: { x: 1017, y: 467 },
  },
  {
    key: "purple-ball",
    image: PurpleBallImg,
    offset: { x: 1143, y: 317 },
  },
  {
    key: "pipe",
    image: PipeImg,
    offset: { x: -1485, y: -210 },
  },
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
    key: "fish-blue-german",
    image: FishBlueGerman,
    offset: { x: -433, y: -967 },
  },
  {
    key: "fish-angel-1",
    image: FishAngel,
    offset: { x: -700, y: 833 },
  },
  {
    key: "fish-angel-2",
    image: FishAngel,
    offset: { x: -333, y: 1033 },
  },
  {
    key: "red-lollipop-1",
    image: RedLolliPopImg,
    offset: { x: 340, y: -1160, scale: { x: 0.5, y: 0.5 } },
  },
  {
    key: "red-lollipop-2",
    image: RedLolliPopImg,
    offset: { x: 340, y: -1040, scale: { x: 0.18, y: 0.18 } },
  },
  {
    key: "purple-lollipop-1",
    image: PurpleLolliPopImg,
    offset: { x: 270, y: -1070, scale: { x: 0.25, y: 0.25 } },
  },
  {
    key: "purple-lollipop-2",
    image: PurpleLolliPopImg,
    offset: { x: 420, y: -1065, scale: { x: 0.25, y: 0.25 } },
  },

  {
    key: "purple-lollipop-3",
    image: PurpleLolliPopImg,
    offset: { x: -1534, y: -135, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "red-lollipop-3",
    image: RedLolliPopImg,
    offset: { x: -1480, y: -74, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "red-lollipop-4",
    image: RedLolliPopImg,
    offset: { x: 954, y: -180, scale: { x: 0.4, y: 0.4 } },
  },
  {
    key: "purple-lollipop-4",
    image: PurpleLolliPopImg,
    offset: { x: 1000, y: -117, scale: { x: 0.2, y: 0.2 } },
  },
  {
    key: "fish-orange",
    image: FishOrange,
    offset: { x: 1797, y: -364 },
  },
  {
    key: "plant-pot-1",
    image: PlantPot1,
    offset: { x: -1140, y: -150 },
  },
  {
    key: "plant-pot-2",
    image: PlantPot2,
    offset: { x: -1145, y: -23 },
  },
  {
    key: "plant-pot-3",
    image: PlantPot3,
    offset: { x: -950, y: 95 },
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
