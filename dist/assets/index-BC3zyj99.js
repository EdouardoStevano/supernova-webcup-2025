import { b as bi, g as _i, j as w, L as gi } from './index-BRBA0OY8.js';
import { r as Ei } from './index-BjnEytZW.js';
import { r as Gi } from './lottie-4koyQiv_.js';
import { B as Di } from './index-hZT88v7D.js';
import { S as Bi } from './Cube-found-ChOUz20m.js';
import { F as Ai } from './index-D8lQuXat.js';
var l0 = {},
    c0 = {},
    pe = {},
    A0 = { exports: {} },
    ke;
function U() {
    if (ke) return A0.exports;
    ke = 1;
    var r = (A0.exports =
        typeof window < 'u' && window.Math == Math
            ? window
            : typeof self < 'u' && self.Math == Math
              ? self
              : Function('return this')());
    return typeof __g == 'number' && (__g = r), A0.exports;
}
var P0 = { exports: {} },
    he;
function C() {
    if (he) return P0.exports;
    he = 1;
    var r = (P0.exports = { version: '2.6.12' });
    return typeof __e == 'number' && (__e = r), P0.exports;
}
var S0, de;
function Pi() {
    return (
        de ||
            ((de = 1),
            (S0 = function (r) {
                if (typeof r != 'function')
                    throw TypeError(r + ' is not a function!');
                return r;
            })),
        S0
    );
}
var V0, ve;
function oi() {
    if (ve) return V0;
    ve = 1;
    var r = Pi();
    return (
        (V0 = function (e, a, t) {
            if ((r(e), a === void 0)) return e;
            switch (t) {
                case 1:
                    return function (n) {
                        return e.call(a, n);
                    };
                case 2:
                    return function (n, o) {
                        return e.call(a, n, o);
                    };
                case 3:
                    return function (n, o, i) {
                        return e.call(a, n, o, i);
                    };
            }
            return function () {
                return e.apply(a, arguments);
            };
        }),
        V0
    );
}
var q0 = {},
    O0,
    ye;
function X() {
    return (
        ye ||
            ((ye = 1),
            (O0 = function (r) {
                return typeof r == 'object'
                    ? r !== null
                    : typeof r == 'function';
            })),
        O0
    );
}
var F0, be;
function s0() {
    if (be) return F0;
    be = 1;
    var r = X();
    return (
        (F0 = function (e) {
            if (!r(e)) throw TypeError(e + ' is not an object!');
            return e;
        }),
        F0
    );
}
var R0, _e;
function r0() {
    return (
        _e ||
            ((_e = 1),
            (R0 = function (r) {
                try {
                    return !!r();
                } catch {
                    return !0;
                }
            })),
        R0
    );
}
var j0, ge;
function Y() {
    return (
        ge ||
            ((ge = 1),
            (j0 = !r0()(function () {
                return (
                    Object.defineProperty({}, 'a', {
                        get: function () {
                            return 7;
                        },
                    }).a != 7
                );
            }))),
        j0
    );
}
var T0, Ee;
function si() {
    if (Ee) return T0;
    Ee = 1;
    var r = X(),
        e = U().document,
        a = r(e) && r(e.createElement);
    return (
        (T0 = function (t) {
            return a ? e.createElement(t) : {};
        }),
        T0
    );
}
var w0, Ge;
function ui() {
    return (
        Ge ||
            ((Ge = 1),
            (w0 =
                !Y() &&
                !r0()(function () {
                    return (
                        Object.defineProperty(si()('div'), 'a', {
                            get: function () {
                                return 7;
                            },
                        }).a != 7
                    );
                }))),
        w0
    );
}
var I0, De;
function zr() {
    if (De) return I0;
    De = 1;
    var r = X();
    return (
        (I0 = function (e, a) {
            if (!r(e)) return e;
            var t, n;
            if (
                (a &&
                    typeof (t = e.toString) == 'function' &&
                    !r((n = t.call(e)))) ||
                (typeof (t = e.valueOf) == 'function' && !r((n = t.call(e)))) ||
                (!a &&
                    typeof (t = e.toString) == 'function' &&
                    !r((n = t.call(e))))
            )
                return n;
            throw TypeError("Can't convert object to primitive value");
        }),
        I0
    );
}
var Be;
function H() {
    if (Be) return q0;
    Be = 1;
    var r = s0(),
        e = ui(),
        a = zr(),
        t = Object.defineProperty;
    return (
        (q0.f = Y()
            ? Object.defineProperty
            : function (o, i, s) {
                  if ((r(o), (i = a(i, !0)), r(s), e))
                      try {
                          return t(o, i, s);
                      } catch {}
                  if ('get' in s || 'set' in s)
                      throw TypeError('Accessors not supported!');
                  return 'value' in s && (o[i] = s.value), o;
              }),
        q0
    );
}
var $0, Ae;
function d0() {
    return (
        Ae ||
            ((Ae = 1),
            ($0 = function (r, e) {
                return {
                    enumerable: !(r & 1),
                    configurable: !(r & 2),
                    writable: !(r & 4),
                    value: e,
                };
            })),
        $0
    );
}
var M0, Pe;
function e0() {
    if (Pe) return M0;
    Pe = 1;
    var r = H(),
        e = d0();
    return (
        (M0 = Y()
            ? function (a, t, n) {
                  return r.f(a, t, e(1, n));
              }
            : function (a, t, n) {
                  return (a[t] = n), a;
              }),
        M0
    );
}
var L0, Se;
function J() {
    if (Se) return L0;
    Se = 1;
    var r = {}.hasOwnProperty;
    return (
        (L0 = function (e, a) {
            return r.call(e, a);
        }),
        L0
    );
}
var C0, Ve;
function Q() {
    if (Ve) return C0;
    Ve = 1;
    var r = U(),
        e = C(),
        a = oi(),
        t = e0(),
        n = J(),
        o = 'prototype',
        i = function (s, u, l) {
            var k = s & i.F,
                G = s & i.G,
                p = s & i.S,
                V = s & i.P,
                L = s & i.B,
                x = s & i.W,
                q = G ? e : e[u] || (e[u] = {}),
                I = q[o],
                d = G ? r : p ? r[u] : (r[u] || {})[o],
                _,
                A,
                g;
            G && (l = u);
            for (_ in l)
                (A = !k && d && d[_] !== void 0),
                    !(A && n(q, _)) &&
                        ((g = A ? d[_] : l[_]),
                        (q[_] =
                            G && typeof d[_] != 'function'
                                ? l[_]
                                : L && A
                                  ? a(g, r)
                                  : x && d[_] == g
                                    ? (function (v) {
                                          var E = function (m, b, O) {
                                              if (this instanceof v) {
                                                  switch (arguments.length) {
                                                      case 0:
                                                          return new v();
                                                      case 1:
                                                          return new v(m);
                                                      case 2:
                                                          return new v(m, b);
                                                  }
                                                  return new v(m, b, O);
                                              }
                                              return v.apply(this, arguments);
                                          };
                                          return (E[o] = v[o]), E;
                                      })(g)
                                    : V && typeof g == 'function'
                                      ? a(Function.call, g)
                                      : g),
                        V &&
                            (((q.virtual || (q.virtual = {}))[_] = g),
                            s & i.R && I && !I[_] && t(I, _, g)));
        };
    return (
        (i.F = 1),
        (i.G = 2),
        (i.S = 4),
        (i.P = 8),
        (i.B = 16),
        (i.W = 32),
        (i.U = 64),
        (i.R = 128),
        (C0 = i),
        C0
    );
}
var N0, qe;
function fi() {
    if (qe) return N0;
    qe = 1;
    var r = {}.toString;
    return (
        (N0 = function (e) {
            return r.call(e).slice(8, -1);
        }),
        N0
    );
}
var K0, Oe;
function li() {
    if (Oe) return K0;
    Oe = 1;
    var r = fi();
    return (
        (K0 = Object('z').propertyIsEnumerable(0)
            ? Object
            : function (e) {
                  return r(e) == 'String' ? e.split('') : Object(e);
              }),
        K0
    );
}
var W0, Fe;
function Ur() {
    return (
        Fe ||
            ((Fe = 1),
            (W0 = function (r) {
                if (r == null) throw TypeError("Can't call method on  " + r);
                return r;
            })),
        W0
    );
}
var z0, Re;
function t0() {
    if (Re) return z0;
    Re = 1;
    var r = li(),
        e = Ur();
    return (
        (z0 = function (a) {
            return r(e(a));
        }),
        z0
    );
}
var U0, je;
function Yr() {
    if (je) return U0;
    je = 1;
    var r = Math.ceil,
        e = Math.floor;
    return (
        (U0 = function (a) {
            return isNaN((a = +a)) ? 0 : (a > 0 ? e : r)(a);
        }),
        U0
    );
}
var Y0, Te;
function Si() {
    if (Te) return Y0;
    Te = 1;
    var r = Yr(),
        e = Math.min;
    return (
        (Y0 = function (a) {
            return a > 0 ? e(r(a), 9007199254740991) : 0;
        }),
        Y0
    );
}
var H0, we;
function Vi() {
    if (we) return H0;
    we = 1;
    var r = Yr(),
        e = Math.max,
        a = Math.min;
    return (
        (H0 = function (t, n) {
            return (t = r(t)), t < 0 ? e(t + n, 0) : a(t, n);
        }),
        H0
    );
}
var J0, Ie;
function qi() {
    if (Ie) return J0;
    Ie = 1;
    var r = t0(),
        e = Si(),
        a = Vi();
    return (
        (J0 = function (t) {
            return function (n, o, i) {
                var s = r(n),
                    u = e(s.length),
                    l = a(i, u),
                    k;
                if (t && o != o) {
                    for (; u > l; ) if (((k = s[l++]), k != k)) return !0;
                } else
                    for (; u > l; l++)
                        if ((t || l in s) && s[l] === o) return t || l || 0;
                return !t && -1;
            };
        }),
        J0
    );
}
var Q0 = { exports: {} },
    Z0,
    $e;
