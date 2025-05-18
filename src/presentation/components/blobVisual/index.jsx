// AudioVisualizer.jsx
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { ViewMessage } from './viewMessage';
import './shader.jsx';

function DistortedSphere({ analyser }) {
    const materialRef = useRef();
    const dataArray = useRef(new Uint8Array(32));

    useFrame(() => {
        if (analyser && materialRef.current) {
            analyser.getByteFrequencyData(dataArray.current);
            const avg =
                dataArray.current.reduce((sum, val) => sum + val, 0) /
                dataArray.current.length;
            const normalized = avg / 256;
            materialRef.current.distort = 0.3 + normalized * 0.7;
            materialRef.current.speed = 1 + normalized * 15;
        }
    });

    return (
        <mesh scale={[2, 2, 2]}>
            <sphereGeometry args={[1, 100, 100]} />
            <MeshDistortMaterial
                ref={materialRef}
                color="#00ffff"
                distort={0.3}
                speed={5}
                roughness={0.2}
            />
        </mesh>
    );
}

export default function AudioVisualizer({ audioUrl, message }) {
    const audioRef = useRef(null);
    const [analyser, setAnalyser] = useState(null);
    const audioContextRef = useRef(null);

    useEffect(() => {
        console.log(audioUrl);
        const audio = new Audio(audioUrl);
        audio.play();
        audio.crossOrigin = 'anonymous';
        // audio.loop = true;
        audioRef.current = audio;

        const context = new (window.AudioContext ||
            window.webkitAudioContext)();
        const analyserNode = context.createAnalyser();
        const source = context.createMediaElementSource(audio);
        source.connect(analyserNode);
        analyserNode.connect(context.destination);
        analyserNode.fftSize = 64;

        setAnalyser(analyserNode);
        audioContextRef.current = context;

        return () => {
            audio.pause();
            source.disconnect();
            analyserNode.disconnect();
            context.close();
        };
    }, [audioUrl]);

    return (
        <>
            <Canvas style={{ width: '100vw', height: '90vh' }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[1, 1, 1]} />
                <Suspense fallback={null}>
                    <DistortedSphere analyser={analyser} />
                </Suspense>
                <OrbitControls />
            </Canvas>
            <ViewMessage message={message} />
        </>
    );
}
