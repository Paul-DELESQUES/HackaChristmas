import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Tree = () => {
  const treeChristmas = useGLTF("./tree/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={-0.5} groundColor="black" />
      <primitive
        object={treeChristmas.scene}
        scale={4}
        position={[-5, -6, -1.8]}
        rotation={[-0.04, 0.2, 0.1]}
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

const TreeCanvas = (isVisible) => {
  return (
    <div className={`tree-ctn ${isVisible ? "visible" : ""}`}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Tree />
          <ambientLight />
        </Suspense>

        <Preload />
      </Canvas>
    </div>
  );
};

export default TreeCanvas;