function v0() {
    return $e || (($e = 1), (Z0 = !0)), Z0;
}
var Me;
function Hr() {
    if (Me) return Q0.exports;
    Me = 1;
    var r = C(),
        e = U(),
        a = '__core-js_shared__',
        t = e[a] || (e[a] = {});
    return (
        (Q0.exports = function (n, o) {
            return t[n] || (t[n] = o !== void 0 ? o : {});
        })('versions', []).push({
            version: r.version,
            mode: v0() ? 'pure' : 'global',
            copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
        }),
        Q0.exports
    );
}
var X0, Le;
function y0() {
    if (Le) return X0;
    Le = 1;
    var r = 0,
        e = Math.random();
    return (
        (X0 = function (a) {
            return 'Symbol('.concat(
                a === void 0 ? '' : a,
                ')_',
                (++r + e).toString(36)
            );
        }),
        X0
    );
}
var rr, Ce;
function Jr() {
    if (Ce) return rr;
    Ce = 1;
    var r = Hr()('keys'),
        e = y0();
    return (
        (rr = function (a) {
            return r[a] || (r[a] = e(a));
        }),
        rr
    );
}
var er, Ne;
function ci() {
    if (Ne) return er;
    Ne = 1;
    var r = J(),
        e = t0(),
        a = qi()(!1),
        t = Jr()('IE_PROTO');
    return (
        (er = function (n, o) {
            var i = e(n),
                s = 0,
                u = [],
                l;
            for (l in i) l != t && r(i, l) && u.push(l);
            for (; o.length > s; )
                r(i, (l = o[s++])) && (~a(u, l) || u.push(l));
            return u;
        }),
        er
    );
}
var tr, Ke;
function Qr() {
    return (
        Ke ||
            ((Ke = 1),
            (tr =
                'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
                    ','
                ))),
        tr
    );
}
var ir, We;
function b0() {
    if (We) return ir;
    We = 1;
    var r = ci(),
        e = Qr();
    return (
        (ir =
            Object.keys ||
            function (t) {
                return r(t, e);
            }),
        ir
    );
}
var ar = {},
    ze;
function Zr() {
    return ze || ((ze = 1), (ar.f = Object.getOwnPropertySymbols)), ar;
}
var nr = {},
    Ue;
function _0() {
    return Ue || ((Ue = 1), (nr.f = {}.propertyIsEnumerable)), nr;
}
var or, Ye;
function g0() {
    if (Ye) return or;
    Ye = 1;
    var r = Ur();
    return (
        (or = function (e) {
            return Object(r(e));
        }),
        or
    );
}
var sr, He;
function Oi() {
    if (He) return sr;
    He = 1;
    var r = Y(),
        e = b0(),
        a = Zr(),
        t = _0(),
        n = g0(),
        o = li(),
        i = Object.assign;
    return (
        (sr =
            !i ||
            r0()(function () {
                var s = {},
                    u = {},
                    l = Symbol(),
                    k = 'abcdefghijklmnopqrst';
                return (
                    (s[l] = 7),
                    k.split('').forEach(function (G) {
                        u[G] = G;
                    }),
                    i({}, s)[l] != 7 || Object.keys(i({}, u)).join('') != k
                );
            })
                ? function (u, l) {
                      for (
                          var k = n(u),
                              G = arguments.length,
                              p = 1,
                              V = a.f,
                              L = t.f;
                          G > p;

                      )
                          for (
                              var x = o(arguments[p++]),
                                  q = V ? e(x).concat(V(x)) : e(x),
                                  I = q.length,
                                  d = 0,
                                  _;
                              I > d;

                          )
                              (_ = q[d++]),
                                  (!r || L.call(x, _)) && (k[_] = x[_]);
                      return k;
                  }
                : i),
        sr
    );
}
var Je;
function Fi() {
    if (Je) return pe;
    Je = 1;
    var r = Q();
    return r(r.S + r.F, 'Object', { assign: Oi() }), pe;
}
var ur, Qe;
function Ri() {
    return Qe || ((Qe = 1), Fi(), (ur = C().Object.assign)), ur;
}
var fr, Ze;
function ji() {
    return Ze || ((Ze = 1), (fr = { default: Ri(), __esModule: !0 })), fr;
}
var Xe;
function Ti() {
    if (Xe) return c0;
    (Xe = 1), (c0.__esModule = !0);
    var r = ji(),
        e = a(r);
    function a(t) {
        return t && t.__esModule ? t : { default: t };
    }
    return (
        (c0.default =
            e.default ||
            function (t) {
                for (var n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                            (t[i] = o[i]);
                }
                return t;
            }),
        c0
    );
}
var rt = {},
    lr,
    et;
function xi() {
    if (et) return lr;
    et = 1;
    var r = J(),
        e = g0(),
        a = Jr()('IE_PROTO'),
        t = Object.prototype;
    return (
        (lr =
            Object.getPrototypeOf ||
            function (n) {
                return (
                    (n = e(n)),
                    r(n, a)
                        ? n[a]
                        : typeof n.constructor == 'function' &&
                            n instanceof n.constructor
                          ? n.constructor.prototype
                          : n instanceof Object
                            ? t
                            : null
                );
            }),
        lr
    );
}
var cr, tt;
function wi() {
    if (tt) return cr;
    tt = 1;
    var r = Q(),
        e = C(),
        a = r0();
    return (
        (cr = function (t, n) {
            var o = (e.Object || {})[t] || Object[t],
                i = {};
            (i[t] = n(o)),
                r(
                    r.S +
                        r.F *
                            a(function () {
                                o(1);
                            }),
                    'Object',
                    i
                );
        }),
        cr
    );
}
var it;
function Ii() {
    if (it) return rt;
    it = 1;
    var r = g0(),
        e = xi();
    return (
        wi()('getPrototypeOf', function () {
            return function (t) {
                return e(r(t));
            };
        }),
        rt
    );
}
var xr, at;
function $i() {
    return at || ((at = 1), Ii(), (xr = C().Object.getPrototypeOf)), xr;
}
var mr, nt;
function Mi() {
    return nt || ((nt = 1), (mr = { default: $i(), __esModule: !0 })), mr;
}
var x0 = {},
    ot;
function Li() {
    return (
        ot ||
            ((ot = 1),
            (x0.__esModule = !0),
            (x0.default = function (r, e) {
                if (!(r instanceof e))
                    throw new TypeError('Cannot call a class as a function');
            })),
        x0
    );
}
var m0 = {},
    st = {},
    ut;
function Ci() {
    if (ut) return st;
    ut = 1;
    var r = Q();
    return r(r.S + r.F * !Y(), 'Object', { defineProperty: H().f }), st;
}
var pr, ft;
function Ni() {
    if (ft) return pr;
    (ft = 1), Ci();
    var r = C().Object;
    return (
        (pr = function (a, t, n) {
            return r.defineProperty(a, t, n);
        }),
        pr
    );
}
var kr, lt;
function Ki() {
    return lt || ((lt = 1), (kr = { default: Ni(), __esModule: !0 })), kr;
}
var ct;
function Wi() {
    if (ct) return m0;
    (ct = 1), (m0.__esModule = !0);
    var r = Ki(),
        e = a(r);
    function a(t) {
        return t && t.__esModule ? t : { default: t };
    }
    return (
        (m0.default = (function () {
            function t(n, o) {
                for (var i = 0; i < o.length; i++) {
                    var s = o[i];
                    (s.enumerable = s.enumerable || !1),
                        (s.configurable = !0),
                        'value' in s && (s.writable = !0),
                        (0, e.default)(n, s.key, s);
                }
            }
            return function (n, o, i) {
                return o && t(n.prototype, o), i && t(n, i), n;
            };
        })()),
        m0
    );
}
var p0 = {},
    k0 = {},
    xt = {},
    hr,
    mt;
function zi() {
    if (mt) return hr;
    mt = 1;
    var r = Yr(),
        e = Ur();
    return (
        (hr = function (a) {
            return function (t, n) {
                var o = String(e(t)),
                    i = r(n),
                    s = o.length,
                    u,
                    l;
                return i < 0 || i >= s
                    ? a
                        ? ''
                        : void 0
                    : ((u = o.charCodeAt(i)),
                      u < 55296 ||
                      u > 56319 ||
                      i + 1 === s ||
                      (l = o.charCodeAt(i + 1)) < 56320 ||
                      l > 57343
                          ? a
                              ? o.charAt(i)
                              : u
                          : a
                            ? o.slice(i, i + 2)
                            : ((u - 55296) << 10) + (l - 56320) + 65536);
            };
        }),
        hr
    );
}
var dr, pt;
function mi() {
    return pt || ((pt = 1), (dr = e0())), dr;
}
var vr, kt;
function Xr() {
    return kt || ((kt = 1), (vr = {})), vr;
}
var yr, ht;
function Ui() {
    if (ht) return yr;
    ht = 1;
    var r = H(),
        e = s0(),
        a = b0();
    return (
        (yr = Y()
            ? Object.defineProperties
            : function (n, o) {
                  e(n);
                  for (var i = a(o), s = i.length, u = 0, l; s > u; )
                      r.f(n, (l = i[u++]), o[l]);
                  return n;
              }),
        yr
    );
}
var br, dt;
function Yi() {
    if (dt) return br;
    dt = 1;
    var r = U().document;
    return (br = r && r.documentElement), br;
}
var _r, vt;
function re() {
    if (vt) return _r;
    vt = 1;
    var r = s0(),
        e = Ui(),
        a = Qr(),
        t = Jr()('IE_PROTO'),
        n = function () {},
        o = 'prototype',
        i = function () {
            var s = si()('iframe'),
                u = a.length,
                l = '<',
                k = '>',
                G;
            for (
                s.style.display = 'none',
                    Yi().appendChild(s),
                    s.src = 'javascript:',
                    G = s.contentWindow.document,
                    G.open(),
                    G.write(
                        l +
                            'script' +
                            k +
                            'document.F=Object' +
                            l +
                            '/script' +
                            k
                    ),
                    G.close(),
                    i = G.F;
                u--;

            )
                delete i[o][a[u]];
            return i();
        };
    return (
        (_r =
            Object.create ||
            function (u, l) {
                var k;
                return (
                    u !== null
                        ? ((n[o] = r(u)),
                          (k = new n()),
                          (n[o] = null),
                          (k[t] = u))
                        : (k = i()),
                    l === void 0 ? k : e(k, l)
                );
            }),
        _r
    );
}
var gr = { exports: {} },
    yt;
