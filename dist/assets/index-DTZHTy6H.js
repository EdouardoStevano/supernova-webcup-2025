const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-BnnqVyzF.js',
            'assets/index-CkKx-SB9.js',
            'assets/index-Dc8MUX8g.css',
            'assets/blogNavBar-Dqow0TsH.js',
            'assets/blogContainer-CambwNKC.js',
            'assets/lottie-4koyQiv_.js',
            'assets/pagesContainer-DJKJwpNo.js',
            'assets/index-YUhooQEv.js',
            'assets/index-Du4onkjd.js',
            'assets/index-DISLUmAd.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-CuHcGG1j.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as _,
    a as e,
    N as r,
    r as s,
    _ as o,
} from './index-CkKx-SB9.js';
const l = s.lazy(() =>
        o(() => import('./index-BnnqVyzF.js'), __vite__mapDeps([0, 1, 2, 3]))
    ),
    n = s.lazy(() =>
        o(
            () => import('./blogContainer-CambwNKC.js'),
            __vite__mapDeps([4, 1, 2, 5])
        )
    ),
    a = s.lazy(() =>
        o(
            () => import('./pagesContainer-DJKJwpNo.js'),
            __vite__mapDeps([6, 1, 2, 3])
        )
    ),
    i = s.lazy(() =>
        o(
            () => import('./index-YUhooQEv.js'),
            __vite__mapDeps([7, 1, 2, 8, 5, 9, 10, 11])
        )
    ),
    m = () =>
        t.jsxs(_, {
            children: [
                t.jsxs(e, {
                    path: '',
                    element: t.jsx(l, {}),
                    children: [
                        t.jsx(e, {
                            index: !0,
                            element: t.jsx(r, { to: '/blog/main' }),
                        }),
                        t.jsx(e, { path: 'main', element: t.jsx(n, {}) }),
                        t.jsx(e, { path: 'pages', element: t.jsx(a, {}) }),
                        t.jsx(e, { path: 'pages/:id', element: t.jsx(a, {}) }),
                    ],
                }),
                t.jsx(e, { path: '*', element: t.jsx(i, {}) }),
            ],
        });
export { m as default };
