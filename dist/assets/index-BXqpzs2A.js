const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-BwUxRhtn.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/souvenir-WiLiMvXT.js',
            'assets/index-DbG5_gx-.js',
            'assets/index-BjnEytZW.js',
            'assets/souvenir-B27vEYEw.css',
            'assets/index-BC3zyj99.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-hZT88v7D.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-D8lQuXat.js',
        ])
) => i.map((i) => d[i]);
import {
    j as e,
    R as r,
    a as t,
    N as a,
    r as o,
    _ as s,
} from './index-BRBA0OY8.js';
const n = o.lazy(() =>
        s(() => import('./index-BwUxRhtn.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = o.lazy(() =>
        s(
            () => import('./souvenir-WiLiMvXT.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6])
        )
    ),
    _ = o.lazy(() =>
        s(
            () => import('./index-BC3zyj99.js'),
            __vite__mapDeps([7, 1, 2, 5, 8, 9, 10, 11])
        )
    ),
    m = () =>
        e.jsxs(r, {
            children: [
                e.jsxs(t, {
                    path: '',
                    element: e.jsx(n, {}),
                    children: [
                        e.jsx(t, {
                            index: !0,
                            element: e.jsx(a, { to: '/remember/main' }),
                        }),
                        e.jsx(t, { path: 'main', element: e.jsx(i, {}) }),
                    ],
                }),
                e.jsx(t, { path: '*', element: e.jsx(_, {}) }),
            ],
        });
export { m as default };
