import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber/native';
// import * as THREE from 'three';
// import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLView } from 'expo-gl';
import {View, Image} from 'react-native';
import {OrbitControls, PerspectiveCamera, FlyControls, Environment, useGLTF} from '@react-three/drei/native'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useLoader } from 'react-three-fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { SkeletonUtils } from "three/examples/jsm/utils/SkeletonUtils";
import Model from './RyanKick';
// import Model1 from './Kick';
// import img from './src/assets/RyanKick.glb';
// import { useLoader } from '@react-three/fiber'

// const CameraController = () => {
  // const { camera, gl: {domElement} } = useThree();
  // const {
  //   camera, 
  //   gl: {domelement}
  // }
  // useEffect(
  //   () => {
  //     // const controls = new OrbitControls(camera, gl.domElement);

  //     controls.minDistance = 3;
  //     controls.maxDistance = 20;

  //     return () => {
  //       controls.dispose();
  //     };
  //   },
  //   [camera, gl]
  // );
  // return null;
  // return <orbitControls args={[camera, domElement]} />;
// };

// const camera = () => {
//   const controls = OrbitControls(camera, renderer.domElement)

//   camera.position.y = 0
//   camera.position.x = 0
//   camera.position.z = 5

//   controls.update();
// }

// function Model() {
  // const gltf = useLoader(GLTFLoader, '/assets/RyanKick.glb')
  // return (
  //   <Suspense fallback={null}>
  //     <primitive object={gltf.scene} />
  //   </Suspense>
  // )
  
// }

// function CameraHelper() {
//   const camera = new PerspectiveCamera(60, 1, 1, 3);
//   return <group position={[0, 0, 2]}>
//     <cameraHelper args={[camera]} />
//   </group>;
// }

const Medel = () => {
  // const scene = useTh
  try {
    // const gltf = useLoader(GLTFLoader, "/RyanKick.glb");
    // const gltf = useLoader(GLTFLoader, "./assets/RyanKickGLB.glb");
    // const gltf = useLoader(GLTFLoader, '../pubic/assets/RyanKick.glb');
    // const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb');
    // const gltf = useGLTF('./src/assets/RyanKick.glb');
    const gltf = useGLTF('/RyanKick.glb');
    console.log(gltf, "sadasd");
    return(
      <primitive object={gltf.scene} />
    )
  } catch (e) {
    console.log("errorhere",e);
  }
};

// const newComp = () => {
//   try {
//     const [gltf] = useLoader(GLTFLoader, loader => {
//       const dracoLoader = new DRACOLoader();
//       dracoLoader.setDecoderPath('/RyanKick.glb');
//       loader.setDRACOLoader(dracoLoader);
//     });
  
//     return <primitive object={gltf.scene} />;
//   } catch(e) {
//     console.log("new erorr", e);
//   }
// }

const Madel = () => {
  const group = useRef()
  const {scene, nodes, materials, animations } = useGLTF('/src/assets/RyanKick.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.geometry} material={materials[0]} />
      {/* <mesh geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} /> */}
    </group>
  )
}

function Box(props) {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'yellow'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* <newComp /> */}
        {/* <Medel/> */}
        {/* <Model /> */}
        <ambientLight />
        <Box position={[-1.0, 0, 0]} />
        <Box position={[1.0, 0, 0]} />
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  )
}