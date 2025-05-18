import {
    r as U,
    x as Ht,
    E as Ot,
    V as wr,
    F as be,
    Q as Tt,
    G as Vn,
    S as ni,
    H as Yt,
    I as qt,
    J as ai,
    K as ii,
    T as xr,
    U as oi,
    W as yr,
    Y as si,
    Z as Xn,
    $ as Re,
    a0 as ze,
    a1 as rt,
    a2 as Ue,
    a3 as Ct,
    a4 as li,
    a5 as st,
    a6 as $e,
    a7 as _r,
    a8 as Xe,
    i as br,
    a9 as Yn,
    aa as Ye,
    ab as qn,
    ac as ci,
    ad as Kn,
    ae as Qn,
    af as Zt,
    ag as ui,
    ah as di,
    ai as or,
    aj as hi,
    ak as fi,
    al as pi,
    am as vi,
    an as gi,
    ao as sr,
    ap as zt,
    aq as mi,
    ar as wi,
    as as Hr,
    at as $n,
    au as xi,
    av as yi,
    aw as _i,
    ax as bi,
    ay as Si,
    az as Ei,
    aA as Mi,
    aB as Zr,
    j as g,
    aC as Ii,
    aD as Ai,
    aE as nt,
    aF as Ci,
    aG as Ri,
    aH as Ti,
    aI as ki,
} from './index-CkKx-SB9.js';
import { _ as Ni, O as Fi, C as Ui } from './OrbitControls-CBEvJJ3c.js';
import { M as Jn } from './index-BBz7iv6X.js';
import { g as We } from './index-D3jsOSc0.js';
import './index-Du4onkjd.js';
function Oi(t, e = 'pointer', n = 'auto', i = document.body) {
    U.useEffect(() => {
        if (t) return (i.style.cursor = e), () => void (i.style.cursor = n);
    }, [t]);
}
const Wr = (t) => {
        let e;
        const n = new Set(),
            i = (d, b) => {
                const _ = typeof d == 'function' ? d(e) : d;
                if (!Object.is(_, e)) {
                    const x = e;
                    (e =
                        (b ?? (typeof _ != 'object' || _ === null))
                            ? _
                            : Object.assign({}, e, _)),
                        n.forEach((k) => k(e, x));
                }
            },
            o = () => e,
            u = {
                setState: i,
                getState: o,
                getInitialState: () => f,
                subscribe: (d) => (n.add(d), () => n.delete(d)),
            },
            f = (e = t(i, o, u));
        return u;
    },
    Di = (t) => (t ? Wr(t) : Wr),
    ji = (t) => t;
function Pi(t, e = ji) {
    const n = Ht.useSyncExternalStore(
        t.subscribe,
        () => e(t.getState()),
        () => e(t.getInitialState())
    );
    return Ht.useDebugValue(n), n;
}
const Vr = (t) => {
        const e = Di(t),
            n = (i) => Pi(e, i);
        return Object.assign(n, e), n;
    },
    ea = (t) => (t ? Vr(t) : Vr);
let pt = 0;
const Li = ea(
        (t) => (
            (Ot.onStart = (e, n, i) => {
                t({
                    active: !0,
                    item: e,
                    loaded: n,
                    total: i,
                    progress: ((n - pt) / (i - pt)) * 100,
                });
            }),
            (Ot.onLoad = () => {
                t({ active: !1 });
            }),
            (Ot.onError = (e) => t((n) => ({ errors: [...n.errors, e] }))),
            (Ot.onProgress = (e, n, i) => {
                n === i && (pt = i),
                    t({
                        active: !0,
                        item: e,
                        loaded: n,
                        total: i,
                        progress: ((n - pt) / (i - pt)) * 100 || 100,
                    });
            }),
            {
                errors: [],
                active: !1,
                progress: 0,
                item: '',
                loaded: 0,
                total: 0,
            }
        )
    ),
    Bi = (t) => `Loading ${t.toFixed(2)}%`;
function zi({
    containerStyles: t,
    innerStyles: e,
    barStyles: n,
    dataStyles: i,
    dataInterpolation: o = Bi,
    initialState: s = (l) => l,
}) {
    const { active: l, progress: u } = Li(),
        f = U.useRef(0),
        d = U.useRef(0),
        b = U.useRef(null),
        [_, x] = U.useState(s(l));
    U.useEffect(() => {
        let F;
        return (
            l !== _ && (F = setTimeout(() => x(l), 300)), () => clearTimeout(F)
        );
    }, [_, l]);
    const k = U.useCallback(() => {
        b.current &&
            ((f.current += (u - f.current) / 2),
            (f.current > 0.95 * u || u === 100) && (f.current = u),
            (b.current.innerText = o(f.current)),
            f.current < u && (d.current = requestAnimationFrame(k)));
    }, [o, u]);
    return (
        U.useEffect(() => (k(), () => cancelAnimationFrame(d.current)), [k]),
        _
            ? U.createElement(
                  'div',
                  { style: { ...Dt.container, opacity: l ? 1 : 0, ...t } },
                  U.createElement(
                      'div',
                      null,
                      U.createElement(
                          'div',
                          { style: { ...Dt.inner, ...e } },
                          U.createElement('div', {
                              style: {
                                  ...Dt.bar,
                                  transform: `scaleX(${u / 100})`,
                                  ...n,
                              },
                          }),
                          U.createElement('span', {
                              ref: b,
                              style: { ...Dt.data, ...i },
                          })
                      )
                  )
              )
            : null
    );
}
const Dt = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#171717',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 300ms ease',
        zIndex: 1e3,
    },
    inner: {
        width: 100,
        height: 3,
        background: '#272727',
        textAlign: 'center',
    },
    bar: {
        height: 3,
        width: '100%',
        background: 'white',
        transition: 'transform 200ms',
        transformOrigin: 'left center',
    },
    data: {
        display: 'inline-block',
        position: 'relative',
        fontVariantNumeric: 'tabular-nums',
        marginTop: '0.8em',
        color: '#f0f0f0',
        fontSize: '0.6em',
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        whiteSpace: 'nowrap',
    },
};
function Mt(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function lr(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
}
function Gi(t, e) {
    if (t) {
        if (typeof t == 'string') return lr(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (n === 'Object' && t.constructor && (n = t.constructor.name),
            n === 'Map' || n === 'Set')
        )
            return Array.from(t);
        if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
            return lr(t, e);
    }
}
function Hi(t) {
    if (Array.isArray(t)) return lr(t);
}
function Zi(t) {
    if (
        (typeof Symbol < 'u' && t[Symbol.iterator] != null) ||
        t['@@iterator'] != null
    )
        return Array.from(t);
}
function Wi() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vi(t) {
    return Hi(t) || Zi(t) || Gi(t) || Wi();
}
new wr();
new wr();
function Xi(t, e, n) {
    return Math.max(e, Math.min(n, t));
}
function Yi(t, e) {
    return Xi(t - Math.floor(t / e) * e, 0, e);
}
function qi(t, e) {
    var n = Yi(e - t, Math.PI * 2);
    return n > Math.PI && (n -= Math.PI * 2), n;
}
function ta(t, e) {
    if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
}
var Ae = function t(e, n, i) {
        var o = this;
        ta(this, t),
            Mt(this, 'dot2', function (s, l) {
                return o.x * s + o.y * l;
            }),
            Mt(this, 'dot3', function (s, l, u) {
                return o.x * s + o.y * l + o.z * u;
            }),
            (this.x = e),
            (this.y = n),
            (this.z = i);
    },
    Ki = [
        new Ae(1, 1, 0),
        new Ae(-1, 1, 0),
        new Ae(1, -1, 0),
        new Ae(-1, -1, 0),
        new Ae(1, 0, 1),
        new Ae(-1, 0, 1),
        new Ae(1, 0, -1),
        new Ae(-1, 0, -1),
        new Ae(0, 1, 1),
        new Ae(0, -1, 1),
        new Ae(0, 1, -1),
        new Ae(0, -1, -1),
    ],
    Xr = [
        151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
        140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
        120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57,
        177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74,
        165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
        60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54,
        65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169,
        200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3,
        64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85,
        212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170,
        213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43,
        172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185,
        112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191,
        179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31,
        181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150,
        254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195,
        78, 66, 215, 61, 156, 180,
    ],
    Yr = new Array(512),
    qr = new Array(512),
    Qi = function (e) {
        e > 0 && e < 1 && (e *= 65536),
            (e = Math.floor(e)),
            e < 256 && (e |= e << 8);
        for (var n = 0; n < 256; n++) {
            var i;
            n & 1 ? (i = Xr[n] ^ (e & 255)) : (i = Xr[n] ^ ((e >> 8) & 255)),
                (Yr[n] = Yr[n + 256] = i),
                (qr[n] = qr[n + 256] = Ki[i % 12]);
        }
    };
Qi(0);
function $i(t) {
    if (typeof t == 'number') t = Math.abs(t);
    else if (typeof t == 'string') {
        var e = t;
        t = 0;
        for (var n = 0; n < e.length; n++)
            t = (t + (n + 1) * (e.charCodeAt(n) % 96)) % 2147483647;
    }
    return t === 0 && (t = 311), t;
}
function Kr(t) {
    var e = $i(t);
    return function () {
        var n = (e * 48271) % 2147483647;
        return (e = n), n / 2147483647;
    };
}
var Ji = function t(e) {
    var n = this;
    ta(this, t),
        Mt(this, 'seed', 0),
        Mt(this, 'init', function (i) {
            (n.seed = i), (n.value = Kr(i));
        }),
        Mt(this, 'value', Kr(this.seed)),
        this.init(e);
};
new Ji(Math.random());
var eo = function (e) {
        var n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : 0.01,
            i =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : 1,
            o =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : 1 / (2 * Math.PI);
        return (
            (i / Math.atan(1 / n)) *
            Math.atan(Math.sin(2 * Math.PI * e * o) / n)
        );
    },
    ra = function (e) {
        return 1 / (1 + e + 0.48 * e * e + 0.235 * e * e * e);
    },
    to = function (e) {
        return e;
    },
    ro = {
        in: function (e) {
            return 1 - Math.cos((e * Math.PI) / 2);
        },
        out: function (e) {
            return Math.sin((e * Math.PI) / 2);
        },
        inOut: function (e) {
            return -(Math.cos(Math.PI * e) - 1) / 2;
        },
    },
    no = {
        in: function (e) {
            return e * e * e;
        },
        out: function (e) {
            return 1 - Math.pow(1 - e, 3);
        },
        inOut: function (e) {
            return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
        },
    },
    ao = {
        in: function (e) {
            return e * e * e * e * e;
        },
        out: function (e) {
            return 1 - Math.pow(1 - e, 5);
        },
        inOut: function (e) {
            return e < 0.5
                ? 16 * e * e * e * e * e
                : 1 - Math.pow(-2 * e + 2, 5) / 2;
        },
    },
    io = {
        in: function (e) {
            return 1 - Math.sqrt(1 - Math.pow(e, 2));
        },
        out: function (e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2));
        },
        inOut: function (e) {
            return e < 0.5
                ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
                : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
        },
    },
    oo = {
        in: function (e) {
            return e * e * e * e;
        },
        out: function (e) {
            return 1 - --e * e * e * e;
        },
        inOut: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
        },
    },
    so = {
        in: function (e) {
            return e === 0 ? 0 : Math.pow(2, 10 * e - 10);
        },
        out: function (e) {
            return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
        },
        inOut: function (e) {
            return e === 0
                ? 0
                : e === 1
                  ? 1
                  : e < 0.5
                    ? Math.pow(2, 20 * e - 10) / 2
                    : (2 - Math.pow(2, -20 * e + 10)) / 2;
        },
    };
function fe(t, e, n) {
    var i =
            arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : 0.25,
        o =
            arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : 0.01,
        s =
            arguments.length > 5 && arguments[5] !== void 0
                ? arguments[5]
                : 1 / 0,
        l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : ra,
        u =
            arguments.length > 7 && arguments[7] !== void 0
                ? arguments[7]
                : 0.001,
        f = 'velocity_' + e;
    if (
        (t.__damp === void 0 && (t.__damp = {}),
        t.__damp[f] === void 0 && (t.__damp[f] = 0),
        Math.abs(t[e] - n) <= u)
    )
        return (t[e] = n), !1;
    i = Math.max(1e-4, i);
    var d = 2 / i,
        b = l(d * o),
        _ = t[e] - n,
        x = n,
        k = s * i;
    (_ = Math.min(Math.max(_, -k), k)), (n = t[e] - _);
    var F = (t.__damp[f] + d * _) * o;
    t.__damp[f] = (t.__damp[f] - d * F) * b;
    var z = n + (_ + F) * b;
    return (
        x - t[e] > 0 == z > x && ((z = x), (t.__damp[f] = (z - x) / o)),
        (t[e] = z),
        !0
    );
}
var lo = function (e) {
        return e && e.isCamera;
    },
    co = function (e) {
        return e && e.isLight;
    },
    vt = new be(),
    Qr = new Tt(),
    $r = new Tt(),
    gt = new Vn(),
    $t = new be();
function uo(t, e, n, i, o, s, l) {
    typeof e == 'number'
        ? vt.setScalar(e)
        : Array.isArray(e)
          ? vt.set(e[0], e[1], e[2])
          : vt.copy(e);
    var u = t.parent;
    t.updateWorldMatrix(!0, !1),
        $t.setFromMatrixPosition(t.matrixWorld),
        lo(t) || co(t) ? gt.lookAt($t, vt, t.up) : gt.lookAt(vt, $t, t.up),
        Wt(t.quaternion, $r.setFromRotationMatrix(gt), n, i, o, s, l),
        u &&
            (gt.extractRotation(u.matrixWorld),
            Qr.setFromRotationMatrix(gt),
            Wt(
                t.quaternion,
                $r.copy(t.quaternion).premultiply(Qr.invert()),
                n,
                i,
                o,
                s,
                l
            ));
}
function at(t, e, n, i, o, s, l, u) {
    return fe(t, e, t[e] + qi(t[e], n), i, o, s, l, u);
}
var mt = new wr(),
    Jr,
    en;
function ho(t, e, n, i, o, s, l) {
    return (
        typeof e == 'number'
            ? mt.setScalar(e)
            : Array.isArray(e)
              ? mt.set(e[0], e[1])
              : mt.copy(e),
        (Jr = fe(t, 'x', mt.x, n, i, o, s, l)),
        (en = fe(t, 'y', mt.y, n, i, o, s, l)),
        Jr || en
    );
}
var et = new be(),
    tn,
    rn,
    nn;
function cr(t, e, n, i, o, s, l) {
    return (
        typeof e == 'number'
            ? et.setScalar(e)
            : Array.isArray(e)
              ? et.set(e[0], e[1], e[2])
              : et.copy(e),
        (tn = fe(t, 'x', et.x, n, i, o, s, l)),
        (rn = fe(t, 'y', et.y, n, i, o, s, l)),
        (nn = fe(t, 'z', et.z, n, i, o, s, l)),
        tn || rn || nn
    );
}
var Qe = new Yt(),
    an,
    on,
    sn,
    ln;
function fo(t, e, n, i, o, s, l) {
    return (
        typeof e == 'number'
            ? Qe.setScalar(e)
            : Array.isArray(e)
              ? Qe.set(e[0], e[1], e[2], e[3])
              : Qe.copy(e),
        (an = fe(t, 'x', Qe.x, n, i, o, s, l)),
        (on = fe(t, 'y', Qe.y, n, i, o, s, l)),
        (sn = fe(t, 'z', Qe.z, n, i, o, s, l)),
        (ln = fe(t, 'w', Qe.w, n, i, o, s, l)),
        an || on || sn || ln
    );
}
var wt = new ai(),
    cn,
    un,
    dn;
function po(t, e, n, i, o, s, l) {
    return (
        Array.isArray(e) ? wt.set(e[0], e[1], e[2], e[3]) : wt.copy(e),
        (cn = at(t, 'x', wt.x, n, i, o, s, l)),
        (un = at(t, 'y', wt.y, n, i, o, s, l)),
        (dn = at(t, 'z', wt.z, n, i, o, s, l)),
        cn || un || dn
    );
}
var tt = new qt(),
    hn,
    fn,
    pn;
function vo(t, e, n, i, o, s, l) {
    return (
        e instanceof qt
            ? tt.copy(e)
            : Array.isArray(e)
              ? tt.setRGB(e[0], e[1], e[2])
              : tt.set(e),
        (hn = fe(t, 'r', tt.r, n, i, o, s, l)),
        (fn = fe(t, 'g', tt.g, n, i, o, s, l)),
        (pn = fe(t, 'b', tt.b, n, i, o, s, l)),
        hn || fn || pn
    );
}
var Te = new Tt(),
    Le = new Yt(),
    vn = new Yt(),
    xt = new Yt(),
    gn,
    mn,
    wn,
    xn;
function Wt(t, e, n, i, o, s, l) {
    var u = t;
    Array.isArray(e) ? Te.set(e[0], e[1], e[2], e[3]) : Te.copy(e);
    var f = t.dot(Te) > 0 ? 1 : -1;
    return (
        (Te.x *= f),
        (Te.y *= f),
        (Te.z *= f),
        (Te.w *= f),
        (gn = fe(t, 'x', Te.x, n, i, o, s, l)),
        (mn = fe(t, 'y', Te.y, n, i, o, s, l)),
        (wn = fe(t, 'z', Te.z, n, i, o, s, l)),
        (xn = fe(t, 'w', Te.w, n, i, o, s, l)),
        Le.set(t.x, t.y, t.z, t.w).normalize(),
        vn.set(
            u.__damp.velocity_x,
            u.__damp.velocity_y,
            u.__damp.velocity_z,
            u.__damp.velocity_w
        ),
        xt.copy(Le).multiplyScalar(vn.dot(Le) / Le.dot(Le)),
        (u.__damp.velocity_x -= xt.x),
        (u.__damp.velocity_y -= xt.y),
        (u.__damp.velocity_z -= xt.z),
        (u.__damp.velocity_w -= xt.w),
        t.set(Le.x, Le.y, Le.z, Le.w),
        gn || mn || wn || xn
    );
}
var yt = new ni(),
    yn,
    _n,
    bn;
function go(t, e, n, i, o, s, l) {
    return (
        Array.isArray(e) ? yt.set(e[0], e[1], e[2]) : yt.copy(e),
        (yn = fe(t, 'radius', yt.radius, n, i, o, s, l)),
        (_n = at(t, 'phi', yt.phi, n, i, o, s, l)),
        (bn = at(t, 'theta', yt.theta, n, i, o, s, l)),
        yn || _n || bn
    );
}
var jt = new Vn(),
    Sn = new be(),
    En = new Tt(),
    Mn = new be(),
    In,
    An,
    Cn;
