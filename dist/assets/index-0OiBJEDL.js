const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CM4qbx56.js',
            'assets/index-OJhCvT-m.js',
            'assets/index--VWmHt85.css',
            'assets/index-D0YMfIlv.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/home-Bo-awiPG.js',
            'assets/profile-Ckd_DuJi.js',
            'assets/index-BLJQodIG.js',
            'assets/index-fA6Y_ZRz.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-DBKEDdkh.js',
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
} from './index-OJhCvT-m.js';
const d = o.lazy(() =>
        s(() => import('./index-CM4qbx56.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
    ),
    i = o.lazy(() =>
        s(() => import('./home-Bo-awiPG.js'), __vite__mapDeps([5, 1, 2]))
    ),
    n = o.lazy(() =>
        s(() => import('./profile-Ckd_DuJi.js'), __vite__mapDeps([6, 1, 2, 4]))
    ),
    l = o.lazy(() =>
        s(
            () => import('./index-BLJQodIG.js'),
            __vite__mapDeps([7, 1, 2, 3, 8, 9, 10])
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
