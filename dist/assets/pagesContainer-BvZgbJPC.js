import { D as j, r as c, j as s } from './index-DwbPX98K.js';
import { p as N } from './blogNavBar-BDOQ8rAS.js';
const p = ['👍', '❤️', '😂', '🔥', '😮'],
    S = 'blogReactions',
    g = 'blogUserReactions';
function w() {
    let n = localStorage.getItem('blogUserId');
    return (
        n ||
            ((n = Math.random().toString(36).slice(2) + Date.now()),
            localStorage.setItem('blogUserId', n)),
        n
    );
}
const I = () => {
    const { id: n } = j(),
        [y, m] = c.useState(() => N);
    c.useEffect(() => {
        const e = localStorage.getItem('personalPages');
        if (e)
            try {
                m(JSON.parse(e));
            } catch {
                m(N);
            }
    }, []);
    const t = y.find((e) => String(e.id) === n),
        [d, h] = c.useState({}),
        [i, u] = c.useState({});
    c.useEffect(() => {
        if (t && t.publications) {
            let e = {};
            const a = localStorage.getItem(S);
            if (a)
                try {
                    e = JSON.parse(a);
                } catch {
                    e = {};
                }
            const o = t.publications.reduce(
                (x, f) => (
                    (x[f.id] = e[f.id] || {}),
                    p.forEach((b) => {
                        typeof x[f.id][b] != 'number' && (x[f.id][b] = 0);
                    }),
                    x
                ),
                {}
            );
            h(o);
            let l = {};
            const r = localStorage.getItem(g);
            if (r)
                try {
                    l = JSON.parse(r);
                } catch {
                    l = {};
                }
            u(l[w()] || {});
        }
    }, [t]),
        c.useEffect(() => {
            Object.keys(d).length > 0 &&
                localStorage.setItem(S, JSON.stringify(d));
        }, [d]),
        c.useEffect(() => {
            const e = JSON.parse(localStorage.getItem(g) || '{}');
            (e[w()] = i), localStorage.setItem(g, JSON.stringify(e));
        }, [i]);
    const R = (e, a) => {
        var o;
        ((o = i[e]) != null && o.includes(a)) ||
            (h((l) => {
                var r;
                return {
                    ...l,
                    [e]: {
                        ...l[e],
                        [a]: (((r = l[e]) == null ? void 0 : r[a]) || 0) + 1,
                    },
                };
            }),
            u((l) => ({ ...l, [e]: [...(l[e] || []), a] })));
    };
    return t
        ? s.jsxs('div', {
              className:
                  'flex h-screen w-full flex-col items-center overflow-y-scroll bg-[#313338] px-2 py-8',
              children: [
                  s.jsxs('div', {
                      className:
                          'mb-8 flex w-full max-w-2xl items-center gap-4 rounded-xl border border-[#232428] bg-[#232428] p-6 shadow-lg',
                      children: [
                          s.jsx('img', {
                              src: t.avatar,
                              alt: t.label,
                              className: 'h-20 w-20 rounded-full border-4',
                              style: { borderColor: t.color },
                          }),
                          s.jsxs('div', {
                              children: [
                                  s.jsx('h2', {
                                      className:
                                          'text-3xl font-bold text-white',
                                      children: t.label,
                                  }),
                                  t.url &&
                                      s.jsx('a', {
                                          href: t.url,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          className:
                                              'text-[#b5bac1] hover:underline',
                                          style: { color: t.color },
                                          children: t.url,
                                      }),
                              ],
                          }),
                      ],
                  }),
                  s.jsx('section', {
                      className: 'flex w-full max-w-2xl flex-col gap-6',
                      children: t.publications.map((e) =>
                          s.jsxs(
                              'div',
                              {
                                  className:
                                      'flex flex-col gap-3 rounded-lg border border-[#383a40] bg-[#232428] p-5 shadow',
                                  children: [
                                      s.jsxs('div', {
                                          className: 'flex items-center gap-3',
                                          children: [
                                              s.jsx('img', {
                                                  src: t.avatar,
                                                  alt: t.label,
                                                  className:
                                                      'h-10 w-10 rounded-full border-2',
                                                  style: {
                                                      borderColor: t.color,
                                                  },
                                              }),
                                              s.jsx('span', {
                                                  className:
                                                      'font-semibold text-white',
                                                  children: t.label,
                                              }),
                                              s.jsx('span', {
                                                  className:
                                                      'ml-auto text-xs text-[#b5bac1]',
                                                  children: e.title,
                                              }),
                                          ],
                                      }),
                                      s.jsx('img', {
                                          src: e.moodGif,
                                          alt: 'mood',
                                          className:
                                              'mb-2 w-full rounded border border-[#383a40]',
                                      }),
                                      s.jsx('div', {
                                          className: 'mt-2 flex gap-2',
                                          children: p.map((a) => {
                                              var o, l, r;
                                              return s.jsxs(
                                                  'button',
                                                  {
                                                      onClick: () => R(e.id, a),
                                                      className: `flex items-center gap-1 rounded bg-[#383a40] px-2 py-1 text-white transition hover:bg-[#404249] ${(o = i[e.id]) != null && o.includes(a) ? 'cursor-not-allowed opacity-50' : ''}`,
                                                      type: 'button',
                                                      disabled:
                                                          (l = i[e.id]) == null
                                                              ? void 0
                                                              : l.includes(a),
                                                      children: [
                                                          s.jsx('span', {
                                                              children: a,
                                                          }),
                                                          s.jsx('span', {
                                                              className:
                                                                  'text-xs',
                                                              children:
                                                                  ((r =
                                                                      d[
                                                                          e.id
                                                                      ]) == null
                                                                      ? void 0
                                                                      : r[a]) ||
                                                                  0,
                                                          }),
                                                      ],
                                                  },
                                                  a
                                              );
                                          }),
                                      }),
                                  ],
                              },
                              e.id
                          )
                      ),
                  }),
              ],
          })
        : s.jsx('div', {
              className: 'mt-10 text-center text-white',
              children: 'Page non trouvée',
          });
};
export { I as default };
