import { Canvas } from '@react-three/fiber';
import { Experience } from './variant';

function ProjectGraveYard() {
    return (
        <>
            <div>
                <div className="absolute top-4 left-4 z-10">
                    <button
                        onClick={() => window.history.back()}
                        className="flex cursor-pointer items-center space-x-2 rounded-full bg-purple-600 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700"
                    >
                        <span>←</span>
                        <span>Return</span>
                    </button>
                </div>
                <div className="bg-opacity-50 fade absolute right-6 bottom-8 z-10 w-[400px] -translate-x-[30px] transform rounded-2xl bg-black/80 p-8 text-left backdrop-blur-sm">
                    <h1 className="drop-shadow-glow mb-6 text-5xl font-extrabold tracking-tight text-purple-400">
                        Cimetière de projets
                    </h1>
                    <p className="mx-auto max-w-2xl text-sm leading-loose font-medium text-purple-100">
                        Bienvenue dans le lieu de repos numérique des rêves
                        abandonnés et du code oublié. Ici reposent les projets
                        qui ont façonné notre voyage, bien qu'ils n'aient jamais
                        vu la lumière du déploiement.
                    </p>
                </div>
            </div>
            <Canvas
                shadows
                camera={{ position: [0, 2, 10], fov: 30 }}
                style={{ width: '100vw', height: '100vh' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1}
                    castShadow
                />
                <Experience />
            </Canvas>
        </>
    );
}

export default ProjectGraveYard;
