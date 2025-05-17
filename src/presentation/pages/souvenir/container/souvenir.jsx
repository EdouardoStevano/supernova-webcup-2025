import { Loader } from "@react-three/drei";
import { UI } from "../../../components/souvenir/UI";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../../../components/souvenir/Experience";
import ModalInfo from "./modalInfo";
import { useOpenModalBook } from "../../../hooks/useOpenModalBook";
const MainSouvenir = () => {
  const { isModalOpen, closeModal, setSelectedItems, selectedItems } =
    useOpenModalBook();
  return (
    <>
      <UI />
      <ModalInfo
        handleCloseModal={closeModal}
        isModalOpen={isModalOpen}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <Loader />
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
        className="bg-gradient"
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
};

export default MainSouvenir;
