import { r, j as e, m as i, L as y, A as f, O as g } from './index-DwbPX98K.js';
import { i as m } from './auth1-DlM34e_H.js';
import { B as b } from './index-BcdMkzvf.js';
import { L as w, D as N } from './index-DqfP81eW.js';
import { u as k } from './useTranslation-B7Ddawmm.js';
import './index-fdT-esFM.js';
function _() {
    const [t, s] = r.useState(!1);
    r.useEffect(() => {
        const o = () => {
            const n =
                document.documentElement.scrollTop || document.body.scrollTop;
            s(n > 0);
        };
        return (
            window.addEventListener('scroll', o),
            () => {
                window.removeEventListener('scroll', o);
            }
        );
    }, []);
    const a = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return e.jsxs('div', {
        className: `scroll-to-bottom-button z-100 bg-white ${t ? 'visible' : ''}`,
        onClick: a,
        children: [
            e.jsx('span', { children: 'Revenir' }),
            e.jsx('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                className: 'h-6 w-6',
                children: e.jsx('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18',
                }),
            }),
        ],
    });
}
const h = {
        initial: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.35 } },
        closed: { opacity: 0, transition: { duration: 0.35 } },
    },
    L = '_nav_1eao9_1',
    E = '_wrapper_1eao9_13',
    T = '_container_1eao9_18',
    p = { nav: L, wrapper: E, container: T },
    u = { duration: 1, ease: [0.76, 0, 0.24, 1] },
    C = {
        initial: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.35 } },
        closed: { opacity: 0, transition: { duration: 0.35 } },
    },
    S = {
        initial: { height: 0 },
        enter: { height: 'auto', transition: u },
        exit: { height: 0, transition: u },
    },
    A = {
        initial: { filter: 'blur(0px)', opacity: 1 },
        open: {
            filter: 'blur(4px)',
            opacity: 0.6,
            transition: { duration: 0.3 },
        },
        closed: {
            filter: 'blur(0px)',
            opacity: 1,
            transition: { duration: 0.3 },
        },
    },
    c = {
        initial: { y: '100%', opacity: 0 },
        enter: (t) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: t[0] },
        }),
        exit: (t) => ({
            y: '100%',
            opacity: 0,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: t[1],
            },
        }),
    },
    $ = '_body_gw6im_1',
    M = { body: $ };
function z({ links: t, selectedLink: s, setSelectedLink: a }) {
    const o = (n) => {
        let l = [];
        return (
            n.split('').forEach((d, x) => {
                l.push(
                    e.jsx(
                        i.span,
                        {
                            custom: [x * 0.02, (n.length - x) * 0.01],
                            variants: c,
                            initial: 'initial',
                            animate: 'enter',
                            exit: 'exit',
                            children: d,
                        },
                        d + x
                    )
                );
            }),
            l
        );
    };
    return e.jsxs('div', {
        className: M.body,
        children: [
            t.map((n, l) => {
                const { title: d, href: x } = n;
                return e.jsx(
                    'a',
                    {
                        href: '#contact',
                        children: e.jsx(i.p, {
                            onMouseOver: () => {
                                a({ isActive: !0, index: l });
                            },
                            onMouseLeave: () => {
                                a({ isActive: !1, index: l });
                            },
                            variants: A,
                            children: o(d),
                        }),
                    },
                    `l_${l}`
                );
            }),
            e.jsx('a', { href: '#contact', children: 'Test' }),
        ],
    });
}
const B = '_footer_1v25z_1',
    I = { footer: B };
