import {
    r as o,
    i as g,
    M as S,
    j as e,
    e as z,
    k as R,
} from './index-DwbPX98K.js';
import { _ as N, C as T, O as _ } from './OrbitControls-D8O53dbV.js';
import { S as C } from './send-Dk8-qXx1.js';
var A = `#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;
class k extends S {
    constructor(t = {}) {
        super(t),
            this.setValues(t),
            (this._time = { value: 0 }),
            (this._distort = { value: 0.4 }),
            (this._radius = { value: 1 });
    }
    onBeforeCompile(t) {
        (t.uniforms.time = this._time),
            (t.uniforms.radius = this._radius),
            (t.uniforms.distort = this._distort),
            (t.vertexShader = `
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${A}
      ${t.vertexShader}
    `),
            (t.vertexShader = t.vertexShader.replace(
                '#include <begin_vertex>',
                `
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `
            ));
    }
    get time() {
        return this._time.value;
    }
    set time(t) {
        this._time.value = t;
    }
    get distort() {
        return this._distort.value;
    }
    set distort(t) {
        this._distort.value = t;
    }
    get radius() {
        return this._radius.value;
    }
    set radius(t) {
        this._radius.value = t;
    }
}
const E = o.forwardRef(({ speed: s = 1, ...t }, n) => {
        const [i] = o.useState(() => new k());
        return (
            g((a) => i && (i.time = a.clock.elapsedTime * s)),
            o.createElement(
                'primitive',
                N({ object: i, ref: n, attach: 'material' }, t)
            )
        );
    }),
    M = ({ text: s }) => {
        const [t, n] = o.useState([]);
        return (
            o.useEffect(() => {
                let i = 0;
                n([]);
                const a = setInterval(() => {
                    i < s.length
                        ? (n((d) => [...d, s[i]]), i++)
                        : clearInterval(a);
                }, 80);
                return () => clearInterval(a);
            }, [s]),
            e.jsx('div', {
                className: 'animated-text',
                children: t.map((i, a) =>
                    e.jsx('span', { className: 'char', children: i }, a)
                ),
            })
        );
    };
function I({ message: s }) {
    return !s || s === ''
        ? null
        : e.jsx('div', {
              className: 'fixed top-1/2 left-4 z-[99] -translate-y-1/2',
              children: e.jsxs('div', {
                  className:
                      'animate-fade-in flex max-w-sm items-start gap-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-4 shadow-xl',
                  children: [
                      e.jsx('div', {
                          className:
                              'flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white',
                          children: '🤖',
                      }),
                      e.jsxs('div', {
                          children: [
                              e.jsx('h2', {
                                  className:
                                      'mb-1 text-sm font-semibold text-gray-800',
                                  children: 'Bot',
                              }),
                              e.jsx(M, { text: s }),
                              e.jsx('p', {
                                  className: 'mt-2 text-xs text-gray-500',
                                  children: new Date().toLocaleTimeString(),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
function D({ analyser: s }) {
    const t = o.useRef(),
        n = o.useRef(new Uint8Array(32));
    return (
        g(() => {
            if (s && t.current) {
                s.getByteFrequencyData(n.current);
                const a =
                    n.current.reduce((d, c) => d + c, 0) /
                    n.current.length /
                    256;
                (t.current.distort = 0.3 + a * 0.7),
                    (t.current.speed = 1 + a * 15);
            }
        }),
        e.jsxs('mesh', {
            scale: [2, 2, 2],
            children: [
                e.jsx('sphereGeometry', { args: [1, 100, 100] }),
                e.jsx(E, {
                    ref: t,
                    color: '#00ffff',
                    distort: 0.3,
                    speed: 5,
                    roughness: 0.2,
                }),
            ],
        })
    );
}
function L({ audioUrl: s, message: t }) {
    const n = o.useRef(null),
        [i, a] = o.useState(null),
        d = o.useRef(null);
    return (
        o.useEffect(() => {
            console.log(s);
            const c = new Audio(s);
            c.play(), (c.crossOrigin = 'anonymous'), (n.current = c);
            const p = new (window.AudioContext || window.webkitAudioContext)(),
                x = p.createAnalyser(),
                m = p.createMediaElementSource(c);
            return (
                m.connect(x),
                x.connect(p.destination),
                (x.fftSize = 64),
                a(x),
                (d.current = p),
                () => {
                    c.pause(), m.disconnect(), x.disconnect(), p.close();
                }
            );
        }, [s]),
        e.jsxs(e.Fragment, {
            children: [
                e.jsxs(T, {
                    style: { width: '100vw', height: '90vh' },
                    children: [
                        e.jsx('ambientLight', { intensity: 0.8 }),
                        e.jsx('directionalLight', { position: [1, 1, 1] }),
                        e.jsx(o.Suspense, {
                            fallback: null,
                            children: e.jsx(D, { analyser: i }),
                        }),
                        e.jsx(_, {}),
                    ],
                }),
                e.jsx(I, { message: t }),
            ],
        })
    );
}
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q = [
        [
            'path',
            {
                d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z',
                key: '131961',
            },
        ],
        ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2', key: '1vc78b' }],
        ['line', { x1: '12', x2: '12', y1: '19', y2: '22', key: 'x3vr5v' }],
    ],
    O = z('mic', q);
function F({ isOpen: s, onAccept: t, onReject: n }) {
    return s
        ? e.jsxs('div', {
              className: 'fixed inset-0 z-50 flex items-center justify-center',
              children: [
                  e.jsx('div', {
                      className: 'absolute inset-0 bg-black opacity-50',
                  }),
                  e.jsxs('div', {
                      className:
                          'relative z-10 flex w-64 flex-col items-center gap-4 rounded-xl p-5 shadow-2xl',
                      style: {
                          background:
                              'linear-gradient(to bottom, white 50%, #d0eaff 100%)',
                          boxShadow: `
            0 10px 30px rgba(0, 0, 50, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.5)
          `,
                      },
                      children: [
                          e.jsx('div', {
                              className: 'h-[100px] w-[100px]',
                              children: e.jsx('lottie-player', {
                                  src: 'https://lottie.host/5685a641-d486-418a-821a-05cb1f6406ed/QEFc3vi7BE.json',
                                  background: 'transparent',
                                  speed: '1',
                                  loop: !0,
                                  autoplay: !0,
                              }),
                          }),
                          e.jsx('div', {
                              className:
                                  'text-base font-semibold text-blue-900',
                              children: 'Start Conversation',
                          }),
                          e.jsxs('div', {
                              className:
                                  'mt-2 flex w-full justify-between gap-3',
                              children: [
                                  e.jsx('button', {
                                      onClick: n,
                                      className:
                                          'rounded-md bg-gray-100 px-3 py-1 text-[10px] text-gray-700 transition hover:bg-gray-200',
                                      children: 'Refuser',
                                  }),
                                  e.jsx('button', {
                                      onClick: t,
                                      className:
                                          'rounded-md bg-blue-600 px-3 py-1 text-[10px] text-white shadow-md transition hover:bg-blue-700',
                                      children: 'Accepter',
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
const B = ({ onSubmit: s }) => {
        const [t, n] = o.useState(''),
            i = () => {
                t.trim() && (s(t), n(''));
            };
        return e.jsx('div', {
            className:
                'fixed bottom-4 left-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2 transform rounded-2xl border border-gray-200 bg-white/90 px-4 py-1 shadow-xl backdrop-blur-md',
            children: e.jsxs('div', {
                className: 'flex items-end gap-3',
                children: [
                    e.jsx('textarea', {
                        value: t,
                        onChange: (a) => n(a.target.value),
                        placeholder: 'Écris ton message ici...',
                        rows: 1,
                        className:
                            'flex-grow resize-none rounded-xl border border-gray-300 bg-white p-3 text-base shadow-inner transition-all focus:ring-2 focus:ring-blue-400 focus:outline-none',
                    }),
                    e.jsx('button', {
                        onClick: () =>
                            alert('Simulation de transcription vocale'),
                        className:
                            'rounded-full bg-blue-100 p-3 transition-colors hover:bg-blue-200',
                        title: 'Transcription vocale',
                        children: e.jsx(O, {
                            className: 'h-5 w-5 text-blue-600',
                        }),
                    }),
                    e.jsx('button', {
                        onClick: i,
                        className:
                            'rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-3 text-white transition-all hover:from-blue-600 hover:to-blue-800',
                        title: 'Envoyer',
                        children: e.jsx(C, { className: 'h-5 w-5' }),
                    }),
                ],
            }),
        });
    },
    V = async (s) => {
        try {
            return await R(
                `Tu es une intelligence artificielle empathique qui s'appelle Alexandra. 
