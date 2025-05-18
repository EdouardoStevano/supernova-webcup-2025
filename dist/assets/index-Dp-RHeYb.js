const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-B2a5bBKq.js',
            'assets/index-DwbPX98K.js',
            'assets/index-DlgFKUes.css',
            'assets/index-DAXrDGCK.js',
            'assets/index-fdT-esFM.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/chevron-down-3SqIvgSl.js',
            'assets/send-Dk8-qXx1.js',
            'assets/home-BjdGZsEG.js',
            'assets/profile-DXfNUZd4.js',
            'assets/index-DtXB6XQr.js',
            'assets/lottie-4koyQiv_.js',
            'assets/index-BcdMkzvf.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-pWeRw9_r.js',
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
} from './index-DwbPX98K.js';
const d = o.lazy(() =>
        s(
            () => import('./index-B2a5bBKq.js'),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
        )
    ),
    i = o.lazy(() =>
        s(() => import('./home-BjdGZsEG.js'), __vite__mapDeps([8, 1, 2]))
    ),
    n = o.lazy(() =>
        s(() => import('./profile-DXfNUZd4.js'), __vite__mapDeps([9, 1, 2, 5]))
    ),
    l = o.lazy(() =>
        s(
            () => import('./index-DtXB6XQr.js'),
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