function P() {
    return e.jsxs('div', {
        className: I.footer,
        children: [
            e.jsx('ul', {
                children: e.jsxs(i.li, {
                    custom: [0.3, 0],
                    variants: c,
                    initial: 'initial',
                    animate: 'enter',
                    exit: 'exit',
                    children: [
                        e.jsx('span', { children: 'Team ' }),
                        'Supernova',
                    ],
                }),
            }),
            e.jsx('ul', {
                children: e.jsxs(i.li, {
                    custom: [0.3, 0],
                    variants: c,
                    initial: 'initial',
                    animate: 'enter',
                    exit: 'exit',
                    children: [e.jsx('span', { children: 'Webcup ' }), '2025'],
                }),
            }),
            e.jsxs('ul', {
                children: [
                    e.jsx(i.li, {
                        custom: [0.3, 0],
                        variants: c,
                        initial: 'initial',
                        animate: 'enter',
                        exit: 'exit',
                        children: 'Privacy Policy',
                    }),
                    e.jsx(i.li, {
                        custom: [0.3, 0],
                        variants: c,
                        initial: 'initial',
                        animate: 'enter',
                        exit: 'exit',
                        children: 'Terms & Conditions',
                    }),
                ],
            }),
        ],
    });
}
const H = '_imageContainer_100ul_1',
    O = { imageContainer: H };
