import "./App.css";
import { World } from "./components/World";
import { WorldProvider } from "./context/World/WorldContext";
import { useMediaQuery } from "usehooks-ts";

const worldBaseImgWidth = 4096;
const worldBaseImgHeight = 2671;

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1600px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const initialScale = isLargeScreen ? 1 : isMediumScreen ? 0.5 : 0.3;

  return (
    <WorldProvider
      initialScale={initialScale}
      width={worldBaseImgWidth}
      height={worldBaseImgHeight}
    >
      <World />
    </WorldProvider>
  );
}

export default App;
