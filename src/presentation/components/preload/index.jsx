import React, { useEffect, useRef, useState } from 'react';

const Preload = () => {
    const loader = useRef(null);
    const path = useRef(null);
    const initialCurve = 200;
    const duration = 1000;
    let start;
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        setPath(initialCurve);

        // Animate loading progress from 0 to 100
        const progressInterval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    // Start animation after reaching 100%
                    requestAnimationFrame(animate);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(progressInterval);
    }, []);

    const animate = (timestamp) => {
        if (start === undefined) {
            start = timestamp;
        }
        const elapsed = timestamp - start;

        const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
        setPath(newCurve);

        loader.current.style.top =
            easeOutQuad(elapsed, 0, -loaderHeight(), duration) + 'px';

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        }
    };

    const easeOutQuad = (time, start, end, duration) => {
        return -end * (time /= duration) * (time - 2) + start;
    };

    const loaderHeight = () => {
        const loaderBounds = loader.current.getBoundingClientRect();
        return loaderBounds.height;
    };

    const setPath = (curve) => {
        const width = window.innerWidth;
        const height = loaderHeight();
        path.current.setAttributeNS(
            null,
            'd',
            `M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`
        );
    };
    return (
        <div ref={loader} className="superload z-50">
            <span className="font-poppins absolute top-[30%] left-10 text-9xl font-normal text-white">
                Novawold
            </span>

            <span className="absolute right-20 bottom-[30%] text-9xl font-extrabold text-white/60">
                {loadingProgress}%
            </span>
            <svg>
                <path ref={path}></path>
            </svg>
        </div>
    );
};

export default Preload;
