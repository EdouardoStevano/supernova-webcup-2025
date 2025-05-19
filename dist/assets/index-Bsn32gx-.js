const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-C5vbTEPZ.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/blogNavBar-DvTwF6rw.js',
            'assets/blogContainer-DQeziIdY.js',
            'assets/lottie-4koyQiv_.js',
            'assets/pagesContainer-CHCyTV_r.js',
            'assets/index-BC3zyj99.js',
            'assets/index-BjnEytZW.js',
            'assets/index-hZT88v7D.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-D8lQuXat.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as _,
    a as e,
    N as r,
    r as s,
    _ as o,
} from './index-BRBA0OY8.js';
const l = s.lazy(() =>
        o(() => import('./index-C5vbTEPZ.js'), __vite__mapDeps([0, 1, 2, 3]))
    ),
    n = s.lazy(() =>
        o(
            () => import('./blogContainer-DQeziIdY.js'),
            __vite__mapDeps([4, 1, 2, 5])
        )
    ),
    a = s.lazy(() =>
        o(
            () => import('./pagesContainer-CHCyTV_r.js'),
            __vite__mapDeps([6, 1, 2, 3])
        )
    ),
    i = s.lazy(() =>
        o(
            () => import('./index-BC3zyj99.js'),
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