function i0() {
    if (yt) return gr.exports;
    yt = 1;
    var r = Hr()('wks'),
        e = y0(),
        a = U().Symbol,
        t = typeof a == 'function',
        n = (gr.exports = function (o) {
            return r[o] || (r[o] = (t && a[o]) || (t ? a : e)('Symbol.' + o));
        });
    return (n.store = r), gr.exports;
}
var Er, bt;
function ee() {
    if (bt) return Er;
    bt = 1;
    var r = H().f,
        e = J(),
        a = i0()('toStringTag');
    return (
        (Er = function (t, n, o) {
            t &&
                !e((t = o ? t : t.prototype), a) &&
                r(t, a, { configurable: !0, value: n });
        }),
        Er
    );
}
var Gr, _t;
function Hi() {
    if (_t) return Gr;
    _t = 1;
    var r = re(),
        e = d0(),
        a = ee(),
        t = {};
    return (
        e0()(t, i0()('iterator'), function () {
            return this;
        }),
        (Gr = function (n, o, i) {
            (n.prototype = r(t, { next: e(1, i) })), a(n, o + ' Iterator');
        }),
        Gr
    );
}
var Dr, gt;
function pi() {
    if (gt) return Dr;
    gt = 1;
    var r = v0(),
        e = Q(),
        a = mi(),
        t = e0(),
        n = Xr(),
        o = Hi(),
        i = ee(),
        s = xi(),
        u = i0()('iterator'),
        l = !([].keys && 'next' in [].keys()),
        k = '@@iterator',
        G = 'keys',
        p = 'values',
        V = function () {
            return this;
        };
    return (
        (Dr = function (L, x, q, I, d, _, A) {
            o(q, x, I);
            var g = function (S) {
                    if (!l && S in b) return b[S];
                    switch (S) {
                        case G:
                            return function () {
                                return new q(this, S);
                            };
                        case p:
                            return function () {
                                return new q(this, S);
                            };
                    }
                    return function () {
                        return new q(this, S);
                    };
                },
                v = x + ' Iterator',
                E = d == p,
                m = !1,
                b = L.prototype,
                O = b[u] || b[k] || (d && b[d]),
                F = O || g(d),
                P = d ? (E ? g('entries') : F) : void 0,
                N = (x == 'Array' && b.entries) || O,
                D,
                $,
                j;
            if (
                (N &&
                    ((j = s(N.call(new L()))),
                    j !== Object.prototype &&
                        j.next &&
                        (i(j, v, !0),
                        !r && typeof j[u] != 'function' && t(j, u, V))),
                E &&
                    O &&
                    O.name !== p &&
                    ((m = !0),
                    (F = function () {
                        return O.call(this);
                    })),
                (!r || A) && (l || m || !b[u]) && t(b, u, F),
                (n[x] = F),
                (n[v] = V),
                d)
            )
                if (
                    ((D = {
                        values: E ? F : g(p),
                        keys: _ ? F : g(G),
                        entries: P,
                    }),
                    A)
                )
                    for ($ in D) $ in b || a(b, $, D[$]);
                else e(e.P + e.F * (l || m), x, D);
            return D;
        }),
        Dr
    );
}
var Et;
function Ji() {
    if (Et) return xt;
    Et = 1;
    var r = zi()(!0);
    return (
        pi()(
            String,
            'String',
            function (e) {
                (this._t = String(e)), (this._i = 0);
            },
            function () {
                var e = this._t,
                    a = this._i,
                    t;
                return a >= e.length
                    ? { value: void 0, done: !0 }
                    : ((t = r(e, a)),
                      (this._i += t.length),
                      { value: t, done: !1 });
            }
        ),
        xt
    );
}
var Gt = {},
    Br,
    Dt;
function Qi() {
    return Dt || ((Dt = 1), (Br = function () {})), Br;
}
var Ar, Bt;
function Zi() {
    return (
        Bt ||
            ((Bt = 1),
            (Ar = function (r, e) {
                return { value: e, done: !!r };
            })),
        Ar
    );
}
var Pr, At;
function Xi() {
    if (At) return Pr;
    At = 1;
    var r = Qi(),
        e = Zi(),
        a = Xr(),
        t = t0();
    return (
        (Pr = pi()(
            Array,
            'Array',
            function (n, o) {
                (this._t = t(n)), (this._i = 0), (this._k = o);
            },
            function () {
                var n = this._t,
                    o = this._k,
                    i = this._i++;
                return !n || i >= n.length
                    ? ((this._t = void 0), e(1))
                    : o == 'keys'
                      ? e(0, i)
                      : o == 'values'
                        ? e(0, n[i])
                        : e(0, [i, n[i]]);
            },
            'values'
        )),
        (a.Arguments = a.Array),
        r('keys'),
        r('values'),
        r('entries'),
        Pr
    );
}
var Pt;
function ra() {
    if (Pt) return Gt;
    (Pt = 1), Xi();
    for (
        var r = U(),
            e = e0(),
            a = Xr(),
            t = i0()('toStringTag'),
            n =
                'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
                    ','
                ),
            o = 0;
        o < n.length;
        o++
    ) {
        var i = n[o],
            s = r[i],
            u = s && s.prototype;
        u && !u[t] && e(u, t, i), (a[i] = a.Array);
    }
    return Gt;
}
var Sr = {},
    St;
function te() {
    return St || ((St = 1), (Sr.f = i0())), Sr;
}
var Vr, Vt;
function ea() {
    return Vt || ((Vt = 1), Ji(), ra(), (Vr = te().f('iterator'))), Vr;
}
var qr, qt;
function ta() {
    return qt || ((qt = 1), (qr = { default: ea(), __esModule: !0 })), qr;
}
var Ot = {},
    Or = { exports: {} },
    Ft;
function ia() {
    if (Ft) return Or.exports;
    Ft = 1;
    var r = y0()('meta'),
        e = X(),
        a = J(),
        t = H().f,
        n = 0,
        o =
            Object.isExtensible ||
            function () {
                return !0;
            },
        i = !r0()(function () {
            return o(Object.preventExtensions({}));
        }),
        s = function (p) {
            t(p, r, { value: { i: 'O' + ++n, w: {} } });
        },
        u = function (p, V) {
            if (!e(p))
                return typeof p == 'symbol'
                    ? p
                    : (typeof p == 'string' ? 'S' : 'P') + p;
            if (!a(p, r)) {
                if (!o(p)) return 'F';
                if (!V) return 'E';
                s(p);
            }
            return p[r].i;
        },
        l = function (p, V) {
            if (!a(p, r)) {
                if (!o(p)) return !0;
                if (!V) return !1;
                s(p);
            }
            return p[r].w;
        },
        k = function (p) {
            return i && G.NEED && o(p) && !a(p, r) && s(p), p;
        },
        G = (Or.exports = {
            KEY: r,
            NEED: !1,
            fastKey: u,
            getWeak: l,
            onFreeze: k,
        });
    return Or.exports;
}
var Fr, Rt;
function ie() {
    if (Rt) return Fr;
    Rt = 1;
    var r = U(),
        e = C(),
        a = v0(),
        t = te(),
        n = H().f;
    return (
        (Fr = function (o) {
            var i = e.Symbol || (e.Symbol = a ? {} : r.Symbol || {});
            o.charAt(0) != '_' && !(o in i) && n(i, o, { value: t.f(o) });
        }),
        Fr
    );
}
var Rr, jt;
function aa() {
    if (jt) return Rr;
    jt = 1;
    var r = b0(),
        e = Zr(),
        a = _0();
    return (
        (Rr = function (t) {
            var n = r(t),
                o = e.f;
            if (o)
                for (var i = o(t), s = a.f, u = 0, l; i.length > u; )
                    s.call(t, (l = i[u++])) && n.push(l);
            return n;
        }),
        Rr
    );
}
var jr, Tt;
function na() {
    if (Tt) return jr;
    Tt = 1;
    var r = fi();
    return (
        (jr =
            Array.isArray ||
            function (a) {
                return r(a) == 'Array';
            }),
        jr
    );
}
var Tr = {},
    wr = {},
    wt;
function ki() {
    if (wt) return wr;
    wt = 1;
    var r = ci(),
        e = Qr().concat('length', 'prototype');
    return (
        (wr.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return r(t, e);
            }),
        wr
    );
}
var It;
function oa() {
    if (It) return Tr;
    It = 1;
    var r = t0(),
        e = ki().f,
        a = {}.toString,
        t =
            typeof window == 'object' && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [],
        n = function (o) {
            try {
                return e(o);
            } catch {
                return t.slice();
            }
        };
    return (
        (Tr.f = function (i) {
            return t && a.call(i) == '[object Window]' ? n(i) : e(r(i));
        }),
        Tr
    );
}
var Ir = {},
    $t;
