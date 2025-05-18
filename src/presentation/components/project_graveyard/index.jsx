import { Canvas } from '@react-three/fiber';
import { Experience } from './variant';

function ProjectGraveYard() {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 2, 10], fov: 30 }}
            style={{ width: '100vw', height: '100vh' }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <Experience />
        </Canvas>
    );
}

export default ProjectGraveYard;
