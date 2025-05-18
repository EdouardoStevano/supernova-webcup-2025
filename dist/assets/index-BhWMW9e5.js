const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CaMR9tpR.js',
            'assets/index-CkKx-SB9.js',
            'assets/index-Dc8MUX8g.css',
            'assets/souvenir-B7szLXHI.js',
            'assets/OrbitControls-CBEvJJ3c.js',
            'assets/index-BBz7iv6X.js',
            'assets/index-Du4onkjd.js',
            'assets/index-D3jsOSc0.js',
            'assets/souvenir-B27vEYEw.css',
            'assets/index-YUhooQEv.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-DISLUmAd.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-CuHcGG1j.js',
        ])
) => i.map((i) => d[i]);
import {
    j as e,
    R as r,
    a as t,
    N as a,
    r as o,
    _ as s,
} from './index-CkKx-SB9.js';
const n = o.lazy(() =>
        s(() => import('./index-CaMR9tpR.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = o.lazy(() =>
        s(
            () => import('./souvenir-B7szLXHI.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8])
        )
    ),
    _ = o.lazy(() =>
        s(
            () => import('./index-YUhooQEv.js'),
            __vite__mapDeps([9, 1, 2, 6, 10, 11, 12, 13])
        )
    ),
    x = () =>
        e.jsxs(r, {
            children: [
                e.jsxs(t, {
                    path: '',
                    element: e.jsx(n, {}),
                    children: [
                        e.jsx(t, {
                            index: !0,
                            element: e.jsx(a, { to: '/souvenir/main' }),
                        }),
                        e.jsx(t, { path: 'main', element: e.jsx(i, {}) }),
                    ],
                }),
                e.jsx(t, { path: '*', element: e.jsx(_, {}) }),
            ],
        });
export { x as default };
