import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useToast } from '../../../components/common/superToast';

/**
 *
 * @desc: Landing pages
 */
const Landing = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main-scroll'),
            smooth: true,
            multiplier: 1,
            lerp: 0.03,
            smartphone: {
                smooth: true,
            },
            tablet: {
                smooth: true,
            },
        });

        // Clean up Locomotive Scroll instance
        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    const { addToast } = useToast();

    // Toast d'information (par défaut)
    const montrerInfo = () => {
        addToast('Voici une information importante');
    };

    // Toast de succès
    const montrerSucces = () => {
        addToast('Opération réussie !', 'success');
    };

    // Toast d'erreur
    const montrerErreur = () => {
        addToast("Une erreur s'est produite", 'error');
    };

    // Toast d'avertissement
    const montrerAvertissement = () => {
        addToast('Attention !', 'warning');
    };

    return (
        <div
            id="main-scroll"
            ref={scrollRef}
            data-scroll-container
            className="z-10 overflow-hidden"
        >
            {/* <div data-scroll-speed={0.1}>
                <div
                    data-scroll
                    data-scroll-speed={0.3}
                    className="flex h-screen text-white"
                >
                    Section 1
                    <div className="mt-2 p-25">
                        <button onClick={montrerInfo}>Info</button>
                        <button onClick={montrerSucces}>Succès</button>
                        <button onClick={montrerErreur}>Erreur</button>
                        <button onClick={montrerAvertissement}>
                            Avertissement
                        </button>
                    </div>
                </div>
                <div
                    data-scroll
                    data-scroll-speed={1}
                    className="flex h-screen bg-green-600 text-white"
                >
                    Section 2
                </div>
            </div> */}
            Test
        </div>
    );
};

export default Landing;
