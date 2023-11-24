import { useEffect } from "react";
import "../styles/_parallax.scss";
import Card from "./Card";

const ParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const snow2 = document.getElementById("snow2");
      const tree = document.getElementById("tree");
      const tree2 = document.getElementById("tree2");
      const tree3 = document.getElementById("tree3");
      const santa2 = document.getElementById("santa2");

      let value = window.scrollY;
      snow2.style.bottom = value * 0.9 + "%";
      tree.style.right = value * 0.3 + "px";
      tree2.style.right = value * 0.1 + "px";
      tree3.style.right = value * -0.1 + "px";
      santa2.style.left = value * 0.4 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="snowflakes">
        <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
        <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
        <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
        <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
        <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
        <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
        <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
        <i></i>
      </div>
      <div className="parallax-home">
        <img src="./src/assets/snow.png" alt="" id="snow2" className="snow2" />
        <img src="./src/assets/tree2.png" alt="" id="tree" className="tree" />
        <img src="./src/assets/tree2.png" alt="" id="tree2" className="tree2" />
        <img src="./src/assets/tree2.png" alt="" id="tree3" className="tree3" />
      </div>
      <Card />
    </section>
  );
};

export default ParallaxEffect;
