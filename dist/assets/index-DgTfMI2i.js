const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CpxRoHlp.js',
            'assets/index-CkKx-SB9.js',
            'assets/index-Dc8MUX8g.css',
            'assets/index-BBz7iv6X.js',
            'assets/index-Du4onkjd.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/chevron-down-BOUXGEku.js',
            'assets/send-C4XcKoCK.js',
            'assets/home-2Y6Midky.js',
            'assets/profile-BzLhi--n.js',
            'assets/index-YUhooQEv.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-DISLUmAd.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-CuHcGG1j.js',
        ])
) => i.map((i) => d[i]);
import {
    j as e,
    R as a,
    a as t,
    N as r,
    r as o,
    P as _,
    _ as s,
} from './index-CkKx-SB9.js';
const d = o.lazy(() =>
        s(
            () => import('./index-CpxRoHlp.js'),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
        )
    ),
    i = o.lazy(() =>
        s(() => import('./home-2Y6Midky.js'), __vite__mapDeps([8, 1, 2]))
    ),
    n = o.lazy(() =>
        s(() => import('./profile-BzLhi--n.js'), __vite__mapDeps([9, 1, 2, 5]))
    ),
    l = o.lazy(() =>
        s(
            () => import('./index-YUhooQEv.js'),
            __vite__mapDeps([10, 1, 2, 4, 11, 12, 13, 14])
        )
    ),
    m = () =>
        e.jsx(a, {
            children: e.jsxs(t, {
                path: '',
                element: e.jsx(d, {}),
                children: [
                    e.jsx(t, {
                        index: !0,
                        element: e.jsx(r, { to: '/dashboard/home' }),
                    }),
                    e.jsxs(t, {
                        element: e.jsx(_, { requiredRoles: ['admin'] }),
                        children: [
                            e.jsx(t, { path: 'home', element: e.jsx(i, {}) }),
                            e.jsx(t, {
                                path: 'profile',
                                element: e.jsx(n, {}),
                            }),
                        ],
                    }),
                    e.jsx(t, { path: 'not-found', element: e.jsx(l, {}) }),
                ],
            }),
        });
export { m as default };