Tu es là pour écouter et aider les personnes qui traversent une situation difficile, que ce soit au travail, à l’école, à la maison, dans leur couple ou dans tout autre domaine important de leur vie. 
Adapte ta réponse avec bienveillance en fonction du message de la personne. 
Tu peux poser des questions ouvertes, proposer des pistes de réflexion ou simplement offrir du soutien moral selon le contexte.`,
                s || 'salut'
            );
        } catch (t) {
            console.error('Error fetching AI response:', t);
        }
    },
    J = () => {
        const [s, t] = o.useState(null),
            [n, i] = o.useState(
                'Je suis vraiment là pour toi, prête à t’aider à chaque étape. N’hésite surtout pas, tu peux compter sur moi. Tu n’es pas seule.'
            ),
            [a, d] = o.useState(!1),
            [c, p] = o.useState(!0),
            x = o.useRef(null),
            m = '/default_voice.mp3',
            b = () => {
                const l =
                    window.SpeechRecognition || window.webkitSpeechRecognition;
                if (!l) {
                    console.error('Speech Recognition non supporté.');
                    return;
                }
                const r = new l();
                (r.lang = 'fr-FR'),
                    (r.interimResults = !1),
                    (r.continuous = !0),
                    (r.onresult = (u) => {
                        const v =
                            u.results[
                                u.results.length - 1
                            ][0].transcript.trim();
                        console.log('Transcription :', v), v && h(v);
                    }),
                    (r.onerror = (u) => {
                        console.error('Erreur STT :', u.error),
                            u.error === 'network' &&
                                console.error(
                                    'Erreur de reconnaissance vocale : vérifier la connexion Internet et les permissions micro.'
                                ),
                            u.error === 'not-allowed' &&
                                (console.error(
                                    'Permission microphone refusée. Veuillez autoriser l’accès au microphone.'
                                ),
                                f());
                    }),
                    (r.onend = () => {
                        a && r.start();
                    }),
                    r.start(),
                    (x.current = r),
                    d(!0);
            },
            f = () => {
                var l;
                (l = x.current) == null || l.stop(), d(!1);
            },
            w = async (l) => {
                try {
                    const r = await V(l);
                    r && (await h(r));
                } catch (r) {
                    console.error('Erreur lors du traitement du message :', r);
                }
            },
            h = async (l) => {
                try {
                    i(l);
                    const r = await fetch(
                        'https://tts-french-production.up.railway.app/generate_speech/',
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ text: l }),
                        }
                    );
                    if (!r.ok) throw new Error('Échec de génération audio');
                    const u = await r.blob();
                    if (!u.type.startsWith('audio/'))
                        throw new Error('Type audio invalide');
                    const y = URL.createObjectURL(u);
                    t(y);
                } catch (r) {
                    console.error('Erreur TTS :', r);
                }
            },
            j = () => {
                t(m),
                    p(!1),
                    setTimeout(() => {
                        b();
                    }, 2e3);
            };
        return e.jsxs('div', {
            className: 'relative min-h-screen pb-24',
            children: [
                e.jsx(F, { isOpen: c, onAccept: j, onReject: f }),
                !c && e.jsx(B, { onSubmit: w }),
                s && e.jsx(L, { audioUrl: s, message: n }),
            ],
        });
    };
export { J as default };
