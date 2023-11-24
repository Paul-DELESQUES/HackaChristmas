import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Santa = () => {
  const santaChristmas = useGLTF("./santa/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={-0.5} groundColor="black" />
      <primitive
        object={santaChristmas.scene}
        scale={5}
        position={[-25, -9, -1.5]}
        rotation={[-0.02, 1.8, 0]}
      />
      <spotLight
        position={[-40, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={15} />
    </mesh>
  );
};

const SantaCanvas = () => {
  return (
    <div className="santa-ctn">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* <OrbitControls autoRotate /> */}
          <Santa />
          <ambientLight />
        </Suspense>

        <Preload />
      </Canvas>
    </div>
  );
};

export default SantaCanvas;
