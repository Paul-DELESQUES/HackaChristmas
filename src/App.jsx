import "./styles/App.scss";
import Actions from "./components/Actions";
import ParallaxEffect from "./components/ParallaxEffect";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
    <Welcome />
    <ParallaxEffect />
    <Actions />
    </>
  );
}

export default App;
