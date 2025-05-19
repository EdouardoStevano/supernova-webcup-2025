import { c as j, r as o, j as e, m as c } from './index-BRBA0OY8.js';
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C = [['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }]],
    M = j('play', C);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U = [
        [
            'path',
            {
                d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
                key: '1m0v6g',
            },
        ],
        [
            'path',
            {
                d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
                key: 'ohrbg2',
            },
        ],
    ],
    L = j('square-pen', U),
    v = {
        happy: 'bg-yellow-100 text-yellow-800',
        sad: 'bg-blue-100 text-blue-800',
        angry: 'bg-red-100 text-red-800',
        neutral: 'bg-gray-100 text-gray-700',
        surprised: 'bg-purple-100 text-purple-800',
    };
function O() {
    const r = ['happy', 'sad', 'angry', 'neutral', 'surprised'];
    return r[Math.floor(Math.random() * r.length)];
}
function V() {
    const [r, f] = o.useState(!1),
        [s, g] = o.useState(null),
        [n, w] = o.useState(null),
        [d, b] = o.useState(null),
        [y, h] = o.useState(''),
        [l, u] = o.useState(!1),
        m = o.useRef(null),
        x = o.useRef([]),
        p = o.useRef(null);
    o.useEffect(() => {
        async function a() {
            try {
                const t = await navigator.mediaDevices.getUserMedia({
                    video: !0,
                    audio: !0,
                });
                w(t), p.current && (p.current.srcObject = t);
            } catch (t) {
                alert("Erreur d'accès à la caméra : " + t.message);
            }
        }
        return (
            a(),
            () => {
                n && n.getTracks().forEach((t) => t.stop());
            }
        );
    }, []);
    const N = () => {
            if (!n) return;
            x.current = [];
            const a = { mimeType: 'video/webm; codecs=vp9' },
                t = new MediaRecorder(n, a);
            (m.current = t),
                (t.ondataavailable = (i) => {
                    i.data.size > 0 && x.current.push(i.data);
                }),
                (t.onstop = () => {
                    const i = new Blob(x.current, { type: 'video/webm' }),
                        S = URL.createObjectURL(i);
                    b(S);
                    const E = O();
                    g(E);
                }),
                t.start(),
                f(!0),
                g(null),
                b(null),
                h(''),
                u(!1);
        },
        R = () => {
            m.current && r && (m.current.stop(), f(!1));
        },
        k = () => {
            console.log('Note enregistrée :', y), u(!0);
        };
    return e.jsxs(c.div, {
        className: 'mx-auto max-w-6xl p-8 transition-colors duration-500',
        animate: {
            backgroundColor: s
                ? getComputedStyle(document.documentElement).getPropertyValue(
                      `--tw-${v[s].split(' ')[0]}`
                  )
                : '#ffffff',
            color: s
                ? getComputedStyle(document.documentElement).getPropertyValue(
                      `--tw-${v[s].split(' ')[1]}`
                  )
                : '#1f2937',
        },
        transition: { duration: 1 },
        children: [
            e.jsxs('div', {
                className: 'flex flex-col gap-8 md:flex-row',
                children: [
                    e.jsxs('div', {
                        className:
                            'relative aspect-video flex-1 overflow-hidden rounded-xl bg-black',
                        children: [
                            e.jsx('video', {
                                ref: p,
                                autoPlay: !0,
                                muted: !0,
                                playsInline: !0,
                                className: 'h-full w-full object-cover',
                            }),
                            r &&
                                e.jsxs('div', {
                                    className:
                                        'bg-opacity-60 absolute top-4 left-4 flex items-center space-x-2 rounded bg-black px-4 py-1 select-none',
                                    children: [
                                        e.jsx('span', {
                                            className:
                                                'h-3 w-3 animate-ping rounded-full bg-red-600',
                                        }),
                                        e.jsx('span', {
                                            className:
                                                'text-xs font-semibold text-white',
                                            children: 'Enregistrement...',
                                        }),
                                    ],
                                }),
                            e.jsx('div', {
                                className:
                                    'absolute bottom-4 left-1/2 -translate-x-1/2 transform',
                                children: r
                                    ? e.jsx('button', {
                                          onClick: R,
                                          className:
                                              'rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-700',
                                          children: 'Arrêter',
                                      })
                                    : e.jsxs('button', {
                                          onClick: N,
                                          className:
                                              'flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-700',
                                          children: [
                                              e.jsx(M, { size: 16 }),
                                              'Démarrer',
                                          ],
                                      }),
                            }),
                        ],
                    }),
                    e.jsx(c.div, {
                        className:
                            'relative flex aspect-video flex-1 flex-col items-center overflow-hidden rounded-xl border border-dotted border-gray-500',
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6, ease: 'easeOut' },
                        children: d
                            ? e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx('video', {
                                          src: d,
                                          controls: !0,
                                          className:
                                              'h-full w-full object-cover',
                                      }),
                                      s &&
                                          e.jsx(c.div, {
                                              initial: {
                                                  opacity: 0,
                                                  scale: 0.8,
                                              },
                                              animate: { opacity: 1, scale: 1 },
                                              transition: { duration: 0.5 },
                                              className: `absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${s === 'happy' ? 'bg-yellow-300 text-yellow-900' : s === 'sad' ? 'bg-blue-300 text-blue-900' : s === 'angry' ? 'bg-red-300 text-red-900' : s === 'neutral' ? 'bg-gray-300 text-gray-900' : 'bg-purple-300 text-purple-900'}`,
                                              children: s.toUpperCase(),
                                          }),
                                  ],
                              })
                            : e.jsx('div', {
                                  className:
                                      'flex h-full items-center justify-center text-lg text-gray-400 italic select-none',
                                  children: e.jsx('p', {
                                      children: 'Aucune vidéo enregistrée',
                                  }),
                              }),
                    }),
                ],
            }),
            d &&
                e.jsxs(c.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, ease: 'easeOut' },
                    className: 'mt-6',
                    children: [
                        e.jsx('label', {
                            className:
                                'mb-1 block text-[12px] font-medium text-gray-700',
                            children: 'Votre notre :',
                        }),
                        e.jsxs('div', {
                            className: 'relative w-full md:w-1/2',
                            children: [
                                e.jsx('textarea', {
                                    type: 'text',
                                    value: y,
                                    onChange: (a) => h(a.target.value),
                                    readOnly: l,
                                    placeholder: 'Ajouter une note...',
                                    className: `w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm shadow-sm transition focus:ring-2 focus:ring-blue-500 focus:outline-none ${l ? 'cursor-not-allowed bg-gray-100' : ''}`,
                                }),
                                l &&
                                    e.jsx('button', {
                                        onClick: () => u(!1),
                                        className:
                                            'absolute top-1/2 right-2 -translate-y-1/2 transform text-xs text-blue-500 hover:text-blue-700',
                                        title: 'Modifier',
                                        children: e.jsx(L, { size: 14 }),
                                    }),
                            ],
                        }),
                        !l &&
                            e.jsx('button', {
                                onClick: k,
                                className:
                                    'mt-2 rounded-md bg-blue-600 px-4 py-1 text-[12px] font-medium text-white transition hover:bg-blue-700',
                                children: 'Enregistrer',
                            }),
                    ],
                }),
        ],
    });
}
export { V as default };
