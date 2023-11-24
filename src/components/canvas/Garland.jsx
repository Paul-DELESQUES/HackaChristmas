import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Garlands = () => {
  const garland = useGLTF("./gingerbread_snowglobe_garland/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={-0.5} groundColor="black" />
      <primitive
        object={garland.scene}
        scale={20}
        position={[-30, -13, 5]}
        rotation={[-0.06, -2.2, 0]}
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

const GarlandCanvas = () => {
  return (
    <div className="garland-ctn">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Garlands />
          <ambientLight />
        </Suspense>

        <Preload />
      </Canvas>
    </div>
  );
};

export default GarlandCanvas;
