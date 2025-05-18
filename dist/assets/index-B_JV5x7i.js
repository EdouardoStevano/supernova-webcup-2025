const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-BUS-C_Gj.js',
            'assets/index-CkKx-SB9.js',
            'assets/index-Dc8MUX8g.css',
            'assets/signIn-BW6FStv5.js',
            'assets/copyright-DZzFaAYi.js',
            'assets/index-CDc91rxv.js',
            'assets/useTranslation-C0yrwBsQ.js',
            'assets/index-DISLUmAd.js',
            'assets/index-Du4onkjd.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/eye-BUixvHpD.js',
            'assets/signUp-B6WvN29h.js',
            'assets/index-YUhooQEv.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-CuHcGG1j.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as n,
    a as e,
    N as a,
    r as s,
    _ as o,
} from './index-CkKx-SB9.js';
const _ = s.lazy(() =>
        o(() => import('./index-BUS-C_Gj.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = s.lazy(() =>
        o(
            () => import('./signIn-BW6FStv5.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./signUp-B6WvN29h.js'),
            __vite__mapDeps([12, 1, 2, 4, 5, 6, 9, 7, 8, 11])
        )
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-YUhooQEv.js'),
            __vite__mapDeps([13, 1, 2, 8, 14, 7, 9, 15])
        )
    ),
    p = () =>
        t.jsxs(n, {
            children: [
                t.jsxs(e, {
                    path: '',
                    element: t.jsx(_, {}),
                    children: [
                        t.jsx(e, {
                            index: !0,
                            element: t.jsx(a, { to: '/auth/signin' }),
                        }),
                        t.jsx(e, { path: 'signin', element: t.jsx(i, {}) }),
                        t.jsx(e, { path: 'signup', element: t.jsx(r, {}) }),
                    ],
                }),
                t.jsx(e, { path: '*', element: t.jsx(u, {}) }),
            ],
        });
export { p as default };
