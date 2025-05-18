const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-C7udMm-_.js',
            'assets/index-OJhCvT-m.js',
            'assets/index--VWmHt85.css',
            'assets/index-BdhDZGJw.js',
            'assets/index-BLJQodIG.js',
            'assets/index-D0YMfIlv.js',
            'assets/index-fA6Y_ZRz.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-DBKEDdkh.js',
            'assets/index-BsvD1ex4.js',
        ])
) => i.map((i) => d[i]);
import { j as e, R as _, a as t, r as o, _ as r } from './index-OJhCvT-m.js';
const a = o.lazy(() =>
        r(() => import('./index-C7udMm-_.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = o.lazy(() =>
        r(() => import('./index-BdhDZGJw.js'), __vite__mapDeps([3, 1, 2]))
    ),
    s = o.lazy(() =>
        r(
            () => import('./index-BLJQodIG.js'),
            __vite__mapDeps([4, 1, 2, 5, 6, 7, 8])
        )
    ),
    d = o.lazy(() =>
        r(
            () => import('./index-BsvD1ex4.js'),
            __vite__mapDeps([9, 1, 2, 6, 5, 8])
        )
    ),
    u = () =>
        e.jsx(_, {
            children: e.jsxs(t, {
                path: '',
                element: e.jsx(a, {}),
                children: [
                    e.jsx(t, { index: !0, element: e.jsx(s, {}) }),
                    e.jsx(t, { path: 'loader', element: e.jsx(i, {}) }),
                    e.jsx(t, { path: 'not-Authorized', element: e.jsx(d, {}) }),
                    e.jsx(t, { path: 'not-found', element: e.jsx(s, {}) }),
                ],
            }),
        });
export { u as default };
