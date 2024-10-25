import "./App.css";
import "@pixi/events";
import { WorldProvider } from "./context/World/WorldContext";
import { useMediaQuery } from "usehooks-ts";
import { SidebarProvider } from "./context/Sidebar/SidebarContext";
import { EventProvider } from "./context/Event/EventsContext";
import Loading from "./components/Loading";
import { lazy, Suspense, useEffect, useState } from "react";

const World = lazy(() => import("./components/World/World"));

const worldBaseImgWidth = 4096;
const worldBaseImgHeight = 2671;
const loadingDuration = 5000;

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1600px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const initialScale = isLargeScreen ? 1.2 : isMediumScreen ? 0.7 : 0.5;

  const [progress, setProgress] = useState(0);

  // Progress bar animation
  useEffect(() => {
    let startTime: number;

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / loadingDuration) * 100, 100);
      setProgress(newProgress);

      if (elapsed < loadingDuration) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [setProgress]);

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

export default App;
