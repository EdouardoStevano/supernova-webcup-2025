import { gsap } from 'gsap';

import { Physics2DPlugin } from 'gsap/Physics2DPlugin';
import { useEffect, useRef } from 'react';
import './dots.css';

gsap.registerPlugin(Physics2DPlugin);

const PastillesForElement = ({ children }) => {
    const sectionref = useRef();

    function initConfettiClick() {
        sectionref.current.addEventListener('click', (event) => {
            const dotCount = gsap.utils.random(5, 10);
            // const colors = ["#e40ad2", "#700ce2", "#fffce1"];

            for (let i = 0; i < dotCount; i++) {
                // Create a dot element
                const dot = document.createElement('div');

                dot.classList.add('flair');
                dot.classList.add('dot');
                const nomClass = 'flair--' + gsap.utils.random(2, 35, 1);
                dot.classList.add(nomClass);

                document.body.appendChild(dot);

                gsap.set(dot, {
                    // backgroundColor: gsap.utils.random(colors),
                    top: event.clientY,
                    left: event.clientX,
                    scale: 0,
                });

                gsap.timeline({
                    onComplete: () => dot.remove(),
                })
                    .to(dot, {
                        scale: gsap.utils.random(0.3, 1),
                        duration: 0.3, // Quick pop-in effect
                        ease: 'power3.out',
                    })
                    .to(
                        dot,
                        {
                            duration: 2,
                            physics2D: {
                                velocity: gsap.utils.random(500, 1000), // Random velocity
                                angle: gsap.utils.random(0, 360), // Random direction
                                gravity: 1500, // Gravity effect
                            },
                            autoAlpha: 0, // Fade out towards the end
                            ease: 'none',
                        },
                        '<'
                    ); // Start together with the previous tween
            }
        });
    }

    useEffect(() => {
        initConfettiClick();

        return () => {
            // Cleanup: remove the event listener when the component unmounts
            document.removeEventListener('click', initConfettiClick);
        };
    }, [children]);
    return (
        <div ref={sectionref} className="pastilles-for-element">
            <div className="flair--2"></div>
            {children}
        </div>
    );
};

export default PastillesForElement;
