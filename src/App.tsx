import "./App.css";
import "@pixi/events";
import { WorldProvider } from "./context/World/WorldContext";
import { useMediaQuery } from "usehooks-ts";
import { SidebarProvider } from "./context/Sidebar/SidebarContext";
import { EventProvider } from "./context/Event/EventsContext";
import Loading from "./components/Loading";
import { lazy, Suspense, useEffect, useState } from "react";
import { Assets } from "pixi.js";

const World = lazy(() => import("./components/World/World"));

const worldBaseImgWidth = 4096;
const worldBaseImgHeight = 2671;

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1600px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const initialScale = isLargeScreen ? 1.2 : isMediumScreen ? 0.7 : 0.5;

  const { progress } = useLoadBundles(assetManifest);

  return (
    <EventProvider initialEnabled>
      <WorldProvider
        scale={initialScale}
        width={worldBaseImgWidth}
        height={worldBaseImgHeight}
      >
        <SidebarProvider>
          {progress < 100 && <Loading progress={progress} />}
          <Suspense fallback={<Loading progress={progress} />}>
            <World />
          </Suspense>
        </SidebarProvider>
      </WorldProvider>
    </EventProvider>
  );
}

const minDelayMs = 3000;

function useLoadBundles(manifest: AssetManifest) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      const startTime = Date.now(); // Start time for measuring load duration
      try {
        const bundleNames = manifest.bundles.map((bundle) => bundle.name);
        await Assets.loadBundle(bundleNames, (progress) => {
          setProgress(Math.round(progress * 100));
        });
      } catch (error) {
        console.error("Error loading assets: ", error);
      } finally {
        const loadDuration = Date.now() - startTime; // Calculate load duration
        const delay = Math.max(minDelayMs - loadDuration, 0); // Calculate delay needed

        if (delay > 0) {
          setProgress(99); // hold at 99% until delay is over
          await new Promise((resolve) => setTimeout(resolve, delay)); // Delay if needed
        }
        setProgress(100);
      }
    };

    loadAssets();
  }, [manifest.bundles]);

  return { progress };
}

type AssetManifest = {
  bundles: {
    name: string;
    assets: {
      alias: string;
      src: string;
    }[];
  }[];
};

