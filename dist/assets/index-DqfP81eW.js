import { e as z, r as L, l as xe, j as M } from './index-DwbPX98K.js';
import { u as Ce } from './useTranslation-B7Ddawmm.js';
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ke = [
        ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
    ],
    Ie = z('moon', ke);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ee = [
        [
            'path',
            {
                d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8',
                key: '14sxne',
            },
        ],
        ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
        [
            'path',
            {
                d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16',
                key: '1hlbsb',
            },
        ],
        ['path', { d: 'M16 16h5v5', key: 'ccwih5' }],
    ],
    Te = z('refresh-ccw', Ee);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pe = [
        ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
        ['path', { d: 'M12 2v2', key: 'tus03m' }],
        ['path', { d: 'M12 20v2', key: '1lh1kg' }],
        ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
        ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
        ['path', { d: 'M2 12h2', key: '1t8f8n' }],
        ['path', { d: 'M20 12h2', key: '1q8mjw' }],
        ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
        ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
    ],
    Se = z('sun', Pe);
var U = {};
(function P(g, C, S, b) {
    var I = !!(
            g.Worker &&
            g.Blob &&
            g.Promise &&
            g.OffscreenCanvas &&
            g.OffscreenCanvasRenderingContext2D &&
            g.HTMLCanvasElement &&
            g.HTMLCanvasElement.prototype.transferControlToOffscreen &&
            g.URL &&
            g.URL.createObjectURL
        ),
        N = typeof Path2D == 'function' && typeof DOMMatrix == 'function',
        j = (function () {
            if (!g.OffscreenCanvas) return !1;
            var r = new OffscreenCanvas(1, 1),
                e = r.getContext('2d');
            e.fillRect(0, 0, 1, 1);
            var a = r.transferToImageBitmap();
            try {
                e.createPattern(a, 'no-repeat');
            } catch {
                return !1;
            }
            return !0;
        })();
    function p() {}
    function E(r) {
        var e = C.exports.Promise,
            a = e !== void 0 ? e : g.Promise;
        return typeof a == 'function' ? new a(r) : (r(p, p), null);
    }
    var O = (function (r, e) {
            return {
                transform: function (a) {
                    if (r) return a;
                    if (e.has(a)) return e.get(a);
                    var n = new OffscreenCanvas(a.width, a.height),
                        o = n.getContext('2d');
                    return o.drawImage(a, 0, 0), e.set(a, n), n;
                },
                clear: function () {
                    e.clear();
                },
            };
        })(j, new Map()),
        R = (function () {
            var r = Math.floor(16.666666666666668),
                e,
                a,
                n = {},
                o = 0;
            return (
                typeof requestAnimationFrame == 'function' &&
                typeof cancelAnimationFrame == 'function'
                    ? ((e = function (s) {
                          var i = Math.random();
                          return (
                              (n[i] = requestAnimationFrame(function t(l) {
                                  o === l || o + r - 1 < l
                                      ? ((o = l), delete n[i], s())
                                      : (n[i] = requestAnimationFrame(t));
                              })),
                              i
                          );
                      }),
                      (a = function (s) {
                          n[s] && cancelAnimationFrame(n[s]);
                      }))
                    : ((e = function (s) {
                          return setTimeout(s, r);
                      }),
                      (a = function (s) {
                          return clearTimeout(s);
                      })),
                { frame: e, cancel: a }
            );
        })(),
        J = (function () {
            var r,
                e,
                a = {};
            function n(o) {
                function s(i, t) {
                    o.postMessage({ options: i || {}, callback: t });
                }
                (o.init = function (t) {
                    var l = t.transferControlToOffscreen();
                    o.postMessage({ canvas: l }, [l]);
                }),
                    (o.fire = function (t, l, h) {
                        if (e) return s(t, null), e;
                        var u = Math.random().toString(36).slice(2);
                        return (
                            (e = E(function (d) {
                                function f(v) {
                                    v.data.callback === u &&
                                        (delete a[u],
                                        o.removeEventListener('message', f),
                                        (e = null),
                                        O.clear(),
                                        h(),
                                        d());
                                }
                                o.addEventListener('message', f),
                                    s(t, u),
                                    (a[u] = f.bind(null, {
                                        data: { callback: u },
                                    }));
                            })),
                            e
                        );
                    }),
                    (o.reset = function () {
                        o.postMessage({ reset: !0 });
                        for (var t in a) a[t](), delete a[t];
                    });
            }
            return function () {
                if (r) return r;
                if (!S && I) {
                    var o = [
                        'var CONFETTI, SIZE = {}, module = {};',
                        '(' + P.toString() + ')(this, module, true, SIZE);',
                        'onmessage = function(msg) {',
                        '  if (msg.data.options) {',
                        '    CONFETTI(msg.data.options).then(function () {',
                        '      if (msg.data.callback) {',
                        '        postMessage({ callback: msg.data.callback });',
                        '      }',
                        '    });',
                        '  } else if (msg.data.reset) {',
                        '    CONFETTI && CONFETTI.reset();',
                        '  } else if (msg.data.resize) {',
                        '    SIZE.width = msg.data.resize.width;',
                        '    SIZE.height = msg.data.resize.height;',
                        '  } else if (msg.data.canvas) {',
                        '    SIZE.width = msg.data.canvas.width;',
                        '    SIZE.height = msg.data.canvas.height;',
                        '    CONFETTI = module.exports.create(msg.data.canvas);',
                        '  }',
                        '}',
                    ].join(`
`);
                    try {
                        r = new Worker(URL.createObjectURL(new Blob([o])));
                    } catch (s) {
                        return (
                            typeof console !== void 0 &&
                                typeof console.warn == 'function' &&
                                console.warn('🎊 Could not load worker', s),
                            null
                        );
                    }
                    n(r);
                }
                return r;
            };
        })(),
        K = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: 0.5,
            y: 0.5,
            shapes: ['square', 'circle'],
            zIndex: 100,
            colors: [
                '#26ccff',
                '#a25afd',
                '#ff5e7e',
                '#88ff5a',
                '#fcff42',
                '#ffa62d',
                '#ff36ff',
            ],
            disableForReducedMotion: !1,
            scalar: 1,
        };
    function Q(r, e) {
        return e ? e(r) : r;
    }
    function X(r) {
        return r != null;
    }
    function m(r, e, a) {
        return Q(r && X(r[e]) ? r[e] : K[e], a);
    }
    function Y(r) {
        return r < 0 ? 0 : Math.floor(r);
    }
    function ee(r, e) {
        return Math.floor(Math.random() * (e - r)) + r;
    }
    function B(r) {
        return parseInt(r, 16);
    }
    function re(r) {
        return r.map(ae);
    }
    function ae(r) {
        var e = String(r).replace(/[^0-9a-f]/gi, '');
        return (
            e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            {
                r: B(e.substring(0, 2)),
                g: B(e.substring(2, 4)),
                b: B(e.substring(4, 6)),
            }
        );
    }
    function te(r) {
        var e = m(r, 'origin', Object);
        return (e.x = m(e, 'x', Number)), (e.y = m(e, 'y', Number)), e;
    }
    function ne(r) {
        (r.width = document.documentElement.clientWidth),
            (r.height = document.documentElement.clientHeight);
    }
    function oe(r) {
        var e = r.getBoundingClientRect();
        (r.width = e.width), (r.height = e.height);
    }
    function se(r) {
        var e = document.createElement('canvas');
        return (
            (e.style.position = 'fixed'),
            (e.style.top = '0px'),
            (e.style.left = '0px'),
            (e.style.pointerEvents = 'none'),
            (e.style.zIndex = r),
            e
        );
    }
    function ie(r, e, a, n, o, s, i, t, l) {
        r.save(),
            r.translate(e, a),
            r.rotate(s),
            r.scale(n, o),
            r.arc(0, 0, 1, i, t, l),
            r.restore();
    }
    function le(r) {
        var e = r.angle * (Math.PI / 180),
            a = r.spread * (Math.PI / 180);
        return {
            x: r.x,
            y: r.y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
            velocity: r.startVelocity * 0.5 + Math.random() * r.startVelocity,
            angle2D: -e + (0.5 * a - Math.random() * a),
            tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
            color: r.color,
            shape: r.shape,
            tick: 0,
            totalTicks: r.ticks,
            decay: r.decay,
            drift: r.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: r.gravity * 3,
            ovalScalar: 0.6,
            scalar: r.scalar,
            flat: r.flat,
        };
    }
    function ce(r, e) {
        (e.x += Math.cos(e.angle2D) * e.velocity + e.drift),
            (e.y += Math.sin(e.angle2D) * e.velocity + e.gravity),
            (e.velocity *= e.decay),
            e.flat
                ? ((e.wobble = 0),
                  (e.wobbleX = e.x + 10 * e.scalar),
                  (e.wobbleY = e.y + 10 * e.scalar),
                  (e.tiltSin = 0),
                  (e.tiltCos = 0),
                  (e.random = 1))
                : ((e.wobble += e.wobbleSpeed),
                  (e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble)),
                  (e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble)),
                  (e.tiltAngle += 0.1),
                  (e.tiltSin = Math.sin(e.tiltAngle)),
                  (e.tiltCos = Math.cos(e.tiltAngle)),
                  (e.random = Math.random() + 2));
        var a = e.tick++ / e.totalTicks,
            n = e.x + e.random * e.tiltCos,
            o = e.y + e.random * e.tiltSin,
            s = e.wobbleX + e.random * e.tiltCos,
            i = e.wobbleY + e.random * e.tiltSin;
        if (
            ((r.fillStyle =
                'rgba(' +
                e.color.r +
                ', ' +
                e.color.g +
                ', ' +
                e.color.b +
                ', ' +
                (1 - a) +
                ')'),
            r.beginPath(),
            N &&
                e.shape.type === 'path' &&
                typeof e.shape.path == 'string' &&
                Array.isArray(e.shape.matrix))
        )
            r.fill(
                de(
                    e.shape.path,
                    e.shape.matrix,
                    e.x,
                    e.y,
                    Math.abs(s - n) * 0.1,
                    Math.abs(i - o) * 0.1,
                    (Math.PI / 10) * e.wobble
                )
            );
        else if (e.shape.type === 'bitmap') {
            var t = (Math.PI / 10) * e.wobble,
                l = Math.abs(s - n) * 0.1,
                h = Math.abs(i - o) * 0.1,
                u = e.shape.bitmap.width * e.scalar,
                d = e.shape.bitmap.height * e.scalar,
                f = new DOMMatrix([
                    Math.cos(t) * l,
                    Math.sin(t) * l,
                    -Math.sin(t) * h,
                    Math.cos(t) * h,
                    e.x,
                    e.y,
                ]);
            f.multiplySelf(new DOMMatrix(e.shape.matrix));
            var v = r.createPattern(O.transform(e.shape.bitmap), 'no-repeat');
            v.setTransform(f),
                (r.globalAlpha = 1 - a),
                (r.fillStyle = v),
                r.fillRect(e.x - u / 2, e.y - d / 2, u, d),
                (r.globalAlpha = 1);
        } else if (e.shape === 'circle')
            r.ellipse
                ? r.ellipse(
                      e.x,
                      e.y,
                      Math.abs(s - n) * e.ovalScalar,
                      Math.abs(i - o) * e.ovalScalar,
                      (Math.PI / 10) * e.wobble,
                      0,
                      2 * Math.PI
                  )
                : ie(
                      r,
                      e.x,
                      e.y,
                      Math.abs(s - n) * e.ovalScalar,
                      Math.abs(i - o) * e.ovalScalar,
                      (Math.PI / 10) * e.wobble,
                      0,
                      2 * Math.PI
                  );
        else if (e.shape === 'star')
            for (
                var c = (Math.PI / 2) * 3,
                    y = 4 * e.scalar,
                    w = 8 * e.scalar,
                    x = e.x,
                    T = e.y,
                    F = 5,
                    k = Math.PI / F;
                F--;

            )
                (x = e.x + Math.cos(c) * w),
                    (T = e.y + Math.sin(c) * w),
                    r.lineTo(x, T),
                    (c += k),
                    (x = e.x + Math.cos(c) * y),
                    (T = e.y + Math.sin(c) * y),
                    r.lineTo(x, T),
                    (c += k);
        else
            r.moveTo(Math.floor(e.x), Math.floor(e.y)),
                r.lineTo(Math.floor(e.wobbleX), Math.floor(o)),
                r.lineTo(Math.floor(s), Math.floor(i)),
                r.lineTo(Math.floor(n), Math.floor(e.wobbleY));
        return r.closePath(), r.fill(), e.tick < e.totalTicks;
    }
    function he(r, e, a, n, o) {
        var s = e.slice(),
            i = r.getContext('2d'),
            t,
            l,
            h = E(function (u) {
                function d() {
                    (t = l = null),
                        i.clearRect(0, 0, n.width, n.height),
                        O.clear(),
                        o(),
                        u();
                }
                function f() {
                    S &&
                        !(n.width === b.width && n.height === b.height) &&
                        ((n.width = r.width = b.width),
                        (n.height = r.height = b.height)),
                        !n.width &&
                            !n.height &&
                            (a(r), (n.width = r.width), (n.height = r.height)),
                        i.clearRect(0, 0, n.width, n.height),
                        (s = s.filter(function (v) {
                            return ce(i, v);
                        })),
                        s.length ? (t = R.frame(f)) : d();
                }
                (t = R.frame(f)), (l = d);
            });
        return {
            addFettis: function (u) {
                return (s = s.concat(u)), h;
            },
            canvas: r,
            promise: h,
            reset: function () {
                t && R.cancel(t), l && l();
            },
        };
    }
    function _(r, e) {
        var a = !r,
            n = !!m(e || {}, 'resize'),
            o = !1,
            s = m(e, 'disableForReducedMotion', Boolean),
            i = I && !!m(e || {}, 'useWorker'),
            t = i ? J() : null,
            l = a ? ne : oe,
            h = r && t ? !!r.__confetti_initialized : !1,
            u =
                typeof matchMedia == 'function' &&
                matchMedia('(prefers-reduced-motion)').matches,
            d;
        function f(c, y, w) {
            for (
                var x = m(c, 'particleCount', Y),
                    T = m(c, 'angle', Number),
                    F = m(c, 'spread', Number),
                    k = m(c, 'startVelocity', Number),
                    me = m(c, 'decay', Number),
                    ge = m(c, 'gravity', Number),
                    ve = m(c, 'drift', Number),
                    Z = m(c, 'colors', re),
                    pe = m(c, 'ticks', Number),
                    q = m(c, 'shapes'),
                    ye = m(c, 'scalar'),
                    Me = !!m(c, 'flat'),
                    V = te(c),
                    $ = x,
                    D = [],
                    be = r.width * V.x,
                    we = r.height * V.y;
                $--;

            )
                D.push(
                    le({
                        x: be,
                        y: we,
                        angle: T,
                        spread: F,
                        startVelocity: k,
                        color: Z[$ % Z.length],
                        shape: q[ee(0, q.length)],
                        ticks: pe,
                        decay: me,
                        gravity: ge,
                        drift: ve,
                        scalar: ye,
                        flat: Me,
                    })
                );
            return d ? d.addFettis(D) : ((d = he(r, D, l, y, w)), d.promise);
        }
        function v(c) {
            var y = s || m(c, 'disableForReducedMotion', Boolean),
                w = m(c, 'zIndex', Number);
            if (y && u)
                return E(function (k) {
                    k();
                });
            a && d
                ? (r = d.canvas)
                : a && !r && ((r = se(w)), document.body.appendChild(r)),
                n && !h && l(r);
            var x = { width: r.width, height: r.height };
            t && !h && t.init(r),
                (h = !0),
                t && (r.__confetti_initialized = !0);
            function T() {
                if (t) {
                    var k = {
                        getBoundingClientRect: function () {
                            if (!a) return r.getBoundingClientRect();
                        },
                    };
                    l(k),
                        t.postMessage({
                            resize: { width: k.width, height: k.height },
                        });
                    return;
                }
                x.width = x.height = null;
            }
            function F() {
                (d = null),
                    n && ((o = !1), g.removeEventListener('resize', T)),
                    a &&
                        r &&
                        (document.body.contains(r) &&
                            document.body.removeChild(r),
                        (r = null),
                        (h = !1));
            }
            return (
                n && !o && ((o = !0), g.addEventListener('resize', T, !1)),
                t ? t.fire(c, x, F) : f(c, x, F)
            );
        }
        return (
            (v.reset = function () {
                t && t.reset(), d && d.reset();
            }),
            v
        );
    }
    var A;
    function W() {
        return A || (A = _(null, { useWorker: !0, resize: !0 })), A;
    }
    function de(r, e, a, n, o, s, i) {
        var t = new Path2D(r),
            l = new Path2D();
        l.addPath(t, new DOMMatrix(e));
        var h = new Path2D();
        return (
            h.addPath(
                l,
                new DOMMatrix([
                    Math.cos(i) * o,
                    Math.sin(i) * o,
                    -Math.sin(i) * s,
                    Math.cos(i) * s,
                    a,
                    n,
                ])
            ),
            h
        );
    }
    function ue(r) {
        if (!N)
            throw new Error('path confetti are not supported in this browser');
        var e, a;
        typeof r == 'string' ? (e = r) : ((e = r.path), (a = r.matrix));
        var n = new Path2D(e),
            o = document.createElement('canvas'),
            s = o.getContext('2d');
        if (!a) {
            for (
                var i = 1e3, t = i, l = i, h = 0, u = 0, d, f, v = 0;
                v < i;
                v += 2
            )
                for (var c = 0; c < i; c += 2)
                    s.isPointInPath(n, v, c, 'nonzero') &&
                        ((t = Math.min(t, v)),
                        (l = Math.min(l, c)),
                        (h = Math.max(h, v)),
                        (u = Math.max(u, c)));
            (d = h - t), (f = u - l);
            var y = 10,
                w = Math.min(y / d, y / f);
            a = [
                w,
                0,
                0,
                w,
                -Math.round(d / 2 + t) * w,
                -Math.round(f / 2 + l) * w,
            ];
        }
        return { type: 'path', path: e, matrix: a };
    }
    function fe(r) {
        var e,
            a = 1,
            n = '#000000',
            o =
                '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        typeof r == 'string'
            ? (e = r)
            : ((e = r.text),
              (a = 'scalar' in r ? r.scalar : a),
              (o = 'fontFamily' in r ? r.fontFamily : o),
              (n = 'color' in r ? r.color : n));
        var s = 10 * a,
            i = '' + s + 'px ' + o,
            t = new OffscreenCanvas(s, s),
            l = t.getContext('2d');
        l.font = i;
        var h = l.measureText(e),
            u = Math.ceil(h.actualBoundingBoxRight + h.actualBoundingBoxLeft),
            d = Math.ceil(
                h.actualBoundingBoxAscent + h.actualBoundingBoxDescent
            ),
            f = 2,
            v = h.actualBoundingBoxLeft + f,
            c = h.actualBoundingBoxAscent + f;
        (u += f + f),
            (d += f + f),
            (t = new OffscreenCanvas(u, d)),
            (l = t.getContext('2d')),
            (l.font = i),
            (l.fillStyle = n),
            l.fillText(e, v, c);
        var y = 1 / a;
        return {
            type: 'bitmap',
            bitmap: t.transferToImageBitmap(),
            matrix: [y, 0, 0, y, (-u * y) / 2, (-d * y) / 2],
        };
    }
    (C.exports = function () {
        return W().apply(this, arguments);
    }),
        (C.exports.reset = function () {
            W().reset();
        }),
        (C.exports.create = _),
        (C.exports.shapeFromPath = ue),
        (C.exports.shapeFromText = fe);
})(
    (function () {
        return typeof window < 'u'
            ? window
            : typeof self < 'u'
              ? self
              : this || {};
    })(),
    U,
    !1
);
const Fe = U.exports;
U.exports.create;
const G = () => ({
        explodeConfetti: () => {
            Fe({ particleCount: 100, spread: 250, origin: { y: 0.6 } });
        },
    }),
    je = () => {
        const [P, g] = L.useState(!1),
            { explodeConfetti: C } = G();
        L.useEffect(() => {
            const b = xe();
            g(b);
        }, []);
        const S = () => {
            g((b) => {
                const I = !b;
                return (
                    I
                        ? (document.documentElement.classList.add('dark'),
                          localStorage.setItem('abm-mytick-theme', 'dark'))
                        : (document.documentElement.classList.remove('dark'),
                          localStorage.setItem('abm-mytick-theme', 'light')),
                    C(),
                    I
                );
            });
        };
        return M.jsxs('label', {
            className: 'relative inline-flex cursor-pointer items-center',
            children: [
                M.jsx('input', {
                    type: 'checkbox',
                    checked: P,
                    onChange: S,
                    className: 'peer sr-only h-6',
                }),
                M.jsxs('div', {
                    className:
                        "peer-checked:bg-primary-500 relative flex h-6 w-10 items-center justify-between rounded-full bg-gray-200 px-2 after:absolute after:start-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-4",
                    children: [
                        M.jsx(Se, {
                            className: `relative right-0.5 z-20 h-5 w-5 ${P ? 'text-primary-500 opacity-0' : 'text-primary-500'}`,
                        }),
                        M.jsx(Ie, {
                            className: `relative left-0.5 z-20 h-5 w-5 ${P ? 'text-primary-500' : 'text-gray-400 opacity-0'}`,
                        }),
                    ],
                }),
                M.jsx('span', {
                    className: 'ms-3 text-sm text-gray-700 dark:text-gray-300',
                    children: 'Mode sombre',
                }),
            ],
        });
    },
    H = {
        mg: 'https://flagcdn.com/w40/mg.png',
        fr: 'https://flagcdn.com/w40/fr.png',
        en: 'https://flagcdn.com/w40/us.png',
    },
    Oe = () => {
        const { i18n: P } = Ce(),
            [g, C] = L.useState(localStorage.getItem('i18nextLng') || 'fr'),
            [S, b] = L.useState(!1),
            I = L.useRef(null),
            { explodeConfetti: N } = G();
        L.useEffect(() => {
            const p = (E) => {
                I.current && !I.current.contains(E.target) && b(!1);
            };
            return (
                document.addEventListener('mousedown', p),
                () => document.removeEventListener('mousedown', p)
            );
        }, []);
        const j = (p) => {
            console.log('Langue', p);
            try {
                P.changeLanguage(p),
                    localStorage.setItem('i18nextLng', p),
                    C(p),
                    b(!1),
                    N();
            } catch (E) {
                console.error('Error changing language:', E);
            }
        };
        return M.jsxs('div', {
            className: 'relative',
            ref: I,
            children: [
                M.jsxs('button', {
                    onClick: () => b(!S),
                    className:
                        'ml-2 flex cursor-pointer items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/20 dark:text-white',
                    children: [
                        M.jsx('img', {
                            src: H[g],
                            alt: 'Selected Language Flag',
                            className: 'h-4 w-4',
                        }),
                        M.jsx('span', {
                            className: 'dark:text-white',
                            children: g.toUpperCase(),
                        }),
                        M.jsx(Te, {
                            size: 16,
                            className: `transition-transform ease-out hover:rotate-180 ${S ? 'rotate-180' : ''}`,
                        }),
                    ],
                }),
                S &&
                    M.jsx('div', {
                        className:
                            'ring-opacity-5 absolute right-0 z-40 mt-2 w-32 rounded-lg bg-white py-2 shadow-lg dark:bg-gray-800',
                        children: Object.entries(H).map(([p, E]) =>
                            M.jsxs(
                                'button',
                                {
                                    onClick: () => j(p),
                                    className:
                                        'flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                                    children: [
                                        M.jsx('img', {
                                            src: E,
                                            alt: `${p} Flag`,
                                            className: 'h-4 w-4',
                                        }),
                                        p.toUpperCase(),
                                    ],
                                },
                                p
                            )
                        ),
                    }),
            ],
        });
    };
export { je as D, Oe as L };
