import {  useRef } from "react";
import {  useGLTF } from "@react-three/drei";

export function Bird(props) {
  const birdRef = useRef();

  const { scene  } = useGLTF("/models/bird.glb");


  return (
    <mesh ref={birdRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
}