const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-Dtlk5OL8.js',
            'assets/index-CkKx-SB9.js',
            'assets/index-Dc8MUX8g.css',
            'assets/auth1-DlM34e_H.js',
            'assets/index-DISLUmAd.js',
            'assets/index-Du4onkjd.js',
            'assets/index-CDc91rxv.js',
            'assets/useTranslation-C0yrwBsQ.js',
            'assets/index-CJZBJ5zk.css',
            'assets/home-aYHNpY65.js',
            'assets/index-D3jsOSc0.js',
            'assets/home-BqiKjDH-.css',
            'assets/index-YUhooQEv.js',
            'assets/lottie-4koyQiv_.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-CuHcGG1j.js',
        ])
) => i.map((i) => d[i]);
import { j as t, R as n, a as e, r as s, _ as o } from './index-CkKx-SB9.js';
const a = s.lazy(() =>
        o(
            () => import('./index-Dtlk5OL8.js'),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./home-aYHNpY65.js'),
            __vite__mapDeps([9, 1, 2, 7, 4, 5, 10, 3, 11])
        )
    ),
    _ = s.lazy(() =>
        o(
            () => import('./index-YUhooQEv.js'),
            __vite__mapDeps([12, 1, 2, 5, 13, 4, 14, 15])
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
