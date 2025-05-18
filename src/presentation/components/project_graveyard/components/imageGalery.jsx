import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

const ImageGallery3D = ({ images, descriptions = [] }) => {
    const textures = useLoader(THREE.TextureLoader, images);
    const positionsRef = useRef([]);

    if (positionsRef.current.length === 0) {
        const radius = 1.8;

        positionsRef.current = textures.map((_texture, index) => {
            const angle = (index / textures.length) * Math.PI * 2;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = -Math.random() * 2;

            return [x, y, z];
        });
    }

    return (
        <>
            {textures.map((texture, index) => (
                <group
                    position={positionsRef.current[index]}
                    key={index}
                    rotation={[0, 0, 0]}
                >
                    <mesh rotation={[0, 0, 0]}>
                        <planeGeometry args={[1.4, 0.8]} />
                        <meshBasicMaterial map={texture} />
                    </mesh>
                    <Text
                        position={[0, -1.3, 0]}
                        fontSize={0.3}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {descriptions[index] || ''}
                    </Text>
                </group>
            ))}
        </>
    );
};

export default ImageGallery3D;