function hi() {
    if ($t) return Ir;
    $t = 1;
    var r = _0(),
        e = d0(),
        a = t0(),
        t = zr(),
        n = J(),
        o = ui(),
        i = Object.getOwnPropertyDescriptor;
    return (
        (Ir.f = Y()
            ? i
            : function (u, l) {
                  if (((u = a(u)), (l = t(l, !0)), o))
                      try {
                          return i(u, l);
                      } catch {}
                  if (n(u, l)) return e(!r.f.call(u, l), u[l]);
              }),
        Ir
    );
}
var Mt;
function sa() {
    if (Mt) return Ot;
    Mt = 1;
    var r = U(),
        e = J(),
        a = Y(),
        t = Q(),
        n = mi(),
        o = ia().KEY,
        i = r0(),
        s = Hr(),
        u = ee(),
        l = y0(),
        k = i0(),
        G = te(),
        p = ie(),
        V = aa(),
        L = na(),
        x = s0(),
        q = X(),
        I = g0(),
        d = t0(),
        _ = zr(),
        A = d0(),
        g = re(),
        v = oa(),
        E = hi(),
        m = Zr(),
        b = H(),
        O = b0(),
        F = E.f,
        P = b.f,
        N = v.f,
        D = r.Symbol,
        $ = r.JSON,
        j = $ && $.stringify,
        S = 'prototype',
        B = k('_hidden'),
        W = k('toPrimitive'),
        a0 = {}.propertyIsEnumerable,
        n0 = s('symbol-registry'),
        K = s('symbols'),
        o0 = s('op-symbols'),
        M = Object[S],
        Z = typeof D == 'function' && !!m.f,
        E0 = r.QObject,
        G0 = !E0 || !E0[S] || !E0[S].findChild,
        D0 =
            a &&
            i(function () {
                return (
                    g(
                        P({}, 'a', {
                            get: function () {
                                return P(this, 'a', { value: 7 }).a;
                            },
                        })
                    ).a != 7
                );
            })
                ? function (h, f, c) {
                      var y = F(M, f);
                      y && delete M[f], P(h, f, c), y && h !== M && P(M, f, y);
                  }
                : P,
        ae = function (h) {
            var f = (K[h] = g(D[S]));
            return (f._k = h), f;
        },
        B0 =
            Z && typeof D.iterator == 'symbol'
                ? function (h) {
                      return typeof h == 'symbol';
                  }
                : function (h) {
                      return h instanceof D;
                  },
        u0 = function (f, c, y) {
            return (
                f === M && u0(o0, c, y),
                x(f),
                (c = _(c, !0)),
                x(y),
                e(K, c)
                    ? (y.enumerable
                          ? (e(f, B) && f[B][c] && (f[B][c] = !1),
                            (y = g(y, { enumerable: A(0, !1) })))
                          : (e(f, B) || P(f, B, A(1, {})), (f[B][c] = !0)),
                      D0(f, c, y))
                    : P(f, c, y)
            );
        },
        ne = function (f, c) {
            x(f);
            for (var y = V((c = d(c))), R = 0, T = y.length, z; T > R; )
                u0(f, (z = y[R++]), c[z]);
            return f;
        },
        vi = function (f, c) {
            return c === void 0 ? g(f) : ne(g(f), c);
        },
        oe = function (f) {
            var c = a0.call(this, (f = _(f, !0)));
            return this === M && e(K, f) && !e(o0, f)
                ? !1
                : c || !e(this, f) || !e(K, f) || (e(this, B) && this[B][f])
                  ? c
                  : !0;
        },
        se = function (f, c) {
            if (
                ((f = d(f)), (c = _(c, !0)), !(f === M && e(K, c) && !e(o0, c)))
            ) {
                var y = F(f, c);
                return (
                    y &&
                        e(K, c) &&
                        !(e(f, B) && f[B][c]) &&
                        (y.enumerable = !0),
                    y
                );
            }
        },
        ue = function (f) {
            for (var c = N(d(f)), y = [], R = 0, T; c.length > R; )
                !e(K, (T = c[R++])) && T != B && T != o && y.push(T);
            return y;
        },
        fe = function (f) {
            for (
                var c = f === M, y = N(c ? o0 : d(f)), R = [], T = 0, z;
                y.length > T;

            )
                e(K, (z = y[T++])) && (!c || e(M, z)) && R.push(K[z]);
            return R;
        };
    Z ||
        ((D = function () {
            if (this instanceof D)
                throw TypeError('Symbol is not a constructor!');
            var f = l(arguments.length > 0 ? arguments[0] : void 0),
                c = function (y) {
                    this === M && c.call(o0, y),
                        e(this, B) && e(this[B], f) && (this[B][f] = !1),
                        D0(this, f, A(1, y));
                };
            return a && G0 && D0(M, f, { configurable: !0, set: c }), ae(f);
        }),
        n(D[S], 'toString', function () {
            return this._k;
        }),
        (E.f = se),
        (b.f = u0),
        (ki().f = v.f = ue),
        (_0().f = oe),
        (m.f = fe),
        a && !v0() && n(M, 'propertyIsEnumerable', oe, !0),
        (G.f = function (h) {
            return ae(k(h));
        })),
        t(t.G + t.W + t.F * !Z, { Symbol: D });
    for (
        var le =
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
                    ','
                ),
            ce = 0;
        le.length > ce;

    )
        k(le[ce++]);
    for (var xe = O(k.store), me = 0; xe.length > me; ) p(xe[me++]);
    t(t.S + t.F * !Z, 'Symbol', {
        for: function (h) {
            return e(n0, (h += '')) ? n0[h] : (n0[h] = D(h));
        },
        keyFor: function (f) {
            if (!B0(f)) throw TypeError(f + ' is not a symbol!');
            for (var c in n0) if (n0[c] === f) return c;
        },
        useSetter: function () {
            G0 = !0;
        },
        useSimple: function () {
            G0 = !1;
        },
    }),
        t(t.S + t.F * !Z, 'Object', {
            create: vi,
            defineProperty: u0,
            defineProperties: ne,
            getOwnPropertyDescriptor: se,
            getOwnPropertyNames: ue,
            getOwnPropertySymbols: fe,
        });
    var yi = i(function () {
        m.f(1);
    });
    return (
        t(t.S + t.F * yi, 'Object', {
            getOwnPropertySymbols: function (f) {
                return m.f(I(f));
            },
        }),
        $ &&
            t(
                t.S +
                    t.F *
                        (!Z ||
                            i(function () {
                                var h = D();
                                return (
                                    j([h]) != '[null]' ||
                                    j({ a: h }) != '{}' ||
                                    j(Object(h)) != '{}'
                                );
                            })),
                'JSON',
                {
                    stringify: function (f) {
                        for (var c = [f], y = 1, R, T; arguments.length > y; )
                            c.push(arguments[y++]);
                        if (
                            ((T = R = c[1]),
                            !((!q(R) && f === void 0) || B0(f)))
                        )
                            return (
                                L(R) ||
                                    (R = function (z, f0) {
                                        if (
                                            (typeof T == 'function' &&
                                                (f0 = T.call(this, z, f0)),
                                            !B0(f0))
                                        )
                                            return f0;
                                    }),
                                (c[1] = R),
                                j.apply($, c)
                            );
                    },
                }
            ),
        D[S][W] || e0()(D[S], W, D[S].valueOf),
        u(D, 'Symbol'),
        u(Math, 'Math', !0),
        u(r.JSON, 'JSON', !0),
        Ot
    );
}
var Lt = {},
    Ct;
function ua() {
    return Ct || ((Ct = 1), ie()('asyncIterator')), Lt;
}
var Nt = {},
    Kt;
function fa() {
    return Kt || ((Kt = 1), ie()('observable')), Nt;
}
var $r, Wt;
function la() {
    return Wt || ((Wt = 1), sa(), ua(), fa(), ($r = C().Symbol)), $r;
}
var Mr, zt;
function ca() {
    return zt || ((zt = 1), (Mr = { default: la(), __esModule: !0 })), Mr;
}
var Ut;
function di() {
    if (Ut) return k0;
    (Ut = 1), (k0.__esModule = !0);
    var r = ta(),
        e = o(r),
        a = ca(),
        t = o(a),
        n =
            typeof t.default == 'function' && typeof e.default == 'symbol'
                ? function (i) {
                      return typeof i;
                  }
                : function (i) {
                      return i &&
                          typeof t.default == 'function' &&
                          i.constructor === t.default &&
                          i !== t.default.prototype
                          ? 'symbol'
                          : typeof i;
                  };
    function o(i) {
        return i && i.__esModule ? i : { default: i };
    }
    return (
        (k0.default =
            typeof t.default == 'function' && n(e.default) === 'symbol'
                ? function (i) {
                      return typeof i > 'u' ? 'undefined' : n(i);
                  }
                : function (i) {
                      return i &&
                          typeof t.default == 'function' &&
                          i.constructor === t.default &&
                          i !== t.default.prototype
                          ? 'symbol'
                          : typeof i > 'u'
                            ? 'undefined'
                            : n(i);
                  }),
        k0
    );
}
var Yt;
function xa() {
    if (Yt) return p0;
    (Yt = 1), (p0.__esModule = !0);
    var r = di(),
        e = a(r);
    function a(t) {
        return t && t.__esModule ? t : { default: t };
    }
    return (
        (p0.default = function (t, n) {
            if (!t)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return n &&
                ((typeof n > 'u' ? 'undefined' : (0, e.default)(n)) ===
                    'object' ||
                    typeof n == 'function')
                ? n
                : t;
        }),
        p0
    );
}
var h0 = {},
    Ht = {},
    Lr,
    Jt;
