import "../styles/Paralax.scss";
import Moon from "../assets/moon.png";
import Mountain1 from "../assets/mountain1.png";
import Mountain2 from "../assets/mountain2.png";
import Mountain3 from "../assets/mountain3.png";
import Trineo from "../assets/trineo-santa.png";
import PineTree from "../assets/pine-tree.png";
import Village from "../assets/village.png";
import Snow from "../assets/snow.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Paralax() {
  return (
    <section className="parallax-ctn">
      <Parallax pages={2}>
        <section className="parallax" id="home">
          <h1 className="title">Merry Christmas</h1>
          <ParallaxLayer offset={0} speed={-2}>
            <img className="moon" src={Moon} alt="moon" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-8}>
            <img className="mountain3" src={Mountain3} alt="mountain3" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-8}>
            <img className="mountain2" src={Mountain2} alt="mountain2" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-10}>
            <img className="pine" src={PineTree} alt="pine-tree" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-3}>
            <img className="village" src={Village} alt="village" />
          </ParallaxLayer>
          <img id="trineo" className="trineo" src={Trineo} alt="trineo" />
          <img id="snow" className="snow" src={Snow} alt="snow" />
          <img
            id="mountain1"
            className="mountain1"
            src={Mountain1}
            alt="mountain1"
          />
        </section>
      </Parallax>
    </section>
  );
}

export default Paralax;
