import "./styles/App.scss";
import ParallaxEffect from "./components/ParallaxEffect";
import Welcome from "./pages/Welcome";
import Room from "./pages/Room";

function App() {
  return (
    <>
      <Welcome />
      <ParallaxEffect />
      <Room />
    </>
  );
}

export default App;
