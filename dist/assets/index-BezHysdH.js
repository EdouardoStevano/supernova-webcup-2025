const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CimC8LZR.js',
            'assets/index-DwbPX98K.js',
            'assets/index-DlgFKUes.css',
            'assets/souvenir-BeFJzjPY.js',
            'assets/OrbitControls-D8O53dbV.js',
            'assets/index-DAXrDGCK.js',
            'assets/index-fdT-esFM.js',
            'assets/index-D3jsOSc0.js',
            'assets/souvenir-B27vEYEw.css',
            'assets/index-DtXB6XQr.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-BcdMkzvf.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-pWeRw9_r.js',
        ])
) => i.map((i) => d[i]);
import {
    j as e,
    R as r,
    a as t,
    N as a,
    r as o,
    _ as s,
} from './index-DwbPX98K.js';
const n = o.lazy(() =>
        s(() => import('./index-CimC8LZR.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = o.lazy(() =>
        s(
            () => import('./souvenir-BeFJzjPY.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8])
        )
    ),
    _ = o.lazy(() =>
        s(
            () => import('./index-DtXB6XQr.js'),
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
