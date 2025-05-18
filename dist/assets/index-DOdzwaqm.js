const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CqzNWXXq.js',
            'assets/index-DwbPX98K.js',
            'assets/index-DlgFKUes.css',
            'assets/chevron-down-3SqIvgSl.js',
            'assets/palette-8R_pbFLM.js',
            'assets/mainBuilder-DGzDQsRD.js',
            'assets/eye-D90DUWMx.js',
            'assets/index-DtXB6XQr.js',
            'assets/index-fdT-esFM.js',
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
    r as s,
    _ as o,
} from './index-DwbPX98K.js';
const i = s.lazy(() =>
        o(() => import('./index-CqzNWXXq.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
    ),
    _ = s.lazy(() =>
        o(
            () => import('./mainBuilder-DGzDQsRD.js'),
            __vite__mapDeps([5, 1, 2, 4, 6])
        )
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-DtXB6XQr.js'),
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
