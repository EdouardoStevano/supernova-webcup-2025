import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoaderPage = () => {
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        // Create heartbeat wave animation
        tl.to(lineRef.current, {
            duration: 0.75,
            backgroundPositionX: '200%',
            ease: 'linear',
        });
    }, []);

    return (
        <div className="bg-custom-dark-gray pointBackground relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
            <div className="relative flex h-1 w-64 flex-col items-center">
                <img
                    src={'/favicon.svg'}
                    alt="logo"
                    className="relative bottom-30 w-30 animate-bounce"
                    style={{
                        animation: 'bounce 2s infinite',
                    }}
                />
                <div
                    ref={lineRef}
                    className="absolute top-5 h-full w-1/2"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent 0%, #d85dc1 50%, transparent 100%)',
                        backgroundSize: '200% 100%',
                        backgroundPosition: '0% 0%',
                    }}
                />
            </div>
        </div>
    );
};

export default LoaderPage;
