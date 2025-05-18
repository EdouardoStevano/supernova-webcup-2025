const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-BI1y9OZ3.js',
            'assets/index-OJhCvT-m.js',
            'assets/index--VWmHt85.css',
            'assets/index-XxzlgHND.css',
            'assets/home-BSHUnJag.js',
            'assets/index-BLJQodIG.js',
            'assets/index-D0YMfIlv.js',
            'assets/index-fA6Y_ZRz.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-DBKEDdkh.js',
        ])
) => i.map((i) => d[i]);
import { j as t, R as n, a as e, r as s, _ as o } from './index-OJhCvT-m.js';
const a = s.lazy(() =>
        o(() => import('./index-BI1y9OZ3.js'), __vite__mapDeps([0, 1, 2, 3]))
    ),
    r = s.lazy(() =>
        o(() => import('./home-BSHUnJag.js'), __vite__mapDeps([4, 1, 2]))
    ),
    _ = s.lazy(() =>
        o(
            () => import('./index-BLJQodIG.js'),
            __vite__mapDeps([5, 1, 2, 6, 7, 8, 9])
        )
    ),
    d = () =>
        t.jsxs(n, {
            children: [
                t.jsx(e, {
                    path: '',
                    element: t.jsx(a, {}),
                    children: t.jsx(e, { index: !0, element: t.jsx(r, {}) }),
                }),
                t.jsx(e, { path: '*', element: t.jsx(_, {}) }),
            ],
        });
export { d as default };
