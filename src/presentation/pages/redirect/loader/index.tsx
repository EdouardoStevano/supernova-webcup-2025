import React from 'react';

const LoaderPage = () => {
    return (
        <div className="bg-custom-dark-gray pointBackground flex h-screen w-screen flex-col items-center justify-center">
            <svg width="200" height="200" viewBox="0 0 100 100">
                {/* Bottle neck */}
                <path
                    d="M45,10 L55,10 L55,25 L45,25 Z"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    className="animate-draw"
                />
                {/* Bottle body */}
                <path
                    d="M35,25 L65,25 L60,90 L40,90 Z"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    className="animate-draw"
                />
                {/* Liquid level */}
                <path
                    d="M40,60 L60,60"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    className="animate-draw"
                />
            </svg>
            <style jsx>{`
                @keyframes draw {
                    0% {
                        stroke-dasharray: 0 300;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 300 0;
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dasharray: 300 0;
                        stroke-dashoffset: -300;
                    }
                }
                .animate-draw {
                    animation: draw 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default LoaderPage;
