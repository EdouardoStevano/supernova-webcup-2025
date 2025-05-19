const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CDqXkYCa.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/index-BC3zyj99.js',
            'assets/index-BjnEytZW.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-hZT88v7D.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-D8lQuXat.js',
            'assets/index-D6tMjOpN.js',
        ])
) => i.map((i) => d[i]);
import { j as e, R as a, a as t, r as o, _ as r } from './index-BRBA0OY8.js';
const i = o.lazy(() =>
        r(() => import('./index-CDqXkYCa.js'), __vite__mapDeps([0, 1, 2]))
    ),
    d = o.lazy(() =>
        r(
            () => import('./index-BRBA0OY8.js').then((_) => _.ah),
            __vite__mapDeps([1, 2])
        )
    ),
    s = o.lazy(() =>
        r(
            () => import('./index-BC3zyj99.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8])
        )
    ),
    n = o.lazy(() =>
        r(
            () => import('./index-D6tMjOpN.js'),
            __vite__mapDeps([9, 1, 2, 6, 4, 8])
        )
    ),
    x = () =>
        e.jsx(a, {
            children: e.jsxs(t, {
                path: '',
                element: e.jsx(i, {}),
                children: [
                    e.jsx(t, { index: !0, element: e.jsx(s, {}) }),
                    e.jsx(t, { path: 'loader', element: e.jsx(d, {}) }),
                    e.jsx(t, { path: 'not-Authorized', element: e.jsx(n, {}) }),
                    e.jsx(t, { path: 'not-found', element: e.jsx(s, {}) }),
                ],
            }),
        });
export { x as default };
