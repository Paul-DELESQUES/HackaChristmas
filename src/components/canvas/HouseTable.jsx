import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Tables = () => {
  const table = useGLTF("./table/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={-0.5} groundColor="black" />
      <primitive
        object={table.scene}
        scale={2}
        position={[-1, -6, -1.4]}
        rotation={[0.02, 0.2, -0.1]}
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

const House = () => {
  const house = useGLTF("./house/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={-0.5} groundColor="black" />
      <primitive
        object={house.scene}
        scale={1.3}
        position={[2, 0.2, -0.7]}
        rotation={[-0.02, -0.2, -0.1]}
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

const HouseTable = () => {
  return (
    <div className="house-ctn">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <House />
          <Tables />
          <ambientLight />
        </Suspense>

        <Preload />
      </Canvas>
    </div>
  );
};

export default HouseTable;
