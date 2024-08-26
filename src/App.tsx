import "./App.css";
import { World } from "./components/World";
import { WorldProvider } from "./context/World/WorldContext";

const initialScale = 0.5;
const worldBaseImgWidth = 4096;
const worldBaseImgHeight = 2671;

function App() {
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