function F({ src: t, isActive: s }) {
    return e.jsx(i.div, {
        variants: C,
        initial: 'initial',
        animate: s ? 'open' : 'closed',
        className: O.imageContainer,
        children: e.jsx('img', {
            src: `/images/${t}`,
            alt: 'image',
            style: { width: '100%', height: '100%', objectFit: 'cover' },
        }),
    });
}
const v = [
    { title: 'Accuil', href: '#home', src: m },
    { title: 'A propos', href: '#presentation', src: 'shop.png' },
    { title: 'Explorez', href: '#working', src: m },
    { title: 'Testimoniale', href: '#testy', src: m },
    { title: 'Contact', href: '#contact', src: m },
];
function R() {
    const [t, s] = r.useState({ isActive: !1, index: 0 });
    return e.jsx(i.div, {
        variants: S,
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
        className: p.nav,
        children: e.jsxs('div', {
            className: p.wrapper,
            children: [
                e.jsxs('div', {
                    className: p.container,
                    children: [
                        e.jsx(z, {
                            links: v,
                            selectedLink: t,
                            setSelectedLink: s,
                        }),
                        e.jsx(P, {}),
                    ],
                }),
                e.jsx(F, { src: v[t.index].src, isActive: t.isActive }),
            ],
        }),
    });
}
const D = () => {
        const [t, s] = r.useState(!1);
        return e.jsx(i.div, {
            initial: { y: -10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
            className: 'fixed top-0 z-50 w-full py-5',
            children: e.jsx('div', {
                className: 'mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8',
                children: e.jsxs('div', {
                    className: 'flex h-16 items-center justify-between',
                    children: [
                        e.jsxs('div', {
                            className: 'flex gap-2',
                            children: [
                                e.jsx('img', {
                                    className: 'h-8 w-auto',
                                    src: '/favicon.svg',
                                    alt: 'Logo',
                                }),
                                e.jsxs('div', {
                                    className: 'flex flex-col',
                                    children: [
                                        e.jsx('span', {
                                            className:
                                                'text-[15px] font-bold dark:text-white',
                                            children: 'TheEnd.page',
                                        }),
                                        e.jsxs('span', {
                                            className:
                                                'text-[8px] dark:text-white',
                                            children: [
                                                'Créez des pages de fin stylisées',
                                                ' ',
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: 'flex items-center gap-3',
                            children: [
                                e.jsxs('div', {
                                    className: 'flex flex-row items-center',
                                    children: [
                                        e.jsxs('span', {
                                            className:
                                                'mr-3 hidden text-sm text-gray-600 md:flex dark:text-white',
                                            children: [
                                                'Je claque la porte',
                                                ' ',
                                            ],
                                        }),
                                        e.jsx(y, {
                                            to: '/auth',
                                            children: e.jsx(b, {
                                                variants: 'primary',
                                                size: 'small',
                                                className:
                                                    'rounded-full px-4 py-1 text-[13px] text-white transition-colors',
                                                children: 'Se connecter',
                                            }),
                                        }),
                                    ],
                                }),
                                e.jsxs('div', {
                                    className: 'hidden items-center md:flex',
                                    children: [e.jsx(w, {}), e.jsx(N, {})],
                                }),
                                e.jsx('div', {
                                    children: e.jsxs('div', {
                                        onClick: () => {
                                            s(!t);
                                        },
                                        className:
                                            'flex cursor-pointer items-center justify-center gap-2 dark:text-white',
                                        children: [
                                            e.jsxs(i.div, {
                                                className:
                                                    'relative z-20 h-[2px] w-[22.5px]',
                                                initial: !1,
                                                children: [
                                                    e.jsx(i.span, {
                                                        className:
                                                            'absolute block h-[1px] w-full bg-black dark:text-white',
                                                        animate: {
                                                            rotate: t ? 45 : 0,
                                                            y: t ? 0 : -4,
                                                        },
                                                        transition: {
                                                            duration: 0.5,
                                                            ease: [
                                                                0.76, 0, 0.24,
                                                                1,
                                                            ],
                                                        },
                                                    }),
                                                    e.jsx(i.span, {
                                                        className:
                                                            'absolute block h-[1px] w-full bg-black',
                                                        animate: {
                                                            rotate: t ? -45 : 0,
                                                            y: t ? 0 : 4,
                                                        },
                                                        transition: {
                                                            duration: 0.5,
                                                            ease: [
                                                                0.76, 0, 0.24,
                                                                1,
                                                            ],
                                                        },
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className:
                                                    'relative hidden h-full items-center md:flex',
                                                children: [
                                                    e.jsx(i.p, {
                                                        variants: h,
                                                        animate: t
                                                            ? 'closed'
                                                            : 'open',
                                                        className:
                                                            'text-xs font-normal uppercase sm:text-sm',
                                                        children: 'Menu',
                                                    }),
                                                    e.jsx(i.p, {
                                                        variants: h,
                                                        animate: t
                                                            ? 'open'
                                                            : 'closed',
                                                        className:
                                                            'absolute text-xs font-normal uppercase opacity-0 sm:text-sm',
                                                        children: 'Close',
                                                    }),
                                                ],
                                            }),
                                            e.jsx(f, {
                                                mode: 'wait',
                                                children: t && e.jsx(R, {}),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    V = () => {
        const [t, s] = r.useState({ x: 0, y: 0 });
        return (
            r.useEffect(() => {
                const a = (o) => {
                    s({ x: o.clientX, y: o.clientY });
                };
                return (
                    window.addEventListener('mousemove', a),
                    () => {
                        window.removeEventListener('mousemove', a);
                    }
                );
            }, []),
            t
        );
    },
    j = [
        { id: 1, icon: '🏠', label: 'Home' },
        { id: 2, icon: '📱', label: 'Contact' },
        { id: 3, icon: '📄', label: 'About' },
        { id: 4, icon: '🔍', label: 'Search' },
    ],
    W = () => {
        const [t, s] = r.useState(!1),
            a = V(),
            { t: o } = k();
        return e.jsx('div', {
            className: 'fixed right-10 bottom-10 z-50',
            children: e.jsxs('div', {
                className: 'relative',
                children: [
                    e.jsxs(i.button, {
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        onClick: () => s(!t),
                        className:
                            'bg-white-600 flex items-center gap-3 rounded-2xl bg-white px-1 py-1 text-[12px] text-gray-700 shadow-lg transition-colors hover:bg-[#d85dc1] hover:text-white',
                        children: [
                            e.jsx('div', {
                                className: 'rounded-xl bg-purple-600 p-2',
                                children: e.jsx('img', {
                                    src: '/menu-icon.png',
                                    alt: 'Menu',
                                    className: 'h-6 w-6',
                                }),
                            }),
                            o('floatBtn.title'),
                            e.jsx(i.span, {
                                animate: { rotate: t ? 180 : 0 },
                                transition: { duration: 0.3 },
                                className: 'ml-1',
                                children: '▼',
                            }),
                        ],
                    }),
                    e.jsx(f, {
                        children:
                            t &&
                            e.jsx(i.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                className: 'absolute bottom-12 -left-10 mb-4',
                                children: j.map((n, l) =>
                                    e.jsxs(
                                        i.button,
                                        {
                                            className:
                                                'flex w-[200px] items-center gap-2 rounded-2xl bg-white p-1 text-[13px] text-gray-600 shadow-md transition-colors hover:bg-purple-50',
                                            style: {
                                                marginBottom: `${a.y * 0.02}px`,
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: 20,
                                                scale: 0,
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                x: a.x * 0.05,
                                                gap: `${8 + a.y * 0.02}px`,
                                                transition: {
                                                    duration: 0.2,
                                                    delay: l * 0.05,
                                                    type: 'spring',
                                                    stiffness: 50,
                                                    damping: 5,
                                                },
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 20,
                                                scale: 0,
                                                transition: {
                                                    duration: 0.2,
                                                    delay:
                                                        (j.length - l - 1) *
                                                        0.1,
                                                },
                                            },
                                            whileHover: { scale: 1.1 },
                                            children: [
                                                e.jsx('span', {
                                                    className:
                                                        'rounded-xl bg-[#d85dc1] p-2',
                                                    children: n.icon,
                                                }),
                                                e.jsx('span', {
                                                    children: n.label,
                                                }),
                                            ],
                                        },
                                        n.id
                                    )
                                ),
                            }),
                    }),
                ],
            }),
        });
    },
    q = () => {
        const [t, s] = r.useState(!1);
        return e.jsx('div', {
            className: 'fixed bottom-5 left-5 z-20',
            children: e.jsx(i.div, {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { duration: 0.5 },
                className: 'relative',
                children: e.jsxs(i.div, {
                    className:
                        'flex cursor-pointer items-center justify-center bg-green-500 transition-all duration-300',
                    animate: {
                        borderRadius: t ? '20px' : '50%',
                        width: t ? '300px' : '40px',
                        height: t ? '120px' : '40px',
                    },
                    onHoverStart: () => s(!0),
                    onHoverEnd: () => s(!1),
                    children: [
                        e.jsx('div', {
                            className: 'absolute -inset-2',
                            children: e.jsx('div', {
                                className: `h-full w-full animate-ping rounded-full bg-green-500 opacity-20 ${t ? 'hidden' : ''}`,
                            }),
                        }),
                        e.jsxs(i.div, {
                            className:
                                'flex flex-col items-center justify-center px-6',
                            animate: { color: t ? '#22c55e25' : 'white' },
                            children: [
                                e.jsx('span', {
                                    className: `fixed text-2xl font-bold ${t ? 'hidden' : ''}`,
                                    children: 'e',
                                }),
                                t &&
                                    e.jsxs(i.div, {
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1 },
                                        transition: { delay: 0.2 },
                                        className: 'mt-2 text-left',
                                        children: [
                                            e.jsx('h3', {
                                                className:
                                                    'mb-1 font-bold text-white',
                                                children: 'Eco-Friendly',
                                            }),
                                            e.jsx('p', {
                                                className: 'text-xs text-white',
                                                children:
                                                    'Our commitment to environmental sustainability and eco-friendly practices helps create a better future for our planet.',
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    U = () =>
        e.jsxs('div', {
            className: 'pointBackground dark:bg-gray-900',
            children: [
                e.jsx(_, {}),
                e.jsx(W, {}),
                e.jsx(q, {}),
                e.jsx(D, {}),
                e.jsx('div', {
                    className: 'gradientBack1',
                    children: e.jsx(g, {}),
                }),
            ],
        });
export { U as default };
