const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-BM1TxODq.js',
            'assets/index-i9ws2I_8.js',
            'assets/index-Dr9HVKrp.css',
            'assets/signIn-BJf_s_h3.js',
            'assets/index-9LGvTAvr.js',
            'assets/index-D7RVabCY.js',
            'assets/index-Bph5bGAK.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/signUp-ptMaFOF5.js',
            'assets/index-HEJIVRFa.js',
            'assets/index-D_wSXCHA.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as n,
    a as e,
    N as a,
    r as s,
    _ as o,
} from './index-i9ws2I_8.js';
const _ = s.lazy(() =>
        o(() => import('./index-BM1TxODq.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = s.lazy(() =>
        o(
            () => import('./signIn-BJf_s_h3.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./signUp-ptMaFOF5.js'),
            __vite__mapDeps([9, 1, 2, 4, 7, 5, 6])
        )
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-HEJIVRFa.js'),
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
