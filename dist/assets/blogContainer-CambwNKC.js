import {
    g as i0,
    r as g,
    x as a0,
    j as n,
    A as n0,
    m as V,
} from './index-CkKx-SB9.js';
import { r as o0 } from './lottie-4koyQiv_.js';
var r0 = o0();
const s0 = i0(r0);
function F(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var a = 0, i = Array(e); a < e; a++) i[a] = t[a];
    return i;
}
function l0(t) {
    if (Array.isArray(t)) return t;
}
function d0(t, e, a) {
    return (
        (e = p0(e)) in t
            ? Object.defineProperty(t, e, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = a),
        t
    );
}
function c0(t, e) {
    var a =
        t == null
            ? null
            : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
    if (a != null) {
        var i,
            l,
            u,
            r,
            v = [],
            s = !0,
            A = !1;
        try {
            if (((u = (a = a.call(t)).next), e !== 0))
                for (
                    ;
                    !(s = (i = u.call(a)).done) &&
                    (v.push(i.value), v.length !== e);
                    s = !0
                );
        } catch (k) {
            (A = !0), (l = k);
        } finally {
            try {
                if (
                    !s &&
                    a.return != null &&
                    ((r = a.return()), Object(r) !== r)
                )
                    return;
            } finally {
                if (A) throw l;
            }
        }
        return v;
    }
}
function x0() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
            (i = i.filter(function (l) {
                return Object.getOwnPropertyDescriptor(t, l).enumerable;
            })),
            a.push.apply(a, i);
    }
    return a;
}
function T(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? L(Object(a), !0).forEach(function (i) {
                  d0(t, i, a[i]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
              : L(Object(a)).forEach(function (i) {
                    Object.defineProperty(
                        t,
                        i,
                        Object.getOwnPropertyDescriptor(a, i)
                    );
                });
    }
    return t;
}
function _(t, e) {
    if (t == null) return {};
    var a,
        i,
        l = m0(t, e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(t);
        for (i = 0; i < u.length; i++)
            (a = u[i]),
                e.includes(a) ||
                    ({}.propertyIsEnumerable.call(t, a) && (l[a] = t[a]));
    }
    return l;
}
function m0(t, e) {
    if (t == null) return {};
    var a = {};
    for (var i in t)
        if ({}.hasOwnProperty.call(t, i)) {
            if (e.includes(i)) continue;
            a[i] = t[i];
        }
    return a;
}
function u0(t, e) {
    return l0(t) || c0(t, e) || f0(t, e) || x0();
}
function y0(t, e) {
    if (typeof t != 'object' || !t) return t;
    var a = t[Symbol.toPrimitive];
    if (a !== void 0) {
        var i = a.call(t, e);
        if (typeof i != 'object') return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(t);
}
function p0(t) {
    var e = y0(t, 'string');
    return typeof e == 'symbol' ? e : e + '';
}
function f0(t, e) {
    if (t) {
        if (typeof t == 'string') return F(t, e);
        var a = {}.toString.call(t).slice(8, -1);
        return (
            a === 'Object' && t.constructor && (a = t.constructor.name),
            a === 'Map' || a === 'Set'
                ? Array.from(t)
                : a === 'Arguments' ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? F(t, e)
                  : void 0
        );
    }
}
var k0 = [
        'animationData',
        'loop',
        'autoplay',
        'initialSegment',
        'onComplete',
        'onLoopComplete',
        'onEnterFrame',
        'onSegmentStart',
        'onConfigReady',
        'onDataReady',
        'onDataFailed',
        'onLoadedImages',
        'onDOMLoaded',
        'onDestroy',
        'lottieRef',
        'renderer',
        'name',
        'assetsPath',
        'rendererSettings',
    ],
    h0 = function (e, a) {
        var i = e.animationData,
            l = e.loop,
            u = e.autoplay,
            r = e.initialSegment,
            v = e.onComplete,
            s = e.onLoopComplete,
            A = e.onEnterFrame,
            k = e.onSegmentStart,
            D = e.onConfigReady,
            j = e.onDataReady,
            E = e.onDataFailed,
            o = e.onLoadedImages,
            b = e.onDOMLoaded,
            y = e.onDestroy;
        e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
        var p = _(e, k0),
            G = g.useState(!1),
            x = u0(G, 2),
            B = x[0],
            P = x[1],
            c = g.useRef(),
            h = g.useRef(null),
            H = function () {
                var d;
                (d = c.current) === null || d === void 0 || d.play();
            },
            W = function () {
                var d;
                (d = c.current) === null || d === void 0 || d.stop();
            },
            Y = function () {
                var d;
                (d = c.current) === null || d === void 0 || d.pause();
            },
            $ = function (d) {
                var m;
                (m = c.current) === null || m === void 0 || m.setSpeed(d);
            },
            U = function (d, m) {
                var f;
                (f = c.current) === null || f === void 0 || f.goToAndPlay(d, m);
            },
            J = function (d, m) {
                var f;
                (f = c.current) === null || f === void 0 || f.goToAndStop(d, m);
            },
            K = function (d) {
                var m;
                (m = c.current) === null || m === void 0 || m.setDirection(d);
            },
            X = function (d, m) {
                var f;
                (f = c.current) === null ||
                    f === void 0 ||
                    f.playSegments(d, m);
            },
            q = function (d) {
                var m;
                (m = c.current) === null || m === void 0 || m.setSubframe(d);
            },
            Q = function (d) {
                var m;
                return (m = c.current) === null || m === void 0
                    ? void 0
                    : m.getDuration(d);
            },
            Z = function () {
                var d;
                (d = c.current) === null || d === void 0 || d.destroy(),
                    (c.current = void 0);
            },
            t0 = function () {
                var d =
                        arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {},
                    m;
                if (h.current) {
                    (m = c.current) === null || m === void 0 || m.destroy();
                    var f = T(T(T({}, e), d), {}, { container: h.current });
                    return (
                        (c.current = s0.loadAnimation(f)),
                        P(!!c.current),
                        function () {
                            var w;
                            (w = c.current) === null ||
                                w === void 0 ||
                                w.destroy(),
                                (c.current = void 0);
                        }
                    );
                }
            };
        g.useEffect(
            function () {
                var S = t0();
                return function () {
                    return S == null ? void 0 : S();
                };
            },
            [i, l]
        ),
            g.useEffect(
                function () {
                    c.current && (c.current.autoplay = !!u);
                },
                [u]
            ),
            g.useEffect(
                function () {
                    if (c.current) {
                        if (!r) {
                            c.current.resetSegments(!0);
                            return;
                        }
                        !Array.isArray(r) ||
                            !r.length ||
                            ((c.current.currentRawFrame < r[0] ||
                                c.current.currentRawFrame > r[1]) &&
                                (c.current.currentRawFrame = r[0]),
                            c.current.setSegment(r[0], r[1]));
                    }
                },
                [r]
            ),
            g.useEffect(
                function () {
                    var S = [
                            { name: 'complete', handler: v },
                            { name: 'loopComplete', handler: s },
                            { name: 'enterFrame', handler: A },
                            { name: 'segmentStart', handler: k },
                            { name: 'config_ready', handler: D },
                            { name: 'data_ready', handler: j },
                            { name: 'data_failed', handler: E },
                            { name: 'loaded_images', handler: o },
                            { name: 'DOMLoaded', handler: b },
                            { name: 'destroy', handler: y },
                        ],
                        d = S.filter(function (f) {
                            return f.handler != null;
                        });
                    if (d.length) {
                        var m = d.map(function (f) {
                            var w;
                            return (
                                (w = c.current) === null ||
                                    w === void 0 ||
                                    w.addEventListener(f.name, f.handler),
                                function () {
                                    var O;
                                    (O = c.current) === null ||
                                        O === void 0 ||
                                        O.removeEventListener(
                                            f.name,
                                            f.handler
                                        );
                                }
                            );
                        });
                        return function () {
                            m.forEach(function (f) {
                                return f();
                            });
                        };
                    }
                },
                [v, s, A, k, D, j, E, o, b, y]
            );
        var e0 = a0.createElement('div', T({ style: a, ref: h }, p));
        return {
            View: e0,
            play: H,
            stop: W,
            pause: Y,
            setSpeed: $,
            goToAndStop: J,
            goToAndPlay: U,
            setDirection: K,
            playSegments: X,
            setSubframe: q,
            getDuration: Q,
            destroy: Z,
            animationContainerRef: h,
            animationLoaded: B,
            animationItem: c.current,
        };
    };
function g0(t) {
    var e = t.getBoundingClientRect(),
        a = e.top,
        i = e.height,
        l = window.innerHeight - a,
        u = window.innerHeight + i;
    return l / u;
}
function v0(t, e, a) {
    var i = t.getBoundingClientRect(),
        l = i.top,
        u = i.left,
        r = i.width,
        v = i.height,
        s = (e - u) / r,
        A = (a - l) / v;
    return { x: s, y: A };
}
var b0 = function (e) {
        var a = e.wrapperRef,
            i = e.animationItem,
            l = e.mode,
            u = e.actions;
        g.useEffect(
            function () {
                var r = a.current;
                if (!(!r || !i || !u.length)) {
                    i.stop();
                    var v = function () {
                            var k = null,
                                D = function () {
                                    var E = g0(r),
                                        o = u.find(function (y) {
                                            var p = y.visibility;
                                            return p && E >= p[0] && E <= p[1];
                                        });
                                    if (o) {
                                        if (
                                            o.type === 'seek' &&
                                            o.visibility &&
                                            o.frames.length === 2
                                        ) {
                                            var b =
                                                o.frames[0] +
                                                Math.ceil(
                                                    ((E - o.visibility[0]) /
                                                        (o.visibility[1] -
                                                            o.visibility[0])) *
                                                        o.frames[1]
                                                ); //! goToAndStop must be relative to the start of the current segment
                                            i.goToAndStop(
                                                b - i.firstFrame - 1,
                                                !0
                                            );
                                        }
                                        o.type === 'loop' &&
                                            (k === null ||
                                                k !== o.frames ||
                                                i.isPaused) &&
                                            (i.playSegments(o.frames, !0),
                                            (k = o.frames)),
                                            o.type === 'play' &&
                                                i.isPaused &&
                                                (i.resetSegments(!0), i.play()),
                                            o.type === 'stop' &&
                                                i.goToAndStop(
                                                    o.frames[0] -
                                                        i.firstFrame -
                                                        1,
                                                    !0
                                                );
                                    }
                                };
                            return (
                                document.addEventListener('scroll', D),
                                function () {
                                    document.removeEventListener('scroll', D);
                                }
                            );
                        },
                        s = function () {
                            var k = function (o, b) {
                                    var y = o,
                                        p = b;
                                    if (y !== -1 && p !== -1) {
                                        var G = v0(r, y, p);
                                        (y = G.x), (p = G.y);
                                    }
                                    var x = u.find(function (c) {
                                        var h = c.position;
                                        return h &&
                                            Array.isArray(h.x) &&
                                            Array.isArray(h.y)
                                            ? y >= h.x[0] &&
                                                  y <= h.x[1] &&
                                                  p >= h.y[0] &&
                                                  p <= h.y[1]
                                            : h &&
                                                !Number.isNaN(h.x) &&
                                                !Number.isNaN(h.y)
                                              ? y === h.x && p === h.y
                                              : !1;
                                    });
                                    if (x) {
                                        if (
                                            x.type === 'seek' &&
                                            x.position &&
                                            Array.isArray(x.position.x) &&
                                            Array.isArray(x.position.y) &&
                                            x.frames.length === 2
                                        ) {
                                            var B =
                                                    (y - x.position.x[0]) /
                                                    (x.position.x[1] -
                                                        x.position.x[0]),
                                                P =
                                                    (p - x.position.y[0]) /
                                                    (x.position.y[1] -
                                                        x.position.y[0]);
                                            i.playSegments(x.frames, !0),
                                                i.goToAndStop(
                                                    Math.ceil(
                                                        ((B + P) / 2) *
                                                            (x.frames[1] -
                                                                x.frames[0])
                                                    ),
                                                    !0
                                                );
                                        }
                                        x.type === 'loop' &&
                                            i.playSegments(x.frames, !0),
                                            x.type === 'play' &&
                                                (i.isPaused &&
                                                    i.resetSegments(!1),
                                                i.playSegments(x.frames)),
                                            x.type === 'stop' &&
                                                i.goToAndStop(x.frames[0], !0);
                                    }
                                },
                                D = function (o) {
                                    k(o.clientX, o.clientY);
                                },
                                j = function () {
                                    k(-1, -1);
                                };
                            return (
                                r.addEventListener('mousemove', D),
                                r.addEventListener('mouseout', j),
                                function () {
                                    r.removeEventListener('mousemove', D),
                                        r.removeEventListener('mouseout', j);
                                }
                            );
                        };
                    switch (l) {
                        case 'scroll':
                            return v();
                        case 'cursor':
                            return s();
                    }
                }
            },
            [l, i]
        );
    },
    S0 = function (e) {
        var a = e.actions,
            i = e.mode,
            l = e.lottieObj,
            u = l.animationItem,
            r = l.View,
            v = l.animationContainerRef;
        return b0({ actions: a, animationItem: u, mode: i, wrapperRef: v }), r;
    },
    A0 = ['style', 'interactivity'],
    I = function (e) {
        var a,
            i,
            l,
            u = e.style,
            r = e.interactivity,
            v = _(e, A0),
            s = h0(v, u),
            A = s.View,
            k = s.play,
            D = s.stop,
            j = s.pause,
            E = s.setSpeed,
            o = s.goToAndStop,
            b = s.goToAndPlay,
            y = s.setDirection,
            p = s.playSegments,
            G = s.setSubframe,
            x = s.getDuration,
            B = s.destroy,
            P = s.animationContainerRef,
            c = s.animationLoaded,
            h = s.animationItem;
        return (
            g.useEffect(
                function () {
                    e.lottieRef &&
                        (e.lottieRef.current = {
                            play: k,
                            stop: D,
                            pause: j,
                            setSpeed: E,
                            goToAndPlay: b,
                            goToAndStop: o,
                            setDirection: y,
                            playSegments: p,
                            setSubframe: G,
                            getDuration: x,
                            destroy: B,
                            animationContainerRef: P,
                            animationLoaded: c,
                            animationItem: h,
                        });
                },
                [
                    (a = e.lottieRef) === null || a === void 0
                        ? void 0
                        : a.current,
                ]
            ),
            S0({
                lottieObj: {
                    View: A,
                    play: k,
                    stop: D,
                    pause: j,
                    setSpeed: E,
                    goToAndStop: o,
                    goToAndPlay: b,
                    setDirection: y,
                    playSegments: p,
                    setSubframe: G,
                    getDuration: x,
                    destroy: B,
                    animationContainerRef: P,
                    animationLoaded: c,
                    animationItem: h,
                },
                actions:
                    (i = r == null ? void 0 : r.actions) !== null &&
                    i !== void 0
                        ? i
                        : [],
                mode:
                    (l = r == null ? void 0 : r.mode) !== null && l !== void 0
                        ? l
                        : 'scroll',
            })
        );
    };
const D0 = '4.8.0',
    E0 = { g: 'LottieFiles AE 1.1.0', a: '', k: '', d: '', tc: '' },
    j0 = 29.9700012207031,
    G0 = 0,
    w0 = 45.0000018328876,
    B0 = 880,
    P0 = 360,
    T0 = 'clap',
    V0 = 0,
    O0 = [],
    R0 = JSON.parse(
        '[{"ddd":0,"ind":1,"ty":4,"nm":"purple Outlines 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"t":35.0000014255792,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[338.497,55.996,0],"to":[-1.333,-2,0],"ti":[1.333,2,0]},{"t":37.0000015070409,"s":[330.497,43.996,0]}],"ix":2},"a":{"a":0,"k":[26.675,26.675,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.913,1.105],[0,0],[-1.105,-1.913],[0,0],[1.913,-1.105],[0,0],[1.104,1.913],[0,0]],"o":[[0,0],[1.913,-1.105],[0,0],[1.104,1.913],[0,0],[-1.913,1.105],[0,0],[-1.105,-1.913]],"v":[[-23.856,-9.321],[3.857,-25.321],[9.321,-23.856],[25.321,3.856],[23.857,9.321],[-3.856,25.321],[-9.32,23.856],[-25.32,-3.856]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.705882352941,0.294117647059,0.84313731474,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[26.675,26.675],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"blue Outlines 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"t":35.0000014255792,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[604.497,252.002,0],"to":[3.5,2.667,0],"ti":[-3.5,-2.667,0]},{"t":37.0000015070409,"s":[625.497,268.002,0]}],"ix":2},"a":{"a":0,"k":[23.108,23.108,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.176,-0.384],[0,0],[0.384,-2.176],[0,0],[2.175,0.384],[0,0],[-0.383,2.176],[0,0]],"o":[[0,0],[2.175,0.383],[0,0],[-0.384,2.176],[0,0],[-2.176,-0.383],[0,0],[0.384,-2.176]],"v":[[-12.284,-22.475],[19.23,-16.918],[22.474,-12.284],[16.918,19.229],[12.284,22.474],[-19.23,16.917],[-22.475,12.283],[-16.918,-19.229]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.392156892664,0.462745127958,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[23.108,23.109],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"green Outlines 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"t":35.0000014255792,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[674.501,143.004,0],"to":[2.667,-1.5,0],"ti":[-2.667,1.5,0]},{"t":37.0000015070409,"s":[690.501,134.004,0]}],"ix":2},"a":{"a":0,"k":[26.675,26.675,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.913,-1.105],[0,0],[1.104,-1.913],[0,0],[1.913,1.105],[0,0],[-1.105,1.913],[0,0]],"o":[[0,0],[1.913,1.105],[0,0],[-1.105,1.913],[0,0],[-1.913,-1.105],[0,0],[1.105,-1.913]],"v":[[-3.856,-25.321],[23.857,-9.321],[25.321,-3.857],[9.321,23.857],[3.857,25.321],[-23.856,9.321],[-25.32,3.857],[-9.32,-23.857]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.768627510819,0.443137284821,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[26.675,26.675],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"sky Outlines 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"t":35.0000014255792,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[238.502,227.003,0],"to":[-4.167,0.833,0],"ti":[4.167,-0.833,0]},{"t":37.0000015070409,"s":[213.502,232.003,0]}],"ix":2},"a":{"a":0,"k":[25.271,25.271,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.076,0.756],[0,0],[-0.756,-2.076],[0,0],[2.076,-0.756],[0,0],[0.756,2.076],[0,0]],"o":[[0,0],[2.076,-0.755],[0,0],[0.755,2.076],[0,0],[-2.076,0.755],[0,0],[-0.755,-2.076]],"v":[[-21.875,-13.322],[8.195,-24.266],[13.322,-21.875],[24.267,8.195],[21.876,13.322],[-8.194,24.266],[-13.321,21.876],[-24.266,-8.194]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.470588265213,0.588235294118,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25.271,25.272],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"purple Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"t":28.0000011404634,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[138.497,107.996,0],"to":[-3.833,-0.833,0],"ti":[3.833,0.833,0]},{"t":27.0000010997325,"s":[115.497,102.996,0]}],"ix":2},"a":{"a":0,"k":[26.675,26.675,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.913,1.105],[0,0],[-1.105,-1.913],[0,0],[1.913,-1.105],[0,0],[1.104,1.913],[0,0]],"o":[[0,0],[1.913,-1.105],[0,0],[1.104,1.913],[0,0],[-1.913,1.105],[0,0],[-1.105,-1.913]],"v":[[-23.856,-9.321],[3.857,-25.321],[9.321,-23.856],[25.321,3.856],[23.857,9.321],[-3.856,25.321],[-9.32,23.856],[-25.32,-3.856]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.705882352941,0.294117647059,0.84313731474,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[26.675,26.675],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"blue Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"t":28.0000011404634,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[693.497,36.002,0],"to":[3.5,-1.667,0],"ti":[-3.5,1.667,0]},{"t":27.0000010997325,"s":[714.497,26.002,0]}],"ix":2},"a":{"a":0,"k":[23.108,23.108,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.176,-0.384],[0,0],[0.384,-2.176],[0,0],[2.175,0.384],[0,0],[-0.383,2.176],[0,0]],"o":[[0,0],[2.175,0.383],[0,0],[-0.384,2.176],[0,0],[-2.176,-0.383],[0,0],[0.384,-2.176]],"v":[[-12.284,-22.475],[19.23,-16.918],[22.474,-12.284],[16.918,19.229],[12.284,22.474],[-19.23,16.917],[-22.475,12.283],[-16.918,-19.229]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.392156892664,0.462745127958,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[23.108,23.109],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"green Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"t":28.0000011404634,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[394.501,322.004,0],"to":[-2.833,3,0],"ti":[2.833,-3,0]},{"t":27.0000010997325,"s":[377.501,340.004,0]}],"ix":2},"a":{"a":0,"k":[26.675,26.675,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.913,-1.105],[0,0],[1.104,-1.913],[0,0],[1.913,1.105],[0,0],[-1.105,1.913],[0,0]],"o":[[0,0],[1.913,1.105],[0,0],[-1.105,1.913],[0,0],[-1.913,-1.105],[0,0],[1.105,-1.913]],"v":[[-3.856,-25.321],[23.857,-9.321],[25.321,-3.857],[9.321,23.857],[3.857,25.321],[-23.856,9.321],[-25.32,3.857],[-9.32,-23.857]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.768627510819,0.443137284821,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[26.675,26.675],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"sky Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"t":28.0000011404634,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[577.502,179.003,0],"to":[5,0.333,0],"ti":[-5,-0.333,0]},{"t":27.0000010997325,"s":[607.502,181.003,0]}],"ix":2},"a":{"a":0,"k":[25.271,25.271,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.076,0.756],[0,0],[-0.756,-2.076],[0,0],[2.076,-0.756],[0,0],[0.756,2.076],[0,0]],"o":[[0,0],[2.076,-0.755],[0,0],[0.755,2.076],[0,0],[-2.076,0.755],[0,0],[-0.755,-2.076]],"v":[[-21.875,-13.322],[8.195,-24.266],[13.322,-21.875],[24.267,8.195],[21.876,13.322],[-8.194,24.266],[-13.321,21.876],[-24.266,-8.194]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.470588265213,0.588235294118,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25.271,25.272],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"sky Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[100]},{"t":18.000000733155,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[330.502,289.003,0],"to":[-2.833,2.167,0],"ti":[2.833,-2.167,0]},{"t":18.000000733155,"s":[313.502,302.003,0]}],"ix":2},"a":{"a":0,"k":[25.271,25.271,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.076,0.756],[0,0],[-0.756,-2.076],[0,0],[2.076,-0.756],[0,0],[0.756,2.076],[0,0]],"o":[[0,0],[2.076,-0.755],[0,0],[0.755,2.076],[0,0],[-2.076,0.755],[0,0],[-0.755,-2.076]],"v":[[-21.875,-13.322],[8.195,-24.266],[13.322,-21.875],[24.267,8.195],[21.876,13.322],[-8.194,24.266],[-13.321,21.876],[-24.266,-8.194]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.470588265213,0.588235294118,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25.271,25.272],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"green Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[100]},{"t":18.000000733155,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[652.501,145.004,0],"to":[4.167,-0.5,0],"ti":[-4.167,0.5,0]},{"t":18.000000733155,"s":[677.501,142.004,0]}],"ix":2},"a":{"a":0,"k":[26.675,26.675,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.913,-1.105],[0,0],[1.104,-1.913],[0,0],[1.913,1.105],[0,0],[-1.105,1.913],[0,0]],"o":[[0,0],[1.913,1.105],[0,0],[-1.105,1.913],[0,0],[-1.913,-1.105],[0,0],[1.105,-1.913]],"v":[[-3.856,-25.321],[23.857,-9.321],[25.321,-3.857],[9.321,23.857],[3.857,25.321],[-23.856,9.321],[-25.32,3.857],[-9.32,-23.857]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.768627510819,0.443137284821,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[26.675,26.675],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"blue Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[100]},{"t":18.000000733155,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[149.497,121.002,0],"to":[-3.667,-0.5,0],"ti":[3.667,0.5,0]},{"t":18.000000733155,"s":[127.497,118.002,0]}],"ix":2},"a":{"a":0,"k":[23.108,23.108,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.176,-0.384],[0,0],[0.384,-2.176],[0,0],[2.175,0.384],[0,0],[-0.383,2.176],[0,0]],"o":[[0,0],[2.175,0.383],[0,0],[-0.384,2.176],[0,0],[-2.176,-0.383],[0,0],[0.384,-2.176]],"v":[[-12.284,-22.475],[19.23,-16.918],[22.474,-12.284],[16.918,19.229],[12.284,22.474],[-19.23,16.917],[-22.475,12.283],[-16.918,-19.229]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.392156892664,0.462745127958,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[23.108,23.109],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"purple Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[100]},{"t":18.000000733155,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[731.497,58.996,0],"to":[4.167,-1.333,0],"ti":[-4.167,1.333,0]},{"t":18.000000733155,"s":[756.497,50.996,0]}],"ix":2},"a":{"a":0,"k":[26.675,26.675,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.913,1.105],[0,0],[-1.105,-1.913],[0,0],[1.913,-1.105],[0,0],[1.104,1.913],[0,0]],"o":[[0,0],[1.913,-1.105],[0,0],[1.104,1.913],[0,0],[-1.913,1.105],[0,0],[-1.105,-1.913]],"v":[[-23.856,-9.321],[3.857,-25.321],[9.321,-23.856],[25.321,3.856],[23.857,9.321],[-3.856,25.321],[-9.32,23.856],[-25.32,-3.856]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.705882352941,0.294117647059,0.84313731474,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[26.675,26.675],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"right Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8,"s":[470,182,0],"to":[-4,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":11,"s":[446,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":18,"s":[470,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":21,"s":[446,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":27,"s":[470,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[446,182,0],"to":[0,0,0],"ti":[-4,0,0]},{"t":36.0000014663101,"s":[470,182,0]}],"ix":2},"a":{"a":0,"k":[90.595,105.97,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.243,0.707],[-7.935,-13.957],[1.244,-0.707],[7.935,13.957]],"o":[[1.243,-0.707],[7.935,13.957],[-1.243,0.707],[-7.935,-13.957]],"v":[[-14.368,-25.271],[2.251,-1.28],[14.367,25.271],[-2.252,1.28]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.952941236309,0.733333333333,0.521568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[33.957,88.517],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.21,0.763],[-11.688,-18.538],[1.21,-0.763],[11.688,18.538]],"o":[[1.21,-0.763],[11.688,18.537],[-1.21,0.763],[-11.687,-18.538]],"v":[[-21.162,-33.566],[2.191,-1.381],[21.162,33.566],[-2.191,1.381]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.952941236309,0.733333333333,0.521568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[50.645,59.988],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.195,0.787],[-12.051,-18.297],[1.195,-0.787],[12.051,18.298]],"o":[[1.195,-0.787],[12.051,18.297],[-1.194,0.786],[-12.051,-18.297]],"v":[[-21.82,-33.13],[2.163,-1.425],[21.82,33.131],[-2.163,1.424]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.952941236309,0.733333333333,0.521568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[78.165,48.782],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[8.84,4.95],[0,0],[0,0],[6.63,-4.51],[-1.07,-5.53],[5.85,-4.16],[-3.34,-6.99],[2.56,-1.74],[-10.59,-26.65],[0,0],[-32.23,21.88],[1.73,14.93],[9.78,-0.37]],"o":[[-10.21,0.39],[0,0],[-19.26,-26.16],[-12.14,-6.8],[-4.29,2.91],[-4.51,-6.63],[-4.95,3.36],[-2.98,-0.19],[-8.18,5.82],[-2.64,-1.37],[-11.16,7.57],[10.59,26.66],[20.28,29.85],[32.23,-21.88],[-3.11,-26.72],[0,0]],"v":[[61.605,-64.47],[49.975,-50.71],[48.665,-23.23],[-13.205,-98.92],[-31.045,-99.34],[-34.995,-90.39],[-55.165,-94.24],[-61.265,-79.46],[-74.385,-74.6],[-71.285,-42.98],[-79.185,-42.84],[-73.005,6.86],[-38.665,69.41],[56.405,83.84],[88.615,-2.57],[61.615,-64.46]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.84313731474,0.686274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[90.595,105.97],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"left Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8,"s":[410,182,0],"to":[4,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":11,"s":[434,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":18,"s":[410,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":21,"s":[434,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":27,"s":[410,182,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[434,182,0],"to":[0,0,0],"ti":[4,0,0]},{"t":36.0000014663101,"s":[410,182,0]}],"ix":2},"a":{"a":0,"k":[90.595,105.97,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[8.84,4.95],[0,0],[0,0],[6.63,-4.51],[-1.07,-5.53],[5.85,-4.16],[-3.34,-6.99],[2.56,-1.74],[-10.59,-26.65],[0,0],[-32.23,21.88],[1.73,14.93],[9.78,-0.37]],"o":[[-10.21,0.39],[0,0],[-19.26,-26.16],[-12.14,-6.8],[-4.29,2.91],[-4.51,-6.63],[-4.95,3.36],[-2.98,-0.19],[-8.18,5.82],[-2.64,-1.37],[-11.16,7.57],[10.59,26.66],[20.28,29.85],[32.23,-21.88],[-3.11,-26.72],[0,0]],"v":[[61.605,-64.47],[49.975,-50.71],[48.665,-23.23],[-13.205,-98.92],[-31.045,-99.34],[-34.995,-90.39],[-55.165,-94.24],[-61.265,-79.46],[-74.385,-74.6],[-71.285,-42.98],[-79.185,-42.84],[-73.005,6.86],[-38.665,69.41],[56.405,83.84],[88.615,-2.57],[61.615,-64.46]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.952941236309,0.733333333333,0.521568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[90.595,105.97],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":91.000003706506,"st":0,"bm":0}]'
    ),
    F0 = [],
    M = {
        v: D0,
        meta: E0,
        fr: j0,
        ip: G0,
        op: w0,
        w: B0,
        h: P0,
        nm: T0,
        ddd: V0,
        assets: O0,
        layers: R0,
        markers: F0,
    },
    C = '/assets/notification-wBGf4-Tp.mp3',
    L0 = ({ message: t, type: e }) =>
        n.jsx(V.div, {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 40, opacity: 0 },
            style: {
                position: 'fixed',
                bottom: 32,
                left: '50%',
                transform: 'translateX(-50%)',
                background: e === 'success' ? '#43b581' : '#5865f2',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                zIndex: 9999,
                boxShadow: '0 4px 24px #0006',
            },
            children: t,
        }),
    N = [
        { type: 'heart', emoji: '❤️', animation: M },
        { type: 'fire', emoji: '🔥' },
        { type: 'laugh', emoji: '😂' },
        { type: 'star', emoji: '⭐' },
    ],
    C0 = (t = 20) =>
        Array.from({ length: t }).map((e, a) => ({
            id: a + 1,
            author: `User${(a % 7) + 1}`,
            avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=User${(a % 7) + 1}`,
            title: `Post #${a + 1}`,
            content: `Ceci est le contenu du post numéro ${a + 1}.`,
            media:
                a % 3 === 0
                    ? 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif'
                    : null,
            reactions: {
                heart: Math.floor(Math.random() * 5),
                fire: Math.floor(Math.random() * 3),
                laugh: Math.floor(Math.random() * 2),
                star: Math.floor(Math.random() * 4),
            },
            timestamp: Date.now() - Math.floor(Math.random() * 1e8),
        })),
    z = ({ type: t, emoji: e, count: a, onReact: i, animation: l }) => {
        const [u, r] = g.useState(!1),
            v = (s) => {
                s.stopPropagation(), r(!0), i(t), setTimeout(() => r(!1), 700);
            };
        return n.jsxs(V.button, {
            whileTap: { scale: 1.3 },
            onClick: v,
            style: {
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                margin: '0 4px',
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                fontSize: 18,
                position: 'relative',
            },
            children: [
                n.jsx('span', {
                    style: { position: 'relative', width: 28, height: 28 },
                    children: l
                        ? n.jsx(I, {
                              animationData: l,
                              loop: !1,
                              play: u,
                              style: {
                                  width: 28,
                                  height: 28,
                                  position: 'absolute',
                                  left: 0,
                                  top: 0,
                              },
                          })
                        : n.jsx('span', { children: e }),
                }),
                n.jsx('span', {
                    style: { marginLeft: 4, fontSize: 14 },
                    children: a,
                }),
            ],
        });
    },
    _0 = ({ post: t, onReact: e, onClick: a }) =>
        n.jsxs(V.div, {
            className: 'discord-message',
            whileHover: { background: '#2a2d32' },
            style: {
                display: 'flex',
                alignItems: 'flex-start',
                padding: '16px 20px',
                borderBottom: '1px solid #23272a',
                background: '#313338',
                cursor: 'pointer',
                gap: 16,
            },
            onClick: () => a(t),
            children: [
                n.jsx('img', {
                    src: t.avatar,
                    alt: t.author,
                    style: {
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        marginTop: 2,
                        border: '2px solid #23272a',
                    },
                }),
                n.jsxs('div', {
                    style: { flex: 1 },
                    children: [
                        n.jsxs('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                            },
                            children: [
                                n.jsx('span', {
                                    style: { color: '#fff', fontWeight: 600 },
                                    children: t.author,
                                }),
                                n.jsx('span', {
                                    style: { color: '#b5bac1', fontSize: 12 },
                                    children: new Date(
                                        t.timestamp
                                    ).toLocaleString(),
                                }),
                            ],
                        }),
                        n.jsx('div', {
                            style: { color: '#dbdee1', margin: '4px 0 6px 0' },
                            children: t.content,
                        }),
                        t.media &&
                            n.jsx('img', {
                                src: t.media,
                                alt: '',
                                style: {
                                    maxWidth: 240,
                                    borderRadius: 8,
                                    margin: '6px 0',
                                    border: '1px solid #23272a',
                                },
                            }),
                        n.jsx('div', {
                            style: { display: 'flex', marginTop: 6 },
                            children: N.map((i) =>
                                n.jsx(
                                    z,
                                    {
                                        type: i.type,
                                        emoji: i.emoji,
                                        count: t.reactions[i.type],
                                        onReact: () => e(t.id, i.type),
                                        animation: i.animation,
                                    },
                                    i.type
                                )
                            ),
                        }),
                    ],
                }),
            ],
        }),
    I0 = ({ post: t, onClose: e, onReact: a }) =>
        t
            ? n.jsx('div', {
                  style: {
                      position: 'fixed',
                      zIndex: 100,
                      left: 0,
                      top: 0,
                      width: '100vw',
                      height: '100vh',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  },
                  onClick: e,
                  children: n.jsxs(V.div, {
                      initial: { scale: 0.9, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      exit: { scale: 0.9, opacity: 0 },
                      style: {
                          background: '#23272a',
                          borderRadius: 12,
                          padding: 32,
                          minWidth: 340,
                          maxWidth: 420,
                          boxShadow: '0 8px 32px #0008',
                          color: '#fff',
                          position: 'relative',
                      },
                      onClick: (i) => i.stopPropagation(),
                      children: [
                          n.jsx('button', {
                              onClick: e,
                              style: {
                                  position: 'absolute',
                                  right: 16,
                                  top: 16,
                                  background: 'none',
                                  border: 'none',
                                  color: '#fff',
                                  fontSize: 22,
                                  cursor: 'pointer',
                              },
                              children: '×',
                          }),
                          n.jsxs('div', {
                              style: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 12,
                              },
                              children: [
                                  n.jsx('img', {
                                      src: t.avatar,
                                      alt: t.author,
                                      style: {
                                          width: 48,
                                          height: 48,
                                          borderRadius: '50%',
                                      },
                                  }),
                                  n.jsxs('div', {
                                      children: [
                                          n.jsx('div', {
                                              style: { fontWeight: 700 },
                                              children: t.author,
                                          }),
                                          n.jsx('div', {
                                              style: {
                                                  color: '#b5bac1',
                                                  fontSize: 13,
                                              },
                                              children: new Date(
                                                  t.timestamp
                                              ).toLocaleString(),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          n.jsx('div', {
                              style: { margin: '18px 0 10px 0', fontSize: 17 },
                              children: t.content,
                          }),
                          t.media &&
                              n.jsx('img', {
                                  src: t.media,
                                  alt: '',
                                  style: {
                                      maxWidth: '100%',
                                      borderRadius: 8,
                                      margin: '8px 0',
                                      border: '1px solid #313338',
                                  },
                              }),
                          n.jsx('div', {
                              style: { display: 'flex', marginTop: 10 },
                              children: N.map((i) =>
                                  n.jsx(
                                      z,
                                      {
                                          type: i.type,
                                          emoji: i.emoji,
                                          count: t.reactions[i.type],
                                          onReact: () => a(t.id, i.type),
                                          animation: i.animation,
                                      },
                                      i.type
                                  )
                              ),
                          }),
                      ],
                  }),
              })
            : null,
    R = 'supernova_blog_posts',
    z0 = () => {
        const [t, e] = g.useState([]),
            [a, i] = g.useState(null),
            [l, u] = g.useState(''),
            [r, v] = g.useState(''),
            [s, A] = g.useState(null),
            k = g.useRef(null),
            D = g.useRef(null);
        g.useEffect(() => {
            const o = localStorage.getItem(R);
            if (o) e(JSON.parse(o));
            else {
                const b = C0(10);
                e(b), localStorage.setItem(R, JSON.stringify(b));
            }
        }, []),
            g.useEffect(() => {
                t.length && localStorage.setItem(R, JSON.stringify(t));
            }, [t]),
            g.useEffect(() => {
                if (s) {
                    const o = setTimeout(() => A(null), 1800);
                    return () => clearTimeout(o);
                }
            }, [s]);
        const j = (o, b) => {
                e((y) =>
                    y.map((p) =>
                        p.id === o
                            ? {
                                  ...p,
                                  reactions: {
                                      ...p.reactions,
                                      [b]: p.reactions[b] + 1,
                                  },
                              }
                            : p
                    )
                ),
                    a &&
                        a.id === o &&
                        i((y) => ({
                            ...y,
                            reactions: {
                                ...y.reactions,
                                [b]: y.reactions[b] + 1,
                            },
                        }));
            },
            E = async (o) => {
                o.preventDefault(),
                    !(!l.trim() && !r.trim()) &&
                        (A({ message: 'Envoi en cours...', type: 'loading' }),
                        k.current && k.current.play(),
                        setTimeout(() => {
                            const b = {
                                id: t.length
                                    ? Math.max(...t.map((y) => y.id)) + 1
                                    : 1,
                                author: 'You',
                                avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=You',
                                title: '',
                                content: l,
                                media: r.trim() ? r.trim() : null,
                                reactions: {
                                    heart: 0,
                                    fire: 0,
                                    laugh: 0,
                                    star: 0,
                                },
                                timestamp: Date.now(),
                            };
                            e([b, ...t]),
                                u(''),
                                v(''),
                                A({
                                    message: 'Message envoyé !',
                                    type: 'success',
                                }),
                                D.current && D.current.play();
                        }, 1200));
            };
        return n.jsxs('div', {
            className: 'flex h-[100vh] w-full overflow-y-auto',
            children: [
                n.jsx('audio', { ref: k, src: C, preload: 'auto' }),
                n.jsx('audio', { ref: D, src: C, preload: 'auto' }),
                n.jsxs('aside', {
                    style: {
                        width: 260,
                        background: '#1e1f22',
                        borderRight: '1px solid #23272a',
                        padding: '32px 0 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    },
                    children: [
                        n.jsx('div', {
                            style: { marginBottom: 32 },
                            children: n.jsx('h2', {
                                style: {
                                    color: '#fff',
                                    fontSize: 22,
                                    margin: 0,
                                },
                                children: 'The ENDPAGE',
                            }),
                        }),
                        n.jsxs('div', {
                            style: {
                                color: '#b5bac1',
                                fontSize: 15,
                                marginBottom: 24,
                            },
                            children: [
                                n.jsx(I, {
                                    animationData: M,
                                    loop: !0,
                                    style: { width: 80 },
                                }),
                                n.jsx('div', {
                                    style: { marginTop: 8 },
                                    children: 'Ambiance du jour',
                                }),
                            ],
                        }),
                        n.jsx('div', {
                            style: {
                                color: '#5865f2',
                                fontWeight: 600,
                                marginTop: 24,
                            },
                            children: '# général',
                        }),
                        n.jsxs('div', {
                            style: {
                                color: '#b5bac1',
                                marginTop: 12,
                                fontSize: 13,
                            },
                            children: [t.length, ' messages'],
                        }),
                    ],
                }),
                n.jsxs('main', {
                    style: {
                        flex: 1,
                        padding: '0 0 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    },
                    children: [
                        n.jsx('div', {
                            style: {
                                background: '#313338',
                                borderBottom: '1px solid #23272a',
                                padding: '18px 32px',
                                fontSize: 20,
                                color: '#fff',
                                fontWeight: 700,
                                letterSpacing: 1,
                            },
                            children: '# général',
                        }),
                        n.jsx('div', {
                            style: {
                                flex: 1,
                                overflowY: 'auto',
                                background: '#2b2d31',
                                padding: '0 0 32px 0',
                            },
                            children: t.map((o) =>
                                n.jsx(
                                    _0,
                                    { post: o, onReact: j, onClick: i },
                                    o.id
                                )
                            ),
                        }),
                        n.jsxs('form', {
                            onSubmit: E,
                            style: {
                                background: '#383a40',
                                borderTop: '1px solid #23272a',
                                padding: '16px 32px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                            },
                            children: [
                                n.jsx('img', {
                                    src: 'https://api.dicebear.com/7.x/bottts/svg?seed=You',
                                    alt: 'You',
                                    style: {
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                    },
                                }),
                                n.jsx('input', {
                                    type: 'text',
                                    placeholder:
                                        'Envoyer un message à #général',
                                    style: {
                                        flex: 1,
                                        background: '#23272a',
                                        border: 'none',
                                        borderRadius: 8,
                                        color: '#fff',
                                        padding: '10px 16px',
                                        fontSize: 16,
                                        outline: 'none',
                                    },
                                    value: l,
                                    onChange: (o) => u(o.target.value),
                                }),
                                n.jsx('input', {
                                    type: 'url',
                                    placeholder: 'URL image/gif (optionnel)',
                                    style: {
                                        width: 180,
                                        background: '#23272a',
                                        border: 'none',
                                        borderRadius: 8,
                                        color: '#fff',
                                        padding: '10px 12px',
                                        fontSize: 15,
                                        outline: 'none',
                                    },
                                    value: r,
                                    onChange: (o) => v(o.target.value),
                                }),
                                n.jsx('button', {
                                    style: {
                                        background: '#5865f2',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 8,
                                        padding: '8px 18px',
                                        fontWeight: 600,
                                        fontSize: 15,
                                        cursor:
                                            l.trim() || r.trim()
                                                ? 'pointer'
                                                : 'not-allowed',
                                        opacity: l.trim() || r.trim() ? 1 : 0.7,
                                    },
                                    disabled:
                                        !(l.trim() || r.trim()) ||
                                        (s == null ? void 0 : s.type) ===
                                            'loading',
                                    type: 'submit',
                                    children: 'Envoyer',
                                }),
                            ],
                        }),
                    ],
                }),
                n.jsxs(n0, {
                    children: [
                        a &&
                            n.jsx(I0, {
                                post: a,
                                onClose: () => i(null),
                                onReact: j,
                            }),
                        s && n.jsx(L0, { message: s.message, type: s.type }),
                    ],
                }),
            ],
        });
    };
export { z0 as default };
