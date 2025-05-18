const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CNjxEuN3.js',
            'assets/index-DwbPX98K.js',
            'assets/index-DlgFKUes.css',
            'assets/blogNavBar-BDOQ8rAS.js',
            'assets/blogContainer-D11zQbg4.js',
            'assets/lottie-4koyQiv_.js',
            'assets/pagesContainer-BvZgbJPC.js',
            'assets/index-DtXB6XQr.js',
            'assets/index-fdT-esFM.js',
            'assets/index-BcdMkzvf.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-pWeRw9_r.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as _,
    a as e,
    N as r,
    r as s,
    _ as o,
} from './index-DwbPX98K.js';
const l = s.lazy(() =>
        o(() => import('./index-CNjxEuN3.js'), __vite__mapDeps([0, 1, 2, 3]))
    ),
    n = s.lazy(() =>
        o(
            () => import('./blogContainer-D11zQbg4.js'),
            __vite__mapDeps([4, 1, 2, 5])
        )
    ),
    a = s.lazy(() =>
        o(
            () => import('./pagesContainer-BvZgbJPC.js'),
            __vite__mapDeps([6, 1, 2, 3])
        )
    ),
    i = s.lazy(() =>
        o(
            () => import('./index-DtXB6XQr.js'),
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
