import "./App.css";
import "@pixi/events";
import { WorldProvider } from "./context/World/WorldContext";
import { useMediaQuery } from "usehooks-ts";
import { SidebarProvider } from "./context/Sidebar/SidebarContext";
import { EventProvider } from "./context/Event/EventsContext";
import Loading from "./components/Loading";
import { lazy, Suspense, useEffect, useState } from "react";
import { Assets } from "pixi.js";
import { sprites } from "./components/World/constants";

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

const minDelayMs = 0;

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

const assetManifest = {
  bundles: [
    {
      name: "loading",
      assets: [
        { alias: "loaderSprite", src: "./spritesheet/preloaderHumans.png" },
      ],
    },
    {
      name: "world",
      // TODO: make this static, to defer the loading of the dynamic assets (e.g., Creativeans-building1.webp?import)
      assets: sprites.map((sprite) => {
        if (sprite.image) {
          return { alias: sprite.key, src: sprite.image };
        }
        return { alias: sprite.key, src: `spritesheet/${sprite.key}.png` };
      }),
    },
  ],
};

Assets.init({ manifest: assetManifest });

export default App;
