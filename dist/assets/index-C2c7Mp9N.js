import {
    r as l,
    j as A,
    m as t,
    L as E,
    A as B,
    f as y,
    O as w,
} from './index-BRBA0OY8.js';
import { B as v } from './index-hZT88v7D.js';
import { L as b, D as N } from './index-2QmJLMX8.js';
import { u as f } from './useTranslation-C44EKeck.js';
import './index-BjnEytZW.js';
function C() {
    const [e, i] = l.useState(!1);
    l.useEffect(() => {
        const n = () => {
            const o =
                document.documentElement.scrollTop || document.body.scrollTop;
            i(o > 0);
        };
        return (
            window.addEventListener('scroll', n),
            () => {
                window.removeEventListener('scroll', n);
            }
        );
    }, []);
    const s = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return A.jsxs('div', {
        className: `scroll-to-bottom-button z-100 bg-white ${e ? 'visible' : ''}`,
        onClick: s,
        children: [
            A.jsx('span', { children: 'Revenir' }),
            A.jsx('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                className: 'h-6 w-6',
                children: A.jsx('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18',
                }),
            }),
        ],
    });
}
const p = {
        initial: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.35 } },
        closed: { opacity: 0, transition: { duration: 0.35 } },
    },
    Q = '_nav_1eao9_1',
    I = '_wrapper_1eao9_13',
    k = '_container_1eao9_18',
    m = { nav: Q, wrapper: I, container: k },
    g = { duration: 1, ease: [0.76, 0, 0.24, 1] },
    R = {
        initial: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.35 } },
        closed: { opacity: 0, transition: { duration: 0.35 } },
    },
    M = {
        initial: { height: 0 },
        enter: { height: 'auto', transition: g },
        exit: { height: 0, transition: g },
    },
    U = {
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
    r = {
        initial: { y: '100%', opacity: 0 },
        enter: (e) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: e[0] },
        }),
        exit: (e) => ({
            y: '100%',
            opacity: 0,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: e[1],
            },
        }),
    },
    F = '_body_gw6im_1',
    Y = { body: F };
function H({ links: e, selectedLink: i, setSelectedLink: s }) {
    const n = (o) => {
        let a = [];
        return (
            o.split('').forEach((c, d) => {
                a.push(
                    A.jsx(
                        t.span,
                        {
                            custom: [d * 0.02, (o.length - d) * 0.01],
                            variants: r,
                            initial: 'initial',
                            animate: 'enter',
                            exit: 'exit',
                            children: c,
                        },
                        c + d
                    )
                );
            }),
            a
        );
    };
    return A.jsx('div', {
        className: Y.body,
        children: e.map((o, a) => {
            const { title: c, href: d } = o;
            return A.jsx(
                'a',
                {
                    href: '#contact',
                    children: A.jsx(t.p, {
                        onMouseOver: () => {
                            s({ isActive: !0, index: a });
                        },
                        onMouseLeave: () => {
                            s({ isActive: !1, index: a });
                        },
                        variants: U,
                        children: n(c),
                    }),
                },
                `l_${a}`
            );
        }),
    });
}
const D = '_footer_1v25z_1',
    G = { footer: D };
