const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-ClkihPa4.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/signIn-DlAVaXoo.js',
            'assets/copyright-DefirsrT.js',
            'assets/index-2QmJLMX8.js',
            'assets/useTranslation-C44EKeck.js',
            'assets/index-hZT88v7D.js',
            'assets/index-BjnEytZW.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/authService-DHxwl4GY.js',
            'assets/users-D_sYzQY4.js',
            'assets/eye-BIZu7uzw.js',
            'assets/signUp-7h-gedxb.js',
            'assets/index-BC3zyj99.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-D8lQuXat.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as n,
    a as e,
    N as a,
    r as s,
    _ as o,
} from './index-BRBA0OY8.js';
const _ = s.lazy(() =>
        o(() => import('./index-ClkihPa4.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = s.lazy(() =>
        o(
            () => import('./signIn-DlAVaXoo.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./signUp-7h-gedxb.js'),
            __vite__mapDeps([13, 1, 2, 4, 5, 6, 9, 7, 8, 12])
        )
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-BC3zyj99.js'),
            __vite__mapDeps([14, 1, 2, 8, 15, 7, 9, 16])
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
