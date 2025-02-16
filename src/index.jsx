import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
// import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// const created = ({ gl }) => {
//   console.log(gl);
//   gl.setClearColor("#0000ff", 1);
// };

// const created = ({ scene }) => {
//   console.log(scene);
//   scene.background = new THREE.Color("skyblue");
// };

root.render(
  <Canvas
    shadows={false}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
    // onCreated={created}
  >
    {/* can also put in experience as long as direct parent is scene */}
    <color args={["ivory"]} attach="background" />

    <Experience />
  </Canvas>
);
