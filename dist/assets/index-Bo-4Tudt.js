const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-OPd3K-Y6.js',
            'assets/index-CkKx-SB9.js',
            'assets/index-Dc8MUX8g.css',
            'assets/index-BYZsyQRz.js',
            'assets/index-YUhooQEv.js',
            'assets/index-Du4onkjd.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-DISLUmAd.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-CuHcGG1j.js',
            'assets/index-BpGdGrhS.js',
        ])
) => i.map((i) => d[i]);
import { j as e, R as _, a as t, r as o, _ as r } from './index-CkKx-SB9.js';
const a = o.lazy(() =>
        r(() => import('./index-OPd3K-Y6.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = o.lazy(() =>
        r(() => import('./index-BYZsyQRz.js'), __vite__mapDeps([3, 1, 2]))
    ),
    s = o.lazy(() =>
        r(
            () => import('./index-YUhooQEv.js'),
            __vite__mapDeps([4, 1, 2, 5, 6, 7, 8, 9])
        )
    ),
    d = o.lazy(() =>
        r(
            () => import('./index-BpGdGrhS.js'),
            __vite__mapDeps([10, 1, 2, 7, 5, 9])
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
