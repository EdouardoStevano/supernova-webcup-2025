import { j as e } from './index-i9ws2I_8.js';
const a = () =>
    e.jsxs('div', {
        className:
            'bg-custom-dark-gray pointBackground flex h-screen w-screen flex-col items-center justify-center',
        children: [
            e.jsxs('svg', {
                width: '200',
                height: '200',
                viewBox: '0 0 100 100',
                children: [
                    e.jsx('path', {
                        d: 'M45,10 L55,10 L55,25 L45,25 Z',
                        fill: 'none',
                        stroke: '#4F46E5',
                        strokeWidth: '2',
                        className: 'animate-draw',
                    }),
                    e.jsx('path', {
                        d: 'M35,25 L65,25 L60,90 L40,90 Z',
                        fill: 'none',
                        stroke: '#4F46E5',
                        strokeWidth: '2',
                        className: 'animate-draw',
                    }),
                    e.jsx('path', {
                        d: 'M40,60 L60,60',
                        fill: 'none',
                        stroke: '#4F46E5',
                        strokeWidth: '2',
                        className: 'animate-draw',
                    }),
                ],
            }),
            e.jsx('style', {
                jsx: !0,
                children: `
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
            `,
            }),
        ],
    });
export { a as default };
