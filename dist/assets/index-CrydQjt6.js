const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-DszXvj6w.js',
            'assets/index-DwbPX98K.js',
            'assets/index-DlgFKUes.css',
            'assets/auth1-DlM34e_H.js',
            'assets/index-BcdMkzvf.js',
            'assets/index-fdT-esFM.js',
            'assets/index-DqfP81eW.js',
            'assets/useTranslation-B7Ddawmm.js',
            'assets/index-CJZBJ5zk.css',
            'assets/home-BpF1nsnc.js',
            'assets/index-D3jsOSc0.js',
            'assets/home-BqiKjDH-.css',
            'assets/index-DtXB6XQr.js',
            'assets/lottie-4koyQiv_.js',
            'assets/Cube-found-ChOUz20m.js',
            'assets/index-pWeRw9_r.js',
        ])
) => i.map((i) => d[i]);
import { j as t, R as n, a as e, r as s, _ as o } from './index-DwbPX98K.js';
const a = s.lazy(() =>
        o(
            () => import('./index-DszXvj6w.js'),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])
        )
    ),
    r = s.lazy(() =>
        o(
            () => import('./home-BpF1nsnc.js'),
            __vite__mapDeps([9, 1, 2, 7, 4, 5, 10, 3, 11])
        )
    ),
    _ = s.lazy(() =>
        o(
            () => import('./index-DtXB6XQr.js'),
            __vite__mapDeps([12, 1, 2, 5, 13, 4, 14, 15])
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
