const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-C2c7Mp9N.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/index-hZT88v7D.js',
            'assets/index-BjnEytZW.js',
            'assets/index-2QmJLMX8.js',
            'assets/useTranslation-C44EKeck.js',
            'assets/index-CJZBJ5zk.css',
            'assets/home-Bqw5LnqP.js',
            'assets/clsx-B-dksMZM.js',
            'assets/home-BqiKjDH-.css',
            'assets/index-BC3zyj99.js',
            'assets/lottie-4koyQiv_.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-D8lQuXat.js',
        ])
) => i.map((i) => d[i]);
import { j as t, R as n, a as e, r as s, _ as o } from './index-BRBA0OY8.js';
const a = s.lazy(() =>
        o(
            () => import('./index-C2c7Mp9N.js'),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./home-Bqw5LnqP.js'),
            __vite__mapDeps([8, 1, 2, 6, 3, 4, 9, 10])
        )
    ),
    _ = s.lazy(() =>
        o(
            () => import('./index-BC3zyj99.js'),
            __vite__mapDeps([11, 1, 2, 4, 12, 3, 13, 14])
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
