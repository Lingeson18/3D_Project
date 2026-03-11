import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Car({ color = "#3b82f6", ...props }) {
  const { scene, nodes, materials } = useGLTF("/models/creta/scene.gltf");

  useEffect(() => {
    // Log materials to find the body paint
    // console.log("Materials:", Object.keys(materials));

    // We'll attempt to set the color of likely body materials
    // Common names: "body", "paint", "car_paint", "material_0" etc.
    Object.keys(materials).forEach((name) => {
      if (
        name.toLowerCase().includes("paint") ||
        name.toLowerCase().includes("body")
      ) {
        materials[name].color.set(color);
      }
    });
  }, [materials, color]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/creta/scene.gltf");
