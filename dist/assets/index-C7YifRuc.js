import { r as e, j as o, O as i } from './index-i9ws2I_8.js';
function c() {
    const [t, r] = e.useState(!1);
    e.useEffect(() => {
        const s = () => {
            const l =
                document.documentElement.scrollTop || document.body.scrollTop;
            r(l > 0);
        };
        return (
            window.addEventListener('scroll', s),
            () => {
                window.removeEventListener('scroll', s);
            }
        );
    }, []);
    const n = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return o.jsxs('div', {
        className: `scroll-to-bottom-button z-50 ${t ? 'visible' : ''}`,
        onClick: n,
        children: [
            o.jsx('span', { children: 'Revenir' }),
            o.jsx('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                className: 'h-6 w-6',
                children: o.jsx('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18',
                }),
            }),
        ],
    });
}
const d = () =>
        o.jsx('div', {
            className: 'fixed top-10 z-50 w-full bg-red-500',
            children: o.jsx('div', { children: 'top' }),
        }),
    u = () =>
        o.jsxs('div', {
            children: [
                o.jsx(c, {}),
                o.jsx(d, {}),
                o.jsx('div', {
                    className: 'container',
                    children: o.jsx(i, {}),
                }),
            ],
        });
export { u as default };
