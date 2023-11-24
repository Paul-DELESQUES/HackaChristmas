import { useEffect, useRef } from "react";
import "../styles/Welcome.scss";
import "../components/wScratchPad.min.js";
import { welcome } from "../assets/video";
import { texture } from "../assets/img";

function Welcome() {
  const scratchRef = useRef(null);

  useEffect(() => {
    if (scratchRef.current && window.$) {
      window.$(scratchRef.current).wScratchPad({
        size: 150,
        bg: welcome,
        fg: texture,
      });
    }
  }, []);

  return <section id="scratch" ref={scratchRef}></section>;
}

export default Welcome;