function T() {
    return A.jsxs('div', {
        className: G.footer,
        children: [
            A.jsx('ul', {
                children: A.jsxs(t.li, {
                    custom: [0.3, 0],
                    variants: r,
                    initial: 'initial',
                    animate: 'enter',
                    exit: 'exit',
                    children: [
                        A.jsx('span', { children: 'Team ' }),
                        'Supernova',
                    ],
                }),
            }),
            A.jsx('ul', {
                children: A.jsxs(t.li, {
                    custom: [0.3, 0],
                    variants: r,
                    initial: 'initial',
                    animate: 'enter',
                    exit: 'exit',
                    children: [A.jsx('span', { children: 'Webcup ' }), '2025'],
                }),
            }),
            A.jsxs('ul', {
                children: [
                    A.jsx(t.li, {
                        custom: [0.3, 0],
                        variants: r,
                        initial: 'initial',
                        animate: 'enter',
                        exit: 'exit',
                        children: 'Privacy Policy',
                    }),
                    A.jsx(t.li, {
                        custom: [0.3, 0],
                        variants: r,
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
const Z = '_imageContainer_100ul_1',
    J = { imageContainer: Z };
function V({ src: e, isActive: i }) {
    return A.jsx(t.div, {
        variants: R,
        initial: 'initial',
        animate: i ? 'open' : 'closed',
        className: J.imageContainer,
        children: A.jsx('img', {
            src: `/images/${e}`,
            alt: 'image',
            style: { width: '100%', height: '100%', objectFit: 'cover' },
        }),
    });
}
const x = '/assets/auth1-CQdguuFl.jpg',
    u = [
        { title: 'Accuil', href: '#home', src: x },
        { title: 'A propos', href: '#presentation', src: 'shop.png' },
        { title: 'Explorez', href: '#working', src: x },
        { title: 'Testimoniale', href: '#testy', src: x },
        { title: 'Contact', href: '#contact', src: x },
    ];
function W() {
    const [e, i] = l.useState({ isActive: !1, index: 0 });
    return A.jsx(t.div, {
        variants: M,
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
        className: m.nav,
        children: A.jsxs('div', {
            className: m.wrapper,
            children: [
                A.jsxs('div', {
                    className: m.container,
                    children: [
                        A.jsx(H, {
                            links: u,
                            selectedLink: e,
                            setSelectedLink: i,
                        }),
                        A.jsx(T, {}),
                    ],
                }),
                A.jsx(V, { src: u[e.index].src, isActive: e.isActive }),
            ],
        }),
    });
}
const O = () => {
        const [e, i] = l.useState(!1);
        return A.jsx(t.div, {
            initial: { y: -10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
            className: 'fixed top-0 z-50 w-full py-5',
            children: A.jsx('div', {
                className: 'mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8',
                children: A.jsxs('div', {
                    className: 'flex h-16 items-center justify-between',
                    children: [
                        A.jsxs('div', {
                            className: 'flex gap-2',
                            children: [
                                A.jsx('img', {
                                    className: 'h-8 w-auto',
                                    src: '/favicon.svg',
                                    alt: 'Logo',
                                }),
                                A.jsxs('div', {
                                    className: 'flex flex-col',
                                    children: [
                                        A.jsx('span', {
                                            className:
                                                'text-[15px] font-bold dark:text-white',
                                            children: 'TheEnd.page',
                                        }),
                                        A.jsxs('span', {
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
                        A.jsxs('div', {
                            className: 'flex items-center gap-3',
                            children: [
                                A.jsxs('div', {
                                    className: 'flex flex-row items-center',
                                    children: [
                                        A.jsxs('span', {
                                            className:
                                                'mr-3 hidden text-sm text-gray-600 md:flex dark:text-white',
                                            children: [
                                                'Je claque la porte',
                                                ' ',
                                            ],
                                        }),
                                        A.jsx(E, {
                                            to: '/auth',
                                            children: A.jsx(v, {
                                                variants: 'primary',
                                                size: 'small',
                                                className:
                                                    'rounded-full px-4 py-1 text-[13px] text-white transition-colors',
                                                children: 'Se connecter',
                                            }),
                                        }),
                                    ],
                                }),
                                A.jsxs('div', {
                                    className: 'hidden items-center md:flex',
                                    children: [A.jsx(b, {}), A.jsx(N, {})],
                                }),
                                A.jsx('div', {
                                    children: A.jsxs('div', {
                                        onClick: () => {
                                            i(!e);
                                        },
                                        className:
                                            'flex cursor-pointer items-center justify-center gap-2 dark:text-white',
                                        children: [
                                            A.jsxs(t.div, {
                                                className:
                                                    'relative z-20 h-[2px] w-[22.5px]',
                                                initial: !1,
                                                children: [
                                                    A.jsx(t.span, {
                                                        className:
                                                            'absolute block h-[1px] w-full bg-black dark:text-white',
                                                        animate: {
                                                            rotate: e ? 45 : 0,
                                                            y: e ? 0 : -4,
                                                        },
                                                        transition: {
                                                            duration: 0.5,
                                                            ease: [
                                                                0.76, 0, 0.24,
                                                                1,
                                                            ],
                                                        },
                                                    }),
                                                    A.jsx(t.span, {
                                                        className:
                                                            'absolute block h-[1px] w-full bg-black',
                                                        animate: {
                                                            rotate: e ? -45 : 0,
                                                            y: e ? 0 : 4,
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
                                            A.jsxs('div', {
                                                className:
                                                    'relative hidden h-full items-center md:flex',
                                                children: [
                                                    A.jsx(t.p, {
                                                        variants: p,
                                                        animate: e
                                                            ? 'closed'
                                                            : 'open',
                                                        className:
                                                            'text-xs font-normal uppercase sm:text-sm',
                                                        children: 'Menu',
                                                    }),
                                                    A.jsx(t.p, {
                                                        variants: p,
                                                        animate: e
                                                            ? 'open'
                                                            : 'closed',
                                                        className:
                                                            'absolute text-xs font-normal uppercase opacity-0 sm:text-sm',
                                                        children: 'Close',
                                                    }),
                                                ],
                                            }),
                                            A.jsx(B, {
                                                mode: 'wait',
                                                children: e && A.jsx(W, {}),
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
    z = '/assets/im1-BGaUmz4k.jpg',
    L =
        'data:image/jpeg;base64,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',
    j = '/assets/im8-TAUTbaCa.jpg',
    S = '/assets/im3-BnLoGy_e.jpg',
    P = '/assets/im4-BbO6IKrh.jpg',
    q = () => {
        const [e, i] = l.useState({ x: 0, y: 0 });
        return (
            l.useEffect(() => {
                const s = (n) => {
                    i({ x: n.clientX, y: n.clientY });
                };
                return (
                    window.addEventListener('mousemove', s),
                    () => {
                        window.removeEventListener('mousemove', s);
                    }
                );
            }, []),
            e
        );
    },
    h = [
        { id: 1, icon: z, label: 'Espace création', link: '/builder' },
        { id: 2, icon: L, label: 'Communauté', link: '/blog' },
        {
            id: 3,
            icon: j,
            label: 'Cimetière des projets',
            link: '/assitance/project-graveyard',
        },
        { id: 3, icon: S, label: 'Souvenir', link: '/remember' },
        { id: 4, icon: P, label: 'Hall of fame', link: '/leaderboard' },
    ],
    K = () => {
        const [e, i] = l.useState(!1),
            s = q(),
            n = y(),
            { t: o } = f();
        return A.jsx('div', {
            className: 'fixed right-10 bottom-10 z-50',
            children: A.jsxs('div', {
                className: 'relative',
                children: [
                    A.jsxs(t.button, {
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        onClick: () => i(!e),
                        className:
                            'bg-white-600 flex items-center gap-3 rounded-2xl bg-white px-1 py-1 text-[12px] text-gray-700 shadow-lg transition-colors hover:bg-[#d85dc1] hover:text-white',
                        children: [
                            A.jsx('span', {
                                className:
                                    'h-10 w-10 rounded-xl bg-[#521f48] bg-cover bg-center bg-no-repeat',
                                style: {
                                    backgroundImage: `url(${j})`,
                                    backgroundSize: 'cover',
                                },
                            }),
                            o('floatBtn.title'),
                            A.jsx(t.span, {
                                animate: { rotate: e ? 180 : 0 },
                                transition: { duration: 0.3 },
                                className: 'ml-1',
                                children: '▼',
                            }),
                        ],
                    }),
                    A.jsx(B, {
                        children:
                            e &&
                            A.jsx(t.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                className: 'absolute bottom-12 -left-10 mb-4',
                                children: h.map((a, c) =>
                                    A.jsx(
                                        t.div,
                                        {
                                            className: 'mb-2',
                                            children: A.jsxs(t.div, {
                                                onClick: () => n(a.link),
                                                className:
                                                    'flex w-[200px] cursor-pointer items-center gap-2 rounded-2xl bg-white p-1 text-[13px] text-gray-600 shadow-md transition-colors hover:bg-purple-50',
                                                style: {
                                                    marginBottom: `${s.y * 0.02}px`,
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
                                                    x: s.x * 0.05,
                                                    gap: `${8 + s.y * 0.02}px`,
                                                    transition: {
                                                        duration: 0.2,
                                                        delay: c * 0.05,
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
                                                            (h.length - c - 1) *
                                                            0.1,
                                                    },
                                                },
                                                whileHover: { scale: 1.1 },
                                                children: [
                                                    A.jsx('span', {
                                                        className:
                                                            'h-10 w-10 rounded-xl bg-[#d85dc1] bg-cover bg-center bg-no-repeat',
                                                        style: {
                                                            backgroundImage: `url(${a.icon})`,
                                                        },
                                                    }),
                                                    A.jsx('span', {
                                                        children: a.label,
                                                    }),
                                                ],
                                            }),
                                        },
                                        a.id
                                    )
                                ),
                            }),
                    }),
                ],
            }),
        });
    },
    X = () => {
        const [e, i] = l.useState(!1);
        return A.jsx('div', {
            className: 'fixed bottom-5 left-5 z-20',
            children: A.jsx(t.div, {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { duration: 0.5 },
                className: 'relative',
                children: A.jsxs(t.div, {
                    className:
                        'flex cursor-pointer items-center justify-center bg-green-500 transition-all duration-300',
                    animate: {
                        borderRadius: e ? '20px' : '50%',
                        width: e ? '300px' : '40px',
                        height: e ? '120px' : '40px',
                    },
                    onHoverStart: () => i(!0),
                    onHoverEnd: () => i(!1),
                    children: [
                        A.jsx('div', {
                            className: 'absolute -inset-2',
                            children: A.jsx('div', {
                                className: `h-full w-full animate-ping rounded-full bg-green-500 opacity-20 ${e ? 'hidden' : ''}`,
                            }),
                        }),
                        A.jsxs(t.div, {
                            className:
                                'flex flex-col items-center justify-center px-6',
                            animate: { color: e ? '#22c55e25' : 'white' },
                            children: [
                                A.jsx('span', {
                                    className: `fixed text-2xl font-bold ${e ? 'hidden' : ''}`,
                                    children: 'A',
                                }),
                                e &&
                                    A.jsxs(t.div, {
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1 },
                                        transition: { delay: 0.2 },
                                        className: 'mt-2 text-left',
                                        children: [
                                            A.jsx('h3', {
                                                className:
                                                    'mb-1 font-bold text-white',
                                                children: 'Eco-Friendly',
                                            }),
                                            A.jsx('p', {
                                                className: 'text-xs text-white',
                                                children:
                                                    'Our commitment to environmental sustainability and eco-friendly practices helps create a better future for our planet.',
                                            }),
                                            A.jsx('div', {
                                                id: 'ecoindex-badge',
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
    iA = () =>
        A.jsxs('div', {
            className: 'pointBackground dark:bg-gray-900',
            children: [
                A.jsx(C, {}),
                A.jsx(K, {}),
                A.jsx(X, {}),
                A.jsx(O, {}),
                A.jsx('div', {
                    className: 'gradientBack1',
                    children: A.jsx(w, {}),
                }),
            ],
        });
export { iA as default };
