import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import {
    useCursor,
    MeshPortalMaterial,
    CameraControls,
    Gltf,
    Text,
    Preload,
    Environment,
} from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing, geometry } from 'maath';
import { suspend } from 'suspend-react';
extend(geometry);

const regular = import('@pmndrs/assets/fonts/inter_regular.woff');
const medium = import('@pmndrs/assets/fonts/inter_medium.woff');

export const CapsuleTemporal = ({ items }) => {
    const spacing = 1.7;
    const centerIndex = (items.length - 1) / 2;
    let cameraZ = 3;
    if (items.length > 6) {
        cameraZ += items.length / 6;
    }

    // Memoize fog to avoid recreation on each render
    const fog = useMemo(() => new THREE.Fog('#ffffff', 5, 15), []);

    return (
        <Canvas
            flat
            camera={{ fov: 75, position: [0, 0, cameraZ] }}
            eventSource={document.getElementById('root')}
            eventPrefix="client"
            style={{ width: '100vw', height: '100vh' }}
            fog={fog}
        >
            {/* Fond blanc */}
            <color attach="background" args={['#f0f0f0']} />
            {/* Brouillard blanc */}
            <fog attach="fog" args={['#ffffff', 5, 15]} />

            <Environment preset="sunset" />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color="#d3dee2" />
            </mesh>

            {/* Objets */}
            {items.map(
                (
                    {
                        id,
                        name,
                        author,
                        bg,
                        width,
                        height,
                        modelSrc,
                        modelScale,
                        modelPosition,
                    },
                    index
                ) => {
                    const posX = (index - centerIndex) * spacing;
                    const rotY = -0.3 * (index - centerIndex);

                    return (
                        <Frame
                            key={id}
                            id={id}
                            name={name}
                            author={author}
                            bg={bg}
                            width={width}
                            height={height}
                            position={[posX, 0, 0]}
                            rotation={[0, rotY, 0]}
                            modelSrc={modelSrc}
                            modelScale={modelScale}
                            modelPosition={modelPosition}
                        />
                    );
                }
            )}

            <Rig />
            <Preload all />
        </Canvas>
    );
};

function Frame({
    id,
    name,
    author,
    bg = '#ffffff',
    width = 1,
    height = 1.618,
    position,
    rotation,
    modelSrc,
    modelScale = 1,
    modelPosition = [0, 0, 0],
}) {
    const portal = useRef();
    const [, setLocation] = useLocation();
    const [, params] = useRoute('/item/:id');
    const [hovered, hover] = useState(false);
    useCursor(hovered);

    useFrame((state, dt) => {
        easing.damp(
            portal.current,
            'blend',
            params?.id === id ? 1 : 0,
            0.2,
            dt
        );
    });

    return (
        <group position={position} rotation={rotation}>
            <Text
                font={suspend(medium).default}
                fontSize={0.3}
                anchorY="top"
                anchorX="left"
                lineHeight={0.8}
                position={[-0.375, 0.715, 0.01]}
                material-toneMapped={false}
            >
                {name}
            </Text>
            <Text
                font={suspend(regular).default}
                fontSize={0.1}
                anchorX="right"
                position={[0.4, -0.659, 0.01]}
                material-toneMapped={false}
            >
                /{id}
            </Text>
            <Text
                font={suspend(regular).default}
                fontSize={0.04}
                anchorX="right"
                position={[0.0, -0.677, 0.01]}
                material-toneMapped={false}
            >
                {author}
            </Text>
            <mesh
                name={id}
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    setLocation('/item/' + e.object.name);
                }}
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}
            >
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial
                    ref={portal}
                    events={params?.id === id}
                    side={THREE.DoubleSide}
                >
                    <color attach="background" args={[bg]} />
                    <Gltf
                        src={modelSrc}
                        scale={modelScale}
                        position={modelPosition}
                    />
                </MeshPortalMaterial>
            </mesh>
        </group>
    );
}

function Rig() {
    const { controls, scene } = useThree();
    const [, params] = useRoute('/item/:id');
    const position = new THREE.Vector3();
    const focus = new THREE.Vector3();

    useEffect(() => {
        if (!params?.id) return;
        const active = scene.getObjectByName(params.id);
        if (active) {
            active.parent.localToWorld(position.set(0, 0.5, 0.25));
            active.parent.localToWorld(focus.set(0, 0, -2));
            controls?.setLookAt(
                ...position.toArray(),
                ...focus.toArray(),
                true
            );
        }
    }, [params, scene, controls]);

    return (
        <CameraControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
        />
    );
}
