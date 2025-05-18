const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CqXZdOoj.js',
            'assets/index-OJhCvT-m.js',
            'assets/index--VWmHt85.css',
            'assets/mainBuilder-DXoEWJ4t.js',
            'assets/index-BLJQodIG.js',
            'assets/index-D0YMfIlv.js',
            'assets/index-fA6Y_ZRz.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-DBKEDdkh.js',
        ])
) => i.map((i) => d[i]);
import {
    j as e,
    R as r,
    a as t,
    N as a,
    r as s,
    _ as o,
} from './index-OJhCvT-m.js';
const i = s.lazy(() =>
        o(() => import('./index-CqXZdOoj.js'), __vite__mapDeps([0, 1, 2]))
    ),
    _ = s.lazy(() =>
        o(() => import('./mainBuilder-DXoEWJ4t.js'), __vite__mapDeps([3, 1, 2]))
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-BLJQodIG.js'),
            __vite__mapDeps([4, 1, 2, 5, 6, 7, 8])
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