function ma() {
    if (Jt) return Lr;
    Jt = 1;
    var r = X(),
        e = s0(),
        a = function (t, n) {
            if ((e(t), !r(n) && n !== null))
                throw TypeError(n + ": can't set as prototype!");
        };
    return (
        (Lr = {
            set:
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function (t, n, o) {
                          try {
                              (o = oi()(
                                  Function.call,
                                  hi().f(Object.prototype, '__proto__').set,
                                  2
                              )),
                                  o(t, []),
                                  (n = !(t instanceof Array));
                          } catch {
                              n = !0;
                          }
                          return function (s, u) {
                              return (
                                  a(s, u), n ? (s.__proto__ = u) : o(s, u), s
                              );
                          };
                      })({}, !1)
                    : void 0),
            check: a,
        }),
        Lr
    );
}
var Qt;
function pa() {
    if (Qt) return Ht;
    Qt = 1;
    var r = Q();
    return r(r.S, 'Object', { setPrototypeOf: ma().set }), Ht;
}
var Cr, Zt;
function ka() {
    return Zt || ((Zt = 1), pa(), (Cr = C().Object.setPrototypeOf)), Cr;
}
var Nr, Xt;
function ha() {
    return Xt || ((Xt = 1), (Nr = { default: ka(), __esModule: !0 })), Nr;
}
var ri = {},
    ei;
