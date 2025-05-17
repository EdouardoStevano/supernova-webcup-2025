import React, { useState as state, useEffect as effect } from 'react';

import './scrollToTop.css';

// Asset Import

function ScrollToTop() {
    const [isVisible, setIsVisible] = state(false);

    effect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            setIsVisible(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`scroll-to-bottom-button z-50 ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <span>Revenir</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
            </svg>
        </div>
    );
}

export default ScrollToTop;
