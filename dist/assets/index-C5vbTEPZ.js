import { j as e, O as a } from './index-BRBA0OY8.js';
import { B as l } from './blogNavBar-DvTwF6rw.js';
const r = [
    {
        title: 'À propos de The ENDPAGE',
        content:
            'Bienvenue sur The End Pages ! Ici, nous partageons nos hummeur .',
    },
    {
        title: 'Catégories',
        content: e.jsxs('ul', {
            className: 'ml-3 list-disc text-sm text-gray-300',
            children: [
                e.jsx('li', { children: 'THe end Pages' }),
                e.jsx('li', { children: 'Toutes' }),
            ],
        }),
    },
    {
        title: 'Réseaux sociaux',
        content: e.jsxs('div', {
            className: 'mt-1 flex gap-3',
            children: [
                e.jsx('a', {
                    href: '#',
                    className: 'hover:text-[#ce47bc]',
                    children: 'Twitter',
                }),
                e.jsx('a', {
                    href: '#',
                    className: 'hover:text-[#ce47bc]',
                    children: 'LinkedIn',
                }),
                e.jsx('a', {
                    href: '#',
                    className: 'hover:text-[#ce47bc]',
                    children: 'GitHub',
                }),
            ],
        }),
    },
];
function c() {
    return e.jsxs('aside', {
        className:
            'fixed top-0 right-0 z-40 flex h-full w-72 flex-col gap-6 border-l border-[#23272a] bg-[#2f3136] p-5 shadow-lg',
        style: { minWidth: 260 },
        children: [
            e.jsxs('div', {
                className: 'mb-4 flex items-center gap-2',
                children: [
                    e.jsx('span', {
                        className: 'h-3 w-3 rounded-full bg-green-500',
                    }),
                    e.jsx('h2', {
                        className: 'text-lg font-bold tracking-wide text-white',
                        children: 'The ENDPAGE',
                    }),
                ],
            }),
            r.map((s, t) =>
                e.jsxs(
                    'div',
                    {
                        className: 'rounded-lg bg-[#36393f] p-4 shadow-inner',
                        children: [
                            e.jsx('h3', {
                                className: 'mb-2 text-sm font-semibold',
                                style: { color: '#ce47bc' },
                                children: s.title,
                            }),
                            e.jsx('div', {
                                className: 'text-sm text-gray-300',
                                children: s.content,
                            }),
                        ],
                    },
                    t
                )
            ),
            e.jsx('div', {
                className: 'mt-auto text-center text-xs text-gray-500',
                children: '© 2025 Supernova Webcup',
            }),
        ],
    });
}
const d = () =>
    e.jsxs('div', {
        className: 'flex',
        children: [
            e.jsx('div', { children: e.jsx(l, {}) }),
            e.jsx('div', {
                className: 'fadeIn w-[calc(100%-688px)]',
                children: e.jsx(a, {}),
            }),
            e.jsx('div', { children: e.jsx(c, {}) }),
        ],
    });
export { d as default };
