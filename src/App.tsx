import "./App.css";
import "@pixi/events";
import { World } from "./components/World";
import { WorldProvider } from "./context/World/WorldContext";
import { useMediaQuery } from "usehooks-ts";
import { SidebarProvider } from "./context/Sidebar/SidebarContext";
import { EventProvider } from "./context/Event/EventsContext";

const worldBaseImgWidth = 4096;
const worldBaseImgHeight = 2671;

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1600px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const initialScale = isLargeScreen ? 1.2 : isMediumScreen ? 0.7 : 0.5;

  return (
    <EventProvider initialEnabled>
      <WorldProvider
        scale={initialScale}
        width={worldBaseImgWidth}
        height={worldBaseImgHeight}
      >
        <SidebarProvider>
          <World />
        </SidebarProvider>
      </WorldProvider>
    </EventProvider>
  );
}

export default App;
