import {
    c as i,
    r as n,
    f as C,
    h as S,
    j as e,
    i as c,
    O as L,
} from './index-BRBA0OY8.js';
import { M as z } from './index-DbG5_gx-.js';
import { a as A } from './authService-DHxwl4GY.js';
import { C as D } from './chevron-down-DSxN27mY.js';
import { S as P } from './send-B9wKO6Sc.js';
import './index-BjnEytZW.js';
import './users-D_sYzQY4.js';
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R = [
        ['path', { d: 'M10.268 21a2 2 0 0 0 3.464 0', key: 'vwvbt9' }],
        [
            'path',
            {
                d: 'M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326',
                key: '11g9vi',
            },
        ],
    ],
    _ = i('bell', R);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O = [
        [
            'path',
            { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', key: 'jecpp' },
        ],
        [
            'rect',
            {
                width: '20',
                height: '14',
                x: '2',
                y: '6',
                rx: '2',
                key: 'i6l2r4',
            },
        ],
    ],
    E = i('briefcase', O);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
    T = i('chevron-right', I);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G = [
        [
            'path',
            { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' },
        ],
        [
            'path',
            {
                d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
                key: '1d0kgt',
            },
        ],
    ],
    U = i('house', G),
    $ = [
        {
            date: 'Today',
            notifications: [
                {
                    id: '1',
                    title: 'New Message from John Doe',
                    content:
                        "Hey, I've reviewed your latest project submission. Great work!",
                    image: 'https://randomuser.me/api/portraits/men/1.jpg',
                    expanded: !1,
                },
                {
                    id: '2',
                    title: 'Project Update',
                    content:
                        'The deadline for Project X has been extended by 2 days.',
                    image: 'https://randomuser.me/api/portraits/women/2.jpg',
                    expanded: !1,
                },
            ],
        },
        {
            date: 'Yesterday',
            notifications: [
                {
                    id: '3',
                    title: 'Meeting Reminder',
                    content:
                        "Don't forget about tomorrow's team meeting at 10 AM.",
                    image: 'https://randomuser.me/api/portraits/women/3.jpg',
                    expanded: !1,
                },
            ],
        },
        {
            date: 'Last Week',
            notifications: [
                {
                    id: '4',
                    title: 'Task Assignment',
                    content:
                        "You've been assigned to the new AI implementation project.",
                    image: 'https://randomuser.me/api/portraits/men/4.jpg',
                    expanded: !1,
                },
                {
                    id: '5',
                    title: 'System Update',
                    content:
                        'The platform will undergo maintenance this weekend.',
                    image: 'https://randomuser.me/api/portraits/men/24.jpg',
                    expanded: !1,
                },
                {
                    id: '6',
                    title: 'System Update',
                    content:
                        'The platform will undergo maintenance this weekend.',
                    image: 'https://randomuser.me/api/portraits/men/8.jpg',
                    expanded: !1,
                },
            ],
        },
    ],
    B = ({ menuGroups: j }) => {
        const [m, x] = n.useState(!1),
            [h, b] = n.useState($),
            [u, p] = n.useState(!1),
            l = n.useRef(null),
            d = n.useRef(null),
            v = C(),
            [w, f] = n.useState(!1),
            N = () => f(!0),
            g = () => f(!1),
            r = S();
        n.useEffect(() => {
            function t(s) {
                l.current && !l.current.contains(s.target) && x(!1),
                    d.current && !d.current.contains(s.target) && p(!1);
            }
            return (
                document.addEventListener('mousedown', t),
                () => document.removeEventListener('mousedown', t)
            );
        }, []);
        function y() {
            console.log('Mark all as read'), alert('Mark all as read');
        }
        function k(t) {
            b((s) =>
                s.map((a) => ({
                    ...a,
                    notifications: a.notifications.map((o) =>
                        o.id === t ? { ...o, expanded: !o.expanded } : o
                    ),
                }))
            );
        }
        async function M() {
            try {
                await A.logout().then(() => {
                    v('/auth');
                });
            } catch (t) {
                console.error('Logout failed:', t);
            }
        }
        return e.jsxs('div', {
            className:
                'animate-swipe-down fixed bottom-0 z-20 h-auto w-full items-center justify-center rounded-b-[20px] md:relative md:flex md:h-[80px] md:bg-white/80',
            children: [
                e.jsx(z, {
                    isOpen: w,
                    onClose: g,
                    title: 'Déconnexion',
                    size: 'md',
                    footer: e.jsxs('div', {
                        className: 'flex justify-end gap-3',
                        children: [
                            e.jsx('button', {
                                onClick: g,
                                className:
                                    'cursor-pointer rounded-xl bg-gray-200 px-6 py-2 text-gray-700 transition hover:bg-gray-300',
                                children: 'Annuler',
                            }),
                            e.jsx('button', {
                                onClick: M,
                                className:
                                    'cursor-pointer rounded-xl bg-red-600 px-6 py-2 text-white transition hover:bg-red-700',
                                children: 'Déconnecter',
                            }),
                        ],
                    }),
                    children: e.jsxs('div', {
                        className: 'px-2 py-4',
                        children: [
                            e.jsx('h3', {
                                className:
                                    'mb-2 text-xl font-semibold text-gray-800',
                                children: 'Confirmation de déconnexion',
                            }),
                            e.jsx('p', {
                                className: 'mb-2 text-[14px] text-gray-600',
                                children:
                                    'Êtes-vous sûr de vouloir vous déconnecter ?',
                            }),
                        ],
                    }),
                }),
                e.jsxs('div', {
                    className:
                        'z-20 m-4 flex max-w-[1400px] flex-col items-center justify-between rounded-2xl bg-white/80 p-2 md:m-0 md:w-full md:flex-row md:bg-transparent md:px-14',
                    children: [
                        e.jsxs('div', {
                            className: 'hidden items-center md:flex',
                            children: [
                                e.jsx('img', {
                                    src: '/favicon.svg',
                                    alt: 'Logo',
                                    className:
                                        'h-auto w-16 transition-all md:w-10',
                                    id: 'tour1',
                                }),
                                e.jsx('span', {
                                    className: 'ml-2',
                                    children: 'TheEndPage',
                                }),
                            ],
                        }),
                        e.jsx('nav', {
                            className: 'flex items-center',
                            children: e.jsx('ul', {
                                className: 'flex items-center space-x-4',
                                children: j.map((t, s) =>
                                    e.jsx(
                                        'li',
                                        {
                                            children: e.jsxs(c, {
                                                to: t.link,
                                                className:
                                                    'dashLink md:bg-custom-light-gray rounded-[50px] bg-transparent text-[14px] text-gray-700',
                                                children: [
                                                    e.jsx('span', {
                                                        className: 'nav-icon',
                                                        children: t.icon,
                                                    }),
                                                    e.jsx('span', {
                                                        className:
                                                            'nav-text fade md:ml-2 md:flex',
                                                        children: t.text,
                                                    }),
                                                ],
                                            }),
                                        },
                                        s
                                    )
                                ),
                            }),
                        }),
                        e.jsxs('div', {
                            className:
                                'fixed right-4 bottom-[93vh] z-20 flex items-center space-x-3 md:relative md:top-0 lg:space-x-4',
                            children: [
                                e.jsxs('div', {
                                    ref: l,
                                    className: 'relative',
                                    id: 'tour2',
                                    children: [
                                        e.jsxs('button', {
                                            onClick: () => x(!m),
                                            className:
                                                'text-custom-dark-gray hover:bg-primary-300 relative z-20 h-9 w-9 cursor-pointer rounded-md bg-white/80 p-[5.5px] transition-colors hover:text-white md:rounded-full md:bg-white',
                                            children: [
                                                e.jsx(_, {
                                                    className:
                                                        'text-lg lg:text-xl',
                                                }),
                                                e.jsx('span', {
                                                    className:
                                                        'absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-xs text-white',
                                                    children: h.reduce(
                                                        (t, s) =>
                                                            t +
                                                            s.notifications
                                                                .length,
                                                        0
                                                    ),
                                                }),
                                            ],
                                        }),
                                        m &&
                                            e.jsxs('div', {
                                                className:
                                                    'fadein shadow-medium absolute -right-8 z-50 mt-2 w-[340px] overflow-hidden rounded-[24px] bg-white/80 backdrop-blur-md lg:-right-4 lg:w-[500px]',
                                                children: [
                                                    e.jsxs('header', {
                                                        className:
                                                            'flex items-center justify-between border-b border-gray-300 p-4',
                                                        children: [
                                                            e.jsx('h1', {
                                                                className:
                                                                    'text-[20px] font-bold',
                                                                children:
                                                                    'Notifications',
                                                            }),
                                                            e.jsx('button', {
                                                                onClick: y,
                                                                className:
                                                                    'text-sm font-semibold text-orange-500 hover:text-orange-300',
                                                                children:
                                                                    'Mark all as read',
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'max-h-96 overflow-y-auto p-4 px-8',
                                                        children: h.map(
                                                            (t, s) =>
                                                                e.jsxs(
                                                                    'section',
                                                                    {
                                                                        children:
                                                                            [
                                                                                e.jsx(
                                                                                    'h3',
                                                                                    {
                                                                                        className:
                                                                                            'py-2 text-sm font-medium text-gray-500',
                                                                                        children:
                                                                                            t.date,
                                                                                    }
                                                                                ),
                                                                                e.jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'overflow-hidden rounded-[20px] bg-gray-100',
                                                                                        children:
                                                                                            t.notifications.map(
                                                                                                (
                                                                                                    a,
                                                                                                    o
                                                                                                ) =>
                                                                                                    e.jsxs(
                                                                                                        'article',
                                                                                                        {
                                                                                                            className: `group transition hover:bg-gray-50 ${o !== t.notifications.length - 1 ? 'border-b border-b-gray-300' : ''}`,
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsxs(
                                                                                                                        'button',
                                                                                                                        {
                                                                                                                            onClick:
                                                                                                                                () =>
                                                                                                                                    k(
                                                                                                                                        a.id
                                                                                                                                    ),
                                                                                                                            className:
                                                                                                                                'flex w-full cursor-pointer items-center justify-between p-4',
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    e.jsxs(
                                                                                                                                        'div',
                                                                                                                                        {
                                                                                                                                            className:
                                                                                                                                                'flex items-center',
                                                                                                                                            children:
                                                                                                                                                [
                                                                                                                                                    e.jsx(
                                                                                                                                                        'img',
                                                                                                                                                        {
                                                                                                                                                            src: a.image,
                                                                                                                                                            alt: '',
                                                                                                                                                            className:
                                                                                                                                                                'mr-3 h-10 w-10 rounded-full',
                                                                                                                                                        }
                                                                                                                                                    ),
                                                                                                                                                    e.jsx(
                                                                                                                                                        'p',
                                                                                                                                                        {
                                                                                                                                                            className:
                                                                                                                                                                'text-sm font-medium',
                                                                                                                                                            children:
                                                                                                                                                                a.title,
                                                                                                                                                        }
                                                                                                                                                    ),
                                                                                                                                                ],
                                                                                                                                        }
                                                                                                                                    ),
                                                                                                                                    a.expanded
                                                                                                                                        ? e.jsx(
                                                                                                                                              D,
                                                                                                                                              {
                                                                                                                                                  className:
                                                                                                                                                      'mr-3 h-4 w-4 text-gray-400',
                                                                                                                                              }
                                                                                                                                          )
                                                                                                                                        : e.jsx(
                                                                                                                                              T,
                                                                                                                                              {
                                                                                                                                                  className:
                                                                                                                                                      'mr-3 h-4 w-4 text-gray-400',
                                                                                                                                              }
                                                                                                                                          ),
                                                                                                                                ],
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    a.expanded &&
                                                                                                                        e.jsx(
                                                                                                                            'div',
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    'fade px-11 pb-4',
                                                                                                                                children:
                                                                                                                                    e.jsx(
                                                                                                                                        'p',
                                                                                                                                        {
                                                                                                                                            className:
                                                                                                                                                'text-sm text-gray-600',
                                                                                                                                            children:
                                                                                                                                                a.content,
                                                                                                                                        }
                                                                                                                                    ),
                                                                                                                            }
                                                                                                                        ),
                                                                                                                ],
                                                                                                        },
                                                                                                        a.id
                                                                                                    )
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    },
                                                                    s
                                                                )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                                e.jsxs('div', {
                                    ref: d,
                                    className: 'relative',
                                    children: [
                                        e.jsx('button', {
                                            onClick: () => p(!u),
                                            className: 'cursor-pointer',
                                            children: e.jsx('div', {
                                                className: `flex h-8 w-8 items-center justify-center overflow-hidden rounded-full font-bold text-white transition hover:border-3 md:h-7 md:w-7 lg:h-8 lg:w-8 ${r.image ? '' : 'bg-primary-500 border-primary-200'}`,
                                                children: r.image
                                                    ? e.jsx('img', {
                                                          src: r.image,
                                                          alt: 'Profile',
                                                          className:
                                                              'h-full w-full object-cover',
                                                      })
                                                    : r.name.charAt(0),
                                            }),
                                        }),
                                        u &&
                                            e.jsxs('div', {
                                                className:
                                                    'fadein absolute right-0 z-50 mt-2 w-48 divide-y divide-gray-100 overflow-hidden rounded-[15px] bg-white/80 shadow-lg backdrop-blur-md',
                                                children: [
                                                    e.jsxs('div', {
                                                        className:
                                                            'flex gap-2 p-3',
                                                        children: [
                                                            e.jsx('img', {
                                                                className:
                                                                    'h-10 w-10 rounded-full',
                                                                src: r.image,
                                                                alt: '',
                                                            }),
                                                            e.jsxs('div', {
                                                                className:
                                                                    'flex flex-col text-gray-800',
                                                                children: [
                                                                    e.jsxs(
                                                                        'span',
                                                                        {
                                                                            className:
                                                                                'text-[14px]',
                                                                            children:
                                                                                [
                                                                                    'Bonjour',
                                                                                    ' ',
                                                                                    e.jsx(
                                                                                        'span',
                                                                                        {
                                                                                            className:
                                                                                                'font-semibold',
                                                                                            children:
                                                                                                r.username,
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    e.jsx(
                                                                        'span',
                                                                        {
                                                                            className:
                                                                                'text-[12px] text-gray-500',
                                                                            children:
                                                                                r.role,
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsxs('nav', {
                                                        children: [
                                                            e.jsx(c, {
                                                                to: '/dashboard/profile',
                                                                className:
                                                                    'hover:bg-primary-300 block w-full px-4 py-2 text-sm text-gray-700 transition hover:text-white',
                                                                children:
                                                                    'Profile',
                                                            }),
                                                            e.jsx(c, {
                                                                to: '/dashboard/settings/account',
                                                                className:
                                                                    'hover:bg-primary-300 block w-full px-4 py-2 text-sm text-gray-700 transition hover:text-white',
                                                                children:
                                                                    'Settings',
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx('div', {
                                                        children: e.jsx(
                                                            'button',
                                                            {
                                                                onClick: N,
                                                                className:
                                                                    'block w-full cursor-pointer px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-600 hover:text-white',
                                                                children:
                                                                    'Déconnexion',
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    H = () =>
        e.jsx('div', {
            className: 'fixed right-8 bottom-8 z-50 hidden md:flex',
            children: e.jsx('button', {
                className:
                    'cursor-auto rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600',
                'aria-label': 'Get assistance',
                children: e.jsx('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: 'h-6 w-6',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    children: e.jsx('path', {
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: 2,
                        d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                    }),
                }),
            }),
        }),
    q = [
        { text: 'Statistiques', icon: e.jsx(U, {}), link: '/dashboard/home' },
        { text: 'Données', icon: e.jsx(E, {}), link: '/dashboard/data' },
        { text: 'Utilisateurs', icon: e.jsx(P, {}), link: '/dashboard/users' },
    ],
    Q = () =>
        e.jsxs('div', {
            className:
                'h-screen max-h-[100vh] cursor-auto overflow-hidden bg-gray-200',
            children: [
                e.jsx(B, { menuGroups: q }),
                e.jsx('div', {
                    className:
                        'content flex h-[86%] w-full justify-center overflow-y-auto',
                    children: e.jsx(L, {}),
                }),
                e.jsx(H, {}),
            ],
        });
export { Q as default };
