const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-DrrnmFr5.js',
            'assets/index-OJhCvT-m.js',
            'assets/index--VWmHt85.css',
            'assets/signIn-C74K3dqA.js',
            'assets/index-BdGWmhXY.js',
            'assets/index-fA6Y_ZRz.js',
            'assets/index-D0YMfIlv.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/signUp-V3NbTS9i.js',
            'assets/index-BLJQodIG.js',
            'assets/index-DBKEDdkh.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as n,
    a as e,
    N as a,
    r as s,
    _ as o,
} from './index-OJhCvT-m.js';
const _ = s.lazy(() =>
        o(() => import('./index-DrrnmFr5.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = s.lazy(() =>
        o(
            () => import('./signIn-C74K3dqA.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./signUp-V3NbTS9i.js'),
            __vite__mapDeps([9, 1, 2, 4, 7, 5, 6])
        )
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-BLJQodIG.js'),
            __vite__mapDeps([10, 1, 2, 6, 5, 7, 11])
        )
    ),
    p = () =>
        t.jsxs(n, {
            children: [
                t.jsxs(e, {
                    path: '',
                    element: t.jsx(_, {}),
                    children: [
                        t.jsx(e, {
                            index: !0,
                            element: t.jsx(a, { to: '/auth/signin' }),
                        }),
                        t.jsx(e, { path: 'signin', element: t.jsx(i, {}) }),
                        t.jsx(e, { path: 'signup', element: t.jsx(r, {}) }),
                    ],
                }),
                t.jsx(e, { path: '*', element: t.jsx(u, {}) }),
            ],
        });
export { p as default };
