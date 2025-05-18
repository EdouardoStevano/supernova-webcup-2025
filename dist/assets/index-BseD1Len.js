const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-D0p2Wmi4.js',
            'assets/index-DwbPX98K.js',
            'assets/index-DlgFKUes.css',
            'assets/index-Bw4zFK1E.js',
            'assets/index-DtXB6XQr.js',
            'assets/index-fdT-esFM.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-BcdMkzvf.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-pWeRw9_r.js',
            'assets/index-Crpp_-bM.js',
        ])
) => i.map((i) => d[i]);
import { j as e, R as _, a as t, r as o, _ as r } from './index-DwbPX98K.js';
const a = o.lazy(() =>
        r(() => import('./index-D0p2Wmi4.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = o.lazy(() =>
        r(() => import('./index-Bw4zFK1E.js'), __vite__mapDeps([3, 1, 2]))
    ),
    s = o.lazy(() =>
        r(
            () => import('./index-DtXB6XQr.js'),
            __vite__mapDeps([4, 1, 2, 5, 6, 7, 8, 9])
        )
    ),
    d = o.lazy(() =>
        r(
            () => import('./index-Crpp_-bM.js'),
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
