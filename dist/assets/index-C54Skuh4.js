const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-a1vxjRqJ.js',
            'assets/index-DwbPX98K.js',
            'assets/index-DlgFKUes.css',
            'assets/signIn-_ceTPmF3.js',
            'assets/copyright-BNMBL2Hu.js',
            'assets/index-DqfP81eW.js',
            'assets/useTranslation-B7Ddawmm.js',
            'assets/index-BcdMkzvf.js',
            'assets/index-fdT-esFM.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/eye-D90DUWMx.js',
            'assets/signUp-DVQSfBx0.js',
            'assets/index-DtXB6XQr.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-pWeRw9_r.js',
        ])
) => i.map((i) => d[i]);
import {
    j as t,
    R as n,
    a as e,
    N as a,
    r as s,
    _ as o,
} from './index-DwbPX98K.js';
const _ = s.lazy(() =>
        o(() => import('./index-a1vxjRqJ.js'), __vite__mapDeps([0, 1, 2]))
    ),
    i = s.lazy(() =>
        o(
            () => import('./signIn-_ceTPmF3.js'),
            __vite__mapDeps([3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./signUp-DVQSfBx0.js'),
            __vite__mapDeps([12, 1, 2, 4, 5, 6, 9, 7, 8, 11])
        )
    ),
    u = s.lazy(() =>
        o(
            () => import('./index-DtXB6XQr.js'),
            __vite__mapDeps([13, 1, 2, 8, 14, 7, 9, 15])
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