function da() {
    if (ei) return ri;
    ei = 1;
    var r = Q();
    return r(r.S, 'Object', { create: re() }), ri;
}
var Kr, ti;
function va() {
    if (ti) return Kr;
    (ti = 1), da();
    var r = C().Object;
    return (
        (Kr = function (a, t) {
            return r.create(a, t);
        }),
        Kr
    );
}
var Wr, ii;
function ya() {
    return ii || ((ii = 1), (Wr = { default: va(), __esModule: !0 })), Wr;
}
var ai;
function ba() {
    if (ai) return h0;
    (ai = 1), (h0.__esModule = !0);
    var r = ha(),
        e = i(r),
        a = ya(),
        t = i(a),
        n = di(),
        o = i(n);
    function i(s) {
        return s && s.__esModule ? s : { default: s };
    }
    return (
        (h0.default = function (s, u) {
            if (typeof u != 'function' && u !== null)
                throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                        (typeof u > 'u' ? 'undefined' : (0, o.default)(u))
                );
            (s.prototype = (0, t.default)(u && u.prototype, {
                constructor: {
                    value: s,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
                u && (e.default ? (0, e.default)(s, u) : (s.__proto__ = u));
        }),
        h0
    );
}
var ni;
function _a() {
    if (ni) return l0;
    (ni = 1), Object.defineProperty(l0, '__esModule', { value: !0 });
    var r = Ti(),
        e = d(r),
        a = Mi(),
        t = d(a),
        n = Li(),
        o = d(n),
        i = Wi(),
        s = d(i),
        u = xa(),
        l = d(u),
        k = ba(),
        G = d(k),
        p = bi(),
        V = d(p),
        L = Ei(),
        x = d(L),
        q = Gi(),
        I = d(q);
    function d(A) {
        return A && A.__esModule ? A : { default: A };
    }
    var _ = (function (A) {
        (0, G.default)(g, A);
        function g() {
            var v, E, m, b;
            (0, o.default)(this, g);
            for (var O = arguments.length, F = Array(O), P = 0; P < O; P++)
                F[P] = arguments[P];
            return (
                (b =
                    ((E =
                        ((m = (0, l.default)(
                            this,
                            (v = g.__proto__ || (0, t.default)(g)).call.apply(
                                v,
                                [this].concat(F)
                            )
                        )),
                        m)),
                    (m.handleClickToPause = function () {
                        m.anim.isPaused ? m.anim.play() : m.anim.pause();
                    }),
                    E)),
                (0, l.default)(m, b)
            );
        }
        return (
            (0, s.default)(g, [
                {
                    key: 'componentDidMount',
                    value: function () {
                        var E = this.props,
                            m = E.options,
                            b = E.eventListeners,
                            O = m.loop,
                            F = m.autoplay,
                            P = m.animationData,
                            N = m.rendererSettings,
                            D = m.segments;
                        (this.options = {
                            container: this.el,
                            renderer: 'svg',
                            loop: O !== !1,
                            autoplay: F !== !1,
                            segments: D !== !1,
                            animationData: P,
                            rendererSettings: N,
                        }),
                            (this.options = (0, e.default)(
                                {},
                                this.options,
                                m
                            )),
                            (this.anim = I.default.loadAnimation(this.options)),
                            this.registerEvents(b),
                            this.setSpeed();
                    },
                },
                {
                    key: 'componentWillUpdate',
                    value: function (E) {
                        this.options.animationData !==
                            E.options.animationData &&
                            (this.deRegisterEvents(this.props.eventListeners),
                            this.destroy(),
                            (this.options = (0, e.default)(
                                {},
                                this.options,
                                E.options
                            )),
                            (this.anim = I.default.loadAnimation(this.options)),
                            this.registerEvents(E.eventListeners));
                    },
                },
                {
                    key: 'componentDidUpdate',
                    value: function () {
                        this.props.isStopped
                            ? this.stop()
                            : this.props.segments
                              ? this.playSegments()
                              : this.play(),
                            this.pause(),
                            this.setSpeed(),
                            this.setDirection();
                    },
                },
                {
                    key: 'componentWillUnmount',
                    value: function () {
                        this.deRegisterEvents(this.props.eventListeners),
                            this.destroy(),
                            (this.options.animationData = null),
                            (this.anim = null);
                    },
                },
                {
                    key: 'setSpeed',
                    value: function () {
                        this.anim.setSpeed(this.props.speed);
                    },
                },
                {
                    key: 'setDirection',
                    value: function () {
                        this.anim.setDirection(this.props.direction);
                    },
                },
                {
                    key: 'play',
                    value: function () {
                        this.anim.play();
                    },
                },
                {
                    key: 'playSegments',
                    value: function () {
                        this.anim.playSegments(this.props.segments);
                    },
                },
                {
                    key: 'stop',
                    value: function () {
                        this.anim.stop();
                    },
                },
                {
                    key: 'pause',
                    value: function () {
                        this.props.isPaused && !this.anim.isPaused
                            ? this.anim.pause()
                            : !this.props.isPaused &&
                              this.anim.isPaused &&
                              this.anim.pause();
                    },
                },
                {
                    key: 'destroy',
                    value: function () {
                        this.anim.destroy();
                    },
                },
                {
                    key: 'registerEvents',
                    value: function (E) {
                        var m = this;
                        E.forEach(function (b) {
                            m.anim.addEventListener(b.eventName, b.callback);
                        });
                    },
                },
                {
                    key: 'deRegisterEvents',
                    value: function (E) {
                        var m = this;
                        E.forEach(function (b) {
                            m.anim.removeEventListener(b.eventName, b.callback);
                        });
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var E = this,
                            m = this.props,
                            b = m.width,
                            O = m.height,
                            F = m.ariaRole,
                            P = m.ariaLabel,
                            N = m.isClickToPauseDisabled,
                            D = m.title,
                            $ = function (W) {
                                var a0 = void 0;
                                return (
                                    typeof W == 'number'
                                        ? (a0 = W + 'px')
                                        : (a0 = W || '100%'),
                                    a0
                                );
                            },
                            j = (0, e.default)(
                                {
                                    width: $(b),
                                    height: $(O),
                                    overflow: 'hidden',
                                    margin: '0 auto',
                                    outline: 'none',
                                },
                                this.props.style
                            ),
                            S = N
                                ? function () {
                                      return null;
                                  }
                                : this.handleClickToPause;
                        return V.default.createElement('div', {
                            ref: function (W) {
                                E.el = W;
                            },
                            style: j,
                            onClick: S,
                            title: D,
                            role: F,
                            'aria-label': P,
                            tabIndex: '0',
                        });
                    },
                },
            ]),
            g
        );
    })(V.default.Component);
    return (
        (l0.default = _),
        (_.propTypes = {
            eventListeners: x.default.arrayOf(x.default.object),
            options: x.default.object.isRequired,
            height: x.default.oneOfType([x.default.string, x.default.number]),
            width: x.default.oneOfType([x.default.string, x.default.number]),
            isStopped: x.default.bool,
            isPaused: x.default.bool,
            speed: x.default.number,
            segments: x.default.arrayOf(x.default.number),
            direction: x.default.number,
            ariaRole: x.default.string,
            ariaLabel: x.default.string,
            isClickToPauseDisabled: x.default.bool,
            title: x.default.string,
            style: x.default.object,
        }),
        (_.defaultProps = {
            eventListeners: [],
            isStopped: !1,
            isPaused: !1,
            speed: 1,
            ariaRole: 'button',
            ariaLabel: 'animation',
            isClickToPauseDisabled: !1,
            title: '',
        }),
        l0
    );
}
var ga = _a();
const Ea = _i(ga),
    Ga = '5.5.7',
    Da = { g: 'LottieFiles AE 0.1.20', a: '', k: '', d: '', tc: '' },
    Ba = 29.9700012207031,
    Aa = 0,
    Pa = 122.000004969162,
    Sa = 625,
    Va = 481,
    qa = 'size/list',
    Oa = 0,
    Fa = [],
    Ra = JSON.parse(
        '[{"ddd":0,"ind":2,"ty":4,"nm":"magni_frame","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[380.5,284.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[424.5,272.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[380.5,284.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":90,"s":[424.5,272.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":120.0000048877,"s":[380.5,284.5,0]}],"ix":2},"a":{"a":0,"k":[91.5,91.5,0],"ix":1},"s":{"a":0,"k":[83.947,83.947,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.978,19.977],[-19.979,19.977],[-19.978,-19.977],[19.976,-19.978]],"o":[[-19.977,-19.978],[19.977,-19.977],[19.976,19.977],[-19.978,19.978]],"v":[[-51.185,21.159],[-51.184,-51.185],[21.159,-51.186],[21.159,21.159]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.686,4.685],[0,0],[24.183,24.183],[27.007,-27.006],[-27.006,-27.007],[-26.961,18.76],[0,0],[-4.685,4.685]],"o":[[0,0],[19.125,-26.996],[-27.007,-27.007],[-27.006,27.007],[24.041,24.04],[0,0],[4.685,4.685],[4.686,-4.685]],"v":[[86.233,69.269],[41.455,24.894],[33.886,-63.913],[-63.913,-63.913],[-63.913,33.887],[24.415,41.788],[69.267,86.234],[86.233,86.234]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.23137254901960785,0.6431372549019608,0.9725490196078431,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[91.169,91.17],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"shape","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[377.795,206.976,0],"ix":2},"a":{"a":0,"k":[86.5,86.5,0],"ix":1},"s":{"a":0,"k":[132.403,53.543,100],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":50,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-47.497],[47.497,0],[0,47.497],[-47.497,0]],"o":[[0,47.497],[-47.497,0],[0,-47.497],[47.497,0]],"v":[[86,0],[0,86],[-86,0],[0,-86]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.477388808307,0.718542779661,0.991850490196,1],"ix":4},"o":{"a":0,"k":75,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[87.192,86.962],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100.791,100.791],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"magni","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[380.5,284.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[424.5,272.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[380.5,284.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":90,"s":[424.5,272.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":120.0000048877,"s":[380.5,284.5,0]}],"ix":2},"a":{"a":0,"k":[91.5,91.5,0],"ix":1},"s":{"a":0,"k":[83.947,83.947,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.978,19.977],[-19.979,19.977],[-19.978,-19.977],[19.976,-19.978]],"o":[[-19.977,-19.978],[19.977,-19.977],[19.976,19.977],[-19.978,19.978]],"v":[[-51.185,21.159],[-51.184,-51.185],[21.159,-51.186],[21.159,21.159]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.686,4.685],[0,0],[24.183,24.183],[27.007,-27.006],[-27.006,-27.007],[-26.961,18.76],[0,0],[-4.685,4.685]],"o":[[0,0],[19.125,-26.996],[-27.007,-27.007],[-27.006,27.007],[24.041,24.04],[0,0],[4.685,4.685],[4.686,-4.685]],"v":[[86.233,69.269],[41.455,24.894],[33.886,-63.913],[-63.913,-63.913],[-63.913,33.887],[24.415,41.788],[69.267,86.234],[86.233,86.234]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.23137254901960785,0.6431372549019608,0.9725490196078431,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[91.169,91.17],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.258,0],[0.309,0.659],[-2.083,9.708],[-0.982,-0.209],[0.211,-0.981],[-3.865,-8.242],[0.908,-0.426]],"o":[[-0.683,0],[-4.199,-8.955],[0.21,-0.981],[0.981,0.211],[-1.918,8.937],[0.425,0.907],[-0.249,0.116]],"v":[[2.471,15.796],[0.825,14.75],[-2.456,-14.192],[-0.3,-15.587],[1.095,-13.43],[4.114,13.209],[3.241,15.624]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[34.08,80.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.653,0],[0.27,0.142],[-0.467,0.888],[-0.616,1.662],[-0.941,-0.348],[0.349,-0.94],[0.897,-1.705]],"o":[[-0.284,0],[-0.887,-0.466],[0.824,-1.568],[0.35,-0.94],[0.941,0.349],[-0.671,1.807],[-0.325,0.618]],"v":[[-1.124,4.474],[-1.967,4.265],[-2.729,1.812],[-0.559,-3.055],[1.776,-4.126],[2.847,-1.79],[0.485,3.503]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[116.007,93.836],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.375,0],[0.357,0.481],[1.475,1.474],[9.566,1.049],[-0.11,0.997],[-1.003,-0.112],[-7.303,-7.303],[-1.339,-1.807],[0.807,-0.597]],"o":[[-0.556,0],[-1.232,-1.663],[-6.819,-6.819],[-0.997,-0.109],[0.11,-0.997],[10.247,1.123],[1.601,1.601],[0.597,0.806],[-0.325,0.241]],"v":[[15.124,10.607],[13.663,9.872],[9.584,5.143],[-15.462,-6.883],[-17.068,-8.887],[-15.064,-10.495],[12.152,2.574],[16.581,7.71],[16.202,10.25]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[96.212,41.374],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.69,0],[0.243,0.111],[-0.414,0.913],[-0.988,1.606],[-0.855,-0.525],[0.525,-0.854],[0.718,-1.582]],"o":[[-0.251,0],[-0.914,-0.414],[0.78,-1.72],[0.525,-0.854],[0.854,0.525],[-0.908,1.476],[-0.303,0.67]],"v":[[-1.281,4.349],[-2.03,4.186],[-2.934,1.783],[-0.271,-3.229],[2.227,-3.824],[2.823,-1.326],[0.373,3.283]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[37.597,55.556],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.978,-19.977],[-19.977,-19.977],[-19.978,19.978],[19.976,19.977]],"o":[[-19.978,19.977],[19.978,19.977],[19.976,-19.977],[-19.978,-19.978]],"v":[[-36.172,-36.172],[-36.172,36.171],[36.172,36.171],[36.172,-36.172]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.501999974251,0.651000022888,1,1],"ix":4},"o":{"a":0,"k":25,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.156,76.156],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"magni_sh","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[89.052,104.5,0],"ix":2},"a":{"a":0,"k":[91.5,91.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":16,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.978,19.977],[-19.979,19.977],[-19.978,-19.977],[19.976,-19.978]],"o":[[-19.977,-19.978],[19.977,-19.977],[19.976,19.977],[-19.978,19.978]],"v":[[-51.185,21.159],[-51.184,-51.185],[21.159,-51.186],[21.159,21.159]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.686,4.685],[0,0],[24.183,24.183],[27.007,-27.006],[-27.006,-27.007],[-26.961,18.76],[0,0],[-4.685,4.685]],"o":[[0,0],[19.125,-26.996],[-27.007,-27.007],[-27.006,27.007],[24.041,24.04],[0,0],[4.685,4.685],[4.686,-4.685]],"v":[[86.233,69.269],[41.455,24.894],[33.886,-63.913],[-63.913,-63.913],[-63.913,33.887],[24.415,41.788],[69.267,86.234],[86.233,86.234]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.43137255311,0.501960813999,0.615686297417,1],"ix":4},"o":{"a":0,"k":10,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[91.169,91.17],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"list4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[0]},{"t":120.0000048877,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":110,"s":[312.5,160,0],"to":[0,10,0],"ti":[0,-10,0]},{"t":120.0000048877,"s":[312.5,220,0]}],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.852,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.852,0]],"v":[[1.541,0],[0,-1.541],[-1.541,0],[0,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[83.352,46.752],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.851,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.851,0]],"v":[[1.541,0],[0,-1.541],[-1.541,0],[0,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.996,40.01],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.852,0],[0,-0.851],[-0.85,0]],"o":[[0,-0.851],[-0.85,0],[0,0.851],[0.852,0]],"v":[[1.542,0],[-0.001,-1.541],[-1.542,0],[-0.001,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[59.852,41.359],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.851,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.851,0]],"v":[[1.542,-0.001],[0.001,-1.542],[-1.542,-0.001],[0.001,1.542]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[62.741,49.257],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.852,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.852,0]],"v":[[1.541,0],[-0.001,-1.541],[-1.541,0],[-0.001,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[51.568,45.211],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-13.869,-7.055],[3.66,7.055],[13.869,-7.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[77.718,66.761],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.423],[3.425,0],[0,0],[0,3.424],[-3.424,0],[0,0]],"o":[[0,3.424],[0,0],[-3.424,0],[0,-3.423],[0,0],[3.425,0]],"v":[[32.762,0],[26.561,6.199],[-26.562,6.199],[-32.762,0],[-26.562,-6.199],[26.561,-6.199]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.725,0.736999990426,0.773000021542,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.071,65.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-12.66],[12.975,0],[0,12.659],[-16.402,0]],"o":[[0,12.659],[-12.975,0],[0,-12.66],[16.401,0]],"v":[[29.698,3.975],[0.001,13.635],[-29.698,3.975],[0.001,-16.635]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.071,49.845],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.149,0],[1.28,-1.008],[1.755,0],[1.279,-1.008],[1.754,0],[0,-4.149],[-4.149,0],[-1.277,1.007],[-1.754,0],[-1.278,1.007],[-1.754,0],[0,4.149]],"o":[[-1.754,0],[-1.278,-1.008],[-1.754,0],[-1.277,-1.008],[-4.149,0],[0,4.149],[1.754,0],[1.279,1.007],[1.755,0],[1.28,1.007],[4.149,0],[0,-4.149]],"v":[[9.288,-7.512],[4.644,-5.898],[0,-7.512],[-4.644,-5.898],[-9.287,-7.512],[-16.8,0],[-9.287,7.512],[-4.644,5.898],[0,7.512],[4.644,5.898],[9.288,7.512],[16.8,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.885999971278,0.898000021542,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[80.979,71.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.149,0],[1.279,-1.008],[1.754,0],[1.279,-1.008],[1.756,0],[0,-4.149],[-4.149,0],[-1.279,1.007],[-1.755,0],[-1.278,1.007],[-1.755,0],[0,4.149]],"o":[[-1.755,0],[-1.278,-1.008],[-1.755,0],[-1.279,-1.008],[-4.149,0],[0,4.149],[1.756,0],[1.279,1.007],[1.754,0],[1.279,1.007],[4.149,0],[0,-4.149]],"v":[[9.289,-7.512],[4.644,-5.898],[0.001,-7.512],[-4.644,-5.898],[-9.289,-7.512],[-16.801,0],[-9.289,7.512],[-4.644,5.898],[0.001,7.512],[4.644,5.898],[9.289,7.512],[16.801,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.885999971278,0.898000021542,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.164,71.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":4,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.872,4.521],[28.872,-4.521],[-28.872,-4.521],[-28.872,4.521]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.725,0.736999990426,0.773000021542,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.072,77.814],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":4,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.603,0],[0,0],[0,5.604],[0,0]],"o":[[0,0],[0,5.604],[0,0],[5.602,0],[0,0],[0,0]],"v":[[-28.872,-9.594],[-28.872,-0.551],[-18.726,9.594],[18.727,9.594],[28.872,-0.551],[28.872,-9.594]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.072,82.887],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":4,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[90.539,8.938],[-90.539,8.938],[-95.294,4.183],[-95.294,-4.183],[-90.539,-8.938],[90.539,-8.938],[95.294,-4.183],[95.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[225.654,45.822],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":4,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[133.539,8.938],[-133.539,8.938],[-138.294,4.183],[-138.294,-4.183],[-133.539,-8.938],[133.539,-8.938],[138.294,-4.183],[138.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[268.654,79.869],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":4,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.582],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.582]],"v":[[206.081,62.595],[-206.081,62.595],[-218,50.677],[-218,-50.677],[-206.081,-62.595],[206.081,-62.595],[218,-50.677],[218,50.677]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972999961703,0.976000019148,0.995999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"list4_sh","parent":6,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[0]},{"t":120.0000048877,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[218.5,67,0],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":10,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.582],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.582]],"v":[[206.081,62.595],[-206.081,62.595],[-218,50.677],[-218,-50.677],[-206.081,-62.595],[206.081,-62.595],[218,-50.677],[218,50.677]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.850980401039,0.874509811401,0.92549020052,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"list3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":103,"s":[100]},{"t":120.0000048877,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":70,"s":[312.5,160,0],"to":[0,10,0],"ti":[0,-10,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":80,"s":[312.5,220,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":103,"s":[312.5,220,0],"to":[0,26.667,0],"ti":[0,-26.667,0]},{"t":120.0000048877,"s":[312.5,380,0]}],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[9.68,4.331],[-9.68,4.331],[-9.68,-4.331],[9.68,-4.331]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[72.091,47.936],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[5.782,-29.568],[-5.782,-29.568],[-5.782,29.568],[5.782,29.568]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.705999995213,0.717999985639,0.757000014361,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[49.072,60.917],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.034,0],[0,0],[0,0],[0,0],[0,3.035],[0,0]],"o":[[0,0],[0,0],[0,0],[3.034,0],[0,0],[0,-3.033]],"v":[[17.756,-29.568],[-23.249,-29.568],[-23.249,29.568],[17.756,29.568],[23.249,24.075],[23.249,-24.075]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.811999990426,0.823999980852,0.866999966491,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[66.54,60.917],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.034,0],[0,0],[0,0],[0,0],[0,3.033],[0,0]],"o":[[0,0],[0,0],[0,0],[3.034,0],[0,0],[0,-3.034]],"v":[[18.025,-29.568],[-23.518,-29.568],[-23.518,29.568],[18.025,29.568],[23.518,24.075],[23.518,-24.075]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.663,64.431],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[5.782,-29.568],[-5.782,-29.568],[-5.782,29.568],[5.782,29.568]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.705999995213,0.717999985639,0.757000014361,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[49.072,66.773],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.034,0],[0,0],[0,0],[0,0],[0,3.032],[0,0]],"o":[[0,0],[0,0],[0,0],[3.034,0],[0,0],[0,-3.034]],"v":[[19.879,-29.568],[-25.372,-29.568],[-25.372,29.568],[19.879,29.568],[25.372,24.076],[25.372,-24.076]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.764999988032,0.776000019148,0.830999995213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.662,66.773],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[90.539,8.938],[-90.539,8.938],[-95.294,4.183],[-95.294,-4.183],[-90.539,-8.938],[90.539,-8.938],[95.294,-4.183],[95.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[225.654,45.822],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[133.539,8.938],[-133.539,8.938],[-138.294,4.183],[-138.294,-4.183],[-133.539,-8.938],[133.539,-8.938],[138.294,-4.183],[138.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[268.654,79.868],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.583],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.583]],"v":[[206.081,62.596],[-206.081,62.596],[-218,50.676],[-218,-50.677],[-206.081,-62.596],[206.081,-62.596],[218,-50.677],[218,50.676]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972999961703,0.976000019148,0.995999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"list3_sh","parent":8,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":103,"s":[100]},{"t":110.000004480392,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[218,67,0],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":10,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.583],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.583]],"v":[[206.081,62.596],[-206.081,62.596],[-218,50.676],[-218,-50.677],[-206.081,-62.596],[206.081,-62.596],[218,-50.677],[218,50.676]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.850980401039,0.874509811401,0.92549020052,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":121.000004928431,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"list2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":63,"s":[100]},{"t":80.0000032584668,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[312.5,160,0],"to":[0,10,0],"ti":[0,-10,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":40,"s":[312.5,220,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":63,"s":[312.5,220,0],"to":[0,26.667,0],"ti":[0,-26.667,0]},{"t":80.0000032584668,"s":[312.5,380,0]}],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,7.17],[0,0]],"o":[[0,0],[0,0],[7.17,0],[0,0],[0,0]],"v":[[-9.341,-23.988],[-9.341,23.988],[-3.642,23.988],[9.34,11.005],[9.34,-23.988]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":10,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[81.023,67.621],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.833,0],[0,-0.833],[0.68,-1.104],[0.315,-0.826],[0,-1.427],[-0.346,-0.276],[-0.356,0],[0,0.832],[-0.68,1.104],[0,2.767]],"o":[[-0.833,0],[0,1.912],[-0.378,0.614],[-0.335,0.878],[0,0.477],[0.258,0.206],[0.833,0],[0,-1.912],[0.782,-1.268],[0,-0.833]],"v":[[1.443,-6.187],[-0.065,-4.679],[-1.283,-0.791],[-2.378,1.306],[-2.95,4.68],[-2.378,5.853],[-1.442,6.187],[0.066,4.68],[1.283,0.792],[2.95,-4.679]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[73.021,34.057],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.346,0.276],[0.356,0],[0,-0.833],[0.682,-1.104],[0.315,-0.826],[0,-1.426],[-0.346,-0.276],[-0.356,0],[0,0.832],[-0.681,1.104],[-0.315,0.826],[0,1.426]],"o":[[-0.258,-0.206],[-0.833,0],[0,1.912],[-0.378,0.615],[-0.335,0.878],[0,0.477],[0.257,0.206],[0.833,0],[0,-1.912],[0.378,-0.615],[0.335,-0.878],[0,-0.477]],"v":[[2.378,-5.853],[1.442,-6.187],[-0.065,-4.679],[-1.284,-0.791],[-2.378,1.307],[-2.95,4.68],[-2.378,5.853],[-1.442,6.187],[0.065,4.68],[1.284,0.792],[2.378,-1.306],[2.95,-4.679]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[65.662,34.057],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.346,0.276],[0.355,0],[0,-0.832],[0.68,-1.104],[0,-2.767],[-0.833,0],[0,0.833],[-0.681,1.104],[-0.315,0.826],[0,1.426]],"o":[[-0.258,-0.206],[-0.833,0],[0,1.912],[-0.782,1.267],[0,0.833],[0.832,0],[0,-1.912],[0.379,-0.614],[0.334,-0.878],[0,-0.477]],"v":[[2.379,-5.853],[1.443,-6.187],[-0.066,-4.68],[-1.283,-0.791],[-2.95,4.679],[-1.442,6.187],[0.065,4.679],[1.284,0.791],[2.379,-1.307],[2.95,-4.68]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[58.303,34.057],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-7.17,0],[0,0],[0,7.17],[0,0]],"o":[[0,0],[0,7.17],[0,0],[7.17,0],[0,0],[0,0]],"v":[[-24.673,-16.126],[-24.673,3.144],[-11.691,16.126],[11.69,16.126],[24.673,3.144],[24.673,-16.126]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.705999995213,0.722000002394,0.776000019148,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[65.663,75.482],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-7.17,0],[0,0],[0,7.17],[0,0]],"o":[[0,0],[0,7.17],[0,0],[7.17,0],[0,0],[0,0]],"v":[[-24.673,-23.988],[-24.673,11.005],[-11.691,23.988],[11.691,23.988],[24.673,11.005],[24.673,-23.988]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[65.69,67.621],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.833,0],[-2.091,2.226],[0.027,0.589],[0,0],[0.833,0],[0,0],[0,-0.833],[-0.832,0],[0,0],[0,0],[-0.002,-0.031],[2.419,-2.573],[2.933,0],[0,-0.833]],"o":[[3.798,0],[3.156,-3.355],[0,0],[0,-0.833],[0,0],[-0.832,0],[0,0.833],[0,0],[0,0],[0,0.031],[0.002,0.038],[-1.499,1.594],[-0.833,0],[0,0.832]],"v":[[-5.262,13.906],[3.614,10.553],[6.644,1.962],[6.644,-12.398],[5.136,-13.906],[-4.463,-13.906],[-5.97,-12.398],[-4.463,-10.89],[3.629,-10.89],[3.629,2],[3.632,2.093],[1.418,8.489],[-5.262,10.891],[-6.77,12.399]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.562,62.453],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[90.539,8.938],[-90.539,8.938],[-95.294,4.183],[-95.294,-4.183],[-90.539,-8.938],[90.539,-8.938],[95.294,-4.183],[95.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[225.654,45.822],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[133.539,8.938],[-133.539,8.938],[-138.294,4.183],[-138.294,-4.183],[-133.539,-8.938],[133.539,-8.938],[138.294,-4.183],[138.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[268.654,79.869],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.582],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.582]],"v":[[206.081,62.596],[-206.081,62.596],[-218,50.677],[-218,-50.677],[-206.081,-62.596],[206.081,-62.596],[218,-50.677],[218,50.677]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972999961703,0.976000019148,0.995999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":4,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"list2_sh","parent":10,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":63,"s":[100]},{"t":70.0000028511585,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[218.5,67,0],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":10,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.582],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.582]],"v":[[206.081,62.596],[-206.081,62.596],[-218,50.677],[-218,-50.677],[-206.081,-62.596],[206.081,-62.596],[218,-50.677],[218,50.677]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.850980401039,0.874509811401,0.92549020052,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"list1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[100]},{"t":40.0000016292334,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":0,"s":[312.5,220,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":23,"s":[312.5,220,0],"to":[0,26.667,0],"ti":[0,-26.667,0]},{"t":40.0000016292334,"s":[312.5,380,0]}],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.852,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.852,0]],"v":[[1.541,0],[0,-1.541],[-1.541,0],[0,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[83.352,46.752],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.851,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.851,0]],"v":[[1.541,0],[0,-1.541],[-1.541,0],[0,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[76.996,40.01],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.852,0],[0,-0.851],[-0.85,0]],"o":[[0,-0.851],[-0.85,0],[0,0.851],[0.852,0]],"v":[[1.542,0],[-0.001,-1.541],[-1.542,0],[-0.001,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[59.852,41.359],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.851,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.851,0]],"v":[[1.542,-0.001],[0.001,-1.542],[-1.542,-0.001],[0.001,1.542]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[62.741,49.257],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.851],[0.852,0],[0,-0.851],[-0.851,0]],"o":[[0,-0.851],[-0.851,0],[0,0.851],[0.852,0]],"v":[[1.541,0],[-0.001,-1.541],[-1.541,0],[-0.001,1.541]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819999964097,0.827000038297,0.870999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[51.568,45.211],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-13.869,-7.055],[3.66,7.055],[13.869,-7.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[77.718,66.761],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.423],[3.425,0],[0,0],[0,3.424],[-3.424,0],[0,0]],"o":[[0,3.424],[0,0],[-3.424,0],[0,-3.423],[0,0],[3.425,0]],"v":[[32.762,0],[26.561,6.199],[-26.562,6.199],[-32.762,0],[-26.562,-6.199],[26.561,-6.199]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.725,0.736999990426,0.773000021542,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.071,65.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-12.66],[12.975,0],[0,12.659],[-16.402,0]],"o":[[0,12.659],[-12.975,0],[0,-12.66],[16.401,0]],"v":[[29.698,3.975],[0.001,13.635],[-29.698,3.975],[0.001,-16.635]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.071,49.845],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.149,0],[1.28,-1.008],[1.755,0],[1.279,-1.008],[1.754,0],[0,-4.149],[-4.149,0],[-1.277,1.007],[-1.754,0],[-1.278,1.007],[-1.754,0],[0,4.149]],"o":[[-1.754,0],[-1.278,-1.008],[-1.754,0],[-1.277,-1.008],[-4.149,0],[0,4.149],[1.754,0],[1.279,1.007],[1.755,0],[1.28,1.007],[4.149,0],[0,-4.149]],"v":[[9.288,-7.512],[4.644,-5.898],[0,-7.512],[-4.644,-5.898],[-9.287,-7.512],[-16.8,0],[-9.287,7.512],[-4.644,5.898],[0,7.512],[4.644,5.898],[9.288,7.512],[16.8,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.885999971278,0.898000021542,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[80.979,71.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.149,0],[1.279,-1.008],[1.754,0],[1.279,-1.008],[1.756,0],[0,-4.149],[-4.149,0],[-1.279,1.007],[-1.755,0],[-1.278,1.007],[-1.755,0],[0,4.149]],"o":[[-1.755,0],[-1.278,-1.008],[-1.755,0],[-1.279,-1.008],[-4.149,0],[0,4.149],[1.756,0],[1.279,1.007],[1.754,0],[1.279,1.007],[4.149,0],[0,-4.149]],"v":[[9.289,-7.512],[4.644,-5.898],[0.001,-7.512],[-4.644,-5.898],[-9.289,-7.512],[-16.801,0],[-9.289,7.512],[-4.644,5.898],[0.001,7.512],[4.644,5.898],[9.289,7.512],[16.801,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.885999971278,0.898000021542,0.929000016755,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.164,71.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":4,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.872,4.521],[28.872,-4.521],[-28.872,-4.521],[-28.872,4.521]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.725,0.736999990426,0.773000021542,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.072,77.814],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":4,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.603,0],[0,0],[0,5.604],[0,0]],"o":[[0,0],[0,5.604],[0,0],[5.602,0],[0,0],[0,0]],"v":[[-28.872,-9.594],[-28.872,-0.551],[-18.726,9.594],[18.727,9.594],[28.872,-0.551],[28.872,-9.594]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.072,82.887],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":4,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[90.539,8.938],[-90.539,8.938],[-95.294,4.183],[-95.294,-4.183],[-90.539,-8.938],[90.539,-8.938],[95.294,-4.183],[95.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[225.654,45.822],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":4,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.626,0],[0,0],[0,2.626],[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0]],"o":[[0,0],[-2.626,0],[0,0],[0,-2.626],[0,0],[2.626,0],[0,0],[0,2.626]],"v":[[133.539,8.938],[-133.539,8.938],[-138.294,4.183],[-138.294,-4.183],[-133.539,-8.938],[133.539,-8.938],[138.294,-4.183],[138.294,4.183]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.877999997606,0.889999988032,0.925,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[268.654,79.869],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":4,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.582],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.582]],"v":[[206.081,62.595],[-206.081,62.595],[-218,50.677],[-218,-50.677],[-206.081,-62.595],[206.081,-62.595],[218,-50.677],[218,50.677]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972999961703,0.976000019148,0.995999983245,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"list1_sh","parent":12,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[100]},{"t":30.0000012219251,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[218.5,67,0],"ix":2},"a":{"a":0,"k":[218.5,63,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":10,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.583,0],[0,0],[0,6.582],[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0]],"o":[[0,0],[-6.583,0],[0,0],[0,-6.583],[0,0],[6.583,0],[0,0],[0,6.582]],"v":[[206.081,62.595],[-206.081,62.595],[-218,50.677],[-218,-50.677],[-206.081,-62.595],[206.081,-62.595],[218,-50.677],[218,50.677]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.850980401039,0.874509811401,0.92549020052,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[218.25,62.846],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":122.000004969162,"st":0,"bm":0}]'
    ),
    ja = [],
    Ta = {
        v: Ga,
        meta: Da,
        fr: Ba,
        ip: Aa,
        op: Pa,
        w: Sa,
        h: Va,
        nm: qa,
        ddd: Oa,
        assets: Fa,
        layers: Ra,
        markers: ja,
    },
    wa = '/assets/question-found-Qgvn9qZf.png',
    Ka = () => {
        const r = {
            loop: !0,
            autoplay: !0,
            animationData: Ta,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
        };
        return w.jsxs('div', {
            className:
                'fade pointBackground font-Poppins bg-custom-light-gray bannerBackground h-screen w-screen dark:bg-slate-950',
            children: [
                w.jsxs('div', {
                    className:
                        'gradientBack flex h-screen flex-col items-center justify-center bg-cover',
                    children: [
                        w.jsx('div', {
                            className:
                                'flex-start fade-in relative -top-12 hidden h-[140px] md:flex',
                            children: w.jsx(Ea, {
                                height: 200,
                                width: 200,
                                options: r,
                            }),
                        }),
                        w.jsx('img', {
                            src: Bi,
                            width: '200px',
                            alt: 'Cube',
                            className:
                                'float md: absolute top-30 left-70 z-20 hidden md:hidden xl:flex',
                        }),
                        w.jsx('img', {
                            src: wa,
                            width: '220px',
                            alt: 'Cube',
                            className:
                                'float absolute right-70 bottom-52 z-20 hidden md:hidden xl:flex',
                        }),
                        w.jsxs('div', {
                            className:
                                'animate-zoom flex flex-col items-center justify-center',
                            children: [
                                w.jsx('h1', {
                                    className:
                                        'from-custom-green via-custom-dark-gray to-custom-bright-blue font-syne mb-2 bg-gradient-to-br from-sky-600 to-pink-400 bg-clip-text py-1 text-center text-[50px] font-semibold text-transparent md:text-[90px] xl:-mt-5 xl:text-[200px]',
                                    children: 'Erreur 404',
                                }),
                                w.jsx('h3', {
                                    className:
                                        '-mt-8 mb-6 font-bold text-slate-500 xl:text-xl',
                                    children: '- Page Non Trouvée -',
                                }),
                                w.jsx('p', {
                                    className:
                                        'mb-8 px-10 text-center font-normal text-gray-600 md:w-[40%] md:text-[12px] xl:text-[14px]',
                                    children:
                                        "Désolé, la page que vous recherchez semble indisponible. Peut-être avez-vous suivi un lien incorrect ou la page a été déplacée. Retournez à la page d'accueil pour continuer votre navigation.",
                                }),
                                w.jsx(gi, {
                                    to: '/',
                                    children: w.jsx(Di, {
                                        className:
                                            'bg-primary-400 rounded-3xl p-3 px-6 text-white',
                                        children: "Retour à l'accueil",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                w.jsx(Ai, {}),
            ],
        });
    };
export { Ka as default };
