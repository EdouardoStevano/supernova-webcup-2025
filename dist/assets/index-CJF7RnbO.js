const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-BNkSdooa.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/chevron-down-DSxN27mY.js',
            'assets/palette-gdAEGhtr.js',
            'assets/mainBuilder-D2HRuXI-.js',
            'assets/eye-BIZu7uzw.js',
            'assets/index-BC3zyj99.js',
            'assets/index-BjnEytZW.js',
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
    r as s,
    _ as o,
} from './index-BRBA0OY8.js';
const i = s.lazy(() =>
        o(() => import('./index-BNkSdooa.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
    ),
    _ = s.lazy(() =>
        o(
            () => import('./mainBuilder-D2HRuXI-.js'),
            __vite__mapDeps([5, 1, 2, 4, 6])
        )
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-BC3zyj99.js'),
            __vite__mapDeps([7, 1, 2, 8, 9, 10, 11, 12])
        )
    ),
    l = () =>
        e.jsxs(r, {
            children: [
                e.jsxs(t, {
                    path: '',
                    element: e.jsx(i, {}),
                    children: [
                        e.jsx(t, {
                            index: !0,
                            element: e.jsx(a, { to: '/builder/main' }),
                        }),
                        e.jsx(t, { path: 'main', element: e.jsx(_, {}) }),
                    ],
                }),
                e.jsx(t, { path: '*', element: e.jsx(u, {}) }),
            ],
        });
export { l as default };