function mo(t, e, n, i, o, s, l) {
    var u = t;
    return (
        u.__damp === void 0 &&
            ((u.__damp = {
                position: new be(),
                rotation: new Tt(),
                scale: new be(),
            }),
            t.decompose(u.__damp.position, u.__damp.rotation, u.__damp.scale)),
        Array.isArray(e) ? jt.set.apply(jt, Vi(e)) : jt.copy(e),
        jt.decompose(Sn, En, Mn),
        (In = cr(u.__damp.position, Sn, n, i, o, s, l)),
        (An = Wt(u.__damp.rotation, En, n, i, o, s, l)),
        (Cn = cr(u.__damp.scale, Mn, n, i, o, s, l)),
        t.compose(u.__damp.position, u.__damp.rotation, u.__damp.scale),
        In || An || Cn
    );
}
var Rn = Object.freeze({
    __proto__: null,
    rsqw: eo,
    exp: ra,
    linear: to,
    sine: ro,
    cubic: no,
    quint: ao,
    circ: io,
    quart: oo,
    expo: so,
    damp: fe,
    dampLookAt: uo,
    dampAngle: at,
    damp2: ho,
    damp3: cr,
    damp4: fo,
    dampE: po,
    dampC: vo,
    dampQ: Wt,
    dampS: go,
    dampM: mo,
});
const na = parseInt(ii.replace(/\D+/g, ''));
var Ce = Uint8Array,
    qe = Uint16Array,
    ur = Uint32Array,
    aa = new Ce([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0, 0, 0, 0,
    ]),
    ia = new Ce([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    wo = new Ce([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    oa = function (t, e) {
        for (var n = new qe(31), i = 0; i < 31; ++i) n[i] = e += 1 << t[i - 1];
        for (var o = new ur(n[30]), i = 1; i < 30; ++i)
            for (var s = n[i]; s < n[i + 1]; ++s) o[s] = ((s - n[i]) << 5) | i;
        return [n, o];
    },
    sa = oa(aa, 2),
    la = sa[0],
    xo = sa[1];
(la[28] = 258), (xo[258] = 28);
var yo = oa(ia, 0),
    _o = yo[0],
    dr = new qe(32768);
for (var le = 0; le < 32768; ++le) {
    var Ze = ((le & 43690) >>> 1) | ((le & 21845) << 1);
    (Ze = ((Ze & 52428) >>> 2) | ((Ze & 13107) << 2)),
        (Ze = ((Ze & 61680) >>> 4) | ((Ze & 3855) << 4)),
        (dr[le] = (((Ze & 65280) >>> 8) | ((Ze & 255) << 8)) >>> 1);
}
var It = function (t, e, n) {
        for (var i = t.length, o = 0, s = new qe(e); o < i; ++o) ++s[t[o] - 1];
        var l = new qe(e);
        for (o = 0; o < e; ++o) l[o] = (l[o - 1] + s[o - 1]) << 1;
        var u;
        if (n) {
            u = new qe(1 << e);
            var f = 15 - e;
            for (o = 0; o < i; ++o)
                if (t[o])
                    for (
                        var d = (o << 4) | t[o],
                            b = e - t[o],
                            _ = l[t[o] - 1]++ << b,
                            x = _ | ((1 << b) - 1);
                        _ <= x;
                        ++_
                    )
                        u[dr[_] >>> f] = d;
        } else
            for (u = new qe(i), o = 0; o < i; ++o)
                t[o] && (u[o] = dr[l[t[o] - 1]++] >>> (15 - t[o]));
        return u;
    },
    kt = new Ce(288);
for (var le = 0; le < 144; ++le) kt[le] = 8;
for (var le = 144; le < 256; ++le) kt[le] = 9;
for (var le = 256; le < 280; ++le) kt[le] = 7;
for (var le = 280; le < 288; ++le) kt[le] = 8;
var ca = new Ce(32);
for (var le = 0; le < 32; ++le) ca[le] = 5;
var bo = It(kt, 9, 1),
    So = It(ca, 5, 1),
    Jt = function (t) {
        for (var e = t[0], n = 1; n < t.length; ++n) t[n] > e && (e = t[n]);
        return e;
    },
    ke = function (t, e, n) {
        var i = (e / 8) | 0;
        return ((t[i] | (t[i + 1] << 8)) >> (e & 7)) & n;
    },
    er = function (t, e) {
        var n = (e / 8) | 0;
        return (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)) >> (e & 7);
    },
    Eo = function (t) {
        return ((t / 8) | 0) + (t & 7 && 1);
    },
    Mo = function (t, e, n) {
        (n == null || n > t.length) && (n = t.length);
        var i = new (t instanceof qe ? qe : t instanceof ur ? ur : Ce)(n - e);
        return i.set(t.subarray(e, n)), i;
    },
    Io = function (t, e, n) {
        var i = t.length;
        if (!i || (n && !n.l && i < 5)) return e || new Ce(0);
        var o = !e || n,
            s = !n || n.i;
        n || (n = {}), e || (e = new Ce(i * 3));
        var l = function (re) {
                var De = e.length;
                if (re > De) {
                    var je = new Ce(Math.max(De * 2, re));
                    je.set(e), (e = je);
                }
            },
            u = n.f || 0,
            f = n.p || 0,
            d = n.b || 0,
            b = n.l,
            _ = n.d,
            x = n.m,
            k = n.n,
            F = i * 8;
        do {
            if (!b) {
                n.f = u = ke(t, f, 1);
                var z = ke(t, f + 1, 3);
                if (((f += 3), z))
                    if (z == 1) (b = bo), (_ = So), (x = 9), (k = 5);
                    else if (z == 2) {
                        var W = ke(t, f, 31) + 257,
                            J = ke(t, f + 10, 15) + 4,
                            q = W + ke(t, f + 5, 31) + 1;
                        f += 14;
                        for (
                            var L = new Ce(q), y = new Ce(19), m = 0;
                            m < J;
                            ++m
                        )
                            y[wo[m]] = ke(t, f + m * 3, 7);
                        f += J * 3;
                        for (
                            var w = Jt(y),
                                C = (1 << w) - 1,
                                N = It(y, w, 1),
                                m = 0;
                            m < q;

                        ) {
                            var R = N[ke(t, f, C)];
                            f += R & 15;
                            var H = R >>> 4;
                            if (H < 16) L[m++] = H;
                            else {
                                var B = 0,
                                    D = 0;
                                for (
                                    H == 16
                                        ? ((D = 3 + ke(t, f, 3)),
                                          (f += 2),
                                          (B = L[m - 1]))
                                        : H == 17
                                          ? ((D = 3 + ke(t, f, 7)), (f += 3))
                                          : H == 18 &&
                                            ((D = 11 + ke(t, f, 127)),
                                            (f += 7));
                                    D--;

                                )
                                    L[m++] = B;
                            }
                        }
                        var K = L.subarray(0, W),
                            G = L.subarray(W);
                        (x = Jt(K)),
                            (k = Jt(G)),
                            (b = It(K, x, 1)),
                            (_ = It(G, k, 1));
                    } else throw 'invalid block type';
                else {
                    var H = Eo(f) + 4,
                        X = t[H - 4] | (t[H - 3] << 8),
                        Y = H + X;
                    if (Y > i) {
                        if (s) throw 'unexpected EOF';
                        break;
                    }
                    o && l(d + X),
                        e.set(t.subarray(H, Y), d),
                        (n.b = d += X),
                        (n.p = f = Y * 8);
                    continue;
                }
                if (f > F) {
                    if (s) throw 'unexpected EOF';
                    break;
                }
            }
            o && l(d + 131072);
            for (var $ = (1 << x) - 1, Se = (1 << k) - 1, we = f; ; we = f) {
                var B = b[er(t, f) & $],
                    te = B >>> 4;
                if (((f += B & 15), f > F)) {
                    if (s) throw 'unexpected EOF';
                    break;
                }
                if (!B) throw 'invalid length/literal';
                if (te < 256) e[d++] = te;
                else if (te == 256) {
                    (we = f), (b = null);
                    break;
                } else {
                    var Ge = te - 254;
                    if (te > 264) {
                        var m = te - 257,
                            ce = aa[m];
                        (Ge = ke(t, f, (1 << ce) - 1) + la[m]), (f += ce);
                    }
                    var ve = _[er(t, f) & Se],
                        Ne = ve >>> 4;
                    if (!ve) throw 'invalid distance';
                    f += ve & 15;
                    var G = _o[Ne];
                    if (Ne > 3) {
                        var ce = ia[Ne];
                        (G += er(t, f) & ((1 << ce) - 1)), (f += ce);
                    }
                    if (f > F) {
                        if (s) throw 'unexpected EOF';
                        break;
                    }
                    o && l(d + 131072);
                    for (var lt = d + Ge; d < lt; d += 4)
                        (e[d] = e[d - G]),
                            (e[d + 1] = e[d + 1 - G]),
                            (e[d + 2] = e[d + 2 - G]),
                            (e[d + 3] = e[d + 3 - G]);
                    d = lt;
                }
            }
            (n.l = b),
                (n.p = we),
                (n.b = d),
                b && ((u = 1), (n.m = x), (n.d = _), (n.n = k));
        } while (!u);
        return d == e.length ? e : Mo(e, 0, d);
    },
    Ao = new Ce(0),
    Co = function (t) {
        if ((t[0] & 15) != 8 || t[0] >>> 4 > 7 || ((t[0] << 8) | t[1]) % 31)
            throw 'invalid zlib data';
        if (t[1] & 32)
            throw 'invalid zlib data: preset dictionaries not supported';
    };
function Pt(t, e) {
    return Io((Co(t), t.subarray(2, -4)), e);
}
var Ro = typeof TextDecoder < 'u' && new TextDecoder(),
    To = 0;
try {
    Ro.decode(Ao, { stream: !0 }), (To = 1);
} catch {}
const ko = (t) => t && t.isCubeTexture;
class No extends xr {
    constructor(e, n) {
        var i, o;
        const s = ko(e),
            u =
                ((o = s
                    ? (i = e.image[0]) == null
                        ? void 0
                        : i.width
                    : e.image.width) != null
                    ? o
                    : 1024) / 4,
            f = Math.floor(Math.log2(u)),
            d = Math.pow(2, f),
            b = 3 * Math.max(d, 16 * 7),
            _ = 4 * d,
            x = [
                s ? '#define ENVMAP_TYPE_CUBE' : '',
                `#define CUBEUV_TEXEL_WIDTH ${1 / b}`,
                `#define CUBEUV_TEXEL_HEIGHT ${1 / _}`,
                `#define CUBEUV_MAX_MIP ${f}.0`,
            ],
            k = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,
            F =
                x.join(`
`) +
                `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${na >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
        }
        `,
            z = {
                map: { value: e },
                height: { value: (n == null ? void 0 : n.height) || 15 },
                radius: { value: (n == null ? void 0 : n.radius) || 100 },
            },
            H = new oi(1, 16),
            X = new yr({
                uniforms: z,
                fragmentShader: F,
                vertexShader: k,
                side: si,
            });
        super(H, X);
    }
    set radius(e) {
        this.material.uniforms.radius.value = e;
    }
    get radius() {
        return this.material.uniforms.radius.value;
    }
    set height(e) {
        this.material.uniforms.height.value = e;
    }
    get height() {
        return this.material.uniforms.height.value;
    }
}
class Fo extends Xn {
    constructor(e) {
        super(e), (this.type = Re);
    }
    parse(e) {
        const l = function (m, w) {
                switch (m) {
                    case 1:
                        throw new Error(
                            'THREE.RGBELoader: Read Error: ' + (w || '')
                        );
                    case 2:
                        throw new Error(
                            'THREE.RGBELoader: Write Error: ' + (w || '')
                        );
                    case 3:
                        throw new Error(
                            'THREE.RGBELoader: Bad File Format: ' + (w || '')
                        );
                    default:
                    case 4:
                        throw new Error(
                            'THREE.RGBELoader: Memory Error: ' + (w || '')
                        );
                }
            },
            b = `
`,
            _ = function (m, w, C) {
                w = w || 1024;
                let R = m.pos,
                    B = -1,
                    D = 0,
                    K = '',
                    G = String.fromCharCode.apply(
                        null,
                        new Uint16Array(m.subarray(R, R + 128))
                    );
                for (; 0 > (B = G.indexOf(b)) && D < w && R < m.byteLength; )
                    (K += G),
                        (D += G.length),
                        (R += 128),
                        (G += String.fromCharCode.apply(
                            null,
                            new Uint16Array(m.subarray(R, R + 128))
                        ));
                return -1 < B ? ((m.pos += D + B + 1), K + G.slice(0, B)) : !1;
            },
            x = function (m) {
                const w = /^#\?(\S+)/,
                    C = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                    N = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                    R = /^\s*FORMAT=(\S+)\s*$/,
                    B = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                    D = {
                        valid: 0,
                        string: '',
                        comments: '',
                        programtype: 'RGBE',
                        format: '',
                        gamma: 1,
                        exposure: 1,
                        width: 0,
                        height: 0,
                    };
                let K, G;
                for (
                    (m.pos >= m.byteLength || !(K = _(m))) &&
                        l(1, 'no header found'),
                        (G = K.match(w)) || l(3, 'bad initial token'),
                        D.valid |= 1,
                        D.programtype = G[1],
                        D.string +=
                            K +
                            `
`;
                    (K = _(m)), K !== !1;

                ) {
                    if (
                        ((D.string +=
                            K +
                            `
`),
                        K.charAt(0) === '#')
                    ) {
                        D.comments +=
                            K +
                            `
`;
                        continue;
                    }
                    if (
                        ((G = K.match(C)) && (D.gamma = parseFloat(G[1])),
                        (G = K.match(N)) && (D.exposure = parseFloat(G[1])),
                        (G = K.match(R)) && ((D.valid |= 2), (D.format = G[1])),
                        (G = K.match(B)) &&
                            ((D.valid |= 4),
                            (D.height = parseInt(G[1], 10)),
                            (D.width = parseInt(G[2], 10))),
                        D.valid & 2 && D.valid & 4)
                    )
                        break;
                }
                return (
                    D.valid & 2 || l(3, 'missing format specifier'),
                    D.valid & 4 || l(3, 'missing image size specifier'),
                    D
                );
            },
            k = function (m, w, C) {
                const N = w;
                if (
                    N < 8 ||
                    N > 32767 ||
                    m[0] !== 2 ||
                    m[1] !== 2 ||
                    m[2] & 128
                )
                    return new Uint8Array(m);
                N !== ((m[2] << 8) | m[3]) && l(3, 'wrong scanline width');
                const R = new Uint8Array(4 * w * C);
                R.length || l(4, 'unable to allocate buffer space');
                let B = 0,
                    D = 0;
                const K = 4 * N,
                    G = new Uint8Array(4),
                    $ = new Uint8Array(K);
                let Se = C;
                for (; Se > 0 && D < m.byteLength; ) {
                    D + 4 > m.byteLength && l(1),
                        (G[0] = m[D++]),
                        (G[1] = m[D++]),
                        (G[2] = m[D++]),
                        (G[3] = m[D++]),
                        (G[0] != 2 || G[1] != 2 || ((G[2] << 8) | G[3]) != N) &&
                            l(3, 'bad rgbe scanline format');
                    let we = 0,
                        te;
                    for (; we < K && D < m.byteLength; ) {
                        te = m[D++];
                        const ce = te > 128;
                        if (
                            (ce && (te -= 128),
                            (te === 0 || we + te > K) &&
                                l(3, 'bad scanline data'),
                            ce)
                        ) {
                            const ve = m[D++];
                            for (let Ne = 0; Ne < te; Ne++) $[we++] = ve;
                        } else
                            $.set(m.subarray(D, D + te), we),
                                (we += te),
                                (D += te);
                    }
                    const Ge = N;
                    for (let ce = 0; ce < Ge; ce++) {
                        let ve = 0;
                        (R[B] = $[ce + ve]),
                            (ve += N),
                            (R[B + 1] = $[ce + ve]),
                            (ve += N),
                            (R[B + 2] = $[ce + ve]),
                            (ve += N),
                            (R[B + 3] = $[ce + ve]),
                            (B += 4);
                    }
                    Se--;
                }
                return R;
            },
            F = function (m, w, C, N) {
                const R = m[w + 3],
                    B = Math.pow(2, R - 128) / 255;
                (C[N + 0] = m[w + 0] * B),
                    (C[N + 1] = m[w + 1] * B),
                    (C[N + 2] = m[w + 2] * B),
                    (C[N + 3] = 1);
            },
            z = function (m, w, C, N) {
                const R = m[w + 3],
                    B = Math.pow(2, R - 128) / 255;
                (C[N + 0] = rt.toHalfFloat(Math.min(m[w + 0] * B, 65504))),
                    (C[N + 1] = rt.toHalfFloat(Math.min(m[w + 1] * B, 65504))),
                    (C[N + 2] = rt.toHalfFloat(Math.min(m[w + 2] * B, 65504))),
                    (C[N + 3] = rt.toHalfFloat(1));
            },
            H = new Uint8Array(e);
        H.pos = 0;
        const X = x(H),
            Y = X.width,
            W = X.height,
            J = k(H.subarray(H.pos), Y, W);
        let q, L, y;
        switch (this.type) {
            case ze:
                y = J.length / 4;
                const m = new Float32Array(y * 4);
                for (let C = 0; C < y; C++) F(J, C * 4, m, C * 4);
                (q = m), (L = ze);
                break;
            case Re:
                y = J.length / 4;
                const w = new Uint16Array(y * 4);
                for (let C = 0; C < y; C++) z(J, C * 4, w, C * 4);
                (q = w), (L = Re);
                break;
            default:
                throw new Error(
                    'THREE.RGBELoader: Unsupported type: ' + this.type
                );
        }
        return {
            width: Y,
            height: W,
            data: q,
            header: X.string,
            gamma: X.gamma,
            exposure: X.exposure,
            type: L,
        };
    }
    setDataType(e) {
        return (this.type = e), this;
    }
    load(e, n, i, o) {
        function s(l, u) {
            switch (l.type) {
                case ze:
                case Re:
                    'colorSpace' in l
                        ? (l.colorSpace = 'srgb-linear')
                        : (l.encoding = 3e3),
                        (l.minFilter = Ue),
                        (l.magFilter = Ue),
                        (l.generateMipmaps = !1),
                        (l.flipY = !0);
                    break;
            }
            n && n(l, u);
        }
        return super.load(e, s, i, o);
    }
}
const _t = na >= 152;
class Uo extends Xn {
    constructor(e) {
        super(e), (this.type = Re);
    }
    parse(e) {
        const w = Math.pow(2.7182818, 2.2);
        function C(r, a) {
            for (var c = 0, h = 0; h < 65536; ++h)
                (h == 0 || r[h >> 3] & (1 << (h & 7))) && (a[c++] = h);
            for (var p = c - 1; c < 65536; ) a[c++] = 0;
            return p;
        }
        function N(r) {
            for (var a = 0; a < 16384; a++)
                (r[a] = {}), (r[a].len = 0), (r[a].lit = 0), (r[a].p = null);
        }
        const R = { l: 0, c: 0, lc: 0 };
        function B(r, a, c, h, p) {
            for (; c < r; ) (a = (a << 8) | zr(h, p)), (c += 8);
            (c -= r), (R.l = (a >> c) & ((1 << r) - 1)), (R.c = a), (R.lc = c);
        }
        const D = new Array(59);
        function K(r) {
            for (var a = 0; a <= 58; ++a) D[a] = 0;
            for (var a = 0; a < 65537; ++a) D[r[a]] += 1;
            for (var c = 0, a = 58; a > 0; --a) {
                var h = (c + D[a]) >> 1;
                (D[a] = c), (c = h);
            }
            for (var a = 0; a < 65537; ++a) {
                var p = r[a];
                p > 0 && (r[a] = p | (D[p]++ << 6));
            }
        }
        function G(r, a, c, h, p, v, E) {
            for (var S = c, A = 0, I = 0; p <= v; p++) {
                if (S.value - c.value > h) return !1;
                B(6, A, I, r, S);
                var T = R.l;
                if (((A = R.c), (I = R.lc), (E[p] = T), T == 63)) {
                    if (S.value - c.value > h)
                        throw 'Something wrong with hufUnpackEncTable';
                    B(8, A, I, r, S);
                    var M = R.l + 6;
                    if (((A = R.c), (I = R.lc), p + M > v + 1))
                        throw 'Something wrong with hufUnpackEncTable';
                    for (; M--; ) E[p++] = 0;
                    p--;
                } else if (T >= 59) {
                    var M = T - 59 + 2;
                    if (p + M > v + 1)
                        throw 'Something wrong with hufUnpackEncTable';
                    for (; M--; ) E[p++] = 0;
                    p--;
                }
            }
            K(E);
        }
        function $(r) {
            return r & 63;
        }
        function Se(r) {
            return r >> 6;
        }
        function we(r, a, c, h) {
            for (; a <= c; a++) {
                var p = Se(r[a]),
                    v = $(r[a]);
                if (p >> v) throw 'Invalid table entry';
                if (v > 14) {
                    var E = h[p >> (v - 14)];
                    if (E.len) throw 'Invalid table entry';
                    if ((E.lit++, E.p)) {
                        var S = E.p;
                        E.p = new Array(E.lit);
                        for (var A = 0; A < E.lit - 1; ++A) E.p[A] = S[A];
                    } else E.p = new Array(1);
                    E.p[E.lit - 1] = a;
                } else if (v)
                    for (var I = 0, A = 1 << (14 - v); A > 0; A--) {
                        var E = h[(p << (14 - v)) + I];
                        if (E.len || E.p) throw 'Invalid table entry';
                        (E.len = v), (E.lit = a), I++;
                    }
            }
            return !0;
        }
        const te = { c: 0, lc: 0 };
        function Ge(r, a, c, h) {
            (r = (r << 8) | zr(c, h)), (a += 8), (te.c = r), (te.lc = a);
        }
        const ce = { c: 0, lc: 0 };
        function ve(r, a, c, h, p, v, E, S, A, I) {
            if (r == a) {
                h < 8 && (Ge(c, h, p, E), (c = te.c), (h = te.lc)), (h -= 8);
                var T = c >> h,
                    T = new Uint8Array([T])[0];
                if (A.value + T > I) return !1;
                for (var M = S[A.value - 1]; T-- > 0; ) S[A.value++] = M;
            } else if (A.value < I) S[A.value++] = r;
            else return !1;
            (ce.c = c), (ce.lc = h);
        }
        function Ne(r) {
            return r & 65535;
        }
        function lt(r) {
            var a = Ne(r);
            return a > 32767 ? a - 65536 : a;
        }
        const re = { a: 0, b: 0 };
        function De(r, a) {
            var c = lt(r),
                h = lt(a),
                p = h,
                v = c + (p & 1) + (p >> 1),
                E = v,
                S = v - p;
            (re.a = E), (re.b = S);
        }
        function je(r, a) {
            var c = Ne(r),
                h = Ne(a),
                p = (c - (h >> 1)) & 65535,
                v = (h + p - 32768) & 65535;
            (re.a = v), (re.b = p);
        }
        function Aa(r, a, c, h, p, v, E) {
            for (var S = E < 16384, A = c > p ? p : c, I = 1, T; I <= A; )
                I <<= 1;
            for (I >>= 1, T = I, I >>= 1; I >= 1; ) {
                for (
                    var M = 0,
                        de = M + v * (p - T),
                        j = v * I,
                        P = v * T,
                        Z = h * I,
                        V = h * T,
                        ne,
                        ie,
                        he,
                        xe;
                    M <= de;
                    M += P
                ) {
                    for (var oe = M, Fe = M + h * (c - T); oe <= Fe; oe += V) {
                        var se = oe + Z,
                            pe = oe + j,
                            Pe = pe + Z;
                        S
                            ? (De(r[oe + a], r[pe + a]),
                              (ne = re.a),
                              (he = re.b),
                              De(r[se + a], r[Pe + a]),
                              (ie = re.a),
                              (xe = re.b),
                              De(ne, ie),
                              (r[oe + a] = re.a),
                              (r[se + a] = re.b),
                              De(he, xe),
                              (r[pe + a] = re.a),
                              (r[Pe + a] = re.b))
                            : (je(r[oe + a], r[pe + a]),
                              (ne = re.a),
                              (he = re.b),
                              je(r[se + a], r[Pe + a]),
                              (ie = re.a),
                              (xe = re.b),
                              je(ne, ie),
                              (r[oe + a] = re.a),
                              (r[se + a] = re.b),
                              je(he, xe),
                              (r[pe + a] = re.a),
                              (r[Pe + a] = re.b));
                    }
                    if (c & I) {
                        var pe = oe + j;
                        S ? De(r[oe + a], r[pe + a]) : je(r[oe + a], r[pe + a]),
                            (ne = re.a),
                            (r[pe + a] = re.b),
                            (r[oe + a] = ne);
                    }
                }
                if (p & I)
                    for (var oe = M, Fe = M + h * (c - T); oe <= Fe; oe += V) {
                        var se = oe + Z;
                        S ? De(r[oe + a], r[se + a]) : je(r[oe + a], r[se + a]),
                            (ne = re.a),
                            (r[se + a] = re.b),
                            (r[oe + a] = ne);
                    }
                (T = I), (I >>= 1);
            }
            return M;
        }
        function Ca(r, a, c, h, p, v, E, S, A, I) {
            for (
                var T = 0, M = 0, de = S, j = Math.trunc(p.value + (v + 7) / 8);
                p.value < j;

            )
                for (Ge(T, M, c, p), T = te.c, M = te.lc; M >= 14; ) {
                    var P = (T >> (M - 14)) & 16383,
                        Z = a[P];
                    if (Z.len)
                        (M -= Z.len),
                            ve(Z.lit, E, T, M, c, h, p, A, I, de),
                            (T = ce.c),
                            (M = ce.lc);
                    else {
                        if (!Z.p) throw 'hufDecode issues';
                        var V;
                        for (V = 0; V < Z.lit; V++) {
                            for (var ne = $(r[Z.p[V]]); M < ne && p.value < j; )
                                Ge(T, M, c, p), (T = te.c), (M = te.lc);
                            if (
                                M >= ne &&
                                Se(r[Z.p[V]]) ==
                                    ((T >> (M - ne)) & ((1 << ne) - 1))
                            ) {
                                (M -= ne),
                                    ve(Z.p[V], E, T, M, c, h, p, A, I, de),
                                    (T = ce.c),
                                    (M = ce.lc);
                                break;
                            }
                        }
                        if (V == Z.lit) throw 'hufDecode issues';
                    }
                }
            var ie = (8 - v) & 7;
            for (T >>= ie, M -= ie; M > 0; ) {
                var Z = a[(T << (14 - M)) & 16383];
                if (Z.len)
                    (M -= Z.len),
                        ve(Z.lit, E, T, M, c, h, p, A, I, de),
                        (T = ce.c),
                        (M = ce.lc);
                else throw 'hufDecode issues';
            }
            return !0;
        }
        function Or(r, a, c, h, p, v) {
            var E = { value: 0 },
                S = c.value,
                A = ye(a, c),
                I = ye(a, c);
            c.value += 4;
            var T = ye(a, c);
            if (((c.value += 4), A < 0 || A >= 65537 || I < 0 || I >= 65537))
                throw 'Something wrong with HUF_ENCSIZE';
            var M = new Array(65537),
                de = new Array(16384);
            N(de);
            var j = h - (c.value - S);
            if ((G(r, a, c, j, A, I, M), T > 8 * (h - (c.value - S))))
                throw 'Something wrong with hufUncompress';
            we(M, A, I, de), Ca(M, de, r, a, c, T, I, v, p, E);
        }
        function Ra(r, a, c) {
            for (var h = 0; h < c; ++h) a[h] = r[a[h]];
        }
        function Dr(r) {
            for (var a = 1; a < r.length; a++) {
                var c = r[a - 1] + r[a] - 128;
                r[a] = c;
            }
        }
        function jr(r, a) {
            for (
                var c = 0,
                    h = Math.floor((r.length + 1) / 2),
                    p = 0,
                    v = r.length - 1;
                !(p > v || ((a[p++] = r[c++]), p > v));

            )
                a[p++] = r[h++];
        }
        function Pr(r) {
            for (
                var a = r.byteLength,
                    c = new Array(),
                    h = 0,
                    p = new DataView(r);
                a > 0;

            ) {
                var v = p.getInt8(h++);
                if (v < 0) {
                    var E = -v;
                    a -= E + 1;
                    for (var S = 0; S < E; S++) c.push(p.getUint8(h++));
                } else {
                    var E = v;
                    a -= 2;
                    for (var A = p.getUint8(h++), S = 0; S < E + 1; S++)
                        c.push(A);
                }
            }
            return c;
        }
        function Ta(r, a, c, h, p, v) {
            var se = new DataView(v.buffer),
                E = c[r.idx[0]].width,
                S = c[r.idx[0]].height,
                A = 3,
                I = Math.floor(E / 8),
                T = Math.ceil(E / 8),
                M = Math.ceil(S / 8),
                de = E - (T - 1) * 8,
                j = S - (M - 1) * 8,
                P = { value: 0 },
                Z = new Array(A),
                V = new Array(A),
                ne = new Array(A),
                ie = new Array(A),
                he = new Array(A);
            for (let ae = 0; ae < A; ++ae)
                (he[ae] = a[r.idx[ae]]),
                    (Z[ae] = ae < 1 ? 0 : Z[ae - 1] + T * M),
                    (V[ae] = new Float32Array(64)),
                    (ne[ae] = new Uint16Array(64)),
                    (ie[ae] = new Uint16Array(T * 64));
            for (let ae = 0; ae < M; ++ae) {
                var xe = 8;
                ae == M - 1 && (xe = j);
                var oe = 8;
                for (let ue = 0; ue < T; ++ue) {
                    ue == T - 1 && (oe = de);
                    for (let ee = 0; ee < A; ++ee)
                        ne[ee].fill(0),
                            (ne[ee][0] = p[Z[ee]++]),
                            ka(P, h, ne[ee]),
                            Na(ne[ee], V[ee]),
                            Fa(V[ee]);
                    Ua(V);
                    for (let ee = 0; ee < A; ++ee) Oa(V[ee], ie[ee], ue * 64);
                }
                let me = 0;
                for (let ue = 0; ue < A; ++ue) {
                    const ee = c[r.idx[ue]].type;
                    for (let Ie = 8 * ae; Ie < 8 * ae + xe; ++Ie) {
                        me = he[ue][Ie];
                        for (let Ke = 0; Ke < I; ++Ke) {
                            const _e = Ke * 64 + (Ie & 7) * 8;
                            se.setUint16(me + 0 * 2 * ee, ie[ue][_e + 0], !0),
                                se.setUint16(
                                    me + 1 * 2 * ee,
                                    ie[ue][_e + 1],
                                    !0
                                ),
                                se.setUint16(
                                    me + 2 * 2 * ee,
                                    ie[ue][_e + 2],
                                    !0
                                ),
                                se.setUint16(
                                    me + 3 * 2 * ee,
                                    ie[ue][_e + 3],
                                    !0
                                ),
                                se.setUint16(
                                    me + 4 * 2 * ee,
                                    ie[ue][_e + 4],
                                    !0
                                ),
                                se.setUint16(
                                    me + 5 * 2 * ee,
                                    ie[ue][_e + 5],
                                    !0
                                ),
                                se.setUint16(
                                    me + 6 * 2 * ee,
                                    ie[ue][_e + 6],
                                    !0
                                ),
                                se.setUint16(
                                    me + 7 * 2 * ee,
                                    ie[ue][_e + 7],
                                    !0
                                ),
                                (me += 8 * 2 * ee);
                        }
                    }
                    if (I != T)
                        for (let Ie = 8 * ae; Ie < 8 * ae + xe; ++Ie) {
                            const Ke = he[ue][Ie] + 8 * I * 2 * ee,
                                _e = I * 64 + (Ie & 7) * 8;
                            for (let He = 0; He < oe; ++He)
                                se.setUint16(
                                    Ke + He * 2 * ee,
                                    ie[ue][_e + He],
                                    !0
                                );
                        }
                }
            }
            for (
                var Fe = new Uint16Array(E),
                    se = new DataView(v.buffer),
                    pe = 0;
                pe < A;
                ++pe
            ) {
                c[r.idx[pe]].decoded = !0;
                var Pe = c[r.idx[pe]].type;
                if (c[pe].type == 2)
                    for (var ft = 0; ft < S; ++ft) {
                        const ae = he[pe][ft];
                        for (var Me = 0; Me < E; ++Me)
                            Fe[Me] = se.getUint16(ae + Me * 2 * Pe, !0);
                        for (var Me = 0; Me < E; ++Me)
                            se.setFloat32(ae + Me * 2 * Pe, O(Fe[Me]), !0);
                    }
            }
        }
        function ka(r, a, c) {
            for (var h, p = 1; p < 64; )
                (h = a[r.value]),
                    h == 65280
                        ? (p = 64)
                        : h >> 8 == 255
                          ? (p += h & 255)
                          : ((c[p] = h), p++),
                    r.value++;
        }
        function Na(r, a) {
            (a[0] = O(r[0])),
                (a[1] = O(r[1])),
                (a[2] = O(r[5])),
                (a[3] = O(r[6])),
                (a[4] = O(r[14])),
                (a[5] = O(r[15])),
                (a[6] = O(r[27])),
                (a[7] = O(r[28])),
                (a[8] = O(r[2])),
                (a[9] = O(r[4])),
                (a[10] = O(r[7])),
                (a[11] = O(r[13])),
                (a[12] = O(r[16])),
                (a[13] = O(r[26])),
                (a[14] = O(r[29])),
                (a[15] = O(r[42])),
                (a[16] = O(r[3])),
                (a[17] = O(r[8])),
                (a[18] = O(r[12])),
                (a[19] = O(r[17])),
                (a[20] = O(r[25])),
                (a[21] = O(r[30])),
                (a[22] = O(r[41])),
                (a[23] = O(r[43])),
                (a[24] = O(r[9])),
                (a[25] = O(r[11])),
                (a[26] = O(r[18])),
                (a[27] = O(r[24])),
                (a[28] = O(r[31])),
                (a[29] = O(r[40])),
                (a[30] = O(r[44])),
                (a[31] = O(r[53])),
                (a[32] = O(r[10])),
                (a[33] = O(r[19])),
                (a[34] = O(r[23])),
                (a[35] = O(r[32])),
                (a[36] = O(r[39])),
                (a[37] = O(r[45])),
                (a[38] = O(r[52])),
                (a[39] = O(r[54])),
                (a[40] = O(r[20])),
                (a[41] = O(r[22])),
                (a[42] = O(r[33])),
                (a[43] = O(r[38])),
                (a[44] = O(r[46])),
                (a[45] = O(r[51])),
                (a[46] = O(r[55])),
                (a[47] = O(r[60])),
                (a[48] = O(r[21])),
                (a[49] = O(r[34])),
                (a[50] = O(r[37])),
                (a[51] = O(r[47])),
                (a[52] = O(r[50])),
                (a[53] = O(r[56])),
                (a[54] = O(r[59])),
                (a[55] = O(r[61])),
                (a[56] = O(r[35])),
                (a[57] = O(r[36])),
                (a[58] = O(r[48])),
                (a[59] = O(r[49])),
                (a[60] = O(r[57])),
                (a[61] = O(r[58])),
                (a[62] = O(r[62])),
                (a[63] = O(r[63]));
        }
        function Fa(r) {
            const a = 0.5 * Math.cos(0.7853975),
                c = 0.5 * Math.cos(3.14159 / 16),
                h = 0.5 * Math.cos(3.14159 / 8),
                p = 0.5 * Math.cos((3 * 3.14159) / 16),
                v = 0.5 * Math.cos((5 * 3.14159) / 16),
                E = 0.5 * Math.cos((3 * 3.14159) / 8),
                S = 0.5 * Math.cos((7 * 3.14159) / 16);
            for (
                var A = new Array(4),
                    I = new Array(4),
                    T = new Array(4),
                    M = new Array(4),
                    de = 0;
                de < 8;
                ++de
            ) {
                var j = de * 8;
                (A[0] = h * r[j + 2]),
                    (A[1] = E * r[j + 2]),
                    (A[2] = h * r[j + 6]),
                    (A[3] = E * r[j + 6]),
                    (I[0] =
                        c * r[j + 1] +
                        p * r[j + 3] +
                        v * r[j + 5] +
                        S * r[j + 7]),
                    (I[1] =
                        p * r[j + 1] -
                        S * r[j + 3] -
                        c * r[j + 5] -
                        v * r[j + 7]),
                    (I[2] =
                        v * r[j + 1] -
                        c * r[j + 3] +
                        S * r[j + 5] +
                        p * r[j + 7]),
                    (I[3] =
                        S * r[j + 1] -
                        v * r[j + 3] +
                        p * r[j + 5] -
                        c * r[j + 7]),
                    (T[0] = a * (r[j + 0] + r[j + 4])),
                    (T[3] = a * (r[j + 0] - r[j + 4])),
                    (T[1] = A[0] + A[3]),
                    (T[2] = A[1] - A[2]),
                    (M[0] = T[0] + T[1]),
                    (M[1] = T[3] + T[2]),
                    (M[2] = T[3] - T[2]),
                    (M[3] = T[0] - T[1]),
                    (r[j + 0] = M[0] + I[0]),
                    (r[j + 1] = M[1] + I[1]),
                    (r[j + 2] = M[2] + I[2]),
                    (r[j + 3] = M[3] + I[3]),
                    (r[j + 4] = M[3] - I[3]),
                    (r[j + 5] = M[2] - I[2]),
                    (r[j + 6] = M[1] - I[1]),
                    (r[j + 7] = M[0] - I[0]);
            }
            for (var P = 0; P < 8; ++P)
                (A[0] = h * r[16 + P]),
                    (A[1] = E * r[16 + P]),
                    (A[2] = h * r[48 + P]),
                    (A[3] = E * r[48 + P]),
                    (I[0] =
                        c * r[8 + P] +
                        p * r[24 + P] +
                        v * r[40 + P] +
                        S * r[56 + P]),
                    (I[1] =
                        p * r[8 + P] -
                        S * r[24 + P] -
                        c * r[40 + P] -
                        v * r[56 + P]),
                    (I[2] =
                        v * r[8 + P] -
                        c * r[24 + P] +
                        S * r[40 + P] +
                        p * r[56 + P]),
                    (I[3] =
                        S * r[8 + P] -
                        v * r[24 + P] +
                        p * r[40 + P] -
                        c * r[56 + P]),
                    (T[0] = a * (r[P] + r[32 + P])),
                    (T[3] = a * (r[P] - r[32 + P])),
                    (T[1] = A[0] + A[3]),
                    (T[2] = A[1] - A[2]),
                    (M[0] = T[0] + T[1]),
                    (M[1] = T[3] + T[2]),
                    (M[2] = T[3] - T[2]),
                    (M[3] = T[0] - T[1]),
                    (r[0 + P] = M[0] + I[0]),
                    (r[8 + P] = M[1] + I[1]),
                    (r[16 + P] = M[2] + I[2]),
                    (r[24 + P] = M[3] + I[3]),
                    (r[32 + P] = M[3] - I[3]),
                    (r[40 + P] = M[2] - I[2]),
                    (r[48 + P] = M[1] - I[1]),
                    (r[56 + P] = M[0] - I[0]);
        }
        function Ua(r) {
            for (var a = 0; a < 64; ++a) {
                var c = r[0][a],
                    h = r[1][a],
                    p = r[2][a];
                (r[0][a] = c + 1.5747 * p),
                    (r[1][a] = c - 0.1873 * h - 0.4682 * p),
                    (r[2][a] = c + 1.8556 * h);
            }
        }
        function Oa(r, a, c) {
            for (var h = 0; h < 64; ++h) a[c + h] = rt.toHalfFloat(Da(r[h]));
        }
        function Da(r) {
            return r <= 1
                ? Math.sign(r) * Math.pow(Math.abs(r), 2.2)
                : Math.sign(r) * Math.pow(w, Math.abs(r) - 1);
        }
        function Lr(r) {
            return new DataView(r.array.buffer, r.offset.value, r.size);
        }
        function ja(r) {
            var a = r.viewer.buffer.slice(
                    r.offset.value,
                    r.offset.value + r.size
                ),
                c = new Uint8Array(Pr(a)),
                h = new Uint8Array(c.length);
            return Dr(c), jr(c, h), new DataView(h.buffer);
        }
        function Qt(r) {
            var a = r.array.slice(r.offset.value, r.offset.value + r.size),
                c = Pt(a),
                h = new Uint8Array(c.length);
            return Dr(c), jr(c, h), new DataView(h.buffer);
        }
        function Pa(r) {
            for (
                var a = r.viewer,
                    c = { value: r.offset.value },
                    h = new Uint16Array(
                        r.width * r.scanlineBlockSize * (r.channels * r.type)
                    ),
                    p = new Uint8Array(8192),
                    v = 0,
                    E = new Array(r.channels),
                    S = 0;
                S < r.channels;
                S++
            )
                (E[S] = {}),
                    (E[S].start = v),
                    (E[S].end = E[S].start),
                    (E[S].nx = r.width),
                    (E[S].ny = r.lines),
                    (E[S].size = r.type),
                    (v += E[S].nx * E[S].ny * E[S].size);
            var A = ut(a, c),
                I = ut(a, c);
            if (I >= 8192)
                throw 'Something is wrong with PIZ_COMPRESSION BITMAP_SIZE';
            if (A <= I) for (var S = 0; S < I - A + 1; S++) p[S + A] = Je(a, c);
            var T = new Uint16Array(65536),
                M = C(p, T),
                de = ye(a, c);
            Or(r.array, a, c, de, h, v);
            for (var S = 0; S < r.channels; ++S)
                for (var j = E[S], P = 0; P < E[S].size; ++P)
                    Aa(h, j.start + P, j.nx, j.size, j.ny, j.nx * j.size, M);
            Ra(T, h, v);
            for (
                var Z = 0, V = new Uint8Array(h.buffer.byteLength), ne = 0;
                ne < r.lines;
                ne++
            )
                for (var ie = 0; ie < r.channels; ie++) {
                    var j = E[ie],
                        he = j.nx * j.size,
                        xe = new Uint8Array(h.buffer, j.end * 2, he * 2);
                    V.set(xe, Z), (Z += he * 2), (j.end += he);
                }
            return new DataView(V.buffer);
        }
        function La(r) {
            var a = r.array.slice(r.offset.value, r.offset.value + r.size),
                c = Pt(a);
            const h = r.lines * r.channels * r.width,
                p = r.type == 1 ? new Uint16Array(h) : new Uint32Array(h);
            let v = 0,
                E = 0;
            const S = new Array(4);
            for (let A = 0; A < r.lines; A++)
                for (let I = 0; I < r.channels; I++) {
                    let T = 0;
                    switch (r.type) {
                        case 1:
                            (S[0] = v),
                                (S[1] = S[0] + r.width),
                                (v = S[1] + r.width);
                            for (let M = 0; M < r.width; ++M) {
                                const de = (c[S[0]++] << 8) | c[S[1]++];
                                (T += de), (p[E] = T), E++;
                            }
                            break;
                        case 2:
                            (S[0] = v),
                                (S[1] = S[0] + r.width),
                                (S[2] = S[1] + r.width),
                                (v = S[2] + r.width);
                            for (let M = 0; M < r.width; ++M) {
                                const de =
                                    (c[S[0]++] << 24) |
                                    (c[S[1]++] << 16) |
                                    (c[S[2]++] << 8);
                                (T += de), (p[E] = T), E++;
                            }
                            break;
                    }
                }
            return new DataView(p.buffer);
        }
        function Br(r) {
            var a = r.viewer,
                c = { value: r.offset.value },
                h = new Uint8Array(
                    r.width * r.lines * (r.channels * r.type * 2)
                ),
                p = {
                    version: Ee(a, c),
                    unknownUncompressedSize: Ee(a, c),
                    unknownCompressedSize: Ee(a, c),
                    acCompressedSize: Ee(a, c),
                    dcCompressedSize: Ee(a, c),
                    rleCompressedSize: Ee(a, c),
                    rleUncompressedSize: Ee(a, c),
                    rleRawSize: Ee(a, c),
                    totalAcUncompressedCount: Ee(a, c),
                    totalDcUncompressedCount: Ee(a, c),
                    acCompression: Ee(a, c),
                };
            if (p.version < 2)
                throw (
                    'EXRLoader.parse: ' +
                    ht.compression +
                    ' version ' +
                    p.version +
                    ' is unsupported'
                );
            for (var v = new Array(), E = ut(a, c) - 2; E > 0; ) {
                var S = Ft(a.buffer, c),
                    A = Je(a, c),
                    I = (A >> 2) & 3,
                    T = (A >> 4) - 1,
                    M = new Int8Array([T])[0],
                    de = Je(a, c);
                v.push({ name: S, index: M, type: de, compression: I }),
                    (E -= S.length + 3);
            }
            for (
                var j = ht.channels, P = new Array(r.channels), Z = 0;
                Z < r.channels;
                ++Z
            ) {
                var V = (P[Z] = {}),
                    ne = j[Z];
                (V.name = ne.name),
                    (V.compression = 0),
                    (V.decoded = !1),
                    (V.type = ne.pixelType),
                    (V.pLinear = ne.pLinear),
                    (V.width = r.width),
                    (V.height = r.lines);
            }
            for (var ie = { idx: new Array(3) }, he = 0; he < r.channels; ++he)
                for (var V = P[he], Z = 0; Z < v.length; ++Z) {
                    var xe = v[Z];
                    V.name == xe.name &&
                        ((V.compression = xe.compression),
                        xe.index >= 0 && (ie.idx[xe.index] = he),
                        (V.offset = he));
                }
            if (p.acCompressedSize > 0)
                switch (p.acCompression) {
                    case 0:
                        var se = new Uint16Array(p.totalAcUncompressedCount);
                        Or(
                            r.array,
                            a,
                            c,
                            p.acCompressedSize,
                            se,
                            p.totalAcUncompressedCount
                        );
                        break;
                    case 1:
                        var oe = r.array.slice(
                                c.value,
                                c.value + p.totalAcUncompressedCount
                            ),
                            Fe = Pt(oe),
                            se = new Uint16Array(Fe.buffer);
                        c.value += p.totalAcUncompressedCount;
                        break;
                }
            if (p.dcCompressedSize > 0) {
                var pe = {
                        array: r.array,
                        offset: c,
                        size: p.dcCompressedSize,
                    },
                    Pe = new Uint16Array(Qt(pe).buffer);
                c.value += p.dcCompressedSize;
            }
            if (p.rleRawSize > 0) {
                var oe = r.array.slice(c.value, c.value + p.rleCompressedSize),
                    Fe = Pt(oe),
                    ft = Pr(Fe.buffer);
                c.value += p.rleCompressedSize;
            }
            for (
                var Me = 0, ae = new Array(P.length), Z = 0;
                Z < ae.length;
                ++Z
            )
                ae[Z] = new Array();
            for (var me = 0; me < r.lines; ++me)
                for (var ue = 0; ue < P.length; ++ue)
                    ae[ue].push(Me), (Me += P[ue].width * r.type * 2);
            Ta(ie, ae, P, se, Pe, h);
            for (var Z = 0; Z < P.length; ++Z) {
                var V = P[Z];
                if (!V.decoded)
                    switch (V.compression) {
                        case 2:
                            for (
                                var ee = 0, Ie = 0, me = 0;
                                me < r.lines;
                                ++me
                            ) {
                                for (
                                    var Ke = ae[Z][ee], _e = 0;
                                    _e < V.width;
                                    ++_e
                                ) {
                                    for (var He = 0; He < 2 * V.type; ++He)
                                        h[Ke++] =
                                            ft[Ie + He * V.width * V.height];
                                    Ie++;
                                }
                                ee++;
                            }
                            break;
                        case 1:
                        default:
                            throw 'EXRLoader.parse: unsupported channel compression';
                    }
            }
            return new DataView(h.buffer);
        }
        function Ft(r, a) {
            for (var c = new Uint8Array(r), h = 0; c[a.value + h] != 0; )
                h += 1;
            var p = new TextDecoder().decode(c.slice(a.value, a.value + h));
            return (a.value = a.value + h + 1), p;
        }
        function Ba(r, a, c) {
            var h = new TextDecoder().decode(
                new Uint8Array(r).slice(a.value, a.value + c)
            );
            return (a.value = a.value + c), h;
        }
        function za(r, a) {
            var c = ct(r, a),
                h = ye(r, a);
            return [c, h];
        }
        function Ga(r, a) {
            var c = ye(r, a),
                h = ye(r, a);
            return [c, h];
        }
        function ct(r, a) {
            var c = r.getInt32(a.value, !0);
            return (a.value = a.value + 4), c;
        }
        function ye(r, a) {
            var c = r.getUint32(a.value, !0);
            return (a.value = a.value + 4), c;
        }
        function zr(r, a) {
            var c = r[a.value];
            return (a.value = a.value + 1), c;
        }
        function Je(r, a) {
            var c = r.getUint8(a.value);
            return (a.value = a.value + 1), c;
        }
        const Ee = function (r, a) {
            let c;
            return (
                'getBigInt64' in DataView.prototype
                    ? (c = Number(r.getBigInt64(a.value, !0)))
                    : (c =
                          r.getUint32(a.value + 4, !0) +
                          Number(r.getUint32(a.value, !0) << 32)),
                (a.value += 8),
                c
            );
        };
        function ge(r, a) {
            var c = r.getFloat32(a.value, !0);
            return (a.value += 4), c;
        }
        function Ha(r, a) {
            return rt.toHalfFloat(ge(r, a));
        }
        function O(r) {
            var a = (r & 31744) >> 10,
                c = r & 1023;
            return (
                (r >> 15 ? -1 : 1) *
                (a
                    ? a === 31
                        ? c
                            ? NaN
                            : 1 / 0
                        : Math.pow(2, a - 15) * (1 + c / 1024)
                    : 6103515625e-14 * (c / 1024))
            );
        }
        function ut(r, a) {
            var c = r.getUint16(a.value, !0);
            return (a.value += 2), c;
        }
        function Za(r, a) {
            return O(ut(r, a));
        }
        function Wa(r, a, c, h) {
            for (var p = c.value, v = []; c.value < p + h - 1; ) {
                var E = Ft(a, c),
                    S = ct(r, c),
                    A = Je(r, c);
                c.value += 3;
                var I = ct(r, c),
                    T = ct(r, c);
                v.push({
                    name: E,
                    pixelType: S,
                    pLinear: A,
                    xSampling: I,
                    ySampling: T,
                });
            }
            return (c.value += 1), v;
        }
        function Va(r, a) {
            var c = ge(r, a),
                h = ge(r, a),
                p = ge(r, a),
                v = ge(r, a),
                E = ge(r, a),
                S = ge(r, a),
                A = ge(r, a),
                I = ge(r, a);
            return {
                redX: c,
                redY: h,
                greenX: p,
                greenY: v,
                blueX: E,
                blueY: S,
                whiteX: A,
                whiteY: I,
            };
        }
        function Xa(r, a) {
            var c = [
                    'NO_COMPRESSION',
                    'RLE_COMPRESSION',
                    'ZIPS_COMPRESSION',
                    'ZIP_COMPRESSION',
                    'PIZ_COMPRESSION',
                    'PXR24_COMPRESSION',
                    'B44_COMPRESSION',
                    'B44A_COMPRESSION',
                    'DWAA_COMPRESSION',
                    'DWAB_COMPRESSION',
                ],
                h = Je(r, a);
            return c[h];
        }
        function Ya(r, a) {
            var c = ye(r, a),
                h = ye(r, a),
                p = ye(r, a),
                v = ye(r, a);
            return { xMin: c, yMin: h, xMax: p, yMax: v };
        }
        function qa(r, a) {
            var c = ['INCREASING_Y'],
                h = Je(r, a);
            return c[h];
        }
        function Ka(r, a) {
            var c = ge(r, a),
                h = ge(r, a);
            return [c, h];
        }
        function Qa(r, a) {
            var c = ge(r, a),
                h = ge(r, a),
                p = ge(r, a);
            return [c, h, p];
        }
        function $a(r, a, c, h, p) {
            if (h === 'string' || h === 'stringvector' || h === 'iccProfile')
                return Ba(a, c, p);
            if (h === 'chlist') return Wa(r, a, c, p);
            if (h === 'chromaticities') return Va(r, c);
            if (h === 'compression') return Xa(r, c);
            if (h === 'box2i') return Ya(r, c);
            if (h === 'lineOrder') return qa(r, c);
            if (h === 'float') return ge(r, c);
            if (h === 'v2f') return Ka(r, c);
            if (h === 'v3f') return Qa(r, c);
            if (h === 'int') return ct(r, c);
            if (h === 'rational') return za(r, c);
            if (h === 'timecode') return Ga(r, c);
            if (h === 'preview') return (c.value += p), 'skipped';
            c.value += p;
        }
        function Ja(r, a, c) {
            const h = {};
            if (r.getUint32(0, !0) != 20000630)
                throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
            h.version = r.getUint8(4);
            const p = r.getUint8(5);
            (h.spec = {
                singleTile: !!(p & 2),
                longName: !!(p & 4),
                deepFormat: !!(p & 8),
                multiPart: !!(p & 16),
            }),
                (c.value = 8);
            for (var v = !0; v; ) {
                var E = Ft(a, c);
                if (E == 0) v = !1;
                else {
                    var S = Ft(a, c),
                        A = ye(r, c),
                        I = $a(r, a, c, S, A);
                    I === void 0
                        ? console.warn(
                              `EXRLoader.parse: skipped unknown header attribute type '${S}'.`
                          )
                        : (h[E] = I);
                }
            }
            if ((p & -5) != 0)
                throw (
                    (console.error('EXRHeader:', h),
                    'THREE.EXRLoader: provided file is currently unsupported.')
                );
            return h;
        }
        function ei(r, a, c, h, p) {
            const v = {
                size: 0,
                viewer: a,
                array: c,
                offset: h,
                width: r.dataWindow.xMax - r.dataWindow.xMin + 1,
                height: r.dataWindow.yMax - r.dataWindow.yMin + 1,
                channels: r.channels.length,
                bytesPerLine: null,
                lines: null,
                inputSize: null,
                type: r.channels[0].pixelType,
                uncompress: null,
                getter: null,
                format: null,
                [_t ? 'colorSpace' : 'encoding']: null,
            };
            switch (r.compression) {
                case 'NO_COMPRESSION':
                    (v.lines = 1), (v.uncompress = Lr);
                    break;
                case 'RLE_COMPRESSION':
                    (v.lines = 1), (v.uncompress = ja);
                    break;
                case 'ZIPS_COMPRESSION':
                    (v.lines = 1), (v.uncompress = Qt);
                    break;
                case 'ZIP_COMPRESSION':
                    (v.lines = 16), (v.uncompress = Qt);
                    break;
                case 'PIZ_COMPRESSION':
                    (v.lines = 32), (v.uncompress = Pa);
                    break;
                case 'PXR24_COMPRESSION':
                    (v.lines = 16), (v.uncompress = La);
                    break;
                case 'DWAA_COMPRESSION':
                    (v.lines = 32), (v.uncompress = Br);
                    break;
                case 'DWAB_COMPRESSION':
                    (v.lines = 256), (v.uncompress = Br);
                    break;
                default:
                    throw (
                        'EXRLoader.parse: ' + r.compression + ' is unsupported'
                    );
            }
            if (((v.scanlineBlockSize = v.lines), v.type == 1))
                switch (p) {
                    case ze:
                        (v.getter = Za), (v.inputSize = 2);
                        break;
                    case Re:
                        (v.getter = ut), (v.inputSize = 2);
                        break;
                }
            else if (v.type == 2)
                switch (p) {
                    case ze:
                        (v.getter = ge), (v.inputSize = 4);
                        break;
                    case Re:
                        (v.getter = Ha), (v.inputSize = 4);
                }
            else
                throw (
                    'EXRLoader.parse: unsupported pixelType ' +
                    v.type +
                    ' for ' +
                    r.compression +
                    '.'
                );
            v.blockCount = (r.dataWindow.yMax + 1) / v.scanlineBlockSize;
            for (var E = 0; E < v.blockCount; E++) Ee(a, h);
            v.outputChannels = v.channels == 3 ? 4 : v.channels;
            const S = v.width * v.height * v.outputChannels;
            switch (p) {
                case ze:
                    (v.byteArray = new Float32Array(S)),
                        v.channels < v.outputChannels &&
                            v.byteArray.fill(1, 0, S);
                    break;
                case Re:
                    (v.byteArray = new Uint16Array(S)),
                        v.channels < v.outputChannels &&
                            v.byteArray.fill(15360, 0, S);
                    break;
                default:
                    console.error('THREE.EXRLoader: unsupported type: ', p);
                    break;
            }
            return (
                (v.bytesPerLine = v.width * v.inputSize * v.channels),
                v.outputChannels == 4 ? (v.format = Ct) : (v.format = li),
                _t ? (v.colorSpace = 'srgb-linear') : (v.encoding = 3e3),
                v
            );
        }
        const Ut = new DataView(e),
            ti = new Uint8Array(e),
            dt = { value: 0 },
            ht = Ja(Ut, e, dt),
            Q = ei(ht, Ut, ti, dt, this.type),
            Gr = { value: 0 },
            ri = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
        for (let r = 0; r < Q.height / Q.scanlineBlockSize; r++) {
            const a = ye(Ut, dt);
            (Q.size = ye(Ut, dt)),
                (Q.lines =
                    a + Q.scanlineBlockSize > Q.height
                        ? Q.height - a
                        : Q.scanlineBlockSize);
            const h =
                Q.size < Q.lines * Q.bytesPerLine ? Q.uncompress(Q) : Lr(Q);
            dt.value += Q.size;
            for (let p = 0; p < Q.scanlineBlockSize; p++) {
                const v = p + r * Q.scanlineBlockSize;
                if (v >= Q.height) break;
                for (let E = 0; E < Q.channels; E++) {
                    const S = ri[ht.channels[E].name];
                    for (let A = 0; A < Q.width; A++) {
                        Gr.value =
                            (p * (Q.channels * Q.width) + E * Q.width + A) *
                            Q.inputSize;
                        const I =
                            (Q.height - 1 - v) * (Q.width * Q.outputChannels) +
                            A * Q.outputChannels +
                            S;
                        Q.byteArray[I] = Q.getter(h, Gr);
                    }
                }
            }
        }
        return {
            header: ht,
            width: Q.width,
            height: Q.height,
            data: Q.byteArray,
            format: Q.format,
            [_t ? 'colorSpace' : 'encoding']: Q[_t ? 'colorSpace' : 'encoding'],
            type: this.type,
        };
    }
    setDataType(e) {
        return (this.type = e), this;
    }
    load(e, n, i, o) {
        function s(l, u) {
            _t ? (l.colorSpace = u.colorSpace) : (l.encoding = u.encoding),
                (l.minFilter = Ue),
                (l.magFilter = Ue),
                (l.generateMipmaps = !1),
                (l.flipY = !1),
                n && n(l, u);
        }
        return super.load(e, s, i, o);
    }
}
const tr = (t) =>
    t === Object(t) && !Array.isArray(t) && typeof t != 'function';
function it(t, e) {
    const n = st((s) => s.gl),
        i = $e(_r, tr(t) ? Object.values(t) : t);
    return (
        U.useLayoutEffect(() => {
            e == null || e(i);
        }, [e]),
        U.useEffect(() => {
            if ('initTexture' in n) {
                let s = [];
                Array.isArray(i)
                    ? (s = i)
                    : i instanceof Xe
                      ? (s = [i])
                      : tr(i) && (s = Object.values(i)),
                    s.forEach((l) => {
                        l instanceof Xe && n.initTexture(l);
                    });
            }
        }, [n, i]),
        U.useMemo(() => {
            if (tr(t)) {
                const s = {};
                let l = 0;
                for (const u in t) s[u] = i[l++];
                return s;
            } else return i;
        }, [t, i])
    );
}
it.preload = (t) => $e.preload(_r, t);
it.clear = (t) => $e.clear(_r, t);
const Oo = 3e3,
    Do = 3001,
    jo = U.forwardRef(
        (
            {
                children: t,
                enabled: e = !0,
                speed: n = 1,
                rotationIntensity: i = 1,
                floatIntensity: o = 1,
                floatingRange: s = [-0.1, 0.1],
                autoInvalidate: l = !1,
                ...u
            },
            f
        ) => {
            const d = U.useRef(null);
            U.useImperativeHandle(f, () => d.current, []);
            const b = U.useRef(Math.random() * 1e4);
            return (
                br((_) => {
                    var x, k;
                    if (!e || n === 0) return;
                    l && _.invalidate();
                    const F = b.current + _.clock.elapsedTime;
                    (d.current.rotation.x = (Math.cos((F / 4) * n) / 8) * i),
                        (d.current.rotation.y =
                            (Math.sin((F / 4) * n) / 8) * i),
                        (d.current.rotation.z =
                            (Math.sin((F / 4) * n) / 20) * i);
                    let z = Math.sin((F / 4) * n) / 10;
                    (z = Yn.mapLinear(
                        z,
                        -0.1,
                        0.1,
                        (x = s == null ? void 0 : s[0]) !== null && x !== void 0
                            ? x
                            : -0.1,
                        (k = s == null ? void 0 : s[1]) !== null && k !== void 0
                            ? k
                            : 0.1
                    )),
                        (d.current.position.y = z * o),
                        d.current.updateMatrix();
                }),
                U.createElement(
                    'group',
                    u,
                    U.createElement(
                        'group',
                        { ref: d, matrixAutoUpdate: !1 },
                        t
                    )
                )
            );
        }
    ),
    ua = (t, e, n) => {
        let i;
        switch (t) {
            case sr:
                i = new Uint8ClampedArray(e * n * 4);
                break;
            case Re:
                i = new Uint16Array(e * n * 4);
                break;
            case gi:
                i = new Uint32Array(e * n * 4);
                break;
            case vi:
                i = new Int8Array(e * n * 4);
                break;
            case pi:
                i = new Int16Array(e * n * 4);
                break;
            case fi:
                i = new Int32Array(e * n * 4);
                break;
            case ze:
                i = new Float32Array(e * n * 4);
                break;
            default:
                throw new Error('Unsupported data type');
        }
        return i;
    };
let Lt;
const Po = (t, e, n, i) => {
    if (Lt !== void 0) return Lt;
    const o = new Qn(1, 1, i);
    e.setRenderTarget(o);
    const s = new xr(new Kn(), new hi({ color: 16777215 }));
    e.render(s, n), e.setRenderTarget(null);
    const l = ua(t, o.width, o.height);
    return (
        e.readRenderTargetPixels(o, 0, 0, o.width, o.height, l),
        o.dispose(),
        s.geometry.dispose(),
        s.material.dispose(),
        (Lt = l[0] !== 0),
        Lt
    );
};
class Sr {
    constructor(e) {
        var n, i, o, s, l, u, f, d, b, _, x, k, F, z, H, X;
        (this._rendererIsDisposable = !1),
            (this._supportsReadPixels = !0),
            (this.render = () => {
                this._renderer.setRenderTarget(this._renderTarget);
                try {
                    this._renderer.render(this._scene, this._camera);
                } catch (W) {
                    throw (this._renderer.setRenderTarget(null), W);
                }
                this._renderer.setRenderTarget(null);
            }),
            (this._width = e.width),
            (this._height = e.height),
            (this._type = e.type),
            (this._colorSpace = e.colorSpace);
        const Y = {
            format: Ct,
            depthBuffer: !1,
            stencilBuffer: !1,
            type: this._type,
            colorSpace: this._colorSpace,
            anisotropy:
                ((n = e.renderTargetOptions) === null || n === void 0
                    ? void 0
                    : n.anisotropy) !== void 0
                    ? (i = e.renderTargetOptions) === null || i === void 0
                        ? void 0
                        : i.anisotropy
                    : 1,
            generateMipmaps:
                ((o = e.renderTargetOptions) === null || o === void 0
                    ? void 0
                    : o.generateMipmaps) !== void 0
                    ? (s = e.renderTargetOptions) === null || s === void 0
                        ? void 0
                        : s.generateMipmaps
                    : !1,
            magFilter:
                ((l = e.renderTargetOptions) === null || l === void 0
                    ? void 0
                    : l.magFilter) !== void 0
                    ? (u = e.renderTargetOptions) === null || u === void 0
                        ? void 0
                        : u.magFilter
                    : Ue,
            minFilter:
                ((f = e.renderTargetOptions) === null || f === void 0
                    ? void 0
                    : f.minFilter) !== void 0
                    ? (d = e.renderTargetOptions) === null || d === void 0
                        ? void 0
                        : d.minFilter
                    : Ue,
            samples:
                ((b = e.renderTargetOptions) === null || b === void 0
                    ? void 0
                    : b.samples) !== void 0
                    ? (_ = e.renderTargetOptions) === null || _ === void 0
                        ? void 0
                        : _.samples
                    : void 0,
            wrapS:
                ((x = e.renderTargetOptions) === null || x === void 0
                    ? void 0
                    : x.wrapS) !== void 0
                    ? (k = e.renderTargetOptions) === null || k === void 0
                        ? void 0
                        : k.wrapS
                    : Ye,
            wrapT:
                ((F = e.renderTargetOptions) === null || F === void 0
                    ? void 0
                    : F.wrapT) !== void 0
                    ? (z = e.renderTargetOptions) === null || z === void 0
                        ? void 0
                        : z.wrapT
                    : Ye,
        };
        if (
            ((this._material = e.material),
            e.renderer
                ? (this._renderer = e.renderer)
                : ((this._renderer = Sr.instantiateRenderer()),
                  (this._rendererIsDisposable = !0)),
            (this._scene = new qn()),
            (this._camera = new ci()),
            this._camera.position.set(0, 0, 10),
            (this._camera.left = -0.5),
            (this._camera.right = 0.5),
            (this._camera.top = 0.5),
            (this._camera.bottom = -0.5),
            this._camera.updateProjectionMatrix(),
            !Po(this._type, this._renderer, this._camera, Y))
        ) {
            let W;
            switch (this._type) {
                case Re:
                    W = this._renderer.extensions.has('EXT_color_buffer_float')
                        ? ze
                        : void 0;
                    break;
            }
            W !== void 0
                ? (console.warn(
                      `This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${ze}`
                  ),
                  (this._type = W))
                : ((this._supportsReadPixels = !1),
                  console.warn(
                      'This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown'
                  ));
        }
        (this._quad = new xr(new Kn(), this._material)),
            this._quad.geometry.computeBoundingBox(),
            this._scene.add(this._quad),
            (this._renderTarget = new Qn(this.width, this.height, Y)),
            (this._renderTarget.texture.mapping =
                ((H = e.renderTargetOptions) === null || H === void 0
                    ? void 0
                    : H.mapping) !== void 0
                    ? (X = e.renderTargetOptions) === null || X === void 0
                        ? void 0
                        : X.mapping
                    : Zt);
    }
    static instantiateRenderer() {
        const e = new ui();
        return e.setSize(128, 128), e;
    }
    toArray() {
        if (!this._supportsReadPixels)
            throw new Error("Can't read pixels in this browser");
        const e = ua(this._type, this._width, this._height);
        return (
            this._renderer.readRenderTargetPixels(
                this._renderTarget,
                0,
                0,
                this._width,
                this._height,
                e
            ),
            e
        );
    }
    toDataTexture(e) {
        const n = new di(
            this.toArray(),
            this.width,
            this.height,
            Ct,
            this._type,
            (e == null ? void 0 : e.mapping) || Zt,
            (e == null ? void 0 : e.wrapS) || Ye,
            (e == null ? void 0 : e.wrapT) || Ye,
            (e == null ? void 0 : e.magFilter) || Ue,
            (e == null ? void 0 : e.minFilter) || Ue,
            (e == null ? void 0 : e.anisotropy) || 1,
            or
        );
        return (
            (n.generateMipmaps =
                (e == null ? void 0 : e.generateMipmaps) !== void 0
                    ? e == null
                        ? void 0
                        : e.generateMipmaps
                    : !1),
            n
        );
    }
    disposeOnDemandRenderer() {
        this._renderer.setRenderTarget(null),
            this._rendererIsDisposable &&
                (this._renderer.dispose(), this._renderer.forceContextLoss());
    }
    dispose(e) {
        this.disposeOnDemandRenderer(),
            e && this.renderTarget.dispose(),
            this.material instanceof yr &&
                Object.values(this.material.uniforms).forEach((n) => {
                    n.value instanceof Xe && n.value.dispose();
                }),
            Object.values(this.material).forEach((n) => {
                n instanceof Xe && n.dispose();
            }),
            this.material.dispose(),
            this._quad.geometry.dispose();
    }
    get width() {
        return this._width;
    }
    set width(e) {
        (this._width = e),
            this._renderTarget.setSize(this._width, this._height);
    }
    get height() {
        return this._height;
    }
    set height(e) {
        (this._height = e),
            this._renderTarget.setSize(this._width, this._height);
    }
    get renderer() {
        return this._renderer;
    }
    get renderTarget() {
        return this._renderTarget;
    }
    set renderTarget(e) {
        (this._renderTarget = e),
            (this._width = e.width),
            (this._height = e.height);
    }
    get material() {
        return this._material;
    }
    get type() {
        return this._type;
    }
    get colorSpace() {
        return this._colorSpace;
    }
}
const Lo = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
    Bo = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
class zo extends yr {
    constructor({
        gamma: e,
        offsetHdr: n,
        offsetSdr: i,
        gainMapMin: o,
        gainMapMax: s,
        maxDisplayBoost: l,
        hdrCapacityMin: u,
        hdrCapacityMax: f,
        sdr: d,
        gainMap: b,
    }) {
        super({
            name: 'GainMapDecoderMaterial',
            vertexShader: Lo,
            fragmentShader: Bo,
            uniforms: {
                sdr: { value: d },
                gainMap: { value: b },
                gamma: { value: new be(1 / e[0], 1 / e[1], 1 / e[2]) },
                offsetHdr: { value: new be().fromArray(n) },
                offsetSdr: { value: new be().fromArray(i) },
                gainMapMin: { value: new be().fromArray(o) },
                gainMapMax: { value: new be().fromArray(s) },
                weightFactor: { value: (Math.log2(l) - u) / (f - u) },
            },
            blending: xi,
            depthTest: !1,
            depthWrite: !1,
        }),
            (this._maxDisplayBoost = l),
            (this._hdrCapacityMin = u),
            (this._hdrCapacityMax = f),
            (this.needsUpdate = !0),
            (this.uniformsNeedUpdate = !0);
    }
    get sdr() {
        return this.uniforms.sdr.value;
    }
    set sdr(e) {
        this.uniforms.sdr.value = e;
    }
    get gainMap() {
        return this.uniforms.gainMap.value;
    }
    set gainMap(e) {
        this.uniforms.gainMap.value = e;
    }
    get offsetHdr() {
        return this.uniforms.offsetHdr.value.toArray();
    }
    set offsetHdr(e) {
        this.uniforms.offsetHdr.value.fromArray(e);
    }
    get offsetSdr() {
        return this.uniforms.offsetSdr.value.toArray();
    }
    set offsetSdr(e) {
        this.uniforms.offsetSdr.value.fromArray(e);
    }
    get gainMapMin() {
        return this.uniforms.gainMapMin.value.toArray();
    }
    set gainMapMin(e) {
        this.uniforms.gainMapMin.value.fromArray(e);
    }
    get gainMapMax() {
        return this.uniforms.gainMapMax.value.toArray();
    }
    set gainMapMax(e) {
        this.uniforms.gainMapMax.value.fromArray(e);
    }
    get gamma() {
        const e = this.uniforms.gamma.value;
        return [1 / e.x, 1 / e.y, 1 / e.z];
    }
    set gamma(e) {
        const n = this.uniforms.gamma.value;
        (n.x = 1 / e[0]), (n.y = 1 / e[1]), (n.z = 1 / e[2]);
    }
    get hdrCapacityMin() {
        return this._hdrCapacityMin;
    }
    set hdrCapacityMin(e) {
        (this._hdrCapacityMin = e), this.calculateWeight();
    }
    get hdrCapacityMax() {
        return this._hdrCapacityMax;
    }
    set hdrCapacityMax(e) {
        (this._hdrCapacityMax = e), this.calculateWeight();
    }
    get maxDisplayBoost() {
        return this._maxDisplayBoost;
    }
    set maxDisplayBoost(e) {
        (this._maxDisplayBoost = Math.max(1, Math.min(65504, e))),
            this.calculateWeight();
    }
    calculateWeight() {
        const e =
            (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) /
            (this._hdrCapacityMax - this._hdrCapacityMin);
        this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e));
    }
}
class da extends Error {}
class ha extends Error {}
const bt = (t, e, n) => {
        const i = new RegExp(`${e}="([^"]*)"`, 'i').exec(t);
        if (i) return i[1];
        const o = new RegExp(`<${e}[^>]*>([\\s\\S]*?)</${e}>`, 'i').exec(t);
        if (o) {
            const s = o[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
            return s && s.length === 3
                ? s.map((l) => l.replace(/<\/?rdf:li>/g, ''))
                : o[1].trim();
        }
        if (n !== void 0) return n;
        throw new Error(`Can't find ${e} in gainmap metadata`);
    },
    Go = (t) => {
        let e;
        typeof TextDecoder < 'u'
            ? (e = new TextDecoder().decode(t))
            : (e = t.toString());
        let n = e.indexOf('<x:xmpmeta');
        for (; n !== -1; ) {
            const i = e.indexOf('x:xmpmeta>', n),
                o = e.slice(n, i + 10);
            try {
                const s = bt(o, 'hdrgm:GainMapMin', '0'),
                    l = bt(o, 'hdrgm:GainMapMax'),
                    u = bt(o, 'hdrgm:Gamma', '1'),
                    f = bt(o, 'hdrgm:OffsetSDR', '0.015625'),
                    d = bt(o, 'hdrgm:OffsetHDR', '0.015625'),
                    b = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(o),
                    _ = b ? b[1] : '0',
                    x = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(o);
                if (!x) throw new Error('Incomplete gainmap metadata');
                const k = x[1];
                return {
                    gainMapMin: Array.isArray(s)
                        ? s.map((F) => parseFloat(F))
                        : [parseFloat(s), parseFloat(s), parseFloat(s)],
                    gainMapMax: Array.isArray(l)
                        ? l.map((F) => parseFloat(F))
                        : [parseFloat(l), parseFloat(l), parseFloat(l)],
                    gamma: Array.isArray(u)
                        ? u.map((F) => parseFloat(F))
                        : [parseFloat(u), parseFloat(u), parseFloat(u)],
                    offsetSdr: Array.isArray(f)
                        ? f.map((F) => parseFloat(F))
                        : [parseFloat(f), parseFloat(f), parseFloat(f)],
                    offsetHdr: Array.isArray(d)
                        ? d.map((F) => parseFloat(F))
                        : [parseFloat(d), parseFloat(d), parseFloat(d)],
                    hdrCapacityMin: parseFloat(_),
                    hdrCapacityMax: parseFloat(k),
                };
            } catch {}
            n = e.indexOf('<x:xmpmeta', i);
        }
    };
class Ho {
    constructor(e) {
        this.options = {
            debug: e && e.debug !== void 0 ? e.debug : !1,
            extractFII: e && e.extractFII !== void 0 ? e.extractFII : !0,
            extractNonFII:
                e && e.extractNonFII !== void 0 ? e.extractNonFII : !0,
        };
    }
    extract(e) {
        return new Promise((n, i) => {
            const o = this.options.debug,
                s = new DataView(e.buffer);
            if (s.getUint16(0) !== 65496) {
                i(new Error('Not a valid jpeg'));
                return;
            }
            const l = s.byteLength;
            let u = 2,
                f = 0,
                d;
            for (; u < l; ) {
                if (++f > 250) {
                    i(new Error(`Found no marker after ${f} loops 😵`));
                    return;
                }
                if (s.getUint8(u) !== 255) {
                    i(
                        new Error(
                            `Not a valid marker at offset 0x${u.toString(16)}, found: 0x${s.getUint8(u).toString(16)}`
                        )
                    );
                    return;
                }
                if (
                    ((d = s.getUint8(u + 1)),
                    o && console.log(`Marker: ${d.toString(16)}`),
                    d === 226)
                ) {
                    o && console.log('Found APP2 marker (0xffe2)');
                    const b = u + 4;
                    if (s.getUint32(b) === 1297106432) {
                        const _ = b + 4;
                        let x;
                        if (s.getUint16(_) === 18761) x = !1;
                        else if (s.getUint16(_) === 19789) x = !0;
                        else {
                            i(
                                new Error(
                                    'No valid endianness marker found in TIFF header'
                                )
                            );
                            return;
                        }
                        if (s.getUint16(_ + 2, !x) !== 42) {
                            i(
                                new Error(
                                    'Not valid TIFF data! (no 0x002A marker)'
                                )
                            );
                            return;
                        }
                        const k = s.getUint32(_ + 4, !x);
                        if (k < 8) {
                            i(
                                new Error(
                                    'Not valid TIFF data! (First offset less than 8)'
                                )
                            );
                            return;
                        }
                        const F = _ + k,
                            z = s.getUint16(F, !x),
                            H = F + 2;
                        let X = 0;
                        for (let q = H; q < H + 12 * z; q += 12)
                            s.getUint16(q, !x) === 45057 &&
                                (X = s.getUint32(q + 8, !x));
                        const W = F + 2 + z * 12 + 4,
                            J = [];
                        for (let q = W; q < W + X * 16; q += 16) {
                            const L = {
                                MPType: s.getUint32(q, !x),
                                size: s.getUint32(q + 4, !x),
                                dataOffset: s.getUint32(q + 8, !x),
                                dependantImages: s.getUint32(q + 12, !x),
                                start: -1,
                                end: -1,
                                isFII: !1,
                            };
                            L.dataOffset
                                ? ((L.start = _ + L.dataOffset), (L.isFII = !1))
                                : ((L.start = 0), (L.isFII = !0)),
                                (L.end = L.start + L.size),
                                J.push(L);
                        }
                        if (this.options.extractNonFII && J.length) {
                            const q = new Blob([s]),
                                L = [];
                            for (const y of J) {
                                if (y.isFII && !this.options.extractFII)
                                    continue;
                                const m = q.slice(
                                    y.start,
                                    y.end + 1,
                                    'image/jpeg'
                                );
                                L.push(m);
                            }
                            n(L);
                        }
                    }
                }
                u += 2 + s.getUint16(u + 2);
            }
        });
    }
}
const Zo = async (t) => {
        const e = Go(t);
        if (!e) throw new ha('Gain map XMP metadata not found');
        const i = await new Ho({ extractFII: !0, extractNonFII: !0 }).extract(
            t
        );
        if (i.length !== 2) throw new da('Gain map recovery image not found');
        return {
            sdr: new Uint8Array(await i[0].arrayBuffer()),
            gainMap: new Uint8Array(await i[1].arrayBuffer()),
            metadata: e,
        };
    },
    Tn = (t) =>
        new Promise((e, n) => {
            const i = document.createElement('img');
            (i.onload = () => {
                e(i);
            }),
                (i.onerror = (o) => {
                    n(o);
                }),
                (i.src = URL.createObjectURL(t));
        });
class fa extends mi {
    constructor(e, n) {
        super(n),
            e && (this._renderer = e),
            (this._internalLoadingManager = new wi());
    }
    setRenderer(e) {
        return (this._renderer = e), this;
    }
    setRenderTargetOptions(e) {
        return (this._renderTargetOptions = e), this;
    }
    prepareQuadRenderer() {
        this._renderer ||
            console.warn(
                'WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.'
            );
        const e = new zo({
            gainMapMax: [1, 1, 1],
            gainMapMin: [0, 0, 0],
            gamma: [1, 1, 1],
            offsetHdr: [1, 1, 1],
            offsetSdr: [1, 1, 1],
            hdrCapacityMax: 1,
            hdrCapacityMin: 0,
            maxDisplayBoost: 1,
            gainMap: new Xe(),
            sdr: new Xe(),
        });
        return new Sr({
            width: 16,
            height: 16,
            type: Re,
            colorSpace: or,
            material: e,
            renderer: this._renderer,
            renderTargetOptions: this._renderTargetOptions,
        });
    }
    async render(e, n, i, o) {
        const s = o ? new Blob([o], { type: 'image/jpeg' }) : void 0,
            l = new Blob([i], { type: 'image/jpeg' });
        let u,
            f,
            d = !1;
        if (typeof createImageBitmap > 'u') {
            const x = await Promise.all([
                s ? Tn(s) : Promise.resolve(void 0),
                Tn(l),
            ]);
            (f = x[0]), (u = x[1]), (d = !0);
        } else {
            const x = await Promise.all([
                s
                    ? createImageBitmap(s, { imageOrientation: 'flipY' })
                    : Promise.resolve(void 0),
                createImageBitmap(l, { imageOrientation: 'flipY' }),
            ]);
            (f = x[0]), (u = x[1]);
        }
        const b = new Xe(
            f || new ImageData(2, 2),
            Zt,
            Ye,
            Ye,
            Ue,
            Hr,
            Ct,
            sr,
            1,
            or
        );
        (b.flipY = d), (b.needsUpdate = !0);
        const _ = new Xe(u, Zt, Ye, Ye, Ue, Hr, Ct, sr, 1, $n);
        (_.flipY = d),
            (_.needsUpdate = !0),
            (e.width = u.width),
            (e.height = u.height),
            (e.material.gainMap = b),
            (e.material.sdr = _),
            (e.material.gainMapMin = n.gainMapMin),
            (e.material.gainMapMax = n.gainMapMax),
            (e.material.offsetHdr = n.offsetHdr),
            (e.material.offsetSdr = n.offsetSdr),
            (e.material.gamma = n.gamma),
            (e.material.hdrCapacityMin = n.hdrCapacityMin),
            (e.material.hdrCapacityMax = n.hdrCapacityMax),
            (e.material.maxDisplayBoost = Math.pow(2, n.hdrCapacityMax)),
            (e.material.needsUpdate = !0),
            e.render();
    }
}
class Wo extends fa {
    load([e, n, i], o, s, l) {
        const u = this.prepareQuadRenderer();
        let f, d, b;
        const _ = async () => {
            if (f && d && b) {
                try {
                    await this.render(u, b, f, d);
                } catch (w) {
                    this.manager.itemError(e),
                        this.manager.itemError(n),
                        this.manager.itemError(i),
                        typeof l == 'function' && l(w),
                        u.disposeOnDemandRenderer();
                    return;
                }
                typeof o == 'function' && o(u),
                    this.manager.itemEnd(e),
                    this.manager.itemEnd(n),
                    this.manager.itemEnd(i),
                    u.disposeOnDemandRenderer();
            }
        };
        let x = !0,
            k = 0,
            F = 0,
            z = !0,
            H = 0,
            X = 0,
            Y = !0,
            W = 0,
            J = 0;
        const q = () => {
            if (typeof s == 'function') {
                const w = k + H + W,
                    C = F + X + J,
                    N = x && z && Y;
                s(
                    new ProgressEvent('progress', {
                        lengthComputable: N,
                        loaded: C,
                        total: w,
                    })
                );
            }
        };
        this.manager.itemStart(e),
            this.manager.itemStart(n),
            this.manager.itemStart(i);
        const L = new zt(this._internalLoadingManager);
        L.setResponseType('arraybuffer'),
            L.setRequestHeader(this.requestHeader),
            L.setPath(this.path),
            L.setWithCredentials(this.withCredentials),
            L.load(
                e,
                async (w) => {
                    if (typeof w == 'string')
                        throw new Error('Invalid sdr buffer');
                    (f = w), await _();
                },
                (w) => {
                    (x = w.lengthComputable),
                        (F = w.loaded),
                        (k = w.total),
                        q();
                },
                (w) => {
                    this.manager.itemError(e), typeof l == 'function' && l(w);
                }
            );
        const y = new zt(this._internalLoadingManager);
        y.setResponseType('arraybuffer'),
            y.setRequestHeader(this.requestHeader),
            y.setPath(this.path),
            y.setWithCredentials(this.withCredentials),
            y.load(
                n,
                async (w) => {
                    if (typeof w == 'string')
                        throw new Error('Invalid gainmap buffer');
                    (d = w), await _();
                },
                (w) => {
                    (z = w.lengthComputable),
                        (X = w.loaded),
                        (H = w.total),
                        q();
                },
                (w) => {
                    this.manager.itemError(n), typeof l == 'function' && l(w);
                }
            );
        const m = new zt(this._internalLoadingManager);
        return (
            m.setRequestHeader(this.requestHeader),
            m.setPath(this.path),
            m.setWithCredentials(this.withCredentials),
            m.load(
                i,
                async (w) => {
                    if (typeof w != 'string')
                        throw new Error('Invalid metadata string');
                    (b = JSON.parse(w)), await _();
                },
                (w) => {
                    (Y = w.lengthComputable),
                        (J = w.loaded),
                        (W = w.total),
                        q();
                },
                (w) => {
                    this.manager.itemError(i), typeof l == 'function' && l(w);
                }
            ),
            u
        );
    }
}
class Vo extends fa {
    load(e, n, i, o) {
        const s = this.prepareQuadRenderer(),
            l = new zt(this._internalLoadingManager);
        return (
            l.setResponseType('arraybuffer'),
            l.setRequestHeader(this.requestHeader),
            l.setPath(this.path),
            l.setWithCredentials(this.withCredentials),
            this.manager.itemStart(e),
            l.load(
                e,
                async (u) => {
                    if (typeof u == 'string')
                        throw new Error(
                            'Invalid buffer, received [string], was expecting [ArrayBuffer]'
                        );
                    const f = new Uint8Array(u);
                    let d, b, _;
                    try {
                        const x = await Zo(f);
                        (d = x.sdr), (b = x.gainMap), (_ = x.metadata);
                    } catch (x) {
                        if (x instanceof ha || x instanceof da)
                            console.warn(
                                `Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`
                            ),
                                (_ = {
                                    gainMapMin: [0, 0, 0],
                                    gainMapMax: [1, 1, 1],
                                    gamma: [1, 1, 1],
                                    hdrCapacityMin: 0,
                                    hdrCapacityMax: 1,
                                    offsetHdr: [0, 0, 0],
                                    offsetSdr: [0, 0, 0],
                                }),
                                (d = f);
                        else throw x;
                    }
                    try {
                        await this.render(s, _, d, b);
                    } catch (x) {
                        this.manager.itemError(e),
                            typeof o == 'function' && o(x),
                            s.disposeOnDemandRenderer();
                        return;
                    }
                    typeof n == 'function' && n(s),
                        this.manager.itemEnd(e),
                        s.disposeOnDemandRenderer();
                },
                i,
                (u) => {
                    this.manager.itemError(e), typeof o == 'function' && o(u);
                }
            ),
            s
        );
    }
}
const Rt = {
        apartment: 'lebombo_1k.hdr',
        city: 'potsdamer_platz_1k.hdr',
        dawn: 'kiara_1_dawn_1k.hdr',
        forest: 'forest_slope_1k.hdr',
        lobby: 'st_fagans_interior_1k.hdr',
        night: 'dikhololo_night_1k.hdr',
        park: 'rooitou_park_1k.hdr',
        studio: 'studio_small_03_1k.hdr',
        sunset: 'venice_sunset_1k.hdr',
        warehouse: 'empty_warehouse_01_1k.hdr',
    },
    pa =
        'https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/',
    ot = (t) => Array.isArray(t),
    Er = ['/px.png', '/nx.png', '/py.png', '/ny.png', '/pz.png', '/nz.png'];
function Kt({
    files: t = Er,
    path: e = '',
    preset: n = void 0,
    encoding: i = void 0,
    extensions: o,
} = {}) {
    let s = null,
        l = !1;
    n && (Mr(n), (t = Rt[n]), (e = pa)), (l = ot(t));
    const { extension: u, isCubemap: f } = Ir(t);
    if (((s = Ar(u)), !s))
        throw new Error('useEnvironment: Unrecognized file extension: ' + t);
    const d = st((k) => k.gl);
    U.useLayoutEffect(() => {
        if (u !== 'webp' && u !== 'jpg' && u !== 'jpeg') return;
        function k() {
            $e.clear(s, l ? [t] : t);
        }
        d.domElement.addEventListener('webglcontextlost', k, { once: !0 });
    }, [t, d.domElement]);
    const b = $e(s, l ? [t] : t, (k) => {
        (u === 'webp' || u === 'jpg' || u === 'jpeg') && k.setRenderer(d),
            k.setPath == null || k.setPath(e),
            o && o(k);
    });
    let _ = l ? b[0] : b;
    if (u === 'jpg' || u === 'jpeg' || u === 'webp') {
        var x;
        _ = (x = _.renderTarget) == null ? void 0 : x.texture;
    }
    return (
        (_.mapping = f ? yi : _i),
        'colorSpace' in _
            ? (_.colorSpace = (i ?? f) ? 'srgb' : 'srgb-linear')
            : (_.encoding = (i ?? f) ? Do : Oo),
        _
    );
}
const Xo = { files: Er, path: '', preset: void 0, extensions: void 0 };
Kt.preload = (t) => {
    const e = { ...Xo, ...t };
    let { files: n, path: i = '' } = e;
    const { preset: o, extensions: s } = e;
    o && (Mr(o), (n = Rt[o]), (i = pa));
    const { extension: l } = Ir(n);
    if (l === 'webp' || l === 'jpg' || l === 'jpeg')
        throw new Error('useEnvironment: Preloading gainmaps is not supported');
    const u = Ar(l);
    if (!u)
        throw new Error('useEnvironment: Unrecognized file extension: ' + n);
    $e.preload(u, ot(n) ? [n] : n, (f) => {
        f.setPath == null || f.setPath(i), s && s(f);
    });
};
const Yo = { files: Er, preset: void 0 };
Kt.clear = (t) => {
    const e = { ...Yo, ...t };
    let { files: n } = e;
    const { preset: i } = e;
    i && (Mr(i), (n = Rt[i]));
    const { extension: o } = Ir(n),
        s = Ar(o);
    if (!s)
        throw new Error('useEnvironment: Unrecognized file extension: ' + n);
    $e.clear(s, ot(n) ? [n] : n);
};
function Mr(t) {
    if (!(t in Rt))
        throw new Error('Preset must be one of: ' + Object.keys(Rt).join(', '));
}
function Ir(t) {
    var e;
    const n = ot(t) && t.length === 6,
        i = ot(t) && t.length === 3 && t.some((l) => l.endsWith('json')),
        o = ot(t) ? t[0] : t;
    return {
        extension: n
            ? 'cube'
            : i
              ? 'webp'
              : o.startsWith('data:application/exr')
                ? 'exr'
                : o.startsWith('data:application/hdr')
                  ? 'hdr'
                  : o.startsWith('data:image/jpeg')
                    ? 'jpg'
                    : (e = o.split('.').pop()) == null ||
                        (e = e.split('?')) == null ||
                        (e = e.shift()) == null
                      ? void 0
                      : e.toLowerCase(),
        isCubemap: n,
        isGainmap: i,
    };
}
function Ar(t) {
    return t === 'cube'
        ? bi
        : t === 'hdr'
          ? Fo
          : t === 'exr'
            ? Uo
            : t === 'jpg' || t === 'jpeg'
              ? Vo
              : t === 'webp'
                ? Wo
                : null;
}
const qo = (t) => t.current && t.current.isScene,
    Ko = (t) => (qo(t) ? t.current : t);
function Cr(t, e, n, i, o = {}) {
    var s, l, u, f;
    o = {
        backgroundBlurriness: 0,
        backgroundIntensity: 1,
        backgroundRotation: [0, 0, 0],
        environmentIntensity: 1,
        environmentRotation: [0, 0, 0],
        ...o,
    };
    const d = Ko(e || n),
        b = d.background,
        _ = d.environment,
        x = {
            backgroundBlurriness: d.backgroundBlurriness,
            backgroundIntensity: d.backgroundIntensity,
            backgroundRotation:
                (s =
                    (l = d.backgroundRotation) == null || l.clone == null
                        ? void 0
                        : l.clone()) !== null && s !== void 0
                    ? s
                    : [0, 0, 0],
            environmentIntensity: d.environmentIntensity,
            environmentRotation:
                (u =
                    (f = d.environmentRotation) == null || f.clone == null
                        ? void 0
                        : f.clone()) !== null && u !== void 0
                    ? u
                    : [0, 0, 0],
        };
    return (
        t !== 'only' && (d.environment = i),
        t && (d.background = i),
        Zr(d, o),
        () => {
            t !== 'only' && (d.environment = _),
                t && (d.background = b),
                Zr(d, x);
        }
    );
}
function Rr({ scene: t, background: e = !1, map: n, ...i }) {
    const o = st((s) => s.scene);
    return (
        U.useLayoutEffect(() => {
            if (n) return Cr(e, t, o, n, i);
        }),
        null
    );
}
function va({
    background: t = !1,
    scene: e,
    blur: n,
    backgroundBlurriness: i,
    backgroundIntensity: o,
    backgroundRotation: s,
    environmentIntensity: l,
    environmentRotation: u,
    ...f
}) {
    const d = Kt(f),
        b = st((_) => _.scene);
    return (
        U.useLayoutEffect(() =>
            Cr(t, e, b, d, {
                backgroundBlurriness: n ?? i,
                backgroundIntensity: o,
                backgroundRotation: s,
                environmentIntensity: l,
                environmentRotation: u,
            })
        ),
        U.useEffect(
            () => () => {
                d.dispose();
            },
            [d]
        ),
        null
    );
}
function Qo({
    children: t,
    near: e = 0.1,
    far: n = 1e3,
    resolution: i = 256,
    frames: o = 1,
    map: s,
    background: l = !1,
    blur: u,
    backgroundBlurriness: f,
    backgroundIntensity: d,
    backgroundRotation: b,
    environmentIntensity: _,
    environmentRotation: x,
    scene: k,
    files: F,
    path: z,
    preset: H = void 0,
    extensions: X,
}) {
    const Y = st((m) => m.gl),
        W = st((m) => m.scene),
        J = U.useRef(null),
        [q] = U.useState(() => new qn()),
        L = U.useMemo(() => {
            const m = new Ei(i);
            return (m.texture.type = Re), m;
        }, [i]);
    U.useEffect(
        () => () => {
            L.dispose();
        },
        [L]
    ),
        U.useLayoutEffect(() => {
            if (o === 1) {
                const m = Y.autoClear;
                (Y.autoClear = !0), J.current.update(Y, q), (Y.autoClear = m);
            }
            return Cr(l, k, W, L.texture, {
                backgroundBlurriness: u ?? f,
                backgroundIntensity: d,
                backgroundRotation: b,
                environmentIntensity: _,
                environmentRotation: x,
            });
        }, [t, q, L.texture, k, W, l, o, Y]);
    let y = 1;
    return (
        br(() => {
            if (o === 1 / 0 || y < o) {
                const m = Y.autoClear;
                (Y.autoClear = !0),
                    J.current.update(Y, q),
                    (Y.autoClear = m),
                    y++;
            }
        }),
        U.createElement(
            U.Fragment,
            null,
            Mi(
                U.createElement(
                    U.Fragment,
                    null,
                    t,
                    U.createElement('cubeCamera', { ref: J, args: [e, n, L] }),
                    F || H
                        ? U.createElement(va, {
                              background: !0,
                              files: F,
                              preset: H,
                              path: z,
                              extensions: X,
                          })
                        : s
                          ? U.createElement(Rr, {
                                background: !0,
                                map: s,
                                extensions: X,
                            })
                          : null
                ),
                q
            )
        )
    );
}
function $o(t) {
    var e, n, i, o;
    const s = Kt(t),
        l = t.map || s;
    U.useMemo(() => Si({ GroundProjectedEnvImpl: No }), []),
        U.useEffect(
            () => () => {
                s.dispose();
            },
            [s]
        );
    const u = U.useMemo(() => [l], [l]),
        f = (e = t.ground) == null ? void 0 : e.height,
        d = (n = t.ground) == null ? void 0 : n.radius,
        b =
            (i = (o = t.ground) == null ? void 0 : o.scale) !== null &&
            i !== void 0
                ? i
                : 1e3;
    return U.createElement(
        U.Fragment,
        null,
        U.createElement(Rr, Ni({}, t, { map: l })),
        U.createElement('groundProjectedEnvImpl', {
            args: u,
            scale: b,
            height: f,
            radius: d,
        })
    );
}
function Jo(t) {
    return t.ground
        ? U.createElement($o, t)
        : t.map
          ? U.createElement(Rr, t)
          : t.children
            ? U.createElement(Qo, t)
            : U.createElement(va, t);
}
const Et = {},
    kn = (t, e) => (t.unstable_is ? t.unstable_is(e) : e === t),
    Nn = (t) => 'init' in t,
    rr = (t) => !!t.write,
    Fn = (t) => 'v' in t || 'e' in t,
    Bt = (t) => {
        if ('e' in t) throw t.e;
        if ((Et ? 'production' : void 0) !== 'production' && !('v' in t))
            throw new Error('[Bug] atom state is not initialized');
        return t.v;
    },
    Vt = new WeakMap(),
    Un = (t) => {
        var e;
        return Xt(t) && !!((e = Vt.get(t)) != null && e[0]);
    },
    es = (t) => {
        const e = Vt.get(t);
        e != null && e[0] && ((e[0] = !1), e[1].forEach((n) => n()));
    },
    ga = (t, e) => {
        let n = Vt.get(t);
        if (!n) {
            (n = [!0, new Set()]), Vt.set(t, n);
            const i = () => {
                n[0] = !1;
            };
            t.then(i, i);
        }
        n[1].add(e);
    },
    Xt = (t) => typeof (t == null ? void 0 : t.then) == 'function',
    ma = (t, e, n) => {
        n.p.has(t) ||
            (n.p.add(t),
            e.then(
                () => {
                    n.p.delete(t);
                },
                () => {
                    n.p.delete(t);
                }
            ));
    },
    nr = (t, e, n) => {
        const i = n(t),
            o = 'v' in i,
            s = i.v;
        if (Xt(e)) for (const l of i.d.keys()) ma(t, e, n(l));
        (i.v = e),
            delete i.e,
            (!o || !Object.is(s, i.v)) && (++i.n, Xt(s) && es(s));
    },
    On = (t, e, n) => {
        var i;
        const o = new Set();
        for (const s of ((i = n.get(t)) == null ? void 0 : i.t) || [])
            n.has(s) && o.add(s);
        for (const s of e.p) o.add(s);
        return o;
    },
    ts = () => {
        const t = new Set(),
            e = () => {
                t.forEach((n) => n());
            };
        return (
            (e.add = (n) => (
                t.add(n),
                () => {
                    t.delete(n);
                }
            )),
            e
        );
    },
    ar = () => {
        const t = {},
            e = new WeakMap(),
            n = (i) => {
                var o, s;
                (o = e.get(t)) == null || o.forEach((l) => l(i)),
                    (s = e.get(i)) == null || s.forEach((l) => l());
            };
        return (
            (n.add = (i, o) => {
                const s = i || t,
                    l = (e.has(s) ? e : e.set(s, new Set())).get(s);
                return (
                    l.add(o),
                    () => {
                        l == null || l.delete(o), l.size || e.delete(s);
                    }
                );
            }),
            n
        );
    },
    rs = (t) => (
        t.c || (t.c = ar()),
        t.m || (t.m = ar()),
        t.u || (t.u = ar()),
        t.f || (t.f = ts()),
        t
    ),
    ns = Symbol(),
    as = (
        t = new WeakMap(),
        e = new WeakMap(),
        n = new WeakMap(),
        i = new Set(),
        o = new Set(),
        s = new Set(),
        l = {},
        u = (x, ...k) => x.read(...k),
        f = (x, ...k) => x.write(...k),
        d = (x, k) => {
            var F;
            return (F = x.unstable_onInit) == null ? void 0 : F.call(x, k);
        },
        b = (x, k) => {
            var F;
            return (F = x.onMount) == null ? void 0 : F.call(x, k);
        },
        ..._
    ) => {
        const x =
                _[0] ||
                ((y) => {
                    if ((Et ? 'production' : void 0) !== 'production' && !y)
                        throw new Error('Atom is undefined or null');
                    let m = t.get(y);
                    return (
                        m ||
                            ((m = { d: new Map(), p: new Set(), n: 0 }),
                            t.set(y, m),
                            d == null || d(y, L)),
                        m
                    );
                }),
            k =
                _[1] ||
                (() => {
                    const y = [],
                        m = (w) => {
                            try {
                                w();
                            } catch (C) {
                                y.push(C);
                            }
                        };
                    do {
                        l.f && m(l.f);
                        const w = new Set(),
                            C = w.add.bind(w);
                        i.forEach((N) => {
                            var R;
                            return (R = e.get(N)) == null
                                ? void 0
                                : R.l.forEach(C);
                        }),
                            i.clear(),
                            s.forEach(C),
                            s.clear(),
                            o.forEach(C),
                            o.clear(),
                            w.forEach(m),
                            i.size && F();
                    } while (i.size || s.size || o.size);
                    if (y.length) throw new AggregateError(y);
                }),
            F =
                _[2] ||
                (() => {
                    const y = [],
                        m = new WeakSet(),
                        w = new WeakSet(),
                        C = Array.from(i);
                    for (; C.length; ) {
                        const N = C[C.length - 1],
                            R = x(N);
                        if (w.has(N)) {
                            C.pop();
                            continue;
                        }
                        if (m.has(N)) {
                            if (n.get(N) === R.n) y.push([N, R]);
                            else if (
                                (Et ? 'production' : void 0) !== 'production' &&
                                n.has(N)
                            )
                                throw new Error(
                                    '[Bug] invalidated atom exists'
                                );
                            w.add(N), C.pop();
                            continue;
                        }
                        m.add(N);
                        for (const B of On(N, R, e)) m.has(B) || C.push(B);
                    }
                    for (let N = y.length - 1; N >= 0; --N) {
                        const [R, B] = y[N];
                        let D = !1;
                        for (const K of B.d.keys())
                            if (K !== R && i.has(K)) {
                                D = !0;
                                break;
                            }
                        D && (z(R), Y(R)), n.delete(R);
                    }
                }),
            z =
                _[3] ||
                ((y) => {
                    var m;
                    const w = x(y);
                    if (
                        Fn(w) &&
                        ((e.has(y) && n.get(y) !== w.n) ||
                            Array.from(w.d).every(([$, Se]) => z($).n === Se))
                    )
                        return w;
                    w.d.clear();
                    let C = !0;
                    const N = () => {
                            e.has(y) && (Y(y), F(), k());
                        },
                        R = ($) => {
                            var Se;
                            if (kn(y, $)) {
                                const te = x($);
                                if (!Fn(te))
                                    if (Nn($)) nr($, $.init, x);
                                    else throw new Error('no atom init');
                                return Bt(te);
                            }
                            const we = z($);
                            try {
                                return Bt(we);
                            } finally {
                                w.d.set($, we.n),
                                    Un(w.v) && ma(y, w.v, we),
                                    (Se = e.get($)) == null || Se.t.add(y),
                                    C || N();
                            }
                        };
                    let B, D;
                    const K = {
                            get signal() {
                                return (
                                    B || (B = new AbortController()), B.signal
                                );
                            },
                            get setSelf() {
                                return (
                                    (Et ? 'production' : void 0) !==
                                        'production' &&
                                        !rr(y) &&
                                        console.warn(
                                            'setSelf function cannot be used with read-only atom'
                                        ),
                                    !D &&
                                        rr(y) &&
                                        (D = (...$) => {
                                            if (
                                                ((Et
                                                    ? 'production'
                                                    : void 0) !==
                                                    'production' &&
                                                    C &&
                                                    console.warn(
                                                        'setSelf function cannot be called in sync'
                                                    ),
                                                !C)
                                            )
                                                try {
                                                    return X(y, ...$);
                                                } finally {
                                                    F(), k();
                                                }
                                        }),
                                    D
                                );
                            },
                        },
                        G = w.n;
                    try {
                        const $ = u(y, R, K);
                        return (
                            nr(y, $, x),
                            Xt($) &&
                                (ga($, () => (B == null ? void 0 : B.abort())),
                                $.then(N, N)),
                            w
                        );
                    } catch ($) {
                        return delete w.v, (w.e = $), ++w.n, w;
                    } finally {
                        (C = !1),
                            G !== w.n &&
                                n.get(y) === G &&
                                (n.set(y, w.n),
                                i.add(y),
                                (m = l.c) == null || m.call(l, y));
                    }
                }),
            H =
                _[4] ||
                ((y) => {
                    const m = [y];
                    for (; m.length; ) {
                        const w = m.pop(),
                            C = x(w);
                        for (const N of On(w, C, e)) {
                            const R = x(N);
                            n.set(N, R.n), m.push(N);
                        }
                    }
                }),
            X =
                _[5] ||
                ((y, ...m) => {
                    let w = !0;
                    const C = (R) => Bt(z(R)),
                        N = (R, ...B) => {
                            var D;
                            const K = x(R);
                            try {
                                if (kn(y, R)) {
                                    if (!Nn(R))
                                        throw new Error('atom not writable');
                                    const G = K.n,
                                        $ = B[0];
                                    nr(R, $, x),
                                        Y(R),
                                        G !== K.n &&
                                            (i.add(R),
                                            (D = l.c) == null || D.call(l, R),
                                            H(R));
                                    return;
                                } else return X(R, ...B);
                            } finally {
                                w || (F(), k());
                            }
                        };
                    try {
                        return f(y, C, N, ...m);
                    } finally {
                        w = !1;
                    }
                }),
            Y =
                _[6] ||
                ((y) => {
                    var m;
                    const w = x(y),
                        C = e.get(y);
                    if (C && !Un(w.v)) {
                        for (const [N, R] of w.d)
                            if (!C.d.has(N)) {
                                const B = x(N);
                                W(N).t.add(y),
                                    C.d.add(N),
                                    R !== B.n &&
                                        (i.add(N),
                                        (m = l.c) == null || m.call(l, N),
                                        H(N));
                            }
                        for (const N of C.d || [])
                            if (!w.d.has(N)) {
                                C.d.delete(N);
                                const R = J(N);
                                R == null || R.t.delete(y);
                            }
                    }
                }),
            W =
                _[7] ||
                ((y) => {
                    var m;
                    const w = x(y);
                    let C = e.get(y);
                    if (!C) {
                        z(y);
                        for (const N of w.d.keys()) W(N).t.add(y);
                        if (
                            ((C = {
                                l: new Set(),
                                d: new Set(w.d.keys()),
                                t: new Set(),
                            }),
                            e.set(y, C),
                            (m = l.m) == null || m.call(l, y),
                            rr(y))
                        ) {
                            const N = () => {
                                let R = !0;
                                const B = (...D) => {
                                    try {
                                        return X(y, ...D);
                                    } finally {
                                        R || (F(), k());
                                    }
                                };
                                try {
                                    const D = b(y, B);
                                    D &&
                                        (C.u = () => {
                                            R = !0;
                                            try {
                                                D();
                                            } finally {
                                                R = !1;
                                            }
                                        });
                                } finally {
                                    R = !1;
                                }
                            };
                            o.add(N);
                        }
                    }
                    return C;
                }),
            J =
                _[8] ||
                ((y) => {
                    var m;
                    const w = x(y);
                    let C = e.get(y);
                    if (
                        C &&
                        !C.l.size &&
                        !Array.from(C.t).some((N) => {
                            var R;
                            return (R = e.get(N)) == null ? void 0 : R.d.has(y);
                        })
                    ) {
                        C.u && s.add(C.u),
                            (C = void 0),
                            e.delete(y),
                            (m = l.u) == null || m.call(l, y);
                        for (const N of w.d.keys()) {
                            const R = J(N);
                            R == null || R.t.delete(y);
                        }
                        return;
                    }
                    return C;
                }),
            q = [t, e, n, i, o, s, l, u, f, d, b, x, k, F, z, H, X, Y, W, J],
            L = {
                get: (y) => Bt(z(y)),
                set: (y, ...m) => {
                    try {
                        return X(y, ...m);
                    } finally {
                        F(), k();
                    }
                },
                sub: (y, m) => {
                    const C = W(y).l;
                    return (
                        C.add(m),
                        k(),
                        () => {
                            C.delete(m), J(y), k();
                        }
                    );
                },
            };
        return Object.defineProperty(L, ns, { value: q }), L;
    },
    wa = as,
    is = rs,
    Dn = ga,
    Tr = {};
let os = 0;
function ss(t, e) {
    const n = `atom${++os}`,
        i = {
            toString() {
                return (Tr ? 'production' : void 0) !== 'production' &&
                    this.debugLabel
                    ? n + ':' + this.debugLabel
                    : n;
            },
        };
    return (i.init = t), (i.read = ls), (i.write = cs), i;
}
function ls(t) {
    return t(this);
}
function cs(t, e, n) {
    return e(this, typeof n == 'function' ? n(t(this)) : n);
}
const us = () => {
    let t = 0;
    const e = is({}),
        n = new WeakMap(),
        i = new WeakMap(),
        o = wa(
            n,
            i,
            void 0,
            void 0,
            void 0,
            void 0,
            e,
            void 0,
            (u, f, d, ...b) => (t ? d(u, ...b) : u.write(f, d, ...b))
        ),
        s = new Set();
    return (
        e.m.add(void 0, (u) => {
            s.add(u);
            const f = n.get(u);
            f.m = i.get(u);
        }),
        e.u.add(void 0, (u) => {
            s.delete(u);
            const f = n.get(u);
            delete f.m;
        }),
        Object.assign(o, {
            dev4_get_internal_weak_map: () => (
                console.log(
                    'Deprecated: Use devstore from the devtools library'
                ),
                n
            ),
            dev4_get_mounted_atoms: () => s,
            dev4_restore_atoms: (u) => {
                const f = {
                    read: () => null,
                    write: (d, b) => {
                        ++t;
                        try {
                            for (const [_, x] of u) 'init' in _ && b(_, x);
                        } finally {
                            --t;
                        }
                    },
                };
                o.set(f);
            },
        })
    );
};
function ds() {
    return (Tr ? 'production' : void 0) !== 'production' ? us() : wa();
}
let St;
function hs() {
    return (
        St ||
            ((St = ds()),
            (Tr ? 'production' : void 0) !== 'production' &&
                (globalThis.__JOTAI_DEFAULT_STORE__ ||
                    (globalThis.__JOTAI_DEFAULT_STORE__ = St),
                globalThis.__JOTAI_DEFAULT_STORE__ !== St &&
                    console.warn(
                        'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044'
                    ))),
        St
    );
}
const fs = {},
    ps = U.createContext(void 0);
function xa(t) {
    return U.useContext(ps) || hs();
}
const hr = (t) => typeof (t == null ? void 0 : t.then) == 'function',
    fr = (t) => {
        t.status ||
            ((t.status = 'pending'),
            t.then(
                (e) => {
                    (t.status = 'fulfilled'), (t.value = e);
                },
                (e) => {
                    (t.status = 'rejected'), (t.reason = e);
                }
            ));
    },
    vs =
        Ht.use ||
        ((t) => {
            if (t.status === 'pending') throw t;
            if (t.status === 'fulfilled') return t.value;
            throw t.status === 'rejected' ? t.reason : (fr(t), t);
        }),
    ir = new WeakMap(),
    jn = (t, e) => {
        let n = ir.get(t);
        return (
            n ||
                ((n = new Promise((i, o) => {
                    let s = t;
                    const l = (d) => (b) => {
                            s === d && i(b);
                        },
                        u = (d) => (b) => {
                            s === d && o(b);
                        },
                        f = () => {
                            try {
                                const d = e();
                                hr(d)
                                    ? (ir.set(d, n),
                                      (s = d),
                                      d.then(l(d), u(d)),
                                      Dn(d, f))
                                    : i(d);
                            } catch (d) {
                                o(d);
                            }
                        };
                    t.then(l(t), u(t)), Dn(t, f);
                })),
                ir.set(t, n)),
            n
        );
    };
function gs(t, e) {
    const { delay: n, unstable_promiseStatus: i = !Ht.use } = {},
        o = xa(),
        [[s, l, u], f] = U.useReducer(
            (b) => {
                const _ = o.get(t);
                return Object.is(b[0], _) && b[1] === o && b[2] === t
                    ? b
                    : [_, o, t];
            },
            void 0,
            () => [o.get(t), o, t]
        );
    let d = s;
    if (
        ((l !== o || u !== t) && (f(), (d = o.get(t))),
        U.useEffect(() => {
            const b = o.sub(t, () => {
                if (i)
                    try {
                        const _ = o.get(t);
                        hr(_) && fr(jn(_, () => o.get(t)));
                    } catch {}
                if (typeof n == 'number') {
                    setTimeout(f, n);
                    return;
                }
                f();
            });
            return f(), b;
        }, [o, t, n, i]),
        U.useDebugValue(d),
        hr(d))
    ) {
        const b = jn(d, () => o.get(t));
        return i && fr(b), vs(b);
    }
    return d;
}
function ms(t, e) {
    const n = xa();
    return U.useCallback(
        (...o) => {
            if (
                (fs ? 'production' : void 0) !== 'production' &&
                !('write' in t)
            )
                throw new Error('not writable atom');
            return n.set(t, ...o);
        },
        [n, t]
    );
}
function kr(t, e) {
    return [gs(t), ms(t)];
}
const ws =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsSAAALEgHS3X78AAAHOklEQVR4nO2d0XHbOBCGv9zcO92B1YHdgXkVRPfOmSgVxGEDURrg+SqIMsMCnApCVWCrA6mDsILcA5ZnS5YIcAHSoMxvJg8XkQByPwEsFtjFu9+/fzMRD3+8dgMm9vlziErqLE+HqKdvkrKo+q7jXcghq87yC2AOpMAMuAlWeFxsgEegAqqkLLahCg4iSJ3lC4wQ770LGydrYJWUxcq3IC9BRIglcOnbkDNhByx9hFEJUmf5NbACrrQVnzk7YKGZczpbWXWW3wIPTGK0cQn8rLP8ruuLzj1EJuw74EPXSt44a2CelMUvl4edBBExKqZeoWUDpC6iuA5ZFZMYPlwBlXzYrVgFqbN8xSRGCK6Ae9tDrYLIBD7NGeG4qbN82fbAyTmkzvIZZjWaBG/WxF+nTOI2X9aK8GLUmG5bAVtgG9Lt4Iv43K7lT0p/C947qeMFR3uINOxnwAZspBH3ruZfDMgCeIFxC4UW5+OxFf0pQSrCOAZ/YFwJjwHKelVkPl0SbtTYJWUxO/zLF4IE6h01cBvC2RYTMq/eE87qfNFLjllZC89KdphF0Mr24NhIymKblMU18D1QkfPDvzgmyIuHOrAGrs9hiGojKYsF8DFAUe8PF4t7gshwpR0jvydl4eQeOAdkBAghyl4HODR7U2WhG/lqVESwxasyv5OyWNVZDvDNo+498/dQkKO2sQOdhrk6y+c8bfVGsblVZ3mNWQjfY7ZlnYZdESVF79FoFWSmKPCzy9clY+Wt/Ilx9Z9gTP0bgDrL1xhL0UWYW/Qf197y4nBS72rOrZOysG7CyALrEfhCnGIc4wZ4kG3qVmTetD7ngu+5LGsjRIwHIhmaFHwTj3cr4pta+1bmI8gP21AlYlQedcTCB8ft2KVvRT6CtPr2n+0yjmWIsvHJNnxJL9n4VKIVpHZYiS85HzEa7hx2/aybUG1oBXHpHZ+UZcdMgn3ejE8QAlkckbJo+1HM5FpbuFYQm3skVZY7Bq7E69uG2penFcRW4bmf8U0tv6sFUYUjtDkQe/JLbTAWWyjH5QK/ddHM8ru6nYPEhyipMZbaqgcP8lIWe9GdqIlVkE7HL5XcYhycfZjmW+2LMYa0rYfYV5HyvUzUFrbaF2MTZIPfjmVXtgPW5URsgiwG3nHU7v/0RkyCfB1yL14cn9GZ5zEJ0jm4RYuY5lWPVaTaF2Oxsta2oUq+6Dlwgd9Qc03/Ts8KsxnXmVgEaR2qxFn5MFBbXpVYhizbRB7d5NsXsQhiY/baDTggtfyuNt0nQXTcyJx2irMXJEZWx3YP5ZS82nE5CaKnCeRMwZyMl3C1f3wKjcXKGitXmAQBwQqcekhkTIJExiRIZEyCRMYkSGRMgkTGWAR5E2FyMJJ1iMSgDLZf0hVZsTdJBrxOsoxCkNiRvZwKs3Kv8Ig5HMuQNRokKkAdkjAJ0g+V9sVYBLFmWhsZW+2LsQgy5FmsIRj89HtoLl0CK98CMVlZH55l23EO3D83YhIE9gP3X7kprXy2xOen2oL7GLLewqraZoRstQUHF+StDjUHbLUvxjKpTwgqQRzC1naacif66yF9BcKMBfVJS60gqeX3aD2zAzG4IK0ra0lK450ZJ2K2lt9n2oK1glxZjlJCgMw4EWMbkgfvIWBPMVERLp1qTHy3xOnP8Ig/6U0Q+D+d6jmJUmPCqdtIfSrwESSRg8XtDxlR/vWoJxZq3G7J8fJc+5q9S4dELCRlcQv8jUeWnFemydZti/Sa4RlIeihI163HBMc1R1IW90lZXGCSD3tlXRuQGtO7XbN1e5v7e8n46yy/R6fw16Qsll1ekK+pCeK00dzn4ROsucE4PivH5yvg0TVu3uMSg3VSFmnzH4fu90d0gnyps3zbJQG/rFU6fVEyZ3WNv2jG/t6cns/2cTTstetwyKqUhYJJp7rweN+K7EF87vjafAAP9Ap97z0tiKwdfCbeb5rbLbvgkrj5GZu+r9yWrWefy2/2etaxHcN7/E7ffZIu3Gfekg1uWbh7c3IGug/4x+H/o2Nm78qjgob3wGOPQ9jM8bm0j8qfpebwvWnnxQfT9x1UIFdaE+hCMBG5y1HNk1fUKeq+xvxbQiStcbuDSipOCXtLG5i5aYURplIVYMS4o9sE6mVliQgpxlUU8sZT91vapCEV4XrJMXY83WfY8Isnq2PG09B0gd/Vdc3H0PTQ5/U0PK+vqTOln2tnN3KX1QvajgEt6Pemz0uGS0KZEFem7ZM+wJO+LFm4LXtozFvna9uQbb1PPdZ0qiNlz01yDKu3V9znY3EGxoxTgk9X93vKJIoPG9z2UtwEkYJSzmv3byjWOIoBDnPIIUqP61ul87ZEZ0EgmB/nnNlhfHlV1xdVgjTIynnJeG9gC80Oc135SluAlyANIsycCBMTD8Qac4vDyregIII0SAD9HGMAzOjX9fKabDBejAoT7bUNVXBQQU4RweXDQeh7swsGEmTCnf8AbPORaYWuTiIAAAAASUVORK5CYII=',
    Ve = [
        'DSC00680',
        'DSC00933',
        'DSC00966',
        'DSC00983',
        'DSC01011',
        'DSC01040',
        'DSC01064',
        'DSC01071',
        'DSC01103',
        'DSC01145',
        'DSC01420',
        'DSC01461',
        'DSC01489',
        'DSC02031',
        'DSC02064',
        'DSC02069',
    ],
    Nr = ss(0),
    Oe = [{ front: 'book-cover', back: Ve[0] }];
for (let t = 1; t < Ve.length - 1; t += 2)
    Oe.push({ front: Ve[t % Ve.length], back: Ve[(t + 1) % Ve.length] });
Oe.push({ front: Ve[Ve.length - 1], back: 'book-back' });
const xs = () => {
        const [t, e] = kr(Nr);
        return (
            U.useEffect(() => {
                new Audio('/audios/page-flip-01a.mp3').play();
            }, [t]),
            g.jsxs(g.Fragment, {
                children: [
                    g.jsxs('main', {
                        className:
                            'pointer-events-none fixed inset-0 z-10 flex flex-col justify-between select-none',
                        children: [
                            g.jsx('div', {
                                children: g.jsxs('h1', {
                                    className:
                                        'flex items-center gap-2 p-2 text-2xl text-white',
                                    children: [
                                        g.jsx('div', {
                                            className:
                                                'flex w-[52px] justify-center',
                                            children: g.jsx('img', {
                                                src: ws,
                                                alt: 'logo',
                                                className: '',
                                                loading: 'lazy',
                                            }),
                                        }),
                                        g.jsx('div', {
                                            children: 'The ENDPAGE',
                                        }),
                                    ],
                                }),
                            }),
                            g.jsx('div', {
                                className:
                                    'pointer-events-auto flex w-full justify-center overflow-auto',
                                children: g.jsxs('div', {
                                    className:
                                        'flex max-w-full items-center gap-4 overflow-auto p-10',
                                    children: [
                                        [...Oe].map((n, i) =>
                                            g.jsx(
                                                'button',
                                                {
                                                    className: `shrink-0 rounded-full border border-transparent px-4 py-3 text-lg uppercase transition-all duration-300 hover:border-white ${i === t ? 'bg-white/90 text-black' : 'bg-black/30 text-white'}`,
                                                    onClick: () => e(i),
                                                    children:
                                                        i === 0
                                                            ? 'Cover'
                                                            : `Souvennir ${i}`,
                                                },
                                                i
                                            )
                                        ),
                                        g.jsx('button', {
                                            className: `shrink-0 rounded-full border border-transparent px-4 py-3 text-lg uppercase transition-all duration-300 hover:border-white ${t === Oe.length ? 'bg-white/90 text-black' : 'bg-black/30 text-white'}`,
                                            onClick: () => e(Oe.length),
                                            children: 'Back Cover',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    g.jsx('div', {
                        className:
                            'fixed inset-0 flex -rotate-2 items-center select-none',
                        children: g.jsxs('div', {
                            className: 'relative',
                            children: [
                                g.jsxs('div', {
                                    className:
                                        'animate-horizontal-scroll flex w-max items-center gap-8 bg-white/0 px-8',
                                    children: [
                                        g.jsx('h1', {
                                            className:
                                                'text-10xl shrink-0 font-black text-white',
                                            children: 'Team Supernova',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'shrink-0 text-8xl font-light text-white italic',
                                            children: 'Souvennirs',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-12xl shrink-0 font-bold text-white',
                                            children: 'Personnels',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-12xl outline-text shrink-0 font-bold text-transparent italic',
                                            children: 'du pasée',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-medium text-white',
                                            children: 'et peut être',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-extralight text-white italic',
                                            children: 'au futur',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-13xl shrink-0 font-bold text-white',
                                            children: 'de la',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-13xl outline-text shrink-0 font-bold text-transparent italic',
                                            children: 'réalité',
                                        }),
                                    ],
                                }),
                                g.jsxs('div', {
                                    className:
                                        'animate-horizontal-scroll-2 absolute top-0 left-0 flex w-max items-center gap-8 bg-white/0 px-8',
                                    children: [
                                        g.jsx('h1', {
                                            className:
                                                'text-10xl shrink-0 font-black text-white',
                                            children: 'Supernova',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'shrink-0 text-8xl font-light text-white italic',
                                            children: 'Souvennirs',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-12xl shrink-0 font-bold text-white',
                                            children: 'Personnels',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-12xl outline-text shrink-0 font-bold text-transparent italic',
                                            children: 'Ultimate Guide',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-medium text-white',
                                            children: 'Tutorials',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-extralight text-white italic',
                                            children: 'Learn',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-13xl shrink-0 font-bold text-white',
                                            children: 'Practice',
                                        }),
                                        g.jsx('h2', {
                                            className:
                                                'text-13xl outline-text shrink-0 font-bold text-transparent italic',
                                            children: 'Creative',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            })
        );
    },
    ys = Math.PI / 180;
function Pn(t) {
    return t * ys;
}
const _s = ea((t) => ({
        isModalOpen: !1,
        selectedItems: null,
        setSelectedItems: (e) => t({ selectedItems: e }),
        openModal: () => t({ isModalOpen: !0 }),
        closeModal: () => t({ isModalOpen: !1 }),
    })),
    ya = () => {
        const {
            isModalOpen: t,
            openModal: e,
            closeModal: n,
            setSelectedItems: i,
            selectedItems: o,
        } = _s();
        return {
            isModalOpen: t,
            selectedItems: o,
            setSelectedItems: i,
            openModal: e,
            closeModal: n,
        };
    },
    bs = 0.5,
    Ss = 0.3,
    Es = 0.18,
    Ms = 0.05,
    Is = 0.09,
    Fr = 1.28,
    As = 1.71,
    pr = 0.003,
    Ur = 30,
    Gt = Fr / Ur,
    Nt = new Ri(Fr, As, pr, Ur, 2);
Nt.translate(Fr / 2, 0, 0);
const Ln = Nt.attributes.position,
    Bn = new be(),
    _a = [],
    ba = [];
for (let t = 0; t < Ln.count; t++) {
    Bn.fromBufferAttribute(Ln, t);
    const e = Bn.x,
        n = Math.max(0, Math.floor(e / Gt));
    let i = (e % Gt) / Gt;
    _a.push(n, n + 1, 0, 0), ba.push(1 - i, i, 0, 0);
}
Nt.setAttribute('skinIndex', new Ti(_a, 4));
Nt.setAttribute('skinWeight', new ki(ba, 4));
const At = new qt('white'),
    zn = new qt('orange'),
    Cs = [
        new nt({ color: At }),
        new nt({ color: '#111' }),
        new nt({ color: At }),
        new nt({ color: At }),
    ];
Oe.forEach((t) => {
    it.preload(`/textures/${t.front}.jpg`),
        it.preload(`/textures/${t.back}.jpg`),
        it.preload('/textures/book-cover-roughness.jpg');
});
const Rs = ({
        number: t,
        front: e,
        back: n,
        page: i,
        opened: o,
        bookClosed: s,
        ...l
    }) => {
        const [u, f, d] = it([
            `/textures/${e}.jpg`,
            `/textures/${n}.jpg`,
            ...(t === 0 || t === Oe.length - 1
                ? ['/textures/book-cover-roughness.jpg']
                : []),
        ]);
        u.colorSpace = f.colorSpace = $n;
        const b = U.useRef(),
            _ = U.useRef(0),
            x = U.useRef(o),
            k = U.useRef(),
            F = U.useMemo(() => {
                const W = [];
                for (let y = 0; y <= Ur; y++) {
                    let m = new Ii();
                    W.push(m),
                        y === 0 ? (m.position.x = 0) : (m.position.x = Gt),
                        y > 0 && W[y - 1].add(m);
                }
                const J = new Ai(W),
                    q = [
                        ...Cs,
                        new nt({
                            color: At,
                            map: u,
                            ...(t === 0
                                ? { roughnessMap: d }
                                : { roughness: 0.1 }),
                            emissive: zn,
                            emissiveIntensity: 0,
                        }),
                        new nt({
                            color: At,
                            map: f,
                            ...(t === Oe.length - 1
                                ? { roughnessMap: d }
                                : { roughness: 0.1 }),
                            emissive: zn,
                            emissiveIntensity: 0,
                        }),
                    ],
                    L = new Ci(Nt, q);
                return (
                    (L.castShadow = !0),
                    (L.receiveShadow = !0),
                    (L.frustumCulled = !1),
                    L.add(J.bones[0]),
                    L.bind(J),
                    L
                );
            }, []);
        br((W, J) => {
            if (!k.current) return;
            const q = z ? 0.22 : 0;
            (k.current.material[4].emissiveIntensity =
                k.current.material[5].emissiveIntensity =
                    Yn.lerp(k.current.material[4].emissiveIntensity, q, 0.1)),
                x.current !== o && ((_.current = +new Date()), (x.current = o));
            let L = Math.min(400, new Date() - _.current) / 400;
            L = Math.sin(L * Math.PI);
            let y = o ? -Math.PI / 2 : Math.PI / 2;
            s || (y += Pn(t * 0.8));
            const m = k.current.skeleton.bones;
            for (let w = 0; w < m.length; w++) {
                const C = w === 0 ? b.current : m[w],
                    N = w < 8 ? Math.sin(w * 0.2 + 0.25) : 0,
                    R = w >= 8 ? Math.cos(w * 0.3 + 0.09) : 0,
                    B = Math.sin(w * Math.PI * (1 / m.length)) * L;
                let D = Es * N * y - Ms * R * y + Is * B * y,
                    K = Pn(Math.sign(y) * 2);
                s && (w === 0 ? ((D = y), (K = 0)) : ((D = 0), (K = 0))),
                    Rn.dampAngle(C.rotation, 'y', D, bs, J);
                const G =
                    w > 8
                        ? Math.sin(w * Math.PI * (1 / m.length) - 0.5) * L
                        : 0;
                Rn.dampAngle(C.rotation, 'x', K * G, Ss, J);
            }
        }),
            kr(Nr);
        const [z, H] = U.useState(!1);
        Oi(z);
        const { setSelectedItems: X, openModal: Y } = ya();
        return g.jsx('group', {
            ...l,
            ref: b,
            onPointerEnter: (W) => {
                W.stopPropagation(), H(!0);
            },
            onPointerLeave: (W) => {
                W.stopPropagation(), H(!1);
            },
            onClick: (W) => {
                W.stopPropagation(),
                    H(!1),
                    X({ front: u, back: f, number: t }),
                    Y();
            },
            children: g.jsx('primitive', {
                object: F,
                ref: k,
                'position-z': -t * pr + i * pr,
            }),
        });
    },
    Ts = ({ ...t }) => {
        const [e] = kr(Nr),
            [n, i] = U.useState(e);
        return (
            U.useEffect(() => {
                let o;
                const s = () => {
                    i((l) => {
                        if (e === l) return l;
                        if (
                            ((o = setTimeout(
                                () => {
                                    s();
                                },
                                Math.abs(e - l) > 2 ? 50 : 150
                            )),
                            e > l)
                        )
                            return l + 1;
                        if (e < l) return l - 1;
                    });
                };
                return (
                    s(),
                    () => {
                        clearTimeout(o);
                    }
                );
            }, [e]),
            g.jsx('group', {
                ...t,
                'rotation-y': -Math.PI / 2,
                children: [...Oe].map((o, s) =>
                    g.jsx(
                        Rs,
                        {
                            page: n,
                            number: s,
                            opened: n > s,
                            bookClosed: n === 0 || n === Oe.length,
                            ...o,
                        },
                        s
                    )
                ),
            })
        );
    },
    ks = () =>
        g.jsxs(g.Fragment, {
            children: [
                g.jsx(jo, {
                    'rotation-x': -Math.PI / 4,
                    floatIntensity: 1,
                    speed: 2,
                    rotationIntensity: 2,
                    children: g.jsx(Ts, {}),
                }),
                g.jsx(Fi, {}),
                g.jsx(Jo, { preset: 'studio' }),
                g.jsx('directionalLight', {
                    position: [2, 5, 2],
                    intensity: 2.5,
                    castShadow: !0,
                    'shadow-mapSize-width': 2048,
                    'shadow-mapSize-height': 2048,
                    'shadow-bias': -1e-4,
                }),
                g.jsxs('mesh', {
                    'position-y': -1.5,
                    'rotation-x': -Math.PI / 2,
                    receiveShadow: !0,
                    children: [
                        g.jsx('planeGeometry', { args: [100, 100] }),
                        g.jsx('shadowMaterial', {
                            transparent: !0,
                            opacity: 0.2,
                        }),
                    ],
                }),
            ],
        });
/*!
 * Physics2DPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Be,
    vr,
    Sa,
    gr,
    Ea,
    Gn = Math.PI / 180,
    Ma = function () {
        return (
            Be ||
            (typeof window < 'u' &&
                (Be = window.gsap) &&
                Be.registerPlugin &&
                Be)
        );
    },
    Hn = function (e) {
        return Math.round(e * 1e4) / 1e4;
    },
    Zn = function (e) {
        (Be = e || Ma()),
            vr ||
                ((Sa = Be.utils.getUnit),
                (gr = Be.core.getStyleSaver),
                (Ea = Be.core.reverting || function () {}),
                (vr = 1));
    },
    Wn = function (e, n, i, o, s) {
        var l = e._gsap,
            u = l.get(e, n);
        (this.p = n),
            (this.set = l.set(e, n)),
            (this.s = this.val = parseFloat(u)),
            (this.u = Sa(u) || 0),
            (this.vel = i || 0),
            (this.v = this.vel / s),
            o || o === 0
                ? ((this.acc = o), (this.a = this.acc / (s * s)))
                : (this.acc = this.a = 0);
    },
    Ia = {
        version: '3.13.0',
        name: 'physics2D',
        register: Zn,
        init: function (e, n, i) {
            vr || Zn();
            var o = this,
                s = +n.angle || 0,
                l = +n.velocity || 0,
                u = +n.acceleration || 0,
                f = n.xProp || 'x',
                d = n.yProp || 'y',
                b =
                    n.accelerationAngle || n.accelerationAngle === 0
                        ? +n.accelerationAngle
                        : s;
            (o.styles =
                gr &&
                gr(
                    e,
                    n.xProp && n.xProp !== 'x'
                        ? n.xProp + ',' + n.yProp
                        : 'transform'
                )),
                (o.target = e),
                (o.tween = i),
                (o.step = 0),
                (o.sps = 30),
                n.gravity && ((u = +n.gravity), (b = 90)),
                (s *= Gn),
                (b *= Gn),
                (o.fr = 1 - (+n.friction || 0)),
                o._props.push(f, d),
                (o.xp = new Wn(e, f, Math.cos(s) * l, Math.cos(b) * u, o.sps)),
                (o.yp = new Wn(e, d, Math.sin(s) * l, Math.sin(b) * u, o.sps)),
                (o.skipX = o.skipY = 0);
        },
        render: function (e, n) {
            var i = n.xp,
                o = n.yp,
                s = n.tween,
                l = n.target,
                u = n.step,
                f = n.sps,
                d = n.fr,
                b = n.skipX,
                _ = n.skipY,
                x = s._from ? s._dur - s._time : s._time,
                k,
                F,
                z,
                H,
                X,
                Y;
            if (s._time || !Ea()) {
                if (d === 1)
                    (z = x * x * 0.5),
                        (k = i.s + i.vel * x + i.acc * z),
                        (F = o.s + o.vel * x + o.acc * z);
                else {
                    for (
                        x *= f,
                            H = Y = (x | 0) - u,
                            Y < 0 &&
                                ((i.v = i.vel / f),
                                (o.v = o.vel / f),
                                (i.val = i.s),
                                (o.val = o.s),
                                (n.step = 0),
                                (H = Y = x | 0)),
                            X = (x % 1) * d;
                        Y--;

                    )
                        (i.v += i.a),
                            (o.v += o.a),
                            (i.v *= d),
                            (o.v *= d),
                            (i.val += i.v),
                            (o.val += o.v);
                    (k = i.val + i.v * X), (F = o.val + o.v * X), (n.step += H);
                }
                b || i.set(l, i.p, Hn(k) + i.u),
                    _ || o.set(l, o.p, Hn(F) + o.u);
            } else n.styles.revert();
        },
        kill: function (e) {
            this.xp.p === e && (this.skipX = 1),
                this.yp.p === e && (this.skipY = 1);
        },
    };
Ma() && Be.registerPlugin(Ia);
We.registerPlugin(Ia);
const mr = ({ children: t }) => {
    const e = U.useRef();
    function n() {
        e.current.addEventListener('click', (i) => {
            const o = We.utils.random(5, 10);
            for (let s = 0; s < o; s++) {
                const l = document.createElement('div');
                l.classList.add('flair'), l.classList.add('dot');
                const u = 'flair--' + We.utils.random(2, 35, 1);
                l.classList.add(u),
                    document.body.appendChild(l),
                    We.set(l, { top: i.clientY, left: i.clientX, scale: 0 }),
                    We.timeline({ onComplete: () => l.remove() })
                        .to(l, {
                            scale: We.utils.random(0.3, 1),
                            duration: 0.3,
                            ease: 'power3.out',
                        })
                        .to(
                            l,
                            {
                                duration: 2,
                                physics2D: {
                                    velocity: We.utils.random(500, 1e3),
                                    angle: We.utils.random(0, 360),
                                    gravity: 1500,
                                },
                                autoAlpha: 0,
                                ease: 'none',
                            },
                            '<'
                        );
            }
        });
    }
    return (
        U.useEffect(
            () => (
                n(),
                () => {
                    document.removeEventListener('click', n);
                }
            ),
            [t]
        ),
        g.jsxs('div', {
            ref: e,
            className: 'pastilles-for-element',
            children: [g.jsx('div', { className: 'flair--2' }), t],
        })
    );
};
function Ns({
    isModalOpen: t,
    handleCloseModal: e,
    handleSave: n,
    selectedItems: i,
    setSelectedItems: o,
}) {
    return (
        U.useEffect(() => {
            i && console.log(i);
        }, [i]),
        g.jsx(g.Fragment, {
            children: g.jsx(Jn, {
                isOpen: t,
                onClose: () => {
                    o(null), e();
                },
                title: g.jsxs('div', {
                    className: 'flex items-center gap-3',
                    children: [
                        g.jsx('span', {
                            className: 'text-3xl',
                            children: '🧠',
                        }),
                        g.jsx('span', {
                            className:
                                'text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow',
                            children: 'Souvenir précieux',
                        }),
                        g.jsx('span', {
                            className: 'text-3xl',
                            children: '💭',
                        }),
                    ],
                }),
                size: 'xl',
                footer: g.jsx('div', {
                    className: 'flex justify-end space-x-2',
                    children: g.jsx(mr, {
                        children: g.jsx('button', {
                            className:
                                'rounded-full bg-yellow-200 px-4 py-2 font-bold text-yellow-800 shadow hover:bg-yellow-300',
                            onClick: e,
                            children: 'Fermer',
                        }),
                    }),
                }),
                children: g.jsx(mr, {
                    children: g.jsxs('div', {
                        className:
                            'relative w-full overflow-hidden rounded-3xl border-4 border-dashed border-pink-200 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 p-8 shadow-2xl',
                        children: [
                            g.jsx('span', {
                                className:
                                    'absolute top-4 left-8 text-5xl opacity-20',
                                children: '🧩',
                            }),
                            g.jsx('span', {
                                className:
                                    'absolute top-16 right-10 text-4xl opacity-20',
                                children: '📸',
                            }),
                            g.jsx('span', {
                                className:
                                    'absolute bottom-8 left-10 text-4xl opacity-20',
                                children: '🎨',
                            }),
                            g.jsx('span', {
                                className:
                                    'absolute right-8 bottom-4 text-5xl opacity-20',
                                children: '🌈',
                            }),
                            g.jsx('span', {
                                className:
                                    'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10 select-none',
                                children: '💖',
                            }),
                            g.jsxs('div', {
                                className:
                                    'flex w-full flex-row justify-center gap-10',
                                children: [
                                    g.jsxs('div', {
                                        className:
                                            'group relative flex cursor-pointer flex-col items-center rounded-2xl border-2 border-yellow-100 bg-white/70 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-yellow-300 hover:shadow-2xl',
                                        children: [
                                            g.jsx('span', {
                                                className:
                                                    'absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:rotate-12',
                                                children: '🎈',
                                            }),
                                            g.jsx('img', {
                                                className:
                                                    'h-60 w-44 rounded-xl border-4 border-yellow-200 object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-yellow-300/50',
                                                src:
                                                    (i == null
                                                        ? void 0
                                                        : i.front.source.data
                                                              .src) || null,
                                                alt: 'book-cover',
                                            }),
                                            g.jsxs('span', {
                                                className:
                                                    'mt-3 flex items-center gap-1 text-base font-bold text-blue-400',
                                                children: [
                                                    g.jsx('span', {
                                                        children: '<>',
                                                    }),
                                                    ' ',
                                                    g.jsx('span', {
                                                        className: 'text-lg',
                                                        children: '⭐',
                                                    }),
                                                ],
                                            }),
                                            g.jsx('span', {
                                                className:
                                                    'mt-1 text-xs text-gray-400 italic',
                                                children:
                                                    'Un moment inoubliable',
                                            }),
                                        ],
                                    }),
                                    g.jsxs('div', {
                                        className:
                                            'group relative flex cursor-pointer flex-col items-center rounded-2xl border-2 border-pink-100 bg-white/70 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-pink-300 hover:shadow-2xl',
                                        children: [
                                            g.jsx('span', {
                                                className:
                                                    'absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:-rotate-12',
                                                children: '🧸',
                                            }),
                                            g.jsx('img', {
                                                className:
                                                    'h-60 w-44 rounded-xl border-4 border-pink-200 object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:shadow-pink-300/50',
                                                src:
                                                    (i == null
                                                        ? void 0
                                                        : i.back.source.data
                                                              .src) || null,
                                                alt: 'book-back',
                                            }),
                                            g.jsxs('span', {
                                                className:
                                                    'mt-3 flex items-center gap-1 text-base font-bold text-pink-400',
                                                children: [
                                                    g.jsx('span', {
                                                        children: '<>',
                                                    }),
                                                    ' ',
                                                    g.jsx('span', {
                                                        className: 'text-lg',
                                                        children: '🌟',
                                                    }),
                                                ],
                                            }),
                                            g.jsx('span', {
                                                className:
                                                    'mt-1 text-xs text-gray-400 italic',
                                                children:
                                                    'Toujours dans le cœur',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            g.jsxs('div', {
                                className:
                                    'mt-8 flex flex-col items-center gap-2 text-center text-xl font-extrabold text-purple-400 italic',
                                children: [
                                    g.jsx('span', {
                                        children:
                                            '✨ Un souvenir à partager, à transmettre, à chérir ✨',
                                    }),
                                    g.jsx('span', {
                                        className: 'text-2xl',
                                        children: '📚💬',
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
function Fs({ isModalOpen: t, handleCloseModal: e, handleSave: n }) {
    const [i, o] = U.useState(''),
        [s, l] = U.useState(''),
        [u, f] = U.useState(null),
        [d, b] = U.useState(null),
        _ = (F) => {
            F.target.files[0] && f(F.target.files[0]);
        },
        x = (F) => {
            F.target.files[0] && b(F.target.files[0]);
        },
        k = () => {
            n({ title: i, description: s, frontImage: u, backImage: d }),
                o(''),
                l(''),
                f(null),
                b(null);
        };
    return g.jsx(Jn, {
        isOpen: t,
        onClose: () => {
            e();
        },
        title: g.jsxs('div', {
            className: 'flex items-center gap-3',
            children: [
                g.jsx('span', { className: 'text-3xl', children: '🧠' }),
                g.jsx('span', {
                    className:
                        'text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow',
                    children: 'Ajouter un souvenir',
                }),
                g.jsx('span', { className: 'text-3xl', children: '💭' }),
            ],
        }),
        size: 'xl',
        footer: g.jsx('div', {
            className: 'flex justify-end space-x-2',
            children: g.jsxs(mr, {
                children: [
                    g.jsx('button', {
                        className:
                            'rounded-full bg-yellow-200 px-4 py-2 font-bold text-yellow-800 shadow hover:bg-yellow-300',
                        onClick: e,
                        children: 'Fermer',
                    }),
                    g.jsx('button', {
                        className:
                            'rounded-full bg-blue-200 px-4 py-2 font-bold text-blue-800 shadow hover:bg-blue-300',
                        onClick: k,
                        children: 'Sauvegarder',
                    }),
                ],
            }),
        }),
        children: g.jsx('div', {
            className:
                'relative w-full overflow-hidden rounded-3xl border-4 border-dashed border-pink-200 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 p-8 shadow-2xl',
            children: g.jsxs('div', {
                className: 'flex flex-col gap-6',
                children: [
                    g.jsxs('div', {
                        className: 'group relative',
                        children: [
                            g.jsx('input', {
                                className:
                                    'peer w-full rounded-xl border-2 border-transparent bg-white/70 p-3 placeholder-transparent shadow-md transition-all duration-300 hover:shadow-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 focus:outline-none',
                                type: 'text',
                                placeholder: 'Titre du souvenir',
                                value: i,
                                onChange: (F) => o(F.target.value),
                                id: 'souvenir-title',
                                autoComplete: 'off',
                            }),
                            g.jsx('label', {
                                htmlFor: 'souvenir-title',
                                className:
                                    'pointer-events-none absolute top-3 left-3 rounded bg-white/70 px-1 text-base text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-500',
                                children: 'Titre du souvenir',
                            }),
                        ],
                    }),
                    g.jsxs('div', {
                        className: 'group relative',
                        children: [
                            g.jsx('textarea', {
                                className:
                                    'peer min-h-[80px] w-full resize-none rounded-xl border-2 border-transparent bg-white/70 p-3 placeholder-transparent shadow-md transition-all duration-300 hover:shadow-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 focus:outline-none',
                                placeholder: 'Description',
                                value: s,
                                onChange: (F) => l(F.target.value),
                                id: 'souvenir-description',
                                autoComplete: 'off',
                            }),
                            g.jsx('label', {
                                htmlFor: 'souvenir-description',
                                className:
                                    'pointer-events-none absolute top-3 left-3 rounded bg-white/70 px-1 text-base text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500',
                                children: 'Description',
                            }),
                        ],
                    }),
                    g.jsxs('div', {
                        className: 'flex gap-6',
                        children: [
                            g.jsxs('div', {
                                className: 'flex flex-col items-center',
                                children: [
                                    g.jsx('label', {
                                        className:
                                            'mb-2 font-semibold text-pink-500',
                                        children: 'Image de couverture',
                                    }),
                                    g.jsxs('label', {
                                        className:
                                            'group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-pink-300 bg-white/60 p-4 shadow transition-all duration-300 hover:bg-pink-50',
                                        children: [
                                            g.jsx('span', {
                                                className:
                                                    'mb-2 text-2xl transition-transform group-hover:scale-110',
                                                children: '📸',
                                            }),
                                            g.jsx('span', {
                                                className:
                                                    'text-sm text-pink-400 group-hover:text-pink-600',
                                                children: 'Choisir une image',
                                            }),
                                            g.jsx('input', {
                                                type: 'file',
                                                accept: 'image/*',
                                                onChange: _,
                                                className: 'hidden',
                                            }),
                                        ],
                                    }),
                                    u &&
                                        g.jsx('img', {
                                            src: URL.createObjectURL(u),
                                            alt: 'front',
                                            className:
                                                'mt-3 h-32 w-24 rounded-xl border-2 border-pink-200 object-cover shadow-lg',
                                        }),
                                ],
                            }),
                            g.jsxs('div', {
                                className: 'flex flex-col items-center',
                                children: [
                                    g.jsx('label', {
                                        className:
                                            'mb-2 font-semibold text-blue-500',
                                        children: 'Image de dos',
                                    }),
                                    g.jsxs('label', {
                                        className:
                                            'group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-white/60 p-4 shadow transition-all duration-300 hover:bg-blue-50',
                                        children: [
                                            g.jsx('span', {
                                                className:
                                                    'mb-2 text-2xl transition-transform group-hover:scale-110',
                                                children: '🖼️',
                                            }),
                                            g.jsx('span', {
                                                className:
                                                    'text-sm text-blue-400 group-hover:text-blue-600',
                                                children: 'Choisir une image',
                                            }),
                                            g.jsx('input', {
                                                type: 'file',
                                                accept: 'image/*',
                                                onChange: x,
                                                className: 'hidden',
                                            }),
                                        ],
                                    }),
                                    d &&
                                        g.jsx('img', {
                                            src: URL.createObjectURL(d),
                                            alt: 'back',
                                            className:
                                                'mt-3 h-32 w-24 rounded-xl border-2 border-blue-200 object-cover shadow-lg',
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
const Ls = () => {
    const {
            isModalOpen: t,
            closeModal: e,
            setSelectedItems: n,
            selectedItems: i,
        } = ya(),
        [o, s] = U.useState(!1),
        l = () => s(!0),
        u = () => s(!1),
        f = () => {
            s(!1);
        };
    return g.jsxs(g.Fragment, {
        children: [
            g.jsx(xs, {}),
            g.jsx(Ns, {
                handleCloseModal: e,
                isModalOpen: t,
                selectedItems: i,
                setSelectedItems: n,
            }),
            g.jsx('button', {
                className:
                    'absolute top-4 right-4 z-10 transform rounded-full bg-blue-200 px-4 py-2 font-bold text-blue-800 shadow transition duration-300 hover:scale-105 hover:bg-blue-300 hover:shadow-xl hover:ring-2 hover:ring-blue-400',
                onClick: l,
                children: 'Ajouter un souvenir',
            }),
            g.jsx(Fs, { handleCloseModal: u, isModalOpen: o, handleSave: f }),
            g.jsx(zi, {}),
            g.jsx(Ui, {
                style: { width: '100%', height: '100%' },
                shadows: !0,
                camera: {
                    position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
                    fov: 45,
                },
                className: 'bg-gradient',
                children: g.jsx('group', {
                    'position-y': 0,
                    children: g.jsx(U.Suspense, {
                        fallback: null,
                        children: g.jsx(ks, {}),
                    }),
                }),
            }),
        ],
    });
};
export { Ls as default };
