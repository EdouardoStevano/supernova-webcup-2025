const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-C7YifRuc.js',
            'assets/index-i9ws2I_8.js',
            'assets/index-Dr9HVKrp.css',
            'assets/index-XxzlgHND.css',
            'assets/home-ez4cTY2I.js',
            'assets/index-HEJIVRFa.js',
            'assets/index-Bph5bGAK.js',
            'assets/index-D7RVabCY.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-D_wSXCHA.js',
        ])
) => i.map((i) => d[i]);
import { j as t, R as n, a as e, r as s, _ as o } from './index-i9ws2I_8.js';
const a = s.lazy(() =>
        o(() => import('./index-C7YifRuc.js'), __vite__mapDeps([0, 1, 2, 3]))
    ),
    r = s.lazy(() =>
        o(() => import('./home-ez4cTY2I.js'), __vite__mapDeps([4, 1, 2]))
    ),
    _ = s.lazy(() =>
        o(
            () => import('./index-HEJIVRFa.js'),
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
