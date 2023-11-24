import { useEffect } from "react";
import "../styles/_parallax.scss";

const ParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const snow = document.getElementById("snow");
      const tree = document.getElementById("tree");
      const tree2 = document.getElementById("tree2");
      const tree3 = document.getElementById("tree3");
      const santa2 = document.getElementById("santa2");

      let value = window.scrollY;
      snow.style.bottom = value * 0.9 + "%";
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
    <div>
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

      <section className="parallax-home">
        <img src="./src/assets/snow.png" alt="" id="snow" className="snow" />
        <img src="./src/assets/tree2.png" alt="" id="tree" className="tree" />
        <img src="./src/assets/tree2.png" alt="" id="tree2" className="tree2" />
        <img src="./src/assets/tree2.png" alt="" id="tree3" className="tree3" />
        <img
          src="./src/assets/santa.png"
          alt=""
          id="santa2"
          className="santa2"
        />
      </section>
    </div>
  );
};

export default ParallaxEffect;
