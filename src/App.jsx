import "./styles/App.scss";
import Actions from "./components/Actions";
import ParallaxEffect from "./components/ParallaxEffect";
import Welcome from "./pages/Welcome";
import Room from "./pages/Room";

function App() {
  return (
    <>
    <Welcome />
    <ParallaxEffect />
    <Actions />
    <Room />
    </>
  );
}

export default App;
