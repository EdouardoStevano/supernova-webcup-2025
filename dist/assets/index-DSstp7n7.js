const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-BHR-hX2u.js',
            'assets/index-BoZEYj4b.js',
            'assets/index-G9epB887.css',
            'assets/index-BHaTUoQu.js',
            'assets/index-SALmAzEP.js',
            'assets/index-BAK5nF8x.js',
            'assets/index--PclSZn2.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-q5K6F14o.js',
            'assets/index-BWGg-iRL.js',
        ])
) => i.map((i) => d[i]);
import { j as e, R as _, a as t, r as o, _ as r } from './index-BoZEYj4b.js';
const a = o.lazy(() =>
        r(() => import('./index-BHR-hX2u.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = o.lazy(() =>
        r(() => import('./index-BHaTUoQu.js'), __vite__mapDeps([3, 1, 2]))
    ),
    s = o.lazy(() =>
        r(
            () => import('./index-SALmAzEP.js'),
            __vite__mapDeps([4, 1, 2, 5, 6, 7, 8])
        )
    ),
    d = o.lazy(() =>
        r(
            () => import('./index-BWGg-iRL.js'),
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
