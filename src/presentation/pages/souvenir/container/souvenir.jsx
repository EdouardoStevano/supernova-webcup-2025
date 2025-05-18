import { Loader } from '@react-three/drei';
import { UI } from '../../../components/souvenir/UI';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Experience } from '../../../components/souvenir/Experience';
import ModalInfo from './modalInfo';
import { useOpenModalBook } from '../../../hooks/useOpenModalBook';
import ModalAddSouvenir from './modalAddSouvenir';
const MainSouvenir = () => {
    const { isModalOpen, closeModal, setSelectedItems, selectedItems } =
        useOpenModalBook();

    const [modalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleSave = () => {
        // Implement your save logic here
        setIsModalOpen(false);
    };
    return (
        <>
            <UI />
            <ModalInfo
                handleCloseModal={closeModal}
                isModalOpen={isModalOpen}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
            />
            <button
                className="absolute top-4 right-4 z-10 transform rounded-full bg-blue-200 px-4 py-2 font-bold text-blue-800 shadow transition duration-300 hover:scale-105 hover:bg-blue-300 hover:shadow-xl hover:ring-2 hover:ring-blue-400"
                onClick={handleOpenModal}
            >
                Ajouter un souvenir
            </button>
            <ModalAddSouvenir
                handleCloseModal={handleCloseModal}
                isModalOpen={modalOpen}
                handleSave={handleSave}
            />
            <Loader />
            <Canvas
                style={{
                    width: '100%',
                    height: '100%',
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