// statically defined asset manifest to prioritize spritesheet assets
// import { sprite } from "./components/World/constants"; would load assets normally, instead of caching it into pixijs's Assets.
const assetManifest = {
  bundles: [
    {
      name: "loading",
      assets: [
        {
          alias: "loading",
          src: "spritesheet/preloaderHumans.png",
        },
      ],
    },
    {
      name: "world",
      assets: [
        {
          alias: "star-1",
          src: "spritesheet/star-1.png",
        },
        {
          alias: "star-2",
          src: "spritesheet/star-2.png",
        },
        {
          alias: "c-building-shadow",
          src: "/src/assets/images/Creativeans-C-House-Shadow.webp",
        },
        {
          alias: "c-building",
          src: "/src/assets/images/Creativeans-C-building.webp",
        },
        {
          alias: "human-4-shadow",
          src: "/src/assets/images/Creativeans-shadow-human-4.webp",
        },
        {
          alias: "human4",
          src: "spritesheet/human4.png",
        },
        {
          alias: "redbubble",
          src: "spritesheet/redbubble.png",
        },
        {
          alias: "purplebubble",
          src: "spritesheet/purplebubble.png",
        },
        {
          alias: "train",
          src: "/src/assets/images/Creativeans-train.webp",
        },
        {
          alias: "train-platform",
          src: "/src/assets/images/Creativeans-train-platform.webp",
        },
        {
          alias: "depot-shadow",
          src: "/src/assets/images/Creativeans-Depot-Shadow.webp",
        },
        {
          alias: "building1",
          src: "/src/assets/images/Creativeans-building1.webp",
        },
        {
          alias: "pipe",
          src: "/src/assets/images/Creativeans-pipes.webp",
        },
        {
          alias: "power-plant-shadow",
          src: "/src/assets/images/Creativeans-Power-Plant-Shadow.webp",
        },
        {
          alias: "building4",
          src: "/src/assets/images/Creativeans-building4.webp",
        },
        {
          alias: "creativeans-leaves",
          src: "spritesheet/creativeans-leaves.png",
        },
        {
          alias: "main-factory-shadow",
          src: "/src/assets/images/Creativeans-Main-Factory-Shadow.webp",
        },
        {
          alias: "building3",
          src: "/src/assets/images/Creativeans-building3.webp",
        },
        {
          alias: "bubble-2",
          src: "spritesheet/bubble-2.png",
        },
        {
          alias: "bubble-1",
          src: "spritesheet/bubble-1.png",
        },
        {
          alias: "human-2-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "human2",
          src: "spritesheet/human2.png",
        },
        {
          alias: "bridge-top",
          src: "/src/assets/images/Creativeans-bridge-top.webp",
        },
        {
          alias: "brain-factory-shadow",
          src: "/src/assets/images/Creativeans-Brain-Factory-Shadow.webp",
        },
        {
          alias: "building7",
          src: "/src/assets/images/Creativeans-building7.webp",
        },
        {
          alias: "brain",
          src: "/src/assets/images/Creativeans-brain.webp",
        },
        {
          alias: "bubble-3",
          src: "spritesheet/bubble-3.png",
        },
        {
          alias: "yellow-ball",
          src: "/src/assets/images/Creativeans-yellow-ball.webp",
        },
        {
          alias: "purple-ball-2",
          src: "/src/assets/images/Creativeans-purple-ball.webp",
        },
        {
          alias: "yellow-ball-2",
          src: "/src/assets/images/Creativeans-yellow-ball.webp",
        },
        {
          alias: "purple-ball",
          src: "/src/assets/images/Creativeans-purple-ball.webp",
        },
        {
          alias: "globe",
          src: "/src/assets/images/Creativeans-globe.webp",
        },
        {
          alias: "yellow-pins",
          src: "spritesheet/yellow-pins.png",
        },
        {
          alias: "blue-pins",
          src: "spritesheet/blue-pins.png",
        },
        {
          alias: "green-pins",
          src: "spritesheet/green-pins.png",
        },
        {
          alias: "train-strawberry-shadow",
          src: "/src/assets/images/Creativeans-Pink-Train-Strawberry-Shadow.webp",
        },
        {
          alias: "train-strawberry",
          src: "/src/assets/images/Creativeans-Train-Strawberry.webp",
        },
        {
          alias: "elevator",
          src: "spritesheet/elevator.png",
        },
        {
          alias: "train-chocolate",
          src: "/src/assets/images/Creativeans-Train-Chocolate.webp",
        },
        {
          alias: "fish-denison-1",
          src: "/src/assets/images/Creativeans-yellow-fish.webp",
        },
        {
          alias: "fish-denison-2",
          src: "/src/assets/images/Creativeans-pink-fish.webp",
        },
        {
          alias: "fish-denison-3",
          src: "/src/assets/images/Creativeans-blue-fish.webp",
        },
        {
          alias: "red-lollipop-1",
          src: "/src/assets/images/Creativeans-red-lollipop-top.webp",
        },
        {
          alias: "red-lollipop-2",
          src: "/src/assets/images/Creativeans-red-lollipop-top.webp",
        },
        {
          alias: "purple-lollipop-1",
          src: "/src/assets/images/Creativeans-purple-lollipop-top.webp",
        },
        {
          alias: "purple-lollipop-2",
          src: "/src/assets/images/Creativeans-purple-lollipop-top.webp",
        },
        {
          alias: "purple-lollipop-3",
          src: "/src/assets/images/Creativeans-purple-lollipop-top.webp",
        },
        {
          alias: "red-lollipop-3",
          src: "/src/assets/images/Creativeans-red-lollipop-top.webp",
        },
        {
          alias: "red-lollipop-4",
          src: "/src/assets/images/Creativeans-red-lollipop-top.webp",
        },
        {
          alias: "purple-lollipop-4",
          src: "/src/assets/images/Creativeans-purple-lollipop-top.webp",
        },
        {
          alias: "fish-orange",
          src: "/src/assets/images/Creativeans-orange-fish.webp",
        },
        {
          alias: "khairul",
          src: "spritesheet/khairul.png",
        },
        {
          alias: "human1",
          src: "spritesheet/human1.png",
        },
        {
          alias: "fish-orange-partial",
          src: "/src/assets/images/Creativeans-orange-fish-partial.webp",
        },
        {
          alias: "plant-pot-1",
          src: "/src/assets/images/Creativeans-plant-pot1.webp",
        },
        {
          alias: "plant-pot-2",
          src: "/src/assets/images/Creativeans-plant-pot2.webp",
        },
        {
          alias: "plant-pot-3",
          src: "/src/assets/images/Creativeans-plant-pot3.webp",
        },
        {
          alias: "spots-ball",
          src: "/src/assets/images/Creativeans-spots-ball.webp",
        },
        {
          alias: "stripes-ball",
          src: "/src/assets/images/Creativeans-stripes-ball.webp",
        },
        {
          alias: "tree-building-3",
          src: "/src/assets/images/Creativeans-tree.webp",
        },
        {
          alias: "fish-blue-german",
          src: "/src/assets/images/Creativeans-blue-german-fish.webp",
        },
        {
          alias: "train-hole-top-layer",
          src: "/src/assets/images/Creativeans-train-hole-top-layer.webp",
        },
        {
          alias: "shiba-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "shiba",
          src: "spritesheet/shiba.png",
        },
        {
          alias: "water-bridge-shadow",
          src: "/src/assets/images/Creativeans-water-bridge-shadow.webp",
        },
        {
          alias: "human-5-shadow",
          src: "/src/assets/images/Creativeans-shadow-human-5.webp",
        },
        {
          alias: "human5",
          src: "spritesheet/human5.png",
        },
        {
          alias: "otter1",
          src: "spritesheet/otter1.png",
        },
        {
          alias: "otter2",
          src: "spritesheet/otter2.png",
        },
        {
          alias: "otter3",
          src: "spritesheet/otter3.png",
        },
        {
          alias: "otter4",
          src: "spritesheet/otter4.png",
        },
        {
          alias: "human3a-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "human3a",
          src: "spritesheet/human3a.png",
        },
        {
          alias: "human4a-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "human4a",
          src: "spritesheet/human4a.png",
        },
        {
          alias: "human5a-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x3.png",
        },
        {
          alias: "human5a",
          src: "spritesheet/human5a.png",
        },
        {
          alias: "human8-shadow",
          src: "/src/assets/images/Creativeans-shadow-human-8.webp",
        },
        {
          alias: "human8",
          src: "spritesheet/human8.png",
        },
        {
          alias: "human25-shadow",
          src: "/src/assets/images/Creativeans-shadow-human-25.webp",
        },
        {
          alias: "human25",
          src: "spritesheet/human25.png",
        },
        {
          alias: "human19-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "human19",
          src: "spritesheet/human19.png",
        },
        {
          alias: "cotton-tree",
          src: "/src/assets/images/Creativeans-Cotton-Tree.webp",
        },
        {
          alias: "human20-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "human20",
          src: "spritesheet/human20.png",
        },
        {
          alias: "human21-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "human21",
          src: "spritesheet/human21.png",
        },
        {
          alias: "building6",
          src: "/src/assets/images/Creativeans-building6.webp",
        },
        {
          alias: "human-3-shadow",
          src: "/src/assets/images/Creativeans-shadow-generic-x5.png",
        },
        {
          alias: "human3",
          src: "spritesheet/human3.png",
        },
        {
          alias: "fish-angel-1",
          src: "/src/assets/images/Creativeans-angel-fish.webp",
        },
        {
          alias: "fish-angel-2",
          src: "/src/assets/images/Creativeans-angel-fish.webp",
        },
      ],
    },
  ],
};

Assets.init({ manifest: assetManifest });

export default App;
