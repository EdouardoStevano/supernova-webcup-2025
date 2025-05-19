import {
    c as Ca,
    d as bi,
    g as ce,
    r as q,
    k as S,
    j as X,
} from './index-BRBA0OY8.js';
import { c as Q } from './clsx-B-dksMZM.js';
import { P as ie } from './index-BjnEytZW.js';
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cO = [
        [
            'path',
            {
                d: 'M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2',
                key: '169zse',
            },
        ],
    ],
    sO = Ca('activity', cO);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lO = [
        ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
        ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
    ],
    fO = Ca('arrow-up-right', lO);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hO = [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
    ],
    pO = Ca('clock', hO);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dO = [
        [
            'path',
            { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' },
        ],
        ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
    ],
    vO = Ca('user', dO);
var go, Kh;
function Le() {
    if (Kh) return go;
    Kh = 1;
    var e = Array.isArray;
    return (go = e), go;
}
var bo, Gh;
function zb() {
    if (Gh) return bo;
    Gh = 1;
    var e = typeof bi == 'object' && bi && bi.Object === Object && bi;
    return (bo = e), bo;
}
var xo, Vh;
function pt() {
    if (Vh) return xo;
    Vh = 1;
    var e = zb(),
        t = typeof self == 'object' && self && self.Object === Object && self,
        r = e || t || Function('return this')();
    return (xo = r), xo;
}
var wo, Xh;
function si() {
    if (Xh) return wo;
    Xh = 1;
    var e = pt(),
        t = e.Symbol;
    return (wo = t), wo;
}
var Oo, Yh;
function yO() {
    if (Yh) return Oo;
    Yh = 1;
    var e = si(),
        t = Object.prototype,
        r = t.hasOwnProperty,
        n = t.toString,
        i = e ? e.toStringTag : void 0;
    function a(o) {
        var u = r.call(o, i),
            c = o[i];
        try {
            o[i] = void 0;
            var s = !0;
        } catch {}
        var f = n.call(o);
        return s && (u ? (o[i] = c) : delete o[i]), f;
    }
    return (Oo = a), Oo;
}
var _o, Zh;
function mO() {
    if (Zh) return _o;
    Zh = 1;
    var e = Object.prototype,
        t = e.toString;
    function r(n) {
        return t.call(n);
    }
    return (_o = r), _o;
}
var Ao, Jh;
function Tt() {
    if (Jh) return Ao;
    Jh = 1;
    var e = si(),
        t = yO(),
        r = mO(),
        n = '[object Null]',
        i = '[object Undefined]',
        a = e ? e.toStringTag : void 0;
    function o(u) {
        return u == null
            ? u === void 0
                ? i
                : n
            : a && a in Object(u)
              ? t(u)
              : r(u);
    }
    return (Ao = o), Ao;
}
var So, Qh;
function Et() {
    if (Qh) return So;
    Qh = 1;
    function e(t) {
        return t != null && typeof t == 'object';
    }
    return (So = e), So;
}
var Po, ep;
function en() {
    if (ep) return Po;
    ep = 1;
    var e = Tt(),
        t = Et(),
        r = '[object Symbol]';
    function n(i) {
        return typeof i == 'symbol' || (t(i) && e(i) == r);
    }
    return (Po = n), Po;
}
var To, tp;
function Bf() {
    if (tp) return To;
    tp = 1;
    var e = Le(),
        t = en(),
        r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        n = /^\w*$/;
    function i(a, o) {
        if (e(a)) return !1;
        var u = typeof a;
        return u == 'number' ||
            u == 'symbol' ||
            u == 'boolean' ||
            a == null ||
            t(a)
            ? !0
            : n.test(a) || !r.test(a) || (o != null && a in Object(o));
    }
    return (To = i), To;
}
var Eo, rp;
function Nt() {
    if (rp) return Eo;
    rp = 1;
    function e(t) {
        var r = typeof t;
        return t != null && (r == 'object' || r == 'function');
    }
    return (Eo = e), Eo;
}
var jo, np;
function Ff() {
    if (np) return jo;
    np = 1;
    var e = Tt(),
        t = Nt(),
        r = '[object AsyncFunction]',
        n = '[object Function]',
        i = '[object GeneratorFunction]',
        a = '[object Proxy]';
    function o(u) {
        if (!t(u)) return !1;
        var c = e(u);
        return c == n || c == i || c == r || c == a;
    }
    return (jo = o), jo;
}
var Mo, ip;
function gO() {
    if (ip) return Mo;
    ip = 1;
    var e = pt(),
        t = e['__core-js_shared__'];
    return (Mo = t), Mo;
}
var $o, ap;
function bO() {
    if (ap) return $o;
    ap = 1;
    var e = gO(),
        t = (function () {
            var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || '');
            return n ? 'Symbol(src)_1.' + n : '';
        })();
    function r(n) {
        return !!t && t in n;
    }
    return ($o = r), $o;
}
var Co, op;
function Wb() {
    if (op) return Co;
    op = 1;
    var e = Function.prototype,
        t = e.toString;
    function r(n) {
        if (n != null) {
            try {
                return t.call(n);
            } catch {}
            try {
                return n + '';
            } catch {}
        }
        return '';
    }
    return (Co = r), Co;
}
var Io, up;
function xO() {
    if (up) return Io;
    up = 1;
    var e = Ff(),
        t = bO(),
        r = Nt(),
        n = Wb(),
        i = /[\\^$.*+?()[\]{}|]/g,
        a = /^\[object .+?Constructor\]$/,
        o = Function.prototype,
        u = Object.prototype,
        c = o.toString,
        s = u.hasOwnProperty,
        f = RegExp(
            '^' +
                c
                    .call(s)
                    .replace(i, '\\$&')
                    .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        '$1.*?'
                    ) +
                '$'
        );
    function l(h) {
        if (!r(h) || t(h)) return !1;
        var p = e(h) ? f : a;
        return p.test(n(h));
    }
    return (Io = l), Io;
}
var ko, cp;
function wO() {
    if (cp) return ko;
    cp = 1;
    function e(t, r) {
        return t == null ? void 0 : t[r];
    }
    return (ko = e), ko;
}
var Ro, sp;
function cr() {
    if (sp) return Ro;
    sp = 1;
    var e = xO(),
        t = wO();
    function r(n, i) {
        var a = t(n, i);
        return e(a) ? a : void 0;
    }
    return (Ro = r), Ro;
}
var Do, lp;
function Ia() {
    if (lp) return Do;
    lp = 1;
    var e = cr(),
        t = e(Object, 'create');
    return (Do = t), Do;
}
var No, fp;
function OO() {
    if (fp) return No;
    fp = 1;
    var e = Ia();
    function t() {
        (this.__data__ = e ? e(null) : {}), (this.size = 0);
    }
    return (No = t), No;
}
var qo, hp;
function _O() {
    if (hp) return qo;
    hp = 1;
    function e(t) {
        var r = this.has(t) && delete this.__data__[t];
        return (this.size -= r ? 1 : 0), r;
    }
    return (qo = e), qo;
}
var Lo, pp;
function AO() {
    if (pp) return Lo;
    pp = 1;
    var e = Ia(),
        t = '__lodash_hash_undefined__',
        r = Object.prototype,
        n = r.hasOwnProperty;
    function i(a) {
        var o = this.__data__;
        if (e) {
            var u = o[a];
            return u === t ? void 0 : u;
        }
        return n.call(o, a) ? o[a] : void 0;
    }
    return (Lo = i), Lo;
}
var Bo, dp;
function SO() {
    if (dp) return Bo;
    dp = 1;
    var e = Ia(),
        t = Object.prototype,
        r = t.hasOwnProperty;
    function n(i) {
        var a = this.__data__;
        return e ? a[i] !== void 0 : r.call(a, i);
    }
    return (Bo = n), Bo;
}
var Fo, vp;
function PO() {
    if (vp) return Fo;
    vp = 1;
    var e = Ia(),
        t = '__lodash_hash_undefined__';
    function r(n, i) {
        var a = this.__data__;
        return (
            (this.size += this.has(n) ? 0 : 1),
            (a[n] = e && i === void 0 ? t : i),
            this
        );
    }
    return (Fo = r), Fo;
}
var zo, yp;
function TO() {
    if (yp) return zo;
    yp = 1;
    var e = OO(),
        t = _O(),
        r = AO(),
        n = SO(),
        i = PO();
    function a(o) {
        var u = -1,
            c = o == null ? 0 : o.length;
        for (this.clear(); ++u < c; ) {
            var s = o[u];
            this.set(s[0], s[1]);
        }
    }
    return (
        (a.prototype.clear = e),
        (a.prototype.delete = t),
        (a.prototype.get = r),
        (a.prototype.has = n),
        (a.prototype.set = i),
        (zo = a),
        zo
    );
}
var Wo, mp;
function EO() {
    if (mp) return Wo;
    mp = 1;
    function e() {
        (this.__data__ = []), (this.size = 0);
    }
    return (Wo = e), Wo;
}
var Uo, gp;
function zf() {
    if (gp) return Uo;
    gp = 1;
    function e(t, r) {
        return t === r || (t !== t && r !== r);
    }
    return (Uo = e), Uo;
}
var Ho, bp;
function ka() {
    if (bp) return Ho;
    bp = 1;
    var e = zf();
    function t(r, n) {
        for (var i = r.length; i--; ) if (e(r[i][0], n)) return i;
        return -1;
    }
    return (Ho = t), Ho;
}
var Ko, xp;
function jO() {
    if (xp) return Ko;
    xp = 1;
    var e = ka(),
        t = Array.prototype,
        r = t.splice;
    function n(i) {
        var a = this.__data__,
            o = e(a, i);
        if (o < 0) return !1;
        var u = a.length - 1;
        return o == u ? a.pop() : r.call(a, o, 1), --this.size, !0;
    }
    return (Ko = n), Ko;
}
var Go, wp;
function MO() {
    if (wp) return Go;
    wp = 1;
    var e = ka();
    function t(r) {
        var n = this.__data__,
            i = e(n, r);
        return i < 0 ? void 0 : n[i][1];
    }
    return (Go = t), Go;
}
var Vo, Op;
function $O() {
    if (Op) return Vo;
    Op = 1;
    var e = ka();
    function t(r) {
        return e(this.__data__, r) > -1;
    }
    return (Vo = t), Vo;
}
var Xo, _p;
function CO() {
    if (_p) return Xo;
    _p = 1;
    var e = ka();
    function t(r, n) {
        var i = this.__data__,
            a = e(i, r);
        return a < 0 ? (++this.size, i.push([r, n])) : (i[a][1] = n), this;
    }
    return (Xo = t), Xo;
}
var Yo, Ap;
function Ra() {
    if (Ap) return Yo;
    Ap = 1;
    var e = EO(),
        t = jO(),
        r = MO(),
        n = $O(),
        i = CO();
    function a(o) {
        var u = -1,
            c = o == null ? 0 : o.length;
        for (this.clear(); ++u < c; ) {
            var s = o[u];
            this.set(s[0], s[1]);
        }
    }
    return (
        (a.prototype.clear = e),
        (a.prototype.delete = t),
        (a.prototype.get = r),
        (a.prototype.has = n),
        (a.prototype.set = i),
        (Yo = a),
        Yo
    );
}
var Zo, Sp;
function Wf() {
    if (Sp) return Zo;
    Sp = 1;
    var e = cr(),
        t = pt(),
        r = e(t, 'Map');
    return (Zo = r), Zo;
}
var Jo, Pp;
function IO() {
    if (Pp) return Jo;
    Pp = 1;
    var e = TO(),
        t = Ra(),
        r = Wf();
    function n() {
        (this.size = 0),
            (this.__data__ = {
                hash: new e(),
                map: new (r || t)(),
                string: new e(),
            });
    }
    return (Jo = n), Jo;
}
var Qo, Tp;
function kO() {
    if (Tp) return Qo;
    Tp = 1;
    function e(t) {
        var r = typeof t;
        return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
            ? t !== '__proto__'
            : t === null;
    }
    return (Qo = e), Qo;
}
var eu, Ep;
function Da() {
    if (Ep) return eu;
    Ep = 1;
    var e = kO();
    function t(r, n) {
        var i = r.__data__;
        return e(n) ? i[typeof n == 'string' ? 'string' : 'hash'] : i.map;
    }
    return (eu = t), eu;
}
var tu, jp;
function RO() {
    if (jp) return tu;
    jp = 1;
    var e = Da();
    function t(r) {
        var n = e(this, r).delete(r);
        return (this.size -= n ? 1 : 0), n;
    }
    return (tu = t), tu;
}
var ru, Mp;
function DO() {
    if (Mp) return ru;
    Mp = 1;
    var e = Da();
    function t(r) {
        return e(this, r).get(r);
    }
    return (ru = t), ru;
}
var nu, $p;
function NO() {
    if ($p) return nu;
    $p = 1;
    var e = Da();
    function t(r) {
        return e(this, r).has(r);
    }
    return (nu = t), nu;
}
var iu, Cp;
function qO() {
    if (Cp) return iu;
    Cp = 1;
    var e = Da();
    function t(r, n) {
        var i = e(this, r),
            a = i.size;
        return i.set(r, n), (this.size += i.size == a ? 0 : 1), this;
    }
    return (iu = t), iu;
}
var au, Ip;
function Uf() {
    if (Ip) return au;
    Ip = 1;
    var e = IO(),
        t = RO(),
        r = DO(),
        n = NO(),
        i = qO();
    function a(o) {
        var u = -1,
            c = o == null ? 0 : o.length;
        for (this.clear(); ++u < c; ) {
            var s = o[u];
            this.set(s[0], s[1]);
        }
    }
    return (
        (a.prototype.clear = e),
        (a.prototype.delete = t),
        (a.prototype.get = r),
        (a.prototype.has = n),
        (a.prototype.set = i),
        (au = a),
        au
    );
}
var ou, kp;
function Ub() {
    if (kp) return ou;
    kp = 1;
    var e = Uf(),
        t = 'Expected a function';
    function r(n, i) {
        if (typeof n != 'function' || (i != null && typeof i != 'function'))
            throw new TypeError(t);
        var a = function () {
            var o = arguments,
                u = i ? i.apply(this, o) : o[0],
                c = a.cache;
            if (c.has(u)) return c.get(u);
            var s = n.apply(this, o);
            return (a.cache = c.set(u, s) || c), s;
        };
        return (a.cache = new (r.Cache || e)()), a;
    }
    return (r.Cache = e), (ou = r), ou;
}
var uu, Rp;
function LO() {
    if (Rp) return uu;
    Rp = 1;
    var e = Ub(),
        t = 500;
    function r(n) {
        var i = e(n, function (o) {
                return a.size === t && a.clear(), o;
            }),
            a = i.cache;
        return i;
    }
    return (uu = r), uu;
}
var cu, Dp;
function BO() {
    if (Dp) return cu;
    Dp = 1;
    var e = LO(),
        t =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        r = /\\(\\)?/g,
        n = e(function (i) {
            var a = [];
            return (
                i.charCodeAt(0) === 46 && a.push(''),
                i.replace(t, function (o, u, c, s) {
                    a.push(c ? s.replace(r, '$1') : u || o);
                }),
                a
            );
        });
    return (cu = n), cu;
}
var su, Np;
function Hf() {
    if (Np) return su;
    Np = 1;
    function e(t, r) {
        for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
            a[n] = r(t[n], n, t);
        return a;
    }
    return (su = e), su;
}
var lu, qp;
function FO() {
    if (qp) return lu;
    qp = 1;
    var e = si(),
        t = Hf(),
        r = Le(),
        n = en(),
        i = e ? e.prototype : void 0,
        a = i ? i.toString : void 0;
    function o(u) {
        if (typeof u == 'string') return u;
        if (r(u)) return t(u, o) + '';
        if (n(u)) return a ? a.call(u) : '';
        var c = u + '';
        return c == '0' && 1 / u == -1 / 0 ? '-0' : c;
    }
    return (lu = o), lu;
}
var fu, Lp;
function Hb() {
    if (Lp) return fu;
    Lp = 1;
    var e = FO();
    function t(r) {
        return r == null ? '' : e(r);
    }
    return (fu = t), fu;
}
var hu, Bp;
function Kb() {
    if (Bp) return hu;
    Bp = 1;
    var e = Le(),
        t = Bf(),
        r = BO(),
        n = Hb();
    function i(a, o) {
        return e(a) ? a : t(a, o) ? [a] : r(n(a));
    }
    return (hu = i), hu;
}
var pu, Fp;
function Na() {
    if (Fp) return pu;
    Fp = 1;
    var e = en();
    function t(r) {
        if (typeof r == 'string' || e(r)) return r;
        var n = r + '';
        return n == '0' && 1 / r == -1 / 0 ? '-0' : n;
    }
    return (pu = t), pu;
}
var du, zp;
function Kf() {
    if (zp) return du;
    zp = 1;
    var e = Kb(),
        t = Na();
    function r(n, i) {
        i = e(i, n);
        for (var a = 0, o = i.length; n != null && a < o; ) n = n[t(i[a++])];
        return a && a == o ? n : void 0;
    }
    return (du = r), du;
}
var vu, Wp;
function Gb() {
    if (Wp) return vu;
    Wp = 1;
    var e = Kf();
    function t(r, n, i) {
        var a = r == null ? void 0 : e(r, n);
        return a === void 0 ? i : a;
    }
    return (vu = t), vu;
}
var zO = Gb();
const Ke = ce(zO);
var yu, Up;
function WO() {
    if (Up) return yu;
    Up = 1;
    function e(t) {
        return t == null;
    }
    return (yu = e), yu;
}
var UO = WO();
const Z = ce(UO);
var mu, Hp;
function HO() {
    if (Hp) return mu;
    Hp = 1;
    var e = Tt(),
        t = Le(),
        r = Et(),
        n = '[object String]';
    function i(a) {
        return typeof a == 'string' || (!t(a) && r(a) && e(a) == n);
    }
    return (mu = i), mu;
}
var KO = HO();
const rr = ce(KO);
var GO = Ff();
const Y = ce(GO);
var VO = Nt();
const tn = ce(VO);
var gu = { exports: {} },
    ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kp;
function XO() {
    if (Kp) return ae;
    Kp = 1;
    var e = Symbol.for('react.element'),
        t = Symbol.for('react.portal'),
        r = Symbol.for('react.fragment'),
        n = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler'),
        a = Symbol.for('react.provider'),
        o = Symbol.for('react.context'),
        u = Symbol.for('react.server_context'),
        c = Symbol.for('react.forward_ref'),
        s = Symbol.for('react.suspense'),
        f = Symbol.for('react.suspense_list'),
        l = Symbol.for('react.memo'),
        h = Symbol.for('react.lazy'),
        p = Symbol.for('react.offscreen'),
        y;
    y = Symbol.for('react.module.reference');
    function v(d) {
        if (typeof d == 'object' && d !== null) {
            var g = d.$$typeof;
            switch (g) {
                case e:
                    switch (((d = d.type), d)) {
                        case r:
                        case i:
                        case n:
                        case s:
                        case f:
                            return d;
                        default:
                            switch (((d = d && d.$$typeof), d)) {
                                case u:
                                case o:
                                case c:
                                case h:
                                case l:
                                case a:
                                    return d;
                                default:
                                    return g;
                            }
                    }
                case t:
                    return g;
            }
        }
    }
    return (
        (ae.ContextConsumer = o),
        (ae.ContextProvider = a),
        (ae.Element = e),
        (ae.ForwardRef = c),
        (ae.Fragment = r),
        (ae.Lazy = h),
        (ae.Memo = l),
        (ae.Portal = t),
        (ae.Profiler = i),
        (ae.StrictMode = n),
        (ae.Suspense = s),
        (ae.SuspenseList = f),
        (ae.isAsyncMode = function () {
            return !1;
        }),
        (ae.isConcurrentMode = function () {
            return !1;
        }),
        (ae.isContextConsumer = function (d) {
            return v(d) === o;
        }),
        (ae.isContextProvider = function (d) {
            return v(d) === a;
        }),
        (ae.isElement = function (d) {
            return typeof d == 'object' && d !== null && d.$$typeof === e;
        }),
        (ae.isForwardRef = function (d) {
            return v(d) === c;
        }),
        (ae.isFragment = function (d) {
            return v(d) === r;
        }),
        (ae.isLazy = function (d) {
            return v(d) === h;
        }),
        (ae.isMemo = function (d) {
            return v(d) === l;
        }),
        (ae.isPortal = function (d) {
            return v(d) === t;
        }),
        (ae.isProfiler = function (d) {
            return v(d) === i;
        }),
        (ae.isStrictMode = function (d) {
            return v(d) === n;
        }),
        (ae.isSuspense = function (d) {
            return v(d) === s;
        }),
        (ae.isSuspenseList = function (d) {
            return v(d) === f;
        }),
        (ae.isValidElementType = function (d) {
            return (
                typeof d == 'string' ||
                typeof d == 'function' ||
                d === r ||
                d === i ||
                d === n ||
                d === s ||
                d === f ||
                d === p ||
                (typeof d == 'object' &&
                    d !== null &&
                    (d.$$typeof === h ||
                        d.$$typeof === l ||
                        d.$$typeof === a ||
                        d.$$typeof === o ||
                        d.$$typeof === c ||
                        d.$$typeof === y ||
                        d.getModuleId !== void 0))
            );
        }),
        (ae.typeOf = v),
        ae
    );
}
var Gp;
function YO() {
    return Gp || ((Gp = 1), (gu.exports = XO())), gu.exports;
}
var ZO = YO(),
    bu,
    Vp;
function Vb() {
    if (Vp) return bu;
    Vp = 1;
    var e = Tt(),
        t = Et(),
        r = '[object Number]';
    function n(i) {
        return typeof i == 'number' || (t(i) && e(i) == r);
    }
    return (bu = n), bu;
}
var xu, Xp;
function JO() {
    if (Xp) return xu;
    Xp = 1;
    var e = Vb();
    function t(r) {
        return e(r) && r != +r;
    }
    return (xu = t), xu;
}
var QO = JO();
const li = ce(QO);
var e_ = Vb();
const t_ = ce(e_);
var Ie = function (t) {
        return t === 0 ? 0 : t > 0 ? 1 : -1;
    },
    Yt = function (t) {
        return rr(t) && t.indexOf('%') === t.length - 1;
    },
    N = function (t) {
        return t_(t) && !li(t);
    },
    Ae = function (t) {
        return N(t) || rr(t);
    },
    r_ = 0,
    rn = function (t) {
        var r = ++r_;
        return ''.concat(t || '').concat(r);
    },
    ke = function (t, r) {
        var n =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : 0,
            i =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : !1;
        if (!N(t) && !rr(t)) return n;
        var a;
        if (Yt(t)) {
            var o = t.indexOf('%');
            a = (r * parseFloat(t.slice(0, o))) / 100;
        } else a = +t;
        return li(a) && (a = n), i && a > r && (a = r), a;
    },
    It = function (t) {
        if (!t) return null;
        var r = Object.keys(t);
        return r && r.length ? t[r[0]] : null;
    },
    n_ = function (t) {
        if (!Array.isArray(t)) return !1;
        for (var r = t.length, n = {}, i = 0; i < r; i++)
            if (!n[t[i]]) n[t[i]] = !0;
            else return !0;
        return !1;
    },
    Ue = function (t, r) {
        return N(t) && N(r)
            ? function (n) {
                  return t + n * (r - t);
              }
            : function () {
                  return r;
              };
    };
function ki(e, t, r) {
    return !e || !e.length
        ? null
        : e.find(function (n) {
              return n && (typeof t == 'function' ? t(n) : Ke(n, t)) === r;
          });
}
var i_ = function (t, r) {
    return N(t) && N(r)
        ? t - r
        : rr(t) && rr(r)
          ? t.localeCompare(r)
          : t instanceof Date && r instanceof Date
            ? t.getTime() - r.getTime()
            : String(t).localeCompare(String(r));
};
function _r(e, t) {
    for (var r in e)
        if (
            {}.hasOwnProperty.call(e, r) &&
            (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
        )
            return !1;
    for (var n in t)
        if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
            return !1;
    return !0;
}
function ml(e) {
    '@babel/helpers - typeof';
    return (
        (ml =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ml(e)
    );
}
var a_ = ['viewBox', 'children'],
    o_ = [
        'aria-activedescendant',
        'aria-atomic',
        'aria-autocomplete',
        'aria-busy',
        'aria-checked',
        'aria-colcount',
        'aria-colindex',
        'aria-colspan',
        'aria-controls',
        'aria-current',
        'aria-describedby',
        'aria-details',
        'aria-disabled',
        'aria-errormessage',
        'aria-expanded',
        'aria-flowto',
        'aria-haspopup',
        'aria-hidden',
        'aria-invalid',
        'aria-keyshortcuts',
        'aria-label',
        'aria-labelledby',
        'aria-level',
        'aria-live',
        'aria-modal',
        'aria-multiline',
        'aria-multiselectable',
        'aria-orientation',
        'aria-owns',
        'aria-placeholder',
        'aria-posinset',
        'aria-pressed',
        'aria-readonly',
        'aria-relevant',
        'aria-required',
        'aria-roledescription',
        'aria-rowcount',
        'aria-rowindex',
        'aria-rowspan',
        'aria-selected',
        'aria-setsize',
        'aria-sort',
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuenow',
        'aria-valuetext',
        'className',
        'color',
        'height',
        'id',
        'lang',
        'max',
        'media',
        'method',
        'min',
        'name',
        'style',
        'target',
        'width',
        'role',
        'tabIndex',
        'accentHeight',
        'accumulate',
        'additive',
        'alignmentBaseline',
        'allowReorder',
        'alphabetic',
        'amplitude',
        'arabicForm',
        'ascent',
        'attributeName',
        'attributeType',
        'autoReverse',
        'azimuth',
        'baseFrequency',
        'baselineShift',
        'baseProfile',
        'bbox',
        'begin',
        'bias',
        'by',
        'calcMode',
        'capHeight',
        'clip',
        'clipPath',
        'clipPathUnits',
        'clipRule',
        'colorInterpolation',
        'colorInterpolationFilters',
        'colorProfile',
        'colorRendering',
        'contentScriptType',
        'contentStyleType',
        'cursor',
        'cx',
        'cy',
        'd',
        'decelerate',
        'descent',
        'diffuseConstant',
        'direction',
        'display',
        'divisor',
        'dominantBaseline',
        'dur',
        'dx',
        'dy',
        'edgeMode',
        'elevation',
        'enableBackground',
        'end',
        'exponent',
        'externalResourcesRequired',
        'fill',
        'fillOpacity',
        'fillRule',
        'filter',
        'filterRes',
        'filterUnits',
        'floodColor',
        'floodOpacity',
        'focusable',
        'fontFamily',
        'fontSize',
        'fontSizeAdjust',
        'fontStretch',
        'fontStyle',
        'fontVariant',
        'fontWeight',
        'format',
        'from',
        'fx',
        'fy',
        'g1',
        'g2',
        'glyphName',
        'glyphOrientationHorizontal',
        'glyphOrientationVertical',
        'glyphRef',
        'gradientTransform',
        'gradientUnits',
        'hanging',
        'horizAdvX',
        'horizOriginX',
        'href',
        'ideographic',
        'imageRendering',
        'in2',
        'in',
        'intercept',
        'k1',
        'k2',
        'k3',
        'k4',
        'k',
        'kernelMatrix',
        'kernelUnitLength',
        'kerning',
        'keyPoints',
        'keySplines',
        'keyTimes',
        'lengthAdjust',
        'letterSpacing',
        'lightingColor',
        'limitingConeAngle',
        'local',
        'markerEnd',
        'markerHeight',
        'markerMid',
        'markerStart',
        'markerUnits',
        'markerWidth',
        'mask',
        'maskContentUnits',
        'maskUnits',
        'mathematical',
        'mode',
        'numOctaves',
        'offset',
        'opacity',
        'operator',
        'order',
        'orient',
        'orientation',
        'origin',
        'overflow',
        'overlinePosition',
        'overlineThickness',
        'paintOrder',
        'panose1',
        'pathLength',
        'patternContentUnits',
        'patternTransform',
        'patternUnits',
        'pointerEvents',
        'pointsAtX',
        'pointsAtY',
        'pointsAtZ',
        'preserveAlpha',
        'preserveAspectRatio',
        'primitiveUnits',
        'r',
        'radius',
        'refX',
        'refY',
        'renderingIntent',
        'repeatCount',
        'repeatDur',
        'requiredExtensions',
        'requiredFeatures',
        'restart',
        'result',
        'rotate',
        'rx',
        'ry',
        'seed',
        'shapeRendering',
        'slope',
        'spacing',
        'specularConstant',
        'specularExponent',
        'speed',
        'spreadMethod',
        'startOffset',
        'stdDeviation',
        'stemh',
        'stemv',
        'stitchTiles',
        'stopColor',
        'stopOpacity',
        'strikethroughPosition',
        'strikethroughThickness',
        'string',
        'stroke',
        'strokeDasharray',
        'strokeDashoffset',
        'strokeLinecap',
        'strokeLinejoin',
        'strokeMiterlimit',
        'strokeOpacity',
        'strokeWidth',
        'surfaceScale',
        'systemLanguage',
        'tableValues',
        'targetX',
        'targetY',
        'textAnchor',
        'textDecoration',
        'textLength',
        'textRendering',
        'to',
        'transform',
        'u1',
        'u2',
        'underlinePosition',
        'underlineThickness',
        'unicode',
        'unicodeBidi',
        'unicodeRange',
        'unitsPerEm',
        'vAlphabetic',
        'values',
        'vectorEffect',
        'version',
        'vertAdvY',
        'vertOriginX',
        'vertOriginY',
        'vHanging',
        'vIdeographic',
        'viewTarget',
        'visibility',
        'vMathematical',
        'widths',
        'wordSpacing',
        'writingMode',
        'x1',
        'x2',
        'x',
        'xChannelSelector',
        'xHeight',
        'xlinkActuate',
        'xlinkArcrole',
        'xlinkHref',
        'xlinkRole',
        'xlinkShow',
        'xlinkTitle',
        'xlinkType',
        'xmlBase',
        'xmlLang',
        'xmlns',
        'xmlnsXlink',
        'xmlSpace',
        'y1',
        'y2',
        'y',
        'yChannelSelector',
        'z',
        'zoomAndPan',
        'ref',
        'key',
        'angle',
    ],
    Yp = ['points', 'pathLength'],
    wu = { svg: a_, polygon: Yp, polyline: Yp },
    Gf = [
        'dangerouslySetInnerHTML',
        'onCopy',
        'onCopyCapture',
        'onCut',
        'onCutCapture',
        'onPaste',
        'onPasteCapture',
        'onCompositionEnd',
        'onCompositionEndCapture',
        'onCompositionStart',
        'onCompositionStartCapture',
        'onCompositionUpdate',
        'onCompositionUpdateCapture',
        'onFocus',
        'onFocusCapture',
        'onBlur',
        'onBlurCapture',
        'onChange',
        'onChangeCapture',
        'onBeforeInput',
        'onBeforeInputCapture',
        'onInput',
        'onInputCapture',
        'onReset',
        'onResetCapture',
        'onSubmit',
        'onSubmitCapture',
        'onInvalid',
        'onInvalidCapture',
        'onLoad',
        'onLoadCapture',
        'onError',
        'onErrorCapture',
        'onKeyDown',
        'onKeyDownCapture',
        'onKeyPress',
        'onKeyPressCapture',
        'onKeyUp',
        'onKeyUpCapture',
        'onAbort',
        'onAbortCapture',
        'onCanPlay',
        'onCanPlayCapture',
        'onCanPlayThrough',
        'onCanPlayThroughCapture',
        'onDurationChange',
        'onDurationChangeCapture',
        'onEmptied',
        'onEmptiedCapture',
        'onEncrypted',
        'onEncryptedCapture',
        'onEnded',
        'onEndedCapture',
        'onLoadedData',
        'onLoadedDataCapture',
        'onLoadedMetadata',
        'onLoadedMetadataCapture',
        'onLoadStart',
        'onLoadStartCapture',
        'onPause',
        'onPauseCapture',
        'onPlay',
        'onPlayCapture',
        'onPlaying',
        'onPlayingCapture',
        'onProgress',
        'onProgressCapture',
        'onRateChange',
        'onRateChangeCapture',
        'onSeeked',
        'onSeekedCapture',
        'onSeeking',
        'onSeekingCapture',
        'onStalled',
        'onStalledCapture',
        'onSuspend',
        'onSuspendCapture',
        'onTimeUpdate',
        'onTimeUpdateCapture',
        'onVolumeChange',
        'onVolumeChangeCapture',
        'onWaiting',
        'onWaitingCapture',
        'onAuxClick',
        'onAuxClickCapture',
        'onClick',
        'onClickCapture',
        'onContextMenu',
        'onContextMenuCapture',
        'onDoubleClick',
        'onDoubleClickCapture',
        'onDrag',
        'onDragCapture',
        'onDragEnd',
        'onDragEndCapture',
        'onDragEnter',
        'onDragEnterCapture',
        'onDragExit',
        'onDragExitCapture',
        'onDragLeave',
        'onDragLeaveCapture',
        'onDragOver',
        'onDragOverCapture',
        'onDragStart',
        'onDragStartCapture',
        'onDrop',
        'onDropCapture',
        'onMouseDown',
        'onMouseDownCapture',
        'onMouseEnter',
        'onMouseLeave',
        'onMouseMove',
        'onMouseMoveCapture',
        'onMouseOut',
        'onMouseOutCapture',
        'onMouseOver',
        'onMouseOverCapture',
        'onMouseUp',
        'onMouseUpCapture',
        'onSelect',
        'onSelectCapture',
        'onTouchCancel',
        'onTouchCancelCapture',
        'onTouchEnd',
        'onTouchEndCapture',
        'onTouchMove',
        'onTouchMoveCapture',
        'onTouchStart',
        'onTouchStartCapture',
        'onPointerDown',
        'onPointerDownCapture',
        'onPointerMove',
        'onPointerMoveCapture',
        'onPointerUp',
        'onPointerUpCapture',
        'onPointerCancel',
        'onPointerCancelCapture',
        'onPointerEnter',
        'onPointerEnterCapture',
        'onPointerLeave',
        'onPointerLeaveCapture',
        'onPointerOver',
        'onPointerOverCapture',
        'onPointerOut',
        'onPointerOutCapture',
        'onGotPointerCapture',
        'onGotPointerCaptureCapture',
        'onLostPointerCapture',
        'onLostPointerCaptureCapture',
        'onScroll',
        'onScrollCapture',
        'onWheel',
        'onWheelCapture',
        'onAnimationStart',
        'onAnimationStartCapture',
        'onAnimationEnd',
        'onAnimationEndCapture',
        'onAnimationIteration',
        'onAnimationIterationCapture',
        'onTransitionEnd',
        'onTransitionEndCapture',
    ],
    Ri = function (t, r) {
        if (!t || typeof t == 'function' || typeof t == 'boolean') return null;
        var n = t;
        if ((q.isValidElement(t) && (n = t.props), !tn(n))) return null;
        var i = {};
        return (
            Object.keys(n).forEach(function (a) {
                Gf.includes(a) &&
                    (i[a] =
                        r ||
                        function (o) {
                            return n[a](n, o);
                        });
            }),
            i
        );
    },
    u_ = function (t, r, n) {
        return function (i) {
            return t(r, n, i), null;
        };
    },
    nr = function (t, r, n) {
        if (!tn(t) || ml(t) !== 'object') return null;
        var i = null;
        return (
            Object.keys(t).forEach(function (a) {
                var o = t[a];
                Gf.includes(a) &&
                    typeof o == 'function' &&
                    (i || (i = {}), (i[a] = u_(o, r, n)));
            }),
            i
        );
    },
    c_ = ['children'],
    s_ = ['children'];
function Zp(e, t) {
    if (e == null) return {};
    var r = l_(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function l_(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function gl(e) {
    '@babel/helpers - typeof';
    return (
        (gl =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        gl(e)
    );
}
var Jp = {
        click: 'onClick',
        mousedown: 'onMouseDown',
        mouseup: 'onMouseUp',
        mouseover: 'onMouseOver',
        mousemove: 'onMouseMove',
        mouseout: 'onMouseOut',
        mouseenter: 'onMouseEnter',
        mouseleave: 'onMouseLeave',
        touchcancel: 'onTouchCancel',
        touchend: 'onTouchEnd',
        touchmove: 'onTouchMove',
        touchstart: 'onTouchStart',
        contextmenu: 'onContextMenu',
        dblclick: 'onDoubleClick',
    },
    xt = function (t) {
        return typeof t == 'string'
            ? t
            : t
              ? t.displayName || t.name || 'Component'
              : '';
    },
    Qp = null,
    Ou = null,
    Vf = function e(t) {
        if (t === Qp && Array.isArray(Ou)) return Ou;
        var r = [];
        return (
            q.Children.forEach(t, function (n) {
                Z(n) ||
                    (ZO.isFragment(n)
                        ? (r = r.concat(e(n.props.children)))
                        : r.push(n));
            }),
            (Ou = r),
            (Qp = t),
            r
        );
    };
function Ge(e, t) {
    var r = [],
        n = [];
    return (
        Array.isArray(t)
            ? (n = t.map(function (i) {
                  return xt(i);
              }))
            : (n = [xt(t)]),
        Vf(e).forEach(function (i) {
            var a = Ke(i, 'type.displayName') || Ke(i, 'type.name');
            n.indexOf(a) !== -1 && r.push(i);
        }),
        r
    );
}
function We(e, t) {
    var r = Ge(e, t);
    return r && r[0];
}
var ed = function (t) {
        if (!t || !t.props) return !1;
        var r = t.props,
            n = r.width,
            i = r.height;
        return !(!N(n) || n <= 0 || !N(i) || i <= 0);
    },
    f_ = [
        'a',
        'altGlyph',
        'altGlyphDef',
        'altGlyphItem',
        'animate',
        'animateColor',
        'animateMotion',
        'animateTransform',
        'circle',
        'clipPath',
        'color-profile',
        'cursor',
        'defs',
        'desc',
        'ellipse',
        'feBlend',
        'feColormatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'font',
        'font-face',
        'font-face-format',
        'font-face-name',
        'font-face-url',
        'foreignObject',
        'g',
        'glyph',
        'glyphRef',
        'hkern',
        'image',
        'line',
        'lineGradient',
        'marker',
        'mask',
        'metadata',
        'missing-glyph',
        'mpath',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'script',
        'set',
        'stop',
        'style',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'title',
        'tref',
        'tspan',
        'use',
        'view',
        'vkern',
    ],
    h_ = function (t) {
        return t && t.type && rr(t.type) && f_.indexOf(t.type) >= 0;
    },
    p_ = function (t) {
        return t && gl(t) === 'object' && 'clipDot' in t;
    },
    d_ = function (t, r, n, i) {
        var a,
            o =
                (a = wu == null ? void 0 : wu[i]) !== null && a !== void 0
                    ? a
                    : [];
        return (
            r.startsWith('data-') ||
            (!Y(t) && ((i && o.includes(r)) || o_.includes(r))) ||
            (n && Gf.includes(r))
        );
    },
    H = function (t, r, n) {
        if (!t || typeof t == 'function' || typeof t == 'boolean') return null;
        var i = t;
        if ((q.isValidElement(t) && (i = t.props), !tn(i))) return null;
        var a = {};
        return (
            Object.keys(i).forEach(function (o) {
                var u;
                d_((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) &&
                    (a[o] = i[o]);
            }),
            a
        );
    },
    bl = function e(t, r) {
        if (t === r) return !0;
        var n = q.Children.count(t);
        if (n !== q.Children.count(r)) return !1;
        if (n === 0) return !0;
        if (n === 1)
            return td(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
        for (var i = 0; i < n; i++) {
            var a = t[i],
                o = r[i];
            if (Array.isArray(a) || Array.isArray(o)) {
                if (!e(a, o)) return !1;
            } else if (!td(a, o)) return !1;
        }
        return !0;
    },
    td = function (t, r) {
        if (Z(t) && Z(r)) return !0;
        if (!Z(t) && !Z(r)) {
            var n = t.props || {},
                i = n.children,
                a = Zp(n, c_),
                o = r.props || {},
                u = o.children,
                c = Zp(o, s_);
            return i && u ? _r(a, c) && bl(i, u) : !i && !u ? _r(a, c) : !1;
        }
        return !1;
    },
    rd = function (t, r) {
        var n = [],
            i = {};
        return (
            Vf(t).forEach(function (a, o) {
                if (h_(a)) n.push(a);
                else if (a) {
                    var u = xt(a.type),
                        c = r[u] || {},
                        s = c.handler,
                        f = c.once;
                    if (s && (!f || !i[u])) {
                        var l = s(a, u, o);
                        n.push(l), (i[u] = !0);
                    }
                }
            }),
            n
        );
    },
    v_ = function (t) {
        var r = t && t.type;
        return r && Jp[r] ? Jp[r] : null;
    },
    y_ = function (t, r) {
        return Vf(r).indexOf(t);
    },
    m_ = [
        'children',
        'width',
        'height',
        'viewBox',
        'className',
        'style',
        'title',
        'desc',
    ];
function xl() {
    return (
        (xl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        xl.apply(this, arguments)
    );
}
function g_(e, t) {
    if (e == null) return {};
    var r = b_(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function b_(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function wl(e) {
    var t = e.children,
        r = e.width,
        n = e.height,
        i = e.viewBox,
        a = e.className,
        o = e.style,
        u = e.title,
        c = e.desc,
        s = g_(e, m_),
        f = i || { width: r, height: n, x: 0, y: 0 },
        l = Q('recharts-surface', a);
    return S.createElement(
        'svg',
        xl({}, H(s, !0, 'svg'), {
            className: l,
            width: r,
            height: n,
            style: o,
            viewBox: ''
                .concat(f.x, ' ')
                .concat(f.y, ' ')
                .concat(f.width, ' ')
                .concat(f.height),
        }),
        S.createElement('title', null, u),
        S.createElement('desc', null, c),
        t
    );
}
var x_ = ['children', 'className'];
function Ol() {
    return (
        (Ol = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Ol.apply(this, arguments)
    );
}
function w_(e, t) {
    if (e == null) return {};
    var r = O_(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function O_(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
var re = S.forwardRef(function (e, t) {
        var r = e.children,
            n = e.className,
            i = w_(e, x_),
            a = Q('recharts-layer', n);
        return S.createElement(
            'g',
            Ol({ className: a }, H(i, !0), { ref: t }),
            r
        );
    }),
    ot = function (t, r) {
        for (
            var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
            a < n;
            a++
        )
            i[a - 2] = arguments[a];
    },
    _u,
    nd;
function __() {
    if (nd) return _u;
    nd = 1;
    function e(t, r, n) {
        var i = -1,
            a = t.length;
        r < 0 && (r = -r > a ? 0 : a + r),
            (n = n > a ? a : n),
            n < 0 && (n += a),
            (a = r > n ? 0 : (n - r) >>> 0),
            (r >>>= 0);
        for (var o = Array(a); ++i < a; ) o[i] = t[i + r];
        return o;
    }
    return (_u = e), _u;
}
var Au, id;
function A_() {
    if (id) return Au;
    id = 1;
    var e = __();
    function t(r, n, i) {
        var a = r.length;
        return (i = i === void 0 ? a : i), !n && i >= a ? r : e(r, n, i);
    }
    return (Au = t), Au;
}
var Su, ad;
function Xb() {
    if (ad) return Su;
    ad = 1;
    var e = '\\ud800-\\udfff',
        t = '\\u0300-\\u036f',
        r = '\\ufe20-\\ufe2f',
        n = '\\u20d0-\\u20ff',
        i = t + r + n,
        a = '\\ufe0e\\ufe0f',
        o = '\\u200d',
        u = RegExp('[' + o + e + i + a + ']');
    function c(s) {
        return u.test(s);
    }
    return (Su = c), Su;
}
var Pu, od;
function S_() {
    if (od) return Pu;
    od = 1;
    function e(t) {
        return t.split('');
    }
    return (Pu = e), Pu;
}
var Tu, ud;
function P_() {
    if (ud) return Tu;
    ud = 1;
    var e = '\\ud800-\\udfff',
        t = '\\u0300-\\u036f',
        r = '\\ufe20-\\ufe2f',
        n = '\\u20d0-\\u20ff',
        i = t + r + n,
        a = '\\ufe0e\\ufe0f',
        o = '[' + e + ']',
        u = '[' + i + ']',
        c = '\\ud83c[\\udffb-\\udfff]',
        s = '(?:' + u + '|' + c + ')',
        f = '[^' + e + ']',
        l = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        h = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        p = '\\u200d',
        y = s + '?',
        v = '[' + a + ']?',
        d = '(?:' + p + '(?:' + [f, l, h].join('|') + ')' + v + y + ')*',
        g = v + y + d,
        x = '(?:' + [f + u + '?', u, l, h, o].join('|') + ')',
        w = RegExp(c + '(?=' + c + ')|' + x + g, 'g');
    function O(m) {
        return m.match(w) || [];
    }
    return (Tu = O), Tu;
}
var Eu, cd;
function T_() {
    if (cd) return Eu;
    cd = 1;
    var e = S_(),
        t = Xb(),
        r = P_();
    function n(i) {
        return t(i) ? r(i) : e(i);
    }
    return (Eu = n), Eu;
}
var ju, sd;
function E_() {
    if (sd) return ju;
    sd = 1;
    var e = A_(),
        t = Xb(),
        r = T_(),
        n = Hb();
    function i(a) {
        return function (o) {
            o = n(o);
            var u = t(o) ? r(o) : void 0,
                c = u ? u[0] : o.charAt(0),
                s = u ? e(u, 1).join('') : o.slice(1);
            return c[a]() + s;
        };
    }
    return (ju = i), ju;
}
var Mu, ld;
function j_() {
    if (ld) return Mu;
    ld = 1;
    var e = E_(),
        t = e('toUpperCase');
    return (Mu = t), Mu;
}
var M_ = j_();
const qa = ce(M_);
function le(e) {
    return function () {
        return e;
    };
}
const Yb = Math.cos,
    Di = Math.sin,
    ut = Math.sqrt,
    Ni = Math.PI,
    La = 2 * Ni,
    _l = Math.PI,
    Al = 2 * _l,
    Gt = 1e-6,
    $_ = Al - Gt;
function Zb(e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function C_(e) {
    let t = Math.floor(e);
    if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
    if (t > 15) return Zb;
    const r = 10 ** t;
    return function (n) {
        this._ += n[0];
        for (let i = 1, a = n.length; i < a; ++i)
            this._ += Math.round(arguments[i] * r) / r + n[i];
    };
}
class I_ {
    constructor(t) {
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ''),
            (this._append = t == null ? Zb : C_(t));
    }
    moveTo(t, r) {
        this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
    }
    closePath() {
        this._x1 !== null &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
    }
    lineTo(t, r) {
        this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
    }
    quadraticCurveTo(t, r, n, i) {
        this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
    }
    bezierCurveTo(t, r, n, i, a, o) {
        this
            ._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
    }
    arcTo(t, r, n, i, a) {
        if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
            throw new Error(`negative radius: ${a}`);
        let o = this._x1,
            u = this._y1,
            c = n - t,
            s = i - r,
            f = o - t,
            l = u - r,
            h = f * f + l * l;
        if (this._x1 === null)
            this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
        else if (h > Gt)
            if (!(Math.abs(l * c - s * f) > Gt) || !a)
                this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
            else {
                let p = n - o,
                    y = i - u,
                    v = c * c + s * s,
                    d = p * p + y * y,
                    g = Math.sqrt(v),
                    x = Math.sqrt(h),
                    w =
                        a *
                        Math.tan(
                            (_l - Math.acos((v + h - d) / (2 * g * x))) / 2
                        ),
                    O = w / x,
                    m = w / g;
                Math.abs(O - 1) > Gt &&
                    this._append`L${t + O * f},${r + O * l}`,
                    this
                        ._append`A${a},${a},0,0,${+(l * p > f * y)},${(this._x1 = t + m * c)},${(this._y1 = r + m * s)}`;
            }
    }
    arc(t, r, n, i, a, o) {
        if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0))
            throw new Error(`negative radius: ${n}`);
        let u = n * Math.cos(i),
            c = n * Math.sin(i),
            s = t + u,
            f = r + c,
            l = 1 ^ o,
            h = o ? i - a : a - i;
        this._x1 === null
            ? this._append`M${s},${f}`
            : (Math.abs(this._x1 - s) > Gt || Math.abs(this._y1 - f) > Gt) &&
              this._append`L${s},${f}`,
            n &&
                (h < 0 && (h = (h % Al) + Al),
                h > $_
                    ? this
                          ._append`A${n},${n},0,1,${l},${t - u},${r - c}A${n},${n},0,1,${l},${(this._x1 = s)},${(this._y1 = f)}`
                    : h > Gt &&
                      this
                          ._append`A${n},${n},0,${+(h >= _l)},${l},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`);
    }
    rect(t, r, n, i) {
        this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
    }
    toString() {
        return this._;
    }
}
function Xf(e) {
    let t = 3;
    return (
        (e.digits = function (r) {
            if (!arguments.length) return t;
            if (r == null) t = null;
            else {
                const n = Math.floor(r);
                if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
                t = n;
            }
            return e;
        }),
        () => new I_(t)
    );
}
function Yf(e) {
    return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function Jb(e) {
    this._context = e;
}
Jb.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        this._point = 0;
    },
    lineEnd: function () {
        (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1),
                    this._line
                        ? this._context.lineTo(e, t)
                        : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(e, t);
                break;
        }
    },
};
function Ba(e) {
    return new Jb(e);
}
function Qb(e) {
    return e[0];
}
function e0(e) {
    return e[1];
}
function t0(e, t) {
    var r = le(!0),
        n = null,
        i = Ba,
        a = null,
        o = Xf(u);
    (e = typeof e == 'function' ? e : e === void 0 ? Qb : le(e)),
        (t = typeof t == 'function' ? t : t === void 0 ? e0 : le(t));
    function u(c) {
        var s,
            f = (c = Yf(c)).length,
            l,
            h = !1,
            p;
        for (n == null && (a = i((p = o()))), s = 0; s <= f; ++s)
            !(s < f && r((l = c[s]), s, c)) === h &&
                ((h = !h) ? a.lineStart() : a.lineEnd()),
                h && a.point(+e(l, s, c), +t(l, s, c));
        if (p) return (a = null), p + '' || null;
    }
    return (
        (u.x = function (c) {
            return arguments.length
                ? ((e = typeof c == 'function' ? c : le(+c)), u)
                : e;
        }),
        (u.y = function (c) {
            return arguments.length
                ? ((t = typeof c == 'function' ? c : le(+c)), u)
                : t;
        }),
        (u.defined = function (c) {
            return arguments.length
                ? ((r = typeof c == 'function' ? c : le(!!c)), u)
                : r;
        }),
        (u.curve = function (c) {
            return arguments.length ? ((i = c), n != null && (a = i(n)), u) : i;
        }),
        (u.context = function (c) {
            return arguments.length
                ? (c == null ? (n = a = null) : (a = i((n = c))), u)
                : n;
        }),
        u
    );
}
function xi(e, t, r) {
    var n = null,
        i = le(!0),
        a = null,
        o = Ba,
        u = null,
        c = Xf(s);
    (e = typeof e == 'function' ? e : e === void 0 ? Qb : le(+e)),
        (t = typeof t == 'function' ? t : le(t === void 0 ? 0 : +t)),
        (r = typeof r == 'function' ? r : r === void 0 ? e0 : le(+r));
    function s(l) {
        var h,
            p,
            y,
            v = (l = Yf(l)).length,
            d,
            g = !1,
            x,
            w = new Array(v),
            O = new Array(v);
        for (a == null && (u = o((x = c()))), h = 0; h <= v; ++h) {
            if (!(h < v && i((d = l[h]), h, l)) === g)
                if ((g = !g)) (p = h), u.areaStart(), u.lineStart();
                else {
                    for (u.lineEnd(), u.lineStart(), y = h - 1; y >= p; --y)
                        u.point(w[y], O[y]);
                    u.lineEnd(), u.areaEnd();
                }
            g &&
                ((w[h] = +e(d, h, l)),
                (O[h] = +t(d, h, l)),
                u.point(n ? +n(d, h, l) : w[h], r ? +r(d, h, l) : O[h]));
        }
        if (x) return (u = null), x + '' || null;
    }
    function f() {
        return t0().defined(i).curve(o).context(a);
    }
    return (
        (s.x = function (l) {
            return arguments.length
                ? ((e = typeof l == 'function' ? l : le(+l)), (n = null), s)
                : e;
        }),
        (s.x0 = function (l) {
            return arguments.length
                ? ((e = typeof l == 'function' ? l : le(+l)), s)
                : e;
        }),
        (s.x1 = function (l) {
            return arguments.length
                ? ((n = l == null ? null : typeof l == 'function' ? l : le(+l)),
                  s)
                : n;
        }),
        (s.y = function (l) {
            return arguments.length
                ? ((t = typeof l == 'function' ? l : le(+l)), (r = null), s)
                : t;
        }),
        (s.y0 = function (l) {
            return arguments.length
                ? ((t = typeof l == 'function' ? l : le(+l)), s)
                : t;
        }),
        (s.y1 = function (l) {
            return arguments.length
                ? ((r = l == null ? null : typeof l == 'function' ? l : le(+l)),
                  s)
                : r;
        }),
        (s.lineX0 = s.lineY0 =
            function () {
                return f().x(e).y(t);
            }),
        (s.lineY1 = function () {
            return f().x(e).y(r);
        }),
        (s.lineX1 = function () {
            return f().x(n).y(t);
        }),
        (s.defined = function (l) {
            return arguments.length
                ? ((i = typeof l == 'function' ? l : le(!!l)), s)
                : i;
        }),
        (s.curve = function (l) {
            return arguments.length ? ((o = l), a != null && (u = o(a)), s) : o;
        }),
        (s.context = function (l) {
            return arguments.length
                ? (l == null ? (a = u = null) : (u = o((a = l))), s)
                : a;
        }),
        s
    );
}
class r0 {
    constructor(t, r) {
        (this._context = t), (this._x = r);
    }
    areaStart() {
        this._line = 0;
    }
    areaEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    }
    point(t, r) {
        switch (((t = +t), (r = +r), this._point)) {
            case 0: {
                (this._point = 1),
                    this._line
                        ? this._context.lineTo(t, r)
                        : this._context.moveTo(t, r);
                break;
            }
            case 1:
                this._point = 2;
            default: {
                this._x
                    ? this._context.bezierCurveTo(
                          (this._x0 = (this._x0 + t) / 2),
                          this._y0,
                          this._x0,
                          r,
                          t,
                          r
                      )
                    : this._context.bezierCurveTo(
                          this._x0,
                          (this._y0 = (this._y0 + r) / 2),
                          t,
                          this._y0,
                          t,
                          r
                      );
                break;
            }
        }
        (this._x0 = t), (this._y0 = r);
    }
}
function k_(e) {
    return new r0(e, !0);
}
function R_(e) {
    return new r0(e, !1);
}
const Zf = {
        draw(e, t) {
            const r = ut(t / Ni);
            e.moveTo(r, 0), e.arc(0, 0, r, 0, La);
        },
    },
    D_ = {
        draw(e, t) {
            const r = ut(t / 5) / 2;
            e.moveTo(-3 * r, -r),
                e.lineTo(-r, -r),
                e.lineTo(-r, -3 * r),
                e.lineTo(r, -3 * r),
                e.lineTo(r, -r),
                e.lineTo(3 * r, -r),
                e.lineTo(3 * r, r),
                e.lineTo(r, r),
                e.lineTo(r, 3 * r),
                e.lineTo(-r, 3 * r),
                e.lineTo(-r, r),
                e.lineTo(-3 * r, r),
                e.closePath();
        },
    },
    n0 = ut(1 / 3),
    N_ = n0 * 2,
    q_ = {
        draw(e, t) {
            const r = ut(t / N_),
                n = r * n0;
            e.moveTo(0, -r),
                e.lineTo(n, 0),
                e.lineTo(0, r),
                e.lineTo(-n, 0),
                e.closePath();
        },
    },
    L_ = {
        draw(e, t) {
            const r = ut(t),
                n = -r / 2;
            e.rect(n, n, r, r);
        },
    },
    B_ = 0.8908130915292852,
    i0 = Di(Ni / 10) / Di((7 * Ni) / 10),
    F_ = Di(La / 10) * i0,
    z_ = -Yb(La / 10) * i0,
    W_ = {
        draw(e, t) {
            const r = ut(t * B_),
                n = F_ * r,
                i = z_ * r;
            e.moveTo(0, -r), e.lineTo(n, i);
            for (let a = 1; a < 5; ++a) {
                const o = (La * a) / 5,
                    u = Yb(o),
                    c = Di(o);
                e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i);
            }
            e.closePath();
        },
    },
    $u = ut(3),
    U_ = {
        draw(e, t) {
            const r = -ut(t / ($u * 3));
            e.moveTo(0, r * 2),
                e.lineTo(-$u * r, -r),
                e.lineTo($u * r, -r),
                e.closePath();
        },
    },
    Ve = -0.5,
    Xe = ut(3) / 2,
    Sl = 1 / ut(12),
    H_ = (Sl / 2 + 1) * 3,
    K_ = {
        draw(e, t) {
            const r = ut(t / H_),
                n = r / 2,
                i = r * Sl,
                a = n,
                o = r * Sl + r,
                u = -a,
                c = o;
            e.moveTo(n, i),
                e.lineTo(a, o),
                e.lineTo(u, c),
                e.lineTo(Ve * n - Xe * i, Xe * n + Ve * i),
                e.lineTo(Ve * a - Xe * o, Xe * a + Ve * o),
                e.lineTo(Ve * u - Xe * c, Xe * u + Ve * c),
                e.lineTo(Ve * n + Xe * i, Ve * i - Xe * n),
                e.lineTo(Ve * a + Xe * o, Ve * o - Xe * a),
                e.lineTo(Ve * u + Xe * c, Ve * c - Xe * u),
                e.closePath();
        },
    };
function G_(e, t) {
    let r = null,
        n = Xf(i);
    (e = typeof e == 'function' ? e : le(e || Zf)),
        (t = typeof t == 'function' ? t : le(t === void 0 ? 64 : +t));
    function i() {
        let a;
        if (
            (r || (r = a = n()),
            e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
            a)
        )
            return (r = null), a + '' || null;
    }
    return (
        (i.type = function (a) {
            return arguments.length
                ? ((e = typeof a == 'function' ? a : le(a)), i)
                : e;
        }),
        (i.size = function (a) {
            return arguments.length
                ? ((t = typeof a == 'function' ? a : le(+a)), i)
                : t;
        }),
        (i.context = function (a) {
            return arguments.length ? ((r = a ?? null), i) : r;
        }),
        i
    );
}
function qi() {}
function Li(e, t, r) {
    e._context.bezierCurveTo(
        (2 * e._x0 + e._x1) / 3,
        (2 * e._y0 + e._y1) / 3,
        (e._x0 + 2 * e._x1) / 3,
        (e._y0 + 2 * e._y1) / 3,
        (e._x0 + 4 * e._x1 + t) / 6,
        (e._y0 + 4 * e._y1 + r) / 6
    );
}
function a0(e) {
    this._context = e;
}
a0.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
        switch (this._point) {
            case 3:
                Li(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1),
                    this._line
                        ? this._context.lineTo(e, t)
                        : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                (this._point = 3),
                    this._context.lineTo(
                        (5 * this._x0 + this._x1) / 6,
                        (5 * this._y0 + this._y1) / 6
                    );
            default:
                Li(this, e, t);
                break;
        }
        (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
    },
};
function V_(e) {
    return new a0(e);
}
function o0(e) {
    this._context = e;
}
o0.prototype = {
    areaStart: qi,
    areaEnd: qi,
    lineStart: function () {
        (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
                NaN),
            (this._point = 0);
    },
    lineEnd: function () {
        switch (this._point) {
            case 1: {
                this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                break;
            }
            case 2: {
                this._context.moveTo(
                    (this._x2 + 2 * this._x3) / 3,
                    (this._y2 + 2 * this._y3) / 3
                ),
                    this._context.lineTo(
                        (this._x3 + 2 * this._x2) / 3,
                        (this._y3 + 2 * this._y2) / 3
                    ),
                    this._context.closePath();
                break;
            }
            case 3: {
                this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4);
                break;
            }
        }
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1), (this._x2 = e), (this._y2 = t);
                break;
            case 1:
                (this._point = 2), (this._x3 = e), (this._y3 = t);
                break;
            case 2:
                (this._point = 3),
                    (this._x4 = e),
                    (this._y4 = t),
                    this._context.moveTo(
                        (this._x0 + 4 * this._x1 + e) / 6,
                        (this._y0 + 4 * this._y1 + t) / 6
                    );
                break;
            default:
                Li(this, e, t);
                break;
        }
        (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
    },
};
function X_(e) {
    return new o0(e);
}
function u0(e) {
    this._context = e;
}
u0.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
        (this._line || (this._line !== 0 && this._point === 3)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + e) / 6,
                    n = (this._y0 + 4 * this._y1 + t) / 6;
                this._line
                    ? this._context.lineTo(r, n)
                    : this._context.moveTo(r, n);
                break;
            case 3:
                this._point = 4;
            default:
                Li(this, e, t);
                break;
        }
        (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
    },
};
function Y_(e) {
    return new u0(e);
}
function c0(e) {
    this._context = e;
}
c0.prototype = {
    areaStart: qi,
    areaEnd: qi,
    lineStart: function () {
        this._point = 0;
    },
    lineEnd: function () {
        this._point && this._context.closePath();
    },
    point: function (e, t) {
        (e = +e),
            (t = +t),
            this._point
                ? this._context.lineTo(e, t)
                : ((this._point = 1), this._context.moveTo(e, t));
    },
};
function Z_(e) {
    return new c0(e);
}
function fd(e) {
    return e < 0 ? -1 : 1;
}
function hd(e, t, r) {
    var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
        o = (r - e._y1) / (i || (n < 0 && -0)),
        u = (a * i + o * n) / (n + i);
    return (
        (fd(a) + fd(o)) *
            Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
    );
}
function pd(e, t) {
    var r = e._x1 - e._x0;
    return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Cu(e, t, r) {
    var n = e._x0,
        i = e._y0,
        a = e._x1,
        o = e._y1,
        u = (a - n) / 3;
    e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Bi(e) {
    this._context = e;
}
Bi.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
            (this._point = 0);
    },
    lineEnd: function () {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Cu(this, this._t0, pd(this, this._t0));
                break;
        }
        (this._line || (this._line !== 0 && this._point === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
    },
    point: function (e, t) {
        var r = NaN;
        if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
            switch (this._point) {
                case 0:
                    (this._point = 1),
                        this._line
                            ? this._context.lineTo(e, t)
                            : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    (this._point = 3),
                        Cu(this, pd(this, (r = hd(this, e, t))), r);
                    break;
                default:
                    Cu(this, this._t0, (r = hd(this, e, t)));
                    break;
            }
            (this._x0 = this._x1),
                (this._x1 = e),
                (this._y0 = this._y1),
                (this._y1 = t),
                (this._t0 = r);
        }
    },
};
function s0(e) {
    this._context = new l0(e);
}
(s0.prototype = Object.create(Bi.prototype)).point = function (e, t) {
    Bi.prototype.point.call(this, t, e);
};
function l0(e) {
    this._context = e;
}
l0.prototype = {
    moveTo: function (e, t) {
        this._context.moveTo(t, e);
    },
    closePath: function () {
        this._context.closePath();
    },
    lineTo: function (e, t) {
        this._context.lineTo(t, e);
    },
    bezierCurveTo: function (e, t, r, n, i, a) {
        this._context.bezierCurveTo(t, e, n, r, a, i);
    },
};
function J_(e) {
    return new Bi(e);
}
function Q_(e) {
    return new s0(e);
}
function f0(e) {
    this._context = e;
}
f0.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x = []), (this._y = []);
    },
    lineEnd: function () {
        var e = this._x,
            t = this._y,
            r = e.length;
        if (r)
            if (
                (this._line
                    ? this._context.lineTo(e[0], t[0])
                    : this._context.moveTo(e[0], t[0]),
                r === 2)
            )
                this._context.lineTo(e[1], t[1]);
            else
                for (var n = dd(e), i = dd(t), a = 0, o = 1; o < r; ++a, ++o)
                    this._context.bezierCurveTo(
                        n[0][a],
                        i[0][a],
                        n[1][a],
                        i[1][a],
                        e[o],
                        t[o]
                    );
        (this._line || (this._line !== 0 && r === 1)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
    },
    point: function (e, t) {
        this._x.push(+e), this._y.push(+t);
    },
};
function dd(e) {
    var t,
        r = e.length - 1,
        n,
        i = new Array(r),
        a = new Array(r),
        o = new Array(r);
    for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
        (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
    for (
        i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
        t < r;
        ++t
    )
        (n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]);
    for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
        i[t] = (o[t] - i[t + 1]) / a[t];
    for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
        a[t] = 2 * e[t + 1] - i[t + 1];
    return [i, a];
}
function e1(e) {
    return new f0(e);
}
function Fa(e, t) {
    (this._context = e), (this._t = t);
}
Fa.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        (this._x = this._y = NaN), (this._point = 0);
    },
    lineEnd: function () {
        0 < this._t &&
            this._t < 1 &&
            this._point === 2 &&
            this._context.lineTo(this._x, this._y),
            (this._line || (this._line !== 0 && this._point === 1)) &&
                this._context.closePath(),
            this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
    },
    point: function (e, t) {
        switch (((e = +e), (t = +t), this._point)) {
            case 0:
                (this._point = 1),
                    this._line
                        ? this._context.lineTo(e, t)
                        : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default: {
                if (this._t <= 0)
                    this._context.lineTo(this._x, t),
                        this._context.lineTo(e, t);
                else {
                    var r = this._x * (1 - this._t) + e * this._t;
                    this._context.lineTo(r, this._y),
                        this._context.lineTo(r, t);
                }
                break;
            }
        }
        (this._x = e), (this._y = t);
    },
};
function t1(e) {
    return new Fa(e, 0.5);
}
function r1(e) {
    return new Fa(e, 0);
}
function n1(e) {
    return new Fa(e, 1);
}
function Pr(e, t) {
    if ((o = e.length) > 1)
        for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
            for (i = a, a = e[t[r]], n = 0; n < u; ++n)
                a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Pl(e) {
    for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
    return r;
}
function i1(e, t) {
    return e[t];
}
function a1(e) {
    const t = [];
    return (t.key = e), t;
}
function o1() {
    var e = le([]),
        t = Pl,
        r = Pr,
        n = i1;
    function i(a) {
        var o = Array.from(e.apply(this, arguments), a1),
            u,
            c = o.length,
            s = -1,
            f;
        for (const l of a)
            for (u = 0, ++s; u < c; ++u)
                (o[u][s] = [0, +n(l, o[u].key, s, a)]).data = l;
        for (u = 0, f = Yf(t(o)); u < c; ++u) o[f[u]].index = u;
        return r(o, f), o;
    }
    return (
        (i.keys = function (a) {
            return arguments.length
                ? ((e = typeof a == 'function' ? a : le(Array.from(a))), i)
                : e;
        }),
        (i.value = function (a) {
            return arguments.length
                ? ((n = typeof a == 'function' ? a : le(+a)), i)
                : n;
        }),
        (i.order = function (a) {
            return arguments.length
                ? ((t =
                      a == null
                          ? Pl
                          : typeof a == 'function'
                            ? a
                            : le(Array.from(a))),
                  i)
                : t;
        }),
        (i.offset = function (a) {
            return arguments.length ? ((r = a ?? Pr), i) : r;
        }),
        i
    );
}
function u1(e, t) {
    if ((n = e.length) > 0) {
        for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
            for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
            if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
        }
        Pr(e, t);
    }
}
function c1(e, t) {
    if ((i = e.length) > 0) {
        for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
            for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
            n[r][1] += n[r][0] = -u / 2;
        }
        Pr(e, t);
    }
}
function s1(e, t) {
    if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
        for (var r = 0, n = 1, i, a, o; n < a; ++n) {
            for (var u = 0, c = 0, s = 0; u < o; ++u) {
                for (
                    var f = e[t[u]],
                        l = f[n][1] || 0,
                        h = f[n - 1][1] || 0,
                        p = (l - h) / 2,
                        y = 0;
                    y < u;
                    ++y
                ) {
                    var v = e[t[y]],
                        d = v[n][1] || 0,
                        g = v[n - 1][1] || 0;
                    p += d - g;
                }
                (c += l), (s += p * l);
            }
            (i[n - 1][1] += i[n - 1][0] = r), c && (r -= s / c);
        }
        (i[n - 1][1] += i[n - 1][0] = r), Pr(e, t);
    }
}
function En(e) {
    '@babel/helpers - typeof';
    return (
        (En =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        En(e)
    );
}
var l1 = ['type', 'size', 'sizeType'];
function Tl() {
    return (
        (Tl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Tl.apply(this, arguments)
    );
}
function vd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function yd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? vd(Object(r), !0).forEach(function (n) {
                  f1(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : vd(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function f1(e, t, r) {
    return (
        (t = h1(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function h1(e) {
    var t = p1(e, 'string');
    return En(t) == 'symbol' ? t : t + '';
}
function p1(e, t) {
    if (En(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (En(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function d1(e, t) {
    if (e == null) return {};
    var r = v1(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function v1(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
var h0 = {
        symbolCircle: Zf,
        symbolCross: D_,
        symbolDiamond: q_,
        symbolSquare: L_,
        symbolStar: W_,
        symbolTriangle: U_,
        symbolWye: K_,
    },
    y1 = Math.PI / 180,
    m1 = function (t) {
        var r = 'symbol'.concat(qa(t));
        return h0[r] || Zf;
    },
    g1 = function (t, r, n) {
        if (r === 'area') return t;
        switch (n) {
            case 'cross':
                return (5 * t * t) / 9;
            case 'diamond':
                return (0.5 * t * t) / Math.sqrt(3);
            case 'square':
                return t * t;
            case 'star': {
                var i = 18 * y1;
                return (
                    1.25 *
                    t *
                    t *
                    (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
                );
            }
            case 'triangle':
                return (Math.sqrt(3) * t * t) / 4;
            case 'wye':
                return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
            default:
                return (Math.PI * t * t) / 4;
        }
    },
    b1 = function (t, r) {
        h0['symbol'.concat(qa(t))] = r;
    },
    Jf = function (t) {
        var r = t.type,
            n = r === void 0 ? 'circle' : r,
            i = t.size,
            a = i === void 0 ? 64 : i,
            o = t.sizeType,
            u = o === void 0 ? 'area' : o,
            c = d1(t, l1),
            s = yd(yd({}, c), {}, { type: n, size: a, sizeType: u }),
            f = function () {
                var d = m1(n),
                    g = G_()
                        .type(d)
                        .size(g1(a, u, n));
                return g();
            },
            l = s.className,
            h = s.cx,
            p = s.cy,
            y = H(s, !0);
        return h === +h && p === +p && a === +a
            ? S.createElement(
                  'path',
                  Tl({}, y, {
                      className: Q('recharts-symbols', l),
                      transform: 'translate('.concat(h, ', ').concat(p, ')'),
                      d: f(),
                  })
              )
            : null;
    };
Jf.registerSymbol = b1;
function Tr(e) {
    '@babel/helpers - typeof';
    return (
        (Tr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Tr(e)
    );
}
function El() {
    return (
        (El = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        El.apply(this, arguments)
    );
}
function md(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function x1(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? md(Object(r), !0).forEach(function (n) {
                  jn(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : md(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function w1(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function O1(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, d0(n.key), n);
    }
}
function _1(e, t, r) {
    return (
        t && O1(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function A1(e, t, r) {
    return (
        (t = Fi(t)),
        S1(
            e,
            p0()
                ? Reflect.construct(t, r || [], Fi(e).constructor)
                : t.apply(e, r)
        )
    );
}
function S1(e, t) {
    if (t && (Tr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return P1(e);
}
function P1(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function p0() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (p0 = function () {
        return !!e;
    })();
}
function Fi(e) {
    return (
        (Fi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Fi(e)
    );
}
function T1(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && jl(e, t);
}
function jl(e, t) {
    return (
        (jl = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        jl(e, t)
    );
}
function jn(e, t, r) {
    return (
        (t = d0(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function d0(e) {
    var t = E1(e, 'string');
    return Tr(t) == 'symbol' ? t : t + '';
}
function E1(e, t) {
    if (Tr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Tr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var tt = 32,
    Qf = (function (e) {
        function t() {
            return w1(this, t), A1(this, t, arguments);
        }
        return (
            T1(t, e),
            _1(t, [
                {
                    key: 'renderIcon',
                    value: function (n) {
                        var i = this.props.inactiveColor,
                            a = tt / 2,
                            o = tt / 6,
                            u = tt / 3,
                            c = n.inactive ? i : n.color;
                        if (n.type === 'plainline')
                            return S.createElement('line', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: c,
                                strokeDasharray: n.payload.strokeDasharray,
                                x1: 0,
                                y1: a,
                                x2: tt,
                                y2: a,
                                className: 'recharts-legend-icon',
                            });
                        if (n.type === 'line')
                            return S.createElement('path', {
                                strokeWidth: 4,
                                fill: 'none',
                                stroke: c,
                                d: 'M0,'
                                    .concat(a, 'h')
                                    .concat(
                                        u,
                                        `
            A`
                                    )
                                    .concat(o, ',')
                                    .concat(o, ',0,1,1,')
                                    .concat(2 * u, ',')
                                    .concat(
                                        a,
                                        `
            H`
                                    )
                                    .concat(tt, 'M')
                                    .concat(2 * u, ',')
                                    .concat(
                                        a,
                                        `
            A`
                                    )
                                    .concat(o, ',')
                                    .concat(o, ',0,1,1,')
                                    .concat(u, ',')
                                    .concat(a),
                                className: 'recharts-legend-icon',
                            });
                        if (n.type === 'rect')
                            return S.createElement('path', {
                                stroke: 'none',
                                fill: c,
                                d: 'M0,'
                                    .concat(tt / 8, 'h')
                                    .concat(tt, 'v')
                                    .concat((tt * 3) / 4, 'h')
                                    .concat(-32, 'z'),
                                className: 'recharts-legend-icon',
                            });
                        if (S.isValidElement(n.legendIcon)) {
                            var s = x1({}, n);
                            return (
                                delete s.legendIcon,
                                S.cloneElement(n.legendIcon, s)
                            );
                        }
                        return S.createElement(Jf, {
                            fill: c,
                            cx: a,
                            cy: a,
                            size: tt,
                            sizeType: 'diameter',
                            type: n.type,
                        });
                    },
                },
                {
                    key: 'renderItems',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.payload,
                            o = i.iconSize,
                            u = i.layout,
                            c = i.formatter,
                            s = i.inactiveColor,
                            f = { x: 0, y: 0, width: tt, height: tt },
                            l = {
                                display:
                                    u === 'horizontal'
                                        ? 'inline-block'
                                        : 'block',
                                marginRight: 10,
                            },
                            h = {
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                marginRight: 4,
                            };
                        return a.map(function (p, y) {
                            var v = p.formatter || c,
                                d = Q(
                                    jn(
                                        jn(
                                            { 'recharts-legend-item': !0 },
                                            'legend-item-'.concat(y),
                                            !0
                                        ),
                                        'inactive',
                                        p.inactive
                                    )
                                );
                            if (p.type === 'none') return null;
                            var g = Y(p.value) ? null : p.value;
                            ot(
                                !Y(p.value),
                                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
                            );
                            var x = p.inactive ? s : p.color;
                            return S.createElement(
                                'li',
                                El(
                                    {
                                        className: d,
                                        style: l,
                                        key: 'legend-item-'.concat(y),
                                    },
                                    nr(n.props, p, y)
                                ),
                                S.createElement(
                                    wl,
                                    {
                                        width: o,
                                        height: o,
                                        viewBox: f,
                                        style: h,
                                    },
                                    n.renderIcon(p)
                                ),
                                S.createElement(
                                    'span',
                                    {
                                        className: 'recharts-legend-item-text',
                                        style: { color: x },
                                    },
                                    v ? v(g, p, y) : g
                                )
                            );
                        });
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var n = this.props,
                            i = n.payload,
                            a = n.layout,
                            o = n.align;
                        if (!i || !i.length) return null;
                        var u = {
                            padding: 0,
                            margin: 0,
                            textAlign: a === 'horizontal' ? o : 'left',
                        };
                        return S.createElement(
                            'ul',
                            { className: 'recharts-default-legend', style: u },
                            this.renderItems()
                        );
                    },
                },
            ])
        );
    })(q.PureComponent);
jn(Qf, 'displayName', 'Legend');
jn(Qf, 'defaultProps', {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
    inactiveColor: '#ccc',
});
var Iu, gd;
function j1() {
    if (gd) return Iu;
    gd = 1;
    var e = Ra();
    function t() {
        (this.__data__ = new e()), (this.size = 0);
    }
    return (Iu = t), Iu;
}
var ku, bd;
function M1() {
    if (bd) return ku;
    bd = 1;
    function e(t) {
        var r = this.__data__,
            n = r.delete(t);
        return (this.size = r.size), n;
    }
    return (ku = e), ku;
}
var Ru, xd;
function $1() {
    if (xd) return Ru;
    xd = 1;
    function e(t) {
        return this.__data__.get(t);
    }
    return (Ru = e), Ru;
}
var Du, wd;
function C1() {
    if (wd) return Du;
    wd = 1;
    function e(t) {
        return this.__data__.has(t);
    }
    return (Du = e), Du;
}
var Nu, Od;
function I1() {
    if (Od) return Nu;
    Od = 1;
    var e = Ra(),
        t = Wf(),
        r = Uf(),
        n = 200;
    function i(a, o) {
        var u = this.__data__;
        if (u instanceof e) {
            var c = u.__data__;
            if (!t || c.length < n - 1)
                return c.push([a, o]), (this.size = ++u.size), this;
            u = this.__data__ = new r(c);
        }
        return u.set(a, o), (this.size = u.size), this;
    }
    return (Nu = i), Nu;
}
var qu, _d;
function v0() {
    if (_d) return qu;
    _d = 1;
    var e = Ra(),
        t = j1(),
        r = M1(),
        n = $1(),
        i = C1(),
        a = I1();
    function o(u) {
        var c = (this.__data__ = new e(u));
        this.size = c.size;
    }
    return (
        (o.prototype.clear = t),
        (o.prototype.delete = r),
        (o.prototype.get = n),
        (o.prototype.has = i),
        (o.prototype.set = a),
        (qu = o),
        qu
    );
}
var Lu, Ad;
function k1() {
    if (Ad) return Lu;
    Ad = 1;
    var e = '__lodash_hash_undefined__';
    function t(r) {
        return this.__data__.set(r, e), this;
    }
    return (Lu = t), Lu;
}
var Bu, Sd;
function R1() {
    if (Sd) return Bu;
    Sd = 1;
    function e(t) {
        return this.__data__.has(t);
    }
    return (Bu = e), Bu;
}
var Fu, Pd;
function y0() {
    if (Pd) return Fu;
    Pd = 1;
    var e = Uf(),
        t = k1(),
        r = R1();
    function n(i) {
        var a = -1,
            o = i == null ? 0 : i.length;
        for (this.__data__ = new e(); ++a < o; ) this.add(i[a]);
    }
    return (
        (n.prototype.add = n.prototype.push = t),
        (n.prototype.has = r),
        (Fu = n),
        Fu
    );
}
var zu, Td;
function m0() {
    if (Td) return zu;
    Td = 1;
    function e(t, r) {
        for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
            if (r(t[n], n, t)) return !0;
        return !1;
    }
    return (zu = e), zu;
}
var Wu, Ed;
function g0() {
    if (Ed) return Wu;
    Ed = 1;
    function e(t, r) {
        return t.has(r);
    }
    return (Wu = e), Wu;
}
var Uu, jd;
function b0() {
    if (jd) return Uu;
    jd = 1;
    var e = y0(),
        t = m0(),
        r = g0(),
        n = 1,
        i = 2;
    function a(o, u, c, s, f, l) {
        var h = c & n,
            p = o.length,
            y = u.length;
        if (p != y && !(h && y > p)) return !1;
        var v = l.get(o),
            d = l.get(u);
        if (v && d) return v == u && d == o;
        var g = -1,
            x = !0,
            w = c & i ? new e() : void 0;
        for (l.set(o, u), l.set(u, o); ++g < p; ) {
            var O = o[g],
                m = u[g];
            if (s) var b = h ? s(m, O, g, u, o, l) : s(O, m, g, o, u, l);
            if (b !== void 0) {
                if (b) continue;
                x = !1;
                break;
            }
            if (w) {
                if (
                    !t(u, function (_, A) {
                        if (!r(w, A) && (O === _ || f(O, _, c, s, l)))
                            return w.push(A);
                    })
                ) {
                    x = !1;
                    break;
                }
            } else if (!(O === m || f(O, m, c, s, l))) {
                x = !1;
                break;
            }
        }
        return l.delete(o), l.delete(u), x;
    }
    return (Uu = a), Uu;
}
var Hu, Md;
function D1() {
    if (Md) return Hu;
    Md = 1;
    var e = pt(),
        t = e.Uint8Array;
    return (Hu = t), Hu;
}
var Ku, $d;
function N1() {
    if ($d) return Ku;
    $d = 1;
    function e(t) {
        var r = -1,
            n = Array(t.size);
        return (
            t.forEach(function (i, a) {
                n[++r] = [a, i];
            }),
            n
        );
    }
    return (Ku = e), Ku;
}
var Gu, Cd;
function eh() {
    if (Cd) return Gu;
    Cd = 1;
    function e(t) {
        var r = -1,
            n = Array(t.size);
        return (
            t.forEach(function (i) {
                n[++r] = i;
            }),
            n
        );
    }
    return (Gu = e), Gu;
}
var Vu, Id;
function q1() {
    if (Id) return Vu;
    Id = 1;
    var e = si(),
        t = D1(),
        r = zf(),
        n = b0(),
        i = N1(),
        a = eh(),
        o = 1,
        u = 2,
        c = '[object Boolean]',
        s = '[object Date]',
        f = '[object Error]',
        l = '[object Map]',
        h = '[object Number]',
        p = '[object RegExp]',
        y = '[object Set]',
        v = '[object String]',
        d = '[object Symbol]',
        g = '[object ArrayBuffer]',
        x = '[object DataView]',
        w = e ? e.prototype : void 0,
        O = w ? w.valueOf : void 0;
    function m(b, _, A, T, M, P, E) {
        switch (A) {
            case x:
                if (
                    b.byteLength != _.byteLength ||
                    b.byteOffset != _.byteOffset
                )
                    return !1;
                (b = b.buffer), (_ = _.buffer);
            case g:
                return !(
                    b.byteLength != _.byteLength || !P(new t(b), new t(_))
                );
            case c:
            case s:
            case h:
                return r(+b, +_);
            case f:
                return b.name == _.name && b.message == _.message;
            case p:
            case v:
                return b == _ + '';
            case l:
                var j = i;
            case y:
                var C = T & o;
                if ((j || (j = a), b.size != _.size && !C)) return !1;
                var $ = E.get(b);
                if ($) return $ == _;
                (T |= u), E.set(b, _);
                var k = n(j(b), j(_), T, M, P, E);
                return E.delete(b), k;
            case d:
                if (O) return O.call(b) == O.call(_);
        }
        return !1;
    }
    return (Vu = m), Vu;
}
var Xu, kd;
function x0() {
    if (kd) return Xu;
    kd = 1;
    function e(t, r) {
        for (var n = -1, i = r.length, a = t.length; ++n < i; ) t[a + n] = r[n];
        return t;
    }
    return (Xu = e), Xu;
}
var Yu, Rd;
function L1() {
    if (Rd) return Yu;
    Rd = 1;
    var e = x0(),
        t = Le();
    function r(n, i, a) {
        var o = i(n);
        return t(n) ? o : e(o, a(n));
    }
    return (Yu = r), Yu;
}
var Zu, Dd;
function B1() {
    if (Dd) return Zu;
    Dd = 1;
    function e(t, r) {
        for (
            var n = -1, i = t == null ? 0 : t.length, a = 0, o = [];
            ++n < i;

        ) {
            var u = t[n];
            r(u, n, t) && (o[a++] = u);
        }
        return o;
    }
    return (Zu = e), Zu;
}
var Ju, Nd;
function F1() {
    if (Nd) return Ju;
    Nd = 1;
    function e() {
        return [];
    }
    return (Ju = e), Ju;
}
var Qu, qd;
function z1() {
    if (qd) return Qu;
    qd = 1;
    var e = B1(),
        t = F1(),
        r = Object.prototype,
        n = r.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        a = i
            ? function (o) {
                  return o == null
                      ? []
                      : ((o = Object(o)),
                        e(i(o), function (u) {
                            return n.call(o, u);
                        }));
              }
            : t;
    return (Qu = a), Qu;
}
var ec, Ld;
function W1() {
    if (Ld) return ec;
    Ld = 1;
    function e(t, r) {
        for (var n = -1, i = Array(t); ++n < t; ) i[n] = r(n);
        return i;
    }
    return (ec = e), ec;
}
var tc, Bd;
function U1() {
    if (Bd) return tc;
    Bd = 1;
    var e = Tt(),
        t = Et(),
        r = '[object Arguments]';
    function n(i) {
        return t(i) && e(i) == r;
    }
    return (tc = n), tc;
}
var rc, Fd;
function th() {
    if (Fd) return rc;
    Fd = 1;
    var e = U1(),
        t = Et(),
        r = Object.prototype,
        n = r.hasOwnProperty,
        i = r.propertyIsEnumerable,
        a = e(
            (function () {
                return arguments;
            })()
        )
            ? e
            : function (o) {
                  return t(o) && n.call(o, 'callee') && !i.call(o, 'callee');
              };
    return (rc = a), rc;
}
var gn = { exports: {} },
    nc,
    zd;
function H1() {
    if (zd) return nc;
    zd = 1;
    function e() {
        return !1;
    }
    return (nc = e), nc;
}
gn.exports;
var Wd;
function w0() {
    return (
        Wd ||
            ((Wd = 1),
            (function (e, t) {
                var r = pt(),
                    n = H1(),
                    i = t && !t.nodeType && t,
                    a = i && !0 && e && !e.nodeType && e,
                    o = a && a.exports === i,
                    u = o ? r.Buffer : void 0,
                    c = u ? u.isBuffer : void 0,
                    s = c || n;
                e.exports = s;
            })(gn, gn.exports)),
        gn.exports
    );
}
var ic, Ud;
function rh() {
    if (Ud) return ic;
    Ud = 1;
    var e = 9007199254740991,
        t = /^(?:0|[1-9]\d*)$/;
    function r(n, i) {
        var a = typeof n;
        return (
            (i = i ?? e),
            !!i &&
                (a == 'number' || (a != 'symbol' && t.test(n))) &&
                n > -1 &&
                n % 1 == 0 &&
                n < i
        );
    }
    return (ic = r), ic;
}
var ac, Hd;
function nh() {
    if (Hd) return ac;
    Hd = 1;
    var e = 9007199254740991;
    function t(r) {
        return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= e;
    }
    return (ac = t), ac;
}
var oc, Kd;
function K1() {
    if (Kd) return oc;
    Kd = 1;
    var e = Tt(),
        t = nh(),
        r = Et(),
        n = '[object Arguments]',
        i = '[object Array]',
        a = '[object Boolean]',
        o = '[object Date]',
        u = '[object Error]',
        c = '[object Function]',
        s = '[object Map]',
        f = '[object Number]',
        l = '[object Object]',
        h = '[object RegExp]',
        p = '[object Set]',
        y = '[object String]',
        v = '[object WeakMap]',
        d = '[object ArrayBuffer]',
        g = '[object DataView]',
        x = '[object Float32Array]',
        w = '[object Float64Array]',
        O = '[object Int8Array]',
        m = '[object Int16Array]',
        b = '[object Int32Array]',
        _ = '[object Uint8Array]',
        A = '[object Uint8ClampedArray]',
        T = '[object Uint16Array]',
        M = '[object Uint32Array]',
        P = {};
    (P[x] = P[w] = P[O] = P[m] = P[b] = P[_] = P[A] = P[T] = P[M] = !0),
        (P[n] =
            P[i] =
            P[d] =
            P[a] =
            P[g] =
            P[o] =
            P[u] =
            P[c] =
            P[s] =
            P[f] =
            P[l] =
            P[h] =
            P[p] =
            P[y] =
            P[v] =
                !1);
    function E(j) {
        return r(j) && t(j.length) && !!P[e(j)];
    }
    return (oc = E), oc;
}
var uc, Gd;
function O0() {
    if (Gd) return uc;
    Gd = 1;
    function e(t) {
        return function (r) {
            return t(r);
        };
    }
    return (uc = e), uc;
}
var bn = { exports: {} };
bn.exports;
var Vd;
function G1() {
    return (
        Vd ||
            ((Vd = 1),
            (function (e, t) {
                var r = zb(),
                    n = t && !t.nodeType && t,
                    i = n && !0 && e && !e.nodeType && e,
                    a = i && i.exports === n,
                    o = a && r.process,
                    u = (function () {
                        try {
                            var c = i && i.require && i.require('util').types;
                            return c || (o && o.binding && o.binding('util'));
                        } catch {}
                    })();
                e.exports = u;
            })(bn, bn.exports)),
        bn.exports
    );
}
var cc, Xd;
function _0() {
    if (Xd) return cc;
    Xd = 1;
    var e = K1(),
        t = O0(),
        r = G1(),
        n = r && r.isTypedArray,
        i = n ? t(n) : e;
    return (cc = i), cc;
}
var sc, Yd;
function V1() {
    if (Yd) return sc;
    Yd = 1;
    var e = W1(),
        t = th(),
        r = Le(),
        n = w0(),
        i = rh(),
        a = _0(),
        o = Object.prototype,
        u = o.hasOwnProperty;
    function c(s, f) {
        var l = r(s),
            h = !l && t(s),
            p = !l && !h && n(s),
            y = !l && !h && !p && a(s),
            v = l || h || p || y,
            d = v ? e(s.length, String) : [],
            g = d.length;
        for (var x in s)
            (f || u.call(s, x)) &&
                !(
                    v &&
                    (x == 'length' ||
                        (p && (x == 'offset' || x == 'parent')) ||
                        (y &&
                            (x == 'buffer' ||
                                x == 'byteLength' ||
                                x == 'byteOffset')) ||
                        i(x, g))
                ) &&
                d.push(x);
        return d;
    }
    return (sc = c), sc;
}
var lc, Zd;
function X1() {
    if (Zd) return lc;
    Zd = 1;
    var e = Object.prototype;
    function t(r) {
        var n = r && r.constructor,
            i = (typeof n == 'function' && n.prototype) || e;
        return r === i;
    }
    return (lc = t), lc;
}
var fc, Jd;
function A0() {
    if (Jd) return fc;
    Jd = 1;
    function e(t, r) {
        return function (n) {
            return t(r(n));
        };
    }
    return (fc = e), fc;
}
var hc, Qd;
function Y1() {
    if (Qd) return hc;
    Qd = 1;
    var e = A0(),
        t = e(Object.keys, Object);
    return (hc = t), hc;
}
var pc, ev;
function Z1() {
    if (ev) return pc;
    ev = 1;
    var e = X1(),
        t = Y1(),
        r = Object.prototype,
        n = r.hasOwnProperty;
    function i(a) {
        if (!e(a)) return t(a);
        var o = [];
        for (var u in Object(a))
            n.call(a, u) && u != 'constructor' && o.push(u);
        return o;
    }
    return (pc = i), pc;
}
var dc, tv;
function fi() {
    if (tv) return dc;
    tv = 1;
    var e = Ff(),
        t = nh();
    function r(n) {
        return n != null && t(n.length) && !e(n);
    }
    return (dc = r), dc;
}
var vc, rv;
function za() {
    if (rv) return vc;
    rv = 1;
    var e = V1(),
        t = Z1(),
        r = fi();
    function n(i) {
        return r(i) ? e(i) : t(i);
    }
    return (vc = n), vc;
}
var yc, nv;
function J1() {
    if (nv) return yc;
    nv = 1;
    var e = L1(),
        t = z1(),
        r = za();
    function n(i) {
        return e(i, r, t);
    }
    return (yc = n), yc;
}
var mc, iv;
function Q1() {
    if (iv) return mc;
    iv = 1;
    var e = J1(),
        t = 1,
        r = Object.prototype,
        n = r.hasOwnProperty;
    function i(a, o, u, c, s, f) {
        var l = u & t,
            h = e(a),
            p = h.length,
            y = e(o),
            v = y.length;
        if (p != v && !l) return !1;
        for (var d = p; d--; ) {
            var g = h[d];
            if (!(l ? g in o : n.call(o, g))) return !1;
        }
        var x = f.get(a),
            w = f.get(o);
        if (x && w) return x == o && w == a;
        var O = !0;
        f.set(a, o), f.set(o, a);
        for (var m = l; ++d < p; ) {
            g = h[d];
            var b = a[g],
                _ = o[g];
            if (c) var A = l ? c(_, b, g, o, a, f) : c(b, _, g, a, o, f);
            if (!(A === void 0 ? b === _ || s(b, _, u, c, f) : A)) {
                O = !1;
                break;
            }
            m || (m = g == 'constructor');
        }
        if (O && !m) {
            var T = a.constructor,
                M = o.constructor;
            T != M &&
                'constructor' in a &&
                'constructor' in o &&
                !(
                    typeof T == 'function' &&
                    T instanceof T &&
                    typeof M == 'function' &&
                    M instanceof M
                ) &&
                (O = !1);
        }
        return f.delete(a), f.delete(o), O;
    }
    return (mc = i), mc;
}
var gc, av;
function eA() {
    if (av) return gc;
    av = 1;
    var e = cr(),
        t = pt(),
        r = e(t, 'DataView');
    return (gc = r), gc;
}
var bc, ov;
function tA() {
    if (ov) return bc;
    ov = 1;
    var e = cr(),
        t = pt(),
        r = e(t, 'Promise');
    return (bc = r), bc;
}
var xc, uv;
function S0() {
    if (uv) return xc;
    uv = 1;
    var e = cr(),
        t = pt(),
        r = e(t, 'Set');
    return (xc = r), xc;
}
var wc, cv;
function rA() {
    if (cv) return wc;
    cv = 1;
    var e = cr(),
        t = pt(),
        r = e(t, 'WeakMap');
    return (wc = r), wc;
}
var Oc, sv;
function nA() {
    if (sv) return Oc;
    sv = 1;
    var e = eA(),
        t = Wf(),
        r = tA(),
        n = S0(),
        i = rA(),
        a = Tt(),
        o = Wb(),
        u = '[object Map]',
        c = '[object Object]',
        s = '[object Promise]',
        f = '[object Set]',
        l = '[object WeakMap]',
        h = '[object DataView]',
        p = o(e),
        y = o(t),
        v = o(r),
        d = o(n),
        g = o(i),
        x = a;
    return (
        ((e && x(new e(new ArrayBuffer(1))) != h) ||
            (t && x(new t()) != u) ||
            (r && x(r.resolve()) != s) ||
            (n && x(new n()) != f) ||
            (i && x(new i()) != l)) &&
            (x = function (w) {
                var O = a(w),
                    m = O == c ? w.constructor : void 0,
                    b = m ? o(m) : '';
                if (b)
                    switch (b) {
                        case p:
                            return h;
                        case y:
                            return u;
                        case v:
                            return s;
                        case d:
                            return f;
                        case g:
                            return l;
                    }
                return O;
            }),
        (Oc = x),
        Oc
    );
}
var _c, lv;
function iA() {
    if (lv) return _c;
    lv = 1;
    var e = v0(),
        t = b0(),
        r = q1(),
        n = Q1(),
        i = nA(),
        a = Le(),
        o = w0(),
        u = _0(),
        c = 1,
        s = '[object Arguments]',
        f = '[object Array]',
        l = '[object Object]',
        h = Object.prototype,
        p = h.hasOwnProperty;
    function y(v, d, g, x, w, O) {
        var m = a(v),
            b = a(d),
            _ = m ? f : i(v),
            A = b ? f : i(d);
        (_ = _ == s ? l : _), (A = A == s ? l : A);
        var T = _ == l,
            M = A == l,
            P = _ == A;
        if (P && o(v)) {
            if (!o(d)) return !1;
            (m = !0), (T = !1);
        }
        if (P && !T)
            return (
                O || (O = new e()),
                m || u(v) ? t(v, d, g, x, w, O) : r(v, d, _, g, x, w, O)
            );
        if (!(g & c)) {
            var E = T && p.call(v, '__wrapped__'),
                j = M && p.call(d, '__wrapped__');
            if (E || j) {
                var C = E ? v.value() : v,
                    $ = j ? d.value() : d;
                return O || (O = new e()), w(C, $, g, x, O);
            }
        }
        return P ? (O || (O = new e()), n(v, d, g, x, w, O)) : !1;
    }
    return (_c = y), _c;
}
var Ac, fv;
function ih() {
    if (fv) return Ac;
    fv = 1;
    var e = iA(),
        t = Et();
    function r(n, i, a, o, u) {
        return n === i
            ? !0
            : n == null || i == null || (!t(n) && !t(i))
              ? n !== n && i !== i
              : e(n, i, a, o, r, u);
    }
    return (Ac = r), Ac;
}
var Sc, hv;
function aA() {
    if (hv) return Sc;
    hv = 1;
    var e = v0(),
        t = ih(),
        r = 1,
        n = 2;
    function i(a, o, u, c) {
        var s = u.length,
            f = s,
            l = !c;
        if (a == null) return !f;
        for (a = Object(a); s--; ) {
            var h = u[s];
            if (l && h[2] ? h[1] !== a[h[0]] : !(h[0] in a)) return !1;
        }
        for (; ++s < f; ) {
            h = u[s];
            var p = h[0],
                y = a[p],
                v = h[1];
            if (l && h[2]) {
                if (y === void 0 && !(p in a)) return !1;
            } else {
                var d = new e();
                if (c) var g = c(y, v, p, a, o, d);
                if (!(g === void 0 ? t(v, y, r | n, c, d) : g)) return !1;
            }
        }
        return !0;
    }
    return (Sc = i), Sc;
}
var Pc, pv;
function P0() {
    if (pv) return Pc;
    pv = 1;
    var e = Nt();
    function t(r) {
        return r === r && !e(r);
    }
    return (Pc = t), Pc;
}
var Tc, dv;
function oA() {
    if (dv) return Tc;
    dv = 1;
    var e = P0(),
        t = za();
    function r(n) {
        for (var i = t(n), a = i.length; a--; ) {
            var o = i[a],
                u = n[o];
            i[a] = [o, u, e(u)];
        }
        return i;
    }
    return (Tc = r), Tc;
}
var Ec, vv;
function T0() {
    if (vv) return Ec;
    vv = 1;
    function e(t, r) {
        return function (n) {
            return n == null
                ? !1
                : n[t] === r && (r !== void 0 || t in Object(n));
        };
    }
    return (Ec = e), Ec;
}
var jc, yv;
function uA() {
    if (yv) return jc;
    yv = 1;
    var e = aA(),
        t = oA(),
        r = T0();
    function n(i) {
        var a = t(i);
        return a.length == 1 && a[0][2]
            ? r(a[0][0], a[0][1])
            : function (o) {
                  return o === i || e(o, i, a);
              };
    }
    return (jc = n), jc;
}
var Mc, mv;
function cA() {
    if (mv) return Mc;
    mv = 1;
    function e(t, r) {
        return t != null && r in Object(t);
    }
    return (Mc = e), Mc;
}
var $c, gv;
function sA() {
    if (gv) return $c;
    gv = 1;
    var e = Kb(),
        t = th(),
        r = Le(),
        n = rh(),
        i = nh(),
        a = Na();
    function o(u, c, s) {
        c = e(c, u);
        for (var f = -1, l = c.length, h = !1; ++f < l; ) {
            var p = a(c[f]);
            if (!(h = u != null && s(u, p))) break;
            u = u[p];
        }
        return h || ++f != l
            ? h
            : ((l = u == null ? 0 : u.length),
              !!l && i(l) && n(p, l) && (r(u) || t(u)));
    }
    return ($c = o), $c;
}
var Cc, bv;
function lA() {
    if (bv) return Cc;
    bv = 1;
    var e = cA(),
        t = sA();
    function r(n, i) {
        return n != null && t(n, i, e);
    }
    return (Cc = r), Cc;
}
var Ic, xv;
function fA() {
    if (xv) return Ic;
    xv = 1;
    var e = ih(),
        t = Gb(),
        r = lA(),
        n = Bf(),
        i = P0(),
        a = T0(),
        o = Na(),
        u = 1,
        c = 2;
    function s(f, l) {
        return n(f) && i(l)
            ? a(o(f), l)
            : function (h) {
                  var p = t(h, f);
                  return p === void 0 && p === l ? r(h, f) : e(l, p, u | c);
              };
    }
    return (Ic = s), Ic;
}
var kc, wv;
function nn() {
    if (wv) return kc;
    wv = 1;
    function e(t) {
        return t;
    }
    return (kc = e), kc;
}
var Rc, Ov;
function hA() {
    if (Ov) return Rc;
    Ov = 1;
    function e(t) {
        return function (r) {
            return r == null ? void 0 : r[t];
        };
    }
    return (Rc = e), Rc;
}
var Dc, _v;
function pA() {
    if (_v) return Dc;
    _v = 1;
    var e = Kf();
    function t(r) {
        return function (n) {
            return e(n, r);
        };
    }
    return (Dc = t), Dc;
}
var Nc, Av;
function dA() {
    if (Av) return Nc;
    Av = 1;
    var e = hA(),
        t = pA(),
        r = Bf(),
        n = Na();
    function i(a) {
        return r(a) ? e(n(a)) : t(a);
    }
    return (Nc = i), Nc;
}
var qc, Sv;
function dt() {
    if (Sv) return qc;
    Sv = 1;
    var e = uA(),
        t = fA(),
        r = nn(),
        n = Le(),
        i = dA();
    function a(o) {
        return typeof o == 'function'
            ? o
            : o == null
              ? r
              : typeof o == 'object'
                ? n(o)
                    ? t(o[0], o[1])
                    : e(o)
                : i(o);
    }
    return (qc = a), qc;
}
var Lc, Pv;
function E0() {
    if (Pv) return Lc;
    Pv = 1;
    function e(t, r, n, i) {
        for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
            if (r(t[o], o, t)) return o;
        return -1;
    }
    return (Lc = e), Lc;
}
var Bc, Tv;
function vA() {
    if (Tv) return Bc;
    Tv = 1;
    function e(t) {
        return t !== t;
    }
    return (Bc = e), Bc;
}
var Fc, Ev;
function yA() {
    if (Ev) return Fc;
    Ev = 1;
    function e(t, r, n) {
        for (var i = n - 1, a = t.length; ++i < a; ) if (t[i] === r) return i;
        return -1;
    }
    return (Fc = e), Fc;
}
var zc, jv;
function mA() {
    if (jv) return zc;
    jv = 1;
    var e = E0(),
        t = vA(),
        r = yA();
    function n(i, a, o) {
        return a === a ? r(i, a, o) : e(i, t, o);
    }
    return (zc = n), zc;
}
var Wc, Mv;
function gA() {
    if (Mv) return Wc;
    Mv = 1;
    var e = mA();
    function t(r, n) {
        var i = r == null ? 0 : r.length;
        return !!i && e(r, n, 0) > -1;
    }
    return (Wc = t), Wc;
}
var Uc, $v;
function bA() {
    if ($v) return Uc;
    $v = 1;
    function e(t, r, n) {
        for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
            if (n(r, t[i])) return !0;
        return !1;
    }
    return (Uc = e), Uc;
}
var Hc, Cv;
function xA() {
    if (Cv) return Hc;
    Cv = 1;
    function e() {}
    return (Hc = e), Hc;
}
var Kc, Iv;
function wA() {
    if (Iv) return Kc;
    Iv = 1;
    var e = S0(),
        t = xA(),
        r = eh(),
        n = 1 / 0,
        i =
            e && 1 / r(new e([, -0]))[1] == n
                ? function (a) {
                      return new e(a);
                  }
                : t;
    return (Kc = i), Kc;
}
var Gc, kv;
function OA() {
    if (kv) return Gc;
    kv = 1;
    var e = y0(),
        t = gA(),
        r = bA(),
        n = g0(),
        i = wA(),
        a = eh(),
        o = 200;
    function u(c, s, f) {
        var l = -1,
            h = t,
            p = c.length,
            y = !0,
            v = [],
            d = v;
        if (f) (y = !1), (h = r);
        else if (p >= o) {
            var g = s ? null : i(c);
            if (g) return a(g);
            (y = !1), (h = n), (d = new e());
        } else d = s ? [] : v;
        e: for (; ++l < p; ) {
            var x = c[l],
                w = s ? s(x) : x;
            if (((x = f || x !== 0 ? x : 0), y && w === w)) {
                for (var O = d.length; O--; ) if (d[O] === w) continue e;
                s && d.push(w), v.push(x);
            } else h(d, w, f) || (d !== v && d.push(w), v.push(x));
        }
        return v;
    }
    return (Gc = u), Gc;
}
var Vc, Rv;
function _A() {
    if (Rv) return Vc;
    Rv = 1;
    var e = dt(),
        t = OA();
    function r(n, i) {
        return n && n.length ? t(n, e(i, 2)) : [];
    }
    return (Vc = r), Vc;
}
var AA = _A();
const Dv = ce(AA);
function j0(e, t, r) {
    return t === !0 ? Dv(e, r) : Y(t) ? Dv(e, t) : e;
}
function Er(e) {
    '@babel/helpers - typeof';
    return (
        (Er =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Er(e)
    );
}
var SA = ['ref'];
function Nv(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function vt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Nv(Object(r), !0).forEach(function (n) {
                  Wa(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Nv(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function PA(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function qv(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, $0(n.key), n);
    }
}
function TA(e, t, r) {
    return (
        t && qv(e.prototype, t),
        r && qv(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function EA(e, t, r) {
    return (
        (t = zi(t)),
        jA(
            e,
            M0()
                ? Reflect.construct(t, r || [], zi(e).constructor)
                : t.apply(e, r)
        )
    );
}
function jA(e, t) {
    if (t && (Er(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return MA(e);
}
function MA(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function M0() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (M0 = function () {
        return !!e;
    })();
}
function zi(e) {
    return (
        (zi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        zi(e)
    );
}
function $A(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Ml(e, t);
}
function Ml(e, t) {
    return (
        (Ml = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Ml(e, t)
    );
}
function Wa(e, t, r) {
    return (
        (t = $0(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function $0(e) {
    var t = CA(e, 'string');
    return Er(t) == 'symbol' ? t : t + '';
}
function CA(e, t) {
    if (Er(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Er(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
function IA(e, t) {
    if (e == null) return {};
    var r = kA(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function kA(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function RA(e) {
    return e.value;
}
function DA(e, t) {
    if (S.isValidElement(e)) return S.cloneElement(e, t);
    if (typeof e == 'function') return S.createElement(e, t);
    t.ref;
    var r = IA(t, SA);
    return S.createElement(Qf, r);
}
var Lv = 1,
    wt = (function (e) {
        function t() {
            var r;
            PA(this, t);
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                i[a] = arguments[a];
            return (
                (r = EA(this, t, [].concat(i))),
                Wa(r, 'lastBoundingBox', { width: -1, height: -1 }),
                r
            );
        }
        return (
            $A(t, e),
            TA(
                t,
                [
                    {
                        key: 'componentDidMount',
                        value: function () {
                            this.updateBBox();
                        },
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function () {
                            this.updateBBox();
                        },
                    },
                    {
                        key: 'getBBox',
                        value: function () {
                            if (
                                this.wrapperNode &&
                                this.wrapperNode.getBoundingClientRect
                            ) {
                                var n =
                                    this.wrapperNode.getBoundingClientRect();
                                return (
                                    (n.height = this.wrapperNode.offsetHeight),
                                    (n.width = this.wrapperNode.offsetWidth),
                                    n
                                );
                            }
                            return null;
                        },
                    },
                    {
                        key: 'updateBBox',
                        value: function () {
                            var n = this.props.onBBoxUpdate,
                                i = this.getBBox();
                            i
                                ? (Math.abs(
                                      i.width - this.lastBoundingBox.width
                                  ) > Lv ||
                                      Math.abs(
                                          i.height - this.lastBoundingBox.height
                                      ) > Lv) &&
                                  ((this.lastBoundingBox.width = i.width),
                                  (this.lastBoundingBox.height = i.height),
                                  n && n(i))
                                : (this.lastBoundingBox.width !== -1 ||
                                      this.lastBoundingBox.height !== -1) &&
                                  ((this.lastBoundingBox.width = -1),
                                  (this.lastBoundingBox.height = -1),
                                  n && n(null));
                        },
                    },
                    {
                        key: 'getBBoxSnapshot',
                        value: function () {
                            return this.lastBoundingBox.width >= 0 &&
                                this.lastBoundingBox.height >= 0
                                ? vt({}, this.lastBoundingBox)
                                : { width: 0, height: 0 };
                        },
                    },
                    {
                        key: 'getDefaultPosition',
                        value: function (n) {
                            var i = this.props,
                                a = i.layout,
                                o = i.align,
                                u = i.verticalAlign,
                                c = i.margin,
                                s = i.chartWidth,
                                f = i.chartHeight,
                                l,
                                h;
                            if (
                                !n ||
                                ((n.left === void 0 || n.left === null) &&
                                    (n.right === void 0 || n.right === null))
                            )
                                if (o === 'center' && a === 'vertical') {
                                    var p = this.getBBoxSnapshot();
                                    l = { left: ((s || 0) - p.width) / 2 };
                                } else
                                    l =
                                        o === 'right'
                                            ? { right: (c && c.right) || 0 }
                                            : { left: (c && c.left) || 0 };
                            if (
                                !n ||
                                ((n.top === void 0 || n.top === null) &&
                                    (n.bottom === void 0 || n.bottom === null))
                            )
                                if (u === 'middle') {
                                    var y = this.getBBoxSnapshot();
                                    h = { top: ((f || 0) - y.height) / 2 };
                                } else
                                    h =
                                        u === 'bottom'
                                            ? { bottom: (c && c.bottom) || 0 }
                                            : { top: (c && c.top) || 0 };
                            return vt(vt({}, l), h);
                        },
                    },
                    {
                        key: 'render',
                        value: function () {
                            var n = this,
                                i = this.props,
                                a = i.content,
                                o = i.width,
                                u = i.height,
                                c = i.wrapperStyle,
                                s = i.payloadUniqBy,
                                f = i.payload,
                                l = vt(
                                    vt(
                                        {
                                            position: 'absolute',
                                            width: o || 'auto',
                                            height: u || 'auto',
                                        },
                                        this.getDefaultPosition(c)
                                    ),
                                    c
                                );
                            return S.createElement(
                                'div',
                                {
                                    className: 'recharts-legend-wrapper',
                                    style: l,
                                    ref: function (p) {
                                        n.wrapperNode = p;
                                    },
                                },
                                DA(
                                    a,
                                    vt(
                                        vt({}, this.props),
                                        {},
                                        { payload: j0(f, s, RA) }
                                    )
                                )
                            );
                        },
                    },
                ],
                [
                    {
                        key: 'getWithHeight',
                        value: function (n, i) {
                            var a = vt(vt({}, this.defaultProps), n.props),
                                o = a.layout;
                            return o === 'vertical' && N(n.props.height)
                                ? { height: n.props.height }
                                : o === 'horizontal'
                                  ? { width: n.props.width || i }
                                  : null;
                        },
                    },
                ]
            )
        );
    })(q.PureComponent);
Wa(wt, 'displayName', 'Legend');
Wa(wt, 'defaultProps', {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
});
var Xc, Bv;
function NA() {
    if (Bv) return Xc;
    Bv = 1;
    var e = si(),
        t = th(),
        r = Le(),
        n = e ? e.isConcatSpreadable : void 0;
    function i(a) {
        return r(a) || t(a) || !!(n && a && a[n]);
    }
    return (Xc = i), Xc;
}
var Yc, Fv;
function C0() {
    if (Fv) return Yc;
    Fv = 1;
    var e = x0(),
        t = NA();
    function r(n, i, a, o, u) {
        var c = -1,
            s = n.length;
        for (a || (a = t), u || (u = []); ++c < s; ) {
            var f = n[c];
            i > 0 && a(f)
                ? i > 1
                    ? r(f, i - 1, a, o, u)
                    : e(u, f)
                : o || (u[u.length] = f);
        }
        return u;
    }
    return (Yc = r), Yc;
}
var Zc, zv;
function qA() {
    if (zv) return Zc;
    zv = 1;
    function e(t) {
        return function (r, n, i) {
            for (var a = -1, o = Object(r), u = i(r), c = u.length; c--; ) {
                var s = u[t ? c : ++a];
                if (n(o[s], s, o) === !1) break;
            }
            return r;
        };
    }
    return (Zc = e), Zc;
}
var Jc, Wv;
function LA() {
    if (Wv) return Jc;
    Wv = 1;
    var e = qA(),
        t = e();
    return (Jc = t), Jc;
}
var Qc, Uv;
function I0() {
    if (Uv) return Qc;
    Uv = 1;
    var e = LA(),
        t = za();
    function r(n, i) {
        return n && e(n, i, t);
    }
    return (Qc = r), Qc;
}
var es, Hv;
function BA() {
    if (Hv) return es;
    Hv = 1;
    var e = fi();
    function t(r, n) {
        return function (i, a) {
            if (i == null) return i;
            if (!e(i)) return r(i, a);
            for (
                var o = i.length, u = n ? o : -1, c = Object(i);
                (n ? u-- : ++u < o) && a(c[u], u, c) !== !1;

            );
            return i;
        };
    }
    return (es = t), es;
}
var ts, Kv;
function ah() {
    if (Kv) return ts;
    Kv = 1;
    var e = I0(),
        t = BA(),
        r = t(e);
    return (ts = r), ts;
}
var rs, Gv;
function k0() {
    if (Gv) return rs;
    Gv = 1;
    var e = ah(),
        t = fi();
    function r(n, i) {
        var a = -1,
            o = t(n) ? Array(n.length) : [];
        return (
            e(n, function (u, c, s) {
                o[++a] = i(u, c, s);
            }),
            o
        );
    }
    return (rs = r), rs;
}
var ns, Vv;
function FA() {
    if (Vv) return ns;
    Vv = 1;
    function e(t, r) {
        var n = t.length;
        for (t.sort(r); n--; ) t[n] = t[n].value;
        return t;
    }
    return (ns = e), ns;
}
var is, Xv;
function zA() {
    if (Xv) return is;
    Xv = 1;
    var e = en();
    function t(r, n) {
        if (r !== n) {
            var i = r !== void 0,
                a = r === null,
                o = r === r,
                u = e(r),
                c = n !== void 0,
                s = n === null,
                f = n === n,
                l = e(n);
            if (
                (!s && !l && !u && r > n) ||
                (u && c && f && !s && !l) ||
                (a && c && f) ||
                (!i && f) ||
                !o
            )
                return 1;
            if (
                (!a && !u && !l && r < n) ||
                (l && i && o && !a && !u) ||
                (s && i && o) ||
                (!c && o) ||
                !f
            )
                return -1;
        }
        return 0;
    }
    return (is = t), is;
}
var as, Yv;
function WA() {
    if (Yv) return as;
    Yv = 1;
    var e = zA();
    function t(r, n, i) {
        for (
            var a = -1,
                o = r.criteria,
                u = n.criteria,
                c = o.length,
                s = i.length;
            ++a < c;

        ) {
            var f = e(o[a], u[a]);
            if (f) {
                if (a >= s) return f;
                var l = i[a];
                return f * (l == 'desc' ? -1 : 1);
            }
        }
        return r.index - n.index;
    }
    return (as = t), as;
}
var os, Zv;
function UA() {
    if (Zv) return os;
    Zv = 1;
    var e = Hf(),
        t = Kf(),
        r = dt(),
        n = k0(),
        i = FA(),
        a = O0(),
        o = WA(),
        u = nn(),
        c = Le();
    function s(f, l, h) {
        l.length
            ? (l = e(l, function (v) {
                  return c(v)
                      ? function (d) {
                            return t(d, v.length === 1 ? v[0] : v);
                        }
                      : v;
              }))
            : (l = [u]);
        var p = -1;
        l = e(l, a(r));
        var y = n(f, function (v, d, g) {
            var x = e(l, function (w) {
                return w(v);
            });
            return { criteria: x, index: ++p, value: v };
        });
        return i(y, function (v, d) {
            return o(v, d, h);
        });
    }
    return (os = s), os;
}
var us, Jv;
function HA() {
    if (Jv) return us;
    Jv = 1;
    function e(t, r, n) {
        switch (n.length) {
            case 0:
                return t.call(r);
            case 1:
                return t.call(r, n[0]);
            case 2:
                return t.call(r, n[0], n[1]);
            case 3:
                return t.call(r, n[0], n[1], n[2]);
        }
        return t.apply(r, n);
    }
    return (us = e), us;
}
var cs, Qv;
function KA() {
    if (Qv) return cs;
    Qv = 1;
    var e = HA(),
        t = Math.max;
    function r(n, i, a) {
        return (
            (i = t(i === void 0 ? n.length - 1 : i, 0)),
            function () {
                for (
                    var o = arguments,
                        u = -1,
                        c = t(o.length - i, 0),
                        s = Array(c);
                    ++u < c;

                )
                    s[u] = o[i + u];
                u = -1;
                for (var f = Array(i + 1); ++u < i; ) f[u] = o[u];
                return (f[i] = a(s)), e(n, this, f);
            }
        );
    }
    return (cs = r), cs;
}
var ss, ey;
function GA() {
    if (ey) return ss;
    ey = 1;
    function e(t) {
        return function () {
            return t;
        };
    }
    return (ss = e), ss;
}
var ls, ty;
function R0() {
    if (ty) return ls;
    ty = 1;
    var e = cr(),
        t = (function () {
            try {
                var r = e(Object, 'defineProperty');
                return r({}, '', {}), r;
            } catch {}
        })();
    return (ls = t), ls;
}
var fs, ry;
function VA() {
    if (ry) return fs;
    ry = 1;
    var e = GA(),
        t = R0(),
        r = nn(),
        n = t
            ? function (i, a) {
                  return t(i, 'toString', {
                      configurable: !0,
                      enumerable: !1,
                      value: e(a),
                      writable: !0,
                  });
              }
            : r;
    return (fs = n), fs;
}
var hs, ny;
function XA() {
    if (ny) return hs;
    ny = 1;
    var e = 800,
        t = 16,
        r = Date.now;
    function n(i) {
        var a = 0,
            o = 0;
        return function () {
            var u = r(),
                c = t - (u - o);
            if (((o = u), c > 0)) {
                if (++a >= e) return arguments[0];
            } else a = 0;
            return i.apply(void 0, arguments);
        };
    }
    return (hs = n), hs;
}
var ps, iy;
function YA() {
    if (iy) return ps;
    iy = 1;
    var e = VA(),
        t = XA(),
        r = t(e);
    return (ps = r), ps;
}
var ds, ay;
function ZA() {
    if (ay) return ds;
    ay = 1;
    var e = nn(),
        t = KA(),
        r = YA();
    function n(i, a) {
        return r(t(i, a, e), i + '');
    }
    return (ds = n), ds;
}
var vs, oy;
function Ua() {
    if (oy) return vs;
    oy = 1;
    var e = zf(),
        t = fi(),
        r = rh(),
        n = Nt();
    function i(a, o, u) {
        if (!n(u)) return !1;
        var c = typeof o;
        return (
            c == 'number' ? t(u) && r(o, u.length) : c == 'string' && o in u
        )
            ? e(u[o], a)
            : !1;
    }
    return (vs = i), vs;
}
var ys, uy;
function JA() {
    if (uy) return ys;
    uy = 1;
    var e = C0(),
        t = UA(),
        r = ZA(),
        n = Ua(),
        i = r(function (a, o) {
            if (a == null) return [];
            var u = o.length;
            return (
                u > 1 && n(a, o[0], o[1])
                    ? (o = [])
                    : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]),
                t(a, e(o, 1), [])
            );
        });
    return (ys = i), ys;
}
var QA = JA();
const oh = ce(QA);
function Mn(e) {
    '@babel/helpers - typeof';
    return (
        (Mn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Mn(e)
    );
}
function $l() {
    return (
        ($l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        $l.apply(this, arguments)
    );
}
function eS(e, t) {
    return iS(e) || nS(e, t) || rS(e, t) || tS();
}
function tS() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rS(e, t) {
    if (e) {
        if (typeof e == 'string') return cy(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return cy(e, t);
    }
}
function cy(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function nS(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function iS(e) {
    if (Array.isArray(e)) return e;
}
function sy(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function ms(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? sy(Object(r), !0).forEach(function (n) {
                  aS(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : sy(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function aS(e, t, r) {
    return (
        (t = oS(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function oS(e) {
    var t = uS(e, 'string');
    return Mn(t) == 'symbol' ? t : t + '';
}
function uS(e, t) {
    if (Mn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Mn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function cS(e) {
    return Array.isArray(e) && Ae(e[0]) && Ae(e[1]) ? e.join(' ~ ') : e;
}
var sS = function (t) {
    var r = t.separator,
        n = r === void 0 ? ' : ' : r,
        i = t.contentStyle,
        a = i === void 0 ? {} : i,
        o = t.itemStyle,
        u = o === void 0 ? {} : o,
        c = t.labelStyle,
        s = c === void 0 ? {} : c,
        f = t.payload,
        l = t.formatter,
        h = t.itemSorter,
        p = t.wrapperClassName,
        y = t.labelClassName,
        v = t.label,
        d = t.labelFormatter,
        g = t.accessibilityLayer,
        x = g === void 0 ? !1 : g,
        w = function () {
            if (f && f.length) {
                var E = { padding: 0, margin: 0 },
                    j = (h ? oh(f, h) : f).map(function (C, $) {
                        if (C.type === 'none') return null;
                        var k = ms(
                                {
                                    display: 'block',
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    color: C.color || '#000',
                                },
                                u
                            ),
                            R = C.formatter || l || cS,
                            L = C.value,
                            B = C.name,
                            U = L,
                            G = B;
                        if (R && U != null && G != null) {
                            var z = R(L, B, C, $, f);
                            if (Array.isArray(z)) {
                                var V = eS(z, 2);
                                (U = V[0]), (G = V[1]);
                            } else U = z;
                        }
                        return S.createElement(
                            'li',
                            {
                                className: 'recharts-tooltip-item',
                                key: 'tooltip-item-'.concat($),
                                style: k,
                            },
                            Ae(G)
                                ? S.createElement(
                                      'span',
                                      {
                                          className:
                                              'recharts-tooltip-item-name',
                                      },
                                      G
                                  )
                                : null,
                            Ae(G)
                                ? S.createElement(
                                      'span',
                                      {
                                          className:
                                              'recharts-tooltip-item-separator',
                                      },
                                      n
                                  )
                                : null,
                            S.createElement(
                                'span',
                                { className: 'recharts-tooltip-item-value' },
                                U
                            ),
                            S.createElement(
                                'span',
                                { className: 'recharts-tooltip-item-unit' },
                                C.unit || ''
                            )
                        );
                    });
                return S.createElement(
                    'ul',
                    { className: 'recharts-tooltip-item-list', style: E },
                    j
                );
            }
            return null;
        },
        O = ms(
            {
                margin: 0,
                padding: 10,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                whiteSpace: 'nowrap',
            },
            a
        ),
        m = ms({ margin: 0 }, s),
        b = !Z(v),
        _ = b ? v : '',
        A = Q('recharts-default-tooltip', p),
        T = Q('recharts-tooltip-label', y);
    b && d && f !== void 0 && f !== null && (_ = d(v, f));
    var M = x ? { role: 'status', 'aria-live': 'assertive' } : {};
    return S.createElement(
        'div',
        $l({ className: A, style: O }, M),
        S.createElement(
            'p',
            { className: T, style: m },
            S.isValidElement(_) ? _ : ''.concat(_)
        ),
        w()
    );
};
function $n(e) {
    '@babel/helpers - typeof';
    return (
        ($n =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        $n(e)
    );
}
function wi(e, t, r) {
    return (
        (t = lS(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function lS(e) {
    var t = fS(e, 'string');
    return $n(t) == 'symbol' ? t : t + '';
}
function fS(e, t) {
    if ($n(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if ($n(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var sn = 'recharts-tooltip-wrapper',
    hS = { visibility: 'hidden' };
function pS(e) {
    var t = e.coordinate,
        r = e.translateX,
        n = e.translateY;
    return Q(
        sn,
        wi(
            wi(
                wi(
                    wi(
                        {},
                        ''.concat(sn, '-right'),
                        N(r) && t && N(t.x) && r >= t.x
                    ),
                    ''.concat(sn, '-left'),
                    N(r) && t && N(t.x) && r < t.x
                ),
                ''.concat(sn, '-bottom'),
                N(n) && t && N(t.y) && n >= t.y
            ),
            ''.concat(sn, '-top'),
            N(n) && t && N(t.y) && n < t.y
        )
    );
}
function ly(e) {
    var t = e.allowEscapeViewBox,
        r = e.coordinate,
        n = e.key,
        i = e.offsetTopLeft,
        a = e.position,
        o = e.reverseDirection,
        u = e.tooltipDimension,
        c = e.viewBox,
        s = e.viewBoxDimension;
    if (a && N(a[n])) return a[n];
    var f = r[n] - u - i,
        l = r[n] + i;
    if (t[n]) return o[n] ? f : l;
    if (o[n]) {
        var h = f,
            p = c[n];
        return h < p ? Math.max(l, c[n]) : Math.max(f, c[n]);
    }
    var y = l + u,
        v = c[n] + s;
    return y > v ? Math.max(f, c[n]) : Math.max(l, c[n]);
}
function dS(e) {
    var t = e.translateX,
        r = e.translateY,
        n = e.useTranslate3d;
    return {
        transform: n
            ? 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0)')
            : 'translate('.concat(t, 'px, ').concat(r, 'px)'),
    };
}
function vS(e) {
    var t = e.allowEscapeViewBox,
        r = e.coordinate,
        n = e.offsetTopLeft,
        i = e.position,
        a = e.reverseDirection,
        o = e.tooltipBox,
        u = e.useTranslate3d,
        c = e.viewBox,
        s,
        f,
        l;
    return (
        o.height > 0 && o.width > 0 && r
            ? ((f = ly({
                  allowEscapeViewBox: t,
                  coordinate: r,
                  key: 'x',
                  offsetTopLeft: n,
                  position: i,
                  reverseDirection: a,
                  tooltipDimension: o.width,
                  viewBox: c,
                  viewBoxDimension: c.width,
              })),
              (l = ly({
                  allowEscapeViewBox: t,
                  coordinate: r,
                  key: 'y',
                  offsetTopLeft: n,
                  position: i,
                  reverseDirection: a,
                  tooltipDimension: o.height,
                  viewBox: c,
                  viewBoxDimension: c.height,
              })),
              (s = dS({ translateX: f, translateY: l, useTranslate3d: u })))
            : (s = hS),
        {
            cssProperties: s,
            cssClasses: pS({ translateX: f, translateY: l, coordinate: r }),
        }
    );
}
function jr(e) {
    '@babel/helpers - typeof';
    return (
        (jr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        jr(e)
    );
}
function fy(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function hy(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? fy(Object(r), !0).forEach(function (n) {
                  Il(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : fy(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function yS(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function mS(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, N0(n.key), n);
    }
}
function gS(e, t, r) {
    return (
        t && mS(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function bS(e, t, r) {
    return (
        (t = Wi(t)),
        xS(
            e,
            D0()
                ? Reflect.construct(t, r || [], Wi(e).constructor)
                : t.apply(e, r)
        )
    );
}
function xS(e, t) {
    if (t && (jr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return wS(e);
}
function wS(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function D0() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (D0 = function () {
        return !!e;
    })();
}
function Wi(e) {
    return (
        (Wi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Wi(e)
    );
}
function OS(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Cl(e, t);
}
function Cl(e, t) {
    return (
        (Cl = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Cl(e, t)
    );
}
function Il(e, t, r) {
    return (
        (t = N0(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function N0(e) {
    var t = _S(e, 'string');
    return jr(t) == 'symbol' ? t : t + '';
}
function _S(e, t) {
    if (jr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (jr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var py = 1,
    AS = (function (e) {
        function t() {
            var r;
            yS(this, t);
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                i[a] = arguments[a];
            return (
                (r = bS(this, t, [].concat(i))),
                Il(r, 'state', {
                    dismissed: !1,
                    dismissedAtCoordinate: { x: 0, y: 0 },
                    lastBoundingBox: { width: -1, height: -1 },
                }),
                Il(r, 'handleKeyDown', function (o) {
                    if (o.key === 'Escape') {
                        var u, c, s, f;
                        r.setState({
                            dismissed: !0,
                            dismissedAtCoordinate: {
                                x:
                                    (u =
                                        (c = r.props.coordinate) === null ||
                                        c === void 0
                                            ? void 0
                                            : c.x) !== null && u !== void 0
                                        ? u
                                        : 0,
                                y:
                                    (s =
                                        (f = r.props.coordinate) === null ||
                                        f === void 0
                                            ? void 0
                                            : f.y) !== null && s !== void 0
                                        ? s
                                        : 0,
                            },
                        });
                    }
                }),
                r
            );
        }
        return (
            OS(t, e),
            gS(t, [
                {
                    key: 'updateBBox',
                    value: function () {
                        if (
                            this.wrapperNode &&
                            this.wrapperNode.getBoundingClientRect
                        ) {
                            var n = this.wrapperNode.getBoundingClientRect();
                            (Math.abs(
                                n.width - this.state.lastBoundingBox.width
                            ) > py ||
                                Math.abs(
                                    n.height - this.state.lastBoundingBox.height
                                ) > py) &&
                                this.setState({
                                    lastBoundingBox: {
                                        width: n.width,
                                        height: n.height,
                                    },
                                });
                        } else
                            (this.state.lastBoundingBox.width !== -1 ||
                                this.state.lastBoundingBox.height !== -1) &&
                                this.setState({
                                    lastBoundingBox: { width: -1, height: -1 },
                                });
                    },
                },
                {
                    key: 'componentDidMount',
                    value: function () {
                        document.addEventListener(
                            'keydown',
                            this.handleKeyDown
                        ),
                            this.updateBBox();
                    },
                },
                {
                    key: 'componentWillUnmount',
                    value: function () {
                        document.removeEventListener(
                            'keydown',
                            this.handleKeyDown
                        );
                    },
                },
                {
                    key: 'componentDidUpdate',
                    value: function () {
                        var n, i;
                        this.props.active && this.updateBBox(),
                            this.state.dismissed &&
                                (((n = this.props.coordinate) === null ||
                                n === void 0
                                    ? void 0
                                    : n.x) !==
                                    this.state.dismissedAtCoordinate.x ||
                                    ((i = this.props.coordinate) === null ||
                                    i === void 0
                                        ? void 0
                                        : i.y) !==
                                        this.state.dismissedAtCoordinate.y) &&
                                (this.state.dismissed = !1);
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.active,
                            o = i.allowEscapeViewBox,
                            u = i.animationDuration,
                            c = i.animationEasing,
                            s = i.children,
                            f = i.coordinate,
                            l = i.hasPayload,
                            h = i.isAnimationActive,
                            p = i.offset,
                            y = i.position,
                            v = i.reverseDirection,
                            d = i.useTranslate3d,
                            g = i.viewBox,
                            x = i.wrapperStyle,
                            w = vS({
                                allowEscapeViewBox: o,
                                coordinate: f,
                                offsetTopLeft: p,
                                position: y,
                                reverseDirection: v,
                                tooltipBox: this.state.lastBoundingBox,
                                useTranslate3d: d,
                                viewBox: g,
                            }),
                            O = w.cssClasses,
                            m = w.cssProperties,
                            b = hy(
                                hy(
                                    {
                                        transition:
                                            h && a
                                                ? 'transform '
                                                      .concat(u, 'ms ')
                                                      .concat(c)
                                                : void 0,
                                    },
                                    m
                                ),
                                {},
                                {
                                    pointerEvents: 'none',
                                    visibility:
                                        !this.state.dismissed && a && l
                                            ? 'visible'
                                            : 'hidden',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                },
                                x
                            );
                        return S.createElement(
                            'div',
                            {
                                tabIndex: -1,
                                className: O,
                                style: b,
                                ref: function (A) {
                                    n.wrapperNode = A;
                                },
                            },
                            s
                        );
                    },
                },
            ])
        );
    })(q.PureComponent),
    SS = function () {
        return !(
            typeof window < 'u' &&
            window.document &&
            window.document.createElement &&
            window.setTimeout
        );
    },
    sr = { isSsr: SS() };
function Mr(e) {
    '@babel/helpers - typeof';
    return (
        (Mr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Mr(e)
    );
}
function dy(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function vy(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? dy(Object(r), !0).forEach(function (n) {
                  uh(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : dy(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function PS(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function TS(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, L0(n.key), n);
    }
}
function ES(e, t, r) {
    return (
        t && TS(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function jS(e, t, r) {
    return (
        (t = Ui(t)),
        MS(
            e,
            q0()
                ? Reflect.construct(t, r || [], Ui(e).constructor)
                : t.apply(e, r)
        )
    );
}
function MS(e, t) {
    if (t && (Mr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return $S(e);
}
function $S(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function q0() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (q0 = function () {
        return !!e;
    })();
}
function Ui(e) {
    return (
        (Ui = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ui(e)
    );
}
function CS(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && kl(e, t);
}
function kl(e, t) {
    return (
        (kl = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        kl(e, t)
    );
}
function uh(e, t, r) {
    return (
        (t = L0(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function L0(e) {
    var t = IS(e, 'string');
    return Mr(t) == 'symbol' ? t : t + '';
}
function IS(e, t) {
    if (Mr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Mr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
function kS(e) {
    return e.dataKey;
}
function RS(e, t) {
    return S.isValidElement(e)
        ? S.cloneElement(e, t)
        : typeof e == 'function'
          ? S.createElement(e, t)
          : S.createElement(sS, t);
}
var Ye = (function (e) {
    function t() {
        return PS(this, t), jS(this, t, arguments);
    }
    return (
        CS(t, e),
        ES(t, [
            {
                key: 'render',
                value: function () {
                    var n = this,
                        i = this.props,
                        a = i.active,
                        o = i.allowEscapeViewBox,
                        u = i.animationDuration,
                        c = i.animationEasing,
                        s = i.content,
                        f = i.coordinate,
                        l = i.filterNull,
                        h = i.isAnimationActive,
                        p = i.offset,
                        y = i.payload,
                        v = i.payloadUniqBy,
                        d = i.position,
                        g = i.reverseDirection,
                        x = i.useTranslate3d,
                        w = i.viewBox,
                        O = i.wrapperStyle,
                        m = y ?? [];
                    l &&
                        m.length &&
                        (m = j0(
                            y.filter(function (_) {
                                return (
                                    _.value != null &&
                                    (_.hide !== !0 || n.props.includeHidden)
                                );
                            }),
                            v,
                            kS
                        ));
                    var b = m.length > 0;
                    return S.createElement(
                        AS,
                        {
                            allowEscapeViewBox: o,
                            animationDuration: u,
                            animationEasing: c,
                            isAnimationActive: h,
                            active: a,
                            coordinate: f,
                            hasPayload: b,
                            offset: p,
                            position: d,
                            reverseDirection: g,
                            useTranslate3d: x,
                            viewBox: w,
                            wrapperStyle: O,
                        },
                        RS(s, vy(vy({}, this.props), {}, { payload: m }))
                    );
                },
            },
        ])
    );
})(q.PureComponent);
uh(Ye, 'displayName', 'Tooltip');
uh(Ye, 'defaultProps', {
    accessibilityLayer: !1,
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: 'ease',
    contentStyle: {},
    coordinate: { x: 0, y: 0 },
    cursor: !0,
    cursorStyle: {},
    filterNull: !0,
    isAnimationActive: !sr.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: ' : ',
    trigger: 'hover',
    useTranslate3d: !1,
    viewBox: { x: 0, y: 0, height: 0, width: 0 },
    wrapperStyle: {},
});
var gs, yy;
function DS() {
    if (yy) return gs;
    yy = 1;
    var e = pt(),
        t = function () {
            return e.Date.now();
        };
    return (gs = t), gs;
}
var bs, my;
function NS() {
    if (my) return bs;
    my = 1;
    var e = /\s/;
    function t(r) {
        for (var n = r.length; n-- && e.test(r.charAt(n)); );
        return n;
    }
    return (bs = t), bs;
}
var xs, gy;
function qS() {
    if (gy) return xs;
    gy = 1;
    var e = NS(),
        t = /^\s+/;
    function r(n) {
        return n && n.slice(0, e(n) + 1).replace(t, '');
    }
    return (xs = r), xs;
}
var ws, by;
function B0() {
    if (by) return ws;
    by = 1;
    var e = qS(),
        t = Nt(),
        r = en(),
        n = NaN,
        i = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        u = parseInt;
    function c(s) {
        if (typeof s == 'number') return s;
        if (r(s)) return n;
        if (t(s)) {
            var f = typeof s.valueOf == 'function' ? s.valueOf() : s;
            s = t(f) ? f + '' : f;
        }
        if (typeof s != 'string') return s === 0 ? s : +s;
        s = e(s);
        var l = a.test(s);
        return l || o.test(s) ? u(s.slice(2), l ? 2 : 8) : i.test(s) ? n : +s;
    }
    return (ws = c), ws;
}
var Os, xy;
function LS() {
    if (xy) return Os;
    xy = 1;
    var e = Nt(),
        t = DS(),
        r = B0(),
        n = 'Expected a function',
        i = Math.max,
        a = Math.min;
    function o(u, c, s) {
        var f,
            l,
            h,
            p,
            y,
            v,
            d = 0,
            g = !1,
            x = !1,
            w = !0;
        if (typeof u != 'function') throw new TypeError(n);
        (c = r(c) || 0),
            e(s) &&
                ((g = !!s.leading),
                (x = 'maxWait' in s),
                (h = x ? i(r(s.maxWait) || 0, c) : h),
                (w = 'trailing' in s ? !!s.trailing : w));
        function O(j) {
            var C = f,
                $ = l;
            return (f = l = void 0), (d = j), (p = u.apply($, C)), p;
        }
        function m(j) {
            return (d = j), (y = setTimeout(A, c)), g ? O(j) : p;
        }
        function b(j) {
            var C = j - v,
                $ = j - d,
                k = c - C;
            return x ? a(k, h - $) : k;
        }
        function _(j) {
            var C = j - v,
                $ = j - d;
            return v === void 0 || C >= c || C < 0 || (x && $ >= h);
        }
        function A() {
            var j = t();
            if (_(j)) return T(j);
            y = setTimeout(A, b(j));
        }
        function T(j) {
            return (y = void 0), w && f ? O(j) : ((f = l = void 0), p);
        }
        function M() {
            y !== void 0 && clearTimeout(y), (d = 0), (f = v = l = y = void 0);
        }
        function P() {
            return y === void 0 ? p : T(t());
        }
        function E() {
            var j = t(),
                C = _(j);
            if (((f = arguments), (l = this), (v = j), C)) {
                if (y === void 0) return m(v);
                if (x) return clearTimeout(y), (y = setTimeout(A, c)), O(v);
            }
            return y === void 0 && (y = setTimeout(A, c)), p;
        }
        return (E.cancel = M), (E.flush = P), E;
    }
    return (Os = o), Os;
}
var _s, wy;
function BS() {
    if (wy) return _s;
    wy = 1;
    var e = LS(),
        t = Nt(),
        r = 'Expected a function';
    function n(i, a, o) {
        var u = !0,
            c = !0;
        if (typeof i != 'function') throw new TypeError(r);
        return (
            t(o) &&
                ((u = 'leading' in o ? !!o.leading : u),
                (c = 'trailing' in o ? !!o.trailing : c)),
            e(i, a, { leading: u, maxWait: a, trailing: c })
        );
    }
    return (_s = n), _s;
}
var FS = BS();
const F0 = ce(FS);
function Cn(e) {
    '@babel/helpers - typeof';
    return (
        (Cn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Cn(e)
    );
}
function Oy(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Oi(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Oy(Object(r), !0).forEach(function (n) {
                  zS(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Oy(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function zS(e, t, r) {
    return (
        (t = WS(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function WS(e) {
    var t = US(e, 'string');
    return Cn(t) == 'symbol' ? t : t + '';
}
function US(e, t) {
    if (Cn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Cn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function HS(e, t) {
    return XS(e) || VS(e, t) || GS(e, t) || KS();
}
function KS() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GS(e, t) {
    if (e) {
        if (typeof e == 'string') return _y(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return _y(e, t);
    }
}
function _y(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function VS(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function XS(e) {
    if (Array.isArray(e)) return e;
}
var As = q.forwardRef(function (e, t) {
        var r = e.aspect,
            n = e.initialDimension,
            i = n === void 0 ? { width: -1, height: -1 } : n,
            a = e.width,
            o = a === void 0 ? '100%' : a,
            u = e.height,
            c = u === void 0 ? '100%' : u,
            s = e.minWidth,
            f = s === void 0 ? 0 : s,
            l = e.minHeight,
            h = e.maxHeight,
            p = e.children,
            y = e.debounce,
            v = y === void 0 ? 0 : y,
            d = e.id,
            g = e.className,
            x = e.onResize,
            w = e.style,
            O = w === void 0 ? {} : w,
            m = q.useRef(null),
            b = q.useRef();
        (b.current = x),
            q.useImperativeHandle(t, function () {
                return Object.defineProperty(m.current, 'current', {
                    get: function () {
                        return (
                            console.warn(
                                'The usage of ref.current.current is deprecated and will no longer be supported.'
                            ),
                            m.current
                        );
                    },
                    configurable: !0,
                });
            });
        var _ = q.useState({
                containerWidth: i.width,
                containerHeight: i.height,
            }),
            A = HS(_, 2),
            T = A[0],
            M = A[1],
            P = q.useCallback(function (j, C) {
                M(function ($) {
                    var k = Math.round(j),
                        R = Math.round(C);
                    return $.containerWidth === k && $.containerHeight === R
                        ? $
                        : { containerWidth: k, containerHeight: R };
                });
            }, []);
        q.useEffect(
            function () {
                var j = function (B) {
                    var U,
                        G = B[0].contentRect,
                        z = G.width,
                        V = G.height;
                    P(z, V),
                        (U = b.current) === null ||
                            U === void 0 ||
                            U.call(b, z, V);
                };
                v > 0 && (j = F0(j, v, { trailing: !0, leading: !1 }));
                var C = new ResizeObserver(j),
                    $ = m.current.getBoundingClientRect(),
                    k = $.width,
                    R = $.height;
                return (
                    P(k, R),
                    C.observe(m.current),
                    function () {
                        C.disconnect();
                    }
                );
            },
            [P, v]
        );
        var E = q.useMemo(
            function () {
                var j = T.containerWidth,
                    C = T.containerHeight;
                if (j < 0 || C < 0) return null;
                ot(
                    Yt(o) || Yt(c),
                    `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
                    o,
                    c
                ),
                    ot(
                        !r || r > 0,
                        'The aspect(%s) must be greater than zero.',
                        r
                    );
                var $ = Yt(o) ? j : o,
                    k = Yt(c) ? C : c;
                r &&
                    r > 0 &&
                    ($ ? (k = $ / r) : k && ($ = k * r), h && k > h && (k = h)),
                    ot(
                        $ > 0 || k > 0,
                        `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
                        $,
                        k,
                        o,
                        c,
                        f,
                        l,
                        r
                    );
                var R = !Array.isArray(p) && xt(p.type).endsWith('Chart');
                return S.Children.map(p, function (L) {
                    return S.isValidElement(L)
                        ? q.cloneElement(
                              L,
                              Oi(
                                  { width: $, height: k },
                                  R
                                      ? {
                                            style: Oi(
                                                {
                                                    height: '100%',
                                                    width: '100%',
                                                    maxHeight: k,
                                                    maxWidth: $,
                                                },
                                                L.props.style
                                            ),
                                        }
                                      : {}
                              )
                          )
                        : L;
                });
            },
            [r, p, c, h, l, f, T, o]
        );
        return S.createElement(
            'div',
            {
                id: d ? ''.concat(d) : void 0,
                className: Q('recharts-responsive-container', g),
                style: Oi(
                    Oi({}, O),
                    {},
                    {
                        width: o,
                        height: c,
                        minWidth: f,
                        minHeight: l,
                        maxHeight: h,
                    }
                ),
                ref: m,
            },
            E
        );
    }),
    Ha = function (t) {
        return null;
    };
Ha.displayName = 'Cell';
function In(e) {
    '@babel/helpers - typeof';
    return (
        (In =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        In(e)
    );
}
function Ay(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Rl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Ay(Object(r), !0).forEach(function (n) {
                  YS(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ay(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function YS(e, t, r) {
    return (
        (t = ZS(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function ZS(e) {
    var t = JS(e, 'string');
    return In(t) == 'symbol' ? t : t + '';
}
function JS(e, t) {
    if (In(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (In(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var dr = { widthCache: {}, cacheCount: 0 },
    QS = 2e3,
    eP = {
        position: 'absolute',
        top: '-20000px',
        left: 0,
        padding: 0,
        margin: 0,
        border: 'none',
        whiteSpace: 'pre',
    },
    Sy = 'recharts_measurement_span';
function tP(e) {
    var t = Rl({}, e);
    return (
        Object.keys(t).forEach(function (r) {
            t[r] || delete t[r];
        }),
        t
    );
}
var wn = function (t) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t == null || sr.isSsr) return { width: 0, height: 0 };
        var n = tP(r),
            i = JSON.stringify({ text: t, copyStyle: n });
        if (dr.widthCache[i]) return dr.widthCache[i];
        try {
            var a = document.getElementById(Sy);
            a ||
                ((a = document.createElement('span')),
                a.setAttribute('id', Sy),
                a.setAttribute('aria-hidden', 'true'),
                document.body.appendChild(a));
            var o = Rl(Rl({}, eP), n);
            Object.assign(a.style, o), (a.textContent = ''.concat(t));
            var u = a.getBoundingClientRect(),
                c = { width: u.width, height: u.height };
            return (
                (dr.widthCache[i] = c),
                ++dr.cacheCount > QS &&
                    ((dr.cacheCount = 0), (dr.widthCache = {})),
                c
            );
        } catch {
            return { width: 0, height: 0 };
        }
    },
    rP = function (t) {
        return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft,
        };
    };
function kn(e) {
    '@babel/helpers - typeof';
    return (
        (kn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        kn(e)
    );
}
function Hi(e, t) {
    return oP(e) || aP(e, t) || iP(e, t) || nP();
}
function nP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iP(e, t) {
    if (e) {
        if (typeof e == 'string') return Py(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Py(e, t);
    }
}
function Py(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function aP(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t === 0)) {
                if (Object(r) !== r) return;
                c = !1;
            } else
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function oP(e) {
    if (Array.isArray(e)) return e;
}
function uP(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function Ty(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, sP(n.key), n);
    }
}
function cP(e, t, r) {
    return (
        t && Ty(e.prototype, t),
        r && Ty(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function sP(e) {
    var t = lP(e, 'string');
    return kn(t) == 'symbol' ? t : t + '';
}
function lP(e, t) {
    if (kn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (kn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var Ey = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    jy = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    fP = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
    hP = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
    z0 = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 96 / 6,
        in: 96,
        Q: 96 / (2.54 * 40),
        px: 1,
    },
    pP = Object.keys(z0),
    gr = 'NaN';
function dP(e, t) {
    return e * z0[t];
}
var _i = (function () {
    function e(t, r) {
        uP(this, e),
            (this.num = t),
            (this.unit = r),
            (this.num = t),
            (this.unit = r),
            Number.isNaN(t) && (this.unit = ''),
            r !== '' && !fP.test(r) && ((this.num = NaN), (this.unit = '')),
            pP.includes(r) && ((this.num = dP(t, r)), (this.unit = 'px'));
    }
    return cP(
        e,
        [
            {
                key: 'add',
                value: function (r) {
                    return this.unit !== r.unit
                        ? new e(NaN, '')
                        : new e(this.num + r.num, this.unit);
                },
            },
            {
                key: 'subtract',
                value: function (r) {
                    return this.unit !== r.unit
                        ? new e(NaN, '')
                        : new e(this.num - r.num, this.unit);
                },
            },
            {
                key: 'multiply',
                value: function (r) {
                    return this.unit !== '' &&
                        r.unit !== '' &&
                        this.unit !== r.unit
                        ? new e(NaN, '')
                        : new e(this.num * r.num, this.unit || r.unit);
                },
            },
            {
                key: 'divide',
                value: function (r) {
                    return this.unit !== '' &&
                        r.unit !== '' &&
                        this.unit !== r.unit
                        ? new e(NaN, '')
                        : new e(this.num / r.num, this.unit || r.unit);
                },
            },
            {
                key: 'toString',
                value: function () {
                    return ''.concat(this.num).concat(this.unit);
                },
            },
            {
                key: 'isNaN',
                value: function () {
                    return Number.isNaN(this.num);
                },
            },
        ],
        [
            {
                key: 'parse',
                value: function (r) {
                    var n,
                        i = (n = hP.exec(r)) !== null && n !== void 0 ? n : [],
                        a = Hi(i, 3),
                        o = a[1],
                        u = a[2];
                    return new e(parseFloat(o), u ?? '');
                },
            },
        ]
    );
})();
function W0(e) {
    if (e.includes(gr)) return gr;
    for (var t = e; t.includes('*') || t.includes('/'); ) {
        var r,
            n = (r = Ey.exec(t)) !== null && r !== void 0 ? r : [],
            i = Hi(n, 4),
            a = i[1],
            o = i[2],
            u = i[3],
            c = _i.parse(a ?? ''),
            s = _i.parse(u ?? ''),
            f = o === '*' ? c.multiply(s) : c.divide(s);
        if (f.isNaN()) return gr;
        t = t.replace(Ey, f.toString());
    }
    for (; t.includes('+') || /.-\d+(?:\.\d+)?/.test(t); ) {
        var l,
            h = (l = jy.exec(t)) !== null && l !== void 0 ? l : [],
            p = Hi(h, 4),
            y = p[1],
            v = p[2],
            d = p[3],
            g = _i.parse(y ?? ''),
            x = _i.parse(d ?? ''),
            w = v === '+' ? g.add(x) : g.subtract(x);
        if (w.isNaN()) return gr;
        t = t.replace(jy, w.toString());
    }
    return t;
}
var My = /\(([^()]*)\)/;
function vP(e) {
    for (var t = e; t.includes('('); ) {
        var r = My.exec(t),
            n = Hi(r, 2),
            i = n[1];
        t = t.replace(My, W0(i));
    }
    return t;
}
function yP(e) {
    var t = e.replace(/\s+/g, '');
    return (t = vP(t)), (t = W0(t)), t;
}
function mP(e) {
    try {
        return yP(e);
    } catch {
        return gr;
    }
}
function Ss(e) {
    var t = mP(e.slice(5, -1));
    return t === gr ? '' : t;
}
var gP = [
        'x',
        'y',
        'lineHeight',
        'capHeight',
        'scaleToFit',
        'textAnchor',
        'verticalAnchor',
        'fill',
    ],
    bP = ['dx', 'dy', 'angle', 'className', 'breakAll'];
function Dl() {
    return (
        (Dl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Dl.apply(this, arguments)
    );
}
function $y(e, t) {
    if (e == null) return {};
    var r = xP(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function xP(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function Cy(e, t) {
    return AP(e) || _P(e, t) || OP(e, t) || wP();
}
function wP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OP(e, t) {
    if (e) {
        if (typeof e == 'string') return Iy(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Iy(e, t);
    }
}
function Iy(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function _P(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t === 0)) {
                if (Object(r) !== r) return;
                c = !1;
            } else
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function AP(e) {
    if (Array.isArray(e)) return e;
}
var U0 = /[ \f\n\r\t\v\u2028\u2029]+/,
    H0 = function (t) {
        var r = t.children,
            n = t.breakAll,
            i = t.style;
        try {
            var a = [];
            Z(r) ||
                (n
                    ? (a = r.toString().split(''))
                    : (a = r.toString().split(U0)));
            var o = a.map(function (c) {
                    return { word: c, width: wn(c, i).width };
                }),
                u = n ? 0 : wn(' ', i).width;
            return { wordsWithComputedWidth: o, spaceWidth: u };
        } catch {
            return null;
        }
    },
    SP = function (t, r, n, i, a) {
        var o = t.maxLines,
            u = t.children,
            c = t.style,
            s = t.breakAll,
            f = N(o),
            l = u,
            h = function () {
                var $ =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [];
                return $.reduce(function (k, R) {
                    var L = R.word,
                        B = R.width,
                        U = k[k.length - 1];
                    if (U && (i == null || a || U.width + B + n < Number(i)))
                        U.words.push(L), (U.width += B + n);
                    else {
                        var G = { words: [L], width: B };
                        k.push(G);
                    }
                    return k;
                }, []);
            },
            p = h(r),
            y = function ($) {
                return $.reduce(function (k, R) {
                    return k.width > R.width ? k : R;
                });
            };
        if (!f) return p;
        for (
            var v = '…',
                d = function ($) {
                    var k = l.slice(0, $),
                        R = H0({
                            breakAll: s,
                            style: c,
                            children: k + v,
                        }).wordsWithComputedWidth,
                        L = h(R),
                        B = L.length > o || y(L).width > Number(i);
                    return [B, L];
                },
                g = 0,
                x = l.length - 1,
                w = 0,
                O;
            g <= x && w <= l.length - 1;

        ) {
            var m = Math.floor((g + x) / 2),
                b = m - 1,
                _ = d(b),
                A = Cy(_, 2),
                T = A[0],
                M = A[1],
                P = d(m),
                E = Cy(P, 1),
                j = E[0];
            if ((!T && !j && (g = m + 1), T && j && (x = m - 1), !T && j)) {
                O = M;
                break;
            }
            w++;
        }
        return O || p;
    },
    ky = function (t) {
        var r = Z(t) ? [] : t.toString().split(U0);
        return [{ words: r }];
    },
    PP = function (t) {
        var r = t.width,
            n = t.scaleToFit,
            i = t.children,
            a = t.style,
            o = t.breakAll,
            u = t.maxLines;
        if ((r || n) && !sr.isSsr) {
            var c,
                s,
                f = H0({ breakAll: o, children: i, style: a });
            if (f) {
                var l = f.wordsWithComputedWidth,
                    h = f.spaceWidth;
                (c = l), (s = h);
            } else return ky(i);
            return SP(
                { breakAll: o, children: i, maxLines: u, style: a },
                c,
                s,
                r,
                n
            );
        }
        return ky(i);
    },
    Ry = '#808080',
    ir = function (t) {
        var r = t.x,
            n = r === void 0 ? 0 : r,
            i = t.y,
            a = i === void 0 ? 0 : i,
            o = t.lineHeight,
            u = o === void 0 ? '1em' : o,
            c = t.capHeight,
            s = c === void 0 ? '0.71em' : c,
            f = t.scaleToFit,
            l = f === void 0 ? !1 : f,
            h = t.textAnchor,
            p = h === void 0 ? 'start' : h,
            y = t.verticalAnchor,
            v = y === void 0 ? 'end' : y,
            d = t.fill,
            g = d === void 0 ? Ry : d,
            x = $y(t, gP),
            w = q.useMemo(
                function () {
                    return PP({
                        breakAll: x.breakAll,
                        children: x.children,
                        maxLines: x.maxLines,
                        scaleToFit: l,
                        style: x.style,
                        width: x.width,
                    });
                },
                [x.breakAll, x.children, x.maxLines, l, x.style, x.width]
            ),
            O = x.dx,
            m = x.dy,
            b = x.angle,
            _ = x.className,
            A = x.breakAll,
            T = $y(x, bP);
        if (!Ae(n) || !Ae(a)) return null;
        var M = n + (N(O) ? O : 0),
            P = a + (N(m) ? m : 0),
            E;
        switch (v) {
            case 'start':
                E = Ss('calc('.concat(s, ')'));
                break;
            case 'middle':
                E = Ss(
                    'calc('
                        .concat((w.length - 1) / 2, ' * -')
                        .concat(u, ' + (')
                        .concat(s, ' / 2))')
                );
                break;
            default:
                E = Ss('calc('.concat(w.length - 1, ' * -').concat(u, ')'));
                break;
        }
        var j = [];
        if (l) {
            var C = w[0].width,
                $ = x.width;
            j.push('scale('.concat((N($) ? $ / C : 1) / C, ')'));
        }
        return (
            b &&
                j.push(
                    'rotate('.concat(b, ', ').concat(M, ', ').concat(P, ')')
                ),
            j.length && (T.transform = j.join(' ')),
            S.createElement(
                'text',
                Dl({}, H(T, !0), {
                    x: M,
                    y: P,
                    className: Q('recharts-text', _),
                    textAnchor: p,
                    fill: g.includes('url') ? Ry : g,
                }),
                w.map(function (k, R) {
                    var L = k.words.join(A ? '' : ' ');
                    return S.createElement(
                        'tspan',
                        {
                            x: M,
                            dy: R === 0 ? E : u,
                            key: ''.concat(L, '-').concat(R),
                        },
                        L
                    );
                })
            )
        );
    };
function Rt(e, t) {
    return e == null || t == null
        ? NaN
        : e < t
          ? -1
          : e > t
            ? 1
            : e >= t
              ? 0
              : NaN;
}
function TP(e, t) {
    return e == null || t == null
        ? NaN
        : t < e
          ? -1
          : t > e
            ? 1
            : t >= e
              ? 0
              : NaN;
}
function ch(e) {
    let t, r, n;
    e.length !== 2
        ? ((t = Rt), (r = (u, c) => Rt(e(u), c)), (n = (u, c) => e(u) - c))
        : ((t = e === Rt || e === TP ? e : EP), (r = e), (n = e));
    function i(u, c, s = 0, f = u.length) {
        if (s < f) {
            if (t(c, c) !== 0) return f;
            do {
                const l = (s + f) >>> 1;
                r(u[l], c) < 0 ? (s = l + 1) : (f = l);
            } while (s < f);
        }
        return s;
    }
    function a(u, c, s = 0, f = u.length) {
        if (s < f) {
            if (t(c, c) !== 0) return f;
            do {
                const l = (s + f) >>> 1;
                r(u[l], c) <= 0 ? (s = l + 1) : (f = l);
            } while (s < f);
        }
        return s;
    }
    function o(u, c, s = 0, f = u.length) {
        const l = i(u, c, s, f - 1);
        return l > s && n(u[l - 1], c) > -n(u[l], c) ? l - 1 : l;
    }
    return { left: i, center: o, right: a };
}
function EP() {
    return 0;
}
function K0(e) {
    return e === null ? NaN : +e;
}
function* jP(e, t) {
    for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const MP = ch(Rt),
    hi = MP.right;
ch(K0).center;
class Dy extends Map {
    constructor(t, r = IP) {
        if (
            (super(),
            Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: r },
            }),
            t != null)
        )
            for (const [n, i] of t) this.set(n, i);
    }
    get(t) {
        return super.get(Ny(this, t));
    }
    has(t) {
        return super.has(Ny(this, t));
    }
    set(t, r) {
        return super.set($P(this, t), r);
    }
    delete(t) {
        return super.delete(CP(this, t));
    }
}
function Ny({ _intern: e, _key: t }, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : r;
}
function $P({ _intern: e, _key: t }, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function CP({ _intern: e, _key: t }, r) {
    const n = t(r);
    return e.has(n) && ((r = e.get(n)), e.delete(n)), r;
}
function IP(e) {
    return e !== null && typeof e == 'object' ? e.valueOf() : e;
}
function kP(e = Rt) {
    if (e === Rt) return G0;
    if (typeof e != 'function')
        throw new TypeError('compare is not a function');
    return (t, r) => {
        const n = e(t, r);
        return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
    };
}
function G0(e, t) {
    return (
        (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
        (e < t ? -1 : e > t ? 1 : 0)
    );
}
const RP = Math.sqrt(50),
    DP = Math.sqrt(10),
    NP = Math.sqrt(2);
function Ki(e, t, r) {
    const n = (t - e) / Math.max(0, r),
        i = Math.floor(Math.log10(n)),
        a = n / Math.pow(10, i),
        o = a >= RP ? 10 : a >= DP ? 5 : a >= NP ? 2 : 1;
    let u, c, s;
    return (
        i < 0
            ? ((s = Math.pow(10, -i) / o),
              (u = Math.round(e * s)),
              (c = Math.round(t * s)),
              u / s < e && ++u,
              c / s > t && --c,
              (s = -s))
            : ((s = Math.pow(10, i) * o),
              (u = Math.round(e / s)),
              (c = Math.round(t / s)),
              u * s < e && ++u,
              c * s > t && --c),
        c < u && 0.5 <= r && r < 2 ? Ki(e, t, r * 2) : [u, c, s]
    );
}
function Nl(e, t, r) {
    if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
    if (e === t) return [e];
    const n = t < e,
        [i, a, o] = n ? Ki(t, e, r) : Ki(e, t, r);
    if (!(a >= i)) return [];
    const u = a - i + 1,
        c = new Array(u);
    if (n)
        if (o < 0) for (let s = 0; s < u; ++s) c[s] = (a - s) / -o;
        else for (let s = 0; s < u; ++s) c[s] = (a - s) * o;
    else if (o < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -o;
    else for (let s = 0; s < u; ++s) c[s] = (i + s) * o;
    return c;
}
function ql(e, t, r) {
    return (t = +t), (e = +e), (r = +r), Ki(e, t, r)[2];
}
function Ll(e, t, r) {
    (t = +t), (e = +e), (r = +r);
    const n = t < e,
        i = n ? ql(t, e, r) : ql(e, t, r);
    return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function qy(e, t) {
    let r;
    for (const n of e)
        n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
    return r;
}
function Ly(e, t) {
    let r;
    for (const n of e)
        n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
    return r;
}
function V0(e, t, r = 0, n = 1 / 0, i) {
    if (
        ((t = Math.floor(t)),
        (r = Math.floor(Math.max(0, r))),
        (n = Math.floor(Math.min(e.length - 1, n))),
        !(r <= t && t <= n))
    )
        return e;
    for (i = i === void 0 ? G0 : kP(i); n > r; ) {
        if (n - r > 600) {
            const c = n - r + 1,
                s = t - r + 1,
                f = Math.log(c),
                l = 0.5 * Math.exp((2 * f) / 3),
                h =
                    0.5 *
                    Math.sqrt((f * l * (c - l)) / c) *
                    (s - c / 2 < 0 ? -1 : 1),
                p = Math.max(r, Math.floor(t - (s * l) / c + h)),
                y = Math.min(n, Math.floor(t + ((c - s) * l) / c + h));
            V0(e, t, p, y, i);
        }
        const a = e[t];
        let o = r,
            u = n;
        for (ln(e, r, t), i(e[n], a) > 0 && ln(e, r, n); o < u; ) {
            for (ln(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
            for (; i(e[u], a) > 0; ) --u;
        }
        i(e[r], a) === 0 ? ln(e, r, u) : (++u, ln(e, u, n)),
            u <= t && (r = u + 1),
            t <= u && (n = u - 1);
    }
    return e;
}
function ln(e, t, r) {
    const n = e[t];
    (e[t] = e[r]), (e[r] = n);
}
function qP(e, t, r) {
    if (
        ((e = Float64Array.from(jP(e))), !(!(n = e.length) || isNaN((t = +t))))
    ) {
        if (t <= 0 || n < 2) return Ly(e);
        if (t >= 1) return qy(e);
        var n,
            i = (n - 1) * t,
            a = Math.floor(i),
            o = qy(V0(e, a).subarray(0, a + 1)),
            u = Ly(e.subarray(a + 1));
        return o + (u - o) * (i - a);
    }
}
function LP(e, t, r = K0) {
    if (!(!(n = e.length) || isNaN((t = +t)))) {
        if (t <= 0 || n < 2) return +r(e[0], 0, e);
        if (t >= 1) return +r(e[n - 1], n - 1, e);
        var n,
            i = (n - 1) * t,
            a = Math.floor(i),
            o = +r(e[a], a, e),
            u = +r(e[a + 1], a + 1, e);
        return o + (u - o) * (i - a);
    }
}
function BP(e, t, r) {
    (e = +e),
        (t = +t),
        (r =
            (i = arguments.length) < 2
                ? ((t = e), (e = 0), 1)
                : i < 3
                  ? 1
                  : +r);
    for (
        var n = -1,
            i = Math.max(0, Math.ceil((t - e) / r)) | 0,
            a = new Array(i);
        ++n < i;

    )
        a[n] = e + n * r;
    return a;
}
function et(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(t).domain(e);
            break;
    }
    return this;
}
function jt(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1: {
            typeof e == 'function' ? this.interpolator(e) : this.range(e);
            break;
        }
        default: {
            this.domain(e),
                typeof t == 'function' ? this.interpolator(t) : this.range(t);
            break;
        }
    }
    return this;
}
const Bl = Symbol('implicit');
function sh() {
    var e = new Dy(),
        t = [],
        r = [],
        n = Bl;
    function i(a) {
        let o = e.get(a);
        if (o === void 0) {
            if (n !== Bl) return n;
            e.set(a, (o = t.push(a) - 1));
        }
        return r[o % r.length];
    }
    return (
        (i.domain = function (a) {
            if (!arguments.length) return t.slice();
            (t = []), (e = new Dy());
            for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
            return i;
        }),
        (i.range = function (a) {
            return arguments.length ? ((r = Array.from(a)), i) : r.slice();
        }),
        (i.unknown = function (a) {
            return arguments.length ? ((n = a), i) : n;
        }),
        (i.copy = function () {
            return sh(t, r).unknown(n);
        }),
        et.apply(i, arguments),
        i
    );
}
function Rn() {
    var e = sh().unknown(void 0),
        t = e.domain,
        r = e.range,
        n = 0,
        i = 1,
        a,
        o,
        u = !1,
        c = 0,
        s = 0,
        f = 0.5;
    delete e.unknown;
    function l() {
        var h = t().length,
            p = i < n,
            y = p ? i : n,
            v = p ? n : i;
        (a = (v - y) / Math.max(1, h - c + s * 2)),
            u && (a = Math.floor(a)),
            (y += (v - y - a * (h - c)) * f),
            (o = a * (1 - c)),
            u && ((y = Math.round(y)), (o = Math.round(o)));
        var d = BP(h).map(function (g) {
            return y + a * g;
        });
        return r(p ? d.reverse() : d);
    }
    return (
        (e.domain = function (h) {
            return arguments.length ? (t(h), l()) : t();
        }),
        (e.range = function (h) {
            return arguments.length
                ? (([n, i] = h), (n = +n), (i = +i), l())
                : [n, i];
        }),
        (e.rangeRound = function (h) {
            return ([n, i] = h), (n = +n), (i = +i), (u = !0), l();
        }),
        (e.bandwidth = function () {
            return o;
        }),
        (e.step = function () {
            return a;
        }),
        (e.round = function (h) {
            return arguments.length ? ((u = !!h), l()) : u;
        }),
        (e.padding = function (h) {
            return arguments.length ? ((c = Math.min(1, (s = +h))), l()) : c;
        }),
        (e.paddingInner = function (h) {
            return arguments.length ? ((c = Math.min(1, h)), l()) : c;
        }),
        (e.paddingOuter = function (h) {
            return arguments.length ? ((s = +h), l()) : s;
        }),
        (e.align = function (h) {
            return arguments.length
                ? ((f = Math.max(0, Math.min(1, h))), l())
                : f;
        }),
        (e.copy = function () {
            return Rn(t(), [n, i])
                .round(u)
                .paddingInner(c)
                .paddingOuter(s)
                .align(f);
        }),
        et.apply(l(), arguments)
    );
}
function X0(e) {
    var t = e.copy;
    return (
        (e.padding = e.paddingOuter),
        delete e.paddingInner,
        delete e.paddingOuter,
        (e.copy = function () {
            return X0(t());
        }),
        e
    );
}
function On() {
    return X0(Rn.apply(null, arguments).paddingInner(1));
}
function lh(e, t, r) {
    (e.prototype = t.prototype = r), (r.constructor = e);
}
function Y0(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t) r[n] = t[n];
    return r;
}
function pi() {}
var Dn = 0.7,
    Gi = 1 / Dn,
    Ar = '\\s*([+-]?\\d+)\\s*',
    Nn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
    st = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
    FP = /^#([0-9a-f]{3,8})$/,
    zP = new RegExp(`^rgb\\(${Ar},${Ar},${Ar}\\)$`),
    WP = new RegExp(`^rgb\\(${st},${st},${st}\\)$`),
    UP = new RegExp(`^rgba\\(${Ar},${Ar},${Ar},${Nn}\\)$`),
    HP = new RegExp(`^rgba\\(${st},${st},${st},${Nn}\\)$`),
    KP = new RegExp(`^hsl\\(${Nn},${st},${st}\\)$`),
    GP = new RegExp(`^hsla\\(${Nn},${st},${st},${Nn}\\)$`),
    By = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
    };
lh(pi, qn, {
    copy(e) {
        return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
        return this.rgb().displayable();
    },
    hex: Fy,
    formatHex: Fy,
    formatHex8: VP,
    formatHsl: XP,
    formatRgb: zy,
    toString: zy,
});
function Fy() {
    return this.rgb().formatHex();
}
function VP() {
    return this.rgb().formatHex8();
}
function XP() {
    return Z0(this).formatHsl();
}
function zy() {
    return this.rgb().formatRgb();
}
function qn(e) {
    var t, r;
    return (
        (e = (e + '').trim().toLowerCase()),
        (t = FP.exec(e))
            ? ((r = t[1].length),
              (t = parseInt(t[1], 16)),
              r === 6
                  ? Wy(t)
                  : r === 3
                    ? new qe(
                          ((t >> 8) & 15) | ((t >> 4) & 240),
                          ((t >> 4) & 15) | (t & 240),
                          ((t & 15) << 4) | (t & 15),
                          1
                      )
                    : r === 8
                      ? Ai(
                            (t >> 24) & 255,
                            (t >> 16) & 255,
                            (t >> 8) & 255,
                            (t & 255) / 255
                        )
                      : r === 4
                        ? Ai(
                              ((t >> 12) & 15) | ((t >> 8) & 240),
                              ((t >> 8) & 15) | ((t >> 4) & 240),
                              ((t >> 4) & 15) | (t & 240),
                              (((t & 15) << 4) | (t & 15)) / 255
                          )
                        : null)
            : (t = zP.exec(e))
              ? new qe(t[1], t[2], t[3], 1)
              : (t = WP.exec(e))
                ? new qe(
                      (t[1] * 255) / 100,
                      (t[2] * 255) / 100,
                      (t[3] * 255) / 100,
                      1
                  )
                : (t = UP.exec(e))
                  ? Ai(t[1], t[2], t[3], t[4])
                  : (t = HP.exec(e))
                    ? Ai(
                          (t[1] * 255) / 100,
                          (t[2] * 255) / 100,
                          (t[3] * 255) / 100,
                          t[4]
                      )
                    : (t = KP.exec(e))
                      ? Ky(t[1], t[2] / 100, t[3] / 100, 1)
                      : (t = GP.exec(e))
                        ? Ky(t[1], t[2] / 100, t[3] / 100, t[4])
                        : By.hasOwnProperty(e)
                          ? Wy(By[e])
                          : e === 'transparent'
                            ? new qe(NaN, NaN, NaN, 0)
                            : null
    );
}
function Wy(e) {
    return new qe((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Ai(e, t, r, n) {
    return n <= 0 && (e = t = r = NaN), new qe(e, t, r, n);
}
function YP(e) {
    return (
        e instanceof pi || (e = qn(e)),
        e ? ((e = e.rgb()), new qe(e.r, e.g, e.b, e.opacity)) : new qe()
    );
}
function Fl(e, t, r, n) {
    return arguments.length === 1 ? YP(e) : new qe(e, t, r, n ?? 1);
}
function qe(e, t, r, n) {
    (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
lh(
    qe,
    Fl,
    Y0(pi, {
        brighter(e) {
            return (
                (e = e == null ? Gi : Math.pow(Gi, e)),
                new qe(this.r * e, this.g * e, this.b * e, this.opacity)
            );
        },
        darker(e) {
            return (
                (e = e == null ? Dn : Math.pow(Dn, e)),
                new qe(this.r * e, this.g * e, this.b * e, this.opacity)
            );
        },
        rgb() {
            return this;
        },
        clamp() {
            return new qe(er(this.r), er(this.g), er(this.b), Vi(this.opacity));
        },
        displayable() {
            return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
            );
        },
        hex: Uy,
        formatHex: Uy,
        formatHex8: ZP,
        formatRgb: Hy,
        toString: Hy,
    })
);
function Uy() {
    return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}`;
}
function ZP() {
    return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}${Zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Hy() {
    const e = Vi(this.opacity);
    return `${e === 1 ? 'rgb(' : 'rgba('}${er(this.r)}, ${er(this.g)}, ${er(this.b)}${e === 1 ? ')' : `, ${e})`}`;
}
function Vi(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function er(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Zt(e) {
    return (e = er(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function Ky(e, t, r, n) {
    return (
        n <= 0
            ? (e = t = r = NaN)
            : r <= 0 || r >= 1
              ? (e = t = NaN)
              : t <= 0 && (e = NaN),
        new at(e, t, r, n)
    );
}
function Z0(e) {
    if (e instanceof at) return new at(e.h, e.s, e.l, e.opacity);
    if ((e instanceof pi || (e = qn(e)), !e)) return new at();
    if (e instanceof at) return e;
    e = e.rgb();
    var t = e.r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        a = Math.max(t, r, n),
        o = NaN,
        u = a - i,
        c = (a + i) / 2;
    return (
        u
            ? (t === a
                  ? (o = (r - n) / u + (r < n) * 6)
                  : r === a
                    ? (o = (n - t) / u + 2)
                    : (o = (t - r) / u + 4),
              (u /= c < 0.5 ? a + i : 2 - a - i),
              (o *= 60))
            : (u = c > 0 && c < 1 ? 0 : o),
        new at(o, u, c, e.opacity)
    );
}
function JP(e, t, r, n) {
    return arguments.length === 1 ? Z0(e) : new at(e, t, r, n ?? 1);
}
function at(e, t, r, n) {
    (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
lh(
    at,
    JP,
    Y0(pi, {
        brighter(e) {
            return (
                (e = e == null ? Gi : Math.pow(Gi, e)),
                new at(this.h, this.s, this.l * e, this.opacity)
            );
        },
        darker(e) {
            return (
                (e = e == null ? Dn : Math.pow(Dn, e)),
                new at(this.h, this.s, this.l * e, this.opacity)
            );
        },
        rgb() {
            var e = (this.h % 360) + (this.h < 0) * 360,
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * t,
                i = 2 * r - n;
            return new qe(
                Ps(e >= 240 ? e - 240 : e + 120, i, n),
                Ps(e, i, n),
                Ps(e < 120 ? e + 240 : e - 120, i, n),
                this.opacity
            );
        },
        clamp() {
            return new at(Gy(this.h), Si(this.s), Si(this.l), Vi(this.opacity));
        },
        displayable() {
            return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
            );
        },
        formatHsl() {
            const e = Vi(this.opacity);
            return `${e === 1 ? 'hsl(' : 'hsla('}${Gy(this.h)}, ${Si(this.s) * 100}%, ${Si(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
        },
    })
);
function Gy(e) {
    return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function Si(e) {
    return Math.max(0, Math.min(1, e || 0));
}
function Ps(e, t, r) {
    return (
        (e < 60
            ? t + ((r - t) * e) / 60
            : e < 180
              ? r
              : e < 240
                ? t + ((r - t) * (240 - e)) / 60
                : t) * 255
    );
}
const fh = (e) => () => e;
function QP(e, t) {
    return function (r) {
        return e + r * t;
    };
}
function eT(e, t, r) {
    return (
        (e = Math.pow(e, r)),
        (t = Math.pow(t, r) - e),
        (r = 1 / r),
        function (n) {
            return Math.pow(e + n * t, r);
        }
    );
}
function tT(e) {
    return (e = +e) == 1
        ? J0
        : function (t, r) {
              return r - t ? eT(t, r, e) : fh(isNaN(t) ? r : t);
          };
}
function J0(e, t) {
    var r = t - e;
    return r ? QP(e, r) : fh(isNaN(e) ? t : e);
}
const Vy = (function e(t) {
    var r = tT(t);
    function n(i, a) {
        var o = r((i = Fl(i)).r, (a = Fl(a)).r),
            u = r(i.g, a.g),
            c = r(i.b, a.b),
            s = J0(i.opacity, a.opacity);
        return function (f) {
            return (
                (i.r = o(f)),
                (i.g = u(f)),
                (i.b = c(f)),
                (i.opacity = s(f)),
                i + ''
            );
        };
    }
    return (n.gamma = e), n;
})(1);
function rT(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0,
        n = t.slice(),
        i;
    return function (a) {
        for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
        return n;
    };
}
function nT(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function iT(e, t) {
    var r = t ? t.length : 0,
        n = e ? Math.min(r, e.length) : 0,
        i = new Array(n),
        a = new Array(r),
        o;
    for (o = 0; o < n; ++o) i[o] = an(e[o], t[o]);
    for (; o < r; ++o) a[o] = t[o];
    return function (u) {
        for (o = 0; o < n; ++o) a[o] = i[o](u);
        return a;
    };
}
function aT(e, t) {
    var r = new Date();
    return (
        (e = +e),
        (t = +t),
        function (n) {
            return r.setTime(e * (1 - n) + t * n), r;
        }
    );
}
function Xi(e, t) {
    return (
        (e = +e),
        (t = +t),
        function (r) {
            return e * (1 - r) + t * r;
        }
    );
}
function oT(e, t) {
    var r = {},
        n = {},
        i;
    (e === null || typeof e != 'object') && (e = {}),
        (t === null || typeof t != 'object') && (t = {});
    for (i in t) i in e ? (r[i] = an(e[i], t[i])) : (n[i] = t[i]);
    return function (a) {
        for (i in r) n[i] = r[i](a);
        return n;
    };
}
var zl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Ts = new RegExp(zl.source, 'g');
function uT(e) {
    return function () {
        return e;
    };
}
function cT(e) {
    return function (t) {
        return e(t) + '';
    };
}
function sT(e, t) {
    var r = (zl.lastIndex = Ts.lastIndex = 0),
        n,
        i,
        a,
        o = -1,
        u = [],
        c = [];
    for (e = e + '', t = t + ''; (n = zl.exec(e)) && (i = Ts.exec(t)); )
        (a = i.index) > r &&
            ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
            (n = n[0]) === (i = i[0])
                ? u[o]
                    ? (u[o] += i)
                    : (u[++o] = i)
                : ((u[++o] = null), c.push({ i: o, x: Xi(n, i) })),
            (r = Ts.lastIndex);
    return (
        r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
        u.length < 2
            ? c[0]
                ? cT(c[0].x)
                : uT(t)
            : ((t = c.length),
              function (s) {
                  for (var f = 0, l; f < t; ++f) u[(l = c[f]).i] = l.x(s);
                  return u.join('');
              })
    );
}
function an(e, t) {
    var r = typeof t,
        n;
    return t == null || r === 'boolean'
        ? fh(t)
        : (r === 'number'
              ? Xi
              : r === 'string'
                ? (n = qn(t))
                    ? ((t = n), Vy)
                    : sT
                : t instanceof qn
                  ? Vy
                  : t instanceof Date
                    ? aT
                    : nT(t)
                      ? rT
                      : Array.isArray(t)
                        ? iT
                        : (typeof t.valueOf != 'function' &&
                                typeof t.toString != 'function') ||
                            isNaN(t)
                          ? oT
                          : Xi)(e, t);
}
function hh(e, t) {
    return (
        (e = +e),
        (t = +t),
        function (r) {
            return Math.round(e * (1 - r) + t * r);
        }
    );
}
function lT(e, t) {
    t === void 0 && ((t = e), (e = an));
    for (
        var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
        r < n;

    )
        a[r] = e(i, (i = t[++r]));
    return function (o) {
        var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
        return a[u](o - u);
    };
}
function fT(e) {
    return function () {
        return e;
    };
}
function Yi(e) {
    return +e;
}
var Xy = [0, 1];
function Re(e) {
    return e;
}
function Wl(e, t) {
    return (t -= e = +e)
        ? function (r) {
              return (r - e) / t;
          }
        : fT(isNaN(t) ? NaN : 0.5);
}
function hT(e, t) {
    var r;
    return (
        e > t && ((r = e), (e = t), (t = r)),
        function (n) {
            return Math.max(e, Math.min(t, n));
        }
    );
}
function pT(e, t, r) {
    var n = e[0],
        i = e[1],
        a = t[0],
        o = t[1];
    return (
        i < n
            ? ((n = Wl(i, n)), (a = r(o, a)))
            : ((n = Wl(n, i)), (a = r(a, o))),
        function (u) {
            return a(n(u));
        }
    );
}
function dT(e, t, r) {
    var n = Math.min(e.length, t.length) - 1,
        i = new Array(n),
        a = new Array(n),
        o = -1;
    for (
        e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
        ++o < n;

    )
        (i[o] = Wl(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]));
    return function (u) {
        var c = hi(e, u, 1, n) - 1;
        return a[c](i[c](u));
    };
}
function di(e, t) {
    return t
        .domain(e.domain())
        .range(e.range())
        .interpolate(e.interpolate())
        .clamp(e.clamp())
        .unknown(e.unknown());
}
function Ka() {
    var e = Xy,
        t = Xy,
        r = an,
        n,
        i,
        a,
        o = Re,
        u,
        c,
        s;
    function f() {
        var h = Math.min(e.length, t.length);
        return (
            o !== Re && (o = hT(e[0], e[h - 1])),
            (u = h > 2 ? dT : pT),
            (c = s = null),
            l
        );
    }
    function l(h) {
        return h == null || isNaN((h = +h))
            ? a
            : (c || (c = u(e.map(n), t, r)))(n(o(h)));
    }
    return (
        (l.invert = function (h) {
            return o(i((s || (s = u(t, e.map(n), Xi)))(h)));
        }),
        (l.domain = function (h) {
            return arguments.length
                ? ((e = Array.from(h, Yi)), f())
                : e.slice();
        }),
        (l.range = function (h) {
            return arguments.length ? ((t = Array.from(h)), f()) : t.slice();
        }),
        (l.rangeRound = function (h) {
            return (t = Array.from(h)), (r = hh), f();
        }),
        (l.clamp = function (h) {
            return arguments.length ? ((o = h ? !0 : Re), f()) : o !== Re;
        }),
        (l.interpolate = function (h) {
            return arguments.length ? ((r = h), f()) : r;
        }),
        (l.unknown = function (h) {
            return arguments.length ? ((a = h), l) : a;
        }),
        function (h, p) {
            return (n = h), (i = p), f();
        }
    );
}
function ph() {
    return Ka()(Re, Re);
}
function vT(e) {
    return Math.abs((e = Math.round(e))) >= 1e21
        ? e.toLocaleString('en').replace(/,/g, '')
        : e.toString(10);
}
function Zi(e, t) {
    if (
        (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
            'e'
        )) < 0
    )
        return null;
    var r,
        n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function $r(e) {
    return (e = Zi(Math.abs(e))), e ? e[1] : NaN;
}
function yT(e, t) {
    return function (r, n) {
        for (
            var i = r.length, a = [], o = 0, u = e[0], c = 0;
            i > 0 &&
            u > 0 &&
            (c + u + 1 > n && (u = Math.max(1, n - c)),
            a.push(r.substring((i -= u), i + u)),
            !((c += u + 1) > n));

        )
            u = e[(o = (o + 1) % e.length)];
        return a.reverse().join(t);
    };
}
function mT(e) {
    return function (t) {
        return t.replace(/[0-9]/g, function (r) {
            return e[+r];
        });
    };
}
var gT =
    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ln(e) {
    if (!(t = gT.exec(e))) throw new Error('invalid format: ' + e);
    var t;
    return new dh({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10],
    });
}
Ln.prototype = dh.prototype;
function dh(e) {
    (this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
        (this.align = e.align === void 0 ? '>' : e.align + ''),
        (this.sign = e.sign === void 0 ? '-' : e.sign + ''),
        (this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
        (this.zero = !!e.zero),
        (this.width = e.width === void 0 ? void 0 : +e.width),
        (this.comma = !!e.comma),
        (this.precision = e.precision === void 0 ? void 0 : +e.precision),
        (this.trim = !!e.trim),
        (this.type = e.type === void 0 ? '' : e.type + '');
}
dh.prototype.toString = function () {
    return (
        this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? '0' : '') +
        (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
        (this.comma ? ',' : '') +
        (this.precision === void 0
            ? ''
            : '.' + Math.max(0, this.precision | 0)) +
        (this.trim ? '~' : '') +
        this.type
    );
};
function bT(e) {
    e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
        switch (e[r]) {
            case '.':
                n = i = r;
                break;
            case '0':
                n === 0 && (n = r), (i = r);
                break;
            default:
                if (!+e[r]) break e;
                n > 0 && (n = 0);
                break;
        }
    return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Q0;
function xT(e, t) {
    var r = Zi(e, t);
    if (!r) return e + '';
    var n = r[0],
        i = r[1],
        a = i - (Q0 = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
        o = n.length;
    return a === o
        ? n
        : a > o
          ? n + new Array(a - o + 1).join('0')
          : a > 0
            ? n.slice(0, a) + '.' + n.slice(a)
            : '0.' +
              new Array(1 - a).join('0') +
              Zi(e, Math.max(0, t + a - 1))[0];
}
function Yy(e, t) {
    var r = Zi(e, t);
    if (!r) return e + '';
    var n = r[0],
        i = r[1];
    return i < 0
        ? '0.' + new Array(-i).join('0') + n
        : n.length > i + 1
          ? n.slice(0, i + 1) + '.' + n.slice(i + 1)
          : n + new Array(i - n.length + 2).join('0');
}
const Zy = {
    '%': (e, t) => (e * 100).toFixed(t),
    b: (e) => Math.round(e).toString(2),
    c: (e) => e + '',
    d: vT,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: (e) => Math.round(e).toString(8),
    p: (e, t) => Yy(e * 100, t),
    r: Yy,
    s: xT,
    X: (e) => Math.round(e).toString(16).toUpperCase(),
    x: (e) => Math.round(e).toString(16),
};
function Jy(e) {
    return e;
}
var Qy = Array.prototype.map,
    em = [
        'y',
        'z',
        'a',
        'f',
        'p',
        'n',
        'µ',
        'm',
        '',
        'k',
        'M',
        'G',
        'T',
        'P',
        'E',
        'Z',
        'Y',
    ];
function wT(e) {
    var t =
            e.grouping === void 0 || e.thousands === void 0
                ? Jy
                : yT(Qy.call(e.grouping, Number), e.thousands + ''),
        r = e.currency === void 0 ? '' : e.currency[0] + '',
        n = e.currency === void 0 ? '' : e.currency[1] + '',
        i = e.decimal === void 0 ? '.' : e.decimal + '',
        a = e.numerals === void 0 ? Jy : mT(Qy.call(e.numerals, String)),
        o = e.percent === void 0 ? '%' : e.percent + '',
        u = e.minus === void 0 ? '−' : e.minus + '',
        c = e.nan === void 0 ? 'NaN' : e.nan + '';
    function s(l) {
        l = Ln(l);
        var h = l.fill,
            p = l.align,
            y = l.sign,
            v = l.symbol,
            d = l.zero,
            g = l.width,
            x = l.comma,
            w = l.precision,
            O = l.trim,
            m = l.type;
        m === 'n'
            ? ((x = !0), (m = 'g'))
            : Zy[m] || (w === void 0 && (w = 12), (O = !0), (m = 'g')),
            (d || (h === '0' && p === '=')) && ((d = !0), (h = '0'), (p = '='));
        var b =
                v === '$'
                    ? r
                    : v === '#' && /[boxX]/.test(m)
                      ? '0' + m.toLowerCase()
                      : '',
            _ = v === '$' ? n : /[%p]/.test(m) ? o : '',
            A = Zy[m],
            T = /[defgprs%]/.test(m);
        w =
            w === void 0
                ? 6
                : /[gprs]/.test(m)
                  ? Math.max(1, Math.min(21, w))
                  : Math.max(0, Math.min(20, w));
        function M(P) {
            var E = b,
                j = _,
                C,
                $,
                k;
            if (m === 'c') (j = A(P) + j), (P = '');
            else {
                P = +P;
                var R = P < 0 || 1 / P < 0;
                if (
                    ((P = isNaN(P) ? c : A(Math.abs(P), w)),
                    O && (P = bT(P)),
                    R && +P == 0 && y !== '+' && (R = !1),
                    (E =
                        (R
                            ? y === '('
                                ? y
                                : u
                            : y === '-' || y === '('
                              ? ''
                              : y) + E),
                    (j =
                        (m === 's' ? em[8 + Q0 / 3] : '') +
                        j +
                        (R && y === '(' ? ')' : '')),
                    T)
                ) {
                    for (C = -1, $ = P.length; ++C < $; )
                        if (((k = P.charCodeAt(C)), 48 > k || k > 57)) {
                            (j =
                                (k === 46 ? i + P.slice(C + 1) : P.slice(C)) +
                                j),
                                (P = P.slice(0, C));
                            break;
                        }
                }
            }
            x && !d && (P = t(P, 1 / 0));
            var L = E.length + P.length + j.length,
                B = L < g ? new Array(g - L + 1).join(h) : '';
            switch (
                (x &&
                    d &&
                    ((P = t(B + P, B.length ? g - j.length : 1 / 0)), (B = '')),
                p)
            ) {
                case '<':
                    P = E + P + j + B;
                    break;
                case '=':
                    P = E + B + P + j;
                    break;
                case '^':
                    P =
                        B.slice(0, (L = B.length >> 1)) +
                        E +
                        P +
                        j +
                        B.slice(L);
                    break;
                default:
                    P = B + E + P + j;
                    break;
            }
            return a(P);
        }
        return (
            (M.toString = function () {
                return l + '';
            }),
            M
        );
    }
    function f(l, h) {
        var p = s(((l = Ln(l)), (l.type = 'f'), l)),
            y = Math.max(-8, Math.min(8, Math.floor($r(h) / 3))) * 3,
            v = Math.pow(10, -y),
            d = em[8 + y / 3];
        return function (g) {
            return p(v * g) + d;
        };
    }
    return { format: s, formatPrefix: f };
}
var Pi, vh, ex;
OT({ thousands: ',', grouping: [3], currency: ['$', ''] });
function OT(e) {
    return (Pi = wT(e)), (vh = Pi.format), (ex = Pi.formatPrefix), Pi;
}
function _T(e) {
    return Math.max(0, -$r(Math.abs(e)));
}
function AT(e, t) {
    return Math.max(
        0,
        Math.max(-8, Math.min(8, Math.floor($r(t) / 3))) * 3 - $r(Math.abs(e))
    );
}
function ST(e, t) {
    return (
        (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, $r(t) - $r(e)) + 1
    );
}
function tx(e, t, r, n) {
    var i = Ll(e, t, r),
        a;
    switch (((n = Ln(n ?? ',f')), n.type)) {
        case 's': {
            var o = Math.max(Math.abs(e), Math.abs(t));
            return (
                n.precision == null &&
                    !isNaN((a = AT(i, o))) &&
                    (n.precision = a),
                ex(n, o)
            );
        }
        case '':
        case 'e':
        case 'g':
        case 'p':
        case 'r': {
            n.precision == null &&
                !isNaN((a = ST(i, Math.max(Math.abs(e), Math.abs(t))))) &&
                (n.precision = a - (n.type === 'e'));
            break;
        }
        case 'f':
        case '%': {
            n.precision == null &&
                !isNaN((a = _T(i))) &&
                (n.precision = a - (n.type === '%') * 2);
            break;
        }
    }
    return vh(n);
}
function qt(e) {
    var t = e.domain;
    return (
        (e.ticks = function (r) {
            var n = t();
            return Nl(n[0], n[n.length - 1], r ?? 10);
        }),
        (e.tickFormat = function (r, n) {
            var i = t();
            return tx(i[0], i[i.length - 1], r ?? 10, n);
        }),
        (e.nice = function (r) {
            r == null && (r = 10);
            var n = t(),
                i = 0,
                a = n.length - 1,
                o = n[i],
                u = n[a],
                c,
                s,
                f = 10;
            for (
                u < o && ((s = o), (o = u), (u = s), (s = i), (i = a), (a = s));
                f-- > 0;

            ) {
                if (((s = ql(o, u, r)), s === c))
                    return (n[i] = o), (n[a] = u), t(n);
                if (s > 0)
                    (o = Math.floor(o / s) * s), (u = Math.ceil(u / s) * s);
                else if (s < 0)
                    (o = Math.ceil(o * s) / s), (u = Math.floor(u * s) / s);
                else break;
                c = s;
            }
            return e;
        }),
        e
    );
}
function Ji() {
    var e = ph();
    return (
        (e.copy = function () {
            return di(e, Ji());
        }),
        et.apply(e, arguments),
        qt(e)
    );
}
function rx(e) {
    var t;
    function r(n) {
        return n == null || isNaN((n = +n)) ? t : n;
    }
    return (
        (r.invert = r),
        (r.domain = r.range =
            function (n) {
                return arguments.length
                    ? ((e = Array.from(n, Yi)), r)
                    : e.slice();
            }),
        (r.unknown = function (n) {
            return arguments.length ? ((t = n), r) : t;
        }),
        (r.copy = function () {
            return rx(e).unknown(t);
        }),
        (e = arguments.length ? Array.from(e, Yi) : [0, 1]),
        qt(r)
    );
}
function nx(e, t) {
    e = e.slice();
    var r = 0,
        n = e.length - 1,
        i = e[r],
        a = e[n],
        o;
    return (
        a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
        (e[r] = t.floor(i)),
        (e[n] = t.ceil(a)),
        e
    );
}
function tm(e) {
    return Math.log(e);
}
function rm(e) {
    return Math.exp(e);
}
function PT(e) {
    return -Math.log(-e);
}
function TT(e) {
    return -Math.exp(-e);
}
function ET(e) {
    return isFinite(e) ? +('1e' + e) : e < 0 ? 0 : e;
}
function jT(e) {
    return e === 10 ? ET : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function MT(e) {
    return e === Math.E
        ? Math.log
        : (e === 10 && Math.log10) ||
              (e === 2 && Math.log2) ||
              ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function nm(e) {
    return (t, r) => -e(-t, r);
}
function yh(e) {
    const t = e(tm, rm),
        r = t.domain;
    let n = 10,
        i,
        a;
    function o() {
        return (
            (i = MT(n)),
            (a = jT(n)),
            r()[0] < 0 ? ((i = nm(i)), (a = nm(a)), e(PT, TT)) : e(tm, rm),
            t
        );
    }
    return (
        (t.base = function (u) {
            return arguments.length ? ((n = +u), o()) : n;
        }),
        (t.domain = function (u) {
            return arguments.length ? (r(u), o()) : r();
        }),
        (t.ticks = (u) => {
            const c = r();
            let s = c[0],
                f = c[c.length - 1];
            const l = f < s;
            l && ([s, f] = [f, s]);
            let h = i(s),
                p = i(f),
                y,
                v;
            const d = u == null ? 10 : +u;
            let g = [];
            if (!(n % 1) && p - h < d) {
                if (((h = Math.floor(h)), (p = Math.ceil(p)), s > 0)) {
                    for (; h <= p; ++h)
                        for (y = 1; y < n; ++y)
                            if (
                                ((v = h < 0 ? y / a(-h) : y * a(h)), !(v < s))
                            ) {
                                if (v > f) break;
                                g.push(v);
                            }
                } else
                    for (; h <= p; ++h)
                        for (y = n - 1; y >= 1; --y)
                            if (
                                ((v = h > 0 ? y / a(-h) : y * a(h)), !(v < s))
                            ) {
                                if (v > f) break;
                                g.push(v);
                            }
                g.length * 2 < d && (g = Nl(s, f, d));
            } else g = Nl(h, p, Math.min(p - h, d)).map(a);
            return l ? g.reverse() : g;
        }),
        (t.tickFormat = (u, c) => {
            if (
                (u == null && (u = 10),
                c == null && (c = n === 10 ? 's' : ','),
                typeof c != 'function' &&
                    (!(n % 1) && (c = Ln(c)).precision == null && (c.trim = !0),
                    (c = vh(c))),
                u === 1 / 0)
            )
                return c;
            const s = Math.max(1, (n * u) / t.ticks().length);
            return (f) => {
                let l = f / a(Math.round(i(f)));
                return l * n < n - 0.5 && (l *= n), l <= s ? c(f) : '';
            };
        }),
        (t.nice = () =>
            r(
                nx(r(), {
                    floor: (u) => a(Math.floor(i(u))),
                    ceil: (u) => a(Math.ceil(i(u))),
                })
            )),
        t
    );
}
function ix() {
    const e = yh(Ka()).domain([1, 10]);
    return (
        (e.copy = () => di(e, ix()).base(e.base())), et.apply(e, arguments), e
    );
}
function im(e) {
    return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e));
    };
}
function am(e) {
    return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
    };
}
function mh(e) {
    var t = 1,
        r = e(im(t), am(t));
    return (
        (r.constant = function (n) {
            return arguments.length ? e(im((t = +n)), am(t)) : t;
        }),
        qt(r)
    );
}
function ax() {
    var e = mh(Ka());
    return (
        (e.copy = function () {
            return di(e, ax()).constant(e.constant());
        }),
        et.apply(e, arguments)
    );
}
function om(e) {
    return function (t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
    };
}
function $T(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function CT(e) {
    return e < 0 ? -e * e : e * e;
}
function gh(e) {
    var t = e(Re, Re),
        r = 1;
    function n() {
        return r === 1
            ? e(Re, Re)
            : r === 0.5
              ? e($T, CT)
              : e(om(r), om(1 / r));
    }
    return (
        (t.exponent = function (i) {
            return arguments.length ? ((r = +i), n()) : r;
        }),
        qt(t)
    );
}
function bh() {
    var e = gh(Ka());
    return (
        (e.copy = function () {
            return di(e, bh()).exponent(e.exponent());
        }),
        et.apply(e, arguments),
        e
    );
}
function IT() {
    return bh.apply(null, arguments).exponent(0.5);
}
function um(e) {
    return Math.sign(e) * e * e;
}
function kT(e) {
    return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function ox() {
    var e = ph(),
        t = [0, 1],
        r = !1,
        n;
    function i(a) {
        var o = kT(e(a));
        return isNaN(o) ? n : r ? Math.round(o) : o;
    }
    return (
        (i.invert = function (a) {
            return e.invert(um(a));
        }),
        (i.domain = function (a) {
            return arguments.length ? (e.domain(a), i) : e.domain();
        }),
        (i.range = function (a) {
            return arguments.length
                ? (e.range((t = Array.from(a, Yi)).map(um)), i)
                : t.slice();
        }),
        (i.rangeRound = function (a) {
            return i.range(a).round(!0);
        }),
        (i.round = function (a) {
            return arguments.length ? ((r = !!a), i) : r;
        }),
        (i.clamp = function (a) {
            return arguments.length ? (e.clamp(a), i) : e.clamp();
        }),
        (i.unknown = function (a) {
            return arguments.length ? ((n = a), i) : n;
        }),
        (i.copy = function () {
            return ox(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
        }),
        et.apply(i, arguments),
        qt(i)
    );
}
function ux() {
    var e = [],
        t = [],
        r = [],
        n;
    function i() {
        var o = 0,
            u = Math.max(1, t.length);
        for (r = new Array(u - 1); ++o < u; ) r[o - 1] = LP(e, o / u);
        return a;
    }
    function a(o) {
        return o == null || isNaN((o = +o)) ? n : t[hi(r, o)];
    }
    return (
        (a.invertExtent = function (o) {
            var u = t.indexOf(o);
            return u < 0
                ? [NaN, NaN]
                : [
                      u > 0 ? r[u - 1] : e[0],
                      u < r.length ? r[u] : e[e.length - 1],
                  ];
        }),
        (a.domain = function (o) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
            return e.sort(Rt), i();
        }),
        (a.range = function (o) {
            return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
        }),
        (a.unknown = function (o) {
            return arguments.length ? ((n = o), a) : n;
        }),
        (a.quantiles = function () {
            return r.slice();
        }),
        (a.copy = function () {
            return ux().domain(e).range(t).unknown(n);
        }),
        et.apply(a, arguments)
    );
}
function cx() {
    var e = 0,
        t = 1,
        r = 1,
        n = [0.5],
        i = [0, 1],
        a;
    function o(c) {
        return c != null && c <= c ? i[hi(n, c, 0, r)] : a;
    }
    function u() {
        var c = -1;
        for (n = new Array(r); ++c < r; )
            n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
        return o;
    }
    return (
        (o.domain = function (c) {
            return arguments.length
                ? (([e, t] = c), (e = +e), (t = +t), u())
                : [e, t];
        }),
        (o.range = function (c) {
            return arguments.length
                ? ((r = (i = Array.from(c)).length - 1), u())
                : i.slice();
        }),
        (o.invertExtent = function (c) {
            var s = i.indexOf(c);
            return s < 0
                ? [NaN, NaN]
                : s < 1
                  ? [e, n[0]]
                  : s >= r
                    ? [n[r - 1], t]
                    : [n[s - 1], n[s]];
        }),
        (o.unknown = function (c) {
            return arguments.length && (a = c), o;
        }),
        (o.thresholds = function () {
            return n.slice();
        }),
        (o.copy = function () {
            return cx().domain([e, t]).range(i).unknown(a);
        }),
        et.apply(qt(o), arguments)
    );
}
function sx() {
    var e = [0.5],
        t = [0, 1],
        r,
        n = 1;
    function i(a) {
        return a != null && a <= a ? t[hi(e, a, 0, n)] : r;
    }
    return (
        (i.domain = function (a) {
            return arguments.length
                ? ((e = Array.from(a)),
                  (n = Math.min(e.length, t.length - 1)),
                  i)
                : e.slice();
        }),
        (i.range = function (a) {
            return arguments.length
                ? ((t = Array.from(a)),
                  (n = Math.min(e.length, t.length - 1)),
                  i)
                : t.slice();
        }),
        (i.invertExtent = function (a) {
            var o = t.indexOf(a);
            return [e[o - 1], e[o]];
        }),
        (i.unknown = function (a) {
            return arguments.length ? ((r = a), i) : r;
        }),
        (i.copy = function () {
            return sx().domain(e).range(t).unknown(r);
        }),
        et.apply(i, arguments)
    );
}
const Es = new Date(),
    js = new Date();
function Se(e, t, r, n) {
    function i(a) {
        return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a;
    }
    return (
        (i.floor = (a) => (e((a = new Date(+a))), a)),
        (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
        (i.round = (a) => {
            const o = i(a),
                u = i.ceil(a);
            return a - o < u - a ? o : u;
        }),
        (i.offset = (a, o) => (
            t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a
        )),
        (i.range = (a, o, u) => {
            const c = [];
            if (
                ((a = i.ceil(a)),
                (u = u == null ? 1 : Math.floor(u)),
                !(a < o) || !(u > 0))
            )
                return c;
            let s;
            do c.push((s = new Date(+a))), t(a, u), e(a);
            while (s < a && a < o);
            return c;
        }),
        (i.filter = (a) =>
            Se(
                (o) => {
                    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
                },
                (o, u) => {
                    if (o >= o)
                        if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
                        else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
                }
            )),
        r &&
            ((i.count = (a, o) => (
                Es.setTime(+a),
                js.setTime(+o),
                e(Es),
                e(js),
                Math.floor(r(Es, js))
            )),
            (i.every = (a) => (
                (a = Math.floor(a)),
                !isFinite(a) || !(a > 0)
                    ? null
                    : a > 1
                      ? i.filter(
                            n
                                ? (o) => n(o) % a === 0
                                : (o) => i.count(0, o) % a === 0
                        )
                      : i
            ))),
        i
    );
}
const Qi = Se(
    () => {},
    (e, t) => {
        e.setTime(+e + t);
    },
    (e, t) => t - e
);
Qi.every = (e) => (
    (e = Math.floor(e)),
    !isFinite(e) || !(e > 0)
        ? null
        : e > 1
          ? Se(
                (t) => {
                    t.setTime(Math.floor(t / e) * e);
                },
                (t, r) => {
                    t.setTime(+t + r * e);
                },
                (t, r) => (r - t) / e
            )
          : Qi
);
Qi.range;
const mt = 1e3,
    Je = mt * 60,
    gt = Je * 60,
    At = gt * 24,
    xh = At * 7,
    cm = At * 30,
    Ms = At * 365,
    Jt = Se(
        (e) => {
            e.setTime(e - e.getMilliseconds());
        },
        (e, t) => {
            e.setTime(+e + t * mt);
        },
        (e, t) => (t - e) / mt,
        (e) => e.getUTCSeconds()
    );
Jt.range;
const wh = Se(
    (e) => {
        e.setTime(e - e.getMilliseconds() - e.getSeconds() * mt);
    },
    (e, t) => {
        e.setTime(+e + t * Je);
    },
    (e, t) => (t - e) / Je,
    (e) => e.getMinutes()
);
wh.range;
const Oh = Se(
    (e) => {
        e.setUTCSeconds(0, 0);
    },
    (e, t) => {
        e.setTime(+e + t * Je);
    },
    (e, t) => (t - e) / Je,
    (e) => e.getUTCMinutes()
);
Oh.range;
const _h = Se(
    (e) => {
        e.setTime(
            e - e.getMilliseconds() - e.getSeconds() * mt - e.getMinutes() * Je
        );
    },
    (e, t) => {
        e.setTime(+e + t * gt);
    },
    (e, t) => (t - e) / gt,
    (e) => e.getHours()
);
_h.range;
const Ah = Se(
    (e) => {
        e.setUTCMinutes(0, 0, 0);
    },
    (e, t) => {
        e.setTime(+e + t * gt);
    },
    (e, t) => (t - e) / gt,
    (e) => e.getUTCHours()
);
Ah.range;
const vi = Se(
    (e) => e.setHours(0, 0, 0, 0),
    (e, t) => e.setDate(e.getDate() + t),
    (e, t) =>
        (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Je) / At,
    (e) => e.getDate() - 1
);
vi.range;
const Ga = Se(
    (e) => {
        e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
    },
    (e, t) => (t - e) / At,
    (e) => e.getUTCDate() - 1
);
Ga.range;
const lx = Se(
    (e) => {
        e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
    },
    (e, t) => (t - e) / At,
    (e) => Math.floor(e / At)
);
lx.range;
function lr(e) {
    return Se(
        (t) => {
            t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
                t.setHours(0, 0, 0, 0);
        },
        (t, r) => {
            t.setDate(t.getDate() + r * 7);
        },
        (t, r) =>
            (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Je) / xh
    );
}
const Va = lr(0),
    ea = lr(1),
    RT = lr(2),
    DT = lr(3),
    Cr = lr(4),
    NT = lr(5),
    qT = lr(6);
Va.range;
ea.range;
RT.range;
DT.range;
Cr.range;
NT.range;
qT.range;
function fr(e) {
    return Se(
        (t) => {
            t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
                t.setUTCHours(0, 0, 0, 0);
        },
        (t, r) => {
            t.setUTCDate(t.getUTCDate() + r * 7);
        },
        (t, r) => (r - t) / xh
    );
}
const Xa = fr(0),
    ta = fr(1),
    LT = fr(2),
    BT = fr(3),
    Ir = fr(4),
    FT = fr(5),
    zT = fr(6);
Xa.range;
ta.range;
LT.range;
BT.range;
Ir.range;
FT.range;
zT.range;
const Sh = Se(
    (e) => {
        e.setDate(1), e.setHours(0, 0, 0, 0);
    },
    (e, t) => {
        e.setMonth(e.getMonth() + t);
    },
    (e, t) =>
        t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
    (e) => e.getMonth()
);
Sh.range;
const Ph = Se(
    (e) => {
        e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
        e.setUTCMonth(e.getUTCMonth() + t);
    },
    (e, t) =>
        t.getUTCMonth() -
        e.getUTCMonth() +
        (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
    (e) => e.getUTCMonth()
);
Ph.range;
const St = Se(
    (e) => {
        e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    },
    (e, t) => {
        e.setFullYear(e.getFullYear() + t);
    },
    (e, t) => t.getFullYear() - e.getFullYear(),
    (e) => e.getFullYear()
);
St.every = (e) =>
    !isFinite((e = Math.floor(e))) || !(e > 0)
        ? null
        : Se(
              (t) => {
                  t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                      t.setMonth(0, 1),
                      t.setHours(0, 0, 0, 0);
              },
              (t, r) => {
                  t.setFullYear(t.getFullYear() + r * e);
              }
          );
St.range;
const Pt = Se(
    (e) => {
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
        e.setUTCFullYear(e.getUTCFullYear() + t);
    },
    (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
    (e) => e.getUTCFullYear()
);
Pt.every = (e) =>
    !isFinite((e = Math.floor(e))) || !(e > 0)
        ? null
        : Se(
              (t) => {
                  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                      t.setUTCMonth(0, 1),
                      t.setUTCHours(0, 0, 0, 0);
              },
              (t, r) => {
                  t.setUTCFullYear(t.getUTCFullYear() + r * e);
              }
          );
Pt.range;
function fx(e, t, r, n, i, a) {
    const o = [
        [Jt, 1, mt],
        [Jt, 5, 5 * mt],
        [Jt, 15, 15 * mt],
        [Jt, 30, 30 * mt],
        [a, 1, Je],
        [a, 5, 5 * Je],
        [a, 15, 15 * Je],
        [a, 30, 30 * Je],
        [i, 1, gt],
        [i, 3, 3 * gt],
        [i, 6, 6 * gt],
        [i, 12, 12 * gt],
        [n, 1, At],
        [n, 2, 2 * At],
        [r, 1, xh],
        [t, 1, cm],
        [t, 3, 3 * cm],
        [e, 1, Ms],
    ];
    function u(s, f, l) {
        const h = f < s;
        h && ([s, f] = [f, s]);
        const p = l && typeof l.range == 'function' ? l : c(s, f, l),
            y = p ? p.range(s, +f + 1) : [];
        return h ? y.reverse() : y;
    }
    function c(s, f, l) {
        const h = Math.abs(f - s) / l,
            p = ch(([, , d]) => d).right(o, h);
        if (p === o.length) return e.every(Ll(s / Ms, f / Ms, l));
        if (p === 0) return Qi.every(Math.max(Ll(s, f, l), 1));
        const [y, v] = o[h / o[p - 1][2] < o[p][2] / h ? p - 1 : p];
        return y.every(v);
    }
    return [u, c];
}
const [WT, UT] = fx(Pt, Ph, Xa, lx, Ah, Oh),
    [HT, KT] = fx(St, Sh, Va, vi, _h, wh);
function $s(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y), t;
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Cs(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y), t;
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function fn(e, t, r) {
    return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function GT(e) {
    var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        a = e.days,
        o = e.shortDays,
        u = e.months,
        c = e.shortMonths,
        s = hn(i),
        f = pn(i),
        l = hn(a),
        h = pn(a),
        p = hn(o),
        y = pn(o),
        v = hn(u),
        d = pn(u),
        g = hn(c),
        x = pn(c),
        w = {
            a: R,
            A: L,
            b: B,
            B: U,
            c: null,
            d: dm,
            e: dm,
            f: yE,
            g: PE,
            G: EE,
            H: pE,
            I: dE,
            j: vE,
            L: hx,
            m: mE,
            M: gE,
            p: G,
            q: z,
            Q: mm,
            s: gm,
            S: bE,
            u: xE,
            U: wE,
            V: OE,
            w: _E,
            W: AE,
            x: null,
            X: null,
            y: SE,
            Y: TE,
            Z: jE,
            '%': ym,
        },
        O = {
            a: V,
            A: he,
            b: me,
            B: Be,
            c: null,
            d: vm,
            e: vm,
            f: IE,
            g: WE,
            G: HE,
            H: ME,
            I: $E,
            j: CE,
            L: dx,
            m: kE,
            M: RE,
            p: Ft,
            q: De,
            Q: mm,
            s: gm,
            S: DE,
            u: NE,
            U: qE,
            V: LE,
            w: BE,
            W: FE,
            x: null,
            X: null,
            y: zE,
            Y: UE,
            Z: KE,
            '%': ym,
        },
        m = {
            a: M,
            A: P,
            b: E,
            B: j,
            c: C,
            d: hm,
            e: hm,
            f: sE,
            g: fm,
            G: lm,
            H: pm,
            I: pm,
            j: aE,
            L: cE,
            m: iE,
            M: oE,
            p: T,
            q: nE,
            Q: fE,
            s: hE,
            S: uE,
            u: JT,
            U: QT,
            V: eE,
            w: ZT,
            W: tE,
            x: $,
            X: k,
            y: fm,
            Y: lm,
            Z: rE,
            '%': lE,
        };
    (w.x = b(r, w)),
        (w.X = b(n, w)),
        (w.c = b(t, w)),
        (O.x = b(r, O)),
        (O.X = b(n, O)),
        (O.c = b(t, O));
    function b(F, J) {
        return function (ee) {
            var D = [],
                ve = -1,
                te = 0,
                xe = F.length,
                we,
                Ne,
                $t;
            for (ee instanceof Date || (ee = new Date(+ee)); ++ve < xe; )
                F.charCodeAt(ve) === 37 &&
                    (D.push(F.slice(te, ve)),
                    (Ne = sm[(we = F.charAt(++ve))]) != null
                        ? (we = F.charAt(++ve))
                        : (Ne = we === 'e' ? ' ' : '0'),
                    ($t = J[we]) && (we = $t(ee, Ne)),
                    D.push(we),
                    (te = ve + 1));
            return D.push(F.slice(te, ve)), D.join('');
        };
    }
    function _(F, J) {
        return function (ee) {
            var D = fn(1900, void 0, 1),
                ve = A(D, F, (ee += ''), 0),
                te,
                xe;
            if (ve != ee.length) return null;
            if ('Q' in D) return new Date(D.Q);
            if ('s' in D) return new Date(D.s * 1e3 + ('L' in D ? D.L : 0));
            if (
                (J && !('Z' in D) && (D.Z = 0),
                'p' in D && (D.H = (D.H % 12) + D.p * 12),
                D.m === void 0 && (D.m = 'q' in D ? D.q : 0),
                'V' in D)
            ) {
                if (D.V < 1 || D.V > 53) return null;
                'w' in D || (D.w = 1),
                    'Z' in D
                        ? ((te = Cs(fn(D.y, 0, 1))),
                          (xe = te.getUTCDay()),
                          (te = xe > 4 || xe === 0 ? ta.ceil(te) : ta(te)),
                          (te = Ga.offset(te, (D.V - 1) * 7)),
                          (D.y = te.getUTCFullYear()),
                          (D.m = te.getUTCMonth()),
                          (D.d = te.getUTCDate() + ((D.w + 6) % 7)))
                        : ((te = $s(fn(D.y, 0, 1))),
                          (xe = te.getDay()),
                          (te = xe > 4 || xe === 0 ? ea.ceil(te) : ea(te)),
                          (te = vi.offset(te, (D.V - 1) * 7)),
                          (D.y = te.getFullYear()),
                          (D.m = te.getMonth()),
                          (D.d = te.getDate() + ((D.w + 6) % 7)));
            } else
                ('W' in D || 'U' in D) &&
                    ('w' in D || (D.w = 'u' in D ? D.u % 7 : 'W' in D ? 1 : 0),
                    (xe =
                        'Z' in D
                            ? Cs(fn(D.y, 0, 1)).getUTCDay()
                            : $s(fn(D.y, 0, 1)).getDay()),
                    (D.m = 0),
                    (D.d =
                        'W' in D
                            ? ((D.w + 6) % 7) + D.W * 7 - ((xe + 5) % 7)
                            : D.w + D.U * 7 - ((xe + 6) % 7)));
            return 'Z' in D
                ? ((D.H += (D.Z / 100) | 0), (D.M += D.Z % 100), Cs(D))
                : $s(D);
        };
    }
    function A(F, J, ee, D) {
        for (var ve = 0, te = J.length, xe = ee.length, we, Ne; ve < te; ) {
            if (D >= xe) return -1;
            if (((we = J.charCodeAt(ve++)), we === 37)) {
                if (
                    ((we = J.charAt(ve++)),
                    (Ne = m[we in sm ? J.charAt(ve++) : we]),
                    !Ne || (D = Ne(F, ee, D)) < 0)
                )
                    return -1;
            } else if (we != ee.charCodeAt(D++)) return -1;
        }
        return D;
    }
    function T(F, J, ee) {
        var D = s.exec(J.slice(ee));
        return D ? ((F.p = f.get(D[0].toLowerCase())), ee + D[0].length) : -1;
    }
    function M(F, J, ee) {
        var D = p.exec(J.slice(ee));
        return D ? ((F.w = y.get(D[0].toLowerCase())), ee + D[0].length) : -1;
    }
    function P(F, J, ee) {
        var D = l.exec(J.slice(ee));
        return D ? ((F.w = h.get(D[0].toLowerCase())), ee + D[0].length) : -1;
    }
    function E(F, J, ee) {
        var D = g.exec(J.slice(ee));
        return D ? ((F.m = x.get(D[0].toLowerCase())), ee + D[0].length) : -1;
    }
    function j(F, J, ee) {
        var D = v.exec(J.slice(ee));
        return D ? ((F.m = d.get(D[0].toLowerCase())), ee + D[0].length) : -1;
    }
    function C(F, J, ee) {
        return A(F, t, J, ee);
    }
    function $(F, J, ee) {
        return A(F, r, J, ee);
    }
    function k(F, J, ee) {
        return A(F, n, J, ee);
    }
    function R(F) {
        return o[F.getDay()];
    }
    function L(F) {
        return a[F.getDay()];
    }
    function B(F) {
        return c[F.getMonth()];
    }
    function U(F) {
        return u[F.getMonth()];
    }
    function G(F) {
        return i[+(F.getHours() >= 12)];
    }
    function z(F) {
        return 1 + ~~(F.getMonth() / 3);
    }
    function V(F) {
        return o[F.getUTCDay()];
    }
    function he(F) {
        return a[F.getUTCDay()];
    }
    function me(F) {
        return c[F.getUTCMonth()];
    }
    function Be(F) {
        return u[F.getUTCMonth()];
    }
    function Ft(F) {
        return i[+(F.getUTCHours() >= 12)];
    }
    function De(F) {
        return 1 + ~~(F.getUTCMonth() / 3);
    }
    return {
        format: function (F) {
            var J = b((F += ''), w);
            return (
                (J.toString = function () {
                    return F;
                }),
                J
            );
        },
        parse: function (F) {
            var J = _((F += ''), !1);
            return (
                (J.toString = function () {
                    return F;
                }),
                J
            );
        },
        utcFormat: function (F) {
            var J = b((F += ''), O);
            return (
                (J.toString = function () {
                    return F;
                }),
                J
            );
        },
        utcParse: function (F) {
            var J = _((F += ''), !0);
            return (
                (J.toString = function () {
                    return F;
                }),
                J
            );
        },
    };
}
var sm = { '-': '', _: ' ', 0: '0' },
    Ee = /^\s*\d+/,
    VT = /^%/,
    XT = /[\\^$*+?|[\]().{}]/g;
function ne(e, t, r) {
    var n = e < 0 ? '-' : '',
        i = (n ? -e : e) + '',
        a = i.length;
    return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function YT(e) {
    return e.replace(XT, '\\$&');
}
function hn(e) {
    return new RegExp('^(?:' + e.map(YT).join('|') + ')', 'i');
}
function pn(e) {
    return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function ZT(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 1));
    return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function JT(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 1));
    return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function QT(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function eE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function tE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function lm(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 4));
    return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function fm(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n
        ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
        : -1;
}
function rE(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    return n
        ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || '00'))), r + n[0].length)
        : -1;
}
function nE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 1));
    return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function iE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function hm(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function aE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 3));
    return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function pm(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function oE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function uE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 2));
    return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function cE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 3));
    return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function sE(e, t, r) {
    var n = Ee.exec(t.slice(r, r + 6));
    return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function lE(e, t, r) {
    var n = VT.exec(t.slice(r, r + 1));
    return n ? r + n[0].length : -1;
}
function fE(e, t, r) {
    var n = Ee.exec(t.slice(r));
    return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function hE(e, t, r) {
    var n = Ee.exec(t.slice(r));
    return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function dm(e, t) {
    return ne(e.getDate(), t, 2);
}
function pE(e, t) {
    return ne(e.getHours(), t, 2);
}
function dE(e, t) {
    return ne(e.getHours() % 12 || 12, t, 2);
}
function vE(e, t) {
    return ne(1 + vi.count(St(e), e), t, 3);
}
function hx(e, t) {
    return ne(e.getMilliseconds(), t, 3);
}
function yE(e, t) {
    return hx(e, t) + '000';
}
function mE(e, t) {
    return ne(e.getMonth() + 1, t, 2);
}
function gE(e, t) {
    return ne(e.getMinutes(), t, 2);
}
function bE(e, t) {
    return ne(e.getSeconds(), t, 2);
}
function xE(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t;
}
function wE(e, t) {
    return ne(Va.count(St(e) - 1, e), t, 2);
}
function px(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? Cr(e) : Cr.ceil(e);
}
function OE(e, t) {
    return (e = px(e)), ne(Cr.count(St(e), e) + (St(e).getDay() === 4), t, 2);
}
function _E(e) {
    return e.getDay();
}
function AE(e, t) {
    return ne(ea.count(St(e) - 1, e), t, 2);
}
function SE(e, t) {
    return ne(e.getFullYear() % 100, t, 2);
}
function PE(e, t) {
    return (e = px(e)), ne(e.getFullYear() % 100, t, 2);
}
function TE(e, t) {
    return ne(e.getFullYear() % 1e4, t, 4);
}
function EE(e, t) {
    var r = e.getDay();
    return (
        (e = r >= 4 || r === 0 ? Cr(e) : Cr.ceil(e)),
        ne(e.getFullYear() % 1e4, t, 4)
    );
}
function jE(e) {
    var t = e.getTimezoneOffset();
    return (
        (t > 0 ? '-' : ((t *= -1), '+')) +
        ne((t / 60) | 0, '0', 2) +
        ne(t % 60, '0', 2)
    );
}
function vm(e, t) {
    return ne(e.getUTCDate(), t, 2);
}
function ME(e, t) {
    return ne(e.getUTCHours(), t, 2);
}
function $E(e, t) {
    return ne(e.getUTCHours() % 12 || 12, t, 2);
}
function CE(e, t) {
    return ne(1 + Ga.count(Pt(e), e), t, 3);
}
function dx(e, t) {
    return ne(e.getUTCMilliseconds(), t, 3);
}
function IE(e, t) {
    return dx(e, t) + '000';
}
function kE(e, t) {
    return ne(e.getUTCMonth() + 1, t, 2);
}
function RE(e, t) {
    return ne(e.getUTCMinutes(), t, 2);
}
function DE(e, t) {
    return ne(e.getUTCSeconds(), t, 2);
}
function NE(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t;
}
function qE(e, t) {
    return ne(Xa.count(Pt(e) - 1, e), t, 2);
}
function vx(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? Ir(e) : Ir.ceil(e);
}
function LE(e, t) {
    return (
        (e = vx(e)), ne(Ir.count(Pt(e), e) + (Pt(e).getUTCDay() === 4), t, 2)
    );
}
function BE(e) {
    return e.getUTCDay();
}
function FE(e, t) {
    return ne(ta.count(Pt(e) - 1, e), t, 2);
}
function zE(e, t) {
    return ne(e.getUTCFullYear() % 100, t, 2);
}
function WE(e, t) {
    return (e = vx(e)), ne(e.getUTCFullYear() % 100, t, 2);
}
function UE(e, t) {
    return ne(e.getUTCFullYear() % 1e4, t, 4);
}
function HE(e, t) {
    var r = e.getUTCDay();
    return (
        (e = r >= 4 || r === 0 ? Ir(e) : Ir.ceil(e)),
        ne(e.getUTCFullYear() % 1e4, t, 4)
    );
}
function KE() {
    return '+0000';
}
function ym() {
    return '%';
}
function mm(e) {
    return +e;
}
function gm(e) {
    return Math.floor(+e / 1e3);
}
var vr, yx, mx;
GE({
    dateTime: '%x, %X',
    date: '%-m/%-d/%Y',
    time: '%-I:%M:%S %p',
    periods: ['AM', 'PM'],
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
});
function GE(e) {
    return (
        (vr = GT(e)),
        (yx = vr.format),
        vr.parse,
        (mx = vr.utcFormat),
        vr.utcParse,
        vr
    );
}
function VE(e) {
    return new Date(e);
}
function XE(e) {
    return e instanceof Date ? +e : +new Date(+e);
}
function Th(e, t, r, n, i, a, o, u, c, s) {
    var f = ph(),
        l = f.invert,
        h = f.domain,
        p = s('.%L'),
        y = s(':%S'),
        v = s('%I:%M'),
        d = s('%I %p'),
        g = s('%a %d'),
        x = s('%b %d'),
        w = s('%B'),
        O = s('%Y');
    function m(b) {
        return (
            c(b) < b
                ? p
                : u(b) < b
                  ? y
                  : o(b) < b
                    ? v
                    : a(b) < b
                      ? d
                      : n(b) < b
                        ? i(b) < b
                            ? g
                            : x
                        : r(b) < b
                          ? w
                          : O
        )(b);
    }
    return (
        (f.invert = function (b) {
            return new Date(l(b));
        }),
        (f.domain = function (b) {
            return arguments.length ? h(Array.from(b, XE)) : h().map(VE);
        }),
        (f.ticks = function (b) {
            var _ = h();
            return e(_[0], _[_.length - 1], b ?? 10);
        }),
        (f.tickFormat = function (b, _) {
            return _ == null ? m : s(_);
        }),
        (f.nice = function (b) {
            var _ = h();
            return (
                (!b || typeof b.range != 'function') &&
                    (b = t(_[0], _[_.length - 1], b ?? 10)),
                b ? h(nx(_, b)) : f
            );
        }),
        (f.copy = function () {
            return di(f, Th(e, t, r, n, i, a, o, u, c, s));
        }),
        f
    );
}
function YE() {
    return et.apply(
        Th(HT, KT, St, Sh, Va, vi, _h, wh, Jt, yx).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
        ]),
        arguments
    );
}
function ZE() {
    return et.apply(
        Th(WT, UT, Pt, Ph, Xa, Ga, Ah, Oh, Jt, mx).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
        ]),
        arguments
    );
}
function Ya() {
    var e = 0,
        t = 1,
        r,
        n,
        i,
        a,
        o = Re,
        u = !1,
        c;
    function s(l) {
        return l == null || isNaN((l = +l))
            ? c
            : o(
                  i === 0
                      ? 0.5
                      : ((l = (a(l) - r) * i),
                        u ? Math.max(0, Math.min(1, l)) : l)
              );
    }
    (s.domain = function (l) {
        return arguments.length
            ? (([e, t] = l),
              (r = a((e = +e))),
              (n = a((t = +t))),
              (i = r === n ? 0 : 1 / (n - r)),
              s)
            : [e, t];
    }),
        (s.clamp = function (l) {
            return arguments.length ? ((u = !!l), s) : u;
        }),
        (s.interpolator = function (l) {
            return arguments.length ? ((o = l), s) : o;
        });
    function f(l) {
        return function (h) {
            var p, y;
            return arguments.length
                ? (([p, y] = h), (o = l(p, y)), s)
                : [o(0), o(1)];
        };
    }
    return (
        (s.range = f(an)),
        (s.rangeRound = f(hh)),
        (s.unknown = function (l) {
            return arguments.length ? ((c = l), s) : c;
        }),
        function (l) {
            return (
                (a = l),
                (r = l(e)),
                (n = l(t)),
                (i = r === n ? 0 : 1 / (n - r)),
                s
            );
        }
    );
}
function Lt(e, t) {
    return t
        .domain(e.domain())
        .interpolator(e.interpolator())
        .clamp(e.clamp())
        .unknown(e.unknown());
}
function gx() {
    var e = qt(Ya()(Re));
    return (
        (e.copy = function () {
            return Lt(e, gx());
        }),
        jt.apply(e, arguments)
    );
}
function bx() {
    var e = yh(Ya()).domain([1, 10]);
    return (
        (e.copy = function () {
            return Lt(e, bx()).base(e.base());
        }),
        jt.apply(e, arguments)
    );
}
function xx() {
    var e = mh(Ya());
    return (
        (e.copy = function () {
            return Lt(e, xx()).constant(e.constant());
        }),
        jt.apply(e, arguments)
    );
}
function Eh() {
    var e = gh(Ya());
    return (
        (e.copy = function () {
            return Lt(e, Eh()).exponent(e.exponent());
        }),
        jt.apply(e, arguments)
    );
}
function JE() {
    return Eh.apply(null, arguments).exponent(0.5);
}
function wx() {
    var e = [],
        t = Re;
    function r(n) {
        if (n != null && !isNaN((n = +n)))
            return t((hi(e, n, 1) - 1) / (e.length - 1));
    }
    return (
        (r.domain = function (n) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
            return e.sort(Rt), r;
        }),
        (r.interpolator = function (n) {
            return arguments.length ? ((t = n), r) : t;
        }),
        (r.range = function () {
            return e.map((n, i) => t(i / (e.length - 1)));
        }),
        (r.quantiles = function (n) {
            return Array.from({ length: n + 1 }, (i, a) => qP(e, a / n));
        }),
        (r.copy = function () {
            return wx(t).domain(e);
        }),
        jt.apply(r, arguments)
    );
}
function Za() {
    var e = 0,
        t = 0.5,
        r = 1,
        n = 1,
        i,
        a,
        o,
        u,
        c,
        s = Re,
        f,
        l = !1,
        h;
    function p(v) {
        return isNaN((v = +v))
            ? h
            : ((v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : c)),
              s(l ? Math.max(0, Math.min(1, v)) : v));
    }
    (p.domain = function (v) {
        return arguments.length
            ? (([e, t, r] = v),
              (i = f((e = +e))),
              (a = f((t = +t))),
              (o = f((r = +r))),
              (u = i === a ? 0 : 0.5 / (a - i)),
              (c = a === o ? 0 : 0.5 / (o - a)),
              (n = a < i ? -1 : 1),
              p)
            : [e, t, r];
    }),
        (p.clamp = function (v) {
            return arguments.length ? ((l = !!v), p) : l;
        }),
        (p.interpolator = function (v) {
            return arguments.length ? ((s = v), p) : s;
        });
    function y(v) {
        return function (d) {
            var g, x, w;
            return arguments.length
                ? (([g, x, w] = d), (s = lT(v, [g, x, w])), p)
                : [s(0), s(0.5), s(1)];
        };
    }
    return (
        (p.range = y(an)),
        (p.rangeRound = y(hh)),
        (p.unknown = function (v) {
            return arguments.length ? ((h = v), p) : h;
        }),
        function (v) {
            return (
                (f = v),
                (i = v(e)),
                (a = v(t)),
                (o = v(r)),
                (u = i === a ? 0 : 0.5 / (a - i)),
                (c = a === o ? 0 : 0.5 / (o - a)),
                (n = a < i ? -1 : 1),
                p
            );
        }
    );
}
function Ox() {
    var e = qt(Za()(Re));
    return (
        (e.copy = function () {
            return Lt(e, Ox());
        }),
        jt.apply(e, arguments)
    );
}
function _x() {
    var e = yh(Za()).domain([0.1, 1, 10]);
    return (
        (e.copy = function () {
            return Lt(e, _x()).base(e.base());
        }),
        jt.apply(e, arguments)
    );
}
function Ax() {
    var e = mh(Za());
    return (
        (e.copy = function () {
            return Lt(e, Ax()).constant(e.constant());
        }),
        jt.apply(e, arguments)
    );
}
function jh() {
    var e = gh(Za());
    return (
        (e.copy = function () {
            return Lt(e, jh()).exponent(e.exponent());
        }),
        jt.apply(e, arguments)
    );
}
function QE() {
    return jh.apply(null, arguments).exponent(0.5);
}
const bm = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            scaleBand: Rn,
            scaleDiverging: Ox,
            scaleDivergingLog: _x,
            scaleDivergingPow: jh,
            scaleDivergingSqrt: QE,
            scaleDivergingSymlog: Ax,
            scaleIdentity: rx,
            scaleImplicit: Bl,
            scaleLinear: Ji,
            scaleLog: ix,
            scaleOrdinal: sh,
            scalePoint: On,
            scalePow: bh,
            scaleQuantile: ux,
            scaleQuantize: cx,
            scaleRadial: ox,
            scaleSequential: gx,
            scaleSequentialLog: bx,
            scaleSequentialPow: Eh,
            scaleSequentialQuantile: wx,
            scaleSequentialSqrt: JE,
            scaleSequentialSymlog: xx,
            scaleSqrt: IT,
            scaleSymlog: ax,
            scaleThreshold: sx,
            scaleTime: YE,
            scaleUtc: ZE,
            tickFormat: tx,
        },
        Symbol.toStringTag,
        { value: 'Module' }
    )
);
var Is, xm;
function Ja() {
    if (xm) return Is;
    xm = 1;
    var e = en();
    function t(r, n, i) {
        for (var a = -1, o = r.length; ++a < o; ) {
            var u = r[a],
                c = n(u);
            if (c != null && (s === void 0 ? c === c && !e(c) : i(c, s)))
                var s = c,
                    f = u;
        }
        return f;
    }
    return (Is = t), Is;
}
var ks, wm;
function Sx() {
    if (wm) return ks;
    wm = 1;
    function e(t, r) {
        return t > r;
    }
    return (ks = e), ks;
}
var Rs, Om;
function ej() {
    if (Om) return Rs;
    Om = 1;
    var e = Ja(),
        t = Sx(),
        r = nn();
    function n(i) {
        return i && i.length ? e(i, r, t) : void 0;
    }
    return (Rs = n), Rs;
}
var tj = ej();
const Qa = ce(tj);
var Ds, _m;
function Px() {
    if (_m) return Ds;
    _m = 1;
    function e(t, r) {
        return t < r;
    }
    return (Ds = e), Ds;
}
var Ns, Am;
function rj() {
    if (Am) return Ns;
    Am = 1;
    var e = Ja(),
        t = Px(),
        r = nn();
    function n(i) {
        return i && i.length ? e(i, r, t) : void 0;
    }
    return (Ns = n), Ns;
}
var nj = rj();
const eo = ce(nj);
var qs, Sm;
function ij() {
    if (Sm) return qs;
    Sm = 1;
    var e = Hf(),
        t = dt(),
        r = k0(),
        n = Le();
    function i(a, o) {
        var u = n(a) ? e : r;
        return u(a, t(o, 3));
    }
    return (qs = i), qs;
}
var Ls, Pm;
function aj() {
    if (Pm) return Ls;
    Pm = 1;
    var e = C0(),
        t = ij();
    function r(n, i) {
        return e(t(n, i), 1);
    }
    return (Ls = r), Ls;
}
var oj = aj();
const uj = ce(oj);
var Bs, Tm;
function cj() {
    if (Tm) return Bs;
    Tm = 1;
    var e = ih();
    function t(r, n) {
        return e(r, n);
    }
    return (Bs = t), Bs;
}
var sj = cj();
const yi = ce(sj);
var on = 1e9,
    lj = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286',
    },
    $h,
    de = !0,
    Qe = '[DecimalError] ',
    tr = Qe + 'Invalid argument: ',
    Mh = Qe + 'Exponent out of range: ',
    un = Math.floor,
    Vt = Math.pow,
    fj = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    He,
    Pe = 1e7,
    pe = 7,
    Tx = 9007199254740991,
    ra = un(Tx / pe),
    W = {};
W.absoluteValue = W.abs = function () {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e;
};
W.comparedTo = W.cmp = function (e) {
    var t,
        r,
        n,
        i,
        a = this;
    if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
    if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
    for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
    return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
W.decimalPlaces = W.dp = function () {
    var e = this,
        t = e.d.length - 1,
        r = (t - e.e) * pe;
    if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
    return r < 0 ? 0 : r;
};
W.dividedBy = W.div = function (e) {
    return Ot(this, new this.constructor(e));
};
W.dividedToIntegerBy = W.idiv = function (e) {
    var t = this,
        r = t.constructor;
    return ue(Ot(t, new r(e), 0, 1), r.precision);
};
W.equals = W.eq = function (e) {
    return !this.cmp(e);
};
W.exponent = function () {
    return be(this);
};
W.greaterThan = W.gt = function (e) {
    return this.cmp(e) > 0;
};
W.greaterThanOrEqualTo = W.gte = function (e) {
    return this.cmp(e) >= 0;
};
W.isInteger = W.isint = function () {
    return this.e > this.d.length - 2;
};
W.isNegative = W.isneg = function () {
    return this.s < 0;
};
W.isPositive = W.ispos = function () {
    return this.s > 0;
};
W.isZero = function () {
    return this.s === 0;
};
W.lessThan = W.lt = function (e) {
    return this.cmp(e) < 0;
};
W.lessThanOrEqualTo = W.lte = function (e) {
    return this.cmp(e) < 1;
};
W.logarithm = W.log = function (e) {
    var t,
        r = this,
        n = r.constructor,
        i = n.precision,
        a = i + 5;
    if (e === void 0) e = new n(10);
    else if (((e = new n(e)), e.s < 1 || e.eq(He))) throw Error(Qe + 'NaN');
    if (r.s < 1) throw Error(Qe + (r.s ? 'NaN' : '-Infinity'));
    return r.eq(He)
        ? new n(0)
        : ((de = !1), (t = Ot(Bn(r, a), Bn(e, a), a)), (de = !0), ue(t, i));
};
W.minus = W.sub = function (e) {
    var t = this;
    return (
        (e = new t.constructor(e)),
        t.s == e.s ? Mx(t, e) : Ex(t, ((e.s = -e.s), e))
    );
};
W.modulo = W.mod = function (e) {
    var t,
        r = this,
        n = r.constructor,
        i = n.precision;
    if (((e = new n(e)), !e.s)) throw Error(Qe + 'NaN');
    return r.s
        ? ((de = !1), (t = Ot(r, e, 0, 1).times(e)), (de = !0), r.minus(t))
        : ue(new n(r), i);
};
W.naturalExponential = W.exp = function () {
    return jx(this);
};
W.naturalLogarithm = W.ln = function () {
    return Bn(this);
};
W.negated = W.neg = function () {
    var e = new this.constructor(this);
    return (e.s = -e.s || 0), e;
};
W.plus = W.add = function (e) {
    var t = this;
    return (
        (e = new t.constructor(e)),
        t.s == e.s ? Ex(t, e) : Mx(t, ((e.s = -e.s), e))
    );
};
W.precision = W.sd = function (e) {
    var t,
        r,
        n,
        i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(tr + e);
    if (
        ((t = be(i) + 1),
        (n = i.d.length - 1),
        (r = n * pe + 1),
        (n = i.d[n]),
        n)
    ) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = i.d[0]; n >= 10; n /= 10) r++;
    }
    return e && t > r ? t : r;
};
W.squareRoot = W.sqrt = function () {
    var e,
        t,
        r,
        n,
        i,
        a,
        o,
        u = this,
        c = u.constructor;
    if (u.s < 1) {
        if (!u.s) return new c(0);
        throw Error(Qe + 'NaN');
    }
    for (
        e = be(u),
            de = !1,
            i = Math.sqrt(+u),
            i == 0 || i == 1 / 0
                ? ((t = ct(u.d)),
                  (t.length + e) % 2 == 0 && (t += '0'),
                  (i = Math.sqrt(t)),
                  (e = un((e + 1) / 2) - (e < 0 || e % 2)),
                  i == 1 / 0
                      ? (t = '5e' + e)
                      : ((t = i.toExponential()),
                        (t = t.slice(0, t.indexOf('e') + 1) + e)),
                  (n = new c(t)))
                : (n = new c(i.toString())),
            r = c.precision,
            i = o = r + 3;
        ;

    )
        if (
            ((a = n),
            (n = a.plus(Ot(u, a, o + 2)).times(0.5)),
            ct(a.d).slice(0, o) === (t = ct(n.d)).slice(0, o))
        ) {
            if (((t = t.slice(o - 3, o + 1)), i == o && t == '4999')) {
                if ((ue(a, r + 1, 0), a.times(a).eq(u))) {
                    n = a;
                    break;
                }
            } else if (t != '9999') break;
            o += 4;
        }
    return (de = !0), ue(n, r);
};
W.times = W.mul = function (e) {
    var t,
        r,
        n,
        i,
        a,
        o,
        u,
        c,
        s,
        f = this,
        l = f.constructor,
        h = f.d,
        p = (e = new l(e)).d;
    if (!f.s || !e.s) return new l(0);
    for (
        e.s *= f.s,
            r = f.e + e.e,
            c = h.length,
            s = p.length,
            c < s && ((a = h), (h = p), (p = a), (o = c), (c = s), (s = o)),
            a = [],
            o = c + s,
            n = o;
        n--;

    )
        a.push(0);
    for (n = s; --n >= 0; ) {
        for (t = 0, i = c + n; i > n; )
            (u = a[i] + p[n] * h[i - n - 1] + t),
                (a[i--] = u % Pe | 0),
                (t = (u / Pe) | 0);
        a[i] = (a[i] + t) % Pe | 0;
    }
    for (; !a[--o]; ) a.pop();
    return (
        t ? ++r : a.shift(), (e.d = a), (e.e = r), de ? ue(e, l.precision) : e
    );
};
W.toDecimalPlaces = W.todp = function (e, t) {
    var r = this,
        n = r.constructor;
    return (
        (r = new n(r)),
        e === void 0
            ? r
            : (ft(e, 0, on),
              t === void 0 ? (t = n.rounding) : ft(t, 0, 8),
              ue(r, e + be(r) + 1, t))
    );
};
W.toExponential = function (e, t) {
    var r,
        n = this,
        i = n.constructor;
    return (
        e === void 0
            ? (r = ar(n, !0))
            : (ft(e, 0, on),
              t === void 0 ? (t = i.rounding) : ft(t, 0, 8),
              (n = ue(new i(n), e + 1, t)),
              (r = ar(n, !0, e + 1))),
        r
    );
};
W.toFixed = function (e, t) {
    var r,
        n,
        i = this,
        a = i.constructor;
    return e === void 0
        ? ar(i)
        : (ft(e, 0, on),
          t === void 0 ? (t = a.rounding) : ft(t, 0, 8),
          (n = ue(new a(i), e + be(i) + 1, t)),
          (r = ar(n.abs(), !1, e + be(n) + 1)),
          i.isneg() && !i.isZero() ? '-' + r : r);
};
W.toInteger = W.toint = function () {
    var e = this,
        t = e.constructor;
    return ue(new t(e), be(e) + 1, t.rounding);
};
W.toNumber = function () {
    return +this;
};
W.toPower = W.pow = function (e) {
    var t,
        r,
        n,
        i,
        a,
        o,
        u = this,
        c = u.constructor,
        s = 12,
        f = +(e = new c(e));
    if (!e.s) return new c(He);
    if (((u = new c(u)), !u.s)) {
        if (e.s < 1) throw Error(Qe + 'Infinity');
        return u;
    }
    if (u.eq(He)) return u;
    if (((n = c.precision), e.eq(He))) return ue(u, n);
    if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
        if ((r = f < 0 ? -f : f) <= Tx) {
            for (
                i = new c(He), t = Math.ceil(n / pe + 4), de = !1;
                r % 2 && ((i = i.times(u)), jm(i.d, t)),
                    (r = un(r / 2)),
                    r !== 0;

            )
                (u = u.times(u)), jm(u.d, t);
            return (de = !0), e.s < 0 ? new c(He).div(i) : ue(i, n);
        }
    } else if (a < 0) throw Error(Qe + 'NaN');
    return (
        (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
        (u.s = 1),
        (de = !1),
        (i = e.times(Bn(u, n + s))),
        (de = !0),
        (i = jx(i)),
        (i.s = a),
        i
    );
};
W.toPrecision = function (e, t) {
    var r,
        n,
        i = this,
        a = i.constructor;
    return (
        e === void 0
            ? ((r = be(i)), (n = ar(i, r <= a.toExpNeg || r >= a.toExpPos)))
            : (ft(e, 1, on),
              t === void 0 ? (t = a.rounding) : ft(t, 0, 8),
              (i = ue(new a(i), e, t)),
              (r = be(i)),
              (n = ar(i, e <= r || r <= a.toExpNeg, e))),
        n
    );
};
W.toSignificantDigits = W.tosd = function (e, t) {
    var r = this,
        n = r.constructor;
    return (
        e === void 0
            ? ((e = n.precision), (t = n.rounding))
            : (ft(e, 1, on), t === void 0 ? (t = n.rounding) : ft(t, 0, 8)),
        ue(new n(r), e, t)
    );
};
W.toString =
    W.valueOf =
    W.val =
    W.toJSON =
    W[Symbol.for('nodejs.util.inspect.custom')] =
        function () {
            var e = this,
                t = be(e),
                r = e.constructor;
            return ar(e, t <= r.toExpNeg || t >= r.toExpPos);
        };
function Ex(e, t) {
    var r,
        n,
        i,
        a,
        o,
        u,
        c,
        s,
        f = e.constructor,
        l = f.precision;
    if (!e.s || !t.s) return t.s || (t = new f(e)), de ? ue(t, l) : t;
    if (
        ((c = e.d),
        (s = t.d),
        (o = e.e),
        (i = t.e),
        (c = c.slice()),
        (a = o - i),
        a)
    ) {
        for (
            a < 0
                ? ((n = c), (a = -a), (u = s.length))
                : ((n = s), (i = o), (u = c.length)),
                o = Math.ceil(l / pe),
                u = o > u ? o + 1 : u + 1,
                a > u && ((a = u), (n.length = 1)),
                n.reverse();
            a--;

        )
            n.push(0);
        n.reverse();
    }
    for (
        u = c.length,
            a = s.length,
            u - a < 0 && ((a = u), (n = s), (s = c), (c = n)),
            r = 0;
        a;

    )
        (r = ((c[--a] = c[a] + s[a] + r) / Pe) | 0), (c[a] %= Pe);
    for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; ) c.pop();
    return (t.d = c), (t.e = i), de ? ue(t, l) : t;
}
function ft(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(tr + e);
}
function ct(e) {
    var t,
        r,
        n,
        i = e.length - 1,
        a = '',
        o = e[0];
    if (i > 0) {
        for (a += o, t = 1; t < i; t++)
            (n = e[t] + ''), (r = pe - n.length), r && (a += Ct(r)), (a += n);
        (o = e[t]), (n = o + ''), (r = pe - n.length), r && (a += Ct(r));
    } else if (o === 0) return '0';
    for (; o % 10 === 0; ) o /= 10;
    return a + o;
}
var Ot = (function () {
    function e(n, i) {
        var a,
            o = 0,
            u = n.length;
        for (n = n.slice(); u--; )
            (a = n[u] * i + o), (n[u] = a % Pe | 0), (o = (a / Pe) | 0);
        return o && n.unshift(o), n;
    }
    function t(n, i, a, o) {
        var u, c;
        if (a != o) c = a > o ? 1 : -1;
        else
            for (u = c = 0; u < a; u++)
                if (n[u] != i[u]) {
                    c = n[u] > i[u] ? 1 : -1;
                    break;
                }
        return c;
    }
    function r(n, i, a) {
        for (var o = 0; a--; )
            (n[a] -= o),
                (o = n[a] < i[a] ? 1 : 0),
                (n[a] = o * Pe + n[a] - i[a]);
        for (; !n[0] && n.length > 1; ) n.shift();
    }
    return function (n, i, a, o) {
        var u,
            c,
            s,
            f,
            l,
            h,
            p,
            y,
            v,
            d,
            g,
            x,
            w,
            O,
            m,
            b,
            _,
            A,
            T = n.constructor,
            M = n.s == i.s ? 1 : -1,
            P = n.d,
            E = i.d;
        if (!n.s) return new T(n);
        if (!i.s) throw Error(Qe + 'Division by zero');
        for (
            c = n.e - i.e,
                _ = E.length,
                m = P.length,
                p = new T(M),
                y = p.d = [],
                s = 0;
            E[s] == (P[s] || 0);

        )
            ++s;
        if (
            (E[s] > (P[s] || 0) && --c,
            a == null
                ? (x = a = T.precision)
                : o
                  ? (x = a + (be(n) - be(i)) + 1)
                  : (x = a),
            x < 0)
        )
            return new T(0);
        if (((x = (x / pe + 2) | 0), (s = 0), _ == 1))
            for (f = 0, E = E[0], x++; (s < m || f) && x--; s++)
                (w = f * Pe + (P[s] || 0)),
                    (y[s] = (w / E) | 0),
                    (f = w % E | 0);
        else {
            for (
                f = (Pe / (E[0] + 1)) | 0,
                    f > 1 &&
                        ((E = e(E, f)),
                        (P = e(P, f)),
                        (_ = E.length),
                        (m = P.length)),
                    O = _,
                    v = P.slice(0, _),
                    d = v.length;
                d < _;

            )
                v[d++] = 0;
            (A = E.slice()), A.unshift(0), (b = E[0]), E[1] >= Pe / 2 && ++b;
            do
                (f = 0),
                    (u = t(E, v, _, d)),
                    u < 0
                        ? ((g = v[0]),
                          _ != d && (g = g * Pe + (v[1] || 0)),
                          (f = (g / b) | 0),
                          f > 1
                              ? (f >= Pe && (f = Pe - 1),
                                (l = e(E, f)),
                                (h = l.length),
                                (d = v.length),
                                (u = t(l, v, h, d)),
                                u == 1 && (f--, r(l, _ < h ? A : E, h)))
                              : (f == 0 && (u = f = 1), (l = E.slice())),
                          (h = l.length),
                          h < d && l.unshift(0),
                          r(v, l, d),
                          u == -1 &&
                              ((d = v.length),
                              (u = t(E, v, _, d)),
                              u < 1 && (f++, r(v, _ < d ? A : E, d))),
                          (d = v.length))
                        : u === 0 && (f++, (v = [0])),
                    (y[s++] = f),
                    u && v[0] ? (v[d++] = P[O] || 0) : ((v = [P[O]]), (d = 1));
            while ((O++ < m || v[0] !== void 0) && x--);
        }
        return y[0] || y.shift(), (p.e = c), ue(p, o ? a + be(p) + 1 : a);
    };
})();
function jx(e, t) {
    var r,
        n,
        i,
        a,
        o,
        u,
        c = 0,
        s = 0,
        f = e.constructor,
        l = f.precision;
    if (be(e) > 16) throw Error(Mh + be(e));
    if (!e.s) return new f(He);
    for (de = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); )
        (e = e.times(o)), (s += 5);
    for (
        n = ((Math.log(Vt(2, s)) / Math.LN10) * 2 + 5) | 0,
            u += n,
            r = i = a = new f(He),
            f.precision = u;
        ;

    ) {
        if (
            ((i = ue(i.times(e), u)),
            (r = r.times(++c)),
            (o = a.plus(Ot(i, r, u))),
            ct(o.d).slice(0, u) === ct(a.d).slice(0, u))
        ) {
            for (; s--; ) a = ue(a.times(a), u);
            return (f.precision = l), t == null ? ((de = !0), ue(a, l)) : a;
        }
        a = o;
    }
}
function be(e) {
    for (var t = e.e * pe, r = e.d[0]; r >= 10; r /= 10) t++;
    return t;
}
function Fs(e, t, r) {
    if (t > e.LN10.sd())
        throw (
            ((de = !0),
            r && (e.precision = r),
            Error(Qe + 'LN10 precision limit exceeded'))
        );
    return ue(new e(e.LN10), t);
}
function Ct(e) {
    for (var t = ''; e--; ) t += '0';
    return t;
}
function Bn(e, t) {
    var r,
        n,
        i,
        a,
        o,
        u,
        c,
        s,
        f,
        l = 1,
        h = 10,
        p = e,
        y = p.d,
        v = p.constructor,
        d = v.precision;
    if (p.s < 1) throw Error(Qe + (p.s ? 'NaN' : '-Infinity'));
    if (p.eq(He)) return new v(0);
    if ((t == null ? ((de = !1), (s = d)) : (s = t), p.eq(10)))
        return t == null && (de = !0), Fs(v, s);
    if (
        ((s += h),
        (v.precision = s),
        (r = ct(y)),
        (n = r.charAt(0)),
        (a = be(p)),
        Math.abs(a) < 15e14)
    ) {
        for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
            (p = p.times(e)), (r = ct(p.d)), (n = r.charAt(0)), l++;
        (a = be(p)),
            n > 1
                ? ((p = new v('0.' + r)), a++)
                : (p = new v(n + '.' + r.slice(1)));
    } else
        return (
            (c = Fs(v, s + 2, d).times(a + '')),
            (p = Bn(new v(n + '.' + r.slice(1)), s - h).plus(c)),
            (v.precision = d),
            t == null ? ((de = !0), ue(p, d)) : p
        );
    for (
        u = o = p = Ot(p.minus(He), p.plus(He), s),
            f = ue(p.times(p), s),
            i = 3;
        ;

    ) {
        if (
            ((o = ue(o.times(f), s)),
            (c = u.plus(Ot(o, new v(i), s))),
            ct(c.d).slice(0, s) === ct(u.d).slice(0, s))
        )
            return (
                (u = u.times(2)),
                a !== 0 && (u = u.plus(Fs(v, s + 2, d).times(a + ''))),
                (u = Ot(u, new v(l), s)),
                (v.precision = d),
                t == null ? ((de = !0), ue(u, d)) : u
            );
        (u = c), (i += 2);
    }
}
function Em(e, t) {
    var r, n, i;
    for (
        (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
            (n = t.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +t.slice(n + 1)),
                  (t = t.substring(0, n)))
                : r < 0 && (r = t.length),
            n = 0;
        t.charCodeAt(n) === 48;

    )
        ++n;
    for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
    if (((t = t.slice(n, i)), t)) {
        if (
            ((i -= n),
            (r = r - n - 1),
            (e.e = un(r / pe)),
            (e.d = []),
            (n = (r + 1) % pe),
            r < 0 && (n += pe),
            n < i)
        ) {
            for (n && e.d.push(+t.slice(0, n)), i -= pe; n < i; )
                e.d.push(+t.slice(n, (n += pe)));
            (t = t.slice(n)), (n = pe - t.length);
        } else n -= i;
        for (; n--; ) t += '0';
        if ((e.d.push(+t), de && (e.e > ra || e.e < -ra))) throw Error(Mh + r);
    } else (e.s = 0), (e.e = 0), (e.d = [0]);
    return e;
}
function ue(e, t, r) {
    var n,
        i,
        a,
        o,
        u,
        c,
        s,
        f,
        l = e.d;
    for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
    if (((n = t - o), n < 0)) (n += pe), (i = t), (s = l[(f = 0)]);
    else {
        if (((f = Math.ceil((n + 1) / pe)), (a = l.length), f >= a)) return e;
        for (s = a = l[f], o = 1; a >= 10; a /= 10) o++;
        (n %= pe), (i = n - pe + o);
    }
    if (
        (r !== void 0 &&
            ((a = Vt(10, o - i - 1)),
            (u = (s / a) % 10 | 0),
            (c = t < 0 || l[f + 1] !== void 0 || s % a),
            (c =
                r < 4
                    ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2))
                    : u > 5 ||
                      (u == 5 &&
                          (r == 4 ||
                              c ||
                              (r == 6 &&
                                  (n > 0
                                      ? i > 0
                                          ? s / Vt(10, o - i)
                                          : 0
                                      : l[f - 1]) %
                                      10 &
                                      1) ||
                              r == (e.s < 0 ? 8 : 7))))),
        t < 1 || !l[0])
    )
        return (
            c
                ? ((a = be(e)),
                  (l.length = 1),
                  (t = t - a - 1),
                  (l[0] = Vt(10, (pe - (t % pe)) % pe)),
                  (e.e = un(-t / pe) || 0))
                : ((l.length = 1), (l[0] = e.e = e.s = 0)),
            e
        );
    if (
        (n == 0
            ? ((l.length = f), (a = 1), f--)
            : ((l.length = f + 1),
              (a = Vt(10, pe - n)),
              (l[f] = i > 0 ? ((s / Vt(10, o - i)) % Vt(10, i) | 0) * a : 0)),
        c)
    )
        for (;;)
            if (f == 0) {
                (l[0] += a) == Pe && ((l[0] = 1), ++e.e);
                break;
            } else {
                if (((l[f] += a), l[f] != Pe)) break;
                (l[f--] = 0), (a = 1);
            }
    for (n = l.length; l[--n] === 0; ) l.pop();
    if (de && (e.e > ra || e.e < -ra)) throw Error(Mh + be(e));
    return e;
}
function Mx(e, t) {
    var r,
        n,
        i,
        a,
        o,
        u,
        c,
        s,
        f,
        l,
        h = e.constructor,
        p = h.precision;
    if (!e.s || !t.s)
        return t.s ? (t.s = -t.s) : (t = new h(e)), de ? ue(t, p) : t;
    if (
        ((c = e.d),
        (l = t.d),
        (n = t.e),
        (s = e.e),
        (c = c.slice()),
        (o = s - n),
        o)
    ) {
        for (
            f = o < 0,
                f
                    ? ((r = c), (o = -o), (u = l.length))
                    : ((r = l), (n = s), (u = c.length)),
                i = Math.max(Math.ceil(p / pe), u) + 2,
                o > i && ((o = i), (r.length = 1)),
                r.reverse(),
                i = o;
            i--;

        )
            r.push(0);
        r.reverse();
    } else {
        for (
            i = c.length, u = l.length, f = i < u, f && (u = i), i = 0;
            i < u;
            i++
        )
            if (c[i] != l[i]) {
                f = c[i] < l[i];
                break;
            }
        o = 0;
    }
    for (
        f && ((r = c), (c = l), (l = r), (t.s = -t.s)),
            u = c.length,
            i = l.length - u;
        i > 0;
        --i
    )
        c[u++] = 0;
    for (i = l.length; i > o; ) {
        if (c[--i] < l[i]) {
            for (a = i; a && c[--a] === 0; ) c[a] = Pe - 1;
            --c[a], (c[i] += Pe);
        }
        c[i] -= l[i];
    }
    for (; c[--u] === 0; ) c.pop();
    for (; c[0] === 0; c.shift()) --n;
    return c[0] ? ((t.d = c), (t.e = n), de ? ue(t, p) : t) : new h(0);
}
function ar(e, t, r) {
    var n,
        i = be(e),
        a = ct(e.d),
        o = a.length;
    return (
        t
            ? (r && (n = r - o) > 0
                  ? (a = a.charAt(0) + '.' + a.slice(1) + Ct(n))
                  : o > 1 && (a = a.charAt(0) + '.' + a.slice(1)),
              (a = a + (i < 0 ? 'e' : 'e+') + i))
            : i < 0
              ? ((a = '0.' + Ct(-i - 1) + a),
                r && (n = r - o) > 0 && (a += Ct(n)))
              : i >= o
                ? ((a += Ct(i + 1 - o)),
                  r && (n = r - i - 1) > 0 && (a = a + '.' + Ct(n)))
                : ((n = i + 1) < o && (a = a.slice(0, n) + '.' + a.slice(n)),
                  r &&
                      (n = r - o) > 0 &&
                      (i + 1 === o && (a += '.'), (a += Ct(n)))),
        e.s < 0 ? '-' + a : a
    );
}
function jm(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function $x(e) {
    var t, r, n;
    function i(a) {
        var o = this;
        if (!(o instanceof i)) return new i(a);
        if (((o.constructor = i), a instanceof i)) {
            (o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a);
            return;
        }
        if (typeof a == 'number') {
            if (a * 0 !== 0) throw Error(tr + a);
            if (a > 0) o.s = 1;
            else if (a < 0) (a = -a), (o.s = -1);
            else {
                (o.s = 0), (o.e = 0), (o.d = [0]);
                return;
            }
            if (a === ~~a && a < 1e7) {
                (o.e = 0), (o.d = [a]);
                return;
            }
            return Em(o, a.toString());
        } else if (typeof a != 'string') throw Error(tr + a);
        if (
            (a.charCodeAt(0) === 45
                ? ((a = a.slice(1)), (o.s = -1))
                : (o.s = 1),
            fj.test(a))
        )
            Em(o, a);
        else throw Error(tr + a);
    }
    if (
        ((i.prototype = W),
        (i.ROUND_UP = 0),
        (i.ROUND_DOWN = 1),
        (i.ROUND_CEIL = 2),
        (i.ROUND_FLOOR = 3),
        (i.ROUND_HALF_UP = 4),
        (i.ROUND_HALF_DOWN = 5),
        (i.ROUND_HALF_EVEN = 6),
        (i.ROUND_HALF_CEIL = 7),
        (i.ROUND_HALF_FLOOR = 8),
        (i.clone = $x),
        (i.config = i.set = hj),
        e === void 0 && (e = {}),
        e)
    )
        for (
            n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'],
                t = 0;
            t < n.length;

        )
            e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
    return i.config(e), i;
}
function hj(e) {
    if (!e || typeof e != 'object') throw Error(Qe + 'Object expected');
    var t,
        r,
        n,
        i = [
            'precision',
            1,
            on,
            'rounding',
            0,
            8,
            'toExpNeg',
            -1 / 0,
            0,
            'toExpPos',
            0,
            1 / 0,
        ];
    for (t = 0; t < i.length; t += 3)
        if ((n = e[(r = i[t])]) !== void 0)
            if (un(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(tr + r + ': ' + n);
    if ((n = e[(r = 'LN10')]) !== void 0)
        if (n == Math.LN10) this[r] = new this(n);
        else throw Error(tr + r + ': ' + n);
    return this;
}
var $h = $x(lj);
He = new $h(1);
const oe = $h;
function pj(e) {
    return mj(e) || yj(e) || vj(e) || dj();
}
function dj() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vj(e, t) {
    if (e) {
        if (typeof e == 'string') return Ul(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Ul(e, t);
    }
}
function yj(e) {
    if (typeof Symbol < 'u' && Symbol.iterator in Object(e))
        return Array.from(e);
}
function mj(e) {
    if (Array.isArray(e)) return Ul(e);
}
function Ul(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var gj = function (t) {
        return t;
    },
    Cx = {},
    Ix = function (t) {
        return t === Cx;
    },
    Mm = function (t) {
        return function r() {
            return arguments.length === 0 ||
                (arguments.length === 1 &&
                    Ix(arguments.length <= 0 ? void 0 : arguments[0]))
                ? r
                : t.apply(void 0, arguments);
        };
    },
    bj = function e(t, r) {
        return t === 1
            ? r
            : Mm(function () {
                  for (
                      var n = arguments.length, i = new Array(n), a = 0;
                      a < n;
                      a++
                  )
                      i[a] = arguments[a];
                  var o = i.filter(function (u) {
                      return u !== Cx;
                  }).length;
                  return o >= t
                      ? r.apply(void 0, i)
                      : e(
                            t - o,
                            Mm(function () {
                                for (
                                    var u = arguments.length,
                                        c = new Array(u),
                                        s = 0;
                                    s < u;
                                    s++
                                )
                                    c[s] = arguments[s];
                                var f = i.map(function (l) {
                                    return Ix(l) ? c.shift() : l;
                                });
                                return r.apply(void 0, pj(f).concat(c));
                            })
                        );
              });
    },
    to = function (t) {
        return bj(t.length, t);
    },
    Hl = function (t, r) {
        for (var n = [], i = t; i < r; ++i) n[i - t] = i;
        return n;
    },
    xj = to(function (e, t) {
        return Array.isArray(t)
            ? t.map(e)
            : Object.keys(t)
                  .map(function (r) {
                      return t[r];
                  })
                  .map(e);
    }),
    wj = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
        if (!r.length) return gj;
        var i = r.reverse(),
            a = i[0],
            o = i.slice(1);
        return function () {
            return o.reduce(
                function (u, c) {
                    return c(u);
                },
                a.apply(void 0, arguments)
            );
        };
    },
    Kl = function (t) {
        return Array.isArray(t) ? t.reverse() : t.split('').reverse.join('');
    },
    kx = function (t) {
        var r = null,
            n = null;
        return function () {
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                a[o] = arguments[o];
            return (
                (r &&
                    a.every(function (u, c) {
                        return u === r[c];
                    })) ||
                    ((r = a), (n = t.apply(void 0, a))),
                n
            );
        };
    };
function Oj(e) {
    var t;
    return (
        e === 0
            ? (t = 1)
            : (t = Math.floor(new oe(e).abs().log(10).toNumber()) + 1),
        t
    );
}
function _j(e, t, r) {
    for (var n = new oe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
        a.push(n.toNumber()), (n = n.add(r)), i++;
    return a;
}
var Aj = to(function (e, t, r) {
        var n = +e,
            i = +t;
        return n + r * (i - n);
    }),
    Sj = to(function (e, t, r) {
        var n = t - +e;
        return (n = n || 1 / 0), (r - e) / n;
    }),
    Pj = to(function (e, t, r) {
        var n = t - +e;
        return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
    });
const ro = {
    rangeStep: _j,
    getDigitCount: Oj,
    interpolateNumber: Aj,
    uninterpolateNumber: Sj,
    uninterpolateTruncation: Pj,
};
function Gl(e) {
    return jj(e) || Ej(e) || Rx(e) || Tj();
}
function Tj() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ej(e) {
    if (typeof Symbol < 'u' && Symbol.iterator in Object(e))
        return Array.from(e);
}
function jj(e) {
    if (Array.isArray(e)) return Vl(e);
}
function Fn(e, t) {
    return Cj(e) || $j(e, t) || Rx(e, t) || Mj();
}
function Mj() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rx(e, t) {
    if (e) {
        if (typeof e == 'string') return Vl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Vl(e, t);
    }
}
function Vl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function $j(e, t) {
    if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var o = e[Symbol.iterator](), u;
                !(n = (u = o.next()).done) &&
                (r.push(u.value), !(t && r.length === t));
                n = !0
            );
        } catch (c) {
            (i = !0), (a = c);
        } finally {
            try {
                !n && o.return != null && o.return();
            } finally {
                if (i) throw a;
            }
        }
        return r;
    }
}
function Cj(e) {
    if (Array.isArray(e)) return e;
}
function Dx(e) {
    var t = Fn(e, 2),
        r = t[0],
        n = t[1],
        i = r,
        a = n;
    return r > n && ((i = n), (a = r)), [i, a];
}
function Nx(e, t, r) {
    if (e.lte(0)) return new oe(0);
    var n = ro.getDigitCount(e.toNumber()),
        i = new oe(10).pow(n),
        a = e.div(i),
        o = n !== 1 ? 0.05 : 0.1,
        u = new oe(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
        c = u.mul(i);
    return t ? c : new oe(Math.ceil(c));
}
function Ij(e, t, r) {
    var n = 1,
        i = new oe(e);
    if (!i.isint() && r) {
        var a = Math.abs(e);
        a < 1
            ? ((n = new oe(10).pow(ro.getDigitCount(e) - 1)),
              (i = new oe(Math.floor(i.div(n).toNumber())).mul(n)))
            : a > 1 && (i = new oe(Math.floor(e)));
    } else
        e === 0
            ? (i = new oe(Math.floor((t - 1) / 2)))
            : r || (i = new oe(Math.floor(e)));
    var o = Math.floor((t - 1) / 2),
        u = wj(
            xj(function (c) {
                return i.add(new oe(c - o).mul(n)).toNumber();
            }),
            Hl
        );
    return u(0, t);
}
function qx(e, t, r, n) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (r - 1)))
        return { step: new oe(0), tickMin: new oe(0), tickMax: new oe(0) };
    var a = Nx(new oe(t).sub(e).div(r - 1), n, i),
        o;
    e <= 0 && t >= 0
        ? (o = new oe(0))
        : ((o = new oe(e).add(t).div(2)), (o = o.sub(new oe(o).mod(a))));
    var u = Math.ceil(o.sub(e).div(a).toNumber()),
        c = Math.ceil(new oe(t).sub(o).div(a).toNumber()),
        s = u + c + 1;
    return s > r
        ? qx(e, t, r, n, i + 1)
        : (s < r &&
              ((c = t > 0 ? c + (r - s) : c), (u = t > 0 ? u : u + (r - s))),
          {
              step: a,
              tickMin: o.sub(new oe(u).mul(a)),
              tickMax: o.add(new oe(c).mul(a)),
          });
}
function kj(e) {
    var t = Fn(e, 2),
        r = t[0],
        n = t[1],
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = Math.max(i, 2),
        u = Dx([r, n]),
        c = Fn(u, 2),
        s = c[0],
        f = c[1];
    if (s === -1 / 0 || f === 1 / 0) {
        var l =
            f === 1 / 0
                ? [s].concat(
                      Gl(
                          Hl(0, i - 1).map(function () {
                              return 1 / 0;
                          })
                      )
                  )
                : [].concat(
                      Gl(
                          Hl(0, i - 1).map(function () {
                              return -1 / 0;
                          })
                      ),
                      [f]
                  );
        return r > n ? Kl(l) : l;
    }
    if (s === f) return Ij(s, i, a);
    var h = qx(s, f, o, a),
        p = h.step,
        y = h.tickMin,
        v = h.tickMax,
        d = ro.rangeStep(y, v.add(new oe(0.1).mul(p)), p);
    return r > n ? Kl(d) : d;
}
function Rj(e, t) {
    var r = Fn(e, 2),
        n = r[0],
        i = r[1],
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = Dx([n, i]),
        u = Fn(o, 2),
        c = u[0],
        s = u[1];
    if (c === -1 / 0 || s === 1 / 0) return [n, i];
    if (c === s) return [c];
    var f = Math.max(t, 2),
        l = Nx(new oe(s).sub(c).div(f - 1), a, 0),
        h = [].concat(
            Gl(ro.rangeStep(new oe(c), new oe(s).sub(new oe(0.99).mul(l)), l)),
            [s]
        );
    return n > i ? Kl(h) : h;
}
var Dj = kx(kj),
    Nj = kx(Rj),
    qj = 'Invariant failed';
function or(e, t) {
    throw new Error(qj);
}
var Lj = [
    'offset',
    'layout',
    'width',
    'dataKey',
    'data',
    'dataPointFormatter',
    'xAxis',
    'yAxis',
];
function kr(e) {
    '@babel/helpers - typeof';
    return (
        (kr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        kr(e)
    );
}
function na() {
    return (
        (na = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        na.apply(this, arguments)
    );
}
function Bj(e, t) {
    return Uj(e) || Wj(e, t) || zj(e, t) || Fj();
}
function Fj() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zj(e, t) {
    if (e) {
        if (typeof e == 'string') return $m(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return $m(e, t);
    }
}
function $m(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function Wj(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function Uj(e) {
    if (Array.isArray(e)) return e;
}
function Hj(e, t) {
    if (e == null) return {};
    var r = Kj(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function Kj(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function Gj(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function Vj(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, Fx(n.key), n);
    }
}
function Xj(e, t, r) {
    return (
        t && Vj(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function Yj(e, t, r) {
    return (
        (t = ia(t)),
        Zj(
            e,
            Lx()
                ? Reflect.construct(t, r || [], ia(e).constructor)
                : t.apply(e, r)
        )
    );
}
function Zj(e, t) {
    if (t && (kr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return Jj(e);
}
function Jj(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Lx() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Lx = function () {
        return !!e;
    })();
}
function ia(e) {
    return (
        (ia = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        ia(e)
    );
}
function Qj(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Xl(e, t);
}
function Xl(e, t) {
    return (
        (Xl = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Xl(e, t)
    );
}
function Bx(e, t, r) {
    return (
        (t = Fx(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Fx(e) {
    var t = eM(e, 'string');
    return kr(t) == 'symbol' ? t : t + '';
}
function eM(e, t) {
    if (kr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (kr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var mi = (function (e) {
    function t() {
        return Gj(this, t), Yj(this, t, arguments);
    }
    return (
        Qj(t, e),
        Xj(t, [
            {
                key: 'render',
                value: function () {
                    var n = this.props,
                        i = n.offset,
                        a = n.layout,
                        o = n.width,
                        u = n.dataKey,
                        c = n.data,
                        s = n.dataPointFormatter,
                        f = n.xAxis,
                        l = n.yAxis,
                        h = Hj(n, Lj),
                        p = H(h, !1);
                    this.props.direction === 'x' && f.type !== 'number' && or();
                    var y = c.map(function (v) {
                        var d = s(v, u),
                            g = d.x,
                            x = d.y,
                            w = d.value,
                            O = d.errorVal;
                        if (!O) return null;
                        var m = [],
                            b,
                            _;
                        if (Array.isArray(O)) {
                            var A = Bj(O, 2);
                            (b = A[0]), (_ = A[1]);
                        } else b = _ = O;
                        if (a === 'vertical') {
                            var T = f.scale,
                                M = x + i,
                                P = M + o,
                                E = M - o,
                                j = T(w - b),
                                C = T(w + _);
                            m.push({ x1: C, y1: P, x2: C, y2: E }),
                                m.push({ x1: j, y1: M, x2: C, y2: M }),
                                m.push({ x1: j, y1: P, x2: j, y2: E });
                        } else if (a === 'horizontal') {
                            var $ = l.scale,
                                k = g + i,
                                R = k - o,
                                L = k + o,
                                B = $(w - b),
                                U = $(w + _);
                            m.push({ x1: R, y1: U, x2: L, y2: U }),
                                m.push({ x1: k, y1: B, x2: k, y2: U }),
                                m.push({ x1: R, y1: B, x2: L, y2: B });
                        }
                        return S.createElement(
                            re,
                            na(
                                {
                                    className: 'recharts-errorBar',
                                    key: 'bar-'.concat(
                                        m.map(function (G) {
                                            return ''
                                                .concat(G.x1, '-')
                                                .concat(G.x2, '-')
                                                .concat(G.y1, '-')
                                                .concat(G.y2);
                                        })
                                    ),
                                },
                                p
                            ),
                            m.map(function (G) {
                                return S.createElement(
                                    'line',
                                    na({}, G, {
                                        key: 'line-'
                                            .concat(G.x1, '-')
                                            .concat(G.x2, '-')
                                            .concat(G.y1, '-')
                                            .concat(G.y2),
                                    })
                                );
                            })
                        );
                    });
                    return S.createElement(
                        re,
                        { className: 'recharts-errorBars' },
                        y
                    );
                },
            },
        ])
    );
})(S.Component);
Bx(mi, 'defaultProps', {
    stroke: 'black',
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: 'horizontal',
});
Bx(mi, 'displayName', 'ErrorBar');
function zn(e) {
    '@babel/helpers - typeof';
    return (
        (zn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        zn(e)
    );
}
function Cm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ut(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Cm(Object(r), !0).forEach(function (n) {
                  tM(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Cm(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function tM(e, t, r) {
    return (
        (t = rM(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function rM(e) {
    var t = nM(e, 'string');
    return zn(t) == 'symbol' ? t : t + '';
}
function nM(e, t) {
    if (zn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (zn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var zx = function (t) {
    var r = t.children,
        n = t.formattedGraphicalItems,
        i = t.legendWidth,
        a = t.legendContent,
        o = We(r, wt);
    if (!o) return null;
    var u = wt.defaultProps,
        c = u !== void 0 ? Ut(Ut({}, u), o.props) : {},
        s;
    return (
        o.props && o.props.payload
            ? (s = o.props && o.props.payload)
            : a === 'children'
              ? (s = (n || []).reduce(function (f, l) {
                    var h = l.item,
                        p = l.props,
                        y = p.sectors || p.data || [];
                    return f.concat(
                        y.map(function (v) {
                            return {
                                type: o.props.iconType || h.props.legendType,
                                value: v.name,
                                color: v.fill,
                                payload: v,
                            };
                        })
                    );
                }, []))
              : (s = (n || []).map(function (f) {
                    var l = f.item,
                        h = l.type.defaultProps,
                        p = h !== void 0 ? Ut(Ut({}, h), l.props) : {},
                        y = p.dataKey,
                        v = p.name,
                        d = p.legendType,
                        g = p.hide;
                    return {
                        inactive: g,
                        dataKey: y,
                        type: c.iconType || d || 'square',
                        color: Ch(l),
                        value: v || y,
                        payload: p,
                    };
                })),
        Ut(Ut(Ut({}, c), wt.getWithHeight(o, i)), {}, { payload: s, item: o })
    );
};
function Wn(e) {
    '@babel/helpers - typeof';
    return (
        (Wn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Wn(e)
    );
}
function Im(e) {
    return uM(e) || oM(e) || aM(e) || iM();
}
function iM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aM(e, t) {
    if (e) {
        if (typeof e == 'string') return Yl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Yl(e, t);
    }
}
function oM(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function uM(e) {
    if (Array.isArray(e)) return Yl(e);
}
function Yl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function km(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function ye(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? km(Object(r), !0).forEach(function (n) {
                  Sr(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : km(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function Sr(e, t, r) {
    return (
        (t = cM(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function cM(e) {
    var t = sM(e, 'string');
    return Wn(t) == 'symbol' ? t : t + '';
}
function sM(e, t) {
    if (Wn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Wn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function _e(e, t, r) {
    return Z(e) || Z(t) ? r : Ae(t) ? Ke(e, t, r) : Y(t) ? t(e) : r;
}
function _n(e, t, r, n) {
    var i = uj(e, function (u) {
        return _e(u, t);
    });
    if (r === 'number') {
        var a = i.filter(function (u) {
            return N(u) || parseFloat(u);
        });
        return a.length ? [eo(a), Qa(a)] : [1 / 0, -1 / 0];
    }
    var o = n
        ? i.filter(function (u) {
              return !Z(u);
          })
        : i;
    return o.map(function (u) {
        return Ae(u) || u instanceof Date ? u : '';
    });
}
var lM = function (t) {
        var r,
            n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : [],
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            u =
                (r = n == null ? void 0 : n.length) !== null && r !== void 0
                    ? r
                    : 0;
        if (u <= 1) return 0;
        if (
            a &&
            a.axisType === 'angleAxis' &&
            Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
        )
            for (var c = a.range, s = 0; s < u; s++) {
                var f = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate,
                    l = i[s].coordinate,
                    h = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate,
                    p = void 0;
                if (Ie(l - f) !== Ie(h - l)) {
                    var y = [];
                    if (Ie(h - l) === Ie(c[1] - c[0])) {
                        p = h;
                        var v = l + c[1] - c[0];
                        (y[0] = Math.min(v, (v + f) / 2)),
                            (y[1] = Math.max(v, (v + f) / 2));
                    } else {
                        p = f;
                        var d = h + c[1] - c[0];
                        (y[0] = Math.min(l, (d + l) / 2)),
                            (y[1] = Math.max(l, (d + l) / 2));
                    }
                    var g = [
                        Math.min(l, (p + l) / 2),
                        Math.max(l, (p + l) / 2),
                    ];
                    if ((t > g[0] && t <= g[1]) || (t >= y[0] && t <= y[1])) {
                        o = i[s].index;
                        break;
                    }
                } else {
                    var x = Math.min(f, h),
                        w = Math.max(f, h);
                    if (t > (x + l) / 2 && t <= (w + l) / 2) {
                        o = i[s].index;
                        break;
                    }
                }
            }
        else
            for (var O = 0; O < u; O++)
                if (
                    (O === 0 &&
                        t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
                    (O > 0 &&
                        O < u - 1 &&
                        t > (n[O].coordinate + n[O - 1].coordinate) / 2 &&
                        t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
                    (O === u - 1 &&
                        t > (n[O].coordinate + n[O - 1].coordinate) / 2)
                ) {
                    o = n[O].index;
                    break;
                }
        return o;
    },
    Ch = function (t) {
        var r,
            n = t,
            i = n.type.displayName,
            a =
                (r = t.type) !== null && r !== void 0 && r.defaultProps
                    ? ye(ye({}, t.type.defaultProps), t.props)
                    : t.props,
            o = a.stroke,
            u = a.fill,
            c;
        switch (i) {
            case 'Line':
                c = o;
                break;
            case 'Area':
            case 'Radar':
                c = o && o !== 'none' ? o : u;
                break;
            default:
                c = u;
                break;
        }
        return c;
    },
    fM = function (t) {
        var r = t.barSize,
            n = t.totalSize,
            i = t.stackGroups,
            a = i === void 0 ? {} : i;
        if (!a) return {};
        for (var o = {}, u = Object.keys(a), c = 0, s = u.length; c < s; c++)
            for (
                var f = a[u[c]].stackGroups,
                    l = Object.keys(f),
                    h = 0,
                    p = l.length;
                h < p;
                h++
            ) {
                var y = f[l[h]],
                    v = y.items,
                    d = y.cateAxisId,
                    g = v.filter(function (_) {
                        return xt(_.type).indexOf('Bar') >= 0;
                    });
                if (g && g.length) {
                    var x = g[0].type.defaultProps,
                        w =
                            x !== void 0
                                ? ye(ye({}, x), g[0].props)
                                : g[0].props,
                        O = w.barSize,
                        m = w[d];
                    o[m] || (o[m] = []);
                    var b = Z(O) ? r : O;
                    o[m].push({
                        item: g[0],
                        stackList: g.slice(1),
                        barSize: Z(b) ? void 0 : ke(b, n, 0),
                    });
                }
            }
        return o;
    },
    hM = function (t) {
        var r = t.barGap,
            n = t.barCategoryGap,
            i = t.bandSize,
            a = t.sizeList,
            o = a === void 0 ? [] : a,
            u = t.maxBarSize,
            c = o.length;
        if (c < 1) return null;
        var s = ke(r, i, 0, !0),
            f,
            l = [];
        if (o[0].barSize === +o[0].barSize) {
            var h = !1,
                p = i / c,
                y = o.reduce(function (O, m) {
                    return O + m.barSize || 0;
                }, 0);
            (y += (c - 1) * s),
                y >= i && ((y -= (c - 1) * s), (s = 0)),
                y >= i && p > 0 && ((h = !0), (p *= 0.9), (y = c * p));
            var v = ((i - y) / 2) >> 0,
                d = { offset: v - s, size: 0 };
            f = o.reduce(function (O, m) {
                var b = {
                        item: m.item,
                        position: {
                            offset: d.offset + d.size + s,
                            size: h ? p : m.barSize,
                        },
                    },
                    _ = [].concat(Im(O), [b]);
                return (
                    (d = _[_.length - 1].position),
                    m.stackList &&
                        m.stackList.length &&
                        m.stackList.forEach(function (A) {
                            _.push({ item: A, position: d });
                        }),
                    _
                );
            }, l);
        } else {
            var g = ke(n, i, 0, !0);
            i - 2 * g - (c - 1) * s <= 0 && (s = 0);
            var x = (i - 2 * g - (c - 1) * s) / c;
            x > 1 && (x >>= 0);
            var w = u === +u ? Math.min(x, u) : x;
            f = o.reduce(function (O, m, b) {
                var _ = [].concat(Im(O), [
                    {
                        item: m.item,
                        position: {
                            offset: g + (x + s) * b + (x - w) / 2,
                            size: w,
                        },
                    },
                ]);
                return (
                    m.stackList &&
                        m.stackList.length &&
                        m.stackList.forEach(function (A) {
                            _.push({
                                item: A,
                                position: _[_.length - 1].position,
                            });
                        }),
                    _
                );
            }, l);
        }
        return f;
    },
    pM = function (t, r, n, i) {
        var a = n.children,
            o = n.width,
            u = n.margin,
            c = o - (u.left || 0) - (u.right || 0),
            s = zx({ children: a, legendWidth: c });
        if (s) {
            var f = i || {},
                l = f.width,
                h = f.height,
                p = s.align,
                y = s.verticalAlign,
                v = s.layout;
            if (
                (v === 'vertical' || (v === 'horizontal' && y === 'middle')) &&
                p !== 'center' &&
                N(t[p])
            )
                return ye(ye({}, t), {}, Sr({}, p, t[p] + (l || 0)));
            if (
                (v === 'horizontal' || (v === 'vertical' && p === 'center')) &&
                y !== 'middle' &&
                N(t[y])
            )
                return ye(ye({}, t), {}, Sr({}, y, t[y] + (h || 0)));
        }
        return t;
    },
    dM = function (t, r, n) {
        return Z(r)
            ? !0
            : t === 'horizontal'
              ? r === 'yAxis'
              : t === 'vertical' || n === 'x'
                ? r === 'xAxis'
                : n === 'y'
                  ? r === 'yAxis'
                  : !0;
    },
    Wx = function (t, r, n, i, a) {
        var o = r.props.children,
            u = Ge(o, mi).filter(function (s) {
                return dM(i, a, s.props.direction);
            });
        if (u && u.length) {
            var c = u.map(function (s) {
                return s.props.dataKey;
            });
            return t.reduce(
                function (s, f) {
                    var l = _e(f, n);
                    if (Z(l)) return s;
                    var h = Array.isArray(l) ? [eo(l), Qa(l)] : [l, l],
                        p = c.reduce(
                            function (y, v) {
                                var d = _e(f, v, 0),
                                    g =
                                        h[0] -
                                        Math.abs(Array.isArray(d) ? d[0] : d),
                                    x =
                                        h[1] +
                                        Math.abs(Array.isArray(d) ? d[1] : d);
                                return [Math.min(g, y[0]), Math.max(x, y[1])];
                            },
                            [1 / 0, -1 / 0]
                        );
                    return [Math.min(p[0], s[0]), Math.max(p[1], s[1])];
                },
                [1 / 0, -1 / 0]
            );
        }
        return null;
    },
    vM = function (t, r, n, i, a) {
        var o = r
            .map(function (u) {
                return Wx(t, u, n, a, i);
            })
            .filter(function (u) {
                return !Z(u);
            });
        return o && o.length
            ? o.reduce(
                  function (u, c) {
                      return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
                  },
                  [1 / 0, -1 / 0]
              )
            : null;
    },
    Ux = function (t, r, n, i, a) {
        var o = r.map(function (c) {
            var s = c.props.dataKey;
            return (n === 'number' && s && Wx(t, c, s, i)) || _n(t, s, n, a);
        });
        if (n === 'number')
            return o.reduce(
                function (c, s) {
                    return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
                },
                [1 / 0, -1 / 0]
            );
        var u = {};
        return o.reduce(function (c, s) {
            for (var f = 0, l = s.length; f < l; f++)
                u[s[f]] || ((u[s[f]] = !0), c.push(s[f]));
            return c;
        }, []);
    },
    Hx = function (t, r) {
        return (
            (t === 'horizontal' && r === 'xAxis') ||
            (t === 'vertical' && r === 'yAxis') ||
            (t === 'centric' && r === 'angleAxis') ||
            (t === 'radial' && r === 'radiusAxis')
        );
    },
    Kx = function (t, r, n, i) {
        if (i)
            return t.map(function (c) {
                return c.coordinate;
            });
        var a,
            o,
            u = t.map(function (c) {
                return (
                    c.coordinate === r && (a = !0),
                    c.coordinate === n && (o = !0),
                    c.coordinate
                );
            });
        return a || u.push(r), o || u.push(n), u;
    },
    bt = function (t, r, n) {
        if (!t) return null;
        var i = t.scale,
            a = t.duplicateDomain,
            o = t.type,
            u = t.range,
            c = t.realScaleType === 'scaleBand' ? i.bandwidth() / 2 : 2,
            s =
                (r || n) && o === 'category' && i.bandwidth
                    ? i.bandwidth() / c
                    : 0;
        if (
            ((s =
                t.axisType === 'angleAxis' &&
                (u == null ? void 0 : u.length) >= 2
                    ? Ie(u[0] - u[1]) * 2 * s
                    : s),
            r && (t.ticks || t.niceTicks))
        ) {
            var f = (t.ticks || t.niceTicks).map(function (l) {
                var h = a ? a.indexOf(l) : l;
                return { coordinate: i(h) + s, value: l, offset: s };
            });
            return f.filter(function (l) {
                return !li(l.coordinate);
            });
        }
        return t.isCategorical && t.categoricalDomain
            ? t.categoricalDomain.map(function (l, h) {
                  return {
                      coordinate: i(l) + s,
                      value: l,
                      index: h,
                      offset: s,
                  };
              })
            : i.ticks && !n
              ? i.ticks(t.tickCount).map(function (l) {
                    return { coordinate: i(l) + s, value: l, offset: s };
                })
              : i.domain().map(function (l, h) {
                    return {
                        coordinate: i(l) + s,
                        value: a ? a[l] : l,
                        index: h,
                        offset: s,
                    };
                });
    },
    zs = new WeakMap(),
    Ti = function (t, r) {
        if (typeof r != 'function') return t;
        zs.has(t) || zs.set(t, new WeakMap());
        var n = zs.get(t);
        if (n.has(r)) return n.get(r);
        var i = function () {
            t.apply(void 0, arguments), r.apply(void 0, arguments);
        };
        return n.set(r, i), i;
    },
    Gx = function (t, r, n) {
        var i = t.scale,
            a = t.type,
            o = t.layout,
            u = t.axisType;
        if (i === 'auto')
            return o === 'radial' && u === 'radiusAxis'
                ? { scale: Rn(), realScaleType: 'band' }
                : o === 'radial' && u === 'angleAxis'
                  ? { scale: Ji(), realScaleType: 'linear' }
                  : a === 'category' &&
                      r &&
                      (r.indexOf('LineChart') >= 0 ||
                          r.indexOf('AreaChart') >= 0 ||
                          (r.indexOf('ComposedChart') >= 0 && !n))
                    ? { scale: On(), realScaleType: 'point' }
                    : a === 'category'
                      ? { scale: Rn(), realScaleType: 'band' }
                      : { scale: Ji(), realScaleType: 'linear' };
        if (rr(i)) {
            var c = 'scale'.concat(qa(i));
            return {
                scale: (bm[c] || On)(),
                realScaleType: bm[c] ? c : 'point',
            };
        }
        return Y(i) ? { scale: i } : { scale: On(), realScaleType: 'point' };
    },
    Rm = 1e-4,
    Vx = function (t) {
        var r = t.domain();
        if (!(!r || r.length <= 2)) {
            var n = r.length,
                i = t.range(),
                a = Math.min(i[0], i[1]) - Rm,
                o = Math.max(i[0], i[1]) + Rm,
                u = t(r[0]),
                c = t(r[n - 1]);
            (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
        }
    },
    yM = function (t, r) {
        if (!t) return null;
        for (var n = 0, i = t.length; n < i; n++)
            if (t[n].item === r) return t[n].position;
        return null;
    },
    mM = function (t, r) {
        if (!r || r.length !== 2 || !N(r[0]) || !N(r[1])) return t;
        var n = Math.min(r[0], r[1]),
            i = Math.max(r[0], r[1]),
            a = [t[0], t[1]];
        return (
            (!N(t[0]) || t[0] < n) && (a[0] = n),
            (!N(t[1]) || t[1] > i) && (a[1] = i),
            a[0] > i && (a[0] = i),
            a[1] < n && (a[1] = n),
            a
        );
    },
    gM = function (t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0, u = 0; u < r; ++u) {
                    var c = li(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
                    c >= 0
                        ? ((t[u][n][0] = a),
                          (t[u][n][1] = a + c),
                          (a = t[u][n][1]))
                        : ((t[u][n][0] = o),
                          (t[u][n][1] = o + c),
                          (o = t[u][n][1]));
                }
    },
    bM = function (t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0; o < r; ++o) {
                    var u = li(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                    u >= 0
                        ? ((t[o][n][0] = a),
                          (t[o][n][1] = a + u),
                          (a = t[o][n][1]))
                        : ((t[o][n][0] = 0), (t[o][n][1] = 0));
                }
    },
    xM = {
        sign: gM,
        expand: u1,
        none: Pr,
        silhouette: c1,
        wiggle: s1,
        positive: bM,
    },
    wM = function (t, r, n) {
        var i = r.map(function (u) {
                return u.props.dataKey;
            }),
            a = xM[n],
            o = o1()
                .keys(i)
                .value(function (u, c) {
                    return +_e(u, c, 0);
                })
                .order(Pl)
                .offset(a);
        return o(t);
    },
    OM = function (t, r, n, i, a, o) {
        if (!t) return null;
        var u = o ? r.reverse() : r,
            c = {},
            s = u.reduce(function (l, h) {
                var p,
                    y =
                        (p = h.type) !== null && p !== void 0 && p.defaultProps
                            ? ye(ye({}, h.type.defaultProps), h.props)
                            : h.props,
                    v = y.stackId,
                    d = y.hide;
                if (d) return l;
                var g = y[n],
                    x = l[g] || { hasStack: !1, stackGroups: {} };
                if (Ae(v)) {
                    var w = x.stackGroups[v] || {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: [],
                    };
                    w.items.push(h), (x.hasStack = !0), (x.stackGroups[v] = w);
                } else
                    x.stackGroups[rn('_stackId_')] = {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: [h],
                    };
                return ye(ye({}, l), {}, Sr({}, g, x));
            }, c),
            f = {};
        return Object.keys(s).reduce(function (l, h) {
            var p = s[h];
            if (p.hasStack) {
                var y = {};
                p.stackGroups = Object.keys(p.stackGroups).reduce(function (
                    v,
                    d
                ) {
                    var g = p.stackGroups[d];
                    return ye(
                        ye({}, v),
                        {},
                        Sr({}, d, {
                            numericAxisId: n,
                            cateAxisId: i,
                            items: g.items,
                            stackedData: wM(t, g.items, a),
                        })
                    );
                }, y);
            }
            return ye(ye({}, l), {}, Sr({}, h, p));
        }, f);
    },
    Xx = function (t, r) {
        var n = r.realScaleType,
            i = r.type,
            a = r.tickCount,
            o = r.originalDomain,
            u = r.allowDecimals,
            c = n || r.scale;
        if (c !== 'auto' && c !== 'linear') return null;
        if (a && i === 'number' && o && (o[0] === 'auto' || o[1] === 'auto')) {
            var s = t.domain();
            if (!s.length) return null;
            var f = Dj(s, a, u);
            return t.domain([eo(f), Qa(f)]), { niceTicks: f };
        }
        if (a && i === 'number') {
            var l = t.domain(),
                h = Nj(l, a, u);
            return { niceTicks: h };
        }
        return null;
    };
function Dm(e) {
    var t = e.axis,
        r = e.ticks,
        n = e.bandSize,
        i = e.entry,
        a = e.index,
        o = e.dataKey;
    if (t.type === 'category') {
        if (!t.allowDuplicatedCategory && t.dataKey && !Z(i[t.dataKey])) {
            var u = ki(r, 'value', i[t.dataKey]);
            if (u) return u.coordinate + n / 2;
        }
        return r[a] ? r[a].coordinate + n / 2 : null;
    }
    var c = _e(i, Z(o) ? t.dataKey : o);
    return Z(c) ? null : t.scale(c);
}
var Nm = function (t) {
        var r = t.axis,
            n = t.ticks,
            i = t.offset,
            a = t.bandSize,
            o = t.entry,
            u = t.index;
        if (r.type === 'category') return n[u] ? n[u].coordinate + i : null;
        var c = _e(o, r.dataKey, r.domain[u]);
        return Z(c) ? null : r.scale(c) - a / 2 + i;
    },
    _M = function (t) {
        var r = t.numericAxis,
            n = r.scale.domain();
        if (r.type === 'number') {
            var i = Math.min(n[0], n[1]),
                a = Math.max(n[0], n[1]);
            return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
        }
        return n[0];
    },
    AM = function (t, r) {
        var n,
            i =
                (n = t.type) !== null && n !== void 0 && n.defaultProps
                    ? ye(ye({}, t.type.defaultProps), t.props)
                    : t.props,
            a = i.stackId;
        if (Ae(a)) {
            var o = r[a];
            if (o) {
                var u = o.items.indexOf(t);
                return u >= 0 ? o.stackedData[u] : null;
            }
        }
        return null;
    },
    SM = function (t) {
        return t.reduce(
            function (r, n) {
                return [
                    eo(n.concat([r[0]]).filter(N)),
                    Qa(n.concat([r[1]]).filter(N)),
                ];
            },
            [1 / 0, -1 / 0]
        );
    },
    Yx = function (t, r, n) {
        return Object.keys(t)
            .reduce(
                function (i, a) {
                    var o = t[a],
                        u = o.stackedData,
                        c = u.reduce(
                            function (s, f) {
                                var l = SM(f.slice(r, n + 1));
                                return [
                                    Math.min(s[0], l[0]),
                                    Math.max(s[1], l[1]),
                                ];
                            },
                            [1 / 0, -1 / 0]
                        );
                    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
                },
                [1 / 0, -1 / 0]
            )
            .map(function (i) {
                return i === 1 / 0 || i === -1 / 0 ? 0 : i;
            });
    },
    qm = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    Lm = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    Zl = function (t, r, n) {
        if (Y(t)) return t(r, n);
        if (!Array.isArray(t)) return r;
        var i = [];
        if (N(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
        else if (qm.test(t[0])) {
            var a = +qm.exec(t[0])[1];
            i[0] = r[0] - a;
        } else Y(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
        if (N(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
        else if (Lm.test(t[1])) {
            var o = +Lm.exec(t[1])[1];
            i[1] = r[1] + o;
        } else Y(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
        return i;
    },
    aa = function (t, r, n) {
        if (t && t.scale && t.scale.bandwidth) {
            var i = t.scale.bandwidth();
            if (!n || i > 0) return i;
        }
        if (t && r && r.length >= 2) {
            for (
                var a = oh(r, function (l) {
                        return l.coordinate;
                    }),
                    o = 1 / 0,
                    u = 1,
                    c = a.length;
                u < c;
                u++
            ) {
                var s = a[u],
                    f = a[u - 1];
                o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o);
            }
            return o === 1 / 0 ? 0 : o;
        }
        return n ? void 0 : 0;
    },
    Bm = function (t, r, n) {
        return !t || !t.length || yi(t, Ke(n, 'type.defaultProps.domain'))
            ? r
            : t;
    },
    Zx = function (t, r) {
        var n = t.type.defaultProps
                ? ye(ye({}, t.type.defaultProps), t.props)
                : t.props,
            i = n.dataKey,
            a = n.name,
            o = n.unit,
            u = n.formatter,
            c = n.tooltipType,
            s = n.chartType,
            f = n.hide;
        return ye(
            ye({}, H(t, !1)),
            {},
            {
                dataKey: i,
                unit: o,
                formatter: u,
                name: a || i,
                color: Ch(t),
                value: _e(r, i),
                type: c,
                payload: r,
                chartType: s,
                hide: f,
            }
        );
    };
function Un(e) {
    '@babel/helpers - typeof';
    return (
        (Un =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Un(e)
    );
}
function Fm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function yt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Fm(Object(r), !0).forEach(function (n) {
                  Jx(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Fm(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function Jx(e, t, r) {
    return (
        (t = PM(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function PM(e) {
    var t = TM(e, 'string');
    return Un(t) == 'symbol' ? t : t + '';
}
function TM(e, t) {
    if (Un(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Un(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function EM(e, t) {
    return CM(e) || $M(e, t) || MM(e, t) || jM();
}
function jM() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MM(e, t) {
    if (e) {
        if (typeof e == 'string') return zm(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return zm(e, t);
    }
}
function zm(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function $M(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function CM(e) {
    if (Array.isArray(e)) return e;
}
var oa = Math.PI / 180,
    IM = function (t) {
        return (t * 180) / Math.PI;
    },
    fe = function (t, r, n, i) {
        return { x: t + Math.cos(-oa * i) * n, y: r + Math.sin(-oa * i) * n };
    },
    Qx = function (t, r) {
        var n =
            arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : { top: 0, right: 0, bottom: 0, left: 0 };
        return (
            Math.min(
                Math.abs(t - (n.left || 0) - (n.right || 0)),
                Math.abs(r - (n.top || 0) - (n.bottom || 0))
            ) / 2
        );
    },
    kM = function (t, r, n, i, a) {
        var o = t.width,
            u = t.height,
            c = t.startAngle,
            s = t.endAngle,
            f = ke(t.cx, o, o / 2),
            l = ke(t.cy, u, u / 2),
            h = Qx(o, u, n),
            p = ke(t.innerRadius, h, 0),
            y = ke(t.outerRadius, h, h * 0.8),
            v = Object.keys(r);
        return v.reduce(function (d, g) {
            var x = r[g],
                w = x.domain,
                O = x.reversed,
                m;
            if (Z(x.range))
                i === 'angleAxis'
                    ? (m = [c, s])
                    : i === 'radiusAxis' && (m = [p, y]),
                    O && (m = [m[1], m[0]]);
            else {
                m = x.range;
                var b = m,
                    _ = EM(b, 2);
                (c = _[0]), (s = _[1]);
            }
            var A = Gx(x, a),
                T = A.realScaleType,
                M = A.scale;
            M.domain(w).range(m), Vx(M);
            var P = Xx(M, yt(yt({}, x), {}, { realScaleType: T })),
                E = yt(
                    yt(yt({}, x), P),
                    {},
                    {
                        range: m,
                        radius: y,
                        realScaleType: T,
                        scale: M,
                        cx: f,
                        cy: l,
                        innerRadius: p,
                        outerRadius: y,
                        startAngle: c,
                        endAngle: s,
                    }
                );
            return yt(yt({}, d), {}, Jx({}, g, E));
        }, {});
    },
    RM = function (t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
    },
    DM = function (t, r) {
        var n = t.x,
            i = t.y,
            a = r.cx,
            o = r.cy,
            u = RM({ x: n, y: i }, { x: a, y: o });
        if (u <= 0) return { radius: u };
        var c = (n - a) / u,
            s = Math.acos(c);
        return (
            i > o && (s = 2 * Math.PI - s),
            { radius: u, angle: IM(s), angleInRadian: s }
        );
    },
    NM = function (t) {
        var r = t.startAngle,
            n = t.endAngle,
            i = Math.floor(r / 360),
            a = Math.floor(n / 360),
            o = Math.min(i, a);
        return { startAngle: r - o * 360, endAngle: n - o * 360 };
    },
    qM = function (t, r) {
        var n = r.startAngle,
            i = r.endAngle,
            a = Math.floor(n / 360),
            o = Math.floor(i / 360),
            u = Math.min(a, o);
        return t + u * 360;
    },
    Wm = function (t, r) {
        var n = t.x,
            i = t.y,
            a = DM({ x: n, y: i }, r),
            o = a.radius,
            u = a.angle,
            c = r.innerRadius,
            s = r.outerRadius;
        if (o < c || o > s) return !1;
        if (o === 0) return !0;
        var f = NM(r),
            l = f.startAngle,
            h = f.endAngle,
            p = u,
            y;
        if (l <= h) {
            for (; p > h; ) p -= 360;
            for (; p < l; ) p += 360;
            y = p >= l && p <= h;
        } else {
            for (; p > l; ) p -= 360;
            for (; p < h; ) p += 360;
            y = p >= h && p <= l;
        }
        return y ? yt(yt({}, r), {}, { radius: o, angle: qM(p, r) }) : null;
    },
    ew = function (t) {
        return !q.isValidElement(t) && !Y(t) && typeof t != 'boolean'
            ? t.className
            : '';
    };
function Hn(e) {
    '@babel/helpers - typeof';
    return (
        (Hn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Hn(e)
    );
}
var LM = ['offset'];
function BM(e) {
    return UM(e) || WM(e) || zM(e) || FM();
}
function FM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zM(e, t) {
    if (e) {
        if (typeof e == 'string') return Jl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Jl(e, t);
    }
}
function WM(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function UM(e) {
    if (Array.isArray(e)) return Jl(e);
}
function Jl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function HM(e, t) {
    if (e == null) return {};
    var r = KM(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function KM(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function Um(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Oe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Um(Object(r), !0).forEach(function (n) {
                  GM(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Um(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function GM(e, t, r) {
    return (
        (t = VM(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function VM(e) {
    var t = XM(e, 'string');
    return Hn(t) == 'symbol' ? t : t + '';
}
function XM(e, t) {
    if (Hn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Hn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function Kn() {
    return (
        (Kn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Kn.apply(this, arguments)
    );
}
var YM = function (t) {
        var r = t.value,
            n = t.formatter,
            i = Z(t.children) ? r : t.children;
        return Y(n) ? n(i) : i;
    },
    ZM = function (t, r) {
        var n = Ie(r - t),
            i = Math.min(Math.abs(r - t), 360);
        return n * i;
    },
    JM = function (t, r, n) {
        var i = t.position,
            a = t.viewBox,
            o = t.offset,
            u = t.className,
            c = a,
            s = c.cx,
            f = c.cy,
            l = c.innerRadius,
            h = c.outerRadius,
            p = c.startAngle,
            y = c.endAngle,
            v = c.clockWise,
            d = (l + h) / 2,
            g = ZM(p, y),
            x = g >= 0 ? 1 : -1,
            w,
            O;
        i === 'insideStart'
            ? ((w = p + x * o), (O = v))
            : i === 'insideEnd'
              ? ((w = y - x * o), (O = !v))
              : i === 'end' && ((w = y + x * o), (O = v)),
            (O = g <= 0 ? O : !O);
        var m = fe(s, f, d, w),
            b = fe(s, f, d, w + (O ? 1 : -1) * 359),
            _ = 'M'
                .concat(m.x, ',')
                .concat(
                    m.y,
                    `
    A`
                )
                .concat(d, ',')
                .concat(d, ',0,1,')
                .concat(
                    O ? 0 : 1,
                    `,
    `
                )
                .concat(b.x, ',')
                .concat(b.y),
            A = Z(t.id) ? rn('recharts-radial-line-') : t.id;
        return S.createElement(
            'text',
            Kn({}, n, {
                dominantBaseline: 'central',
                className: Q('recharts-radial-bar-label', u),
            }),
            S.createElement(
                'defs',
                null,
                S.createElement('path', { id: A, d: _ })
            ),
            S.createElement('textPath', { xlinkHref: '#'.concat(A) }, r)
        );
    },
    QM = function (t) {
        var r = t.viewBox,
            n = t.offset,
            i = t.position,
            a = r,
            o = a.cx,
            u = a.cy,
            c = a.innerRadius,
            s = a.outerRadius,
            f = a.startAngle,
            l = a.endAngle,
            h = (f + l) / 2;
        if (i === 'outside') {
            var p = fe(o, u, s + n, h),
                y = p.x,
                v = p.y;
            return {
                x: y,
                y: v,
                textAnchor: y >= o ? 'start' : 'end',
                verticalAnchor: 'middle',
            };
        }
        if (i === 'center')
            return {
                x: o,
                y: u,
                textAnchor: 'middle',
                verticalAnchor: 'middle',
            };
        if (i === 'centerTop')
            return {
                x: o,
                y: u,
                textAnchor: 'middle',
                verticalAnchor: 'start',
            };
        if (i === 'centerBottom')
            return { x: o, y: u, textAnchor: 'middle', verticalAnchor: 'end' };
        var d = (c + s) / 2,
            g = fe(o, u, d, h),
            x = g.x,
            w = g.y;
        return { x, y: w, textAnchor: 'middle', verticalAnchor: 'middle' };
    },
    e$ = function (t) {
        var r = t.viewBox,
            n = t.parentViewBox,
            i = t.offset,
            a = t.position,
            o = r,
            u = o.x,
            c = o.y,
            s = o.width,
            f = o.height,
            l = f >= 0 ? 1 : -1,
            h = l * i,
            p = l > 0 ? 'end' : 'start',
            y = l > 0 ? 'start' : 'end',
            v = s >= 0 ? 1 : -1,
            d = v * i,
            g = v > 0 ? 'end' : 'start',
            x = v > 0 ? 'start' : 'end';
        if (a === 'top') {
            var w = {
                x: u + s / 2,
                y: c - l * i,
                textAnchor: 'middle',
                verticalAnchor: p,
            };
            return Oe(
                Oe({}, w),
                n ? { height: Math.max(c - n.y, 0), width: s } : {}
            );
        }
        if (a === 'bottom') {
            var O = {
                x: u + s / 2,
                y: c + f + h,
                textAnchor: 'middle',
                verticalAnchor: y,
            };
            return Oe(
                Oe({}, O),
                n
                    ? {
                          height: Math.max(n.y + n.height - (c + f), 0),
                          width: s,
                      }
                    : {}
            );
        }
        if (a === 'left') {
            var m = {
                x: u - d,
                y: c + f / 2,
                textAnchor: g,
                verticalAnchor: 'middle',
            };
            return Oe(
                Oe({}, m),
                n ? { width: Math.max(m.x - n.x, 0), height: f } : {}
            );
        }
        if (a === 'right') {
            var b = {
                x: u + s + d,
                y: c + f / 2,
                textAnchor: x,
                verticalAnchor: 'middle',
            };
            return Oe(
                Oe({}, b),
                n ? { width: Math.max(n.x + n.width - b.x, 0), height: f } : {}
            );
        }
        var _ = n ? { width: s, height: f } : {};
        return a === 'insideLeft'
            ? Oe(
                  {
                      x: u + d,
                      y: c + f / 2,
                      textAnchor: x,
                      verticalAnchor: 'middle',
                  },
                  _
              )
            : a === 'insideRight'
              ? Oe(
                    {
                        x: u + s - d,
                        y: c + f / 2,
                        textAnchor: g,
                        verticalAnchor: 'middle',
                    },
                    _
                )
              : a === 'insideTop'
                ? Oe(
                      {
                          x: u + s / 2,
                          y: c + h,
                          textAnchor: 'middle',
                          verticalAnchor: y,
                      },
                      _
                  )
                : a === 'insideBottom'
                  ? Oe(
                        {
                            x: u + s / 2,
                            y: c + f - h,
                            textAnchor: 'middle',
                            verticalAnchor: p,
                        },
                        _
                    )
                  : a === 'insideTopLeft'
                    ? Oe(
                          {
                              x: u + d,
                              y: c + h,
                              textAnchor: x,
                              verticalAnchor: y,
                          },
                          _
                      )
                    : a === 'insideTopRight'
                      ? Oe(
                            {
                                x: u + s - d,
                                y: c + h,
                                textAnchor: g,
                                verticalAnchor: y,
                            },
                            _
                        )
                      : a === 'insideBottomLeft'
                        ? Oe(
                              {
                                  x: u + d,
                                  y: c + f - h,
                                  textAnchor: x,
                                  verticalAnchor: p,
                              },
                              _
                          )
                        : a === 'insideBottomRight'
                          ? Oe(
                                {
                                    x: u + s - d,
                                    y: c + f - h,
                                    textAnchor: g,
                                    verticalAnchor: p,
                                },
                                _
                            )
                          : tn(a) && (N(a.x) || Yt(a.x)) && (N(a.y) || Yt(a.y))
                            ? Oe(
                                  {
                                      x: u + ke(a.x, s),
                                      y: c + ke(a.y, f),
                                      textAnchor: 'end',
                                      verticalAnchor: 'end',
                                  },
                                  _
                              )
                            : Oe(
                                  {
                                      x: u + s / 2,
                                      y: c + f / 2,
                                      textAnchor: 'middle',
                                      verticalAnchor: 'middle',
                                  },
                                  _
                              );
    },
    t$ = function (t) {
        return 'cx' in t && N(t.cx);
    };
function Te(e) {
    var t = e.offset,
        r = t === void 0 ? 5 : t,
        n = HM(e, LM),
        i = Oe({ offset: r }, n),
        a = i.viewBox,
        o = i.position,
        u = i.value,
        c = i.children,
        s = i.content,
        f = i.className,
        l = f === void 0 ? '' : f,
        h = i.textBreakAll;
    if (!a || (Z(u) && Z(c) && !q.isValidElement(s) && !Y(s))) return null;
    if (q.isValidElement(s)) return q.cloneElement(s, i);
    var p;
    if (Y(s)) {
        if (((p = q.createElement(s, i)), q.isValidElement(p))) return p;
    } else p = YM(i);
    var y = t$(a),
        v = H(i, !0);
    if (y && (o === 'insideStart' || o === 'insideEnd' || o === 'end'))
        return JM(i, p, v);
    var d = y ? QM(i) : e$(i);
    return S.createElement(
        ir,
        Kn({ className: Q('recharts-label', l) }, v, d, { breakAll: h }),
        p
    );
}
Te.displayName = 'Label';
var tw = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.angle,
            a = t.startAngle,
            o = t.endAngle,
            u = t.r,
            c = t.radius,
            s = t.innerRadius,
            f = t.outerRadius,
            l = t.x,
            h = t.y,
            p = t.top,
            y = t.left,
            v = t.width,
            d = t.height,
            g = t.clockWise,
            x = t.labelViewBox;
        if (x) return x;
        if (N(v) && N(d)) {
            if (N(l) && N(h)) return { x: l, y: h, width: v, height: d };
            if (N(p) && N(y)) return { x: p, y, width: v, height: d };
        }
        return N(l) && N(h)
            ? { x: l, y: h, width: 0, height: 0 }
            : N(r) && N(n)
              ? {
                    cx: r,
                    cy: n,
                    startAngle: a || i || 0,
                    endAngle: o || i || 0,
                    innerRadius: s || 0,
                    outerRadius: f || c || u || 0,
                    clockWise: g,
                }
              : t.viewBox
                ? t.viewBox
                : {};
    },
    r$ = function (t, r) {
        return t
            ? t === !0
                ? S.createElement(Te, { key: 'label-implicit', viewBox: r })
                : Ae(t)
                  ? S.createElement(Te, {
                        key: 'label-implicit',
                        viewBox: r,
                        value: t,
                    })
                  : q.isValidElement(t)
                    ? t.type === Te
                        ? q.cloneElement(t, {
                              key: 'label-implicit',
                              viewBox: r,
                          })
                        : S.createElement(Te, {
                              key: 'label-implicit',
                              content: t,
                              viewBox: r,
                          })
                    : Y(t)
                      ? S.createElement(Te, {
                            key: 'label-implicit',
                            content: t,
                            viewBox: r,
                        })
                      : tn(t)
                        ? S.createElement(
                              Te,
                              Kn({ viewBox: r }, t, { key: 'label-implicit' })
                          )
                        : null
            : null;
    },
    n$ = function (t, r) {
        var n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (!t || (!t.children && n && !t.label)) return null;
        var i = t.children,
            a = tw(t),
            o = Ge(i, Te).map(function (c, s) {
                return q.cloneElement(c, {
                    viewBox: r || a,
                    key: 'label-'.concat(s),
                });
            });
        if (!n) return o;
        var u = r$(t.label, r || a);
        return [u].concat(BM(o));
    };
Te.parseViewBox = tw;
Te.renderCallByParent = n$;
var Ws, Hm;
function i$() {
    if (Hm) return Ws;
    Hm = 1;
    function e(t) {
        var r = t == null ? 0 : t.length;
        return r ? t[r - 1] : void 0;
    }
    return (Ws = e), Ws;
}
var a$ = i$();
const o$ = ce(a$);
function Gn(e) {
    '@babel/helpers - typeof';
    return (
        (Gn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Gn(e)
    );
}
var u$ = ['valueAccessor'],
    c$ = ['data', 'dataKey', 'clockWise', 'id', 'textBreakAll'];
function s$(e) {
    return p$(e) || h$(e) || f$(e) || l$();
}
function l$() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f$(e, t) {
    if (e) {
        if (typeof e == 'string') return Ql(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Ql(e, t);
    }
}
function h$(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function p$(e) {
    if (Array.isArray(e)) return Ql(e);
}
function Ql(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function ua() {
    return (
        (ua = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        ua.apply(this, arguments)
    );
}
function Km(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Gm(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Km(Object(r), !0).forEach(function (n) {
                  d$(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Km(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function d$(e, t, r) {
    return (
        (t = v$(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function v$(e) {
    var t = y$(e, 'string');
    return Gn(t) == 'symbol' ? t : t + '';
}
function y$(e, t) {
    if (Gn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Gn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function Vm(e, t) {
    if (e == null) return {};
    var r = m$(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function m$(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
var g$ = function (t) {
    return Array.isArray(t.value) ? o$(t.value) : t.value;
};
function _t(e) {
    var t = e.valueAccessor,
        r = t === void 0 ? g$ : t,
        n = Vm(e, u$),
        i = n.data,
        a = n.dataKey,
        o = n.clockWise,
        u = n.id,
        c = n.textBreakAll,
        s = Vm(n, c$);
    return !i || !i.length
        ? null
        : S.createElement(
              re,
              { className: 'recharts-label-list' },
              i.map(function (f, l) {
                  var h = Z(a) ? r(f, l) : _e(f && f.payload, a),
                      p = Z(u) ? {} : { id: ''.concat(u, '-').concat(l) };
                  return S.createElement(
                      Te,
                      ua({}, H(f, !0), s, p, {
                          parentViewBox: f.parentViewBox,
                          value: h,
                          textBreakAll: c,
                          viewBox: Te.parseViewBox(
                              Z(o) ? f : Gm(Gm({}, f), {}, { clockWise: o })
                          ),
                          key: 'label-'.concat(l),
                          index: l,
                      })
                  );
              })
          );
}
_t.displayName = 'LabelList';
function b$(e, t) {
    return e
        ? e === !0
            ? S.createElement(_t, { key: 'labelList-implicit', data: t })
            : S.isValidElement(e) || Y(e)
              ? S.createElement(_t, {
                    key: 'labelList-implicit',
                    data: t,
                    content: e,
                })
              : tn(e)
                ? S.createElement(
                      _t,
                      ua({ data: t }, e, { key: 'labelList-implicit' })
                  )
                : null
        : null;
}
function x$(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || (!e.children && r && !e.label)) return null;
    var n = e.children,
        i = Ge(n, _t).map(function (o, u) {
            return q.cloneElement(o, { data: t, key: 'labelList-'.concat(u) });
        });
    if (!r) return i;
    var a = b$(e.label, t);
    return [a].concat(s$(i));
}
_t.renderCallByParent = x$;
function Vn(e) {
    '@babel/helpers - typeof';
    return (
        (Vn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Vn(e)
    );
}
function ef() {
    return (
        (ef = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        ef.apply(this, arguments)
    );
}
function Xm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ym(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Xm(Object(r), !0).forEach(function (n) {
                  w$(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Xm(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function w$(e, t, r) {
    return (
        (t = O$(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function O$(e) {
    var t = _$(e, 'string');
    return Vn(t) == 'symbol' ? t : t + '';
}
function _$(e, t) {
    if (Vn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Vn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var A$ = function (t, r) {
        var n = Ie(r - t),
            i = Math.min(Math.abs(r - t), 359.999);
        return n * i;
    },
    Ei = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.radius,
            a = t.angle,
            o = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            s = t.cornerIsExternal,
            f = c * (u ? 1 : -1) + i,
            l = Math.asin(c / f) / oa,
            h = s ? a : a + o * l,
            p = fe(r, n, f, h),
            y = fe(r, n, i, h),
            v = s ? a - o * l : a,
            d = fe(r, n, f * Math.cos(l * oa), v);
        return { center: p, circleTangency: y, lineTangency: d, theta: l };
    },
    rw = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.startAngle,
            u = t.endAngle,
            c = A$(o, u),
            s = o + c,
            f = fe(r, n, a, o),
            l = fe(r, n, a, s),
            h = 'M '
                .concat(f.x, ',')
                .concat(
                    f.y,
                    `
    A `
                )
                .concat(a, ',')
                .concat(
                    a,
                    `,0,
    `
                )
                .concat(+(Math.abs(c) > 180), ',')
                .concat(
                    +(o > s),
                    `,
    `
                )
                .concat(l.x, ',')
                .concat(
                    l.y,
                    `
  `
                );
        if (i > 0) {
            var p = fe(r, n, i, o),
                y = fe(r, n, i, s);
            h += 'L '
                .concat(y.x, ',')
                .concat(
                    y.y,
                    `
            A `
                )
                .concat(i, ',')
                .concat(
                    i,
                    `,0,
            `
                )
                .concat(+(Math.abs(c) > 180), ',')
                .concat(
                    +(o <= s),
                    `,
            `
                )
                .concat(p.x, ',')
                .concat(p.y, ' Z');
        } else h += 'L '.concat(r, ',').concat(n, ' Z');
        return h;
    },
    S$ = function (t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.cornerRadius,
            u = t.forceCornerRadius,
            c = t.cornerIsExternal,
            s = t.startAngle,
            f = t.endAngle,
            l = Ie(f - s),
            h = Ei({
                cx: r,
                cy: n,
                radius: a,
                angle: s,
                sign: l,
                cornerRadius: o,
                cornerIsExternal: c,
            }),
            p = h.circleTangency,
            y = h.lineTangency,
            v = h.theta,
            d = Ei({
                cx: r,
                cy: n,
                radius: a,
                angle: f,
                sign: -l,
                cornerRadius: o,
                cornerIsExternal: c,
            }),
            g = d.circleTangency,
            x = d.lineTangency,
            w = d.theta,
            O = c ? Math.abs(s - f) : Math.abs(s - f) - v - w;
        if (O < 0)
            return u
                ? 'M '
                      .concat(y.x, ',')
                      .concat(
                          y.y,
                          `
        a`
                      )
                      .concat(o, ',')
                      .concat(o, ',0,0,1,')
                      .concat(
                          o * 2,
                          `,0
        a`
                      )
                      .concat(o, ',')
                      .concat(o, ',0,0,1,')
                      .concat(
                          -o * 2,
                          `,0
      `
                      )
                : rw({
                      cx: r,
                      cy: n,
                      innerRadius: i,
                      outerRadius: a,
                      startAngle: s,
                      endAngle: f,
                  });
        var m = 'M '
            .concat(y.x, ',')
            .concat(
                y.y,
                `
    A`
            )
            .concat(o, ',')
            .concat(o, ',0,0,')
            .concat(+(l < 0), ',')
            .concat(p.x, ',')
            .concat(
                p.y,
                `
    A`
            )
            .concat(a, ',')
            .concat(a, ',0,')
            .concat(+(O > 180), ',')
            .concat(+(l < 0), ',')
            .concat(g.x, ',')
            .concat(
                g.y,
                `
    A`
            )
            .concat(o, ',')
            .concat(o, ',0,0,')
            .concat(+(l < 0), ',')
            .concat(x.x, ',')
            .concat(
                x.y,
                `
  `
            );
        if (i > 0) {
            var b = Ei({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: s,
                    sign: l,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: c,
                }),
                _ = b.circleTangency,
                A = b.lineTangency,
                T = b.theta,
                M = Ei({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: f,
                    sign: -l,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: c,
                }),
                P = M.circleTangency,
                E = M.lineTangency,
                j = M.theta,
                C = c ? Math.abs(s - f) : Math.abs(s - f) - T - j;
            if (C < 0 && o === 0)
                return ''.concat(m, 'L').concat(r, ',').concat(n, 'Z');
            m += 'L'
                .concat(E.x, ',')
                .concat(
                    E.y,
                    `
      A`
                )
                .concat(o, ',')
                .concat(o, ',0,0,')
                .concat(+(l < 0), ',')
                .concat(P.x, ',')
                .concat(
                    P.y,
                    `
      A`
                )
                .concat(i, ',')
                .concat(i, ',0,')
                .concat(+(C > 180), ',')
                .concat(+(l > 0), ',')
                .concat(_.x, ',')
                .concat(
                    _.y,
                    `
      A`
                )
                .concat(o, ',')
                .concat(o, ',0,0,')
                .concat(+(l < 0), ',')
                .concat(A.x, ',')
                .concat(A.y, 'Z');
        } else m += 'L'.concat(r, ',').concat(n, 'Z');
        return m;
    },
    P$ = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1,
    },
    nw = function (t) {
        var r = Ym(Ym({}, P$), t),
            n = r.cx,
            i = r.cy,
            a = r.innerRadius,
            o = r.outerRadius,
            u = r.cornerRadius,
            c = r.forceCornerRadius,
            s = r.cornerIsExternal,
            f = r.startAngle,
            l = r.endAngle,
            h = r.className;
        if (o < a || f === l) return null;
        var p = Q('recharts-sector', h),
            y = o - a,
            v = ke(u, y, 0, !0),
            d;
        return (
            v > 0 && Math.abs(f - l) < 360
                ? (d = S$({
                      cx: n,
                      cy: i,
                      innerRadius: a,
                      outerRadius: o,
                      cornerRadius: Math.min(v, y / 2),
                      forceCornerRadius: c,
                      cornerIsExternal: s,
                      startAngle: f,
                      endAngle: l,
                  }))
                : (d = rw({
                      cx: n,
                      cy: i,
                      innerRadius: a,
                      outerRadius: o,
                      startAngle: f,
                      endAngle: l,
                  })),
            S.createElement(
                'path',
                ef({}, H(r, !0), { className: p, d, role: 'img' })
            )
        );
    };
function Xn(e) {
    '@babel/helpers - typeof';
    return (
        (Xn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Xn(e)
    );
}
function tf() {
    return (
        (tf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        tf.apply(this, arguments)
    );
}
function Zm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Jm(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Zm(Object(r), !0).forEach(function (n) {
                  T$(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Zm(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function T$(e, t, r) {
    return (
        (t = E$(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function E$(e) {
    var t = j$(e, 'string');
    return Xn(t) == 'symbol' ? t : t + '';
}
function j$(e, t) {
    if (Xn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Xn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var Qm = {
        curveBasisClosed: X_,
        curveBasisOpen: Y_,
        curveBasis: V_,
        curveBumpX: k_,
        curveBumpY: R_,
        curveLinearClosed: Z_,
        curveLinear: Ba,
        curveMonotoneX: J_,
        curveMonotoneY: Q_,
        curveNatural: e1,
        curveStep: t1,
        curveStepAfter: n1,
        curveStepBefore: r1,
    },
    ji = function (t) {
        return t.x === +t.x && t.y === +t.y;
    },
    dn = function (t) {
        return t.x;
    },
    vn = function (t) {
        return t.y;
    },
    M$ = function (t, r) {
        if (Y(t)) return t;
        var n = 'curve'.concat(qa(t));
        return (n === 'curveMonotone' || n === 'curveBump') && r
            ? Qm[''.concat(n).concat(r === 'vertical' ? 'Y' : 'X')]
            : Qm[n] || Ba;
    },
    $$ = function (t) {
        var r = t.type,
            n = r === void 0 ? 'linear' : r,
            i = t.points,
            a = i === void 0 ? [] : i,
            o = t.baseLine,
            u = t.layout,
            c = t.connectNulls,
            s = c === void 0 ? !1 : c,
            f = M$(n, u),
            l = s
                ? a.filter(function (v) {
                      return ji(v);
                  })
                : a,
            h;
        if (Array.isArray(o)) {
            var p = s
                    ? o.filter(function (v) {
                          return ji(v);
                      })
                    : o,
                y = l.map(function (v, d) {
                    return Jm(Jm({}, v), {}, { base: p[d] });
                });
            return (
                u === 'vertical'
                    ? (h = xi()
                          .y(vn)
                          .x1(dn)
                          .x0(function (v) {
                              return v.base.x;
                          }))
                    : (h = xi()
                          .x(dn)
                          .y1(vn)
                          .y0(function (v) {
                              return v.base.y;
                          })),
                h.defined(ji).curve(f),
                h(y)
            );
        }
        return (
            u === 'vertical' && N(o)
                ? (h = xi().y(vn).x1(dn).x0(o))
                : N(o)
                  ? (h = xi().x(dn).y1(vn).y0(o))
                  : (h = t0().x(dn).y(vn)),
            h.defined(ji).curve(f),
            h(l)
        );
    },
    ca = function (t) {
        var r = t.className,
            n = t.points,
            i = t.path,
            a = t.pathRef;
        if ((!n || !n.length) && !i) return null;
        var o = n && n.length ? $$(t) : i;
        return S.createElement(
            'path',
            tf({}, H(t, !1), Ri(t), {
                className: Q('recharts-curve', r),
                d: o,
                ref: a,
            })
        );
    },
    C$ = Object.getOwnPropertyNames,
    I$ = Object.getOwnPropertySymbols,
    k$ = Object.prototype.hasOwnProperty;
function eg(e, t) {
    return function (n, i, a) {
        return e(n, i, a) && t(n, i, a);
    };
}
function Mi(e) {
    return function (r, n, i) {
        if (!r || !n || typeof r != 'object' || typeof n != 'object')
            return e(r, n, i);
        var a = i.cache,
            o = a.get(r),
            u = a.get(n);
        if (o && u) return o === n && u === r;
        a.set(r, n), a.set(n, r);
        var c = e(r, n, i);
        return a.delete(r), a.delete(n), c;
    };
}
function tg(e) {
    return C$(e).concat(I$(e));
}
var R$ =
    Object.hasOwn ||
    function (e, t) {
        return k$.call(e, t);
    };
function hr(e, t) {
    return e === t || (!e && !t && e !== e && t !== t);
}
var D$ = '__v',
    N$ = '__o',
    q$ = '_owner',
    rg = Object.getOwnPropertyDescriptor,
    ng = Object.keys;
function L$(e, t, r) {
    var n = e.length;
    if (t.length !== n) return !1;
    for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
    return !0;
}
function B$(e, t) {
    return hr(e.getTime(), t.getTime());
}
function F$(e, t) {
    return (
        e.name === t.name &&
        e.message === t.message &&
        e.cause === t.cause &&
        e.stack === t.stack
    );
}
function z$(e, t) {
    return e === t;
}
function ig(e, t, r) {
    var n = e.size;
    if (n !== t.size) return !1;
    if (!n) return !0;
    for (
        var i = new Array(n), a = e.entries(), o, u, c = 0;
        (o = a.next()) && !o.done;

    ) {
        for (var s = t.entries(), f = !1, l = 0; (u = s.next()) && !u.done; ) {
            if (i[l]) {
                l++;
                continue;
            }
            var h = o.value,
                p = u.value;
            if (
                r.equals(h[0], p[0], c, l, e, t, r) &&
                r.equals(h[1], p[1], h[0], p[0], e, t, r)
            ) {
                f = i[l] = !0;
                break;
            }
            l++;
        }
        if (!f) return !1;
        c++;
    }
    return !0;
}
var W$ = hr;
function U$(e, t, r) {
    var n = ng(e),
        i = n.length;
    if (ng(t).length !== i) return !1;
    for (; i-- > 0; ) if (!iw(e, t, r, n[i])) return !1;
    return !0;
}
function yn(e, t, r) {
    var n = tg(e),
        i = n.length;
    if (tg(t).length !== i) return !1;
    for (var a, o, u; i-- > 0; )
        if (
            ((a = n[i]),
            !iw(e, t, r, a) ||
                ((o = rg(e, a)),
                (u = rg(t, a)),
                (o || u) &&
                    (!o ||
                        !u ||
                        o.configurable !== u.configurable ||
                        o.enumerable !== u.enumerable ||
                        o.writable !== u.writable)))
        )
            return !1;
    return !0;
}
function H$(e, t) {
    return hr(e.valueOf(), t.valueOf());
}
function K$(e, t) {
    return e.source === t.source && e.flags === t.flags;
}
function ag(e, t, r) {
    var n = e.size;
    if (n !== t.size) return !1;
    if (!n) return !0;
    for (
        var i = new Array(n), a = e.values(), o, u;
        (o = a.next()) && !o.done;

    ) {
        for (var c = t.values(), s = !1, f = 0; (u = c.next()) && !u.done; ) {
            if (
                !i[f] &&
                r.equals(o.value, u.value, o.value, u.value, e, t, r)
            ) {
                s = i[f] = !0;
                break;
            }
            f++;
        }
        if (!s) return !1;
    }
    return !0;
}
function G$(e, t) {
    var r = e.length;
    if (t.length !== r) return !1;
    for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
    return !0;
}
function V$(e, t) {
    return (
        e.hostname === t.hostname &&
        e.pathname === t.pathname &&
        e.protocol === t.protocol &&
        e.port === t.port &&
        e.hash === t.hash &&
        e.username === t.username &&
        e.password === t.password
    );
}
function iw(e, t, r, n) {
    return (n === q$ || n === N$ || n === D$) && (e.$$typeof || t.$$typeof)
        ? !0
        : R$(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var X$ = '[object Arguments]',
    Y$ = '[object Boolean]',
    Z$ = '[object Date]',
    J$ = '[object Error]',
    Q$ = '[object Map]',
    eC = '[object Number]',
    tC = '[object Object]',
    rC = '[object RegExp]',
    nC = '[object Set]',
    iC = '[object String]',
    aC = '[object URL]',
    oC = Array.isArray,
    og =
        typeof ArrayBuffer == 'function' && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
    ug = Object.assign,
    uC = Object.prototype.toString.call.bind(Object.prototype.toString);
function cC(e) {
    var t = e.areArraysEqual,
        r = e.areDatesEqual,
        n = e.areErrorsEqual,
        i = e.areFunctionsEqual,
        a = e.areMapsEqual,
        o = e.areNumbersEqual,
        u = e.areObjectsEqual,
        c = e.arePrimitiveWrappersEqual,
        s = e.areRegExpsEqual,
        f = e.areSetsEqual,
        l = e.areTypedArraysEqual,
        h = e.areUrlsEqual;
    return function (y, v, d) {
        if (y === v) return !0;
        if (y == null || v == null) return !1;
        var g = typeof y;
        if (g !== typeof v) return !1;
        if (g !== 'object')
            return g === 'number'
                ? o(y, v, d)
                : g === 'function'
                  ? i(y, v, d)
                  : !1;
        var x = y.constructor;
        if (x !== v.constructor) return !1;
        if (x === Object) return u(y, v, d);
        if (oC(y)) return t(y, v, d);
        if (og != null && og(y)) return l(y, v, d);
        if (x === Date) return r(y, v, d);
        if (x === RegExp) return s(y, v, d);
        if (x === Map) return a(y, v, d);
        if (x === Set) return f(y, v, d);
        var w = uC(y);
        return w === Z$
            ? r(y, v, d)
            : w === rC
              ? s(y, v, d)
              : w === Q$
                ? a(y, v, d)
                : w === nC
                  ? f(y, v, d)
                  : w === tC
                    ? typeof y.then != 'function' &&
                      typeof v.then != 'function' &&
                      u(y, v, d)
                    : w === aC
                      ? h(y, v, d)
                      : w === J$
                        ? n(y, v, d)
                        : w === X$
                          ? u(y, v, d)
                          : w === Y$ || w === eC || w === iC
                            ? c(y, v, d)
                            : !1;
    };
}
function sC(e) {
    var t = e.circular,
        r = e.createCustomConfig,
        n = e.strict,
        i = {
            areArraysEqual: n ? yn : L$,
            areDatesEqual: B$,
            areErrorsEqual: F$,
            areFunctionsEqual: z$,
            areMapsEqual: n ? eg(ig, yn) : ig,
            areNumbersEqual: W$,
            areObjectsEqual: n ? yn : U$,
            arePrimitiveWrappersEqual: H$,
            areRegExpsEqual: K$,
            areSetsEqual: n ? eg(ag, yn) : ag,
            areTypedArraysEqual: n ? yn : G$,
            areUrlsEqual: V$,
        };
    if ((r && (i = ug({}, i, r(i))), t)) {
        var a = Mi(i.areArraysEqual),
            o = Mi(i.areMapsEqual),
            u = Mi(i.areObjectsEqual),
            c = Mi(i.areSetsEqual);
        i = ug({}, i, {
            areArraysEqual: a,
            areMapsEqual: o,
            areObjectsEqual: u,
            areSetsEqual: c,
        });
    }
    return i;
}
function lC(e) {
    return function (t, r, n, i, a, o, u) {
        return e(t, r, u);
    };
}
function fC(e) {
    var t = e.circular,
        r = e.comparator,
        n = e.createState,
        i = e.equals,
        a = e.strict;
    if (n)
        return function (c, s) {
            var f = n(),
                l = f.cache,
                h = l === void 0 ? (t ? new WeakMap() : void 0) : l,
                p = f.meta;
            return r(c, s, { cache: h, equals: i, meta: p, strict: a });
        };
    if (t)
        return function (c, s) {
            return r(c, s, {
                cache: new WeakMap(),
                equals: i,
                meta: void 0,
                strict: a,
            });
        };
    var o = { cache: void 0, equals: i, meta: void 0, strict: a };
    return function (c, s) {
        return r(c, s, o);
    };
}
var hC = Bt();
Bt({ strict: !0 });
Bt({ circular: !0 });
Bt({ circular: !0, strict: !0 });
Bt({
    createInternalComparator: function () {
        return hr;
    },
});
Bt({
    strict: !0,
    createInternalComparator: function () {
        return hr;
    },
});
Bt({
    circular: !0,
    createInternalComparator: function () {
        return hr;
    },
});
Bt({
    circular: !0,
    createInternalComparator: function () {
        return hr;
    },
    strict: !0,
});
function Bt(e) {
    e === void 0 && (e = {});
    var t = e.circular,
        r = t === void 0 ? !1 : t,
        n = e.createInternalComparator,
        i = e.createState,
        a = e.strict,
        o = a === void 0 ? !1 : a,
        u = sC(e),
        c = cC(u),
        s = n ? n(c) : lC(c);
    return fC({
        circular: r,
        comparator: c,
        createState: i,
        equals: s,
        strict: o,
    });
}
function pC(e) {
    typeof requestAnimationFrame < 'u' && requestAnimationFrame(e);
}
function cg(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = -1,
        n = function i(a) {
            r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : pC(i);
        };
    requestAnimationFrame(n);
}
function rf(e) {
    '@babel/helpers - typeof';
    return (
        (rf =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        rf(e)
    );
}
function dC(e) {
    return gC(e) || mC(e) || yC(e) || vC();
}
function vC() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yC(e, t) {
    if (e) {
        if (typeof e == 'string') return sg(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return sg(e, t);
    }
}
function sg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function mC(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function gC(e) {
    if (Array.isArray(e)) return e;
}
function bC() {
    var e = {},
        t = function () {
            return null;
        },
        r = !1,
        n = function i(a) {
            if (!r) {
                if (Array.isArray(a)) {
                    if (!a.length) return;
                    var o = a,
                        u = dC(o),
                        c = u[0],
                        s = u.slice(1);
                    if (typeof c == 'number') {
                        cg(i.bind(null, s), c);
                        return;
                    }
                    i(c), cg(i.bind(null, s));
                    return;
                }
                rf(a) === 'object' && ((e = a), t(e)),
                    typeof a == 'function' && a();
            }
        };
    return {
        stop: function () {
            r = !0;
        },
        start: function (a) {
            (r = !1), n(a);
        },
        subscribe: function (a) {
            return (
                (t = a),
                function () {
                    t = function () {
                        return null;
                    };
                }
            );
        },
    };
}
function Yn(e) {
    '@babel/helpers - typeof';
    return (
        (Yn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Yn(e)
    );
}
function lg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function fg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? lg(Object(r), !0).forEach(function (n) {
                  aw(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : lg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function aw(e, t, r) {
    return (
        (t = xC(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function xC(e) {
    var t = wC(e, 'string');
    return Yn(t) === 'symbol' ? t : String(t);
}
function wC(e, t) {
    if (Yn(e) !== 'object' || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Yn(n) !== 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var OC = function (t, r) {
        return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
            return n.filter(function (a) {
                return i.includes(a);
            });
        });
    },
    _C = function (t) {
        return t;
    },
    AC = function (t) {
        return t.replace(/([A-Z])/g, function (r) {
            return '-'.concat(r.toLowerCase());
        });
    },
    An = function (t, r) {
        return Object.keys(r).reduce(function (n, i) {
            return fg(fg({}, n), {}, aw({}, i, t(i, r[i])));
        }, {});
    },
    hg = function (t, r, n) {
        return t
            .map(function (i) {
                return ''.concat(AC(i), ' ').concat(r, 'ms ').concat(n);
            })
            .join(',');
    };
function SC(e, t) {
    return EC(e) || TC(e, t) || ow(e, t) || PC();
}
function PC() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TC(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function EC(e) {
    if (Array.isArray(e)) return e;
}
function jC(e) {
    return CC(e) || $C(e) || ow(e) || MC();
}
function MC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ow(e, t) {
    if (e) {
        if (typeof e == 'string') return nf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return nf(e, t);
    }
}
function $C(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function CC(e) {
    if (Array.isArray(e)) return nf(e);
}
function nf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var sa = 1e-4,
    uw = function (t, r) {
        return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
    },
    cw = function (t, r) {
        return t
            .map(function (n, i) {
                return n * Math.pow(r, i);
            })
            .reduce(function (n, i) {
                return n + i;
            });
    },
    pg = function (t, r) {
        return function (n) {
            var i = uw(t, r);
            return cw(i, n);
        };
    },
    IC = function (t, r) {
        return function (n) {
            var i = uw(t, r),
                a = [].concat(
                    jC(
                        i
                            .map(function (o, u) {
                                return o * u;
                            })
                            .slice(1)
                    ),
                    [0]
                );
            return cw(a, n);
        };
    },
    dg = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
        var i = r[0],
            a = r[1],
            o = r[2],
            u = r[3];
        if (r.length === 1)
            switch (r[0]) {
                case 'linear':
                    (i = 0), (a = 0), (o = 1), (u = 1);
                    break;
                case 'ease':
                    (i = 0.25), (a = 0.1), (o = 0.25), (u = 1);
                    break;
                case 'ease-in':
                    (i = 0.42), (a = 0), (o = 1), (u = 1);
                    break;
                case 'ease-out':
                    (i = 0.42), (a = 0), (o = 0.58), (u = 1);
                    break;
                case 'ease-in-out':
                    (i = 0), (a = 0), (o = 0.58), (u = 1);
                    break;
                default: {
                    var c = r[0].split('(');
                    if (
                        c[0] === 'cubic-bezier' &&
                        c[1].split(')')[0].split(',').length === 4
                    ) {
                        var s = c[1]
                                .split(')')[0]
                                .split(',')
                                .map(function (d) {
                                    return parseFloat(d);
                                }),
                            f = SC(s, 4);
                        (i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]);
                    }
                }
            }
        var l = pg(i, o),
            h = pg(a, u),
            p = IC(i, o),
            y = function (g) {
                return g > 1 ? 1 : g < 0 ? 0 : g;
            },
            v = function (g) {
                for (var x = g > 1 ? 1 : g, w = x, O = 0; O < 8; ++O) {
                    var m = l(w) - x,
                        b = p(w);
                    if (Math.abs(m - x) < sa || b < sa) return h(w);
                    w = y(w - m / b);
                }
                return h(w);
            };
        return (v.isStepper = !1), v;
    },
    kC = function () {
        var t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            r = t.stiff,
            n = r === void 0 ? 100 : r,
            i = t.damping,
            a = i === void 0 ? 8 : i,
            o = t.dt,
            u = o === void 0 ? 17 : o,
            c = function (f, l, h) {
                var p = -(f - l) * n,
                    y = h * a,
                    v = h + ((p - y) * u) / 1e3,
                    d = (h * u) / 1e3 + f;
                return Math.abs(d - l) < sa && Math.abs(v) < sa
                    ? [l, 0]
                    : [d, v];
            };
        return (c.isStepper = !0), (c.dt = u), c;
    },
    RC = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
        var i = r[0];
        if (typeof i == 'string')
            switch (i) {
                case 'ease':
                case 'ease-in-out':
                case 'ease-out':
                case 'ease-in':
                case 'linear':
                    return dg(i);
                case 'spring':
                    return kC();
                default:
                    if (i.split('(')[0] === 'cubic-bezier') return dg(i);
            }
        return typeof i == 'function' ? i : null;
    };
function Zn(e) {
    '@babel/helpers - typeof';
    return (
        (Zn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Zn(e)
    );
}
function vg(e) {
    return qC(e) || NC(e) || sw(e) || DC();
}
function DC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NC(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function qC(e) {
    if (Array.isArray(e)) return of(e);
}
function yg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function je(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? yg(Object(r), !0).forEach(function (n) {
                  af(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : yg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function af(e, t, r) {
    return (
        (t = LC(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function LC(e) {
    var t = BC(e, 'string');
    return Zn(t) === 'symbol' ? t : String(t);
}
function BC(e, t) {
    if (Zn(e) !== 'object' || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Zn(n) !== 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function FC(e, t) {
    return UC(e) || WC(e, t) || sw(e, t) || zC();
}
function zC() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sw(e, t) {
    if (e) {
        if (typeof e == 'string') return of(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return of(e, t);
    }
}
function of(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function WC(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function UC(e) {
    if (Array.isArray(e)) return e;
}
var la = function (t, r, n) {
        return t + (r - t) * n;
    },
    uf = function (t) {
        var r = t.from,
            n = t.to;
        return r !== n;
    },
    HC = function e(t, r, n) {
        var i = An(function (a, o) {
            if (uf(o)) {
                var u = t(o.from, o.to, o.velocity),
                    c = FC(u, 2),
                    s = c[0],
                    f = c[1];
                return je(je({}, o), {}, { from: s, velocity: f });
            }
            return o;
        }, r);
        return n < 1
            ? An(function (a, o) {
                  return uf(o)
                      ? je(
                            je({}, o),
                            {},
                            {
                                velocity: la(o.velocity, i[a].velocity, n),
                                from: la(o.from, i[a].from, n),
                            }
                        )
                      : o;
              }, r)
            : e(t, i, n - 1);
    };
const KC = function (e, t, r, n, i) {
    var a = OC(e, t),
        o = a.reduce(function (d, g) {
            return je(je({}, d), {}, af({}, g, [e[g], t[g]]));
        }, {}),
        u = a.reduce(function (d, g) {
            return je(
                je({}, d),
                {},
                af({}, g, { from: e[g], velocity: 0, to: t[g] })
            );
        }, {}),
        c = -1,
        s,
        f,
        l = function () {
            return null;
        },
        h = function () {
            return An(function (g, x) {
                return x.from;
            }, u);
        },
        p = function () {
            return !Object.values(u).filter(uf).length;
        },
        y = function (g) {
            s || (s = g);
            var x = g - s,
                w = x / r.dt;
            (u = HC(r, u, w)),
                i(je(je(je({}, e), t), h())),
                (s = g),
                p() || (c = requestAnimationFrame(l));
        },
        v = function (g) {
            f || (f = g);
            var x = (g - f) / n,
                w = An(function (m, b) {
                    return la.apply(void 0, vg(b).concat([r(x)]));
                }, o);
            if ((i(je(je(je({}, e), t), w)), x < 1))
                c = requestAnimationFrame(l);
            else {
                var O = An(function (m, b) {
                    return la.apply(void 0, vg(b).concat([r(1)]));
                }, o);
                i(je(je(je({}, e), t), O));
            }
        };
    return (
        (l = r.isStepper ? y : v),
        function () {
            return (
                requestAnimationFrame(l),
                function () {
                    cancelAnimationFrame(c);
                }
            );
        }
    );
};
function Rr(e) {
    '@babel/helpers - typeof';
    return (
        (Rr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Rr(e)
    );
}
var GC = [
    'children',
    'begin',
    'duration',
    'attributeName',
    'easing',
    'isActive',
    'steps',
    'from',
    'to',
    'canBegin',
    'onAnimationEnd',
    'shouldReAnimate',
    'onAnimationReStart',
];
function VC(e, t) {
    if (e == null) return {};
    var r = XC(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function XC(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i,
        a;
    for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
}
function Us(e) {
    return QC(e) || JC(e) || ZC(e) || YC();
}
function YC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZC(e, t) {
    if (e) {
        if (typeof e == 'string') return cf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return cf(e, t);
    }
}
function JC(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function QC(e) {
    if (Array.isArray(e)) return cf(e);
}
function cf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function mg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function rt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? mg(Object(r), !0).forEach(function (n) {
                  xn(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : mg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function xn(e, t, r) {
    return (
        (t = lw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function eI(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function tI(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, lw(n.key), n);
    }
}
function rI(e, t, r) {
    return (
        t && tI(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function lw(e) {
    var t = nI(e, 'string');
    return Rr(t) === 'symbol' ? t : String(t);
}
function nI(e, t) {
    if (Rr(e) !== 'object' || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Rr(n) !== 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function iI(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && sf(e, t);
}
function sf(e, t) {
    return (
        (sf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        sf(e, t)
    );
}
function aI(e) {
    var t = oI();
    return function () {
        var n = fa(e),
            i;
        if (t) {
            var a = fa(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return lf(this, i);
    };
}
function lf(e, t) {
    if (t && (Rr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return ff(e);
}
function ff(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function oI() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == 'function') return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function fa(e) {
    return (
        (fa = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        fa(e)
    );
}
var ht = (function (e) {
    iI(r, e);
    var t = aI(r);
    function r(n, i) {
        var a;
        eI(this, r), (a = t.call(this, n, i));
        var o = a.props,
            u = o.isActive,
            c = o.attributeName,
            s = o.from,
            f = o.to,
            l = o.steps,
            h = o.children,
            p = o.duration;
        if (
            ((a.handleStyleChange = a.handleStyleChange.bind(ff(a))),
            (a.changeStyle = a.changeStyle.bind(ff(a))),
            !u || p <= 0)
        )
            return (
                (a.state = { style: {} }),
                typeof h == 'function' && (a.state = { style: f }),
                lf(a)
            );
        if (l && l.length) a.state = { style: l[0].style };
        else if (s) {
            if (typeof h == 'function') return (a.state = { style: s }), lf(a);
            a.state = { style: c ? xn({}, c, s) : s };
        } else a.state = { style: {} };
        return a;
    }
    return (
        rI(r, [
            {
                key: 'componentDidMount',
                value: function () {
                    var i = this.props,
                        a = i.isActive,
                        o = i.canBegin;
                    (this.mounted = !0),
                        !(!a || !o) && this.runAnimation(this.props);
                },
            },
            {
                key: 'componentDidUpdate',
                value: function (i) {
                    var a = this.props,
                        o = a.isActive,
                        u = a.canBegin,
                        c = a.attributeName,
                        s = a.shouldReAnimate,
                        f = a.to,
                        l = a.from,
                        h = this.state.style;
                    if (u) {
                        if (!o) {
                            var p = { style: c ? xn({}, c, f) : f };
                            this.state &&
                                h &&
                                ((c && h[c] !== f) || (!c && h !== f)) &&
                                this.setState(p);
                            return;
                        }
                        if (!(hC(i.to, f) && i.canBegin && i.isActive)) {
                            var y = !i.canBegin || !i.isActive;
                            this.manager && this.manager.stop(),
                                this.stopJSAnimation && this.stopJSAnimation();
                            var v = y || s ? l : i.to;
                            if (this.state && h) {
                                var d = { style: c ? xn({}, c, v) : v };
                                ((c && h[c] !== v) || (!c && h !== v)) &&
                                    this.setState(d);
                            }
                            this.runAnimation(
                                rt(
                                    rt({}, this.props),
                                    {},
                                    { from: v, begin: 0 }
                                )
                            );
                        }
                    }
                },
            },
            {
                key: 'componentWillUnmount',
                value: function () {
                    this.mounted = !1;
                    var i = this.props.onAnimationEnd;
                    this.unSubscribe && this.unSubscribe(),
                        this.manager &&
                            (this.manager.stop(), (this.manager = null)),
                        this.stopJSAnimation && this.stopJSAnimation(),
                        i && i();
                },
            },
            {
                key: 'handleStyleChange',
                value: function (i) {
                    this.changeStyle(i);
                },
            },
            {
                key: 'changeStyle',
                value: function (i) {
                    this.mounted && this.setState({ style: i });
                },
            },
            {
                key: 'runJSAnimation',
                value: function (i) {
                    var a = this,
                        o = i.from,
                        u = i.to,
                        c = i.duration,
                        s = i.easing,
                        f = i.begin,
                        l = i.onAnimationEnd,
                        h = i.onAnimationStart,
                        p = KC(o, u, RC(s), c, this.changeStyle),
                        y = function () {
                            a.stopJSAnimation = p();
                        };
                    this.manager.start([h, f, y, c, l]);
                },
            },
            {
                key: 'runStepAnimation',
                value: function (i) {
                    var a = this,
                        o = i.steps,
                        u = i.begin,
                        c = i.onAnimationStart,
                        s = o[0],
                        f = s.style,
                        l = s.duration,
                        h = l === void 0 ? 0 : l,
                        p = function (v, d, g) {
                            if (g === 0) return v;
                            var x = d.duration,
                                w = d.easing,
                                O = w === void 0 ? 'ease' : w,
                                m = d.style,
                                b = d.properties,
                                _ = d.onAnimationEnd,
                                A = g > 0 ? o[g - 1] : d,
                                T = b || Object.keys(m);
                            if (typeof O == 'function' || O === 'spring')
                                return [].concat(Us(v), [
                                    a.runJSAnimation.bind(a, {
                                        from: A.style,
                                        to: m,
                                        duration: x,
                                        easing: O,
                                    }),
                                    x,
                                ]);
                            var M = hg(T, x, O),
                                P = rt(
                                    rt(rt({}, A.style), m),
                                    {},
                                    { transition: M }
                                );
                            return [].concat(Us(v), [P, x, _]).filter(_C);
                        };
                    return this.manager.start(
                        [c].concat(Us(o.reduce(p, [f, Math.max(h, u)])), [
                            i.onAnimationEnd,
                        ])
                    );
                },
            },
            {
                key: 'runAnimation',
                value: function (i) {
                    this.manager || (this.manager = bC());
                    var a = i.begin,
                        o = i.duration,
                        u = i.attributeName,
                        c = i.to,
                        s = i.easing,
                        f = i.onAnimationStart,
                        l = i.onAnimationEnd,
                        h = i.steps,
                        p = i.children,
                        y = this.manager;
                    if (
                        ((this.unSubscribe = y.subscribe(
                            this.handleStyleChange
                        )),
                        typeof s == 'function' ||
                            typeof p == 'function' ||
                            s === 'spring')
                    ) {
                        this.runJSAnimation(i);
                        return;
                    }
                    if (h.length > 1) {
                        this.runStepAnimation(i);
                        return;
                    }
                    var v = u ? xn({}, u, c) : c,
                        d = hg(Object.keys(v), o, s);
                    y.start([f, a, rt(rt({}, v), {}, { transition: d }), o, l]);
                },
            },
            {
                key: 'render',
                value: function () {
                    var i = this.props,
                        a = i.children;
                    i.begin;
                    var o = i.duration;
                    i.attributeName, i.easing;
                    var u = i.isActive;
                    i.steps,
                        i.from,
                        i.to,
                        i.canBegin,
                        i.onAnimationEnd,
                        i.shouldReAnimate,
                        i.onAnimationReStart;
                    var c = VC(i, GC),
                        s = q.Children.count(a),
                        f = this.state.style;
                    if (typeof a == 'function') return a(f);
                    if (!u || s === 0 || o <= 0) return a;
                    var l = function (p) {
                        var y = p.props,
                            v = y.style,
                            d = v === void 0 ? {} : v,
                            g = y.className,
                            x = q.cloneElement(
                                p,
                                rt(
                                    rt({}, c),
                                    {},
                                    { style: rt(rt({}, d), f), className: g }
                                )
                            );
                        return x;
                    };
                    return s === 1
                        ? l(q.Children.only(a))
                        : S.createElement(
                              'div',
                              null,
                              q.Children.map(a, function (h) {
                                  return l(h);
                              })
                          );
                },
            },
        ]),
        r
    );
})(q.PureComponent);
ht.displayName = 'Animate';
ht.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: '',
    to: '',
    attributeName: '',
    easing: 'ease',
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function () {},
    onAnimationStart: function () {},
};
ht.propTypes = {
    from: ie.oneOfType([ie.object, ie.string]),
    to: ie.oneOfType([ie.object, ie.string]),
    attributeName: ie.string,
    duration: ie.number,
    begin: ie.number,
    easing: ie.oneOfType([ie.string, ie.func]),
    steps: ie.arrayOf(
        ie.shape({
            duration: ie.number.isRequired,
            style: ie.object.isRequired,
            easing: ie.oneOfType([
                ie.oneOf([
                    'ease',
                    'ease-in',
                    'ease-out',
                    'ease-in-out',
                    'linear',
                ]),
                ie.func,
            ]),
            properties: ie.arrayOf('string'),
            onAnimationEnd: ie.func,
        })
    ),
    children: ie.oneOfType([ie.node, ie.func]),
    isActive: ie.bool,
    canBegin: ie.bool,
    onAnimationEnd: ie.func,
    shouldReAnimate: ie.bool,
    onAnimationStart: ie.func,
    onAnimationReStart: ie.func,
};
function Jn(e) {
    '@babel/helpers - typeof';
    return (
        (Jn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Jn(e)
    );
}
function ha() {
    return (
        (ha = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        ha.apply(this, arguments)
    );
}
function uI(e, t) {
    return fI(e) || lI(e, t) || sI(e, t) || cI();
}
function cI() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sI(e, t) {
    if (e) {
        if (typeof e == 'string') return gg(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return gg(e, t);
    }
}
function gg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function lI(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function fI(e) {
    if (Array.isArray(e)) return e;
}
function bg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function xg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? bg(Object(r), !0).forEach(function (n) {
                  hI(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : bg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function hI(e, t, r) {
    return (
        (t = pI(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function pI(e) {
    var t = dI(e, 'string');
    return Jn(t) == 'symbol' ? t : t + '';
}
function dI(e, t) {
    if (Jn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Jn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var wg = function (t, r, n, i, a) {
        var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
            u = i >= 0 ? 1 : -1,
            c = n >= 0 ? 1 : -1,
            s = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
            f;
        if (o > 0 && a instanceof Array) {
            for (var l = [0, 0, 0, 0], h = 0, p = 4; h < p; h++)
                l[h] = a[h] > o ? o : a[h];
            (f = 'M'.concat(t, ',').concat(r + u * l[0])),
                l[0] > 0 &&
                    (f += 'A '
                        .concat(l[0], ',')
                        .concat(l[0], ',0,0,')
                        .concat(s, ',')
                        .concat(t + c * l[0], ',')
                        .concat(r)),
                (f += 'L '.concat(t + n - c * l[1], ',').concat(r)),
                l[1] > 0 &&
                    (f += 'A '
                        .concat(l[1], ',')
                        .concat(l[1], ',0,0,')
                        .concat(
                            s,
                            `,
        `
                        )
                        .concat(t + n, ',')
                        .concat(r + u * l[1])),
                (f += 'L '.concat(t + n, ',').concat(r + i - u * l[2])),
                l[2] > 0 &&
                    (f += 'A '
                        .concat(l[2], ',')
                        .concat(l[2], ',0,0,')
                        .concat(
                            s,
                            `,
        `
                        )
                        .concat(t + n - c * l[2], ',')
                        .concat(r + i)),
                (f += 'L '.concat(t + c * l[3], ',').concat(r + i)),
                l[3] > 0 &&
                    (f += 'A '
                        .concat(l[3], ',')
                        .concat(l[3], ',0,0,')
                        .concat(
                            s,
                            `,
        `
                        )
                        .concat(t, ',')
                        .concat(r + i - u * l[3])),
                (f += 'Z');
        } else if (o > 0 && a === +a && a > 0) {
            var y = Math.min(o, a);
            f = 'M '
                .concat(t, ',')
                .concat(
                    r + u * y,
                    `
            A `
                )
                .concat(y, ',')
                .concat(y, ',0,0,')
                .concat(s, ',')
                .concat(t + c * y, ',')
                .concat(
                    r,
                    `
            L `
                )
                .concat(t + n - c * y, ',')
                .concat(
                    r,
                    `
            A `
                )
                .concat(y, ',')
                .concat(y, ',0,0,')
                .concat(s, ',')
                .concat(t + n, ',')
                .concat(
                    r + u * y,
                    `
            L `
                )
                .concat(t + n, ',')
                .concat(
                    r + i - u * y,
                    `
            A `
                )
                .concat(y, ',')
                .concat(y, ',0,0,')
                .concat(s, ',')
                .concat(t + n - c * y, ',')
                .concat(
                    r + i,
                    `
            L `
                )
                .concat(t + c * y, ',')
                .concat(
                    r + i,
                    `
            A `
                )
                .concat(y, ',')
                .concat(y, ',0,0,')
                .concat(s, ',')
                .concat(t, ',')
                .concat(r + i - u * y, ' Z');
        } else
            f = 'M '
                .concat(t, ',')
                .concat(r, ' h ')
                .concat(n, ' v ')
                .concat(i, ' h ')
                .concat(-n, ' Z');
        return f;
    },
    vI = function (t, r) {
        if (!t || !r) return !1;
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y,
            u = r.width,
            c = r.height;
        if (Math.abs(u) > 0 && Math.abs(c) > 0) {
            var s = Math.min(a, a + u),
                f = Math.max(a, a + u),
                l = Math.min(o, o + c),
                h = Math.max(o, o + c);
            return n >= s && n <= f && i >= l && i <= h;
        }
        return !1;
    },
    yI = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
    },
    Ih = function (t) {
        var r = xg(xg({}, yI), t),
            n = q.useRef(),
            i = q.useState(-1),
            a = uI(i, 2),
            o = a[0],
            u = a[1];
        q.useEffect(function () {
            if (n.current && n.current.getTotalLength)
                try {
                    var O = n.current.getTotalLength();
                    O && u(O);
                } catch {}
        }, []);
        var c = r.x,
            s = r.y,
            f = r.width,
            l = r.height,
            h = r.radius,
            p = r.className,
            y = r.animationEasing,
            v = r.animationDuration,
            d = r.animationBegin,
            g = r.isAnimationActive,
            x = r.isUpdateAnimationActive;
        if (c !== +c || s !== +s || f !== +f || l !== +l || f === 0 || l === 0)
            return null;
        var w = Q('recharts-rectangle', p);
        return x
            ? S.createElement(
                  ht,
                  {
                      canBegin: o > 0,
                      from: { width: f, height: l, x: c, y: s },
                      to: { width: f, height: l, x: c, y: s },
                      duration: v,
                      animationEasing: y,
                      isActive: x,
                  },
                  function (O) {
                      var m = O.width,
                          b = O.height,
                          _ = O.x,
                          A = O.y;
                      return S.createElement(
                          ht,
                          {
                              canBegin: o > 0,
                              from: '0px '.concat(o === -1 ? 1 : o, 'px'),
                              to: ''.concat(o, 'px 0px'),
                              attributeName: 'strokeDasharray',
                              begin: d,
                              duration: v,
                              isActive: g,
                              easing: y,
                          },
                          S.createElement(
                              'path',
                              ha({}, H(r, !0), {
                                  className: w,
                                  d: wg(_, A, m, b, h),
                                  ref: n,
                              })
                          )
                      );
                  }
              )
            : S.createElement(
                  'path',
                  ha({}, H(r, !0), { className: w, d: wg(c, s, f, l, h) })
              );
    },
    mI = ['points', 'className', 'baseLinePoints', 'connectNulls'];
function br() {
    return (
        (br = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        br.apply(this, arguments)
    );
}
function gI(e, t) {
    if (e == null) return {};
    var r = bI(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function bI(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function Og(e) {
    return _I(e) || OI(e) || wI(e) || xI();
}
function xI() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wI(e, t) {
    if (e) {
        if (typeof e == 'string') return hf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return hf(e, t);
    }
}
function OI(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function _I(e) {
    if (Array.isArray(e)) return hf(e);
}
function hf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var _g = function (t) {
        return t && t.x === +t.x && t.y === +t.y;
    },
    AI = function () {
        var t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
            r = [[]];
        return (
            t.forEach(function (n) {
                _g(n)
                    ? r[r.length - 1].push(n)
                    : r[r.length - 1].length > 0 && r.push([]);
            }),
            _g(t[0]) && r[r.length - 1].push(t[0]),
            r[r.length - 1].length <= 0 && (r = r.slice(0, -1)),
            r
        );
    },
    Sn = function (t, r) {
        var n = AI(t);
        r &&
            (n = [
                n.reduce(function (a, o) {
                    return [].concat(Og(a), Og(o));
                }, []),
            ]);
        var i = n
            .map(function (a) {
                return a.reduce(function (o, u, c) {
                    return ''
                        .concat(o)
                        .concat(c === 0 ? 'M' : 'L')
                        .concat(u.x, ',')
                        .concat(u.y);
                }, '');
            })
            .join('');
        return n.length === 1 ? ''.concat(i, 'Z') : i;
    },
    SI = function (t, r, n) {
        var i = Sn(t, n);
        return ''
            .concat(i.slice(-1) === 'Z' ? i.slice(0, -1) : i, 'L')
            .concat(Sn(r.reverse(), n).slice(1));
    },
    PI = function (t) {
        var r = t.points,
            n = t.className,
            i = t.baseLinePoints,
            a = t.connectNulls,
            o = gI(t, mI);
        if (!r || !r.length) return null;
        var u = Q('recharts-polygon', n);
        if (i && i.length) {
            var c = o.stroke && o.stroke !== 'none',
                s = SI(r, i, a);
            return S.createElement(
                'g',
                { className: u },
                S.createElement(
                    'path',
                    br({}, H(o, !0), {
                        fill: s.slice(-1) === 'Z' ? o.fill : 'none',
                        stroke: 'none',
                        d: s,
                    })
                ),
                c
                    ? S.createElement(
                          'path',
                          br({}, H(o, !0), { fill: 'none', d: Sn(r, a) })
                      )
                    : null,
                c
                    ? S.createElement(
                          'path',
                          br({}, H(o, !0), { fill: 'none', d: Sn(i, a) })
                      )
                    : null
            );
        }
        var f = Sn(r, a);
        return S.createElement(
            'path',
            br({}, H(o, !0), {
                fill: f.slice(-1) === 'Z' ? o.fill : 'none',
                className: u,
                d: f,
            })
        );
    };
function pf() {
    return (
        (pf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        pf.apply(this, arguments)
    );
}
var no = function (t) {
    var r = t.cx,
        n = t.cy,
        i = t.r,
        a = t.className,
        o = Q('recharts-dot', a);
    return r === +r && n === +n && i === +i
        ? S.createElement(
              'circle',
              pf({}, H(t, !1), Ri(t), { className: o, cx: r, cy: n, r: i })
          )
        : null;
};
function Qn(e) {
    '@babel/helpers - typeof';
    return (
        (Qn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Qn(e)
    );
}
var TI = ['x', 'y', 'top', 'left', 'width', 'height', 'className'];
function df() {
    return (
        (df = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        df.apply(this, arguments)
    );
}
function Ag(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function EI(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Ag(Object(r), !0).forEach(function (n) {
                  jI(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ag(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function jI(e, t, r) {
    return (
        (t = MI(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function MI(e) {
    var t = $I(e, 'string');
    return Qn(t) == 'symbol' ? t : t + '';
}
function $I(e, t) {
    if (Qn(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Qn(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function CI(e, t) {
    if (e == null) return {};
    var r = II(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function II(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
var kI = function (t, r, n, i, a, o) {
        return 'M'
            .concat(t, ',')
            .concat(a, 'v')
            .concat(i, 'M')
            .concat(o, ',')
            .concat(r, 'h')
            .concat(n);
    },
    RI = function (t) {
        var r = t.x,
            n = r === void 0 ? 0 : r,
            i = t.y,
            a = i === void 0 ? 0 : i,
            o = t.top,
            u = o === void 0 ? 0 : o,
            c = t.left,
            s = c === void 0 ? 0 : c,
            f = t.width,
            l = f === void 0 ? 0 : f,
            h = t.height,
            p = h === void 0 ? 0 : h,
            y = t.className,
            v = CI(t, TI),
            d = EI({ x: n, y: a, top: u, left: s, width: l, height: p }, v);
        return !N(n) || !N(a) || !N(l) || !N(p) || !N(u) || !N(s)
            ? null
            : S.createElement(
                  'path',
                  df({}, H(d, !0), {
                      className: Q('recharts-cross', y),
                      d: kI(n, a, l, p, u, s),
                  })
              );
    },
    Hs,
    Sg;
function DI() {
    if (Sg) return Hs;
    Sg = 1;
    var e = Ja(),
        t = Sx(),
        r = dt();
    function n(i, a) {
        return i && i.length ? e(i, r(a, 2), t) : void 0;
    }
    return (Hs = n), Hs;
}
var NI = DI();
const qI = ce(NI);
var Ks, Pg;
function LI() {
    if (Pg) return Ks;
    Pg = 1;
    var e = Ja(),
        t = dt(),
        r = Px();
    function n(i, a) {
        return i && i.length ? e(i, t(a, 2), r) : void 0;
    }
    return (Ks = n), Ks;
}
var BI = LI();
const FI = ce(BI);
var zI = ['cx', 'cy', 'angle', 'ticks', 'axisLine'],
    WI = ['ticks', 'tick', 'angle', 'tickFormatter', 'stroke'];
function Dr(e) {
    '@babel/helpers - typeof';
    return (
        (Dr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Dr(e)
    );
}
function Pn() {
    return (
        (Pn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Pn.apply(this, arguments)
    );
}
function Tg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ht(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Tg(Object(r), !0).forEach(function (n) {
                  io(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Tg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function Eg(e, t) {
    if (e == null) return {};
    var r = UI(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function UI(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function HI(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function jg(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, hw(n.key), n);
    }
}
function KI(e, t, r) {
    return (
        t && jg(e.prototype, t),
        r && jg(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function GI(e, t, r) {
    return (
        (t = pa(t)),
        VI(
            e,
            fw()
                ? Reflect.construct(t, r || [], pa(e).constructor)
                : t.apply(e, r)
        )
    );
}
function VI(e, t) {
    if (t && (Dr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return XI(e);
}
function XI(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function fw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (fw = function () {
        return !!e;
    })();
}
function pa(e) {
    return (
        (pa = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        pa(e)
    );
}
function YI(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && vf(e, t);
}
function vf(e, t) {
    return (
        (vf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        vf(e, t)
    );
}
function io(e, t, r) {
    return (
        (t = hw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function hw(e) {
    var t = ZI(e, 'string');
    return Dr(t) == 'symbol' ? t : t + '';
}
function ZI(e, t) {
    if (Dr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Dr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var ao = (function (e) {
    function t() {
        return HI(this, t), GI(this, t, arguments);
    }
    return (
        YI(t, e),
        KI(
            t,
            [
                {
                    key: 'getTickValueCoord',
                    value: function (n) {
                        var i = n.coordinate,
                            a = this.props,
                            o = a.angle,
                            u = a.cx,
                            c = a.cy;
                        return fe(u, c, i, o);
                    },
                },
                {
                    key: 'getTickTextAnchor',
                    value: function () {
                        var n = this.props.orientation,
                            i;
                        switch (n) {
                            case 'left':
                                i = 'end';
                                break;
                            case 'right':
                                i = 'start';
                                break;
                            default:
                                i = 'middle';
                                break;
                        }
                        return i;
                    },
                },
                {
                    key: 'getViewBox',
                    value: function () {
                        var n = this.props,
                            i = n.cx,
                            a = n.cy,
                            o = n.angle,
                            u = n.ticks,
                            c = qI(u, function (f) {
                                return f.coordinate || 0;
                            }),
                            s = FI(u, function (f) {
                                return f.coordinate || 0;
                            });
                        return {
                            cx: i,
                            cy: a,
                            startAngle: o,
                            endAngle: o,
                            innerRadius: s.coordinate || 0,
                            outerRadius: c.coordinate || 0,
                        };
                    },
                },
                {
                    key: 'renderAxisLine',
                    value: function () {
                        var n = this.props,
                            i = n.cx,
                            a = n.cy,
                            o = n.angle,
                            u = n.ticks,
                            c = n.axisLine,
                            s = Eg(n, zI),
                            f = u.reduce(
                                function (y, v) {
                                    return [
                                        Math.min(y[0], v.coordinate),
                                        Math.max(y[1], v.coordinate),
                                    ];
                                },
                                [1 / 0, -1 / 0]
                            ),
                            l = fe(i, a, f[0], o),
                            h = fe(i, a, f[1], o),
                            p = Ht(
                                Ht(
                                    Ht({}, H(s, !1)),
                                    {},
                                    { fill: 'none' },
                                    H(c, !1)
                                ),
                                {},
                                { x1: l.x, y1: l.y, x2: h.x, y2: h.y }
                            );
                        return S.createElement(
                            'line',
                            Pn(
                                {
                                    className:
                                        'recharts-polar-radius-axis-line',
                                },
                                p
                            )
                        );
                    },
                },
                {
                    key: 'renderTicks',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.ticks,
                            o = i.tick,
                            u = i.angle,
                            c = i.tickFormatter,
                            s = i.stroke,
                            f = Eg(i, WI),
                            l = this.getTickTextAnchor(),
                            h = H(f, !1),
                            p = H(o, !1),
                            y = a.map(function (v, d) {
                                var g = n.getTickValueCoord(v),
                                    x = Ht(
                                        Ht(
                                            Ht(
                                                Ht(
                                                    {
                                                        textAnchor: l,
                                                        transform: 'rotate('
                                                            .concat(
                                                                90 - u,
                                                                ', '
                                                            )
                                                            .concat(g.x, ', ')
                                                            .concat(g.y, ')'),
                                                    },
                                                    h
                                                ),
                                                {},
                                                { stroke: 'none', fill: s },
                                                p
                                            ),
                                            {},
                                            { index: d },
                                            g
                                        ),
                                        {},
                                        { payload: v }
                                    );
                                return S.createElement(
                                    re,
                                    Pn(
                                        {
                                            className: Q(
                                                'recharts-polar-radius-axis-tick',
                                                ew(o)
                                            ),
                                            key: 'tick-'.concat(v.coordinate),
                                        },
                                        nr(n.props, v, d)
                                    ),
                                    t.renderTickItem(
                                        o,
                                        x,
                                        c ? c(v.value, d) : v.value
                                    )
                                );
                            });
                        return S.createElement(
                            re,
                            { className: 'recharts-polar-radius-axis-ticks' },
                            y
                        );
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var n = this.props,
                            i = n.ticks,
                            a = n.axisLine,
                            o = n.tick;
                        return !i || !i.length
                            ? null
                            : S.createElement(
                                  re,
                                  {
                                      className: Q(
                                          'recharts-polar-radius-axis',
                                          this.props.className
                                      ),
                                  },
                                  a && this.renderAxisLine(),
                                  o && this.renderTicks(),
                                  Te.renderCallByParent(
                                      this.props,
                                      this.getViewBox()
                                  )
                              );
                    },
                },
            ],
            [
                {
                    key: 'renderTickItem',
                    value: function (n, i, a) {
                        var o;
                        return (
                            S.isValidElement(n)
                                ? (o = S.cloneElement(n, i))
                                : Y(n)
                                  ? (o = n(i))
                                  : (o = S.createElement(
                                        ir,
                                        Pn({}, i, {
                                            className:
                                                'recharts-polar-radius-axis-tick-value',
                                        }),
                                        a
                                    )),
                            o
                        );
                    },
                },
            ]
        )
    );
})(q.PureComponent);
io(ao, 'displayName', 'PolarRadiusAxis');
io(ao, 'axisType', 'radiusAxis');
io(ao, 'defaultProps', {
    type: 'number',
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: 'right',
    stroke: '#ccc',
    axisLine: !0,
    tick: !0,
    tickCount: 5,
    allowDataOverflow: !1,
    scale: 'auto',
    allowDuplicatedCategory: !0,
});
function Nr(e) {
    '@babel/helpers - typeof';
    return (
        (Nr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Nr(e)
    );
}
function Xt() {
    return (
        (Xt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Xt.apply(this, arguments)
    );
}
function Mg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Kt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Mg(Object(r), !0).forEach(function (n) {
                  oo(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Mg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function JI(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function $g(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, dw(n.key), n);
    }
}
function QI(e, t, r) {
    return (
        t && $g(e.prototype, t),
        r && $g(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function ek(e, t, r) {
    return (
        (t = da(t)),
        tk(
            e,
            pw()
                ? Reflect.construct(t, r || [], da(e).constructor)
                : t.apply(e, r)
        )
    );
}
function tk(e, t) {
    if (t && (Nr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return rk(e);
}
function rk(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function pw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (pw = function () {
        return !!e;
    })();
}
function da(e) {
    return (
        (da = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        da(e)
    );
}
function nk(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && yf(e, t);
}
function yf(e, t) {
    return (
        (yf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        yf(e, t)
    );
}
function oo(e, t, r) {
    return (
        (t = dw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function dw(e) {
    var t = ik(e, 'string');
    return Nr(t) == 'symbol' ? t : t + '';
}
function ik(e, t) {
    if (Nr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Nr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var ak = Math.PI / 180,
    ok = 1e-5,
    uo = (function (e) {
        function t() {
            return JI(this, t), ek(this, t, arguments);
        }
        return (
            nk(t, e),
            QI(
                t,
                [
                    {
                        key: 'getTickLineCoord',
                        value: function (n) {
                            var i = this.props,
                                a = i.cx,
                                o = i.cy,
                                u = i.radius,
                                c = i.orientation,
                                s = i.tickSize,
                                f = s || 8,
                                l = fe(a, o, u, n.coordinate),
                                h = fe(
                                    a,
                                    o,
                                    u + (c === 'inner' ? -1 : 1) * f,
                                    n.coordinate
                                );
                            return { x1: l.x, y1: l.y, x2: h.x, y2: h.y };
                        },
                    },
                    {
                        key: 'getTickTextAnchor',
                        value: function (n) {
                            var i = this.props.orientation,
                                a = Math.cos(-n.coordinate * ak),
                                o;
                            return (
                                a > ok
                                    ? (o = i === 'outer' ? 'start' : 'end')
                                    : a < -1e-5
                                      ? (o = i === 'outer' ? 'end' : 'start')
                                      : (o = 'middle'),
                                o
                            );
                        },
                    },
                    {
                        key: 'renderAxisLine',
                        value: function () {
                            var n = this.props,
                                i = n.cx,
                                a = n.cy,
                                o = n.radius,
                                u = n.axisLine,
                                c = n.axisLineType,
                                s = Kt(
                                    Kt({}, H(this.props, !1)),
                                    {},
                                    { fill: 'none' },
                                    H(u, !1)
                                );
                            if (c === 'circle')
                                return S.createElement(
                                    no,
                                    Xt(
                                        {
                                            className:
                                                'recharts-polar-angle-axis-line',
                                        },
                                        s,
                                        { cx: i, cy: a, r: o }
                                    )
                                );
                            var f = this.props.ticks,
                                l = f.map(function (h) {
                                    return fe(i, a, o, h.coordinate);
                                });
                            return S.createElement(
                                PI,
                                Xt(
                                    {
                                        className:
                                            'recharts-polar-angle-axis-line',
                                    },
                                    s,
                                    { points: l }
                                )
                            );
                        },
                    },
                    {
                        key: 'renderTicks',
                        value: function () {
                            var n = this,
                                i = this.props,
                                a = i.ticks,
                                o = i.tick,
                                u = i.tickLine,
                                c = i.tickFormatter,
                                s = i.stroke,
                                f = H(this.props, !1),
                                l = H(o, !1),
                                h = Kt(
                                    Kt({}, f),
                                    {},
                                    { fill: 'none' },
                                    H(u, !1)
                                ),
                                p = a.map(function (y, v) {
                                    var d = n.getTickLineCoord(y),
                                        g = n.getTickTextAnchor(y),
                                        x = Kt(
                                            Kt(
                                                Kt({ textAnchor: g }, f),
                                                {},
                                                { stroke: 'none', fill: s },
                                                l
                                            ),
                                            {},
                                            {
                                                index: v,
                                                payload: y,
                                                x: d.x2,
                                                y: d.y2,
                                            }
                                        );
                                    return S.createElement(
                                        re,
                                        Xt(
                                            {
                                                className: Q(
                                                    'recharts-polar-angle-axis-tick',
                                                    ew(o)
                                                ),
                                                key: 'tick-'.concat(
                                                    y.coordinate
                                                ),
                                            },
                                            nr(n.props, y, v)
                                        ),
                                        u &&
                                            S.createElement(
                                                'line',
                                                Xt(
                                                    {
                                                        className:
                                                            'recharts-polar-angle-axis-tick-line',
                                                    },
                                                    h,
                                                    d
                                                )
                                            ),
                                        o &&
                                            t.renderTickItem(
                                                o,
                                                x,
                                                c ? c(y.value, v) : y.value
                                            )
                                    );
                                });
                            return S.createElement(
                                re,
                                {
                                    className:
                                        'recharts-polar-angle-axis-ticks',
                                },
                                p
                            );
                        },
                    },
                    {
                        key: 'render',
                        value: function () {
                            var n = this.props,
                                i = n.ticks,
                                a = n.radius,
                                o = n.axisLine;
                            return a <= 0 || !i || !i.length
                                ? null
                                : S.createElement(
                                      re,
                                      {
                                          className: Q(
                                              'recharts-polar-angle-axis',
                                              this.props.className
                                          ),
                                      },
                                      o && this.renderAxisLine(),
                                      this.renderTicks()
                                  );
                        },
                    },
                ],
                [
                    {
                        key: 'renderTickItem',
                        value: function (n, i, a) {
                            var o;
                            return (
                                S.isValidElement(n)
                                    ? (o = S.cloneElement(n, i))
                                    : Y(n)
                                      ? (o = n(i))
                                      : (o = S.createElement(
                                            ir,
                                            Xt({}, i, {
                                                className:
                                                    'recharts-polar-angle-axis-tick-value',
                                            }),
                                            a
                                        )),
                                o
                            );
                        },
                    },
                ]
            )
        );
    })(q.PureComponent);
oo(uo, 'displayName', 'PolarAngleAxis');
oo(uo, 'axisType', 'angleAxis');
oo(uo, 'defaultProps', {
    type: 'category',
    angleAxisId: 0,
    scale: 'auto',
    cx: 0,
    cy: 0,
    orientation: 'outer',
    axisLine: !0,
    tickLine: !0,
    tickSize: 8,
    tick: !0,
    hide: !1,
    allowDuplicatedCategory: !0,
});
var Gs, Cg;
function uk() {
    if (Cg) return Gs;
    Cg = 1;
    var e = A0(),
        t = e(Object.getPrototypeOf, Object);
    return (Gs = t), Gs;
}
var Vs, Ig;
function ck() {
    if (Ig) return Vs;
    Ig = 1;
    var e = Tt(),
        t = uk(),
        r = Et(),
        n = '[object Object]',
        i = Function.prototype,
        a = Object.prototype,
        o = i.toString,
        u = a.hasOwnProperty,
        c = o.call(Object);
    function s(f) {
        if (!r(f) || e(f) != n) return !1;
        var l = t(f);
        if (l === null) return !0;
        var h = u.call(l, 'constructor') && l.constructor;
        return typeof h == 'function' && h instanceof h && o.call(h) == c;
    }
    return (Vs = s), Vs;
}
var sk = ck();
const lk = ce(sk);
var Xs, kg;
function fk() {
    if (kg) return Xs;
    kg = 1;
    var e = Tt(),
        t = Et(),
        r = '[object Boolean]';
    function n(i) {
        return i === !0 || i === !1 || (t(i) && e(i) == r);
    }
    return (Xs = n), Xs;
}
var hk = fk();
const pk = ce(hk);
function ei(e) {
    '@babel/helpers - typeof';
    return (
        (ei =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ei(e)
    );
}
function va() {
    return (
        (va = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        va.apply(this, arguments)
    );
}
function dk(e, t) {
    return gk(e) || mk(e, t) || yk(e, t) || vk();
}
function vk() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yk(e, t) {
    if (e) {
        if (typeof e == 'string') return Rg(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Rg(e, t);
    }
}
function Rg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function mk(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function gk(e) {
    if (Array.isArray(e)) return e;
}
function Dg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ng(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Dg(Object(r), !0).forEach(function (n) {
                  bk(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Dg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function bk(e, t, r) {
    return (
        (t = xk(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function xk(e) {
    var t = wk(e, 'string');
    return ei(t) == 'symbol' ? t : t + '';
}
function wk(e, t) {
    if (ei(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ei(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var qg = function (t, r, n, i, a) {
        var o = n - i,
            u;
        return (
            (u = 'M '.concat(t, ',').concat(r)),
            (u += 'L '.concat(t + n, ',').concat(r)),
            (u += 'L '.concat(t + n - o / 2, ',').concat(r + a)),
            (u += 'L '.concat(t + n - o / 2 - i, ',').concat(r + a)),
            (u += 'L '.concat(t, ',').concat(r, ' Z')),
            u
        );
    },
    Ok = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
    },
    _k = function (t) {
        var r = Ng(Ng({}, Ok), t),
            n = q.useRef(),
            i = q.useState(-1),
            a = dk(i, 2),
            o = a[0],
            u = a[1];
        q.useEffect(function () {
            if (n.current && n.current.getTotalLength)
                try {
                    var w = n.current.getTotalLength();
                    w && u(w);
                } catch {}
        }, []);
        var c = r.x,
            s = r.y,
            f = r.upperWidth,
            l = r.lowerWidth,
            h = r.height,
            p = r.className,
            y = r.animationEasing,
            v = r.animationDuration,
            d = r.animationBegin,
            g = r.isUpdateAnimationActive;
        if (
            c !== +c ||
            s !== +s ||
            f !== +f ||
            l !== +l ||
            h !== +h ||
            (f === 0 && l === 0) ||
            h === 0
        )
            return null;
        var x = Q('recharts-trapezoid', p);
        return g
            ? S.createElement(
                  ht,
                  {
                      canBegin: o > 0,
                      from: {
                          upperWidth: 0,
                          lowerWidth: 0,
                          height: h,
                          x: c,
                          y: s,
                      },
                      to: {
                          upperWidth: f,
                          lowerWidth: l,
                          height: h,
                          x: c,
                          y: s,
                      },
                      duration: v,
                      animationEasing: y,
                      isActive: g,
                  },
                  function (w) {
                      var O = w.upperWidth,
                          m = w.lowerWidth,
                          b = w.height,
                          _ = w.x,
                          A = w.y;
                      return S.createElement(
                          ht,
                          {
                              canBegin: o > 0,
                              from: '0px '.concat(o === -1 ? 1 : o, 'px'),
                              to: ''.concat(o, 'px 0px'),
                              attributeName: 'strokeDasharray',
                              begin: d,
                              duration: v,
                              easing: y,
                          },
                          S.createElement(
                              'path',
                              va({}, H(r, !0), {
                                  className: x,
                                  d: qg(_, A, O, m, b),
                                  ref: n,
                              })
                          )
                      );
                  }
              )
            : S.createElement(
                  'g',
                  null,
                  S.createElement(
                      'path',
                      va({}, H(r, !0), { className: x, d: qg(c, s, f, l, h) })
                  )
              );
    },
    Ak = [
        'option',
        'shapeType',
        'propTransformer',
        'activeClassName',
        'isActive',
    ];
function ti(e) {
    '@babel/helpers - typeof';
    return (
        (ti =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ti(e)
    );
}
function Sk(e, t) {
    if (e == null) return {};
    var r = Pk(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function Pk(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function Lg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function ya(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Lg(Object(r), !0).forEach(function (n) {
                  Tk(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Lg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function Tk(e, t, r) {
    return (
        (t = Ek(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Ek(e) {
    var t = jk(e, 'string');
    return ti(t) == 'symbol' ? t : t + '';
}
function jk(e, t) {
    if (ti(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ti(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function Mk(e, t) {
    return ya(ya({}, t), e);
}
function $k(e, t) {
    return e === 'symbols';
}
function Bg(e) {
    var t = e.shapeType,
        r = e.elementProps;
    switch (t) {
        case 'rectangle':
            return S.createElement(Ih, r);
        case 'trapezoid':
            return S.createElement(_k, r);
        case 'sector':
            return S.createElement(nw, r);
        case 'symbols':
            if ($k(t)) return S.createElement(Jf, r);
            break;
        default:
            return null;
    }
}
function Ck(e) {
    return q.isValidElement(e) ? e.props : e;
}
function vw(e) {
    var t = e.option,
        r = e.shapeType,
        n = e.propTransformer,
        i = n === void 0 ? Mk : n,
        a = e.activeClassName,
        o = a === void 0 ? 'recharts-active-shape' : a,
        u = e.isActive,
        c = Sk(e, Ak),
        s;
    if (q.isValidElement(t)) s = q.cloneElement(t, ya(ya({}, c), Ck(t)));
    else if (Y(t)) s = t(c);
    else if (lk(t) && !pk(t)) {
        var f = i(t, c);
        s = S.createElement(Bg, { shapeType: r, elementProps: f });
    } else {
        var l = c;
        s = S.createElement(Bg, { shapeType: r, elementProps: l });
    }
    return u ? S.createElement(re, { className: o }, s) : s;
}
function co(e, t) {
    return t != null && 'trapezoids' in e.props;
}
function so(e, t) {
    return t != null && 'sectors' in e.props;
}
function ri(e, t) {
    return t != null && 'points' in e.props;
}
function Ik(e, t) {
    var r,
        n,
        i =
            e.x ===
                (t == null || (r = t.labelViewBox) === null || r === void 0
                    ? void 0
                    : r.x) || e.x === t.x,
        a =
            e.y ===
                (t == null || (n = t.labelViewBox) === null || n === void 0
                    ? void 0
                    : n.y) || e.y === t.y;
    return i && a;
}
function kk(e, t) {
    var r = e.endAngle === t.endAngle,
        n = e.startAngle === t.startAngle;
    return r && n;
}
function Rk(e, t) {
    var r = e.x === t.x,
        n = e.y === t.y,
        i = e.z === t.z;
    return r && n && i;
}
function Dk(e, t) {
    var r;
    return co(e, t) ? (r = Ik) : so(e, t) ? (r = kk) : ri(e, t) && (r = Rk), r;
}
function Nk(e, t) {
    var r;
    return (
        co(e, t)
            ? (r = 'trapezoids')
            : so(e, t)
              ? (r = 'sectors')
              : ri(e, t) && (r = 'points'),
        r
    );
}
function qk(e, t) {
    if (co(e, t)) {
        var r;
        return (r = t.tooltipPayload) === null ||
            r === void 0 ||
            (r = r[0]) === null ||
            r === void 0 ||
            (r = r.payload) === null ||
            r === void 0
            ? void 0
            : r.payload;
    }
    if (so(e, t)) {
        var n;
        return (n = t.tooltipPayload) === null ||
            n === void 0 ||
            (n = n[0]) === null ||
            n === void 0 ||
            (n = n.payload) === null ||
            n === void 0
            ? void 0
            : n.payload;
    }
    return ri(e, t) ? t.payload : {};
}
function Lk(e) {
    var t = e.activeTooltipItem,
        r = e.graphicalItem,
        n = e.itemData,
        i = Nk(r, t),
        a = qk(r, t),
        o = n.filter(function (c, s) {
            var f = yi(a, c),
                l = r.props[i].filter(function (y) {
                    var v = Dk(r, t);
                    return v(y, t);
                }),
                h = r.props[i].indexOf(l[l.length - 1]),
                p = s === h;
            return f && p;
        }),
        u = n.indexOf(o[o.length - 1]);
    return u;
}
var Ii;
function qr(e) {
    '@babel/helpers - typeof';
    return (
        (qr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        qr(e)
    );
}
function xr() {
    return (
        (xr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        xr.apply(this, arguments)
    );
}
function Fg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function se(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Fg(Object(r), !0).forEach(function (n) {
                  Ze(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Fg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function Bk(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function zg(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, mw(n.key), n);
    }
}
function Fk(e, t, r) {
    return (
        t && zg(e.prototype, t),
        r && zg(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function zk(e, t, r) {
    return (
        (t = ma(t)),
        Wk(
            e,
            yw()
                ? Reflect.construct(t, r || [], ma(e).constructor)
                : t.apply(e, r)
        )
    );
}
function Wk(e, t) {
    if (t && (qr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return Uk(e);
}
function Uk(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function yw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (yw = function () {
        return !!e;
    })();
}
function ma(e) {
    return (
        (ma = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        ma(e)
    );
}
function Hk(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && mf(e, t);
}
function mf(e, t) {
    return (
        (mf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        mf(e, t)
    );
}
function Ze(e, t, r) {
    return (
        (t = mw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function mw(e) {
    var t = Kk(e, 'string');
    return qr(t) == 'symbol' ? t : t + '';
}
function Kk(e, t) {
    if (qr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (qr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var Mt = (function (e) {
    function t(r) {
        var n;
        return (
            Bk(this, t),
            (n = zk(this, t, [r])),
            Ze(n, 'pieRef', null),
            Ze(n, 'sectorRefs', []),
            Ze(n, 'id', rn('recharts-pie-')),
            Ze(n, 'handleAnimationEnd', function () {
                var i = n.props.onAnimationEnd;
                n.setState({ isAnimationFinished: !0 }), Y(i) && i();
            }),
            Ze(n, 'handleAnimationStart', function () {
                var i = n.props.onAnimationStart;
                n.setState({ isAnimationFinished: !1 }), Y(i) && i();
            }),
            (n.state = {
                isAnimationFinished: !r.isAnimationActive,
                prevIsAnimationActive: r.isAnimationActive,
                prevAnimationId: r.animationId,
                sectorToFocus: 0,
            }),
            n
        );
    }
    return (
        Hk(t, e),
        Fk(
            t,
            [
                {
                    key: 'isActiveIndex',
                    value: function (n) {
                        var i = this.props.activeIndex;
                        return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
                    },
                },
                {
                    key: 'hasActiveIndex',
                    value: function () {
                        var n = this.props.activeIndex;
                        return Array.isArray(n) ? n.length !== 0 : n || n === 0;
                    },
                },
                {
                    key: 'renderLabels',
                    value: function (n) {
                        var i = this.props.isAnimationActive;
                        if (i && !this.state.isAnimationFinished) return null;
                        var a = this.props,
                            o = a.label,
                            u = a.labelLine,
                            c = a.dataKey,
                            s = a.valueKey,
                            f = H(this.props, !1),
                            l = H(o, !1),
                            h = H(u, !1),
                            p = (o && o.offsetRadius) || 20,
                            y = n.map(function (v, d) {
                                var g = (v.startAngle + v.endAngle) / 2,
                                    x = fe(v.cx, v.cy, v.outerRadius + p, g),
                                    w = se(
                                        se(
                                            se(se({}, f), v),
                                            {},
                                            { stroke: 'none' },
                                            l
                                        ),
                                        {},
                                        {
                                            index: d,
                                            textAnchor: t.getTextAnchor(
                                                x.x,
                                                v.cx
                                            ),
                                        },
                                        x
                                    ),
                                    O = se(
                                        se(
                                            se(se({}, f), v),
                                            {},
                                            { fill: 'none', stroke: v.fill },
                                            h
                                        ),
                                        {},
                                        {
                                            index: d,
                                            points: [
                                                fe(
                                                    v.cx,
                                                    v.cy,
                                                    v.outerRadius,
                                                    g
                                                ),
                                                x,
                                            ],
                                        }
                                    ),
                                    m = c;
                                return (
                                    Z(c) && Z(s)
                                        ? (m = 'value')
                                        : Z(c) && (m = s),
                                    S.createElement(
                                        re,
                                        {
                                            key: 'label-'
                                                .concat(v.startAngle, '-')
                                                .concat(v.endAngle, '-')
                                                .concat(v.midAngle, '-')
                                                .concat(d),
                                        },
                                        u &&
                                            t.renderLabelLineItem(u, O, 'line'),
                                        t.renderLabelItem(o, w, _e(v, m))
                                    )
                                );
                            });
                        return S.createElement(
                            re,
                            { className: 'recharts-pie-labels' },
                            y
                        );
                    },
                },
                {
                    key: 'renderSectorsStatically',
                    value: function (n) {
                        var i = this,
                            a = this.props,
                            o = a.activeShape,
                            u = a.blendStroke,
                            c = a.inactiveShape;
                        return n.map(function (s, f) {
                            if (
                                (s == null ? void 0 : s.startAngle) === 0 &&
                                (s == null ? void 0 : s.endAngle) === 0 &&
                                n.length !== 1
                            )
                                return null;
                            var l = i.isActiveIndex(f),
                                h = c && i.hasActiveIndex() ? c : null,
                                p = l ? o : h,
                                y = se(
                                    se({}, s),
                                    {},
                                    {
                                        stroke: u ? s.fill : s.stroke,
                                        tabIndex: -1,
                                    }
                                );
                            return S.createElement(
                                re,
                                xr(
                                    {
                                        ref: function (d) {
                                            d &&
                                                !i.sectorRefs.includes(d) &&
                                                i.sectorRefs.push(d);
                                        },
                                        tabIndex: -1,
                                        className: 'recharts-pie-sector',
                                    },
                                    nr(i.props, s, f),
                                    {
                                        key: 'sector-'
                                            .concat(
                                                s == null
                                                    ? void 0
                                                    : s.startAngle,
                                                '-'
                                            )
                                            .concat(
                                                s == null ? void 0 : s.endAngle,
                                                '-'
                                            )
                                            .concat(s.midAngle, '-')
                                            .concat(f),
                                    }
                                ),
                                S.createElement(
                                    vw,
                                    xr(
                                        {
                                            option: p,
                                            isActive: l,
                                            shapeType: 'sector',
                                        },
                                        y
                                    )
                                )
                            );
                        });
                    },
                },
                {
                    key: 'renderSectorsWithAnimation',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.sectors,
                            o = i.isAnimationActive,
                            u = i.animationBegin,
                            c = i.animationDuration,
                            s = i.animationEasing,
                            f = i.animationId,
                            l = this.state,
                            h = l.prevSectors,
                            p = l.prevIsAnimationActive;
                        return S.createElement(
                            ht,
                            {
                                begin: u,
                                duration: c,
                                isActive: o,
                                easing: s,
                                from: { t: 0 },
                                to: { t: 1 },
                                key: 'pie-'.concat(f, '-').concat(p),
                                onAnimationStart: this.handleAnimationStart,
                                onAnimationEnd: this.handleAnimationEnd,
                            },
                            function (y) {
                                var v = y.t,
                                    d = [],
                                    g = a && a[0],
                                    x = g.startAngle;
                                return (
                                    a.forEach(function (w, O) {
                                        var m = h && h[O],
                                            b =
                                                O > 0
                                                    ? Ke(w, 'paddingAngle', 0)
                                                    : 0;
                                        if (m) {
                                            var _ = Ue(
                                                    m.endAngle - m.startAngle,
                                                    w.endAngle - w.startAngle
                                                ),
                                                A = se(
                                                    se({}, w),
                                                    {},
                                                    {
                                                        startAngle: x + b,
                                                        endAngle: x + _(v) + b,
                                                    }
                                                );
                                            d.push(A), (x = A.endAngle);
                                        } else {
                                            var T = w.endAngle,
                                                M = w.startAngle,
                                                P = Ue(0, T - M),
                                                E = P(v),
                                                j = se(
                                                    se({}, w),
                                                    {},
                                                    {
                                                        startAngle: x + b,
                                                        endAngle: x + E + b,
                                                    }
                                                );
                                            d.push(j), (x = j.endAngle);
                                        }
                                    }),
                                    S.createElement(
                                        re,
                                        null,
                                        n.renderSectorsStatically(d)
                                    )
                                );
                            }
                        );
                    },
                },
                {
                    key: 'attachKeyboardHandlers',
                    value: function (n) {
                        var i = this;
                        n.onkeydown = function (a) {
                            if (!a.altKey)
                                switch (a.key) {
                                    case 'ArrowLeft': {
                                        var o =
                                            ++i.state.sectorToFocus %
                                            i.sectorRefs.length;
                                        i.sectorRefs[o].focus(),
                                            i.setState({ sectorToFocus: o });
                                        break;
                                    }
                                    case 'ArrowRight': {
                                        var u =
                                            --i.state.sectorToFocus < 0
                                                ? i.sectorRefs.length - 1
                                                : i.state.sectorToFocus %
                                                  i.sectorRefs.length;
                                        i.sectorRefs[u].focus(),
                                            i.setState({ sectorToFocus: u });
                                        break;
                                    }
                                    case 'Escape': {
                                        i.sectorRefs[
                                            i.state.sectorToFocus
                                        ].blur(),
                                            i.setState({ sectorToFocus: 0 });
                                        break;
                                    }
                                }
                        };
                    },
                },
                {
                    key: 'renderSectors',
                    value: function () {
                        var n = this.props,
                            i = n.sectors,
                            a = n.isAnimationActive,
                            o = this.state.prevSectors;
                        return a && i && i.length && (!o || !yi(o, i))
                            ? this.renderSectorsWithAnimation()
                            : this.renderSectorsStatically(i);
                    },
                },
                {
                    key: 'componentDidMount',
                    value: function () {
                        this.pieRef && this.attachKeyboardHandlers(this.pieRef);
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.hide,
                            o = i.sectors,
                            u = i.className,
                            c = i.label,
                            s = i.cx,
                            f = i.cy,
                            l = i.innerRadius,
                            h = i.outerRadius,
                            p = i.isAnimationActive,
                            y = this.state.isAnimationFinished;
                        if (
                            a ||
                            !o ||
                            !o.length ||
                            !N(s) ||
                            !N(f) ||
                            !N(l) ||
                            !N(h)
                        )
                            return null;
                        var v = Q('recharts-pie', u);
                        return S.createElement(
                            re,
                            {
                                tabIndex: this.props.rootTabIndex,
                                className: v,
                                ref: function (g) {
                                    n.pieRef = g;
                                },
                            },
                            this.renderSectors(),
                            c && this.renderLabels(o),
                            Te.renderCallByParent(this.props, null, !1),
                            (!p || y) &&
                                _t.renderCallByParent(this.props, o, !1)
                        );
                    },
                },
            ],
            [
                {
                    key: 'getDerivedStateFromProps',
                    value: function (n, i) {
                        return i.prevIsAnimationActive !== n.isAnimationActive
                            ? {
                                  prevIsAnimationActive: n.isAnimationActive,
                                  prevAnimationId: n.animationId,
                                  curSectors: n.sectors,
                                  prevSectors: [],
                                  isAnimationFinished: !0,
                              }
                            : n.isAnimationActive &&
                                n.animationId !== i.prevAnimationId
                              ? {
                                    prevAnimationId: n.animationId,
                                    curSectors: n.sectors,
                                    prevSectors: i.curSectors,
                                    isAnimationFinished: !0,
                                }
                              : n.sectors !== i.curSectors
                                ? {
                                      curSectors: n.sectors,
                                      isAnimationFinished: !0,
                                  }
                                : null;
                    },
                },
                {
                    key: 'getTextAnchor',
                    value: function (n, i) {
                        return n > i ? 'start' : n < i ? 'end' : 'middle';
                    },
                },
                {
                    key: 'renderLabelLineItem',
                    value: function (n, i, a) {
                        if (S.isValidElement(n)) return S.cloneElement(n, i);
                        if (Y(n)) return n(i);
                        var o = Q(
                            'recharts-pie-label-line',
                            typeof n != 'boolean' ? n.className : ''
                        );
                        return S.createElement(
                            ca,
                            xr({}, i, { key: a, type: 'linear', className: o })
                        );
                    },
                },
                {
                    key: 'renderLabelItem',
                    value: function (n, i, a) {
                        if (S.isValidElement(n)) return S.cloneElement(n, i);
                        var o = a;
                        if (Y(n) && ((o = n(i)), S.isValidElement(o))) return o;
                        var u = Q(
                            'recharts-pie-label-text',
                            typeof n != 'boolean' && !Y(n) ? n.className : ''
                        );
                        return S.createElement(
                            ir,
                            xr({}, i, {
                                alignmentBaseline: 'middle',
                                className: u,
                            }),
                            o
                        );
                    },
                },
            ]
        )
    );
})(q.PureComponent);
Ii = Mt;
Ze(Mt, 'displayName', 'Pie');
Ze(Mt, 'defaultProps', {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    cx: '50%',
    cy: '50%',
    startAngle: 0,
    endAngle: 360,
    innerRadius: 0,
    outerRadius: '80%',
    paddingAngle: 0,
    labelLine: !0,
    hide: !1,
    minAngle: 0,
    isAnimationActive: !sr.isSsr,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
    nameKey: 'name',
    blendStroke: !1,
    rootTabIndex: 0,
});
Ze(Mt, 'parseDeltaAngle', function (e, t) {
    var r = Ie(t - e),
        n = Math.min(Math.abs(t - e), 360);
    return r * n;
});
Ze(Mt, 'getRealPieData', function (e) {
    var t = e.data,
        r = e.children,
        n = H(e, !1),
        i = Ge(r, Ha);
    return t && t.length
        ? t.map(function (a, o) {
              return se(se(se({ payload: a }, n), a), i && i[o] && i[o].props);
          })
        : i && i.length
          ? i.map(function (a) {
                return se(se({}, n), a.props);
            })
          : [];
});
Ze(Mt, 'parseCoordinateOfPie', function (e, t) {
    var r = t.top,
        n = t.left,
        i = t.width,
        a = t.height,
        o = Qx(i, a),
        u = n + ke(e.cx, i, i / 2),
        c = r + ke(e.cy, a, a / 2),
        s = ke(e.innerRadius, o, 0),
        f = ke(e.outerRadius, o, o * 0.8),
        l = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
    return { cx: u, cy: c, innerRadius: s, outerRadius: f, maxRadius: l };
});
Ze(Mt, 'getComposedData', function (e) {
    var t = e.item,
        r = e.offset,
        n =
            t.type.defaultProps !== void 0
                ? se(se({}, t.type.defaultProps), t.props)
                : t.props,
        i = Ii.getRealPieData(n);
    if (!i || !i.length) return null;
    var a = n.cornerRadius,
        o = n.startAngle,
        u = n.endAngle,
        c = n.paddingAngle,
        s = n.dataKey,
        f = n.nameKey,
        l = n.valueKey,
        h = n.tooltipType,
        p = Math.abs(n.minAngle),
        y = Ii.parseCoordinateOfPie(n, r),
        v = Ii.parseDeltaAngle(o, u),
        d = Math.abs(v),
        g = s;
    Z(s) && Z(l)
        ? (ot(
              !1,
              `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`
          ),
          (g = 'value'))
        : Z(s) &&
          (ot(
              !1,
              `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`
          ),
          (g = l));
    var x = i.filter(function (A) {
            return _e(A, g, 0) !== 0;
        }).length,
        w = (d >= 360 ? x : x - 1) * c,
        O = d - x * p - w,
        m = i.reduce(function (A, T) {
            var M = _e(T, g, 0);
            return A + (N(M) ? M : 0);
        }, 0),
        b;
    if (m > 0) {
        var _;
        b = i.map(function (A, T) {
            var M = _e(A, g, 0),
                P = _e(A, f, T),
                E = (N(M) ? M : 0) / m,
                j;
            T ? (j = _.endAngle + Ie(v) * c * (M !== 0 ? 1 : 0)) : (j = o);
            var C = j + Ie(v) * ((M !== 0 ? p : 0) + E * O),
                $ = (j + C) / 2,
                k = (y.innerRadius + y.outerRadius) / 2,
                R = [{ name: P, value: M, payload: A, dataKey: g, type: h }],
                L = fe(y.cx, y.cy, k, $);
            return (
                (_ = se(
                    se(
                        se(
                            {
                                percent: E,
                                cornerRadius: a,
                                name: P,
                                tooltipPayload: R,
                                midAngle: $,
                                middleRadius: k,
                                tooltipPosition: L,
                            },
                            A
                        ),
                        y
                    ),
                    {},
                    {
                        value: _e(A, g),
                        startAngle: j,
                        endAngle: C,
                        payload: A,
                        paddingAngle: Ie(v) * c,
                    }
                )),
                _
            );
        });
    }
    return se(se({}, y), {}, { sectors: b, data: i });
});
var Ys, Wg;
function Gk() {
    if (Wg) return Ys;
    Wg = 1;
    var e = Math.ceil,
        t = Math.max;
    function r(n, i, a, o) {
        for (var u = -1, c = t(e((i - n) / (a || 1)), 0), s = Array(c); c--; )
            (s[o ? c : ++u] = n), (n += a);
        return s;
    }
    return (Ys = r), Ys;
}
var Zs, Ug;
function gw() {
    if (Ug) return Zs;
    Ug = 1;
    var e = B0(),
        t = 1 / 0,
        r = 17976931348623157e292;
    function n(i) {
        if (!i) return i === 0 ? i : 0;
        if (((i = e(i)), i === t || i === -1 / 0)) {
            var a = i < 0 ? -1 : 1;
            return a * r;
        }
        return i === i ? i : 0;
    }
    return (Zs = n), Zs;
}
var Js, Hg;
function Vk() {
    if (Hg) return Js;
    Hg = 1;
    var e = Gk(),
        t = Ua(),
        r = gw();
    function n(i) {
        return function (a, o, u) {
            return (
                u && typeof u != 'number' && t(a, o, u) && (o = u = void 0),
                (a = r(a)),
                o === void 0 ? ((o = a), (a = 0)) : (o = r(o)),
                (u = u === void 0 ? (a < o ? 1 : -1) : r(u)),
                e(a, o, u, i)
            );
        };
    }
    return (Js = n), Js;
}
var Qs, Kg;
function Xk() {
    if (Kg) return Qs;
    Kg = 1;
    var e = Vk(),
        t = e();
    return (Qs = t), Qs;
}
var Yk = Xk();
const ga = ce(Yk);
function ni(e) {
    '@babel/helpers - typeof';
    return (
        (ni =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ni(e)
    );
}
function Gg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Vg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Gg(Object(r), !0).forEach(function (n) {
                  bw(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Gg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function bw(e, t, r) {
    return (
        (t = Zk(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Zk(e) {
    var t = Jk(e, 'string');
    return ni(t) == 'symbol' ? t : t + '';
}
function Jk(e, t) {
    if (ni(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ni(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var Qk = ['Webkit', 'Moz', 'O', 'ms'],
    eR = function (t, r) {
        var n = t.replace(/(\w)/, function (a) {
                return a.toUpperCase();
            }),
            i = Qk.reduce(function (a, o) {
                return Vg(Vg({}, a), {}, bw({}, o + n, r));
            }, {});
        return (i[t] = r), i;
    };
function Lr(e) {
    '@babel/helpers - typeof';
    return (
        (Lr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Lr(e)
    );
}
function ba() {
    return (
        (ba = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        ba.apply(this, arguments)
    );
}
function Xg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Xg(Object(r), !0).forEach(function (n) {
                  ze(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Xg(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function tR(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function Yg(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, ww(n.key), n);
    }
}
function rR(e, t, r) {
    return (
        t && Yg(e.prototype, t),
        r && Yg(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function nR(e, t, r) {
    return (
        (t = xa(t)),
        iR(
            e,
            xw()
                ? Reflect.construct(t, r || [], xa(e).constructor)
                : t.apply(e, r)
        )
    );
}
function iR(e, t) {
    if (t && (Lr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return aR(e);
}
function aR(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function xw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (xw = function () {
        return !!e;
    })();
}
function xa(e) {
    return (
        (xa = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        xa(e)
    );
}
function oR(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && gf(e, t);
}
function gf(e, t) {
    return (
        (gf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        gf(e, t)
    );
}
function ze(e, t, r) {
    return (
        (t = ww(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function ww(e) {
    var t = uR(e, 'string');
    return Lr(t) == 'symbol' ? t : t + '';
}
function uR(e, t) {
    if (Lr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Lr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var cR = function (t) {
        var r = t.data,
            n = t.startIndex,
            i = t.endIndex,
            a = t.x,
            o = t.width,
            u = t.travellerWidth;
        if (!r || !r.length) return {};
        var c = r.length,
            s = On()
                .domain(ga(0, c))
                .range([a, a + o - u]),
            f = s.domain().map(function (l) {
                return s(l);
            });
        return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            isTravellerFocused: !1,
            startX: s(n),
            endX: s(i),
            scale: s,
            scaleValues: f,
        };
    },
    Zg = function (t) {
        return t.changedTouches && !!t.changedTouches.length;
    },
    Br = (function (e) {
        function t(r) {
            var n;
            return (
                tR(this, t),
                (n = nR(this, t, [r])),
                ze(n, 'handleDrag', function (i) {
                    n.leaveTimer &&
                        (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
                        n.state.isTravellerMoving
                            ? n.handleTravellerMove(i)
                            : n.state.isSlideMoving && n.handleSlideDrag(i);
                }),
                ze(n, 'handleTouchMove', function (i) {
                    i.changedTouches != null &&
                        i.changedTouches.length > 0 &&
                        n.handleDrag(i.changedTouches[0]);
                }),
                ze(n, 'handleDragEnd', function () {
                    n.setState(
                        { isTravellerMoving: !1, isSlideMoving: !1 },
                        function () {
                            var i = n.props,
                                a = i.endIndex,
                                o = i.onDragEnd,
                                u = i.startIndex;
                            o == null || o({ endIndex: a, startIndex: u });
                        }
                    ),
                        n.detachDragEndListener();
                }),
                ze(n, 'handleLeaveWrapper', function () {
                    (n.state.isTravellerMoving || n.state.isSlideMoving) &&
                        (n.leaveTimer = window.setTimeout(
                            n.handleDragEnd,
                            n.props.leaveTimeOut
                        ));
                }),
                ze(n, 'handleEnterSlideOrTraveller', function () {
                    n.setState({ isTextActive: !0 });
                }),
                ze(n, 'handleLeaveSlideOrTraveller', function () {
                    n.setState({ isTextActive: !1 });
                }),
                ze(n, 'handleSlideDragStart', function (i) {
                    var a = Zg(i) ? i.changedTouches[0] : i;
                    n.setState({
                        isTravellerMoving: !1,
                        isSlideMoving: !0,
                        slideMoveStartX: a.pageX,
                    }),
                        n.attachDragEndListener();
                }),
                (n.travellerDragStartHandlers = {
                    startX: n.handleTravellerDragStart.bind(n, 'startX'),
                    endX: n.handleTravellerDragStart.bind(n, 'endX'),
                }),
                (n.state = {}),
                n
            );
        }
        return (
            oR(t, e),
            rR(
                t,
                [
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            this.leaveTimer &&
                                (clearTimeout(this.leaveTimer),
                                (this.leaveTimer = null)),
                                this.detachDragEndListener();
                        },
                    },
                    {
                        key: 'getIndex',
                        value: function (n) {
                            var i = n.startX,
                                a = n.endX,
                                o = this.state.scaleValues,
                                u = this.props,
                                c = u.gap,
                                s = u.data,
                                f = s.length - 1,
                                l = Math.min(i, a),
                                h = Math.max(i, a),
                                p = t.getIndexInRange(o, l),
                                y = t.getIndexInRange(o, h);
                            return {
                                startIndex: p - (p % c),
                                endIndex: y === f ? f : y - (y % c),
                            };
                        },
                    },
                    {
                        key: 'getTextOfTick',
                        value: function (n) {
                            var i = this.props,
                                a = i.data,
                                o = i.tickFormatter,
                                u = i.dataKey,
                                c = _e(a[n], u, n);
                            return Y(o) ? o(c, n) : c;
                        },
                    },
                    {
                        key: 'attachDragEndListener',
                        value: function () {
                            window.addEventListener(
                                'mouseup',
                                this.handleDragEnd,
                                !0
                            ),
                                window.addEventListener(
                                    'touchend',
                                    this.handleDragEnd,
                                    !0
                                ),
                                window.addEventListener(
                                    'mousemove',
                                    this.handleDrag,
                                    !0
                                );
                        },
                    },
                    {
                        key: 'detachDragEndListener',
                        value: function () {
                            window.removeEventListener(
                                'mouseup',
                                this.handleDragEnd,
                                !0
                            ),
                                window.removeEventListener(
                                    'touchend',
                                    this.handleDragEnd,
                                    !0
                                ),
                                window.removeEventListener(
                                    'mousemove',
                                    this.handleDrag,
                                    !0
                                );
                        },
                    },
                    {
                        key: 'handleSlideDrag',
                        value: function (n) {
                            var i = this.state,
                                a = i.slideMoveStartX,
                                o = i.startX,
                                u = i.endX,
                                c = this.props,
                                s = c.x,
                                f = c.width,
                                l = c.travellerWidth,
                                h = c.startIndex,
                                p = c.endIndex,
                                y = c.onChange,
                                v = n.pageX - a;
                            v > 0
                                ? (v = Math.min(
                                      v,
                                      s + f - l - u,
                                      s + f - l - o
                                  ))
                                : v < 0 && (v = Math.max(v, s - o, s - u));
                            var d = this.getIndex({
                                startX: o + v,
                                endX: u + v,
                            });
                            (d.startIndex !== h || d.endIndex !== p) &&
                                y &&
                                y(d),
                                this.setState({
                                    startX: o + v,
                                    endX: u + v,
                                    slideMoveStartX: n.pageX,
                                });
                        },
                    },
                    {
                        key: 'handleTravellerDragStart',
                        value: function (n, i) {
                            var a = Zg(i) ? i.changedTouches[0] : i;
                            this.setState({
                                isSlideMoving: !1,
                                isTravellerMoving: !0,
                                movingTravellerId: n,
                                brushMoveStartX: a.pageX,
                            }),
                                this.attachDragEndListener();
                        },
                    },
                    {
                        key: 'handleTravellerMove',
                        value: function (n) {
                            var i = this.state,
                                a = i.brushMoveStartX,
                                o = i.movingTravellerId,
                                u = i.endX,
                                c = i.startX,
                                s = this.state[o],
                                f = this.props,
                                l = f.x,
                                h = f.width,
                                p = f.travellerWidth,
                                y = f.onChange,
                                v = f.gap,
                                d = f.data,
                                g = {
                                    startX: this.state.startX,
                                    endX: this.state.endX,
                                },
                                x = n.pageX - a;
                            x > 0
                                ? (x = Math.min(x, l + h - p - s))
                                : x < 0 && (x = Math.max(x, l - s)),
                                (g[o] = s + x);
                            var w = this.getIndex(g),
                                O = w.startIndex,
                                m = w.endIndex,
                                b = function () {
                                    var A = d.length - 1;
                                    return (
                                        (o === 'startX' &&
                                            (u > c
                                                ? O % v === 0
                                                : m % v === 0)) ||
                                        (u < c && m === A) ||
                                        (o === 'endX' &&
                                            (u > c
                                                ? m % v === 0
                                                : O % v === 0)) ||
                                        (u > c && m === A)
                                    );
                                };
                            this.setState(
                                ze(
                                    ze({}, o, s + x),
                                    'brushMoveStartX',
                                    n.pageX
                                ),
                                function () {
                                    y && b() && y(w);
                                }
                            );
                        },
                    },
                    {
                        key: 'handleTravellerMoveKeyboard',
                        value: function (n, i) {
                            var a = this,
                                o = this.state,
                                u = o.scaleValues,
                                c = o.startX,
                                s = o.endX,
                                f = this.state[i],
                                l = u.indexOf(f);
                            if (l !== -1) {
                                var h = l + n;
                                if (!(h === -1 || h >= u.length)) {
                                    var p = u[h];
                                    (i === 'startX' && p >= s) ||
                                        (i === 'endX' && p <= c) ||
                                        this.setState(
                                            ze({}, i, p),
                                            function () {
                                                a.props.onChange(
                                                    a.getIndex({
                                                        startX: a.state.startX,
                                                        endX: a.state.endX,
                                                    })
                                                );
                                            }
                                        );
                                }
                            }
                        },
                    },
                    {
                        key: 'renderBackground',
                        value: function () {
                            var n = this.props,
                                i = n.x,
                                a = n.y,
                                o = n.width,
                                u = n.height,
                                c = n.fill,
                                s = n.stroke;
                            return S.createElement('rect', {
                                stroke: s,
                                fill: c,
                                x: i,
                                y: a,
                                width: o,
                                height: u,
                            });
                        },
                    },
                    {
                        key: 'renderPanorama',
                        value: function () {
                            var n = this.props,
                                i = n.x,
                                a = n.y,
                                o = n.width,
                                u = n.height,
                                c = n.data,
                                s = n.children,
                                f = n.padding,
                                l = q.Children.only(s);
                            return l
                                ? S.cloneElement(l, {
                                      x: i,
                                      y: a,
                                      width: o,
                                      height: u,
                                      margin: f,
                                      compact: !0,
                                      data: c,
                                  })
                                : null;
                        },
                    },
                    {
                        key: 'renderTravellerLayer',
                        value: function (n, i) {
                            var a,
                                o,
                                u = this,
                                c = this.props,
                                s = c.y,
                                f = c.travellerWidth,
                                l = c.height,
                                h = c.traveller,
                                p = c.ariaLabel,
                                y = c.data,
                                v = c.startIndex,
                                d = c.endIndex,
                                g = Math.max(n, this.props.x),
                                x = el(
                                    el({}, H(this.props, !1)),
                                    {},
                                    { x: g, y: s, width: f, height: l }
                                ),
                                w =
                                    p ||
                                    'Min value: '
                                        .concat(
                                            (a = y[v]) === null || a === void 0
                                                ? void 0
                                                : a.name,
                                            ', Max value: '
                                        )
                                        .concat(
                                            (o = y[d]) === null || o === void 0
                                                ? void 0
                                                : o.name
                                        );
                            return S.createElement(
                                re,
                                {
                                    tabIndex: 0,
                                    role: 'slider',
                                    'aria-label': w,
                                    'aria-valuenow': n,
                                    className: 'recharts-brush-traveller',
                                    onMouseEnter:
                                        this.handleEnterSlideOrTraveller,
                                    onMouseLeave:
                                        this.handleLeaveSlideOrTraveller,
                                    onMouseDown:
                                        this.travellerDragStartHandlers[i],
                                    onTouchStart:
                                        this.travellerDragStartHandlers[i],
                                    onKeyDown: function (m) {
                                        ['ArrowLeft', 'ArrowRight'].includes(
                                            m.key
                                        ) &&
                                            (m.preventDefault(),
                                            m.stopPropagation(),
                                            u.handleTravellerMoveKeyboard(
                                                m.key === 'ArrowRight' ? 1 : -1,
                                                i
                                            ));
                                    },
                                    onFocus: function () {
                                        u.setState({ isTravellerFocused: !0 });
                                    },
                                    onBlur: function () {
                                        u.setState({ isTravellerFocused: !1 });
                                    },
                                    style: { cursor: 'col-resize' },
                                },
                                t.renderTraveller(h, x)
                            );
                        },
                    },
                    {
                        key: 'renderSlide',
                        value: function (n, i) {
                            var a = this.props,
                                o = a.y,
                                u = a.height,
                                c = a.stroke,
                                s = a.travellerWidth,
                                f = Math.min(n, i) + s,
                                l = Math.max(Math.abs(i - n) - s, 0);
                            return S.createElement('rect', {
                                className: 'recharts-brush-slide',
                                onMouseEnter: this.handleEnterSlideOrTraveller,
                                onMouseLeave: this.handleLeaveSlideOrTraveller,
                                onMouseDown: this.handleSlideDragStart,
                                onTouchStart: this.handleSlideDragStart,
                                style: { cursor: 'move' },
                                stroke: 'none',
                                fill: c,
                                fillOpacity: 0.2,
                                x: f,
                                y: o,
                                width: l,
                                height: u,
                            });
                        },
                    },
                    {
                        key: 'renderText',
                        value: function () {
                            var n = this.props,
                                i = n.startIndex,
                                a = n.endIndex,
                                o = n.y,
                                u = n.height,
                                c = n.travellerWidth,
                                s = n.stroke,
                                f = this.state,
                                l = f.startX,
                                h = f.endX,
                                p = 5,
                                y = { pointerEvents: 'none', fill: s };
                            return S.createElement(
                                re,
                                { className: 'recharts-brush-texts' },
                                S.createElement(
                                    ir,
                                    ba(
                                        {
                                            textAnchor: 'end',
                                            verticalAnchor: 'middle',
                                            x: Math.min(l, h) - p,
                                            y: o + u / 2,
                                        },
                                        y
                                    ),
                                    this.getTextOfTick(i)
                                ),
                                S.createElement(
                                    ir,
                                    ba(
                                        {
                                            textAnchor: 'start',
                                            verticalAnchor: 'middle',
                                            x: Math.max(l, h) + c + p,
                                            y: o + u / 2,
                                        },
                                        y
                                    ),
                                    this.getTextOfTick(a)
                                )
                            );
                        },
                    },
                    {
                        key: 'render',
                        value: function () {
                            var n = this.props,
                                i = n.data,
                                a = n.className,
                                o = n.children,
                                u = n.x,
                                c = n.y,
                                s = n.width,
                                f = n.height,
                                l = n.alwaysShowText,
                                h = this.state,
                                p = h.startX,
                                y = h.endX,
                                v = h.isTextActive,
                                d = h.isSlideMoving,
                                g = h.isTravellerMoving,
                                x = h.isTravellerFocused;
                            if (
                                !i ||
                                !i.length ||
                                !N(u) ||
                                !N(c) ||
                                !N(s) ||
                                !N(f) ||
                                s <= 0 ||
                                f <= 0
                            )
                                return null;
                            var w = Q('recharts-brush', a),
                                O = S.Children.count(o) === 1,
                                m = eR('userSelect', 'none');
                            return S.createElement(
                                re,
                                {
                                    className: w,
                                    onMouseLeave: this.handleLeaveWrapper,
                                    onTouchMove: this.handleTouchMove,
                                    style: m,
                                },
                                this.renderBackground(),
                                O && this.renderPanorama(),
                                this.renderSlide(p, y),
                                this.renderTravellerLayer(p, 'startX'),
                                this.renderTravellerLayer(y, 'endX'),
                                (v || d || g || x || l) && this.renderText()
                            );
                        },
                    },
                ],
                [
                    {
                        key: 'renderDefaultTraveller',
                        value: function (n) {
                            var i = n.x,
                                a = n.y,
                                o = n.width,
                                u = n.height,
                                c = n.stroke,
                                s = Math.floor(a + u / 2) - 1;
                            return S.createElement(
                                S.Fragment,
                                null,
                                S.createElement('rect', {
                                    x: i,
                                    y: a,
                                    width: o,
                                    height: u,
                                    fill: c,
                                    stroke: 'none',
                                }),
                                S.createElement('line', {
                                    x1: i + 1,
                                    y1: s,
                                    x2: i + o - 1,
                                    y2: s,
                                    fill: 'none',
                                    stroke: '#fff',
                                }),
                                S.createElement('line', {
                                    x1: i + 1,
                                    y1: s + 2,
                                    x2: i + o - 1,
                                    y2: s + 2,
                                    fill: 'none',
                                    stroke: '#fff',
                                })
                            );
                        },
                    },
                    {
                        key: 'renderTraveller',
                        value: function (n, i) {
                            var a;
                            return (
                                S.isValidElement(n)
                                    ? (a = S.cloneElement(n, i))
                                    : Y(n)
                                      ? (a = n(i))
                                      : (a = t.renderDefaultTraveller(i)),
                                a
                            );
                        },
                    },
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (n, i) {
                            var a = n.data,
                                o = n.width,
                                u = n.x,
                                c = n.travellerWidth,
                                s = n.updateId,
                                f = n.startIndex,
                                l = n.endIndex;
                            if (a !== i.prevData || s !== i.prevUpdateId)
                                return el(
                                    {
                                        prevData: a,
                                        prevTravellerWidth: c,
                                        prevUpdateId: s,
                                        prevX: u,
                                        prevWidth: o,
                                    },
                                    a && a.length
                                        ? cR({
                                              data: a,
                                              width: o,
                                              x: u,
                                              travellerWidth: c,
                                              startIndex: f,
                                              endIndex: l,
                                          })
                                        : { scale: null, scaleValues: null }
                                );
                            if (
                                i.scale &&
                                (o !== i.prevWidth ||
                                    u !== i.prevX ||
                                    c !== i.prevTravellerWidth)
                            ) {
                                i.scale.range([u, u + o - c]);
                                var h = i.scale.domain().map(function (p) {
                                    return i.scale(p);
                                });
                                return {
                                    prevData: a,
                                    prevTravellerWidth: c,
                                    prevUpdateId: s,
                                    prevX: u,
                                    prevWidth: o,
                                    startX: i.scale(n.startIndex),
                                    endX: i.scale(n.endIndex),
                                    scaleValues: h,
                                };
                            }
                            return null;
                        },
                    },
                    {
                        key: 'getIndexInRange',
                        value: function (n, i) {
                            for (
                                var a = n.length, o = 0, u = a - 1;
                                u - o > 1;

                            ) {
                                var c = Math.floor((o + u) / 2);
                                n[c] > i ? (u = c) : (o = c);
                            }
                            return i >= n[u] ? u : o;
                        },
                    },
                ]
            )
        );
    })(q.PureComponent);
ze(Br, 'displayName', 'Brush');
ze(Br, 'defaultProps', {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: '#fff',
    stroke: '#666',
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1e3,
    alwaysShowText: !1,
});
var tl, Jg;
function sR() {
    if (Jg) return tl;
    Jg = 1;
    var e = ah();
    function t(r, n) {
        var i;
        return (
            e(r, function (a, o, u) {
                return (i = n(a, o, u)), !i;
            }),
            !!i
        );
    }
    return (tl = t), tl;
}
var rl, Qg;
function lR() {
    if (Qg) return rl;
    Qg = 1;
    var e = m0(),
        t = dt(),
        r = sR(),
        n = Le(),
        i = Ua();
    function a(o, u, c) {
        var s = n(o) ? e : r;
        return c && i(o, u, c) && (u = void 0), s(o, t(u, 3));
    }
    return (rl = a), rl;
}
var fR = lR();
const hR = ce(fR);
var lt = function (t, r) {
        var n = t.alwaysShow,
            i = t.ifOverflow;
        return n && (i = 'extendDomain'), i === r;
    },
    nl,
    eb;
function pR() {
    if (eb) return nl;
    eb = 1;
    var e = R0();
    function t(r, n, i) {
        n == '__proto__' && e
            ? e(r, n, {
                  configurable: !0,
                  enumerable: !0,
                  value: i,
                  writable: !0,
              })
            : (r[n] = i);
    }
    return (nl = t), nl;
}
var il, tb;
function dR() {
    if (tb) return il;
    tb = 1;
    var e = pR(),
        t = I0(),
        r = dt();
    function n(i, a) {
        var o = {};
        return (
            (a = r(a, 3)),
            t(i, function (u, c, s) {
                e(o, c, a(u, c, s));
            }),
            o
        );
    }
    return (il = n), il;
}
var vR = dR();
const yR = ce(vR);
var al, rb;
function mR() {
    if (rb) return al;
    rb = 1;
    function e(t, r) {
        for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
            if (!r(t[n], n, t)) return !1;
        return !0;
    }
    return (al = e), al;
}
var ol, nb;
function gR() {
    if (nb) return ol;
    nb = 1;
    var e = ah();
    function t(r, n) {
        var i = !0;
        return (
            e(r, function (a, o, u) {
                return (i = !!n(a, o, u)), i;
            }),
            i
        );
    }
    return (ol = t), ol;
}
var ul, ib;
function bR() {
    if (ib) return ul;
    ib = 1;
    var e = mR(),
        t = gR(),
        r = dt(),
        n = Le(),
        i = Ua();
    function a(o, u, c) {
        var s = n(o) ? e : t;
        return c && i(o, u, c) && (u = void 0), s(o, r(u, 3));
    }
    return (ul = a), ul;
}
var xR = bR();
const Ow = ce(xR);
var wR = ['x', 'y'];
function ii(e) {
    '@babel/helpers - typeof';
    return (
        (ii =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ii(e)
    );
}
function bf() {
    return (
        (bf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        bf.apply(this, arguments)
    );
}
function ab(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function mn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? ab(Object(r), !0).forEach(function (n) {
                  OR(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ab(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function OR(e, t, r) {
    return (
        (t = _R(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function _R(e) {
    var t = AR(e, 'string');
    return ii(t) == 'symbol' ? t : t + '';
}
function AR(e, t) {
    if (ii(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ii(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function SR(e, t) {
    if (e == null) return {};
    var r = PR(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function PR(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function TR(e, t) {
    var r = e.x,
        n = e.y,
        i = SR(e, wR),
        a = ''.concat(r),
        o = parseInt(a, 10),
        u = ''.concat(n),
        c = parseInt(u, 10),
        s = ''.concat(t.height || i.height),
        f = parseInt(s, 10),
        l = ''.concat(t.width || i.width),
        h = parseInt(l, 10);
    return mn(
        mn(mn(mn(mn({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
        {},
        { height: f, width: h, name: t.name, radius: t.radius }
    );
}
function ob(e) {
    return S.createElement(
        vw,
        bf(
            {
                shapeType: 'rectangle',
                propTransformer: TR,
                activeClassName: 'recharts-active-bar',
            },
            e
        )
    );
}
var ER = function (t) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return function (n, i) {
            if (typeof t == 'number') return t;
            var a = typeof n == 'number';
            return a ? t(n, i) : (a || or(), r);
        };
    },
    jR = ['value', 'background'],
    _w;
function Fr(e) {
    '@babel/helpers - typeof';
    return (
        (Fr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Fr(e)
    );
}
function MR(e, t) {
    if (e == null) return {};
    var r = $R(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function $R(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function wa() {
    return (
        (wa = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        wa.apply(this, arguments)
    );
}
function ub(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function ge(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? ub(Object(r), !0).forEach(function (n) {
                  kt(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ub(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function CR(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function cb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, Sw(n.key), n);
    }
}
function IR(e, t, r) {
    return (
        t && cb(e.prototype, t),
        r && cb(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function kR(e, t, r) {
    return (
        (t = Oa(t)),
        RR(
            e,
            Aw()
                ? Reflect.construct(t, r || [], Oa(e).constructor)
                : t.apply(e, r)
        )
    );
}
function RR(e, t) {
    if (t && (Fr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return DR(e);
}
function DR(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Aw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Aw = function () {
        return !!e;
    })();
}
function Oa(e) {
    return (
        (Oa = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Oa(e)
    );
}
function NR(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && xf(e, t);
}
function xf(e, t) {
    return (
        (xf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        xf(e, t)
    );
}
function kt(e, t, r) {
    return (
        (t = Sw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Sw(e) {
    var t = qR(e, 'string');
    return Fr(t) == 'symbol' ? t : t + '';
}
function qR(e, t) {
    if (Fr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Fr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var Dt = (function (e) {
    function t() {
        var r;
        CR(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
        return (
            (r = kR(this, t, [].concat(i))),
            kt(r, 'state', { isAnimationFinished: !1 }),
            kt(r, 'id', rn('recharts-bar-')),
            kt(r, 'handleAnimationEnd', function () {
                var o = r.props.onAnimationEnd;
                r.setState({ isAnimationFinished: !0 }), o && o();
            }),
            kt(r, 'handleAnimationStart', function () {
                var o = r.props.onAnimationStart;
                r.setState({ isAnimationFinished: !1 }), o && o();
            }),
            r
        );
    }
    return (
        NR(t, e),
        IR(
            t,
            [
                {
                    key: 'renderRectanglesStatically',
                    value: function (n) {
                        var i = this,
                            a = this.props,
                            o = a.shape,
                            u = a.dataKey,
                            c = a.activeIndex,
                            s = a.activeBar,
                            f = H(this.props, !1);
                        return (
                            n &&
                            n.map(function (l, h) {
                                var p = h === c,
                                    y = p ? s : o,
                                    v = ge(
                                        ge(ge({}, f), l),
                                        {},
                                        {
                                            isActive: p,
                                            option: y,
                                            index: h,
                                            dataKey: u,
                                            onAnimationStart:
                                                i.handleAnimationStart,
                                            onAnimationEnd:
                                                i.handleAnimationEnd,
                                        }
                                    );
                                return S.createElement(
                                    re,
                                    wa(
                                        { className: 'recharts-bar-rectangle' },
                                        nr(i.props, l, h),
                                        {
                                            key: 'rectangle-'
                                                .concat(
                                                    l == null ? void 0 : l.x,
                                                    '-'
                                                )
                                                .concat(
                                                    l == null ? void 0 : l.y,
                                                    '-'
                                                )
                                                .concat(
                                                    l == null
                                                        ? void 0
                                                        : l.value,
                                                    '-'
                                                )
                                                .concat(h),
                                        }
                                    ),
                                    S.createElement(ob, v)
                                );
                            })
                        );
                    },
                },
                {
                    key: 'renderRectanglesWithAnimation',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.data,
                            o = i.layout,
                            u = i.isAnimationActive,
                            c = i.animationBegin,
                            s = i.animationDuration,
                            f = i.animationEasing,
                            l = i.animationId,
                            h = this.state.prevData;
                        return S.createElement(
                            ht,
                            {
                                begin: c,
                                duration: s,
                                isActive: u,
                                easing: f,
                                from: { t: 0 },
                                to: { t: 1 },
                                key: 'bar-'.concat(l),
                                onAnimationEnd: this.handleAnimationEnd,
                                onAnimationStart: this.handleAnimationStart,
                            },
                            function (p) {
                                var y = p.t,
                                    v = a.map(function (d, g) {
                                        var x = h && h[g];
                                        if (x) {
                                            var w = Ue(x.x, d.x),
                                                O = Ue(x.y, d.y),
                                                m = Ue(x.width, d.width),
                                                b = Ue(x.height, d.height);
                                            return ge(
                                                ge({}, d),
                                                {},
                                                {
                                                    x: w(y),
                                                    y: O(y),
                                                    width: m(y),
                                                    height: b(y),
                                                }
                                            );
                                        }
                                        if (o === 'horizontal') {
                                            var _ = Ue(0, d.height),
                                                A = _(y);
                                            return ge(
                                                ge({}, d),
                                                {},
                                                {
                                                    y: d.y + d.height - A,
                                                    height: A,
                                                }
                                            );
                                        }
                                        var T = Ue(0, d.width),
                                            M = T(y);
                                        return ge(ge({}, d), {}, { width: M });
                                    });
                                return S.createElement(
                                    re,
                                    null,
                                    n.renderRectanglesStatically(v)
                                );
                            }
                        );
                    },
                },
                {
                    key: 'renderRectangles',
                    value: function () {
                        var n = this.props,
                            i = n.data,
                            a = n.isAnimationActive,
                            o = this.state.prevData;
                        return a && i && i.length && (!o || !yi(o, i))
                            ? this.renderRectanglesWithAnimation()
                            : this.renderRectanglesStatically(i);
                    },
                },
                {
                    key: 'renderBackground',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.data,
                            o = i.dataKey,
                            u = i.activeIndex,
                            c = H(this.props.background, !1);
                        return a.map(function (s, f) {
                            s.value;
                            var l = s.background,
                                h = MR(s, jR);
                            if (!l) return null;
                            var p = ge(
                                ge(
                                    ge(
                                        ge(ge({}, h), {}, { fill: '#eee' }, l),
                                        c
                                    ),
                                    nr(n.props, s, f)
                                ),
                                {},
                                {
                                    onAnimationStart: n.handleAnimationStart,
                                    onAnimationEnd: n.handleAnimationEnd,
                                    dataKey: o,
                                    index: f,
                                    className:
                                        'recharts-bar-background-rectangle',
                                }
                            );
                            return S.createElement(
                                ob,
                                wa(
                                    {
                                        key: 'background-bar-'.concat(f),
                                        option: n.props.background,
                                        isActive: f === u,
                                    },
                                    p
                                )
                            );
                        });
                    },
                },
                {
                    key: 'renderErrorBar',
                    value: function (n, i) {
                        if (
                            this.props.isAnimationActive &&
                            !this.state.isAnimationFinished
                        )
                            return null;
                        var a = this.props,
                            o = a.data,
                            u = a.xAxis,
                            c = a.yAxis,
                            s = a.layout,
                            f = a.children,
                            l = Ge(f, mi);
                        if (!l) return null;
                        var h =
                                s === 'vertical'
                                    ? o[0].height / 2
                                    : o[0].width / 2,
                            p = function (d, g) {
                                var x = Array.isArray(d.value)
                                    ? d.value[1]
                                    : d.value;
                                return {
                                    x: d.x,
                                    y: d.y,
                                    value: x,
                                    errorVal: _e(d, g),
                                };
                            },
                            y = {
                                clipPath: n
                                    ? 'url(#clipPath-'.concat(i, ')')
                                    : null,
                            };
                        return S.createElement(
                            re,
                            y,
                            l.map(function (v) {
                                return S.cloneElement(v, {
                                    key: 'error-bar-'
                                        .concat(i, '-')
                                        .concat(v.props.dataKey),
                                    data: o,
                                    xAxis: u,
                                    yAxis: c,
                                    layout: s,
                                    offset: h,
                                    dataPointFormatter: p,
                                });
                            })
                        );
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var n = this.props,
                            i = n.hide,
                            a = n.data,
                            o = n.className,
                            u = n.xAxis,
                            c = n.yAxis,
                            s = n.left,
                            f = n.top,
                            l = n.width,
                            h = n.height,
                            p = n.isAnimationActive,
                            y = n.background,
                            v = n.id;
                        if (i || !a || !a.length) return null;
                        var d = this.state.isAnimationFinished,
                            g = Q('recharts-bar', o),
                            x = u && u.allowDataOverflow,
                            w = c && c.allowDataOverflow,
                            O = x || w,
                            m = Z(v) ? this.id : v;
                        return S.createElement(
                            re,
                            { className: g },
                            x || w
                                ? S.createElement(
                                      'defs',
                                      null,
                                      S.createElement(
                                          'clipPath',
                                          { id: 'clipPath-'.concat(m) },
                                          S.createElement('rect', {
                                              x: x ? s : s - l / 2,
                                              y: w ? f : f - h / 2,
                                              width: x ? l : l * 2,
                                              height: w ? h : h * 2,
                                          })
                                      )
                                  )
                                : null,
                            S.createElement(
                                re,
                                {
                                    className: 'recharts-bar-rectangles',
                                    clipPath: O
                                        ? 'url(#clipPath-'.concat(m, ')')
                                        : null,
                                },
                                y ? this.renderBackground() : null,
                                this.renderRectangles()
                            ),
                            this.renderErrorBar(O, m),
                            (!p || d) && _t.renderCallByParent(this.props, a)
                        );
                    },
                },
            ],
            [
                {
                    key: 'getDerivedStateFromProps',
                    value: function (n, i) {
                        return n.animationId !== i.prevAnimationId
                            ? {
                                  prevAnimationId: n.animationId,
                                  curData: n.data,
                                  prevData: i.curData,
                              }
                            : n.data !== i.curData
                              ? { curData: n.data }
                              : null;
                    },
                },
            ]
        )
    );
})(q.PureComponent);
_w = Dt;
kt(Dt, 'displayName', 'Bar');
kt(Dt, 'defaultProps', {
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    minPointSize: 0,
    hide: !1,
    data: [],
    layout: 'vertical',
    activeBar: !1,
    isAnimationActive: !sr.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'ease',
});
kt(Dt, 'getComposedData', function (e) {
    var t = e.props,
        r = e.item,
        n = e.barPosition,
        i = e.bandSize,
        a = e.xAxis,
        o = e.yAxis,
        u = e.xAxisTicks,
        c = e.yAxisTicks,
        s = e.stackedData,
        f = e.dataStartIndex,
        l = e.displayedData,
        h = e.offset,
        p = yM(n, r);
    if (!p) return null;
    var y = t.layout,
        v = r.type.defaultProps,
        d = v !== void 0 ? ge(ge({}, v), r.props) : r.props,
        g = d.dataKey,
        x = d.children,
        w = d.minPointSize,
        O = y === 'horizontal' ? o : a,
        m = s ? O.scale.domain() : null,
        b = _M({ numericAxis: O }),
        _ = Ge(x, Ha),
        A = l.map(function (T, M) {
            var P, E, j, C, $, k;
            s
                ? (P = mM(s[f + M], m))
                : ((P = _e(T, g)), Array.isArray(P) || (P = [b, P]));
            var R = ER(w, _w.defaultProps.minPointSize)(P[1], M);
            if (y === 'horizontal') {
                var L,
                    B = [o.scale(P[0]), o.scale(P[1])],
                    U = B[0],
                    G = B[1];
                (E = Nm({
                    axis: a,
                    ticks: u,
                    bandSize: i,
                    offset: p.offset,
                    entry: T,
                    index: M,
                })),
                    (j = (L = G ?? U) !== null && L !== void 0 ? L : void 0),
                    (C = p.size);
                var z = U - G;
                if (
                    (($ = Number.isNaN(z) ? 0 : z),
                    (k = { x: E, y: o.y, width: C, height: o.height }),
                    Math.abs(R) > 0 && Math.abs($) < Math.abs(R))
                ) {
                    var V = Ie($ || R) * (Math.abs(R) - Math.abs($));
                    (j -= V), ($ += V);
                }
            } else {
                var he = [a.scale(P[0]), a.scale(P[1])],
                    me = he[0],
                    Be = he[1];
                if (
                    ((E = me),
                    (j = Nm({
                        axis: o,
                        ticks: c,
                        bandSize: i,
                        offset: p.offset,
                        entry: T,
                        index: M,
                    })),
                    (C = Be - me),
                    ($ = p.size),
                    (k = { x: a.x, y: j, width: a.width, height: $ }),
                    Math.abs(R) > 0 && Math.abs(C) < Math.abs(R))
                ) {
                    var Ft = Ie(C || R) * (Math.abs(R) - Math.abs(C));
                    C += Ft;
                }
            }
            return ge(
                ge(
                    ge({}, T),
                    {},
                    {
                        x: E,
                        y: j,
                        width: C,
                        height: $,
                        value: s ? P : P[1],
                        payload: T,
                        background: k,
                    },
                    _ && _[M] && _[M].props
                ),
                {},
                {
                    tooltipPayload: [Zx(r, T)],
                    tooltipPosition: { x: E + C / 2, y: j + $ / 2 },
                }
            );
        });
    return ge({ data: A, layout: y }, h);
});
function ai(e) {
    '@babel/helpers - typeof';
    return (
        (ai =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ai(e)
    );
}
function LR(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function sb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, Pw(n.key), n);
    }
}
function BR(e, t, r) {
    return (
        t && sb(e.prototype, t),
        r && sb(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function lb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function nt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? lb(Object(r), !0).forEach(function (n) {
                  lo(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : lb(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function lo(e, t, r) {
    return (
        (t = Pw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Pw(e) {
    var t = FR(e, 'string');
    return ai(t) == 'symbol' ? t : t + '';
}
function FR(e, t) {
    if (ai(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ai(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var Tw = function (t, r, n, i, a) {
        var o = t.width,
            u = t.height,
            c = t.layout,
            s = t.children,
            f = Object.keys(r),
            l = {
                left: n.left,
                leftMirror: n.left,
                right: o - n.right,
                rightMirror: o - n.right,
                top: n.top,
                topMirror: n.top,
                bottom: u - n.bottom,
                bottomMirror: u - n.bottom,
            },
            h = !!We(s, Dt);
        return f.reduce(function (p, y) {
            var v = r[y],
                d = v.orientation,
                g = v.domain,
                x = v.padding,
                w = x === void 0 ? {} : x,
                O = v.mirror,
                m = v.reversed,
                b = ''.concat(d).concat(O ? 'Mirror' : ''),
                _,
                A,
                T,
                M,
                P;
            if (
                v.type === 'number' &&
                (v.padding === 'gap' || v.padding === 'no-gap')
            ) {
                var E = g[1] - g[0],
                    j = 1 / 0,
                    C = v.categoricalDomain.sort(i_);
                if (
                    (C.forEach(function (he, me) {
                        me > 0 &&
                            (j = Math.min((he || 0) - (C[me - 1] || 0), j));
                    }),
                    Number.isFinite(j))
                ) {
                    var $ = j / E,
                        k = v.layout === 'vertical' ? n.height : n.width;
                    if (
                        (v.padding === 'gap' && (_ = ($ * k) / 2),
                        v.padding === 'no-gap')
                    ) {
                        var R = ke(t.barCategoryGap, $ * k),
                            L = ($ * k) / 2;
                        _ = L - R - ((L - R) / k) * R;
                    }
                }
            }
            i === 'xAxis'
                ? (A = [
                      n.left + (w.left || 0) + (_ || 0),
                      n.left + n.width - (w.right || 0) - (_ || 0),
                  ])
                : i === 'yAxis'
                  ? (A =
                        c === 'horizontal'
                            ? [
                                  n.top + n.height - (w.bottom || 0),
                                  n.top + (w.top || 0),
                              ]
                            : [
                                  n.top + (w.top || 0) + (_ || 0),
                                  n.top + n.height - (w.bottom || 0) - (_ || 0),
                              ])
                  : (A = v.range),
                m && (A = [A[1], A[0]]);
            var B = Gx(v, a, h),
                U = B.scale,
                G = B.realScaleType;
            U.domain(g).range(A), Vx(U);
            var z = Xx(U, nt(nt({}, v), {}, { realScaleType: G }));
            i === 'xAxis'
                ? ((P = (d === 'top' && !O) || (d === 'bottom' && O)),
                  (T = n.left),
                  (M = l[b] - P * v.height))
                : i === 'yAxis' &&
                  ((P = (d === 'left' && !O) || (d === 'right' && O)),
                  (T = l[b] - P * v.width),
                  (M = n.top));
            var V = nt(
                nt(nt({}, v), z),
                {},
                {
                    realScaleType: G,
                    x: T,
                    y: M,
                    scale: U,
                    width: i === 'xAxis' ? n.width : v.width,
                    height: i === 'yAxis' ? n.height : v.height,
                }
            );
            return (
                (V.bandSize = aa(V, z)),
                !v.hide && i === 'xAxis'
                    ? (l[b] += (P ? -1 : 1) * V.height)
                    : v.hide || (l[b] += (P ? -1 : 1) * V.width),
                nt(nt({}, p), {}, lo({}, y, V))
            );
        }, {});
    },
    Ew = function (t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return {
            x: Math.min(n, a),
            y: Math.min(i, o),
            width: Math.abs(a - n),
            height: Math.abs(o - i),
        };
    },
    zR = function (t) {
        var r = t.x1,
            n = t.y1,
            i = t.x2,
            a = t.y2;
        return Ew({ x: r, y: n }, { x: i, y: a });
    },
    jw = (function () {
        function e(t) {
            LR(this, e), (this.scale = t);
        }
        return BR(
            e,
            [
                {
                    key: 'domain',
                    get: function () {
                        return this.scale.domain;
                    },
                },
                {
                    key: 'range',
                    get: function () {
                        return this.scale.range;
                    },
                },
                {
                    key: 'rangeMin',
                    get: function () {
                        return this.range()[0];
                    },
                },
                {
                    key: 'rangeMax',
                    get: function () {
                        return this.range()[1];
                    },
                },
                {
                    key: 'bandwidth',
                    get: function () {
                        return this.scale.bandwidth;
                    },
                },
                {
                    key: 'apply',
                    value: function (r) {
                        var n =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : {},
                            i = n.bandAware,
                            a = n.position;
                        if (r !== void 0) {
                            if (a)
                                switch (a) {
                                    case 'start':
                                        return this.scale(r);
                                    case 'middle': {
                                        var o = this.bandwidth
                                            ? this.bandwidth() / 2
                                            : 0;
                                        return this.scale(r) + o;
                                    }
                                    case 'end': {
                                        var u = this.bandwidth
                                            ? this.bandwidth()
                                            : 0;
                                        return this.scale(r) + u;
                                    }
                                    default:
                                        return this.scale(r);
                                }
                            if (i) {
                                var c = this.bandwidth
                                    ? this.bandwidth() / 2
                                    : 0;
                                return this.scale(r) + c;
                            }
                            return this.scale(r);
                        }
                    },
                },
                {
                    key: 'isInRange',
                    value: function (r) {
                        var n = this.range(),
                            i = n[0],
                            a = n[n.length - 1];
                        return i <= a ? r >= i && r <= a : r >= a && r <= i;
                    },
                },
            ],
            [
                {
                    key: 'create',
                    value: function (r) {
                        return new e(r);
                    },
                },
            ]
        );
    })();
lo(jw, 'EPS', 1e-4);
var kh = function (t) {
    var r = Object.keys(t).reduce(function (n, i) {
        return nt(nt({}, n), {}, lo({}, i, jw.create(t[i])));
    }, {});
    return nt(
        nt({}, r),
        {},
        {
            apply: function (i) {
                var a =
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {},
                    o = a.bandAware,
                    u = a.position;
                return yR(i, function (c, s) {
                    return r[s].apply(c, { bandAware: o, position: u });
                });
            },
            isInRange: function (i) {
                return Ow(i, function (a, o) {
                    return r[o].isInRange(a);
                });
            },
        }
    );
};
function WR(e) {
    return ((e % 180) + 180) % 180;
}
var UR = function (t) {
        var r = t.width,
            n = t.height,
            i =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : 0,
            a = WR(i),
            o = (a * Math.PI) / 180,
            u = Math.atan(n / r),
            c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
        return Math.abs(c);
    },
    cl,
    fb;
function HR() {
    if (fb) return cl;
    fb = 1;
    var e = dt(),
        t = fi(),
        r = za();
    function n(i) {
        return function (a, o, u) {
            var c = Object(a);
            if (!t(a)) {
                var s = e(o, 3);
                (a = r(a)),
                    (o = function (l) {
                        return s(c[l], l, c);
                    });
            }
            var f = i(a, o, u);
            return f > -1 ? c[s ? a[f] : f] : void 0;
        };
    }
    return (cl = n), cl;
}
var sl, hb;
function KR() {
    if (hb) return sl;
    hb = 1;
    var e = gw();
    function t(r) {
        var n = e(r),
            i = n % 1;
        return n === n ? (i ? n - i : n) : 0;
    }
    return (sl = t), sl;
}
var ll, pb;
function GR() {
    if (pb) return ll;
    pb = 1;
    var e = E0(),
        t = dt(),
        r = KR(),
        n = Math.max;
    function i(a, o, u) {
        var c = a == null ? 0 : a.length;
        if (!c) return -1;
        var s = u == null ? 0 : r(u);
        return s < 0 && (s = n(c + s, 0)), e(a, t(o, 3), s);
    }
    return (ll = i), ll;
}
var fl, db;
function VR() {
    if (db) return fl;
    db = 1;
    var e = HR(),
        t = GR(),
        r = e(t);
    return (fl = r), fl;
}
var XR = VR();
const YR = ce(XR);
var ZR = Ub();
const JR = ce(ZR);
var QR = JR(
        function (e) {
            return { x: e.left, y: e.top, width: e.width, height: e.height };
        },
        function (e) {
            return ['l', e.left, 't', e.top, 'w', e.width, 'h', e.height].join(
                ''
            );
        }
    ),
    Rh = q.createContext(void 0),
    Dh = q.createContext(void 0),
    Mw = q.createContext(void 0),
    $w = q.createContext({}),
    Cw = q.createContext(void 0),
    Iw = q.createContext(0),
    kw = q.createContext(0),
    vb = function (t) {
        var r = t.state,
            n = r.xAxisMap,
            i = r.yAxisMap,
            a = r.offset,
            o = t.clipPathId,
            u = t.children,
            c = t.width,
            s = t.height,
            f = QR(a);
        return S.createElement(
            Rh.Provider,
            { value: n },
            S.createElement(
                Dh.Provider,
                { value: i },
                S.createElement(
                    $w.Provider,
                    { value: a },
                    S.createElement(
                        Mw.Provider,
                        { value: f },
                        S.createElement(
                            Cw.Provider,
                            { value: o },
                            S.createElement(
                                Iw.Provider,
                                { value: s },
                                S.createElement(kw.Provider, { value: c }, u)
                            )
                        )
                    )
                )
            )
        );
    },
    eD = function () {
        return q.useContext(Cw);
    },
    Rw = function (t) {
        var r = q.useContext(Rh);
        r == null && or();
        var n = r[t];
        return n == null && or(), n;
    },
    tD = function () {
        var t = q.useContext(Rh);
        return It(t);
    },
    rD = function () {
        var t = q.useContext(Dh),
            r = YR(t, function (n) {
                return Ow(n.domain, Number.isFinite);
            });
        return r || It(t);
    },
    Dw = function (t) {
        var r = q.useContext(Dh);
        r == null && or();
        var n = r[t];
        return n == null && or(), n;
    },
    nD = function () {
        var t = q.useContext(Mw);
        return t;
    },
    iD = function () {
        return q.useContext($w);
    },
    Nh = function () {
        return q.useContext(kw);
    },
    qh = function () {
        return q.useContext(Iw);
    };
function zr(e) {
    '@babel/helpers - typeof';
    return (
        (zr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        zr(e)
    );
}
function aD(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function oD(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, qw(n.key), n);
    }
}
function uD(e, t, r) {
    return (
        t && oD(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function cD(e, t, r) {
    return (
        (t = _a(t)),
        sD(
            e,
            Nw()
                ? Reflect.construct(t, r || [], _a(e).constructor)
                : t.apply(e, r)
        )
    );
}
function sD(e, t) {
    if (t && (zr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return lD(e);
}
function lD(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Nw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Nw = function () {
        return !!e;
    })();
}
function _a(e) {
    return (
        (_a = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        _a(e)
    );
}
function fD(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && wf(e, t);
}
function wf(e, t) {
    return (
        (wf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        wf(e, t)
    );
}
function yb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function mb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? yb(Object(r), !0).forEach(function (n) {
                  Lh(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : yb(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function Lh(e, t, r) {
    return (
        (t = qw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function qw(e) {
    var t = hD(e, 'string');
    return zr(t) == 'symbol' ? t : t + '';
}
function hD(e, t) {
    if (zr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (zr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
function pD(e, t) {
    return mD(e) || yD(e, t) || vD(e, t) || dD();
}
function dD() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vD(e, t) {
    if (e) {
        if (typeof e == 'string') return gb(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return gb(e, t);
    }
}
function gb(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function yD(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function mD(e) {
    if (Array.isArray(e)) return e;
}
function Of() {
    return (
        (Of = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Of.apply(this, arguments)
    );
}
var gD = function (t, r) {
        var n;
        return (
            S.isValidElement(t)
                ? (n = S.cloneElement(t, r))
                : Y(t)
                  ? (n = t(r))
                  : (n = S.createElement(
                        'line',
                        Of({}, r, { className: 'recharts-reference-line-line' })
                    )),
            n
        );
    },
    bD = function (t, r, n, i, a, o, u, c, s) {
        var f = a.x,
            l = a.y,
            h = a.width,
            p = a.height;
        if (n) {
            var y = s.y,
                v = t.y.apply(y, { position: o });
            if (lt(s, 'discard') && !t.y.isInRange(v)) return null;
            var d = [
                { x: f + h, y: v },
                { x: f, y: v },
            ];
            return c === 'left' ? d.reverse() : d;
        }
        if (r) {
            var g = s.x,
                x = t.x.apply(g, { position: o });
            if (lt(s, 'discard') && !t.x.isInRange(x)) return null;
            var w = [
                { x, y: l + p },
                { x, y: l },
            ];
            return u === 'top' ? w.reverse() : w;
        }
        if (i) {
            var O = s.segment,
                m = O.map(function (b) {
                    return t.apply(b, { position: o });
                });
            return lt(s, 'discard') &&
                hR(m, function (b) {
                    return !t.isInRange(b);
                })
                ? null
                : m;
        }
        return null;
    };
function xD(e) {
    var t = e.x,
        r = e.y,
        n = e.segment,
        i = e.xAxisId,
        a = e.yAxisId,
        o = e.shape,
        u = e.className,
        c = e.alwaysShow,
        s = eD(),
        f = Rw(i),
        l = Dw(a),
        h = nD();
    if (!s || !h) return null;
    ot(
        c === void 0,
        'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
    );
    var p = kh({ x: f.scale, y: l.scale }),
        y = Ae(t),
        v = Ae(r),
        d = n && n.length === 2,
        g = bD(p, y, v, d, h, e.position, f.orientation, l.orientation, e);
    if (!g) return null;
    var x = pD(g, 2),
        w = x[0],
        O = w.x,
        m = w.y,
        b = x[1],
        _ = b.x,
        A = b.y,
        T = lt(e, 'hidden') ? 'url(#'.concat(s, ')') : void 0,
        M = mb(
            mb({ clipPath: T }, H(e, !0)),
            {},
            { x1: O, y1: m, x2: _, y2: A }
        );
    return S.createElement(
        re,
        { className: Q('recharts-reference-line', u) },
        gD(o, M),
        Te.renderCallByParent(e, zR({ x1: O, y1: m, x2: _, y2: A }))
    );
}
var Bh = (function (e) {
    function t() {
        return aD(this, t), cD(this, t, arguments);
    }
    return (
        fD(t, e),
        uD(t, [
            {
                key: 'render',
                value: function () {
                    return S.createElement(xD, this.props);
                },
            },
        ])
    );
})(S.Component);
Lh(Bh, 'displayName', 'ReferenceLine');
Lh(Bh, 'defaultProps', {
    isFront: !1,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
    position: 'middle',
});
function _f() {
    return (
        (_f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        _f.apply(this, arguments)
    );
}
function Wr(e) {
    '@babel/helpers - typeof';
    return (
        (Wr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Wr(e)
    );
}
function bb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function xb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? bb(Object(r), !0).forEach(function (n) {
                  fo(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : bb(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function wD(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function OD(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, Bw(n.key), n);
    }
}
function _D(e, t, r) {
    return (
        t && OD(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function AD(e, t, r) {
    return (
        (t = Aa(t)),
        SD(
            e,
            Lw()
                ? Reflect.construct(t, r || [], Aa(e).constructor)
                : t.apply(e, r)
        )
    );
}
function SD(e, t) {
    if (t && (Wr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return PD(e);
}
function PD(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Lw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Lw = function () {
        return !!e;
    })();
}
function Aa(e) {
    return (
        (Aa = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Aa(e)
    );
}
function TD(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Af(e, t);
}
function Af(e, t) {
    return (
        (Af = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Af(e, t)
    );
}
function fo(e, t, r) {
    return (
        (t = Bw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Bw(e) {
    var t = ED(e, 'string');
    return Wr(t) == 'symbol' ? t : t + '';
}
function ED(e, t) {
    if (Wr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Wr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var jD = function (t) {
        var r = t.x,
            n = t.y,
            i = t.xAxis,
            a = t.yAxis,
            o = kh({ x: i.scale, y: a.scale }),
            u = o.apply({ x: r, y: n }, { bandAware: !0 });
        return lt(t, 'discard') && !o.isInRange(u) ? null : u;
    },
    ho = (function (e) {
        function t() {
            return wD(this, t), AD(this, t, arguments);
        }
        return (
            TD(t, e),
            _D(t, [
                {
                    key: 'render',
                    value: function () {
                        var n = this.props,
                            i = n.x,
                            a = n.y,
                            o = n.r,
                            u = n.alwaysShow,
                            c = n.clipPathId,
                            s = Ae(i),
                            f = Ae(a);
                        if (
                            (ot(
                                u === void 0,
                                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                            ),
                            !s || !f)
                        )
                            return null;
                        var l = jD(this.props);
                        if (!l) return null;
                        var h = l.x,
                            p = l.y,
                            y = this.props,
                            v = y.shape,
                            d = y.className,
                            g = lt(this.props, 'hidden')
                                ? 'url(#'.concat(c, ')')
                                : void 0,
                            x = xb(
                                xb({ clipPath: g }, H(this.props, !0)),
                                {},
                                { cx: h, cy: p }
                            );
                        return S.createElement(
                            re,
                            { className: Q('recharts-reference-dot', d) },
                            t.renderDot(v, x),
                            Te.renderCallByParent(this.props, {
                                x: h - o,
                                y: p - o,
                                width: 2 * o,
                                height: 2 * o,
                            })
                        );
                    },
                },
            ])
        );
    })(S.Component);
fo(ho, 'displayName', 'ReferenceDot');
fo(ho, 'defaultProps', {
    isFront: !1,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
});
fo(ho, 'renderDot', function (e, t) {
    var r;
    return (
        S.isValidElement(e)
            ? (r = S.cloneElement(e, t))
            : Y(e)
              ? (r = e(t))
              : (r = S.createElement(
                    no,
                    _f({}, t, {
                        cx: t.cx,
                        cy: t.cy,
                        className: 'recharts-reference-dot-dot',
                    })
                )),
        r
    );
});
function Sf() {
    return (
        (Sf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Sf.apply(this, arguments)
    );
}
function Ur(e) {
    '@babel/helpers - typeof';
    return (
        (Ur =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Ur(e)
    );
}
function wb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ob(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? wb(Object(r), !0).forEach(function (n) {
                  po(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : wb(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function MD(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function $D(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, zw(n.key), n);
    }
}
function CD(e, t, r) {
    return (
        t && $D(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function ID(e, t, r) {
    return (
        (t = Sa(t)),
        kD(
            e,
            Fw()
                ? Reflect.construct(t, r || [], Sa(e).constructor)
                : t.apply(e, r)
        )
    );
}
function kD(e, t) {
    if (t && (Ur(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return RD(e);
}
function RD(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Fw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Fw = function () {
        return !!e;
    })();
}
function Sa(e) {
    return (
        (Sa = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Sa(e)
    );
}
function DD(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Pf(e, t);
}
function Pf(e, t) {
    return (
        (Pf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Pf(e, t)
    );
}
function po(e, t, r) {
    return (
        (t = zw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function zw(e) {
    var t = ND(e, 'string');
    return Ur(t) == 'symbol' ? t : t + '';
}
function ND(e, t) {
    if (Ur(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Ur(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var qD = function (t, r, n, i, a) {
        var o = a.x1,
            u = a.x2,
            c = a.y1,
            s = a.y2,
            f = a.xAxis,
            l = a.yAxis;
        if (!f || !l) return null;
        var h = kh({ x: f.scale, y: l.scale }),
            p = {
                x: t ? h.x.apply(o, { position: 'start' }) : h.x.rangeMin,
                y: n ? h.y.apply(c, { position: 'start' }) : h.y.rangeMin,
            },
            y = {
                x: r ? h.x.apply(u, { position: 'end' }) : h.x.rangeMax,
                y: i ? h.y.apply(s, { position: 'end' }) : h.y.rangeMax,
            };
        return lt(a, 'discard') && (!h.isInRange(p) || !h.isInRange(y))
            ? null
            : Ew(p, y);
    },
    vo = (function (e) {
        function t() {
            return MD(this, t), ID(this, t, arguments);
        }
        return (
            DD(t, e),
            CD(t, [
                {
                    key: 'render',
                    value: function () {
                        var n = this.props,
                            i = n.x1,
                            a = n.x2,
                            o = n.y1,
                            u = n.y2,
                            c = n.className,
                            s = n.alwaysShow,
                            f = n.clipPathId;
                        ot(
                            s === void 0,
                            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                        );
                        var l = Ae(i),
                            h = Ae(a),
                            p = Ae(o),
                            y = Ae(u),
                            v = this.props.shape;
                        if (!l && !h && !p && !y && !v) return null;
                        var d = qD(l, h, p, y, this.props);
                        if (!d && !v) return null;
                        var g = lt(this.props, 'hidden')
                            ? 'url(#'.concat(f, ')')
                            : void 0;
                        return S.createElement(
                            re,
                            { className: Q('recharts-reference-area', c) },
                            t.renderRect(
                                v,
                                Ob(Ob({ clipPath: g }, H(this.props, !0)), d)
                            ),
                            Te.renderCallByParent(this.props, d)
                        );
                    },
                },
            ])
        );
    })(S.Component);
po(vo, 'displayName', 'ReferenceArea');
po(vo, 'defaultProps', {
    isFront: !1,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#ccc',
    fillOpacity: 0.5,
    stroke: 'none',
    strokeWidth: 1,
});
po(vo, 'renderRect', function (e, t) {
    var r;
    return (
        S.isValidElement(e)
            ? (r = S.cloneElement(e, t))
            : Y(e)
              ? (r = e(t))
              : (r = S.createElement(
                    Ih,
                    Sf({}, t, { className: 'recharts-reference-area-rect' })
                )),
        r
    );
});
function Ww(e, t, r) {
    if (t < 1) return [];
    if (t === 1 && r === void 0) return e;
    for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
    return n;
}
function LD(e, t, r) {
    var n = { width: e.width + t.width, height: e.height + t.height };
    return UR(n, r);
}
function BD(e, t, r) {
    var n = r === 'width',
        i = e.x,
        a = e.y,
        o = e.width,
        u = e.height;
    return t === 1
        ? { start: n ? i : a, end: n ? i + o : a + u }
        : { start: n ? i + o : a + u, end: n ? i : a };
}
function Pa(e, t, r, n, i) {
    if (e * t < e * n || e * t > e * i) return !1;
    var a = r();
    return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function FD(e, t) {
    return Ww(e, t + 1);
}
function zD(e, t, r, n, i) {
    for (
        var a = (n || []).slice(),
            o = t.start,
            u = t.end,
            c = 0,
            s = 1,
            f = o,
            l = function () {
                var y = n == null ? void 0 : n[c];
                if (y === void 0) return { v: Ww(n, s) };
                var v = c,
                    d,
                    g = function () {
                        return d === void 0 && (d = r(y, v)), d;
                    },
                    x = y.coordinate,
                    w = c === 0 || Pa(e, x, g, f, u);
                w || ((c = 0), (f = o), (s += 1)),
                    w && ((f = x + e * (g() / 2 + i)), (c += s));
            },
            h;
        s <= a.length;

    )
        if (((h = l()), h)) return h.v;
    return [];
}
function oi(e) {
    '@babel/helpers - typeof';
    return (
        (oi =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        oi(e)
    );
}
function _b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Me(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? _b(Object(r), !0).forEach(function (n) {
                  WD(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : _b(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function WD(e, t, r) {
    return (
        (t = UD(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function UD(e) {
    var t = HD(e, 'string');
    return oi(t) == 'symbol' ? t : t + '';
}
function HD(e, t) {
    if (oi(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (oi(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function KD(e, t, r, n, i) {
    for (
        var a = (n || []).slice(),
            o = a.length,
            u = t.start,
            c = t.end,
            s = function (h) {
                var p = a[h],
                    y,
                    v = function () {
                        return y === void 0 && (y = r(p, h)), y;
                    };
                if (h === o - 1) {
                    var d = e * (p.coordinate + (e * v()) / 2 - c);
                    a[h] = p = Me(
                        Me({}, p),
                        {},
                        {
                            tickCoord:
                                d > 0 ? p.coordinate - d * e : p.coordinate,
                        }
                    );
                } else
                    a[h] = p = Me(Me({}, p), {}, { tickCoord: p.coordinate });
                var g = Pa(e, p.tickCoord, v, u, c);
                g &&
                    ((c = p.tickCoord - e * (v() / 2 + i)),
                    (a[h] = Me(Me({}, p), {}, { isShow: !0 })));
            },
            f = o - 1;
        f >= 0;
        f--
    )
        s(f);
    return a;
}
function GD(e, t, r, n, i, a) {
    var o = (n || []).slice(),
        u = o.length,
        c = t.start,
        s = t.end;
    if (a) {
        var f = n[u - 1],
            l = r(f, u - 1),
            h = e * (f.coordinate + (e * l) / 2 - s);
        o[u - 1] = f = Me(
            Me({}, f),
            {},
            { tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate }
        );
        var p = Pa(
            e,
            f.tickCoord,
            function () {
                return l;
            },
            c,
            s
        );
        p &&
            ((s = f.tickCoord - e * (l / 2 + i)),
            (o[u - 1] = Me(Me({}, f), {}, { isShow: !0 })));
    }
    for (
        var y = a ? u - 1 : u,
            v = function (x) {
                var w = o[x],
                    O,
                    m = function () {
                        return O === void 0 && (O = r(w, x)), O;
                    };
                if (x === 0) {
                    var b = e * (w.coordinate - (e * m()) / 2 - c);
                    o[x] = w = Me(
                        Me({}, w),
                        {},
                        {
                            tickCoord:
                                b < 0 ? w.coordinate - b * e : w.coordinate,
                        }
                    );
                } else
                    o[x] = w = Me(Me({}, w), {}, { tickCoord: w.coordinate });
                var _ = Pa(e, w.tickCoord, m, c, s);
                _ &&
                    ((c = w.tickCoord + e * (m() / 2 + i)),
                    (o[x] = Me(Me({}, w), {}, { isShow: !0 })));
            },
            d = 0;
        d < y;
        d++
    )
        v(d);
    return o;
}
function Fh(e, t, r) {
    var n = e.tick,
        i = e.ticks,
        a = e.viewBox,
        o = e.minTickGap,
        u = e.orientation,
        c = e.interval,
        s = e.tickFormatter,
        f = e.unit,
        l = e.angle;
    if (!i || !i.length || !n) return [];
    if (N(c) || sr.isSsr) return FD(i, typeof c == 'number' && N(c) ? c : 0);
    var h = [],
        p = u === 'top' || u === 'bottom' ? 'width' : 'height',
        y =
            f && p === 'width'
                ? wn(f, { fontSize: t, letterSpacing: r })
                : { width: 0, height: 0 },
        v = function (w, O) {
            var m = Y(s) ? s(w.value, O) : w.value;
            return p === 'width'
                ? LD(wn(m, { fontSize: t, letterSpacing: r }), y, l)
                : wn(m, { fontSize: t, letterSpacing: r })[p];
        },
        d = i.length >= 2 ? Ie(i[1].coordinate - i[0].coordinate) : 1,
        g = BD(a, d, p);
    return c === 'equidistantPreserveStart'
        ? zD(d, g, v, i, o)
        : (c === 'preserveStart' || c === 'preserveStartEnd'
              ? (h = GD(d, g, v, i, o, c === 'preserveStartEnd'))
              : (h = KD(d, g, v, i, o)),
          h.filter(function (x) {
              return x.isShow;
          }));
}
var VD = ['viewBox'],
    XD = ['viewBox'],
    YD = ['ticks'];
function Hr(e) {
    '@babel/helpers - typeof';
    return (
        (Hr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Hr(e)
    );
}
function wr() {
    return (
        (wr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        wr.apply(this, arguments)
    );
}
function Ab(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Ce(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Ab(Object(r), !0).forEach(function (n) {
                  zh(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ab(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function hl(e, t) {
    if (e == null) return {};
    var r = ZD(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function ZD(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function JD(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function Sb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, Hw(n.key), n);
    }
}
function QD(e, t, r) {
    return (
        t && Sb(e.prototype, t),
        r && Sb(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function eN(e, t, r) {
    return (
        (t = Ta(t)),
        tN(
            e,
            Uw()
                ? Reflect.construct(t, r || [], Ta(e).constructor)
                : t.apply(e, r)
        )
    );
}
function tN(e, t) {
    if (t && (Hr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return rN(e);
}
function rN(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Uw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Uw = function () {
        return !!e;
    })();
}
function Ta(e) {
    return (
        (Ta = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ta(e)
    );
}
function nN(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Tf(e, t);
}
function Tf(e, t) {
    return (
        (Tf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Tf(e, t)
    );
}
function zh(e, t, r) {
    return (
        (t = Hw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Hw(e) {
    var t = iN(e, 'string');
    return Hr(t) == 'symbol' ? t : t + '';
}
function iN(e, t) {
    if (Hr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Hr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var cn = (function (e) {
    function t(r) {
        var n;
        return (
            JD(this, t),
            (n = eN(this, t, [r])),
            (n.state = { fontSize: '', letterSpacing: '' }),
            n
        );
    }
    return (
        nN(t, e),
        QD(
            t,
            [
                {
                    key: 'shouldComponentUpdate',
                    value: function (n, i) {
                        var a = n.viewBox,
                            o = hl(n, VD),
                            u = this.props,
                            c = u.viewBox,
                            s = hl(u, XD);
                        return !_r(a, c) || !_r(o, s) || !_r(i, this.state);
                    },
                },
                {
                    key: 'componentDidMount',
                    value: function () {
                        var n = this.layerReference;
                        if (n) {
                            var i = n.getElementsByClassName(
                                'recharts-cartesian-axis-tick-value'
                            )[0];
                            i &&
                                this.setState({
                                    fontSize:
                                        window.getComputedStyle(i).fontSize,
                                    letterSpacing:
                                        window.getComputedStyle(i)
                                            .letterSpacing,
                                });
                        }
                    },
                },
                {
                    key: 'getTickLineCoord',
                    value: function (n) {
                        var i = this.props,
                            a = i.x,
                            o = i.y,
                            u = i.width,
                            c = i.height,
                            s = i.orientation,
                            f = i.tickSize,
                            l = i.mirror,
                            h = i.tickMargin,
                            p,
                            y,
                            v,
                            d,
                            g,
                            x,
                            w = l ? -1 : 1,
                            O = n.tickSize || f,
                            m = N(n.tickCoord) ? n.tickCoord : n.coordinate;
                        switch (s) {
                            case 'top':
                                (p = y = n.coordinate),
                                    (d = o + +!l * c),
                                    (v = d - w * O),
                                    (x = v - w * h),
                                    (g = m);
                                break;
                            case 'left':
                                (v = d = n.coordinate),
                                    (y = a + +!l * u),
                                    (p = y - w * O),
                                    (g = p - w * h),
                                    (x = m);
                                break;
                            case 'right':
                                (v = d = n.coordinate),
                                    (y = a + +l * u),
                                    (p = y + w * O),
                                    (g = p + w * h),
                                    (x = m);
                                break;
                            default:
                                (p = y = n.coordinate),
                                    (d = o + +l * c),
                                    (v = d + w * O),
                                    (x = v + w * h),
                                    (g = m);
                                break;
                        }
                        return {
                            line: { x1: p, y1: v, x2: y, y2: d },
                            tick: { x: g, y: x },
                        };
                    },
                },
                {
                    key: 'getTickTextAnchor',
                    value: function () {
                        var n = this.props,
                            i = n.orientation,
                            a = n.mirror,
                            o;
                        switch (i) {
                            case 'left':
                                o = a ? 'start' : 'end';
                                break;
                            case 'right':
                                o = a ? 'end' : 'start';
                                break;
                            default:
                                o = 'middle';
                                break;
                        }
                        return o;
                    },
                },
                {
                    key: 'getTickVerticalAnchor',
                    value: function () {
                        var n = this.props,
                            i = n.orientation,
                            a = n.mirror,
                            o = 'end';
                        switch (i) {
                            case 'left':
                            case 'right':
                                o = 'middle';
                                break;
                            case 'top':
                                o = a ? 'start' : 'end';
                                break;
                            default:
                                o = a ? 'end' : 'start';
                                break;
                        }
                        return o;
                    },
                },
                {
                    key: 'renderAxisLine',
                    value: function () {
                        var n = this.props,
                            i = n.x,
                            a = n.y,
                            o = n.width,
                            u = n.height,
                            c = n.orientation,
                            s = n.mirror,
                            f = n.axisLine,
                            l = Ce(
                                Ce(Ce({}, H(this.props, !1)), H(f, !1)),
                                {},
                                { fill: 'none' }
                            );
                        if (c === 'top' || c === 'bottom') {
                            var h = +(
                                (c === 'top' && !s) ||
                                (c === 'bottom' && s)
                            );
                            l = Ce(
                                Ce({}, l),
                                {},
                                {
                                    x1: i,
                                    y1: a + h * u,
                                    x2: i + o,
                                    y2: a + h * u,
                                }
                            );
                        } else {
                            var p = +(
                                (c === 'left' && !s) ||
                                (c === 'right' && s)
                            );
                            l = Ce(
                                Ce({}, l),
                                {},
                                {
                                    x1: i + p * o,
                                    y1: a,
                                    x2: i + p * o,
                                    y2: a + u,
                                }
                            );
                        }
                        return S.createElement(
                            'line',
                            wr({}, l, {
                                className: Q(
                                    'recharts-cartesian-axis-line',
                                    Ke(f, 'className')
                                ),
                            })
                        );
                    },
                },
                {
                    key: 'renderTicks',
                    value: function (n, i, a) {
                        var o = this,
                            u = this.props,
                            c = u.tickLine,
                            s = u.stroke,
                            f = u.tick,
                            l = u.tickFormatter,
                            h = u.unit,
                            p = Fh(
                                Ce(Ce({}, this.props), {}, { ticks: n }),
                                i,
                                a
                            ),
                            y = this.getTickTextAnchor(),
                            v = this.getTickVerticalAnchor(),
                            d = H(this.props, !1),
                            g = H(f, !1),
                            x = Ce(Ce({}, d), {}, { fill: 'none' }, H(c, !1)),
                            w = p.map(function (O, m) {
                                var b = o.getTickLineCoord(O),
                                    _ = b.line,
                                    A = b.tick,
                                    T = Ce(
                                        Ce(
                                            Ce(
                                                Ce(
                                                    {
                                                        textAnchor: y,
                                                        verticalAnchor: v,
                                                    },
                                                    d
                                                ),
                                                {},
                                                { stroke: 'none', fill: s },
                                                g
                                            ),
                                            A
                                        ),
                                        {},
                                        {
                                            index: m,
                                            payload: O,
                                            visibleTicksCount: p.length,
                                            tickFormatter: l,
                                        }
                                    );
                                return S.createElement(
                                    re,
                                    wr(
                                        {
                                            className:
                                                'recharts-cartesian-axis-tick',
                                            key: 'tick-'
                                                .concat(O.value, '-')
                                                .concat(O.coordinate, '-')
                                                .concat(O.tickCoord),
                                        },
                                        nr(o.props, O, m)
                                    ),
                                    c &&
                                        S.createElement(
                                            'line',
                                            wr({}, x, _, {
                                                className: Q(
                                                    'recharts-cartesian-axis-tick-line',
                                                    Ke(c, 'className')
                                                ),
                                            })
                                        ),
                                    f &&
                                        t.renderTickItem(
                                            f,
                                            T,
                                            ''
                                                .concat(
                                                    Y(l)
                                                        ? l(O.value, m)
                                                        : O.value
                                                )
                                                .concat(h || '')
                                        )
                                );
                            });
                        return S.createElement(
                            'g',
                            { className: 'recharts-cartesian-axis-ticks' },
                            w
                        );
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var n = this,
                            i = this.props,
                            a = i.axisLine,
                            o = i.width,
                            u = i.height,
                            c = i.ticksGenerator,
                            s = i.className,
                            f = i.hide;
                        if (f) return null;
                        var l = this.props,
                            h = l.ticks,
                            p = hl(l, YD),
                            y = h;
                        return (
                            Y(c) &&
                                (y = h && h.length > 0 ? c(this.props) : c(p)),
                            o <= 0 || u <= 0 || !y || !y.length
                                ? null
                                : S.createElement(
                                      re,
                                      {
                                          className: Q(
                                              'recharts-cartesian-axis',
                                              s
                                          ),
                                          ref: function (d) {
                                              n.layerReference = d;
                                          },
                                      },
                                      a && this.renderAxisLine(),
                                      this.renderTicks(
                                          y,
                                          this.state.fontSize,
                                          this.state.letterSpacing
                                      ),
                                      Te.renderCallByParent(this.props)
                                  )
                        );
                    },
                },
            ],
            [
                {
                    key: 'renderTickItem',
                    value: function (n, i, a) {
                        var o;
                        return (
                            S.isValidElement(n)
                                ? (o = S.cloneElement(n, i))
                                : Y(n)
                                  ? (o = n(i))
                                  : (o = S.createElement(
                                        ir,
                                        wr({}, i, {
                                            className:
                                                'recharts-cartesian-axis-tick-value',
                                        }),
                                        a
                                    )),
                            o
                        );
                    },
                },
            ]
        )
    );
})(q.Component);
zh(cn, 'displayName', 'CartesianAxis');
zh(cn, 'defaultProps', {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: { x: 0, y: 0, width: 0, height: 0 },
    orientation: 'bottom',
    ticks: [],
    stroke: '#666',
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: 'preserveEnd',
});
var aN = ['x1', 'y1', 'x2', 'y2', 'key'],
    oN = ['offset'];
function ur(e) {
    '@babel/helpers - typeof';
    return (
        (ur =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ur(e)
    );
}
function Pb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function $e(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Pb(Object(r), !0).forEach(function (n) {
                  uN(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Pb(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function uN(e, t, r) {
    return (
        (t = cN(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function cN(e) {
    var t = sN(e, 'string');
    return ur(t) == 'symbol' ? t : t + '';
}
function sN(e, t) {
    if (ur(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ur(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function Qt() {
    return (
        (Qt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Qt.apply(this, arguments)
    );
}
function Tb(e, t) {
    if (e == null) return {};
    var r = lN(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function lN(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
var fN = function (t) {
    var r = t.fill;
    if (!r || r === 'none') return null;
    var n = t.fillOpacity,
        i = t.x,
        a = t.y,
        o = t.width,
        u = t.height,
        c = t.ry;
    return S.createElement('rect', {
        x: i,
        y: a,
        ry: c,
        width: o,
        height: u,
        stroke: 'none',
        fill: r,
        fillOpacity: n,
        className: 'recharts-cartesian-grid-bg',
    });
};
function Kw(e, t) {
    var r;
    if (S.isValidElement(e)) r = S.cloneElement(e, t);
    else if (Y(e)) r = e(t);
    else {
        var n = t.x1,
            i = t.y1,
            a = t.x2,
            o = t.y2,
            u = t.key,
            c = Tb(t, aN),
            s = H(c, !1);
        s.offset;
        var f = Tb(s, oN);
        r = S.createElement(
            'line',
            Qt({}, f, { x1: n, y1: i, x2: a, y2: o, fill: 'none', key: u })
        );
    }
    return r;
}
function hN(e) {
    var t = e.x,
        r = e.width,
        n = e.horizontal,
        i = n === void 0 ? !0 : n,
        a = e.horizontalPoints;
    if (!i || !a || !a.length) return null;
    var o = a.map(function (u, c) {
        var s = $e(
            $e({}, e),
            {},
            { x1: t, y1: u, x2: t + r, y2: u, key: 'line-'.concat(c), index: c }
        );
        return Kw(i, s);
    });
    return S.createElement(
        'g',
        { className: 'recharts-cartesian-grid-horizontal' },
        o
    );
}
function pN(e) {
    var t = e.y,
        r = e.height,
        n = e.vertical,
        i = n === void 0 ? !0 : n,
        a = e.verticalPoints;
    if (!i || !a || !a.length) return null;
    var o = a.map(function (u, c) {
        var s = $e(
            $e({}, e),
            {},
            { x1: u, y1: t, x2: u, y2: t + r, key: 'line-'.concat(c), index: c }
        );
        return Kw(i, s);
    });
    return S.createElement(
        'g',
        { className: 'recharts-cartesian-grid-vertical' },
        o
    );
}
function dN(e) {
    var t = e.horizontalFill,
        r = e.fillOpacity,
        n = e.x,
        i = e.y,
        a = e.width,
        o = e.height,
        u = e.horizontalPoints,
        c = e.horizontal,
        s = c === void 0 ? !0 : c;
    if (!s || !t || !t.length) return null;
    var f = u
        .map(function (h) {
            return Math.round(h + i - i);
        })
        .sort(function (h, p) {
            return h - p;
        });
    i !== f[0] && f.unshift(0);
    var l = f.map(function (h, p) {
        var y = !f[p + 1],
            v = y ? i + o - h : f[p + 1] - h;
        if (v <= 0) return null;
        var d = p % t.length;
        return S.createElement('rect', {
            key: 'react-'.concat(p),
            y: h,
            x: n,
            height: v,
            width: a,
            stroke: 'none',
            fill: t[d],
            fillOpacity: r,
            className: 'recharts-cartesian-grid-bg',
        });
    });
    return S.createElement(
        'g',
        { className: 'recharts-cartesian-gridstripes-horizontal' },
        l
    );
}
function vN(e) {
    var t = e.vertical,
        r = t === void 0 ? !0 : t,
        n = e.verticalFill,
        i = e.fillOpacity,
        a = e.x,
        o = e.y,
        u = e.width,
        c = e.height,
        s = e.verticalPoints;
    if (!r || !n || !n.length) return null;
    var f = s
        .map(function (h) {
            return Math.round(h + a - a);
        })
        .sort(function (h, p) {
            return h - p;
        });
    a !== f[0] && f.unshift(0);
    var l = f.map(function (h, p) {
        var y = !f[p + 1],
            v = y ? a + u - h : f[p + 1] - h;
        if (v <= 0) return null;
        var d = p % n.length;
        return S.createElement('rect', {
            key: 'react-'.concat(p),
            x: h,
            y: o,
            width: v,
            height: c,
            stroke: 'none',
            fill: n[d],
            fillOpacity: i,
            className: 'recharts-cartesian-grid-bg',
        });
    });
    return S.createElement(
        'g',
        { className: 'recharts-cartesian-gridstripes-vertical' },
        l
    );
}
var yN = function (t, r) {
        var n = t.xAxis,
            i = t.width,
            a = t.height,
            o = t.offset;
        return Kx(
            Fh(
                $e(
                    $e($e({}, cn.defaultProps), n),
                    {},
                    {
                        ticks: bt(n, !0),
                        viewBox: { x: 0, y: 0, width: i, height: a },
                    }
                )
            ),
            o.left,
            o.left + o.width,
            r
        );
    },
    mN = function (t, r) {
        var n = t.yAxis,
            i = t.width,
            a = t.height,
            o = t.offset;
        return Kx(
            Fh(
                $e(
                    $e($e({}, cn.defaultProps), n),
                    {},
                    {
                        ticks: bt(n, !0),
                        viewBox: { x: 0, y: 0, width: i, height: a },
                    }
                )
            ),
            o.top,
            o.top + o.height,
            r
        );
    },
    yr = {
        horizontal: !0,
        vertical: !0,
        stroke: '#ccc',
        fill: 'none',
        verticalFill: [],
        horizontalFill: [],
    };
function Ef(e) {
    var t,
        r,
        n,
        i,
        a,
        o,
        u = Nh(),
        c = qh(),
        s = iD(),
        f = $e(
            $e({}, e),
            {},
            {
                stroke: (t = e.stroke) !== null && t !== void 0 ? t : yr.stroke,
                fill: (r = e.fill) !== null && r !== void 0 ? r : yr.fill,
                horizontal:
                    (n = e.horizontal) !== null && n !== void 0
                        ? n
                        : yr.horizontal,
                horizontalFill:
                    (i = e.horizontalFill) !== null && i !== void 0
                        ? i
                        : yr.horizontalFill,
                vertical:
                    (a = e.vertical) !== null && a !== void 0 ? a : yr.vertical,
                verticalFill:
                    (o = e.verticalFill) !== null && o !== void 0
                        ? o
                        : yr.verticalFill,
                x: N(e.x) ? e.x : s.left,
                y: N(e.y) ? e.y : s.top,
                width: N(e.width) ? e.width : s.width,
                height: N(e.height) ? e.height : s.height,
            }
        ),
        l = f.x,
        h = f.y,
        p = f.width,
        y = f.height,
        v = f.syncWithTicks,
        d = f.horizontalValues,
        g = f.verticalValues,
        x = tD(),
        w = rD();
    if (
        !N(p) ||
        p <= 0 ||
        !N(y) ||
        y <= 0 ||
        !N(l) ||
        l !== +l ||
        !N(h) ||
        h !== +h
    )
        return null;
    var O = f.verticalCoordinatesGenerator || yN,
        m = f.horizontalCoordinatesGenerator || mN,
        b = f.horizontalPoints,
        _ = f.verticalPoints;
    if ((!b || !b.length) && Y(m)) {
        var A = d && d.length,
            T = m(
                {
                    yAxis: w
                        ? $e($e({}, w), {}, { ticks: A ? d : w.ticks })
                        : void 0,
                    width: u,
                    height: c,
                    offset: s,
                },
                A ? !0 : v
            );
        ot(
            Array.isArray(T),
            'horizontalCoordinatesGenerator should return Array but instead it returned ['.concat(
                ur(T),
                ']'
            )
        ),
            Array.isArray(T) && (b = T);
    }
    if ((!_ || !_.length) && Y(O)) {
        var M = g && g.length,
            P = O(
                {
                    xAxis: x
                        ? $e($e({}, x), {}, { ticks: M ? g : x.ticks })
                        : void 0,
                    width: u,
                    height: c,
                    offset: s,
                },
                M ? !0 : v
            );
        ot(
            Array.isArray(P),
            'verticalCoordinatesGenerator should return Array but instead it returned ['.concat(
                ur(P),
                ']'
            )
        ),
            Array.isArray(P) && (_ = P);
    }
    return S.createElement(
        'g',
        { className: 'recharts-cartesian-grid' },
        S.createElement(fN, {
            fill: f.fill,
            fillOpacity: f.fillOpacity,
            x: f.x,
            y: f.y,
            width: f.width,
            height: f.height,
            ry: f.ry,
        }),
        S.createElement(
            hN,
            Qt({}, f, { offset: s, horizontalPoints: b, xAxis: x, yAxis: w })
        ),
        S.createElement(
            pN,
            Qt({}, f, { offset: s, verticalPoints: _, xAxis: x, yAxis: w })
        ),
        S.createElement(dN, Qt({}, f, { horizontalPoints: b })),
        S.createElement(vN, Qt({}, f, { verticalPoints: _ }))
    );
}
Ef.displayName = 'CartesianGrid';
var gN = ['type', 'layout', 'connectNulls', 'ref'],
    bN = ['key'];
function Kr(e) {
    '@babel/helpers - typeof';
    return (
        (Kr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Kr(e)
    );
}
function Eb(e, t) {
    if (e == null) return {};
    var r = xN(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function xN(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function Tn() {
    return (
        (Tn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Tn.apply(this, arguments)
    );
}
function jb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function Fe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? jb(Object(r), !0).forEach(function (n) {
                  it(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : jb(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function mr(e) {
    return AN(e) || _N(e) || ON(e) || wN();
}
function wN() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ON(e, t) {
    if (e) {
        if (typeof e == 'string') return jf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return jf(e, t);
    }
}
function _N(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function AN(e) {
    if (Array.isArray(e)) return jf(e);
}
function jf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function SN(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function Mb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, Vw(n.key), n);
    }
}
function PN(e, t, r) {
    return (
        t && Mb(e.prototype, t),
        r && Mb(e, r),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function TN(e, t, r) {
    return (
        (t = Ea(t)),
        EN(
            e,
            Gw()
                ? Reflect.construct(t, r || [], Ea(e).constructor)
                : t.apply(e, r)
        )
    );
}
function EN(e, t) {
    if (t && (Kr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return jN(e);
}
function jN(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Gw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Gw = function () {
        return !!e;
    })();
}
function Ea(e) {
    return (
        (Ea = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ea(e)
    );
}
function MN(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Mf(e, t);
}
function Mf(e, t) {
    return (
        (Mf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Mf(e, t)
    );
}
function it(e, t, r) {
    return (
        (t = Vw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Vw(e) {
    var t = $N(e, 'string');
    return Kr(t) == 'symbol' ? t : t + '';
}
function $N(e, t) {
    if (Kr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Kr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var Gr = (function (e) {
    function t() {
        var r;
        SN(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
        return (
            (r = TN(this, t, [].concat(i))),
            it(r, 'state', { isAnimationFinished: !0, totalLength: 0 }),
            it(r, 'generateSimpleStrokeDasharray', function (o, u) {
                return ''.concat(u, 'px ').concat(o - u, 'px');
            }),
            it(r, 'getStrokeDasharray', function (o, u, c) {
                var s = c.reduce(function (g, x) {
                    return g + x;
                });
                if (!s) return r.generateSimpleStrokeDasharray(u, o);
                for (
                    var f = Math.floor(o / s),
                        l = o % s,
                        h = u - o,
                        p = [],
                        y = 0,
                        v = 0;
                    y < c.length;
                    v += c[y], ++y
                )
                    if (v + c[y] > l) {
                        p = [].concat(mr(c.slice(0, y)), [l - v]);
                        break;
                    }
                var d = p.length % 2 === 0 ? [0, h] : [h];
                return []
                    .concat(mr(t.repeat(c, f)), mr(p), d)
                    .map(function (g) {
                        return ''.concat(g, 'px');
                    })
                    .join(', ');
            }),
            it(r, 'id', rn('recharts-line-')),
            it(r, 'pathRef', function (o) {
                r.mainCurve = o;
            }),
            it(r, 'handleAnimationEnd', function () {
                r.setState({ isAnimationFinished: !0 }),
                    r.props.onAnimationEnd && r.props.onAnimationEnd();
            }),
            it(r, 'handleAnimationStart', function () {
                r.setState({ isAnimationFinished: !1 }),
                    r.props.onAnimationStart && r.props.onAnimationStart();
            }),
            r
        );
    }
    return (
        MN(t, e),
        PN(
            t,
            [
                {
                    key: 'componentDidMount',
                    value: function () {
                        if (this.props.isAnimationActive) {
                            var n = this.getTotalLength();
                            this.setState({ totalLength: n });
                        }
                    },
                },
                {
                    key: 'componentDidUpdate',
                    value: function () {
                        if (this.props.isAnimationActive) {
                            var n = this.getTotalLength();
                            n !== this.state.totalLength &&
                                this.setState({ totalLength: n });
                        }
                    },
                },
                {
                    key: 'getTotalLength',
                    value: function () {
                        var n = this.mainCurve;
                        try {
                            return (
                                (n && n.getTotalLength && n.getTotalLength()) ||
                                0
                            );
                        } catch {
                            return 0;
                        }
                    },
                },
                {
                    key: 'renderErrorBar',
                    value: function (n, i) {
                        if (
                            this.props.isAnimationActive &&
                            !this.state.isAnimationFinished
                        )
                            return null;
                        var a = this.props,
                            o = a.points,
                            u = a.xAxis,
                            c = a.yAxis,
                            s = a.layout,
                            f = a.children,
                            l = Ge(f, mi);
                        if (!l) return null;
                        var h = function (v, d) {
                                return {
                                    x: v.x,
                                    y: v.y,
                                    value: v.value,
                                    errorVal: _e(v.payload, d),
                                };
                            },
                            p = {
                                clipPath: n
                                    ? 'url(#clipPath-'.concat(i, ')')
                                    : null,
                            };
                        return S.createElement(
                            re,
                            p,
                            l.map(function (y) {
                                return S.cloneElement(y, {
                                    key: 'bar-'.concat(y.props.dataKey),
                                    data: o,
                                    xAxis: u,
                                    yAxis: c,
                                    layout: s,
                                    dataPointFormatter: h,
                                });
                            })
                        );
                    },
                },
                {
                    key: 'renderDots',
                    value: function (n, i, a) {
                        var o = this.props.isAnimationActive;
                        if (o && !this.state.isAnimationFinished) return null;
                        var u = this.props,
                            c = u.dot,
                            s = u.points,
                            f = u.dataKey,
                            l = H(this.props, !1),
                            h = H(c, !0),
                            p = s.map(function (v, d) {
                                var g = Fe(
                                    Fe(
                                        Fe({ key: 'dot-'.concat(d), r: 3 }, l),
                                        h
                                    ),
                                    {},
                                    {
                                        index: d,
                                        cx: v.x,
                                        cy: v.y,
                                        value: v.value,
                                        dataKey: f,
                                        payload: v.payload,
                                        points: s,
                                    }
                                );
                                return t.renderDotItem(c, g);
                            }),
                            y = {
                                clipPath: n
                                    ? 'url(#clipPath-'
                                          .concat(i ? '' : 'dots-')
                                          .concat(a, ')')
                                    : null,
                            };
                        return S.createElement(
                            re,
                            Tn(
                                {
                                    className: 'recharts-line-dots',
                                    key: 'dots',
                                },
                                y
                            ),
                            p
                        );
                    },
                },
                {
                    key: 'renderCurveStatically',
                    value: function (n, i, a, o) {
                        var u = this.props,
                            c = u.type,
                            s = u.layout,
                            f = u.connectNulls;
                        u.ref;
                        var l = Eb(u, gN),
                            h = Fe(
                                Fe(
                                    Fe({}, H(l, !0)),
                                    {},
                                    {
                                        fill: 'none',
                                        className: 'recharts-line-curve',
                                        clipPath: i
                                            ? 'url(#clipPath-'.concat(a, ')')
                                            : null,
                                        points: n,
                                    },
                                    o
                                ),
                                {},
                                { type: c, layout: s, connectNulls: f }
                            );
                        return S.createElement(
                            ca,
                            Tn({}, h, { pathRef: this.pathRef })
                        );
                    },
                },
                {
                    key: 'renderCurveWithAnimation',
                    value: function (n, i) {
                        var a = this,
                            o = this.props,
                            u = o.points,
                            c = o.strokeDasharray,
                            s = o.isAnimationActive,
                            f = o.animationBegin,
                            l = o.animationDuration,
                            h = o.animationEasing,
                            p = o.animationId,
                            y = o.animateNewValues,
                            v = o.width,
                            d = o.height,
                            g = this.state,
                            x = g.prevPoints,
                            w = g.totalLength;
                        return S.createElement(
                            ht,
                            {
                                begin: f,
                                duration: l,
                                isActive: s,
                                easing: h,
                                from: { t: 0 },
                                to: { t: 1 },
                                key: 'line-'.concat(p),
                                onAnimationEnd: this.handleAnimationEnd,
                                onAnimationStart: this.handleAnimationStart,
                            },
                            function (O) {
                                var m = O.t;
                                if (x) {
                                    var b = x.length / u.length,
                                        _ = u.map(function (E, j) {
                                            var C = Math.floor(j * b);
                                            if (x[C]) {
                                                var $ = x[C],
                                                    k = Ue($.x, E.x),
                                                    R = Ue($.y, E.y);
                                                return Fe(
                                                    Fe({}, E),
                                                    {},
                                                    { x: k(m), y: R(m) }
                                                );
                                            }
                                            if (y) {
                                                var L = Ue(v * 2, E.x),
                                                    B = Ue(d / 2, E.y);
                                                return Fe(
                                                    Fe({}, E),
                                                    {},
                                                    { x: L(m), y: B(m) }
                                                );
                                            }
                                            return Fe(
                                                Fe({}, E),
                                                {},
                                                { x: E.x, y: E.y }
                                            );
                                        });
                                    return a.renderCurveStatically(_, n, i);
                                }
                                var A = Ue(0, w),
                                    T = A(m),
                                    M;
                                if (c) {
                                    var P = ''
                                        .concat(c)
                                        .split(/[,\s]+/gim)
                                        .map(function (E) {
                                            return parseFloat(E);
                                        });
                                    M = a.getStrokeDasharray(T, w, P);
                                } else
                                    M = a.generateSimpleStrokeDasharray(w, T);
                                return a.renderCurveStatically(u, n, i, {
                                    strokeDasharray: M,
                                });
                            }
                        );
                    },
                },
                {
                    key: 'renderCurve',
                    value: function (n, i) {
                        var a = this.props,
                            o = a.points,
                            u = a.isAnimationActive,
                            c = this.state,
                            s = c.prevPoints,
                            f = c.totalLength;
                        return u &&
                            o &&
                            o.length &&
                            ((!s && f > 0) || !yi(s, o))
                            ? this.renderCurveWithAnimation(n, i)
                            : this.renderCurveStatically(o, n, i);
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        var n,
                            i = this.props,
                            a = i.hide,
                            o = i.dot,
                            u = i.points,
                            c = i.className,
                            s = i.xAxis,
                            f = i.yAxis,
                            l = i.top,
                            h = i.left,
                            p = i.width,
                            y = i.height,
                            v = i.isAnimationActive,
                            d = i.id;
                        if (a || !u || !u.length) return null;
                        var g = this.state.isAnimationFinished,
                            x = u.length === 1,
                            w = Q('recharts-line', c),
                            O = s && s.allowDataOverflow,
                            m = f && f.allowDataOverflow,
                            b = O || m,
                            _ = Z(d) ? this.id : d,
                            A =
                                (n = H(o, !1)) !== null && n !== void 0
                                    ? n
                                    : { r: 3, strokeWidth: 2 },
                            T = A.r,
                            M = T === void 0 ? 3 : T,
                            P = A.strokeWidth,
                            E = P === void 0 ? 2 : P,
                            j = p_(o) ? o : {},
                            C = j.clipDot,
                            $ = C === void 0 ? !0 : C,
                            k = M * 2 + E;
                        return S.createElement(
                            re,
                            { className: w },
                            O || m
                                ? S.createElement(
                                      'defs',
                                      null,
                                      S.createElement(
                                          'clipPath',
                                          { id: 'clipPath-'.concat(_) },
                                          S.createElement('rect', {
                                              x: O ? h : h - p / 2,
                                              y: m ? l : l - y / 2,
                                              width: O ? p : p * 2,
                                              height: m ? y : y * 2,
                                          })
                                      ),
                                      !$ &&
                                          S.createElement(
                                              'clipPath',
                                              {
                                                  id: 'clipPath-dots-'.concat(
                                                      _
                                                  ),
                                              },
                                              S.createElement('rect', {
                                                  x: h - k / 2,
                                                  y: l - k / 2,
                                                  width: p + k,
                                                  height: y + k,
                                              })
                                          )
                                  )
                                : null,
                            !x && this.renderCurve(b, _),
                            this.renderErrorBar(b, _),
                            (x || o) && this.renderDots(b, $, _),
                            (!v || g) && _t.renderCallByParent(this.props, u)
                        );
                    },
                },
            ],
            [
                {
                    key: 'getDerivedStateFromProps',
                    value: function (n, i) {
                        return n.animationId !== i.prevAnimationId
                            ? {
                                  prevAnimationId: n.animationId,
                                  curPoints: n.points,
                                  prevPoints: i.curPoints,
                              }
                            : n.points !== i.curPoints
                              ? { curPoints: n.points }
                              : null;
                    },
                },
                {
                    key: 'repeat',
                    value: function (n, i) {
                        for (
                            var a =
                                    n.length % 2 !== 0
                                        ? [].concat(mr(n), [0])
                                        : n,
                                o = [],
                                u = 0;
                            u < i;
                            ++u
                        )
                            o = [].concat(mr(o), mr(a));
                        return o;
                    },
                },
                {
                    key: 'renderDotItem',
                    value: function (n, i) {
                        var a;
                        if (S.isValidElement(n)) a = S.cloneElement(n, i);
                        else if (Y(n)) a = n(i);
                        else {
                            var o = i.key,
                                u = Eb(i, bN),
                                c = Q(
                                    'recharts-line-dot',
                                    typeof n != 'boolean' ? n.className : ''
                                );
                            a = S.createElement(
                                no,
                                Tn({ key: o }, u, { className: c })
                            );
                        }
                        return a;
                    },
                },
            ]
        )
    );
})(q.PureComponent);
it(Gr, 'displayName', 'Line');
it(Gr, 'defaultProps', {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: !1,
    activeDot: !0,
    dot: !0,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [],
    isAnimationActive: !sr.isSsr,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
    hide: !1,
    label: !1,
});
it(Gr, 'getComposedData', function (e) {
    var t = e.props,
        r = e.xAxis,
        n = e.yAxis,
        i = e.xAxisTicks,
        a = e.yAxisTicks,
        o = e.dataKey,
        u = e.bandSize,
        c = e.displayedData,
        s = e.offset,
        f = t.layout,
        l = c.map(function (h, p) {
            var y = _e(h, o);
            return f === 'horizontal'
                ? {
                      x: Dm({
                          axis: r,
                          ticks: i,
                          bandSize: u,
                          entry: h,
                          index: p,
                      }),
                      y: Z(y) ? null : n.scale(y),
                      value: y,
                      payload: h,
                  }
                : {
                      x: Z(y) ? null : r.scale(y),
                      y: Dm({
                          axis: n,
                          ticks: a,
                          bandSize: u,
                          entry: h,
                          index: p,
                      }),
                      value: y,
                      payload: h,
                  };
        });
    return Fe({ points: l, layout: f }, s);
});
function Vr(e) {
    '@babel/helpers - typeof';
    return (
        (Vr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Vr(e)
    );
}
function CN(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function IN(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, Zw(n.key), n);
    }
}
function kN(e, t, r) {
    return (
        t && IN(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function RN(e, t, r) {
    return (
        (t = ja(t)),
        DN(
            e,
            Xw()
                ? Reflect.construct(t, r || [], ja(e).constructor)
                : t.apply(e, r)
        )
    );
}
function DN(e, t) {
    if (t && (Vr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return NN(e);
}
function NN(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Xw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Xw = function () {
        return !!e;
    })();
}
function ja(e) {
    return (
        (ja = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        ja(e)
    );
}
function qN(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && $f(e, t);
}
function $f(e, t) {
    return (
        ($f = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        $f(e, t)
    );
}
function Yw(e, t, r) {
    return (
        (t = Zw(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function Zw(e) {
    var t = LN(e, 'string');
    return Vr(t) == 'symbol' ? t : t + '';
}
function LN(e, t) {
    if (Vr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Vr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
function Cf() {
    return (
        (Cf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Cf.apply(this, arguments)
    );
}
function BN(e) {
    var t = e.xAxisId,
        r = Nh(),
        n = qh(),
        i = Rw(t);
    return i == null
        ? null
        : S.createElement(
              cn,
              Cf({}, i, {
                  className: Q(
                      'recharts-'.concat(i.axisType, ' ').concat(i.axisType),
                      i.className
                  ),
                  viewBox: { x: 0, y: 0, width: r, height: n },
                  ticksGenerator: function (o) {
                      return bt(o, !0);
                  },
              })
          );
}
var Xr = (function (e) {
    function t() {
        return CN(this, t), RN(this, t, arguments);
    }
    return (
        qN(t, e),
        kN(t, [
            {
                key: 'render',
                value: function () {
                    return S.createElement(BN, this.props);
                },
            },
        ])
    );
})(S.Component);
Yw(Xr, 'displayName', 'XAxis');
Yw(Xr, 'defaultProps', {
    allowDecimals: !0,
    hide: !1,
    orientation: 'bottom',
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: 'category',
    padding: { left: 0, right: 0 },
    allowDataOverflow: !1,
    scale: 'auto',
    reversed: !1,
    allowDuplicatedCategory: !0,
});
function Yr(e) {
    '@babel/helpers - typeof';
    return (
        (Yr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Yr(e)
    );
}
function FN(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function zN(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, eO(n.key), n);
    }
}
function WN(e, t, r) {
    return (
        t && zN(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function UN(e, t, r) {
    return (
        (t = Ma(t)),
        HN(
            e,
            Jw()
                ? Reflect.construct(t, r || [], Ma(e).constructor)
                : t.apply(e, r)
        )
    );
}
function HN(e, t) {
    if (t && (Yr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return KN(e);
}
function KN(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function Jw() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (Jw = function () {
        return !!e;
    })();
}
function Ma(e) {
    return (
        (Ma = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Ma(e)
    );
}
function GN(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && If(e, t);
}
function If(e, t) {
    return (
        (If = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        If(e, t)
    );
}
function Qw(e, t, r) {
    return (
        (t = eO(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function eO(e) {
    var t = VN(e, 'string');
    return Yr(t) == 'symbol' ? t : t + '';
}
function VN(e, t) {
    if (Yr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Yr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
function kf() {
    return (
        (kf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        kf.apply(this, arguments)
    );
}
var XN = function (t) {
        var r = t.yAxisId,
            n = Nh(),
            i = qh(),
            a = Dw(r);
        return a == null
            ? null
            : S.createElement(
                  cn,
                  kf({}, a, {
                      className: Q(
                          'recharts-'
                              .concat(a.axisType, ' ')
                              .concat(a.axisType),
                          a.className
                      ),
                      viewBox: { x: 0, y: 0, width: n, height: i },
                      ticksGenerator: function (u) {
                          return bt(u, !0);
                      },
                  })
              );
    },
    Zr = (function (e) {
        function t() {
            return FN(this, t), UN(this, t, arguments);
        }
        return (
            GN(t, e),
            WN(t, [
                {
                    key: 'render',
                    value: function () {
                        return S.createElement(XN, this.props);
                    },
                },
            ])
        );
    })(S.Component);
Qw(Zr, 'displayName', 'YAxis');
Qw(Zr, 'defaultProps', {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: 'left',
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: 'number',
    padding: { top: 0, bottom: 0 },
    allowDataOverflow: !1,
    scale: 'auto',
    reversed: !1,
});
function $b(e) {
    return QN(e) || JN(e) || ZN(e) || YN();
}
function YN() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZN(e, t) {
    if (e) {
        if (typeof e == 'string') return Rf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return Rf(e, t);
    }
}
function JN(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function QN(e) {
    if (Array.isArray(e)) return Rf(e);
}
function Rf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var Df = function (t, r, n, i, a) {
        var o = Ge(t, Bh),
            u = Ge(t, ho),
            c = [].concat($b(o), $b(u)),
            s = Ge(t, vo),
            f = ''.concat(i, 'Id'),
            l = i[0],
            h = r;
        if (
            (c.length &&
                (h = c.reduce(function (v, d) {
                    if (
                        d.props[f] === n &&
                        lt(d.props, 'extendDomain') &&
                        N(d.props[l])
                    ) {
                        var g = d.props[l];
                        return [Math.min(v[0], g), Math.max(v[1], g)];
                    }
                    return v;
                }, h)),
            s.length)
        ) {
            var p = ''.concat(l, '1'),
                y = ''.concat(l, '2');
            h = s.reduce(function (v, d) {
                if (
                    d.props[f] === n &&
                    lt(d.props, 'extendDomain') &&
                    N(d.props[p]) &&
                    N(d.props[y])
                ) {
                    var g = d.props[p],
                        x = d.props[y];
                    return [Math.min(v[0], g, x), Math.max(v[1], g, x)];
                }
                return v;
            }, h);
        }
        return (
            a &&
                a.length &&
                (h = a.reduce(function (v, d) {
                    return N(d) ? [Math.min(v[0], d), Math.max(v[1], d)] : v;
                }, h)),
            h
        );
    },
    pl = { exports: {} },
    Cb;
function e2() {
    return (
        Cb ||
            ((Cb = 1),
            (function (e) {
                var t = Object.prototype.hasOwnProperty,
                    r = '~';
                function n() {}
                Object.create &&
                    ((n.prototype = Object.create(null)),
                    new n().__proto__ || (r = !1));
                function i(c, s, f) {
                    (this.fn = c), (this.context = s), (this.once = f || !1);
                }
                function a(c, s, f, l, h) {
                    if (typeof f != 'function')
                        throw new TypeError('The listener must be a function');
                    var p = new i(f, l || c, h),
                        y = r ? r + s : s;
                    return (
                        c._events[y]
                            ? c._events[y].fn
                                ? (c._events[y] = [c._events[y], p])
                                : c._events[y].push(p)
                            : ((c._events[y] = p), c._eventsCount++),
                        c
                    );
                }
                function o(c, s) {
                    --c._eventsCount === 0
                        ? (c._events = new n())
                        : delete c._events[s];
                }
                function u() {
                    (this._events = new n()), (this._eventsCount = 0);
                }
                (u.prototype.eventNames = function () {
                    var s = [],
                        f,
                        l;
                    if (this._eventsCount === 0) return s;
                    for (l in (f = this._events))
                        t.call(f, l) && s.push(r ? l.slice(1) : l);
                    return Object.getOwnPropertySymbols
                        ? s.concat(Object.getOwnPropertySymbols(f))
                        : s;
                }),
                    (u.prototype.listeners = function (s) {
                        var f = r ? r + s : s,
                            l = this._events[f];
                        if (!l) return [];
                        if (l.fn) return [l.fn];
                        for (
                            var h = 0, p = l.length, y = new Array(p);
                            h < p;
                            h++
                        )
                            y[h] = l[h].fn;
                        return y;
                    }),
                    (u.prototype.listenerCount = function (s) {
                        var f = r ? r + s : s,
                            l = this._events[f];
                        return l ? (l.fn ? 1 : l.length) : 0;
                    }),
                    (u.prototype.emit = function (s, f, l, h, p, y) {
                        var v = r ? r + s : s;
                        if (!this._events[v]) return !1;
                        var d = this._events[v],
                            g = arguments.length,
                            x,
                            w;
                        if (d.fn) {
                            switch (
                                (d.once &&
                                    this.removeListener(s, d.fn, void 0, !0),
                                g)
                            ) {
                                case 1:
                                    return d.fn.call(d.context), !0;
                                case 2:
                                    return d.fn.call(d.context, f), !0;
                                case 3:
                                    return d.fn.call(d.context, f, l), !0;
                                case 4:
                                    return d.fn.call(d.context, f, l, h), !0;
                                case 5:
                                    return d.fn.call(d.context, f, l, h, p), !0;
                                case 6:
                                    return (
                                        d.fn.call(d.context, f, l, h, p, y), !0
                                    );
                            }
                            for (w = 1, x = new Array(g - 1); w < g; w++)
                                x[w - 1] = arguments[w];
                            d.fn.apply(d.context, x);
                        } else {
                            var O = d.length,
                                m;
                            for (w = 0; w < O; w++)
                                switch (
                                    (d[w].once &&
                                        this.removeListener(
                                            s,
                                            d[w].fn,
                                            void 0,
                                            !0
                                        ),
                                    g)
                                ) {
                                    case 1:
                                        d[w].fn.call(d[w].context);
                                        break;
                                    case 2:
                                        d[w].fn.call(d[w].context, f);
                                        break;
                                    case 3:
                                        d[w].fn.call(d[w].context, f, l);
                                        break;
                                    case 4:
                                        d[w].fn.call(d[w].context, f, l, h);
                                        break;
                                    default:
                                        if (!x)
                                            for (
                                                m = 1, x = new Array(g - 1);
                                                m < g;
                                                m++
                                            )
                                                x[m - 1] = arguments[m];
                                        d[w].fn.apply(d[w].context, x);
                                }
                        }
                        return !0;
                    }),
                    (u.prototype.on = function (s, f, l) {
                        return a(this, s, f, l, !1);
                    }),
                    (u.prototype.once = function (s, f, l) {
                        return a(this, s, f, l, !0);
                    }),
                    (u.prototype.removeListener = function (s, f, l, h) {
                        var p = r ? r + s : s;
                        if (!this._events[p]) return this;
                        if (!f) return o(this, p), this;
                        var y = this._events[p];
                        if (y.fn)
                            y.fn === f &&
                                (!h || y.once) &&
                                (!l || y.context === l) &&
                                o(this, p);
                        else {
                            for (var v = 0, d = [], g = y.length; v < g; v++)
                                (y[v].fn !== f ||
                                    (h && !y[v].once) ||
                                    (l && y[v].context !== l)) &&
                                    d.push(y[v]);
                            d.length
                                ? (this._events[p] = d.length === 1 ? d[0] : d)
                                : o(this, p);
                        }
                        return this;
                    }),
                    (u.prototype.removeAllListeners = function (s) {
                        var f;
                        return (
                            s
                                ? ((f = r ? r + s : s),
                                  this._events[f] && o(this, f))
                                : ((this._events = new n()),
                                  (this._eventsCount = 0)),
                            this
                        );
                    }),
                    (u.prototype.off = u.prototype.removeListener),
                    (u.prototype.addListener = u.prototype.on),
                    (u.prefixed = r),
                    (u.EventEmitter = u),
                    (e.exports = u);
            })(pl)),
        pl.exports
    );
}
var t2 = e2();
const r2 = ce(t2);
var dl = new r2(),
    vl = 'recharts.syncMouseEvents';
function ui(e) {
    '@babel/helpers - typeof';
    return (
        (ui =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ui(e)
    );
}
function n2(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function i2(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, tO(n.key), n);
    }
}
function a2(e, t, r) {
    return (
        t && i2(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function yl(e, t, r) {
    return (
        (t = tO(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function tO(e) {
    var t = o2(e, 'string');
    return ui(t) == 'symbol' ? t : t + '';
}
function o2(e, t) {
    if (ui(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ui(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
}
var u2 = (function () {
    function e() {
        n2(this, e),
            yl(this, 'activeIndex', 0),
            yl(this, 'coordinateList', []),
            yl(this, 'layout', 'horizontal');
    }
    return a2(e, [
        {
            key: 'setDetails',
            value: function (r) {
                var n,
                    i = r.coordinateList,
                    a = i === void 0 ? null : i,
                    o = r.container,
                    u = o === void 0 ? null : o,
                    c = r.layout,
                    s = c === void 0 ? null : c,
                    f = r.offset,
                    l = f === void 0 ? null : f,
                    h = r.mouseHandlerCallback,
                    p = h === void 0 ? null : h;
                (this.coordinateList =
                    (n = a ?? this.coordinateList) !== null && n !== void 0
                        ? n
                        : []),
                    (this.container = u ?? this.container),
                    (this.layout = s ?? this.layout),
                    (this.offset = l ?? this.offset),
                    (this.mouseHandlerCallback =
                        p ?? this.mouseHandlerCallback),
                    (this.activeIndex = Math.min(
                        Math.max(this.activeIndex, 0),
                        this.coordinateList.length - 1
                    ));
            },
        },
        {
            key: 'focus',
            value: function () {
                this.spoofMouse();
            },
        },
        {
            key: 'keyboardEvent',
            value: function (r) {
                if (this.coordinateList.length !== 0)
                    switch (r.key) {
                        case 'ArrowRight': {
                            if (this.layout !== 'horizontal') return;
                            (this.activeIndex = Math.min(
                                this.activeIndex + 1,
                                this.coordinateList.length - 1
                            )),
                                this.spoofMouse();
                            break;
                        }
                        case 'ArrowLeft': {
                            if (this.layout !== 'horizontal') return;
                            (this.activeIndex = Math.max(
                                this.activeIndex - 1,
                                0
                            )),
                                this.spoofMouse();
                            break;
                        }
                    }
            },
        },
        {
            key: 'setIndex',
            value: function (r) {
                this.activeIndex = r;
            },
        },
        {
            key: 'spoofMouse',
            value: function () {
                var r, n;
                if (
                    this.layout === 'horizontal' &&
                    this.coordinateList.length !== 0
                ) {
                    var i = this.container.getBoundingClientRect(),
                        a = i.x,
                        o = i.y,
                        u = i.height,
                        c = this.coordinateList[this.activeIndex].coordinate,
                        s =
                            ((r = window) === null || r === void 0
                                ? void 0
                                : r.scrollX) || 0,
                        f =
                            ((n = window) === null || n === void 0
                                ? void 0
                                : n.scrollY) || 0,
                        l = a + c + s,
                        h = o + this.offset.top + u / 2 + f;
                    this.mouseHandlerCallback({ pageX: l, pageY: h });
                }
            },
        },
    ]);
})();
function c2(e, t, r) {
    if (r === 'number' && t === !0 && Array.isArray(e)) {
        var n = e == null ? void 0 : e[0],
            i = e == null ? void 0 : e[1];
        if (n && i && N(n) && N(i)) return !0;
    }
    return !1;
}
function s2(e, t, r, n) {
    var i = n / 2;
    return {
        stroke: 'none',
        fill: '#ccc',
        x: e === 'horizontal' ? t.x - i : r.left + 0.5,
        y: e === 'horizontal' ? r.top + 0.5 : t.y - i,
        width: e === 'horizontal' ? n : r.width - 1,
        height: e === 'horizontal' ? r.height - 1 : n,
    };
}
function rO(e) {
    var t = e.cx,
        r = e.cy,
        n = e.radius,
        i = e.startAngle,
        a = e.endAngle,
        o = fe(t, r, n, i),
        u = fe(t, r, n, a);
    return {
        points: [o, u],
        cx: t,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: a,
    };
}
function l2(e, t, r) {
    var n, i, a, o;
    if (e === 'horizontal')
        (n = t.x), (a = n), (i = r.top), (o = r.top + r.height);
    else if (e === 'vertical')
        (i = t.y), (o = i), (n = r.left), (a = r.left + r.width);
    else if (t.cx != null && t.cy != null)
        if (e === 'centric') {
            var u = t.cx,
                c = t.cy,
                s = t.innerRadius,
                f = t.outerRadius,
                l = t.angle,
                h = fe(u, c, s, l),
                p = fe(u, c, f, l);
            (n = h.x), (i = h.y), (a = p.x), (o = p.y);
        } else return rO(t);
    return [
        { x: n, y: i },
        { x: a, y: o },
    ];
}
function ci(e) {
    '@babel/helpers - typeof';
    return (
        (ci =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        ci(e)
    );
}
function Ib(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function $i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Ib(Object(r), !0).forEach(function (n) {
                  f2(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ib(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function f2(e, t, r) {
    return (
        (t = h2(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function h2(e) {
    var t = p2(e, 'string');
    return ci(t) == 'symbol' ? t : t + '';
}
function p2(e, t) {
    if (ci(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ci(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function d2(e) {
    var t,
        r,
        n = e.element,
        i = e.tooltipEventType,
        a = e.isActive,
        o = e.activeCoordinate,
        u = e.activePayload,
        c = e.offset,
        s = e.activeTooltipIndex,
        f = e.tooltipAxisBandSize,
        l = e.layout,
        h = e.chartName,
        p =
            (t = n.props.cursor) !== null && t !== void 0
                ? t
                : (r = n.type.defaultProps) === null || r === void 0
                  ? void 0
                  : r.cursor;
    if (!n || !p || !a || !o || (h !== 'ScatterChart' && i !== 'axis'))
        return null;
    var y,
        v = ca;
    if (h === 'ScatterChart') (y = o), (v = RI);
    else if (h === 'BarChart') (y = s2(l, o, c, f)), (v = Ih);
    else if (l === 'radial') {
        var d = rO(o),
            g = d.cx,
            x = d.cy,
            w = d.radius,
            O = d.startAngle,
            m = d.endAngle;
        (y = {
            cx: g,
            cy: x,
            startAngle: O,
            endAngle: m,
            innerRadius: w,
            outerRadius: w,
        }),
            (v = nw);
    } else (y = { points: l2(l, o, c) }), (v = ca);
    var b = $i(
        $i($i($i({ stroke: '#ccc', pointerEvents: 'none' }, c), y), H(p, !1)),
        {},
        {
            payload: u,
            payloadIndex: s,
            className: Q('recharts-tooltip-cursor', p.className),
        }
    );
    return q.isValidElement(p) ? q.cloneElement(p, b) : q.createElement(v, b);
}
var v2 = ['item'],
    y2 = [
        'children',
        'className',
        'width',
        'height',
        'style',
        'compact',
        'title',
        'desc',
    ];
function Jr(e) {
    '@babel/helpers - typeof';
    return (
        (Jr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Jr(e)
    );
}
function Or() {
    return (
        (Or = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        Or.apply(this, arguments)
    );
}
function kb(e, t) {
    return b2(e) || g2(e, t) || iO(e, t) || m2();
}
function m2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g2(e, t) {
    var r =
        e == null
            ? null
            : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
        var n,
            i,
            a,
            o,
            u = [],
            c = !0,
            s = !1;
        try {
            if (((a = (r = r.call(e)).next), t !== 0))
                for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                );
        } catch (f) {
            (s = !0), (i = f);
        } finally {
            try {
                if (
                    !c &&
                    r.return != null &&
                    ((o = r.return()), Object(o) !== o)
                )
                    return;
            } finally {
                if (s) throw i;
            }
        }
        return u;
    }
}
function b2(e) {
    if (Array.isArray(e)) return e;
}
function Rb(e, t) {
    if (e == null) return {};
    var r = x2(e, t),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]),
                !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]);
    }
    return r;
}
function x2(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n];
        }
    return r;
}
function w2(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function O2(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, aO(n.key), n);
    }
}
function _2(e, t, r) {
    return (
        t && O2(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function A2(e, t, r) {
    return (
        (t = $a(t)),
        S2(
            e,
            nO()
                ? Reflect.construct(t, r || [], $a(e).constructor)
                : t.apply(e, r)
        )
    );
}
function S2(e, t) {
    if (t && (Jr(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined'
        );
    return P2(e);
}
function P2(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function nO() {
    try {
        var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch {}
    return (nO = function () {
        return !!e;
    })();
}
function $a(e) {
    return (
        ($a = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        $a(e)
    );
}
function T2(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && Nf(e, t);
}
function Nf(e, t) {
    return (
        (Nf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                  return (n.__proto__ = i), n;
              }),
        Nf(e, t)
    );
}
function Qr(e) {
    return M2(e) || j2(e) || iO(e) || E2();
}
function E2() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iO(e, t) {
    if (e) {
        if (typeof e == 'string') return qf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e);
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return qf(e, t);
    }
}
function j2(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function M2(e) {
    if (Array.isArray(e)) return qf(e);
}
function qf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function Db(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Db(Object(r), !0).forEach(function (n) {
                  K(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Db(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n)
                    );
                });
    }
    return e;
}
function K(e, t, r) {
    return (
        (t = aO(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function aO(e) {
    var t = $2(e, 'string');
    return Jr(t) == 'symbol' ? t : t + '';
}
function $2(e, t) {
    if (Jr(e) != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Jr(n) != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
var C2 = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
    I2 = { width: '100%', height: '100%' },
    oO = { x: 0, y: 0 };
function Ci(e) {
    return e;
}
var k2 = function (t, r) {
        return r === 'horizontal'
            ? t.x
            : r === 'vertical'
              ? t.y
              : r === 'centric'
                ? t.angle
                : t.radius;
    },
    R2 = function (t, r, n, i) {
        var a = r.find(function (f) {
            return f && f.index === n;
        });
        if (a) {
            if (t === 'horizontal') return { x: a.coordinate, y: i.y };
            if (t === 'vertical') return { x: i.x, y: a.coordinate };
            if (t === 'centric') {
                var o = a.coordinate,
                    u = i.radius;
                return I(
                    I(I({}, i), fe(i.cx, i.cy, u, o)),
                    {},
                    { angle: o, radius: u }
                );
            }
            var c = a.coordinate,
                s = i.angle;
            return I(
                I(I({}, i), fe(i.cx, i.cy, c, s)),
                {},
                { angle: s, radius: c }
            );
        }
        return oO;
    },
    yo = function (t, r) {
        var n = r.graphicalItems,
            i = r.dataStartIndex,
            a = r.dataEndIndex,
            o = (n ?? []).reduce(function (u, c) {
                var s = c.props.data;
                return s && s.length ? [].concat(Qr(u), Qr(s)) : u;
            }, []);
        return o.length > 0
            ? o
            : t && t.length && N(i) && N(a)
              ? t.slice(i, a + 1)
              : [];
    };
function uO(e) {
    return e === 'number' ? [0, 'auto'] : void 0;
}
var Lf = function (t, r, n, i) {
        var a = t.graphicalItems,
            o = t.tooltipAxis,
            u = yo(r, t);
        return n < 0 || !a || !a.length || n >= u.length
            ? null
            : a.reduce(function (c, s) {
                  var f,
                      l = (f = s.props.data) !== null && f !== void 0 ? f : r;
                  l &&
                      t.dataStartIndex + t.dataEndIndex !== 0 &&
                      t.dataEndIndex - t.dataStartIndex >= n &&
                      (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
                  var h;
                  if (o.dataKey && !o.allowDuplicatedCategory) {
                      var p = l === void 0 ? u : l;
                      h = ki(p, o.dataKey, i);
                  } else h = (l && l[n]) || u[n];
                  return h ? [].concat(Qr(c), [Zx(s, h)]) : c;
              }, []);
    },
    Nb = function (t, r, n, i) {
        var a = i || { x: t.chartX, y: t.chartY },
            o = k2(a, n),
            u = t.orderedTooltipTicks,
            c = t.tooltipAxis,
            s = t.tooltipTicks,
            f = lM(o, u, s, c);
        if (f >= 0 && s) {
            var l = s[f] && s[f].value,
                h = Lf(t, r, f, l),
                p = R2(n, u, f, a);
            return {
                activeTooltipIndex: f,
                activeLabel: l,
                activePayload: h,
                activeCoordinate: p,
            };
        }
        return null;
    },
    D2 = function (t, r) {
        var n = r.axes,
            i = r.graphicalItems,
            a = r.axisType,
            o = r.axisIdKey,
            u = r.stackGroups,
            c = r.dataStartIndex,
            s = r.dataEndIndex,
            f = t.layout,
            l = t.children,
            h = t.stackOffset,
            p = Hx(f, a);
        return n.reduce(function (y, v) {
            var d,
                g =
                    v.type.defaultProps !== void 0
                        ? I(I({}, v.type.defaultProps), v.props)
                        : v.props,
                x = g.type,
                w = g.dataKey,
                O = g.allowDataOverflow,
                m = g.allowDuplicatedCategory,
                b = g.scale,
                _ = g.ticks,
                A = g.includeHidden,
                T = g[o];
            if (y[T]) return y;
            var M = yo(t.data, {
                    graphicalItems: i.filter(function (z) {
                        var V,
                            he =
                                o in z.props
                                    ? z.props[o]
                                    : (V = z.type.defaultProps) === null ||
                                        V === void 0
                                      ? void 0
                                      : V[o];
                        return he === T;
                    }),
                    dataStartIndex: c,
                    dataEndIndex: s,
                }),
                P = M.length,
                E,
                j,
                C;
            c2(g.domain, O, x) &&
                ((E = Zl(g.domain, null, O)),
                p &&
                    (x === 'number' || b !== 'auto') &&
                    (C = _n(M, w, 'category')));
            var $ = uO(x);
            if (!E || E.length === 0) {
                var k,
                    R = (k = g.domain) !== null && k !== void 0 ? k : $;
                if (w) {
                    if (((E = _n(M, w, x)), x === 'category' && p)) {
                        var L = n_(E);
                        m && L
                            ? ((j = E), (E = ga(0, P)))
                            : m ||
                              (E = Bm(R, E, v).reduce(function (z, V) {
                                  return z.indexOf(V) >= 0
                                      ? z
                                      : [].concat(Qr(z), [V]);
                              }, []));
                    } else if (x === 'category')
                        m
                            ? (E = E.filter(function (z) {
                                  return z !== '' && !Z(z);
                              }))
                            : (E = Bm(R, E, v).reduce(function (z, V) {
                                  return z.indexOf(V) >= 0 || V === '' || Z(V)
                                      ? z
                                      : [].concat(Qr(z), [V]);
                              }, []));
                    else if (x === 'number') {
                        var B = vM(
                            M,
                            i.filter(function (z) {
                                var V,
                                    he,
                                    me =
                                        o in z.props
                                            ? z.props[o]
                                            : (V = z.type.defaultProps) ===
                                                    null || V === void 0
                                              ? void 0
                                              : V[o],
                                    Be =
                                        'hide' in z.props
                                            ? z.props.hide
                                            : (he = z.type.defaultProps) ===
                                                    null || he === void 0
                                              ? void 0
                                              : he.hide;
                                return me === T && (A || !Be);
                            }),
                            w,
                            a,
                            f
                        );
                        B && (E = B);
                    }
                    p &&
                        (x === 'number' || b !== 'auto') &&
                        (C = _n(M, w, 'category'));
                } else
                    p
                        ? (E = ga(0, P))
                        : u && u[T] && u[T].hasStack && x === 'number'
                          ? (E =
                                h === 'expand'
                                    ? [0, 1]
                                    : Yx(u[T].stackGroups, c, s))
                          : (E = Ux(
                                M,
                                i.filter(function (z) {
                                    var V =
                                            o in z.props
                                                ? z.props[o]
                                                : z.type.defaultProps[o],
                                        he =
                                            'hide' in z.props
                                                ? z.props.hide
                                                : z.type.defaultProps.hide;
                                    return V === T && (A || !he);
                                }),
                                x,
                                f,
                                !0
                            ));
                if (x === 'number')
                    (E = Df(l, E, T, a, _)), R && (E = Zl(R, E, O));
                else if (x === 'category' && R) {
                    var U = R,
                        G = E.every(function (z) {
                            return U.indexOf(z) >= 0;
                        });
                    G && (E = U);
                }
            }
            return I(
                I({}, y),
                {},
                K(
                    {},
                    T,
                    I(
                        I({}, g),
                        {},
                        {
                            axisType: a,
                            domain: E,
                            categoricalDomain: C,
                            duplicateDomain: j,
                            originalDomain:
                                (d = g.domain) !== null && d !== void 0 ? d : $,
                            isCategorical: p,
                            layout: f,
                        }
                    )
                )
            );
        }, {});
    },
    N2 = function (t, r) {
        var n = r.graphicalItems,
            i = r.Axis,
            a = r.axisType,
            o = r.axisIdKey,
            u = r.stackGroups,
            c = r.dataStartIndex,
            s = r.dataEndIndex,
            f = t.layout,
            l = t.children,
            h = yo(t.data, {
                graphicalItems: n,
                dataStartIndex: c,
                dataEndIndex: s,
            }),
            p = h.length,
            y = Hx(f, a),
            v = -1;
        return n.reduce(function (d, g) {
            var x =
                    g.type.defaultProps !== void 0
                        ? I(I({}, g.type.defaultProps), g.props)
                        : g.props,
                w = x[o],
                O = uO('number');
            if (!d[w]) {
                v++;
                var m;
                return (
                    y
                        ? (m = ga(0, p))
                        : u && u[w] && u[w].hasStack
                          ? ((m = Yx(u[w].stackGroups, c, s)),
                            (m = Df(l, m, w, a)))
                          : ((m = Zl(
                                O,
                                Ux(
                                    h,
                                    n.filter(function (b) {
                                        var _,
                                            A,
                                            T =
                                                o in b.props
                                                    ? b.props[o]
                                                    : (_ =
                                                            b.type
                                                                .defaultProps) ===
                                                            null || _ === void 0
                                                      ? void 0
                                                      : _[o],
                                            M =
                                                'hide' in b.props
                                                    ? b.props.hide
                                                    : (A =
                                                            b.type
                                                                .defaultProps) ===
                                                            null || A === void 0
                                                      ? void 0
                                                      : A.hide;
                                        return T === w && !M;
                                    }),
                                    'number',
                                    f
                                ),
                                i.defaultProps.allowDataOverflow
                            )),
                            (m = Df(l, m, w, a))),
                    I(
                        I({}, d),
                        {},
                        K(
                            {},
                            w,
                            I(
                                I({ axisType: a }, i.defaultProps),
                                {},
                                {
                                    hide: !0,
                                    orientation: Ke(
                                        C2,
                                        ''.concat(a, '.').concat(v % 2),
                                        null
                                    ),
                                    domain: m,
                                    originalDomain: O,
                                    isCategorical: y,
                                    layout: f,
                                }
                            )
                        )
                    )
                );
            }
            return d;
        }, {});
    },
    q2 = function (t, r) {
        var n = r.axisType,
            i = n === void 0 ? 'xAxis' : n,
            a = r.AxisComp,
            o = r.graphicalItems,
            u = r.stackGroups,
            c = r.dataStartIndex,
            s = r.dataEndIndex,
            f = t.children,
            l = ''.concat(i, 'Id'),
            h = Ge(f, a),
            p = {};
        return (
            h && h.length
                ? (p = D2(t, {
                      axes: h,
                      graphicalItems: o,
                      axisType: i,
                      axisIdKey: l,
                      stackGroups: u,
                      dataStartIndex: c,
                      dataEndIndex: s,
                  }))
                : o &&
                  o.length &&
                  (p = N2(t, {
                      Axis: a,
                      graphicalItems: o,
                      axisType: i,
                      axisIdKey: l,
                      stackGroups: u,
                      dataStartIndex: c,
                      dataEndIndex: s,
                  })),
            p
        );
    },
    L2 = function (t) {
        var r = It(t),
            n = bt(r, !1, !0);
        return {
            tooltipTicks: n,
            orderedTooltipTicks: oh(n, function (i) {
                return i.coordinate;
            }),
            tooltipAxis: r,
            tooltipAxisBandSize: aa(r, n),
        };
    },
    qb = function (t) {
        var r = t.children,
            n = t.defaultShowTooltip,
            i = We(r, Br),
            a = 0,
            o = 0;
        return (
            t.data && t.data.length !== 0 && (o = t.data.length - 1),
            i &&
                i.props &&
                (i.props.startIndex >= 0 && (a = i.props.startIndex),
                i.props.endIndex >= 0 && (o = i.props.endIndex)),
            {
                chartX: 0,
                chartY: 0,
                dataStartIndex: a,
                dataEndIndex: o,
                activeTooltipIndex: -1,
                isTooltipActive: !!n,
            }
        );
    },
    B2 = function (t) {
        return !t || !t.length
            ? !1
            : t.some(function (r) {
                  var n = xt(r && r.type);
                  return n && n.indexOf('Bar') >= 0;
              });
    },
    Lb = function (t) {
        return t === 'horizontal'
            ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
            : t === 'vertical'
              ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
              : t === 'centric'
                ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
                : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
    },
    F2 = function (t, r) {
        var n = t.props,
            i = t.graphicalItems,
            a = t.xAxisMap,
            o = a === void 0 ? {} : a,
            u = t.yAxisMap,
            c = u === void 0 ? {} : u,
            s = n.width,
            f = n.height,
            l = n.children,
            h = n.margin || {},
            p = We(l, Br),
            y = We(l, wt),
            v = Object.keys(c).reduce(
                function (m, b) {
                    var _ = c[b],
                        A = _.orientation;
                    return !_.mirror && !_.hide
                        ? I(I({}, m), {}, K({}, A, m[A] + _.width))
                        : m;
                },
                { left: h.left || 0, right: h.right || 0 }
            ),
            d = Object.keys(o).reduce(
                function (m, b) {
                    var _ = o[b],
                        A = _.orientation;
                    return !_.mirror && !_.hide
                        ? I(
                              I({}, m),
                              {},
                              K({}, A, Ke(m, ''.concat(A)) + _.height)
                          )
                        : m;
                },
                { top: h.top || 0, bottom: h.bottom || 0 }
            ),
            g = I(I({}, d), v),
            x = g.bottom;
        p && (g.bottom += p.props.height || Br.defaultProps.height),
            y && r && (g = pM(g, i, n, r));
        var w = s - g.left - g.right,
            O = f - g.top - g.bottom;
        return I(
            I({ brushBottom: x }, g),
            {},
            { width: Math.max(w, 0), height: Math.max(O, 0) }
        );
    },
    z2 = function (t, r) {
        if (r === 'xAxis') return t[r].width;
        if (r === 'yAxis') return t[r].height;
    },
    Wh = function (t) {
        var r = t.chartName,
            n = t.GraphicalChild,
            i = t.defaultTooltipEventType,
            a = i === void 0 ? 'axis' : i,
            o = t.validateTooltipEventTypes,
            u = o === void 0 ? ['axis'] : o,
            c = t.axisComponents,
            s = t.legendContent,
            f = t.formatAxisMap,
            l = t.defaultProps,
            h = function (g, x) {
                var w = x.graphicalItems,
                    O = x.stackGroups,
                    m = x.offset,
                    b = x.updateId,
                    _ = x.dataStartIndex,
                    A = x.dataEndIndex,
                    T = g.barSize,
                    M = g.layout,
                    P = g.barGap,
                    E = g.barCategoryGap,
                    j = g.maxBarSize,
                    C = Lb(M),
                    $ = C.numericAxisName,
                    k = C.cateAxisName,
                    R = B2(w),
                    L = [];
                return (
                    w.forEach(function (B, U) {
                        var G = yo(g.data, {
                                graphicalItems: [B],
                                dataStartIndex: _,
                                dataEndIndex: A,
                            }),
                            z =
                                B.type.defaultProps !== void 0
                                    ? I(I({}, B.type.defaultProps), B.props)
                                    : B.props,
                            V = z.dataKey,
                            he = z.maxBarSize,
                            me = z[''.concat($, 'Id')],
                            Be = z[''.concat(k, 'Id')],
                            Ft = {},
                            De = c.reduce(function (zt, Wt) {
                                var mo = x[''.concat(Wt.axisType, 'Map')],
                                    Uh = z[''.concat(Wt.axisType, 'Id')];
                                (mo && mo[Uh]) ||
                                    Wt.axisType === 'zAxis' ||
                                    or();
                                var Hh = mo[Uh];
                                return I(
                                    I({}, zt),
                                    {},
                                    K(
                                        K({}, Wt.axisType, Hh),
                                        ''.concat(Wt.axisType, 'Ticks'),
                                        bt(Hh)
                                    )
                                );
                            }, Ft),
                            F = De[k],
                            J = De[''.concat(k, 'Ticks')],
                            ee =
                                O &&
                                O[me] &&
                                O[me].hasStack &&
                                AM(B, O[me].stackGroups),
                            D = xt(B.type).indexOf('Bar') >= 0,
                            ve = aa(F, J),
                            te = [],
                            xe =
                                R &&
                                fM({
                                    barSize: T,
                                    stackGroups: O,
                                    totalSize: z2(De, k),
                                });
                        if (D) {
                            var we,
                                Ne,
                                $t = Z(he) ? j : he,
                                pr =
                                    (we =
                                        (Ne = aa(F, J, !0)) !== null &&
                                        Ne !== void 0
                                            ? Ne
                                            : $t) !== null && we !== void 0
                                        ? we
                                        : 0;
                            (te = hM({
                                barGap: P,
                                barCategoryGap: E,
                                bandSize: pr !== ve ? pr : ve,
                                sizeList: xe[Be],
                                maxBarSize: $t,
                            })),
                                pr !== ve &&
                                    (te = te.map(function (zt) {
                                        return I(
                                            I({}, zt),
                                            {},
                                            {
                                                position: I(
                                                    I({}, zt.position),
                                                    {},
                                                    {
                                                        offset:
                                                            zt.position.offset -
                                                            pr / 2,
                                                    }
                                                ),
                                            }
                                        );
                                    }));
                        }
                        var gi = B && B.type && B.type.getComposedData;
                        gi &&
                            L.push({
                                props: I(
                                    I(
                                        {},
                                        gi(
                                            I(
                                                I({}, De),
                                                {},
                                                {
                                                    displayedData: G,
                                                    props: g,
                                                    dataKey: V,
                                                    item: B,
                                                    bandSize: ve,
                                                    barPosition: te,
                                                    offset: m,
                                                    stackedData: ee,
                                                    layout: M,
                                                    dataStartIndex: _,
                                                    dataEndIndex: A,
                                                }
                                            )
                                        )
                                    ),
                                    {},
                                    K(
                                        K(
                                            K(
                                                {
                                                    key:
                                                        B.key ||
                                                        'item-'.concat(U),
                                                },
                                                $,
                                                De[$]
                                            ),
                                            k,
                                            De[k]
                                        ),
                                        'animationId',
                                        b
                                    )
                                ),
                                childIndex: y_(B, g.children),
                                item: B,
                            });
                    }),
                    L
                );
            },
            p = function (g, x) {
                var w = g.props,
                    O = g.dataStartIndex,
                    m = g.dataEndIndex,
                    b = g.updateId;
                if (!ed({ props: w })) return null;
                var _ = w.children,
                    A = w.layout,
                    T = w.stackOffset,
                    M = w.data,
                    P = w.reverseStackOrder,
                    E = Lb(A),
                    j = E.numericAxisName,
                    C = E.cateAxisName,
                    $ = Ge(_, n),
                    k = OM(M, $, ''.concat(j, 'Id'), ''.concat(C, 'Id'), T, P),
                    R = c.reduce(function (z, V) {
                        var he = ''.concat(V.axisType, 'Map');
                        return I(
                            I({}, z),
                            {},
                            K(
                                {},
                                he,
                                q2(
                                    w,
                                    I(
                                        I({}, V),
                                        {},
                                        {
                                            graphicalItems: $,
                                            stackGroups: V.axisType === j && k,
                                            dataStartIndex: O,
                                            dataEndIndex: m,
                                        }
                                    )
                                )
                            )
                        );
                    }, {}),
                    L = F2(
                        I(I({}, R), {}, { props: w, graphicalItems: $ }),
                        x == null ? void 0 : x.legendBBox
                    );
                Object.keys(R).forEach(function (z) {
                    R[z] = f(w, R[z], L, z.replace('Map', ''), r);
                });
                var B = R[''.concat(C, 'Map')],
                    U = L2(B),
                    G = h(
                        w,
                        I(
                            I({}, R),
                            {},
                            {
                                dataStartIndex: O,
                                dataEndIndex: m,
                                updateId: b,
                                graphicalItems: $,
                                stackGroups: k,
                                offset: L,
                            }
                        )
                    );
                return I(
                    I(
                        {
                            formattedGraphicalItems: G,
                            graphicalItems: $,
                            offset: L,
                            stackGroups: k,
                        },
                        U
                    ),
                    R
                );
            },
            y = (function (d) {
                function g(x) {
                    var w, O, m;
                    return (
                        w2(this, g),
                        (m = A2(this, g, [x])),
                        K(
                            m,
                            'eventEmitterSymbol',
                            Symbol('rechartsEventEmitter')
                        ),
                        K(m, 'accessibilityManager', new u2()),
                        K(m, 'handleLegendBBoxUpdate', function (b) {
                            if (b) {
                                var _ = m.state,
                                    A = _.dataStartIndex,
                                    T = _.dataEndIndex,
                                    M = _.updateId;
                                m.setState(
                                    I(
                                        { legendBBox: b },
                                        p(
                                            {
                                                props: m.props,
                                                dataStartIndex: A,
                                                dataEndIndex: T,
                                                updateId: M,
                                            },
                                            I(
                                                I({}, m.state),
                                                {},
                                                { legendBBox: b }
                                            )
                                        )
                                    )
                                );
                            }
                        }),
                        K(m, 'handleReceiveSyncEvent', function (b, _, A) {
                            if (m.props.syncId === b) {
                                if (
                                    A === m.eventEmitterSymbol &&
                                    typeof m.props.syncMethod != 'function'
                                )
                                    return;
                                m.applySyncEvent(_);
                            }
                        }),
                        K(m, 'handleBrushChange', function (b) {
                            var _ = b.startIndex,
                                A = b.endIndex;
                            if (
                                _ !== m.state.dataStartIndex ||
                                A !== m.state.dataEndIndex
                            ) {
                                var T = m.state.updateId;
                                m.setState(function () {
                                    return I(
                                        { dataStartIndex: _, dataEndIndex: A },
                                        p(
                                            {
                                                props: m.props,
                                                dataStartIndex: _,
                                                dataEndIndex: A,
                                                updateId: T,
                                            },
                                            m.state
                                        )
                                    );
                                }),
                                    m.triggerSyncEvent({
                                        dataStartIndex: _,
                                        dataEndIndex: A,
                                    });
                            }
                        }),
                        K(m, 'handleMouseEnter', function (b) {
                            var _ = m.getMouseInfo(b);
                            if (_) {
                                var A = I(
                                    I({}, _),
                                    {},
                                    { isTooltipActive: !0 }
                                );
                                m.setState(A), m.triggerSyncEvent(A);
                                var T = m.props.onMouseEnter;
                                Y(T) && T(A, b);
                            }
                        }),
                        K(m, 'triggeredAfterMouseMove', function (b) {
                            var _ = m.getMouseInfo(b),
                                A = _
                                    ? I(I({}, _), {}, { isTooltipActive: !0 })
                                    : { isTooltipActive: !1 };
                            m.setState(A), m.triggerSyncEvent(A);
                            var T = m.props.onMouseMove;
                            Y(T) && T(A, b);
                        }),
                        K(m, 'handleItemMouseEnter', function (b) {
                            m.setState(function () {
                                return {
                                    isTooltipActive: !0,
                                    activeItem: b,
                                    activePayload: b.tooltipPayload,
                                    activeCoordinate: b.tooltipPosition || {
                                        x: b.cx,
                                        y: b.cy,
                                    },
                                };
                            });
                        }),
                        K(m, 'handleItemMouseLeave', function () {
                            m.setState(function () {
                                return { isTooltipActive: !1 };
                            });
                        }),
                        K(m, 'handleMouseMove', function (b) {
                            b.persist(), m.throttleTriggeredAfterMouseMove(b);
                        }),
                        K(m, 'handleMouseLeave', function (b) {
                            m.throttleTriggeredAfterMouseMove.cancel();
                            var _ = { isTooltipActive: !1 };
                            m.setState(_), m.triggerSyncEvent(_);
                            var A = m.props.onMouseLeave;
                            Y(A) && A(_, b);
                        }),
                        K(m, 'handleOuterEvent', function (b) {
                            var _ = v_(b),
                                A = Ke(m.props, ''.concat(_));
                            if (_ && Y(A)) {
                                var T, M;
                                /.*touch.*/i.test(_)
                                    ? (M = m.getMouseInfo(b.changedTouches[0]))
                                    : (M = m.getMouseInfo(b)),
                                    A(
                                        (T = M) !== null && T !== void 0
                                            ? T
                                            : {},
                                        b
                                    );
                            }
                        }),
                        K(m, 'handleClick', function (b) {
                            var _ = m.getMouseInfo(b);
                            if (_) {
                                var A = I(
                                    I({}, _),
                                    {},
                                    { isTooltipActive: !0 }
                                );
                                m.setState(A), m.triggerSyncEvent(A);
                                var T = m.props.onClick;
                                Y(T) && T(A, b);
                            }
                        }),
                        K(m, 'handleMouseDown', function (b) {
                            var _ = m.props.onMouseDown;
                            if (Y(_)) {
                                var A = m.getMouseInfo(b);
                                _(A, b);
                            }
                        }),
                        K(m, 'handleMouseUp', function (b) {
                            var _ = m.props.onMouseUp;
                            if (Y(_)) {
                                var A = m.getMouseInfo(b);
                                _(A, b);
                            }
                        }),
                        K(m, 'handleTouchMove', function (b) {
                            b.changedTouches != null &&
                                b.changedTouches.length > 0 &&
                                m.throttleTriggeredAfterMouseMove(
                                    b.changedTouches[0]
                                );
                        }),
                        K(m, 'handleTouchStart', function (b) {
                            b.changedTouches != null &&
                                b.changedTouches.length > 0 &&
                                m.handleMouseDown(b.changedTouches[0]);
                        }),
                        K(m, 'handleTouchEnd', function (b) {
                            b.changedTouches != null &&
                                b.changedTouches.length > 0 &&
                                m.handleMouseUp(b.changedTouches[0]);
                        }),
                        K(m, 'handleDoubleClick', function (b) {
                            var _ = m.props.onDoubleClick;
                            if (Y(_)) {
                                var A = m.getMouseInfo(b);
                                _(A, b);
                            }
                        }),
                        K(m, 'handleContextMenu', function (b) {
                            var _ = m.props.onContextMenu;
                            if (Y(_)) {
                                var A = m.getMouseInfo(b);
                                _(A, b);
                            }
                        }),
                        K(m, 'triggerSyncEvent', function (b) {
                            m.props.syncId !== void 0 &&
                                dl.emit(
                                    vl,
                                    m.props.syncId,
                                    b,
                                    m.eventEmitterSymbol
                                );
                        }),
                        K(m, 'applySyncEvent', function (b) {
                            var _ = m.props,
                                A = _.layout,
                                T = _.syncMethod,
                                M = m.state.updateId,
                                P = b.dataStartIndex,
                                E = b.dataEndIndex;
                            if (
                                b.dataStartIndex !== void 0 ||
                                b.dataEndIndex !== void 0
                            )
                                m.setState(
                                    I(
                                        { dataStartIndex: P, dataEndIndex: E },
                                        p(
                                            {
                                                props: m.props,
                                                dataStartIndex: P,
                                                dataEndIndex: E,
                                                updateId: M,
                                            },
                                            m.state
                                        )
                                    )
                                );
                            else if (b.activeTooltipIndex !== void 0) {
                                var j = b.chartX,
                                    C = b.chartY,
                                    $ = b.activeTooltipIndex,
                                    k = m.state,
                                    R = k.offset,
                                    L = k.tooltipTicks;
                                if (!R) return;
                                if (typeof T == 'function') $ = T(L, b);
                                else if (T === 'value') {
                                    $ = -1;
                                    for (var B = 0; B < L.length; B++)
                                        if (L[B].value === b.activeLabel) {
                                            $ = B;
                                            break;
                                        }
                                }
                                var U = I(
                                        I({}, R),
                                        {},
                                        { x: R.left, y: R.top }
                                    ),
                                    G = Math.min(j, U.x + U.width),
                                    z = Math.min(C, U.y + U.height),
                                    V = L[$] && L[$].value,
                                    he = Lf(m.state, m.props.data, $),
                                    me = L[$]
                                        ? {
                                              x:
                                                  A === 'horizontal'
                                                      ? L[$].coordinate
                                                      : G,
                                              y:
                                                  A === 'horizontal'
                                                      ? z
                                                      : L[$].coordinate,
                                          }
                                        : oO;
                                m.setState(
                                    I(
                                        I({}, b),
                                        {},
                                        {
                                            activeLabel: V,
                                            activeCoordinate: me,
                                            activePayload: he,
                                            activeTooltipIndex: $,
                                        }
                                    )
                                );
                            } else m.setState(b);
                        }),
                        K(m, 'renderCursor', function (b) {
                            var _,
                                A = m.state,
                                T = A.isTooltipActive,
                                M = A.activeCoordinate,
                                P = A.activePayload,
                                E = A.offset,
                                j = A.activeTooltipIndex,
                                C = A.tooltipAxisBandSize,
                                $ = m.getTooltipEventType(),
                                k =
                                    (_ = b.props.active) !== null &&
                                    _ !== void 0
                                        ? _
                                        : T,
                                R = m.props.layout,
                                L = b.key || '_recharts-cursor';
                            return S.createElement(d2, {
                                key: L,
                                activeCoordinate: M,
                                activePayload: P,
                                activeTooltipIndex: j,
                                chartName: r,
                                element: b,
                                isActive: k,
                                layout: R,
                                offset: E,
                                tooltipAxisBandSize: C,
                                tooltipEventType: $,
                            });
                        }),
                        K(m, 'renderPolarAxis', function (b, _, A) {
                            var T = Ke(b, 'type.axisType'),
                                M = Ke(m.state, ''.concat(T, 'Map')),
                                P = b.type.defaultProps,
                                E =
                                    P !== void 0
                                        ? I(I({}, P), b.props)
                                        : b.props,
                                j = M && M[E[''.concat(T, 'Id')]];
                            return q.cloneElement(
                                b,
                                I(
                                    I({}, j),
                                    {},
                                    {
                                        className: Q(T, j.className),
                                        key:
                                            b.key ||
                                            ''.concat(_, '-').concat(A),
                                        ticks: bt(j, !0),
                                    }
                                )
                            );
                        }),
                        K(m, 'renderPolarGrid', function (b) {
                            var _ = b.props,
                                A = _.radialLines,
                                T = _.polarAngles,
                                M = _.polarRadius,
                                P = m.state,
                                E = P.radiusAxisMap,
                                j = P.angleAxisMap,
                                C = It(E),
                                $ = It(j),
                                k = $.cx,
                                R = $.cy,
                                L = $.innerRadius,
                                B = $.outerRadius;
                            return q.cloneElement(b, {
                                polarAngles: Array.isArray(T)
                                    ? T
                                    : bt($, !0).map(function (U) {
                                          return U.coordinate;
                                      }),
                                polarRadius: Array.isArray(M)
                                    ? M
                                    : bt(C, !0).map(function (U) {
                                          return U.coordinate;
                                      }),
                                cx: k,
                                cy: R,
                                innerRadius: L,
                                outerRadius: B,
                                key: b.key || 'polar-grid',
                                radialLines: A,
                            });
                        }),
                        K(m, 'renderLegend', function () {
                            var b = m.state.formattedGraphicalItems,
                                _ = m.props,
                                A = _.children,
                                T = _.width,
                                M = _.height,
                                P = m.props.margin || {},
                                E = T - (P.left || 0) - (P.right || 0),
                                j = zx({
                                    children: A,
                                    formattedGraphicalItems: b,
                                    legendWidth: E,
                                    legendContent: s,
                                });
                            if (!j) return null;
                            var C = j.item,
                                $ = Rb(j, v2);
                            return q.cloneElement(
                                C,
                                I(
                                    I({}, $),
                                    {},
                                    {
                                        chartWidth: T,
                                        chartHeight: M,
                                        margin: P,
                                        onBBoxUpdate: m.handleLegendBBoxUpdate,
                                    }
                                )
                            );
                        }),
                        K(m, 'renderTooltip', function () {
                            var b,
                                _ = m.props,
                                A = _.children,
                                T = _.accessibilityLayer,
                                M = We(A, Ye);
                            if (!M) return null;
                            var P = m.state,
                                E = P.isTooltipActive,
                                j = P.activeCoordinate,
                                C = P.activePayload,
                                $ = P.activeLabel,
                                k = P.offset,
                                R =
                                    (b = M.props.active) !== null &&
                                    b !== void 0
                                        ? b
                                        : E;
                            return q.cloneElement(M, {
                                viewBox: I(
                                    I({}, k),
                                    {},
                                    { x: k.left, y: k.top }
                                ),
                                active: R,
                                label: $,
                                payload: R ? C : [],
                                coordinate: j,
                                accessibilityLayer: T,
                            });
                        }),
                        K(m, 'renderBrush', function (b) {
                            var _ = m.props,
                                A = _.margin,
                                T = _.data,
                                M = m.state,
                                P = M.offset,
                                E = M.dataStartIndex,
                                j = M.dataEndIndex,
                                C = M.updateId;
                            return q.cloneElement(b, {
                                key: b.key || '_recharts-brush',
                                onChange: Ti(
                                    m.handleBrushChange,
                                    b.props.onChange
                                ),
                                data: T,
                                x: N(b.props.x) ? b.props.x : P.left,
                                y: N(b.props.y)
                                    ? b.props.y
                                    : P.top +
                                      P.height +
                                      P.brushBottom -
                                      (A.bottom || 0),
                                width: N(b.props.width)
                                    ? b.props.width
                                    : P.width,
                                startIndex: E,
                                endIndex: j,
                                updateId: 'brush-'.concat(C),
                            });
                        }),
                        K(m, 'renderReferenceElement', function (b, _, A) {
                            if (!b) return null;
                            var T = m,
                                M = T.clipPathId,
                                P = m.state,
                                E = P.xAxisMap,
                                j = P.yAxisMap,
                                C = P.offset,
                                $ = b.type.defaultProps || {},
                                k = b.props,
                                R = k.xAxisId,
                                L = R === void 0 ? $.xAxisId : R,
                                B = k.yAxisId,
                                U = B === void 0 ? $.yAxisId : B;
                            return q.cloneElement(b, {
                                key: b.key || ''.concat(_, '-').concat(A),
                                xAxis: E[L],
                                yAxis: j[U],
                                viewBox: {
                                    x: C.left,
                                    y: C.top,
                                    width: C.width,
                                    height: C.height,
                                },
                                clipPathId: M,
                            });
                        }),
                        K(m, 'renderActivePoints', function (b) {
                            var _ = b.item,
                                A = b.activePoint,
                                T = b.basePoint,
                                M = b.childIndex,
                                P = b.isRange,
                                E = [],
                                j = _.props.key,
                                C =
                                    _.item.type.defaultProps !== void 0
                                        ? I(
                                              I({}, _.item.type.defaultProps),
                                              _.item.props
                                          )
                                        : _.item.props,
                                $ = C.activeDot,
                                k = C.dataKey,
                                R = I(
                                    I(
                                        {
                                            index: M,
                                            dataKey: k,
                                            cx: A.x,
                                            cy: A.y,
                                            r: 4,
                                            fill: Ch(_.item),
                                            strokeWidth: 2,
                                            stroke: '#fff',
                                            payload: A.payload,
                                            value: A.value,
                                        },
                                        H($, !1)
                                    ),
                                    Ri($)
                                );
                            return (
                                E.push(
                                    g.renderActiveDot(
                                        $,
                                        R,
                                        ''.concat(j, '-activePoint-').concat(M)
                                    )
                                ),
                                T
                                    ? E.push(
                                          g.renderActiveDot(
                                              $,
                                              I(
                                                  I({}, R),
                                                  {},
                                                  { cx: T.x, cy: T.y }
                                              ),
                                              ''
                                                  .concat(j, '-basePoint-')
                                                  .concat(M)
                                          )
                                      )
                                    : P && E.push(null),
                                E
                            );
                        }),
                        K(m, 'renderGraphicChild', function (b, _, A) {
                            var T = m.filterFormatItem(b, _, A);
                            if (!T) return null;
                            var M = m.getTooltipEventType(),
                                P = m.state,
                                E = P.isTooltipActive,
                                j = P.tooltipAxis,
                                C = P.activeTooltipIndex,
                                $ = P.activeLabel,
                                k = m.props.children,
                                R = We(k, Ye),
                                L = T.props,
                                B = L.points,
                                U = L.isRange,
                                G = L.baseLine,
                                z =
                                    T.item.type.defaultProps !== void 0
                                        ? I(
                                              I({}, T.item.type.defaultProps),
                                              T.item.props
                                          )
                                        : T.item.props,
                                V = z.activeDot,
                                he = z.hide,
                                me = z.activeBar,
                                Be = z.activeShape,
                                Ft = !!(!he && E && R && (V || me || Be)),
                                De = {};
                            M !== 'axis' && R && R.props.trigger === 'click'
                                ? (De = {
                                      onClick: Ti(
                                          m.handleItemMouseEnter,
                                          b.props.onClick
                                      ),
                                  })
                                : M !== 'axis' &&
                                  (De = {
                                      onMouseLeave: Ti(
                                          m.handleItemMouseLeave,
                                          b.props.onMouseLeave
                                      ),
                                      onMouseEnter: Ti(
                                          m.handleItemMouseEnter,
                                          b.props.onMouseEnter
                                      ),
                                  });
                            var F = q.cloneElement(b, I(I({}, T.props), De));
                            function J(Wt) {
                                return typeof j.dataKey == 'function'
                                    ? j.dataKey(Wt.payload)
                                    : null;
                            }
                            if (Ft)
                                if (C >= 0) {
                                    var ee, D;
                                    if (
                                        j.dataKey &&
                                        !j.allowDuplicatedCategory
                                    ) {
                                        var ve =
                                            typeof j.dataKey == 'function'
                                                ? J
                                                : 'payload.'.concat(
                                                      j.dataKey.toString()
                                                  );
                                        (ee = ki(B, ve, $)),
                                            (D = U && G && ki(G, ve, $));
                                    } else
                                        (ee = B == null ? void 0 : B[C]),
                                            (D = U && G && G[C]);
                                    if (Be || me) {
                                        var te =
                                            b.props.activeIndex !== void 0
                                                ? b.props.activeIndex
                                                : C;
                                        return [
                                            q.cloneElement(
                                                b,
                                                I(
                                                    I(I({}, T.props), De),
                                                    {},
                                                    { activeIndex: te }
                                                )
                                            ),
                                            null,
                                            null,
                                        ];
                                    }
                                    if (!Z(ee))
                                        return [F].concat(
                                            Qr(
                                                m.renderActivePoints({
                                                    item: T,
                                                    activePoint: ee,
                                                    basePoint: D,
                                                    childIndex: C,
                                                    isRange: U,
                                                })
                                            )
                                        );
                                } else {
                                    var xe,
                                        we =
                                            (xe = m.getItemByXY(
                                                m.state.activeCoordinate
                                            )) !== null && xe !== void 0
                                                ? xe
                                                : { graphicalItem: F },
                                        Ne = we.graphicalItem,
                                        $t = Ne.item,
                                        pr = $t === void 0 ? b : $t,
                                        gi = Ne.childIndex,
                                        zt = I(
                                            I(I({}, T.props), De),
                                            {},
                                            { activeIndex: gi }
                                        );
                                    return [q.cloneElement(pr, zt), null, null];
                                }
                            return U ? [F, null, null] : [F, null];
                        }),
                        K(m, 'renderCustomized', function (b, _, A) {
                            return q.cloneElement(
                                b,
                                I(
                                    I(
                                        {
                                            key: 'recharts-customized-'.concat(
                                                A
                                            ),
                                        },
                                        m.props
                                    ),
                                    m.state
                                )
                            );
                        }),
                        K(m, 'renderMap', {
                            CartesianGrid: { handler: Ci, once: !0 },
                            ReferenceArea: {
                                handler: m.renderReferenceElement,
                            },
                            ReferenceLine: { handler: Ci },
                            ReferenceDot: { handler: m.renderReferenceElement },
                            XAxis: { handler: Ci },
                            YAxis: { handler: Ci },
                            Brush: { handler: m.renderBrush, once: !0 },
                            Bar: { handler: m.renderGraphicChild },
                            Line: { handler: m.renderGraphicChild },
                            Area: { handler: m.renderGraphicChild },
                            Radar: { handler: m.renderGraphicChild },
                            RadialBar: { handler: m.renderGraphicChild },
                            Scatter: { handler: m.renderGraphicChild },
                            Pie: { handler: m.renderGraphicChild },
                            Funnel: { handler: m.renderGraphicChild },
                            Tooltip: { handler: m.renderCursor, once: !0 },
                            PolarGrid: { handler: m.renderPolarGrid, once: !0 },
                            PolarAngleAxis: { handler: m.renderPolarAxis },
                            PolarRadiusAxis: { handler: m.renderPolarAxis },
                            Customized: { handler: m.renderCustomized },
                        }),
                        (m.clipPathId = ''.concat(
                            (w = x.id) !== null && w !== void 0
                                ? w
                                : rn('recharts'),
                            '-clip'
                        )),
                        (m.throttleTriggeredAfterMouseMove = F0(
                            m.triggeredAfterMouseMove,
                            (O = x.throttleDelay) !== null && O !== void 0
                                ? O
                                : 1e3 / 60
                        )),
                        (m.state = {}),
                        m
                    );
                }
                return (
                    T2(g, d),
                    _2(g, [
                        {
                            key: 'componentDidMount',
                            value: function () {
                                var w, O;
                                this.addListener(),
                                    this.accessibilityManager.setDetails({
                                        container: this.container,
                                        offset: {
                                            left:
                                                (w = this.props.margin.left) !==
                                                    null && w !== void 0
                                                    ? w
                                                    : 0,
                                            top:
                                                (O = this.props.margin.top) !==
                                                    null && O !== void 0
                                                    ? O
                                                    : 0,
                                        },
                                        coordinateList: this.state.tooltipTicks,
                                        mouseHandlerCallback:
                                            this.triggeredAfterMouseMove,
                                        layout: this.props.layout,
                                    }),
                                    this.displayDefaultTooltip();
                            },
                        },
                        {
                            key: 'displayDefaultTooltip',
                            value: function () {
                                var w = this.props,
                                    O = w.children,
                                    m = w.data,
                                    b = w.height,
                                    _ = w.layout,
                                    A = We(O, Ye);
                                if (A) {
                                    var T = A.props.defaultIndex;
                                    if (
                                        !(
                                            typeof T != 'number' ||
                                            T < 0 ||
                                            T >
                                                this.state.tooltipTicks.length -
                                                    1
                                        )
                                    ) {
                                        var M =
                                                this.state.tooltipTicks[T] &&
                                                this.state.tooltipTicks[T]
                                                    .value,
                                            P = Lf(this.state, m, T, M),
                                            E =
                                                this.state.tooltipTicks[T]
                                                    .coordinate,
                                            j = (this.state.offset.top + b) / 2,
                                            C = _ === 'horizontal',
                                            $ = C
                                                ? { x: E, y: j }
                                                : { y: E, x: j },
                                            k =
                                                this.state.formattedGraphicalItems.find(
                                                    function (L) {
                                                        var B = L.item;
                                                        return (
                                                            B.type.name ===
                                                            'Scatter'
                                                        );
                                                    }
                                                );
                                        k &&
                                            (($ = I(
                                                I({}, $),
                                                k.props.points[T]
                                                    .tooltipPosition
                                            )),
                                            (P =
                                                k.props.points[T]
                                                    .tooltipPayload));
                                        var R = {
                                            activeTooltipIndex: T,
                                            isTooltipActive: !0,
                                            activeLabel: M,
                                            activePayload: P,
                                            activeCoordinate: $,
                                        };
                                        this.setState(R),
                                            this.renderCursor(A),
                                            this.accessibilityManager.setIndex(
                                                T
                                            );
                                    }
                                }
                            },
                        },
                        {
                            key: 'getSnapshotBeforeUpdate',
                            value: function (w, O) {
                                if (!this.props.accessibilityLayer) return null;
                                if (
                                    (this.state.tooltipTicks !==
                                        O.tooltipTicks &&
                                        this.accessibilityManager.setDetails({
                                            coordinateList:
                                                this.state.tooltipTicks,
                                        }),
                                    this.props.layout !== w.layout &&
                                        this.accessibilityManager.setDetails({
                                            layout: this.props.layout,
                                        }),
                                    this.props.margin !== w.margin)
                                ) {
                                    var m, b;
                                    this.accessibilityManager.setDetails({
                                        offset: {
                                            left:
                                                (m = this.props.margin.left) !==
                                                    null && m !== void 0
                                                    ? m
                                                    : 0,
                                            top:
                                                (b = this.props.margin.top) !==
                                                    null && b !== void 0
                                                    ? b
                                                    : 0,
                                        },
                                    });
                                }
                                return null;
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function (w) {
                                bl(
                                    [We(w.children, Ye)],
                                    [We(this.props.children, Ye)]
                                ) || this.displayDefaultTooltip();
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.removeListener(),
                                    this.throttleTriggeredAfterMouseMove.cancel();
                            },
                        },
                        {
                            key: 'getTooltipEventType',
                            value: function () {
                                var w = We(this.props.children, Ye);
                                if (w && typeof w.props.shared == 'boolean') {
                                    var O = w.props.shared ? 'axis' : 'item';
                                    return u.indexOf(O) >= 0 ? O : a;
                                }
                                return a;
                            },
                        },
                        {
                            key: 'getMouseInfo',
                            value: function (w) {
                                if (!this.container) return null;
                                var O = this.container,
                                    m = O.getBoundingClientRect(),
                                    b = rP(m),
                                    _ = {
                                        chartX: Math.round(w.pageX - b.left),
                                        chartY: Math.round(w.pageY - b.top),
                                    },
                                    A = m.width / O.offsetWidth || 1,
                                    T = this.inRange(_.chartX, _.chartY, A);
                                if (!T) return null;
                                var M = this.state,
                                    P = M.xAxisMap,
                                    E = M.yAxisMap,
                                    j = this.getTooltipEventType(),
                                    C = Nb(
                                        this.state,
                                        this.props.data,
                                        this.props.layout,
                                        T
                                    );
                                if (j !== 'axis' && P && E) {
                                    var $ = It(P).scale,
                                        k = It(E).scale,
                                        R =
                                            $ && $.invert
                                                ? $.invert(_.chartX)
                                                : null,
                                        L =
                                            k && k.invert
                                                ? k.invert(_.chartY)
                                                : null;
                                    return I(
                                        I({}, _),
                                        {},
                                        { xValue: R, yValue: L },
                                        C
                                    );
                                }
                                return C ? I(I({}, _), C) : null;
                            },
                        },
                        {
                            key: 'inRange',
                            value: function (w, O) {
                                var m =
                                        arguments.length > 2 &&
                                        arguments[2] !== void 0
                                            ? arguments[2]
                                            : 1,
                                    b = this.props.layout,
                                    _ = w / m,
                                    A = O / m;
                                if (b === 'horizontal' || b === 'vertical') {
                                    var T = this.state.offset,
                                        M =
                                            _ >= T.left &&
                                            _ <= T.left + T.width &&
                                            A >= T.top &&
                                            A <= T.top + T.height;
                                    return M ? { x: _, y: A } : null;
                                }
                                var P = this.state,
                                    E = P.angleAxisMap,
                                    j = P.radiusAxisMap;
                                if (E && j) {
                                    var C = It(E);
                                    return Wm({ x: _, y: A }, C);
                                }
                                return null;
                            },
                        },
                        {
                            key: 'parseEventsOfWrapper',
                            value: function () {
                                var w = this.props.children,
                                    O = this.getTooltipEventType(),
                                    m = We(w, Ye),
                                    b = {};
                                m &&
                                    O === 'axis' &&
                                    (m.props.trigger === 'click'
                                        ? (b = { onClick: this.handleClick })
                                        : (b = {
                                              onMouseEnter:
                                                  this.handleMouseEnter,
                                              onDoubleClick:
                                                  this.handleDoubleClick,
                                              onMouseMove: this.handleMouseMove,
                                              onMouseLeave:
                                                  this.handleMouseLeave,
                                              onTouchMove: this.handleTouchMove,
                                              onTouchStart:
                                                  this.handleTouchStart,
                                              onTouchEnd: this.handleTouchEnd,
                                              onContextMenu:
                                                  this.handleContextMenu,
                                          }));
                                var _ = Ri(this.props, this.handleOuterEvent);
                                return I(I({}, _), b);
                            },
                        },
                        {
                            key: 'addListener',
                            value: function () {
                                dl.on(vl, this.handleReceiveSyncEvent);
                            },
                        },
                        {
                            key: 'removeListener',
                            value: function () {
                                dl.removeListener(
                                    vl,
                                    this.handleReceiveSyncEvent
                                );
                            },
                        },
                        {
                            key: 'filterFormatItem',
                            value: function (w, O, m) {
                                for (
                                    var b = this.state.formattedGraphicalItems,
                                        _ = 0,
                                        A = b.length;
                                    _ < A;
                                    _++
                                ) {
                                    var T = b[_];
                                    if (
                                        T.item === w ||
                                        T.props.key === w.key ||
                                        (O === xt(T.item.type) &&
                                            m === T.childIndex)
                                    )
                                        return T;
                                }
                                return null;
                            },
                        },
                        {
                            key: 'renderClipPath',
                            value: function () {
                                var w = this.clipPathId,
                                    O = this.state.offset,
                                    m = O.left,
                                    b = O.top,
                                    _ = O.height,
                                    A = O.width;
                                return S.createElement(
                                    'defs',
                                    null,
                                    S.createElement(
                                        'clipPath',
                                        { id: w },
                                        S.createElement('rect', {
                                            x: m,
                                            y: b,
                                            height: _,
                                            width: A,
                                        })
                                    )
                                );
                            },
                        },
                        {
                            key: 'getXScales',
                            value: function () {
                                var w = this.state.xAxisMap;
                                return w
                                    ? Object.entries(w).reduce(function (O, m) {
                                          var b = kb(m, 2),
                                              _ = b[0],
                                              A = b[1];
                                          return I(
                                              I({}, O),
                                              {},
                                              K({}, _, A.scale)
                                          );
                                      }, {})
                                    : null;
                            },
                        },
                        {
                            key: 'getYScales',
                            value: function () {
                                var w = this.state.yAxisMap;
                                return w
                                    ? Object.entries(w).reduce(function (O, m) {
                                          var b = kb(m, 2),
                                              _ = b[0],
                                              A = b[1];
                                          return I(
                                              I({}, O),
                                              {},
                                              K({}, _, A.scale)
                                          );
                                      }, {})
                                    : null;
                            },
                        },
                        {
                            key: 'getXScaleByAxisId',
                            value: function (w) {
                                var O;
                                return (O = this.state.xAxisMap) === null ||
                                    O === void 0 ||
                                    (O = O[w]) === null ||
                                    O === void 0
                                    ? void 0
                                    : O.scale;
                            },
                        },
                        {
                            key: 'getYScaleByAxisId',
                            value: function (w) {
                                var O;
                                return (O = this.state.yAxisMap) === null ||
                                    O === void 0 ||
                                    (O = O[w]) === null ||
                                    O === void 0
                                    ? void 0
                                    : O.scale;
                            },
                        },
                        {
                            key: 'getItemByXY',
                            value: function (w) {
                                var O = this.state,
                                    m = O.formattedGraphicalItems,
                                    b = O.activeItem;
                                if (m && m.length)
                                    for (var _ = 0, A = m.length; _ < A; _++) {
                                        var T = m[_],
                                            M = T.props,
                                            P = T.item,
                                            E =
                                                P.type.defaultProps !== void 0
                                                    ? I(
                                                          I(
                                                              {},
                                                              P.type
                                                                  .defaultProps
                                                          ),
                                                          P.props
                                                      )
                                                    : P.props,
                                            j = xt(P.type);
                                        if (j === 'Bar') {
                                            var C = (M.data || []).find(
                                                function (L) {
                                                    return vI(w, L);
                                                }
                                            );
                                            if (C)
                                                return {
                                                    graphicalItem: T,
                                                    payload: C,
                                                };
                                        } else if (j === 'RadialBar') {
                                            var $ = (M.data || []).find(
                                                function (L) {
                                                    return Wm(w, L);
                                                }
                                            );
                                            if ($)
                                                return {
                                                    graphicalItem: T,
                                                    payload: $,
                                                };
                                        } else if (
                                            co(T, b) ||
                                            so(T, b) ||
                                            ri(T, b)
                                        ) {
                                            var k = Lk({
                                                    graphicalItem: T,
                                                    activeTooltipItem: b,
                                                    itemData: E.data,
                                                }),
                                                R =
                                                    E.activeIndex === void 0
                                                        ? k
                                                        : E.activeIndex;
                                            return {
                                                graphicalItem: I(
                                                    I({}, T),
                                                    {},
                                                    { childIndex: R }
                                                ),
                                                payload: ri(T, b)
                                                    ? E.data[k]
                                                    : T.props.data[k],
                                            };
                                        }
                                    }
                                return null;
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var w = this;
                                if (!ed(this)) return null;
                                var O = this.props,
                                    m = O.children,
                                    b = O.className,
                                    _ = O.width,
                                    A = O.height,
                                    T = O.style,
                                    M = O.compact,
                                    P = O.title,
                                    E = O.desc,
                                    j = Rb(O, y2),
                                    C = H(j, !1);
                                if (M)
                                    return S.createElement(
                                        vb,
                                        {
                                            state: this.state,
                                            width: this.props.width,
                                            height: this.props.height,
                                            clipPathId: this.clipPathId,
                                        },
                                        S.createElement(
                                            wl,
                                            Or({}, C, {
                                                width: _,
                                                height: A,
                                                title: P,
                                                desc: E,
                                            }),
                                            this.renderClipPath(),
                                            rd(m, this.renderMap)
                                        )
                                    );
                                if (this.props.accessibilityLayer) {
                                    var $, k;
                                    (C.tabIndex =
                                        ($ = this.props.tabIndex) !== null &&
                                        $ !== void 0
                                            ? $
                                            : 0),
                                        (C.role =
                                            (k = this.props.role) !== null &&
                                            k !== void 0
                                                ? k
                                                : 'application'),
                                        (C.onKeyDown = function (L) {
                                            w.accessibilityManager.keyboardEvent(
                                                L
                                            );
                                        }),
                                        (C.onFocus = function () {
                                            w.accessibilityManager.focus();
                                        });
                                }
                                var R = this.parseEventsOfWrapper();
                                return S.createElement(
                                    vb,
                                    {
                                        state: this.state,
                                        width: this.props.width,
                                        height: this.props.height,
                                        clipPathId: this.clipPathId,
                                    },
                                    S.createElement(
                                        'div',
                                        Or(
                                            {
                                                className: Q(
                                                    'recharts-wrapper',
                                                    b
                                                ),
                                                style: I(
                                                    {
                                                        position: 'relative',
                                                        cursor: 'default',
                                                        width: _,
                                                        height: A,
                                                    },
                                                    T
                                                ),
                                            },
                                            R,
                                            {
                                                ref: function (B) {
                                                    w.container = B;
                                                },
                                            }
                                        ),
                                        S.createElement(
                                            wl,
                                            Or({}, C, {
                                                width: _,
                                                height: A,
                                                title: P,
                                                desc: E,
                                                style: I2,
                                            }),
                                            this.renderClipPath(),
                                            rd(m, this.renderMap)
                                        ),
                                        this.renderLegend(),
                                        this.renderTooltip()
                                    )
                                );
                            },
                        },
                    ])
                );
            })(q.Component);
        K(y, 'displayName', r),
            K(
                y,
                'defaultProps',
                I(
                    {
                        layout: 'horizontal',
                        stackOffset: 'none',
                        barCategoryGap: '10%',
                        barGap: 4,
                        margin: { top: 5, right: 5, bottom: 5, left: 5 },
                        reverseStackOrder: !1,
                        syncMethod: 'index',
                    },
                    l
                )
            ),
            K(y, 'getDerivedStateFromProps', function (d, g) {
                var x = d.dataKey,
                    w = d.data,
                    O = d.children,
                    m = d.width,
                    b = d.height,
                    _ = d.layout,
                    A = d.stackOffset,
                    T = d.margin,
                    M = g.dataStartIndex,
                    P = g.dataEndIndex;
                if (g.updateId === void 0) {
                    var E = qb(d);
                    return I(
                        I(
                            I({}, E),
                            {},
                            { updateId: 0 },
                            p(I(I({ props: d }, E), {}, { updateId: 0 }), g)
                        ),
                        {},
                        {
                            prevDataKey: x,
                            prevData: w,
                            prevWidth: m,
                            prevHeight: b,
                            prevLayout: _,
                            prevStackOffset: A,
                            prevMargin: T,
                            prevChildren: O,
                        }
                    );
                }
                if (
                    x !== g.prevDataKey ||
                    w !== g.prevData ||
                    m !== g.prevWidth ||
                    b !== g.prevHeight ||
                    _ !== g.prevLayout ||
                    A !== g.prevStackOffset ||
                    !_r(T, g.prevMargin)
                ) {
                    var j = qb(d),
                        C = {
                            chartX: g.chartX,
                            chartY: g.chartY,
                            isTooltipActive: g.isTooltipActive,
                        },
                        $ = I(
                            I({}, Nb(g, w, _)),
                            {},
                            { updateId: g.updateId + 1 }
                        ),
                        k = I(I(I({}, j), C), $);
                    return I(
                        I(I({}, k), p(I({ props: d }, k), g)),
                        {},
                        {
                            prevDataKey: x,
                            prevData: w,
                            prevWidth: m,
                            prevHeight: b,
                            prevLayout: _,
                            prevStackOffset: A,
                            prevMargin: T,
                            prevChildren: O,
                        }
                    );
                }
                if (!bl(O, g.prevChildren)) {
                    var R,
                        L,
                        B,
                        U,
                        G = We(O, Br),
                        z =
                            G &&
                            (R =
                                (L = G.props) === null || L === void 0
                                    ? void 0
                                    : L.startIndex) !== null &&
                            R !== void 0
                                ? R
                                : M,
                        V =
                            G &&
                            (B =
                                (U = G.props) === null || U === void 0
                                    ? void 0
                                    : U.endIndex) !== null &&
                            B !== void 0
                                ? B
                                : P,
                        he = z !== M || V !== P,
                        me = !Z(w),
                        Be = me && !he ? g.updateId : g.updateId + 1;
                    return I(
                        I(
                            { updateId: Be },
                            p(
                                I(
                                    I({ props: d }, g),
                                    {},
                                    {
                                        updateId: Be,
                                        dataStartIndex: z,
                                        dataEndIndex: V,
                                    }
                                ),
                                g
                            )
                        ),
                        {},
                        { prevChildren: O, dataStartIndex: z, dataEndIndex: V }
                    );
                }
                return null;
            }),
            K(y, 'renderActiveDot', function (d, g, x) {
                var w;
                return (
                    q.isValidElement(d)
                        ? (w = q.cloneElement(d, g))
                        : Y(d)
                          ? (w = d(g))
                          : (w = S.createElement(no, g)),
                    S.createElement(
                        re,
                        { className: 'recharts-active-dot', key: x },
                        w
                    )
                );
            });
        var v = q.forwardRef(function (g, x) {
            return S.createElement(y, Or({}, g, { ref: x }));
        });
        return (v.displayName = y.displayName), v;
    },
    W2 = Wh({
        chartName: 'LineChart',
        GraphicalChild: Gr,
        axisComponents: [
            { axisType: 'xAxis', AxisComp: Xr },
            { axisType: 'yAxis', AxisComp: Zr },
        ],
        formatAxisMap: Tw,
    }),
    U2 = Wh({
        chartName: 'BarChart',
        GraphicalChild: Dt,
        defaultTooltipEventType: 'axis',
        validateTooltipEventTypes: ['axis', 'item'],
        axisComponents: [
            { axisType: 'xAxis', AxisComp: Xr },
            { axisType: 'yAxis', AxisComp: Zr },
        ],
        formatAxisMap: Tw,
    }),
    H2 = Wh({
        chartName: 'PieChart',
        GraphicalChild: Mt,
        validateTooltipEventTypes: ['item'],
        defaultTooltipEventType: 'item',
        legendContent: 'children',
        axisComponents: [
            { axisType: 'angleAxis', AxisComp: uo },
            { axisType: 'radiusAxis', AxisComp: ao },
        ],
        formatAxisMap: kM,
        defaultProps: {
            layout: 'centric',
            startAngle: 0,
            endAngle: 360,
            cx: '50%',
            cy: '50%',
            innerRadius: 0,
            outerRadius: '80%',
        },
    });
const K2 = [
        { name: 'Jan', inscriptions: 65, engagement: 45 },
        { name: 'Fév', inscriptions: 59, engagement: 52 },
        { name: 'Mar', inscriptions: 80, engagement: 68 },
        { name: 'Avr', inscriptions: 81, engagement: 75 },
        { name: 'Mai', inscriptions: 56, engagement: 62 },
        { name: 'Jun', inscriptions: 95, engagement: 85 },
        { name: 'Jui', inscriptions: 88, engagement: 78 },
        { name: 'Aoû', inscriptions: 92, engagement: 84 },
    ],
    G2 = [
        { name: 'Lun', users: 24, sessions: 35 },
        { name: 'Mar', users: 35, sessions: 42 },
        { name: 'Mer', users: 30, sessions: 38 },
        { name: 'Jeu', users: 45, sessions: 52 },
        { name: 'Ven', users: 56, sessions: 65 },
        { name: 'Sam', users: 40, sessions: 48 },
        { name: 'Dim', users: 31, sessions: 36 },
    ],
    Bb = [
        { name: 'Très satisfait', value: 45 },
        { name: 'Satisfait', value: 30 },
        { name: 'Neutre', value: 15 },
        { name: 'Insatisfait', value: 10 },
    ],
    Fb = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    Z2 = () =>
        X.jsx('div', {
            className: 'swipeFadeUp w-full max-w-[1300px] px-10 py-8',
            children: X.jsxs('div', {
                className: 'p-8',
                children: [
                    X.jsx('div', {
                        className: 'mb-8 grid grid-cols-1 gap-6 md:grid-cols-4',
                        children: [
                            {
                                title: 'Utilisateurs totaux',
                                value: '1,234',
                                icon: X.jsx(vO, {}),
                                color: 'blue',
                            },
                            {
                                title: "Activité aujourd'hui",
                                value: '56',
                                icon: X.jsx(sO, {}),
                                color: 'green',
                            },
                            {
                                title: "Taux d'inscription",
                                value: '+12%',
                                icon: X.jsx(fO, {}),
                                color: 'purple',
                            },
                            {
                                title: 'Temps moyen',
                                value: '24min',
                                icon: X.jsx(pO, {}),
                                color: 'orange',
                            },
                        ].map((e, t) =>
                            X.jsx(
                                'div',
                                {
                                    className:
                                        'rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl',
                                    children: X.jsxs('div', {
                                        className:
                                            'flex items-center justify-between',
                                        children: [
                                            X.jsxs('div', {
                                                children: [
                                                    X.jsx('p', {
                                                        className:
                                                            'text-gray-600',
                                                        children: e.title,
                                                    }),
                                                    X.jsx('p', {
                                                        className:
                                                            'text-3xl font-bold text-gray-800',
                                                        children: e.value,
                                                    }),
                                                ],
                                            }),
                                            X.jsx('div', {
                                                className: `text-${e.color}-500`,
                                                children: e.icon,
                                            }),
                                        ],
                                    }),
                                },
                                t
                            )
                        ),
                    }),
                    X.jsxs('div', {
                        className: 'grid grid-cols-1 gap-6 lg:grid-cols-3',
                        children: [
                            X.jsxs('div', {
                                className:
                                    'rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md lg:col-span-2',
                                children: [
                                    X.jsx('h2', {
                                        className:
                                            'mb-4 text-xl font-semibold text-gray-800',
                                        children:
                                            'Statistiques des inscriptions et engagement',
                                    }),
                                    X.jsx('div', {
                                        className: 'h-80',
                                        children: X.jsx(As, {
                                            width: '100%',
                                            height: '100%',
                                            children: X.jsxs(U2, {
                                                data: K2,
                                                children: [
                                                    X.jsx(Ef, {
                                                        strokeDasharray: '3 3',
                                                        stroke: '#ffffff40',
                                                    }),
                                                    X.jsx(Xr, {
                                                        dataKey: 'name',
                                                    }),
                                                    X.jsx(Zr, {}),
                                                    X.jsx(Ye, {}),
                                                    X.jsx(wt, {}),
                                                    X.jsx(Dt, {
                                                        dataKey: 'inscriptions',
                                                        fill: '#8884d8',
                                                    }),
                                                    X.jsx(Dt, {
                                                        dataKey: 'engagement',
                                                        fill: '#82ca9d',
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            X.jsxs('div', {
                                className:
                                    'rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md',
                                children: [
                                    X.jsx('h2', {
                                        className:
                                            'mb-4 text-xl font-semibold text-gray-800',
                                        children: 'Satisfaction utilisateurs',
                                    }),
                                    X.jsx('div', {
                                        className: 'h-80',
                                        children: X.jsx(As, {
                                            width: '100%',
                                            height: '100%',
                                            children: X.jsxs(H2, {
                                                children: [
                                                    X.jsx(Mt, {
                                                        data: Bb,
                                                        cx: '50%',
                                                        cy: '50%',
                                                        innerRadius: 60,
                                                        outerRadius: 80,
                                                        fill: '#8884d8',
                                                        paddingAngle: 5,
                                                        dataKey: 'value',
                                                        children: Bb.map(
                                                            (e, t) =>
                                                                X.jsx(
                                                                    Ha,
                                                                    {
                                                                        fill: Fb[
                                                                            t %
                                                                                Fb.length
                                                                        ],
                                                                    },
                                                                    `cell-${t}`
                                                                )
                                                        ),
                                                    }),
                                                    X.jsx(Ye, {}),
                                                    X.jsx(wt, {}),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            X.jsxs('div', {
                                className:
                                    'rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md lg:col-span-3',
                                children: [
                                    X.jsx('h2', {
                                        className:
                                            'mb-4 text-xl font-semibold text-gray-800',
                                        children: 'Activité hebdomadaire',
                                    }),
                                    X.jsx('div', {
                                        className: 'h-80',
                                        children: X.jsx(As, {
                                            width: '100%',
                                            height: '100%',
                                            children: X.jsxs(W2, {
                                                data: G2,
                                                children: [
                                                    X.jsx(Ef, {
                                                        strokeDasharray: '3 3',
                                                        stroke: '#ffffff40',
                                                    }),
                                                    X.jsx(Xr, {
                                                        dataKey: 'name',
                                                    }),
                                                    X.jsx(Zr, {}),
                                                    X.jsx(Ye, {}),
                                                    X.jsx(wt, {}),
                                                    X.jsx(Gr, {
                                                        type: 'monotone',
                                                        dataKey: 'users',
                                                        stroke: '#8884d8',
                                                        strokeWidth: 2,
                                                    }),
                                                    X.jsx(Gr, {
                                                        type: 'monotone',
                                                        dataKey: 'sessions',
                                                        stroke: '#82ca9d',
                                                        strokeWidth: 2,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
export { Z2 as default };
