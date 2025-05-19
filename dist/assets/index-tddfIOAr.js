const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-Du3z3tU5.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/index-DbG5_gx-.js',
            'assets/index-BjnEytZW.js',
            'assets/authService-DHxwl4GY.js',
            'assets/users-D_sYzQY4.js',
            'assets/chevron-down-DSxN27mY.js',
            'assets/send-B9wKO6Sc.js',
            'assets/home-CsQWJW8r.js',
            'assets/clsx-B-dksMZM.js',
            'assets/data-CUMUAZyn.js',
            'assets/users-DtXalZi2.js',
            'assets/profile-B40v8X7W.js',
            'assets/index-BC3zyj99.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-hZT88v7D.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-D8lQuXat.js',
        ])
) => i.map((i) => d[i]);
import {
    j as e,
    R as a,
    a as t,
    N as r,
    r as s,
    P as _,
    _ as o,
} from './index-BRBA0OY8.js';
const d = s.lazy(() =>
        o(
            () => import('./index-Du3z3tU5.js'),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])
        )
    ),
    i = s.lazy(() =>
        o(() => import('./home-CsQWJW8r.js'), __vite__mapDeps([9, 1, 2, 10, 4]))
    ),
    n = s.lazy(() =>
        o(() => import('./data-CUMUAZyn.js'), __vite__mapDeps([11, 1, 2]))
    ),
    l = s.lazy(() =>
        o(() => import('./users-DtXalZi2.js'), __vite__mapDeps([12, 1, 2, 6]))
    ),
    x = s.lazy(() =>
        o(
            () => import('./profile-B40v8X7W.js'),
            __vite__mapDeps([13, 1, 2, 5, 6])
        )
    ),
    m = s.lazy(() =>
        o(
            () => import('./index-BC3zyj99.js'),
            __vite__mapDeps([14, 1, 2, 4, 15, 16, 17, 18])
        )
    ),
    h = () =>
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
                            e.jsx(t, { path: 'data', element: e.jsx(n, {}) }),
                            e.jsx(t, { path: 'users', element: e.jsx(l, {}) }),
                            e.jsx(t, {
                                path: 'profile',
                                element: e.jsx(x, {}),
                            }),
                        ],
                    }),
                    e.jsx(t, { path: '*', element: e.jsx(m, {}) }),
                ],
            }),
        });
export { h as default };
