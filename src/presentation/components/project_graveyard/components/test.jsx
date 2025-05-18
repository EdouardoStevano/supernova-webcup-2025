import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ImageGallery3D from './imageGalery';

const images = [
    '/images/wawasensei-white.png',
    '/images/wawasensei-white.png',
    '/images/wawasensei-white.png',
    '/images/wawasensei-white.png',
    '/images/wawasensei-white.png',
    '/images/wawasensei-white.png',
    '/images/wawasensei-white.png',
];

const descriptions = ['Montagne', 'Plage', 'Forêt'];

function Test() {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            style={{ width: '100vw', height: '100vh' }}
        >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <ImageGallery3D images={images} descriptions={descriptions} />
        </Canvas>
    );
}

export default Test;
