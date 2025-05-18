const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-C7N_qidi.js',
            'assets/index-i9ws2I_8.js',
            'assets/index-Dr9HVKrp.css',
            'assets/index-Bph5bGAK.js',
            'assets/authService-Dw-SZnhP.js',
            'assets/home-CV0Q8l6K.js',
            'assets/profile-Bsu_B88X.js',
            'assets/index-HEJIVRFa.js',
            'assets/index-D7RVabCY.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-D_wSXCHA.js',
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
} from './index-i9ws2I_8.js';
const d = o.lazy(() =>
        s(() => import('./index-C7N_qidi.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
    ),
    i = o.lazy(() =>
        s(() => import('./home-CV0Q8l6K.js'), __vite__mapDeps([5, 1, 2]))
    ),
    n = o.lazy(() =>
        s(() => import('./profile-Bsu_B88X.js'), __vite__mapDeps([6, 1, 2, 4]))
    ),
    l = o.lazy(() =>
        s(
            () => import('./index-HEJIVRFa.js'),
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
