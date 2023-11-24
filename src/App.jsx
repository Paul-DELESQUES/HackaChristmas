import "./styles/App.scss";
import Actions from "./components/Actions";
import ParallaxEffect from "./components/ParallaxEffect";
import Welcome from "./pages/Welcome";
import Room from "./pages/Room";
import Paralax from "./components/Paralax";
import Footer from "./components/Footer";
import Event from "./components/Event";

function App() {
  return (
    <>
    <Welcome />
    <Paralax />
    <ParallaxEffect />
    <Actions />
    <Room />
    <Event />
    <Footer />
    </>
  );
}

export default App;
