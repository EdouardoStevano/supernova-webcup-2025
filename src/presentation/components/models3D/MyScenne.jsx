import {
    Environment,
    Loader,
    OrbitControls,
    ScrollControls,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import { getProject, val } from '@theatre/core';
import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet,
} from '@theatre/r3f';

import flyThroughState from '../../../fly1.json';
import useScroll from '../../hooks/useScroll';
import { ModelsVacc } from './3_seconds_of_vacations';

const MyScenne = () => {
    const sheet = getProject('Fly Through 2', { state: flyThroughState }).sheet(
        'Scene'
    );
    return (
        <>
            <Canvas
                shadows
                style={{
                    width: '100%',
                    height: '100vh',
                }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <SheetProvider sheet={sheet}>
                    <Scene />
                </SheetProvider>
                {/* <Environment preset="dawn" background blur={0.5} /> */}
            </Canvas>
            <Loader />
        </>
    );
};

export default MyScenne;

//
//

function Scene() {
    const sheet = useCurrentSheet();
    // const scroll = useScroll();

    const { scrollYPercent, setScrollYPercent } = useScroll();

    useFrame(() => {
        ///the length of our sequence
        const sequenceLength = val(sheet.sequence.pointer.length);

        //update the position of theplayhead in the sequence as a fraction of its whole length
        sheet.sequence.position = scrollYPercent * sequenceLength;
    });
    return (
        <>
            <fog attach="fog" args={['#0000', 0, 100]} />
            <color attach="background" args={['#0000']} />

            <ambientLight />
            <ModelsVacc />
            <PerspectiveCamera
                theatreKey="Camera"
                makeDefault
                position={[0, 0, 0]}
                fov={90}
                near={0.1}
                far={70}
            />
        </>
    );
}
