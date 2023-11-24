import "./styles/App.scss";
import Actions from "./components/Actions";
import ParallaxEffect from "./components/ParallaxEffect";
import Welcome from "./pages/Welcome";
import Card from "./components/Card";
import Room from "./pages/Room";

function App() {
  return (
    <>
      <Welcome />
      <Card />
      <Welcome />
      <ParallaxEffect />
      <Actions />
      <Room />
    </>
  );
}

export default App;
