const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/index-CHxO7deF.js',
            'assets/index-BRBA0OY8.js',
            'assets/index-D1xbiLJK.css',
            'assets/send-B9wKO6Sc.js',
        ])
) => i.map((i) => d[i]);
import { j as s, R as t, a as e, r, _ as a } from './index-BRBA0OY8.js';
const o = r.lazy(() =>
        a(() => import('./index-CHxO7deF.js'), __vite__mapDeps([0, 1, 2, 3]))
    ),
    n = () =>
        s.jsx(t, { children: s.jsx(e, { index: !0, element: s.jsx(o, {}) }) });
export { n as default };
