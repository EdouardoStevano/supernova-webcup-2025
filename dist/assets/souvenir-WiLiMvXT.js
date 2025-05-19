import {
    k as ye,
    K as me,
    r as E,
    V as Y,
    Q as ne,
    T as oe,
    U as at,
    W as lt,
    Y as ke,
    Z as W,
    $ as Ie,
    a0 as an,
    a1 as ln,
    a2 as q,
    l as Ye,
    n as cn,
    a3 as kt,
    j as r,
    a4 as ve,
    a5 as un,
    a6 as dn,
    a7 as hn,
    a8 as se,
    a9 as It,
    aa as fn,
    ab as pn,
    ac as ct,
    ad as mn,
    ae as gn,
    af as xn,
    ag as bn,
    B as J,
    L as vn,
    C as wn,
} from './index-BRBA0OY8.js';
import { M as Tt } from './index-DbG5_gx-.js';
import './index-BjnEytZW.js';
const ut = (t) => {
        let n;
        const o = new Set(),
            e = (m, p) => {
                const b = typeof m == 'function' ? m(n) : m;
                if (!Object.is(b, n)) {
                    const x = n;
                    (n =
                        (p ?? (typeof b != 'object' || b === null))
                            ? b
                            : Object.assign({}, n, b)),
                        o.forEach((j) => j(n, x));
                }
            },
            i = () => n,
            l = {
                setState: e,
                getState: i,
                getInitialState: () => f,
                subscribe: (m) => (o.add(m), () => o.delete(m)),
            },
            f = (n = t(e, i, l));
        return l;
    },
    yn = (t) => (t ? ut(t) : ut),
    jn = (t) => t;
function Sn(t, n = jn) {
    const o = ye.useSyncExternalStore(
        t.subscribe,
        () => n(t.getState()),
        () => n(t.getInitialState())
    );
    return ye.useDebugValue(o), o;
}
const dt = (t) => {
        const n = yn(t),
            o = (e) => Sn(n, e);
        return Object.assign(o, n), o;
    },
    _t = (t) => (t ? dt(t) : dt);
let ce = 0;
const En = _t(
        (t) => (
            (me.onStart = (n, o, e) => {
                t({
                    active: !0,
                    item: n,
                    loaded: o,
                    total: e,
                    progress: ((o - ce) / (e - ce)) * 100,
                });
            }),
            (me.onLoad = () => {
                t({ active: !1 });
            }),
            (me.onError = (n) => t((o) => ({ errors: [...o.errors, n] }))),
            (me.onProgress = (n, o, e) => {
                o === e && (ce = e),
                    t({
                        active: !0,
                        item: n,
                        loaded: o,
                        total: e,
                        progress: ((o - ce) / (e - ce)) * 100 || 100,
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
    Pn = (t) => `Loading ${t.toFixed(2)}%`;
function An({
    containerStyles: t,
    innerStyles: n,
    barStyles: o,
    dataStyles: e,
    dataInterpolation: i = Pn,
    initialState: a = (c) => c,
}) {
    const { active: c, progress: l } = En(),
        f = E.useRef(0),
        m = E.useRef(0),
        p = E.useRef(null),
        [b, x] = E.useState(a(c));
    E.useEffect(() => {
        let P;
        return (
            c !== b && (P = setTimeout(() => x(c), 300)), () => clearTimeout(P)
        );
    }, [b, c]);
    const j = E.useCallback(() => {
        p.current &&
            ((f.current += (l - f.current) / 2),
            (f.current > 0.95 * l || l === 100) && (f.current = l),
            (p.current.innerText = i(f.current)),
            f.current < l && (m.current = requestAnimationFrame(j)));
    }, [i, l]);
    return (
        E.useEffect(() => (j(), () => cancelAnimationFrame(m.current)), [j]),
        b
            ? E.createElement(
                  'div',
                  { style: { ...ge.container, opacity: c ? 1 : 0, ...t } },
                  E.createElement(
                      'div',
                      null,
                      E.createElement(
                          'div',
                          { style: { ...ge.inner, ...n } },
                          E.createElement('div', {
                              style: {
                                  ...ge.bar,
                                  transform: `scaleX(${l / 100})`,
                                  ...o,
                              },
                          }),
                          E.createElement('span', {
                              ref: p,
                              style: { ...ge.data, ...e },
                          })
                      )
                  )
              )
            : null
    );
}
const ge = {
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
var Mn = Object.defineProperty,
    Nn = (t, n, o) =>
        n in t
            ? Mn(t, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: o,
              })
            : (t[n] = o),
    kn = (t, n, o) => (Nn(t, n + '', o), o);
class In {
    constructor() {
        kn(this, '_listeners');
    }
    addEventListener(n, o) {
        this._listeners === void 0 && (this._listeners = {});
        const e = this._listeners;
        e[n] === void 0 && (e[n] = []), e[n].indexOf(o) === -1 && e[n].push(o);
    }
    hasEventListener(n, o) {
        if (this._listeners === void 0) return !1;
        const e = this._listeners;
        return e[n] !== void 0 && e[n].indexOf(o) !== -1;
    }
    removeEventListener(n, o) {
        if (this._listeners === void 0) return;
        const i = this._listeners[n];
        if (i !== void 0) {
            const a = i.indexOf(o);
            a !== -1 && i.splice(a, 1);
        }
    }
    dispatchEvent(n) {
        if (this._listeners === void 0) return;
        const e = this._listeners[n.type];
        if (e !== void 0) {
            n.target = this;
            const i = e.slice(0);
            for (let a = 0, c = i.length; a < c; a++) i[a].call(this, n);
            n.target = null;
        }
    }
}
var Tn = Object.defineProperty,
    _n = (t, n, o) =>
        n in t
            ? Tn(t, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: o,
              })
            : (t[n] = o),
    y = (t, n, o) => (_n(t, typeof n != 'symbol' ? n + '' : n, o), o);
const xe = new an(),
    ht = new ln(),
    On = Math.cos(70 * (Math.PI / 180)),
    ft = (t, n) => ((t % n) + n) % n;
let Cn = class extends In {
    constructor(n, o) {
        super(),
            y(this, 'object'),
            y(this, 'domElement'),
            y(this, 'enabled', !0),
            y(this, 'target', new Y()),
            y(this, 'minDistance', 0),
            y(this, 'maxDistance', 1 / 0),
            y(this, 'minZoom', 0),
            y(this, 'maxZoom', 1 / 0),
            y(this, 'minPolarAngle', 0),
            y(this, 'maxPolarAngle', Math.PI),
            y(this, 'minAzimuthAngle', -1 / 0),
            y(this, 'maxAzimuthAngle', 1 / 0),
            y(this, 'enableDamping', !1),
            y(this, 'dampingFactor', 0.05),
            y(this, 'enableZoom', !0),
            y(this, 'zoomSpeed', 1),
            y(this, 'enableRotate', !0),
            y(this, 'rotateSpeed', 1),
            y(this, 'enablePan', !0),
            y(this, 'panSpeed', 1),
            y(this, 'screenSpacePanning', !0),
            y(this, 'keyPanSpeed', 7),
            y(this, 'zoomToCursor', !1),
            y(this, 'autoRotate', !1),
            y(this, 'autoRotateSpeed', 2),
            y(this, 'reverseOrbit', !1),
            y(this, 'reverseHorizontalOrbit', !1),
            y(this, 'reverseVerticalOrbit', !1),
            y(this, 'keys', {
                LEFT: 'ArrowLeft',
                UP: 'ArrowUp',
                RIGHT: 'ArrowRight',
                BOTTOM: 'ArrowDown',
            }),
            y(this, 'mouseButtons', {
                LEFT: ne.ROTATE,
                MIDDLE: ne.DOLLY,
                RIGHT: ne.PAN,
            }),
            y(this, 'touches', { ONE: oe.ROTATE, TWO: oe.DOLLY_PAN }),
            y(this, 'target0'),
            y(this, 'position0'),
            y(this, 'zoom0'),
            y(this, '_domElementKeyEvents', null),
            y(this, 'getPolarAngle'),
            y(this, 'getAzimuthalAngle'),
            y(this, 'setPolarAngle'),
            y(this, 'setAzimuthalAngle'),
            y(this, 'getDistance'),
            y(this, 'getZoomScale'),
            y(this, 'listenToKeyEvents'),
            y(this, 'stopListenToKeyEvents'),
            y(this, 'saveState'),
            y(this, 'reset'),
            y(this, 'update'),
            y(this, 'connect'),
            y(this, 'dispose'),
            y(this, 'dollyIn'),
            y(this, 'dollyOut'),
            y(this, 'getScale'),
            y(this, 'setScale'),
            (this.object = n),
            (this.domElement = o),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object.zoom),
            (this.getPolarAngle = () => p.phi),
            (this.getAzimuthalAngle = () => p.theta),
            (this.setPolarAngle = (s) => {
                let h = ft(s, 2 * Math.PI),
                    A = p.phi;
                A < 0 && (A += 2 * Math.PI), h < 0 && (h += 2 * Math.PI);
                let N = Math.abs(h - A);
                2 * Math.PI - N < N &&
                    (h < A ? (h += 2 * Math.PI) : (A += 2 * Math.PI)),
                    (b.phi = h - A),
                    e.update();
            }),
            (this.setAzimuthalAngle = (s) => {
                let h = ft(s, 2 * Math.PI),
                    A = p.theta;
                A < 0 && (A += 2 * Math.PI), h < 0 && (h += 2 * Math.PI);
                let N = Math.abs(h - A);
                2 * Math.PI - N < N &&
                    (h < A ? (h += 2 * Math.PI) : (A += 2 * Math.PI)),
                    (b.theta = h - A),
                    e.update();
            }),
            (this.getDistance = () => e.object.position.distanceTo(e.target)),
            (this.listenToKeyEvents = (s) => {
                s.addEventListener('keydown', Me),
                    (this._domElementKeyEvents = s);
            }),
            (this.stopListenToKeyEvents = () => {
                this._domElementKeyEvents.removeEventListener('keydown', Me),
                    (this._domElementKeyEvents = null);
            }),
            (this.saveState = () => {
                e.target0.copy(e.target),
                    e.position0.copy(e.object.position),
                    (e.zoom0 = e.object.zoom);
            }),
            (this.reset = () => {
                e.target.copy(e.target0),
                    e.object.position.copy(e.position0),
                    (e.object.zoom = e.zoom0),
                    e.object.updateProjectionMatrix(),
                    e.dispatchEvent(i),
                    e.update(),
                    (f = l.NONE);
            }),
            (this.update = (() => {
                const s = new Y(),
                    h = new Y(0, 1, 0),
                    A = new lt().setFromUnitVectors(n.up, h),
                    N = A.clone().invert(),
                    z = new Y(),
                    K = new lt(),
                    Q = 2 * Math.PI;
                return function () {
                    const it = e.object.position;
                    A.setFromUnitVectors(n.up, h),
                        N.copy(A).invert(),
                        s.copy(it).sub(e.target),
                        s.applyQuaternion(A),
                        p.setFromVector3(s),
                        e.autoRotate && f === l.NONE && C(S()),
                        e.enableDamping
                            ? ((p.theta += b.theta * e.dampingFactor),
                              (p.phi += b.phi * e.dampingFactor))
                            : ((p.theta += b.theta), (p.phi += b.phi));
                    let X = e.minAzimuthAngle,
                        H = e.maxAzimuthAngle;
                    isFinite(X) &&
                        isFinite(H) &&
                        (X < -Math.PI ? (X += Q) : X > Math.PI && (X -= Q),
                        H < -Math.PI ? (H += Q) : H > Math.PI && (H -= Q),
                        X <= H
                            ? (p.theta = Math.max(X, Math.min(H, p.theta)))
                            : (p.theta =
                                  p.theta > (X + H) / 2
                                      ? Math.max(X, p.theta)
                                      : Math.min(H, p.theta))),
                        (p.phi = Math.max(
                            e.minPolarAngle,
                            Math.min(e.maxPolarAngle, p.phi)
                        )),
                        p.makeSafe(),
                        e.enableDamping === !0
                            ? e.target.addScaledVector(j, e.dampingFactor)
                            : e.target.add(j),
                        (e.zoomToCursor && g) || e.object.isOrthographicCamera
                            ? (p.radius = Pe(p.radius))
                            : (p.radius = Pe(p.radius * x)),
                        s.setFromSpherical(p),
                        s.applyQuaternion(N),
                        it.copy(e.target).add(s),
                        e.object.matrixAutoUpdate || e.object.updateMatrix(),
                        e.object.lookAt(e.target),
                        e.enableDamping === !0
                            ? ((b.theta *= 1 - e.dampingFactor),
                              (b.phi *= 1 - e.dampingFactor),
                              j.multiplyScalar(1 - e.dampingFactor))
                            : (b.set(0, 0, 0), j.set(0, 0, 0));
                    let ie = !1;
                    if (e.zoomToCursor && g) {
                        let ae = null;
                        if (
                            e.object instanceof Ie &&
                            e.object.isPerspectiveCamera
                        ) {
                            const le = s.length();
                            ae = Pe(le * x);
                            const pe = le - ae;
                            e.object.position.addScaledVector(u, pe),
                                e.object.updateMatrixWorld();
                        } else if (e.object.isOrthographicCamera) {
                            const le = new Y(v.x, v.y, 0);
                            le.unproject(e.object),
                                (e.object.zoom = Math.max(
                                    e.minZoom,
                                    Math.min(e.maxZoom, e.object.zoom / x)
                                )),
                                e.object.updateProjectionMatrix(),
                                (ie = !0);
                            const pe = new Y(v.x, v.y, 0);
                            pe.unproject(e.object),
                                e.object.position.sub(pe).add(le),
                                e.object.updateMatrixWorld(),
                                (ae = s.length());
                        } else
                            console.warn(
                                'WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.'
                            ),
                                (e.zoomToCursor = !1);
                        ae !== null &&
                            (e.screenSpacePanning
                                ? e.target
                                      .set(0, 0, -1)
                                      .transformDirection(e.object.matrix)
                                      .multiplyScalar(ae)
                                      .add(e.object.position)
                                : (xe.origin.copy(e.object.position),
                                  xe.direction
                                      .set(0, 0, -1)
                                      .transformDirection(e.object.matrix),
                                  Math.abs(e.object.up.dot(xe.direction)) < On
                                      ? n.lookAt(e.target)
                                      : (ht.setFromNormalAndCoplanarPoint(
                                            e.object.up,
                                            e.target
                                        ),
                                        xe.intersectPlane(ht, e.target))));
                    } else
                        e.object instanceof ke &&
                            e.object.isOrthographicCamera &&
                            ((ie = x !== 1),
                            ie &&
                                ((e.object.zoom = Math.max(
                                    e.minZoom,
                                    Math.min(e.maxZoom, e.object.zoom / x)
                                )),
                                e.object.updateProjectionMatrix()));
                    return (
                        (x = 1),
                        (g = !1),
                        ie ||
                        z.distanceToSquared(e.object.position) > m ||
                        8 * (1 - K.dot(e.object.quaternion)) > m
                            ? (e.dispatchEvent(i),
                              z.copy(e.object.position),
                              K.copy(e.object.quaternion),
                              (ie = !1),
                              !0)
                            : !1
                    );
                };
            })()),
            (this.connect = (s) => {
                (e.domElement = s),
                    (e.domElement.style.touchAction = 'none'),
                    e.domElement.addEventListener('contextmenu', st),
                    e.domElement.addEventListener('pointerdown', nt),
                    e.domElement.addEventListener('pointercancel', re),
                    e.domElement.addEventListener('wheel', ot);
            }),
            (this.dispose = () => {
                var s, h, A, N, z, K;
                e.domElement && (e.domElement.style.touchAction = 'auto'),
                    (s = e.domElement) == null ||
                        s.removeEventListener('contextmenu', st),
                    (h = e.domElement) == null ||
                        h.removeEventListener('pointerdown', nt),
                    (A = e.domElement) == null ||
                        A.removeEventListener('pointercancel', re),
                    (N = e.domElement) == null ||
                        N.removeEventListener('wheel', ot),
                    (z = e.domElement) == null ||
                        z.ownerDocument.removeEventListener('pointermove', Ae),
                    (K = e.domElement) == null ||
                        K.ownerDocument.removeEventListener('pointerup', re),
                    e._domElementKeyEvents !== null &&
                        e._domElementKeyEvents.removeEventListener(
                            'keydown',
                            Me
                        );
            });
        const e = this,
            i = { type: 'change' },
            a = { type: 'start' },
            c = { type: 'end' },
            l = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_PAN: 4,
                TOUCH_DOLLY_PAN: 5,
                TOUCH_DOLLY_ROTATE: 6,
            };
        let f = l.NONE;
        const m = 1e-6,
            p = new at(),
            b = new at();
        let x = 1;
        const j = new Y(),
            P = new W(),
            I = new W(),
            D = new W(),
            L = new W(),
            R = new W(),
            _ = new W(),
            U = new W(),
            k = new W(),
            M = new W(),
            u = new Y(),
            v = new W();
        let g = !1;
        const d = [],
            w = {};
        function S() {
            return ((2 * Math.PI) / 60 / 60) * e.autoRotateSpeed;
        }
        function T() {
            return Math.pow(0.95, e.zoomSpeed);
        }
        function C(s) {
            e.reverseOrbit || e.reverseHorizontalOrbit
                ? (b.theta += s)
                : (b.theta -= s);
        }
        function F(s) {
            e.reverseOrbit || e.reverseVerticalOrbit
                ? (b.phi += s)
                : (b.phi -= s);
        }
        const V = (() => {
                const s = new Y();
                return function (A, N) {
                    s.setFromMatrixColumn(N, 0), s.multiplyScalar(-A), j.add(s);
                };
            })(),
            O = (() => {
                const s = new Y();
                return function (A, N) {
                    e.screenSpacePanning === !0
                        ? s.setFromMatrixColumn(N, 1)
                        : (s.setFromMatrixColumn(N, 0),
                          s.crossVectors(e.object.up, s)),
                        s.multiplyScalar(A),
                        j.add(s);
                };
            })(),
            G = (() => {
                const s = new Y();
                return function (A, N) {
                    const z = e.domElement;
                    if (
                        z &&
                        e.object instanceof Ie &&
                        e.object.isPerspectiveCamera
                    ) {
                        const K = e.object.position;
                        s.copy(K).sub(e.target);
                        let Q = s.length();
                        (Q *= Math.tan(((e.object.fov / 2) * Math.PI) / 180)),
                            V((2 * A * Q) / z.clientHeight, e.object.matrix),
                            O((2 * N * Q) / z.clientHeight, e.object.matrix);
                    } else
                        z &&
                        e.object instanceof ke &&
                        e.object.isOrthographicCamera
                            ? (V(
                                  (A * (e.object.right - e.object.left)) /
                                      e.object.zoom /
                                      z.clientWidth,
                                  e.object.matrix
                              ),
                              O(
                                  (N * (e.object.top - e.object.bottom)) /
                                      e.object.zoom /
                                      z.clientHeight,
                                  e.object.matrix
                              ))
                            : (console.warn(
                                  'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'
                              ),
                              (e.enablePan = !1));
                };
            })();
        function ee(s) {
            (e.object instanceof Ie && e.object.isPerspectiveCamera) ||
            (e.object instanceof ke && e.object.isOrthographicCamera)
                ? (x = s)
                : (console.warn(
                      'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
                  ),
                  (e.enableZoom = !1));
        }
        function te(s) {
            ee(x / s);
        }
        function Ee(s) {
            ee(x * s);
        }
        function Xe(s) {
            if (!e.zoomToCursor || !e.domElement) return;
            g = !0;
            const h = e.domElement.getBoundingClientRect(),
                A = s.clientX - h.left,
                N = s.clientY - h.top,
                z = h.width,
                K = h.height;
            (v.x = (A / z) * 2 - 1),
                (v.y = -(N / K) * 2 + 1),
                u
                    .set(v.x, v.y, 1)
                    .unproject(e.object)
                    .sub(e.object.position)
                    .normalize();
        }
        function Pe(s) {
            return Math.max(e.minDistance, Math.min(e.maxDistance, s));
        }
        function He(s) {
            P.set(s.clientX, s.clientY);
        }
        function Zt(s) {
            Xe(s), U.set(s.clientX, s.clientY);
        }
        function Be(s) {
            L.set(s.clientX, s.clientY);
        }
        function Vt(s) {
            I.set(s.clientX, s.clientY),
                D.subVectors(I, P).multiplyScalar(e.rotateSpeed);
            const h = e.domElement;
            h &&
                (C((2 * Math.PI * D.x) / h.clientHeight),
                F((2 * Math.PI * D.y) / h.clientHeight)),
                P.copy(I),
                e.update();
        }
        function Kt(s) {
            k.set(s.clientX, s.clientY),
                M.subVectors(k, U),
                M.y > 0 ? te(T()) : M.y < 0 && Ee(T()),
                U.copy(k),
                e.update();
        }
        function Xt(s) {
            R.set(s.clientX, s.clientY),
                _.subVectors(R, L).multiplyScalar(e.panSpeed),
                G(_.x, _.y),
                L.copy(R),
                e.update();
        }
        function Ht(s) {
            Xe(s), s.deltaY < 0 ? Ee(T()) : s.deltaY > 0 && te(T()), e.update();
        }
        function Bt(s) {
            let h = !1;
            switch (s.code) {
                case e.keys.UP:
                    G(0, e.keyPanSpeed), (h = !0);
                    break;
                case e.keys.BOTTOM:
                    G(0, -e.keyPanSpeed), (h = !0);
                    break;
                case e.keys.LEFT:
                    G(e.keyPanSpeed, 0), (h = !0);
                    break;
                case e.keys.RIGHT:
                    G(-e.keyPanSpeed, 0), (h = !0);
                    break;
            }
            h && (s.preventDefault(), e.update());
        }
        function Qe() {
            if (d.length == 1) P.set(d[0].pageX, d[0].pageY);
            else {
                const s = 0.5 * (d[0].pageX + d[1].pageX),
                    h = 0.5 * (d[0].pageY + d[1].pageY);
                P.set(s, h);
            }
        }
        function qe() {
            if (d.length == 1) L.set(d[0].pageX, d[0].pageY);
            else {
                const s = 0.5 * (d[0].pageX + d[1].pageX),
                    h = 0.5 * (d[0].pageY + d[1].pageY);
                L.set(s, h);
            }
        }
        function Je() {
            const s = d[0].pageX - d[1].pageX,
                h = d[0].pageY - d[1].pageY,
                A = Math.sqrt(s * s + h * h);
            U.set(0, A);
        }
        function Qt() {
            e.enableZoom && Je(), e.enablePan && qe();
        }
        function qt() {
            e.enableZoom && Je(), e.enableRotate && Qe();
        }
        function $e(s) {
            if (d.length == 1) I.set(s.pageX, s.pageY);
            else {
                const A = Ne(s),
                    N = 0.5 * (s.pageX + A.x),
                    z = 0.5 * (s.pageY + A.y);
                I.set(N, z);
            }
            D.subVectors(I, P).multiplyScalar(e.rotateSpeed);
            const h = e.domElement;
            h &&
                (C((2 * Math.PI * D.x) / h.clientHeight),
                F((2 * Math.PI * D.y) / h.clientHeight)),
                P.copy(I);
        }
        function et(s) {
            if (d.length == 1) R.set(s.pageX, s.pageY);
            else {
                const h = Ne(s),
                    A = 0.5 * (s.pageX + h.x),
                    N = 0.5 * (s.pageY + h.y);
                R.set(A, N);
            }
            _.subVectors(R, L).multiplyScalar(e.panSpeed),
                G(_.x, _.y),
                L.copy(R);
        }
        function tt(s) {
            const h = Ne(s),
                A = s.pageX - h.x,
                N = s.pageY - h.y,
                z = Math.sqrt(A * A + N * N);
            k.set(0, z),
                M.set(0, Math.pow(k.y / U.y, e.zoomSpeed)),
                te(M.y),
                U.copy(k);
        }
        function Jt(s) {
            e.enableZoom && tt(s), e.enablePan && et(s);
        }
        function $t(s) {
            e.enableZoom && tt(s), e.enableRotate && $e(s);
        }
        function nt(s) {
            var h, A;
            e.enabled !== !1 &&
                (d.length === 0 &&
                    ((h = e.domElement) == null ||
                        h.ownerDocument.addEventListener('pointermove', Ae),
                    (A = e.domElement) == null ||
                        A.ownerDocument.addEventListener('pointerup', re)),
                sn(s),
                s.pointerType === 'touch' ? nn(s) : en(s));
        }
        function Ae(s) {
            e.enabled !== !1 && (s.pointerType === 'touch' ? on(s) : tn(s));
        }
        function re(s) {
            var h, A, N;
            rn(s),
                d.length === 0 &&
                    ((h = e.domElement) == null ||
                        h.releasePointerCapture(s.pointerId),
                    (A = e.domElement) == null ||
                        A.ownerDocument.removeEventListener('pointermove', Ae),
                    (N = e.domElement) == null ||
                        N.ownerDocument.removeEventListener('pointerup', re)),
                e.dispatchEvent(c),
                (f = l.NONE);
        }
        function en(s) {
            let h;
            switch (s.button) {
                case 0:
                    h = e.mouseButtons.LEFT;
                    break;
                case 1:
                    h = e.mouseButtons.MIDDLE;
                    break;
                case 2:
                    h = e.mouseButtons.RIGHT;
                    break;
                default:
                    h = -1;
            }
            switch (h) {
                case ne.DOLLY:
                    if (e.enableZoom === !1) return;
                    Zt(s), (f = l.DOLLY);
                    break;
                case ne.ROTATE:
                    if (s.ctrlKey || s.metaKey || s.shiftKey) {
                        if (e.enablePan === !1) return;
                        Be(s), (f = l.PAN);
                    } else {
                        if (e.enableRotate === !1) return;
                        He(s), (f = l.ROTATE);
                    }
                    break;
                case ne.PAN:
                    if (s.ctrlKey || s.metaKey || s.shiftKey) {
                        if (e.enableRotate === !1) return;
                        He(s), (f = l.ROTATE);
                    } else {
                        if (e.enablePan === !1) return;
                        Be(s), (f = l.PAN);
                    }
                    break;
                default:
                    f = l.NONE;
            }
            f !== l.NONE && e.dispatchEvent(a);
        }
        function tn(s) {
            if (e.enabled !== !1)
                switch (f) {
                    case l.ROTATE:
                        if (e.enableRotate === !1) return;
                        Vt(s);
                        break;
                    case l.DOLLY:
                        if (e.enableZoom === !1) return;
                        Kt(s);
                        break;
                    case l.PAN:
                        if (e.enablePan === !1) return;
                        Xt(s);
                        break;
                }
        }
        function ot(s) {
            e.enabled === !1 ||
                e.enableZoom === !1 ||
                (f !== l.NONE && f !== l.ROTATE) ||
                (s.preventDefault(),
                e.dispatchEvent(a),
                Ht(s),
                e.dispatchEvent(c));
        }
        function Me(s) {
            e.enabled === !1 || e.enablePan === !1 || Bt(s);
        }
        function nn(s) {
            switch ((rt(s), d.length)) {
                case 1:
                    switch (e.touches.ONE) {
                        case oe.ROTATE:
                            if (e.enableRotate === !1) return;
                            Qe(), (f = l.TOUCH_ROTATE);
                            break;
                        case oe.PAN:
                            if (e.enablePan === !1) return;
                            qe(), (f = l.TOUCH_PAN);
                            break;
                        default:
                            f = l.NONE;
                    }
                    break;
                case 2:
                    switch (e.touches.TWO) {
                        case oe.DOLLY_PAN:
                            if (e.enableZoom === !1 && e.enablePan === !1)
                                return;
                            Qt(), (f = l.TOUCH_DOLLY_PAN);
                            break;
                        case oe.DOLLY_ROTATE:
                            if (e.enableZoom === !1 && e.enableRotate === !1)
                                return;
                            qt(), (f = l.TOUCH_DOLLY_ROTATE);
                            break;
                        default:
                            f = l.NONE;
                    }
                    break;
                default:
                    f = l.NONE;
            }
            f !== l.NONE && e.dispatchEvent(a);
        }
        function on(s) {
            switch ((rt(s), f)) {
                case l.TOUCH_ROTATE:
                    if (e.enableRotate === !1) return;
                    $e(s), e.update();
                    break;
                case l.TOUCH_PAN:
                    if (e.enablePan === !1) return;
                    et(s), e.update();
                    break;
                case l.TOUCH_DOLLY_PAN:
                    if (e.enableZoom === !1 && e.enablePan === !1) return;
                    Jt(s), e.update();
                    break;
                case l.TOUCH_DOLLY_ROTATE:
                    if (e.enableZoom === !1 && e.enableRotate === !1) return;
                    $t(s), e.update();
                    break;
                default:
                    f = l.NONE;
            }
        }
        function st(s) {
            e.enabled !== !1 && s.preventDefault();
        }
        function sn(s) {
            d.push(s);
        }
        function rn(s) {
            delete w[s.pointerId];
            for (let h = 0; h < d.length; h++)
                if (d[h].pointerId == s.pointerId) {
                    d.splice(h, 1);
                    return;
                }
        }
        function rt(s) {
            let h = w[s.pointerId];
            h === void 0 && ((h = new W()), (w[s.pointerId] = h)),
                h.set(s.pageX, s.pageY);
        }
        function Ne(s) {
            const h = s.pointerId === d[0].pointerId ? d[1] : d[0];
            return w[h.pointerId];
        }
        (this.dollyIn = (s = T()) => {
            Ee(s), e.update();
        }),
            (this.dollyOut = (s = T()) => {
                te(s), e.update();
            }),
            (this.getScale = () => x),
            (this.setScale = (s) => {
                ee(s), e.update();
            }),
            (this.getZoomScale = () => T()),
            o !== void 0 && this.connect(o),
            this.update();
    }
};
const Dn = E.forwardRef(
        (
            {
                makeDefault: t,
                camera: n,
                regress: o,
                domElement: e,
                enableDamping: i = !0,
                keyEvents: a = !1,
                onChange: c,
                onStart: l,
                onEnd: f,
                ...m
            },
            p
        ) => {
            const b = q((M) => M.invalidate),
                x = q((M) => M.camera),
                j = q((M) => M.gl),
                P = q((M) => M.events),
                I = q((M) => M.setEvents),
                D = q((M) => M.set),
                L = q((M) => M.get),
                R = q((M) => M.performance),
                _ = n || x,
                U = e || P.connected || j.domElement,
                k = E.useMemo(() => new Cn(_), [_]);
            return (
                Ye(() => {
                    k.enabled && k.update();
                }, -1),
                E.useEffect(
                    () => (
                        a && k.connect(a === !0 ? U : a),
                        k.connect(U),
                        () => void k.dispose()
                    ),
                    [a, U, o, k, b]
                ),
                E.useEffect(() => {
                    const M = (g) => {
                            b(), o && R.regress(), c && c(g);
                        },
                        u = (g) => {
                            l && l(g);
                        },
                        v = (g) => {
                            f && f(g);
                        };
                    return (
                        k.addEventListener('change', M),
                        k.addEventListener('start', u),
                        k.addEventListener('end', v),
                        () => {
                            k.removeEventListener('start', u),
                                k.removeEventListener('end', v),
                                k.removeEventListener('change', M);
                        }
                    );
                }, [c, l, f, k, b, I]),
                E.useEffect(() => {
                    if (t) {
                        const M = L().controls;
                        return D({ controls: k }), () => D({ controls: M });
                    }
                }, [t, k]),
                E.createElement(
                    'primitive',
                    cn({ ref: p, object: k, enableDamping: i }, m)
                )
            );
        }
    ),
    Ln = E.forwardRef(
        (
            {
                children: t,
                enabled: n = !0,
                speed: o = 1,
                rotationIntensity: e = 1,
                floatIntensity: i = 1,
                floatingRange: a = [-0.1, 0.1],
                autoInvalidate: c = !1,
                ...l
            },
            f
        ) => {
            const m = E.useRef(null);
            E.useImperativeHandle(f, () => m.current, []);
            const p = E.useRef(Math.random() * 1e4);
            return (
                Ye((b) => {
                    var x, j;
                    if (!n || o === 0) return;
                    c && b.invalidate();
                    const P = p.current + b.clock.elapsedTime;
                    (m.current.rotation.x = (Math.cos((P / 4) * o) / 8) * e),
                        (m.current.rotation.y =
                            (Math.sin((P / 4) * o) / 8) * e),
                        (m.current.rotation.z =
                            (Math.sin((P / 4) * o) / 20) * e);
                    let I = Math.sin((P / 4) * o) / 10;
                    (I = kt.mapLinear(
                        I,
                        -0.1,
                        0.1,
                        (x = a == null ? void 0 : a[0]) !== null && x !== void 0
                            ? x
                            : -0.1,
                        (j = a == null ? void 0 : a[1]) !== null && j !== void 0
                            ? j
                            : 0.1
                    )),
                        (m.current.position.y = I * i),
                        m.current.updateMatrix();
                }),
                E.createElement(
                    'group',
                    l,
                    E.createElement(
                        'group',
                        { ref: m, matrixAutoUpdate: !1 },
                        t
                    )
                )
            );
        }
    ),
    de = {},
    pt = (t, n) => (t.unstable_is ? t.unstable_is(n) : n === t),
    mt = (t) => 'init' in t,
    Te = (t) => !!t.write,
    gt = (t) => 'v' in t || 'e' in t,
    be = (t) => {
        if ('e' in t) throw t.e;
        if ((de ? 'production' : void 0) !== 'production' && !('v' in t))
            throw new Error('[Bug] atom state is not initialized');
        return t.v;
    },
    je = new WeakMap(),
    xt = (t) => {
        var n;
        return Se(t) && !!((n = je.get(t)) != null && n[0]);
    },
    Rn = (t) => {
        const n = je.get(t);
        n != null && n[0] && ((n[0] = !1), n[1].forEach((o) => o()));
    },
    Ot = (t, n) => {
        let o = je.get(t);
        if (!o) {
            (o = [!0, new Set()]), je.set(t, o);
            const e = () => {
                o[0] = !1;
            };
            t.then(e, e);
        }
        o[1].add(n);
    },
    Se = (t) => typeof (t == null ? void 0 : t.then) == 'function',
    Ct = (t, n, o) => {
        o.p.has(t) ||
            (o.p.add(t),
            n.then(
                () => {
                    o.p.delete(t);
                },
                () => {
                    o.p.delete(t);
                }
            ));
    },
    _e = (t, n, o) => {
        const e = o(t),
            i = 'v' in e,
            a = e.v;
        if (Se(n)) for (const c of e.d.keys()) Ct(t, n, o(c));
        (e.v = n),
            delete e.e,
            (!i || !Object.is(a, e.v)) && (++e.n, Se(a) && Rn(a));
    },
    bt = (t, n, o) => {
        var e;
        const i = new Set();
        for (const a of ((e = o.get(t)) == null ? void 0 : e.t) || [])
            o.has(a) && i.add(a);
        for (const a of n.p) i.add(a);
        return i;
    },
    Un = () => {
        const t = new Set(),
            n = () => {
                t.forEach((o) => o());
            };
        return (
            (n.add = (o) => (
                t.add(o),
                () => {
                    t.delete(o);
                }
            )),
            n
        );
    },
    Oe = () => {
        const t = {},
            n = new WeakMap(),
            o = (e) => {
                var i, a;
                (i = n.get(t)) == null || i.forEach((c) => c(e)),
                    (a = n.get(e)) == null || a.forEach((c) => c());
            };
        return (
            (o.add = (e, i) => {
                const a = e || t,
                    c = (n.has(a) ? n : n.set(a, new Set())).get(a);
                return (
                    c.add(i),
                    () => {
                        c == null || c.delete(i), c.size || n.delete(a);
                    }
                );
            }),
            o
        );
    },
    zn = (t) => (
        t.c || (t.c = Oe()),
        t.m || (t.m = Oe()),
        t.u || (t.u = Oe()),
        t.f || (t.f = Un()),
        t
    ),
    Fn = Symbol(),
    Yn = (
        t = new WeakMap(),
        n = new WeakMap(),
        o = new WeakMap(),
        e = new Set(),
        i = new Set(),
        a = new Set(),
        c = {},
        l = (x, ...j) => x.read(...j),
        f = (x, ...j) => x.write(...j),
        m = (x, j) => {
            var P;
            return (P = x.unstable_onInit) == null ? void 0 : P.call(x, j);
        },
        p = (x, j) => {
            var P;
            return (P = x.onMount) == null ? void 0 : P.call(x, j);
        },
        ...b
    ) => {
        const x =
                b[0] ||
                ((u) => {
                    if ((de ? 'production' : void 0) !== 'production' && !u)
                        throw new Error('Atom is undefined or null');
                    let v = t.get(u);
                    return (
                        v ||
                            ((v = { d: new Map(), p: new Set(), n: 0 }),
                            t.set(u, v),
                            m == null || m(u, M)),
                        v
                    );
                }),
            j =
                b[1] ||
                (() => {
                    const u = [],
                        v = (g) => {
                            try {
                                g();
                            } catch (d) {
                                u.push(d);
                            }
                        };
                    do {
                        c.f && v(c.f);
                        const g = new Set(),
                            d = g.add.bind(g);
                        e.forEach((w) => {
                            var S;
                            return (S = n.get(w)) == null
                                ? void 0
                                : S.l.forEach(d);
                        }),
                            e.clear(),
                            a.forEach(d),
                            a.clear(),
                            i.forEach(d),
                            i.clear(),
                            g.forEach(v),
                            e.size && P();
                    } while (e.size || a.size || i.size);
                    if (u.length) throw new AggregateError(u);
                }),
            P =
                b[2] ||
                (() => {
                    const u = [],
                        v = new WeakSet(),
                        g = new WeakSet(),
                        d = Array.from(e);
                    for (; d.length; ) {
                        const w = d[d.length - 1],
                            S = x(w);
                        if (g.has(w)) {
                            d.pop();
                            continue;
                        }
                        if (v.has(w)) {
                            if (o.get(w) === S.n) u.push([w, S]);
                            else if (
                                (de ? 'production' : void 0) !== 'production' &&
                                o.has(w)
                            )
                                throw new Error(
                                    '[Bug] invalidated atom exists'
                                );
                            g.add(w), d.pop();
                            continue;
                        }
                        v.add(w);
                        for (const T of bt(w, S, n)) v.has(T) || d.push(T);
                    }
                    for (let w = u.length - 1; w >= 0; --w) {
                        const [S, T] = u[w];
                        let C = !1;
                        for (const F of T.d.keys())
                            if (F !== S && e.has(F)) {
                                C = !0;
                                break;
                            }
                        C && (I(S), R(S)), o.delete(S);
                    }
                }),
            I =
                b[3] ||
                ((u) => {
                    var v;
                    const g = x(u);
                    if (
                        gt(g) &&
                        ((n.has(u) && o.get(u) !== g.n) ||
                            Array.from(g.d).every(([O, G]) => I(O).n === G))
                    )
                        return g;
                    g.d.clear();
                    let d = !0;
                    const w = () => {
                            n.has(u) && (R(u), P(), j());
                        },
                        S = (O) => {
                            var G;
                            if (pt(u, O)) {
                                const te = x(O);
                                if (!gt(te))
                                    if (mt(O)) _e(O, O.init, x);
                                    else throw new Error('no atom init');
                                return be(te);
                            }
                            const ee = I(O);
                            try {
                                return be(ee);
                            } finally {
                                g.d.set(O, ee.n),
                                    xt(g.v) && Ct(u, g.v, ee),
                                    (G = n.get(O)) == null || G.t.add(u),
                                    d || w();
                            }
                        };
                    let T, C;
                    const F = {
                            get signal() {
                                return (
                                    T || (T = new AbortController()), T.signal
                                );
                            },
                            get setSelf() {
                                return (
                                    (de ? 'production' : void 0) !==
                                        'production' &&
                                        !Te(u) &&
                                        console.warn(
                                            'setSelf function cannot be used with read-only atom'
                                        ),
                                    !C &&
                                        Te(u) &&
                                        (C = (...O) => {
                                            if (
                                                ((de
                                                    ? 'production'
                                                    : void 0) !==
                                                    'production' &&
                                                    d &&
                                                    console.warn(
                                                        'setSelf function cannot be called in sync'
                                                    ),
                                                !d)
                                            )
                                                try {
                                                    return L(u, ...O);
                                                } finally {
                                                    P(), j();
                                                }
                                        }),
                                    C
                                );
                            },
                        },
                        V = g.n;
                    try {
                        const O = l(u, S, F);
                        return (
                            _e(u, O, x),
                            Se(O) &&
                                (Ot(O, () => (T == null ? void 0 : T.abort())),
                                O.then(w, w)),
                            g
                        );
                    } catch (O) {
                        return delete g.v, (g.e = O), ++g.n, g;
                    } finally {
                        (d = !1),
                            V !== g.n &&
                                o.get(u) === V &&
                                (o.set(u, g.n),
                                e.add(u),
                                (v = c.c) == null || v.call(c, u));
                    }
                }),
            D =
                b[4] ||
                ((u) => {
                    const v = [u];
                    for (; v.length; ) {
                        const g = v.pop(),
                            d = x(g);
                        for (const w of bt(g, d, n)) {
                            const S = x(w);
                            o.set(w, S.n), v.push(w);
                        }
                    }
                }),
            L =
                b[5] ||
                ((u, ...v) => {
                    let g = !0;
                    const d = (S) => be(I(S)),
                        w = (S, ...T) => {
                            var C;
                            const F = x(S);
                            try {
                                if (pt(u, S)) {
                                    if (!mt(S))
                                        throw new Error('atom not writable');
                                    const V = F.n,
                                        O = T[0];
                                    _e(S, O, x),
                                        R(S),
                                        V !== F.n &&
                                            (e.add(S),
                                            (C = c.c) == null || C.call(c, S),
                                            D(S));
                                    return;
                                } else return L(S, ...T);
                            } finally {
                                g || (P(), j());
                            }
                        };
                    try {
                        return f(u, d, w, ...v);
                    } finally {
                        g = !1;
                    }
                }),
            R =
                b[6] ||
                ((u) => {
                    var v;
                    const g = x(u),
                        d = n.get(u);
                    if (d && !xt(g.v)) {
                        for (const [w, S] of g.d)
                            if (!d.d.has(w)) {
                                const T = x(w);
                                _(w).t.add(u),
                                    d.d.add(w),
                                    S !== T.n &&
                                        (e.add(w),
                                        (v = c.c) == null || v.call(c, w),
                                        D(w));
                            }
                        for (const w of d.d || [])
                            if (!g.d.has(w)) {
                                d.d.delete(w);
                                const S = U(w);
                                S == null || S.t.delete(u);
                            }
                    }
                }),
            _ =
                b[7] ||
                ((u) => {
                    var v;
                    const g = x(u);
                    let d = n.get(u);
                    if (!d) {
                        I(u);
                        for (const w of g.d.keys()) _(w).t.add(u);
                        if (
                            ((d = {
                                l: new Set(),
                                d: new Set(g.d.keys()),
                                t: new Set(),
                            }),
                            n.set(u, d),
                            (v = c.m) == null || v.call(c, u),
                            Te(u))
                        ) {
                            const w = () => {
                                let S = !0;
                                const T = (...C) => {
                                    try {
                                        return L(u, ...C);
                                    } finally {
                                        S || (P(), j());
                                    }
                                };
                                try {
                                    const C = p(u, T);
                                    C &&
                                        (d.u = () => {
                                            S = !0;
                                            try {
                                                C();
                                            } finally {
                                                S = !1;
                                            }
                                        });
                                } finally {
                                    S = !1;
                                }
                            };
                            i.add(w);
                        }
                    }
                    return d;
                }),
            U =
                b[8] ||
                ((u) => {
                    var v;
                    const g = x(u);
                    let d = n.get(u);
                    if (
                        d &&
                        !d.l.size &&
                        !Array.from(d.t).some((w) => {
                            var S;
                            return (S = n.get(w)) == null ? void 0 : S.d.has(u);
                        })
                    ) {
                        d.u && a.add(d.u),
                            (d = void 0),
                            n.delete(u),
                            (v = c.u) == null || v.call(c, u);
                        for (const w of g.d.keys()) {
                            const S = U(w);
                            S == null || S.t.delete(u);
                        }
                        return;
                    }
                    return d;
                }),
            k = [t, n, o, e, i, a, c, l, f, m, p, x, j, P, I, D, L, R, _, U],
            M = {
                get: (u) => be(I(u)),
                set: (u, ...v) => {
                    try {
                        return L(u, ...v);
                    } finally {
                        P(), j();
                    }
                },
                sub: (u, v) => {
                    const d = _(u).l;
                    return (
                        d.add(v),
                        j(),
                        () => {
                            d.delete(v), U(u), j();
                        }
                    );
                },
            };
        return Object.defineProperty(M, Fn, { value: k }), M;
    },
    Dt = Yn,
    Gn = zn,
    vt = Ot,
    Ge = {};
let Wn = 0;
function Zn(t, n) {
    const o = `atom${++Wn}`,
        e = {
            toString() {
                return (Ge ? 'production' : void 0) !== 'production' &&
                    this.debugLabel
                    ? o + ':' + this.debugLabel
                    : o;
            },
        };
    return (e.init = t), (e.read = Vn), (e.write = Kn), e;
}
function Vn(t) {
    return t(this);
}
function Kn(t, n, o) {
    return n(this, typeof o == 'function' ? o(t(this)) : o);
}
const Xn = () => {
    let t = 0;
    const n = Gn({}),
        o = new WeakMap(),
        e = new WeakMap(),
        i = Dt(
            o,
            e,
            void 0,
            void 0,
            void 0,
            void 0,
            n,
            void 0,
            (l, f, m, ...p) => (t ? m(l, ...p) : l.write(f, m, ...p))
        ),
        a = new Set();
    return (
        n.m.add(void 0, (l) => {
            a.add(l);
            const f = o.get(l);
            f.m = e.get(l);
        }),
        n.u.add(void 0, (l) => {
            a.delete(l);
            const f = o.get(l);
            delete f.m;
        }),
        Object.assign(i, {
            dev4_get_internal_weak_map: () => (
                console.log(
                    'Deprecated: Use devstore from the devtools library'
                ),
                o
            ),
            dev4_get_mounted_atoms: () => a,
            dev4_restore_atoms: (l) => {
                const f = {
                    read: () => null,
                    write: (m, p) => {
                        ++t;
                        try {
                            for (const [b, x] of l) 'init' in b && p(b, x);
                        } finally {
                            --t;
                        }
                    },
                };
                i.set(f);
            },
        })
    );
};
function Hn() {
    return (Ge ? 'production' : void 0) !== 'production' ? Xn() : Dt();
}
let ue;
function Bn() {
    return (
        ue ||
            ((ue = Hn()),
            (Ge ? 'production' : void 0) !== 'production' &&
                (globalThis.__JOTAI_DEFAULT_STORE__ ||
                    (globalThis.__JOTAI_DEFAULT_STORE__ = ue),
                globalThis.__JOTAI_DEFAULT_STORE__ !== ue &&
                    console.warn(
                        'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044'
                    ))),
        ue
    );
}
const Qn = {},
    qn = E.createContext(void 0);
function Lt(t) {
    return E.useContext(qn) || Bn();
}
const De = (t) => typeof (t == null ? void 0 : t.then) == 'function',
    Le = (t) => {
        t.status ||
            ((t.status = 'pending'),
            t.then(
                (n) => {
                    (t.status = 'fulfilled'), (t.value = n);
                },
                (n) => {
                    (t.status = 'rejected'), (t.reason = n);
                }
            ));
    },
    Jn =
        ye.use ||
        ((t) => {
            if (t.status === 'pending') throw t;
            if (t.status === 'fulfilled') return t.value;
            throw t.status === 'rejected' ? t.reason : (Le(t), t);
        }),
    Ce = new WeakMap(),
    wt = (t, n) => {
        let o = Ce.get(t);
        return (
            o ||
                ((o = new Promise((e, i) => {
                    let a = t;
                    const c = (m) => (p) => {
                            a === m && e(p);
                        },
                        l = (m) => (p) => {
                            a === m && i(p);
                        },
                        f = () => {
                            try {
                                const m = n();
                                De(m)
                                    ? (Ce.set(m, o),
                                      (a = m),
                                      m.then(c(m), l(m)),
                                      vt(m, f))
                                    : e(m);
                            } catch (m) {
                                i(m);
                            }
                        };
                    t.then(c(t), l(t)), vt(t, f);
                })),
                Ce.set(t, o)),
            o
        );
    };
function $n(t, n) {
    const { delay: o, unstable_promiseStatus: e = !ye.use } = {},
        i = Lt(),
        [[a, c, l], f] = E.useReducer(
            (p) => {
                const b = i.get(t);
                return Object.is(p[0], b) && p[1] === i && p[2] === t
                    ? p
                    : [b, i, t];
            },
            void 0,
            () => [i.get(t), i, t]
        );
    let m = a;
    if (
        ((c !== i || l !== t) && (f(), (m = i.get(t))),
        E.useEffect(() => {
            const p = i.sub(t, () => {
                if (e)
                    try {
                        const b = i.get(t);
                        De(b) && Le(wt(b, () => i.get(t)));
                    } catch {}
                if (typeof o == 'number') {
                    setTimeout(f, o);
                    return;
                }
                f();
            });
            return f(), p;
        }, [i, t, o, e]),
        E.useDebugValue(m),
        De(m))
    ) {
        const p = wt(m, () => i.get(t));
        return e && Le(p), Jn(p);
    }
    return m;
}
function eo(t, n) {
    const o = Lt();
    return E.useCallback(
        (...i) => {
            if (
                (Qn ? 'production' : void 0) !== 'production' &&
                !('write' in t)
            )
                throw new Error('not writable atom');
            return o.set(t, ...i);
        },
        [o, t]
    );
}
function We(t, n) {
    return [$n(t), eo(t)];
}
const to =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsSAAALEgHS3X78AAAHOklEQVR4nO2d0XHbOBCGv9zcO92B1YHdgXkVRPfOmSgVxGEDURrg+SqIMsMCnApCVWCrA6mDsILcA5ZnS5YIcAHSoMxvJg8XkQByPwEsFtjFu9+/fzMRD3+8dgMm9vlziErqLE+HqKdvkrKo+q7jXcghq87yC2AOpMAMuAlWeFxsgEegAqqkLLahCg4iSJ3lC4wQ770LGydrYJWUxcq3IC9BRIglcOnbkDNhByx9hFEJUmf5NbACrrQVnzk7YKGZczpbWXWW3wIPTGK0cQn8rLP8ruuLzj1EJuw74EPXSt44a2CelMUvl4edBBExKqZeoWUDpC6iuA5ZFZMYPlwBlXzYrVgFqbN8xSRGCK6Ae9tDrYLIBD7NGeG4qbN82fbAyTmkzvIZZjWaBG/WxF+nTOI2X9aK8GLUmG5bAVtgG9Lt4Iv43K7lT0p/C947qeMFR3uINOxnwAZspBH3ruZfDMgCeIFxC4UW5+OxFf0pQSrCOAZ/YFwJjwHKelVkPl0SbtTYJWUxO/zLF4IE6h01cBvC2RYTMq/eE87qfNFLjllZC89KdphF0Mr24NhIymKblMU18D1QkfPDvzgmyIuHOrAGrs9hiGojKYsF8DFAUe8PF4t7gshwpR0jvydl4eQeOAdkBAghyl4HODR7U2WhG/lqVESwxasyv5OyWNVZDvDNo+498/dQkKO2sQOdhrk6y+c8bfVGsblVZ3mNWQjfY7ZlnYZdESVF79FoFWSmKPCzy9clY+Wt/Ilx9Z9gTP0bgDrL1xhL0UWYW/Qf197y4nBS72rOrZOysG7CyALrEfhCnGIc4wZ4kG3qVmTetD7ngu+5LGsjRIwHIhmaFHwTj3cr4pta+1bmI8gP21AlYlQedcTCB8ft2KVvRT6CtPr2n+0yjmWIsvHJNnxJL9n4VKIVpHZYiS85HzEa7hx2/aybUG1oBXHpHZ+UZcdMgn3ejE8QAlkckbJo+1HM5FpbuFYQm3skVZY7Bq7E69uG2penFcRW4bmf8U0tv6sFUYUjtDkQe/JLbTAWWyjH5QK/ddHM8ru6nYPEhyipMZbaqgcP8lIWe9GdqIlVkE7HL5XcYhycfZjmW+2LMYa0rYfYV5HyvUzUFrbaF2MTZIPfjmVXtgPW5URsgiwG3nHU7v/0RkyCfB1yL14cn9GZ5zEJ0jm4RYuY5lWPVaTaF2Oxsta2oUq+6Dlwgd9Qc03/Ts8KsxnXmVgEaR2qxFn5MFBbXpVYhizbRB7d5NsXsQhiY/baDTggtfyuNt0nQXTcyJx2irMXJEZWx3YP5ZS82nE5CaKnCeRMwZyMl3C1f3wKjcXKGitXmAQBwQqcekhkTIJExiRIZEyCRMYkSGRMgkTGWAR5E2FyMJJ1iMSgDLZf0hVZsTdJBrxOsoxCkNiRvZwKs3Kv8Ig5HMuQNRokKkAdkjAJ0g+V9sVYBLFmWhsZW+2LsQgy5FmsIRj89HtoLl0CK98CMVlZH55l23EO3D83YhIE9gP3X7kprXy2xOen2oL7GLLewqraZoRstQUHF+StDjUHbLUvxjKpTwgqQRzC1naacif66yF9BcKMBfVJS60gqeX3aD2zAzG4IK0ra0lK450ZJ2K2lt9n2oK1glxZjlJCgMw4EWMbkgfvIWBPMVERLp1qTHy3xOnP8Ig/6U0Q+D+d6jmJUmPCqdtIfSrwESSRg8XtDxlR/vWoJxZq3G7J8fJc+5q9S4dELCRlcQv8jUeWnFemydZti/Sa4RlIeihI163HBMc1R1IW90lZXGCSD3tlXRuQGtO7XbN1e5v7e8n46yy/R6fw16Qsll1ekK+pCeK00dzn4ROsucE4PivH5yvg0TVu3uMSg3VSFmnzH4fu90d0gnyps3zbJQG/rFU6fVEyZ3WNv2jG/t6cns/2cTTstetwyKqUhYJJp7rweN+K7EF87vjafAAP9Ap97z0tiKwdfCbeb5rbLbvgkrj5GZu+r9yWrWefy2/2etaxHcN7/E7ffZIu3Gfekg1uWbh7c3IGug/4x+H/o2Nm78qjgob3wGOPQ9jM8bm0j8qfpebwvWnnxQfT9x1UIFdaE+hCMBG5y1HNk1fUKeq+xvxbQiStcbuDSipOCXtLG5i5aYURplIVYMS4o9sE6mVliQgpxlUU8sZT91vapCEV4XrJMXY83WfY8Isnq2PG09B0gd/Vdc3H0PTQ5/U0PK+vqTOln2tnN3KX1QvajgEt6Pemz0uGS0KZEFem7ZM+wJO+LFm4LXtozFvna9uQbb1PPdZ0qiNlz01yDKu3V9znY3EGxoxTgk9X93vKJIoPG9z2UtwEkYJSzmv3byjWOIoBDnPIIUqP61ul87ZEZ0EgmB/nnNlhfHlV1xdVgjTIynnJeG9gC80Oc135SluAlyANIsycCBMTD8Qac4vDyregIII0SAD9HGMAzOjX9fKabDBejAoT7bUNVXBQQU4RweXDQeh7swsGEmTCnf8AbPORaYWuTiIAAAAASUVORK5CYII=',
    $ = [
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
    Ze = Zn(0),
    Z = [{ front: 'book-cover', back: $[0] }];
for (let t = 1; t < $.length - 1; t += 2)
    Z.push({ front: $[t % $.length], back: $[(t + 1) % $.length] });
Z.push({ front: $[$.length - 1], back: 'book-back' });
const no = () => {
        const [t, n] = We(Ze);
        return (
            E.useEffect(() => {
                new Audio('/audios/page-flip-01a.mp3').play();
            }, [t]),
            r.jsxs(r.Fragment, {
                children: [
                    r.jsxs('main', {
                        className:
                            'pointer-events-none fixed inset-0 z-10 flex flex-col justify-between select-none',
                        children: [
                            r.jsx('div', {
                                children: r.jsxs('h1', {
                                    className:
                                        'flex items-center gap-2 p-2 text-2xl text-white',
                                    children: [
                                        r.jsx('div', {
                                            className:
                                                'flex w-[52px] justify-center',
                                            children: r.jsx('img', {
                                                src: to,
                                                alt: 'logo',
                                                className: '',
                                                loading: 'lazy',
                                            }),
                                        }),
                                        r.jsx('div', {
                                            children: 'The ENDPAGE',
                                        }),
                                    ],
                                }),
                            }),
                            r.jsx('div', {
                                className:
                                    'pointer-events-auto flex w-full justify-center overflow-auto',
                                children: r.jsxs('div', {
                                    className:
                                        'flex max-w-full items-center gap-4 overflow-auto p-10',
                                    children: [
                                        [...Z].map((o, e) =>
                                            r.jsx(
                                                'button',
                                                {
                                                    className: `shrink-0 rounded-full border border-transparent px-4 py-3 text-lg uppercase transition-all duration-300 hover:border-white ${e === t ? 'bg-white/90 text-black' : 'bg-black/30 text-white'}`,
                                                    onClick: () => n(e),
                                                    children:
                                                        e === 0
                                                            ? 'Cover'
                                                            : `Souvenir ${e}`,
                                                },
                                                e
                                            )
                                        ),
                                        r.jsx('button', {
                                            className: `shrink-0 rounded-full border border-transparent px-4 py-3 text-lg uppercase transition-all duration-300 hover:border-white ${t === Z.length ? 'bg-white/90 text-black' : 'bg-black/30 text-white'}`,
                                            onClick: () => n(Z.length),
                                            children: 'Back Cover',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    r.jsx('div', {
                        className:
                            'fixed inset-0 flex -rotate-2 items-center select-none',
                        children: r.jsxs('div', {
                            className: 'relative',
                            children: [
                                r.jsxs('div', {
                                    className:
                                        'animate-horizontal-scroll flex w-max items-center gap-8 bg-white/0 px-8',
                                    children: [
                                        r.jsx('h1', {
                                            className:
                                                'text-10xl shrink-0 font-black text-white',
                                            children: 'Team Supernova',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'shrink-0 text-8xl font-light text-white italic',
                                            children: 'Souvennirs',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'text-12xl shrink-0 font-bold text-white',
                                            children: 'Personnels',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'text-12xl outline-text shrink-0 font-bold text-transparent italic',
                                            children: 'du pasée',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-medium text-white',
                                            children: 'et peut être',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-extralight text-white italic',
                                            children: 'au futur',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'text-13xl shrink-0 font-bold text-white',
                                            children: 'de la',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'text-13xl outline-text shrink-0 font-bold text-transparent italic',
                                            children: 'réalité',
                                        }),
                                    ],
                                }),
                                r.jsxs('div', {
                                    className:
                                        'animate-horizontal-scroll-2 absolute top-0 left-0 flex w-max items-center gap-8 bg-white/0 px-8',
                                    children: [
                                        r.jsx('h1', {
                                            className:
                                                'text-10xl shrink-0 font-black text-white',
                                            children: 'Supernova',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'shrink-0 text-8xl font-light text-white italic',
                                            children: 'Souvennirs',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'text-12xl shrink-0 font-bold text-white',
                                            children: 'Personnels',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'text-12xl outline-text shrink-0 font-bold text-transparent italic',
                                            children: 'Ultimate Guide',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-medium text-white',
                                            children: 'Tutorials',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'shrink-0 text-9xl font-extralight text-white italic',
                                            children: 'Learn',
                                        }),
                                        r.jsx('h2', {
                                            className:
                                                'text-13xl shrink-0 font-bold text-white',
                                            children: 'Practice',
                                        }),
                                        r.jsx('h2', {
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
    oo = Math.PI / 180;
function yt(t) {
    return t * oo;
}
const so = _t((t) => ({
        isModalOpen: !1,
        selectedItems: null,
        setSelectedItems: (n) => t({ selectedItems: n }),
        openModal: () => t({ isModalOpen: !0 }),
        closeModal: () => t({ isModalOpen: !1 }),
    })),
    Rt = () => {
        const {
            isModalOpen: t,
            openModal: n,
            closeModal: o,
            setSelectedItems: e,
            selectedItems: i,
        } = so();
        return {
            isModalOpen: t,
            selectedItems: i,
            setSelectedItems: e,
            openModal: n,
            closeModal: o,
        };
    },
    ro = 0.5,
    io = 0.3,
    ao = 0.18,
    lo = 0.05,
    co = 0.09,
    Ve = 1.28,
    uo = 1.71,
    Re = 0.003,
    Ke = 30,
    we = Ve / Ke,
    fe = new pn(Ve, uo, Re, Ke, 2);
fe.translate(Ve / 2, 0, 0);
const jt = fe.attributes.position,
    St = new Y(),
    Ut = [],
    zt = [];
for (let t = 0; t < jt.count; t++) {
    St.fromBufferAttribute(jt, t);
    const n = St.x,
        o = Math.max(0, Math.floor(n / we));
    let e = (n % we) / we;
    Ut.push(o, o + 1, 0, 0), zt.push(1 - e, e, 0, 0);
}
fe.setAttribute('skinIndex', new gn(Ut, 4));
fe.setAttribute('skinWeight', new xn(zt, 4));
const he = new It('white'),
    Et = new It('orange'),
    ho = [
        new se({ color: he }),
        new se({ color: '#111' }),
        new se({ color: he }),
        new se({ color: he }),
    ];
Z.forEach((t) => {
    ve.preload(`/textures/${t.front}.jpg`),
        ve.preload(`/textures/${t.back}.jpg`),
        ve.preload('/textures/book-cover-roughness.jpg');
});
const fo = ({
        number: t,
        front: n,
        back: o,
        page: e,
        opened: i,
        bookClosed: a,
        ...c
    }) => {
        const [l, f, m] = ve([
            `/textures/${n}.jpg`,
            `/textures/${o}.jpg`,
            ...(t === 0 || t === Z.length - 1
                ? ['/textures/book-cover-roughness.jpg']
                : []),
        ]);
        l.colorSpace = f.colorSpace = un;
        const p = E.useRef(),
            b = E.useRef(0),
            x = E.useRef(i),
            j = E.useRef(),
            P = E.useMemo(() => {
                const _ = [];
                for (let u = 0; u <= Ke; u++) {
                    let v = new dn();
                    _.push(v),
                        u === 0 ? (v.position.x = 0) : (v.position.x = we),
                        u > 0 && _[u - 1].add(v);
                }
                const U = new hn(_),
                    k = [
                        ...ho,
                        new se({
                            color: he,
                            map: l,
                            ...(t === 0
                                ? { roughnessMap: m }
                                : { roughness: 0.1 }),
                            emissive: Et,
                            emissiveIntensity: 0,
                        }),
                        new se({
                            color: he,
                            map: f,
                            ...(t === Z.length - 1
                                ? { roughnessMap: m }
                                : { roughness: 0.1 }),
                            emissive: Et,
                            emissiveIntensity: 0,
                        }),
                    ],
                    M = new fn(fe, k);
                return (
                    (M.castShadow = !0),
                    (M.receiveShadow = !0),
                    (M.frustumCulled = !1),
                    M.add(U.bones[0]),
                    M.bind(U),
                    M
                );
            }, []);
        Ye((_, U) => {
            if (!j.current) return;
            const k = I ? 0.22 : 0;
            (j.current.material[4].emissiveIntensity =
                j.current.material[5].emissiveIntensity =
                    kt.lerp(j.current.material[4].emissiveIntensity, k, 0.1)),
                x.current !== i && ((b.current = +new Date()), (x.current = i));
            let M = Math.min(400, new Date() - b.current) / 400;
            M = Math.sin(M * Math.PI);
            let u = i ? -Math.PI / 2 : Math.PI / 2;
            a || (u += yt(t * 0.8));
            const v = j.current.skeleton.bones;
            for (let g = 0; g < v.length; g++) {
                const d = g === 0 ? p.current : v[g],
                    w = g < 8 ? Math.sin(g * 0.2 + 0.25) : 0,
                    S = g >= 8 ? Math.cos(g * 0.3 + 0.09) : 0,
                    T = Math.sin(g * Math.PI * (1 / v.length)) * M;
                let C = ao * w * u - lo * S * u + co * T * u,
                    F = yt(Math.sign(u) * 2);
                a && (g === 0 ? ((C = u), (F = 0)) : ((C = 0), (F = 0))),
                    ct.dampAngle(d.rotation, 'y', C, ro, U);
                const V =
                    g > 8
                        ? Math.sin(g * Math.PI * (1 / v.length) - 0.5) * M
                        : 0;
                ct.dampAngle(d.rotation, 'x', F * V, io, U);
            }
        }),
            We(Ze);
        const [I, D] = E.useState(!1);
        mn(I);
        const { setSelectedItems: L, openModal: R } = Rt();
        return r.jsx('group', {
            ...c,
            ref: p,
            onPointerEnter: (_) => {
                _.stopPropagation(), D(!0);
            },
            onPointerLeave: (_) => {
                _.stopPropagation(), D(!1);
            },
            onClick: (_) => {
                _.stopPropagation(),
                    D(!1),
                    L({ front: l, back: f, number: t }),
                    R();
            },
            children: r.jsx('primitive', {
                object: P,
                ref: j,
                'position-z': -t * Re + e * Re,
            }),
        });
    },
    po = ({ ...t }) => {
        const [n] = We(Ze),
            [o, e] = E.useState(n);
        return (
            E.useEffect(() => {
                let i;
                const a = () => {
                    e((c) => {
                        if (n === c) return c;
                        if (
                            ((i = setTimeout(
                                () => {
                                    a();
                                },
                                Math.abs(n - c) > 2 ? 50 : 150
                            )),
                            n > c)
                        )
                            return c + 1;
                        if (n < c) return c - 1;
                    });
                };
                return (
                    a(),
                    () => {
                        clearTimeout(i);
                    }
                );
            }, [n]),
            r.jsx('group', {
                ...t,
                'rotation-y': -Math.PI / 2,
                children: [...Z].map((i, a) =>
                    r.jsx(
                        fo,
                        {
                            page: o,
                            number: a,
                            opened: o > a,
                            bookClosed: o === 0 || o === Z.length,
                            ...i,
                        },
                        a
                    )
                ),
            })
        );
    },
    mo = () =>
        r.jsxs(r.Fragment, {
            children: [
                r.jsx(Ln, {
                    'rotation-x': -Math.PI / 4,
                    floatIntensity: 1,
                    speed: 2,
                    rotationIntensity: 2,
                    children: r.jsx(po, {}),
                }),
                r.jsx(Dn, {}),
                r.jsx(bn, { preset: 'studio' }),
                r.jsx('directionalLight', {
                    position: [2, 5, 2],
                    intensity: 2.5,
                    castShadow: !0,
                    'shadow-mapSize-width': 2048,
                    'shadow-mapSize-height': 2048,
                    'shadow-bias': -1e-4,
                }),
                r.jsxs('mesh', {
                    'position-y': -1.5,
                    'rotation-x': -Math.PI / 2,
                    receiveShadow: !0,
                    children: [
                        r.jsx('planeGeometry', { args: [100, 100] }),
                        r.jsx('shadowMaterial', {
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
 */ var B,
    Ue,
    Ft,
    ze,
    Yt,
    Pt = Math.PI / 180,
    Gt = function () {
        return (
            B ||
            (typeof window < 'u' && (B = window.gsap) && B.registerPlugin && B)
        );
    },
    At = function (n) {
        return Math.round(n * 1e4) / 1e4;
    },
    Mt = function (n) {
        (B = n || Gt()),
            Ue ||
                ((Ft = B.utils.getUnit),
                (ze = B.core.getStyleSaver),
                (Yt = B.core.reverting || function () {}),
                (Ue = 1));
    },
    Nt = function (n, o, e, i, a) {
        var c = n._gsap,
            l = c.get(n, o);
        (this.p = o),
            (this.set = c.set(n, o)),
            (this.s = this.val = parseFloat(l)),
            (this.u = Ft(l) || 0),
            (this.vel = e || 0),
            (this.v = this.vel / a),
            i || i === 0
                ? ((this.acc = i), (this.a = this.acc / (a * a)))
                : (this.acc = this.a = 0);
    },
    Wt = {
        version: '3.13.0',
        name: 'physics2D',
        register: Mt,
        init: function (n, o, e) {
            Ue || Mt();
            var i = this,
                a = +o.angle || 0,
                c = +o.velocity || 0,
                l = +o.acceleration || 0,
                f = o.xProp || 'x',
                m = o.yProp || 'y',
                p =
                    o.accelerationAngle || o.accelerationAngle === 0
                        ? +o.accelerationAngle
                        : a;
            (i.styles =
                ze &&
                ze(
                    n,
                    o.xProp && o.xProp !== 'x'
                        ? o.xProp + ',' + o.yProp
                        : 'transform'
                )),
                (i.target = n),
                (i.tween = e),
                (i.step = 0),
                (i.sps = 30),
                o.gravity && ((l = +o.gravity), (p = 90)),
                (a *= Pt),
                (p *= Pt),
                (i.fr = 1 - (+o.friction || 0)),
                i._props.push(f, m),
                (i.xp = new Nt(n, f, Math.cos(a) * c, Math.cos(p) * l, i.sps)),
                (i.yp = new Nt(n, m, Math.sin(a) * c, Math.sin(p) * l, i.sps)),
                (i.skipX = i.skipY = 0);
        },
        render: function (n, o) {
            var e = o.xp,
                i = o.yp,
                a = o.tween,
                c = o.target,
                l = o.step,
                f = o.sps,
                m = o.fr,
                p = o.skipX,
                b = o.skipY,
                x = a._from ? a._dur - a._time : a._time,
                j,
                P,
                I,
                D,
                L,
                R;
            if (a._time || !Yt()) {
                if (m === 1)
                    (I = x * x * 0.5),
                        (j = e.s + e.vel * x + e.acc * I),
                        (P = i.s + i.vel * x + i.acc * I);
                else {
                    for (
                        x *= f,
                            D = R = (x | 0) - l,
                            R < 0 &&
                                ((e.v = e.vel / f),
                                (i.v = i.vel / f),
                                (e.val = e.s),
                                (i.val = i.s),
                                (o.step = 0),
                                (D = R = x | 0)),
                            L = (x % 1) * m;
                        R--;

                    )
                        (e.v += e.a),
                            (i.v += i.a),
                            (e.v *= m),
                            (i.v *= m),
                            (e.val += e.v),
                            (i.val += i.v);
                    (j = e.val + e.v * L), (P = i.val + i.v * L), (o.step += D);
                }
                p || e.set(c, e.p, At(j) + e.u),
                    b || i.set(c, i.p, At(P) + i.u);
            } else o.styles.revert();
        },
        kill: function (n) {
            this.xp.p === n && (this.skipX = 1),
                this.yp.p === n && (this.skipY = 1);
        },
    };
Gt() && B.registerPlugin(Wt);
J.registerPlugin(Wt);
const Fe = ({ children: t }) => {
    const n = E.useRef();
    function o() {
        n.current.addEventListener('click', (e) => {
            const i = J.utils.random(5, 10);
            for (let a = 0; a < i; a++) {
                const c = document.createElement('div');
                c.classList.add('flair'), c.classList.add('dot');
                const l = 'flair--' + J.utils.random(2, 35, 1);
                c.classList.add(l),
                    document.body.appendChild(c),
                    J.set(c, { top: e.clientY, left: e.clientX, scale: 0 }),
                    J.timeline({ onComplete: () => c.remove() })
                        .to(c, {
                            scale: J.utils.random(0.3, 1),
                            duration: 0.3,
                            ease: 'power3.out',
                        })
                        .to(
                            c,
                            {
                                duration: 2,
                                physics2D: {
                                    velocity: J.utils.random(500, 1e3),
                                    angle: J.utils.random(0, 360),
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
        E.useEffect(
            () => (
                o(),
                () => {
                    document.removeEventListener('click', o);
                }
            ),
            [t]
        ),
        r.jsxs('div', {
            ref: n,
            className: 'pastilles-for-element',
            children: [r.jsx('div', { className: 'flair--2' }), t],
        })
    );
};
function go({
    isModalOpen: t,
    handleCloseModal: n,
    handleSave: o,
    selectedItems: e,
    setSelectedItems: i,
}) {
    return (
        E.useEffect(() => {
            e && console.log(e);
        }, [e]),
        r.jsx(r.Fragment, {
            children: r.jsx(Tt, {
                isOpen: t,
                onClose: () => {
                    i(null), n();
                },
                title: r.jsxs('div', {
                    className: 'flex items-center gap-3',
                    children: [
                        r.jsx('span', {
                            className: 'text-3xl',
                            children: '🧠',
                        }),
                        r.jsx('span', {
                            className:
                                'text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow',
                            children: 'Souvenir précieux',
                        }),
                        r.jsx('span', {
                            className: 'text-3xl',
                            children: '💭',
                        }),
                    ],
                }),
                size: 'xl',
                footer: r.jsx('div', {
                    className: 'flex justify-end space-x-2',
                    children: r.jsx(Fe, {
                        children: r.jsx('button', {
                            className:
                                'rounded-full bg-yellow-200 px-4 py-2 font-bold text-yellow-800 shadow hover:bg-yellow-300',
                            onClick: n,
                            children: 'Fermer',
                        }),
                    }),
                }),
                children: r.jsx(Fe, {
                    children: r.jsxs('div', {
                        className:
                            'relative w-full overflow-hidden rounded-3xl border-4 border-dashed border-pink-200 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 p-8 shadow-2xl',
                        children: [
                            r.jsx('span', {
                                className:
                                    'absolute top-4 left-8 text-5xl opacity-20',
                                children: '🧩',
                            }),
                            r.jsx('span', {
                                className:
                                    'absolute top-16 right-10 text-4xl opacity-20',
                                children: '📸',
                            }),
                            r.jsx('span', {
                                className:
                                    'absolute bottom-8 left-10 text-4xl opacity-20',
                                children: '🎨',
                            }),
                            r.jsx('span', {
                                className:
                                    'absolute right-8 bottom-4 text-5xl opacity-20',
                                children: '🌈',
                            }),
                            r.jsx('span', {
                                className:
                                    'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10 select-none',
                                children: '💖',
                            }),
                            r.jsxs('div', {
                                className:
                                    'flex w-full flex-row justify-center gap-10',
                                children: [
                                    r.jsxs('div', {
                                        className:
                                            'group relative flex cursor-pointer flex-col items-center rounded-2xl border-2 border-yellow-100 bg-white/70 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-yellow-300 hover:shadow-2xl',
                                        children: [
                                            r.jsx('span', {
                                                className:
                                                    'absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:rotate-12',
                                                children: '🎈',
                                            }),
                                            r.jsx('img', {
                                                className:
                                                    'h-60 w-44 rounded-xl border-4 border-yellow-200 object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-yellow-300/50',
                                                src:
                                                    (e == null
                                                        ? void 0
                                                        : e.front.source.data
                                                              .src) || null,
                                                alt: 'book-cover',
                                            }),
                                            r.jsxs('span', {
                                                className:
                                                    'mt-3 flex items-center gap-1 text-base font-bold text-blue-400',
                                                children: [
                                                    r.jsx('span', {
                                                        children: '<>',
                                                    }),
                                                    ' ',
                                                    r.jsx('span', {
                                                        className: 'text-lg',
                                                        children: '⭐',
                                                    }),
                                                ],
                                            }),
                                            r.jsx('span', {
                                                className:
                                                    'mt-1 text-xs text-gray-400 italic',
                                                children:
                                                    'Un moment inoubliable',
                                            }),
                                        ],
                                    }),
                                    r.jsxs('div', {
                                        className:
                                            'group relative flex cursor-pointer flex-col items-center rounded-2xl border-2 border-pink-100 bg-white/70 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-pink-300 hover:shadow-2xl',
                                        children: [
                                            r.jsx('span', {
                                                className:
                                                    'absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:-rotate-12',
                                                children: '🧸',
                                            }),
                                            r.jsx('img', {
                                                className:
                                                    'h-60 w-44 rounded-xl border-4 border-pink-200 object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:shadow-pink-300/50',
                                                src:
                                                    (e == null
                                                        ? void 0
                                                        : e.back.source.data
                                                              .src) || null,
                                                alt: 'book-back',
                                            }),
                                            r.jsxs('span', {
                                                className:
                                                    'mt-3 flex items-center gap-1 text-base font-bold text-pink-400',
                                                children: [
                                                    r.jsx('span', {
                                                        children: '<>',
                                                    }),
                                                    ' ',
                                                    r.jsx('span', {
                                                        className: 'text-lg',
                                                        children: '🌟',
                                                    }),
                                                ],
                                            }),
                                            r.jsx('span', {
                                                className:
                                                    'mt-1 text-xs text-gray-400 italic',
                                                children:
                                                    'Toujours dans le cœur',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsxs('div', {
                                className:
                                    'mt-8 flex flex-col items-center gap-2 text-center text-xl font-extrabold text-purple-400 italic',
                                children: [
                                    r.jsx('span', {
                                        children:
                                            '✨ Un souvenir à partager, à transmettre, à chérir ✨',
                                    }),
                                    r.jsx('span', {
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
function xo({ isModalOpen: t, handleCloseModal: n, handleSave: o }) {
    const [e, i] = E.useState(''),
        [a, c] = E.useState(''),
        [l, f] = E.useState(null),
        [m, p] = E.useState(null),
        b = (P) => {
            P.target.files[0] && f(P.target.files[0]);
        },
        x = (P) => {
            P.target.files[0] && p(P.target.files[0]);
        },
        j = () => {
            o({ title: e, description: a, frontImage: l, backImage: m }),
                i(''),
                c(''),
                f(null),
                p(null);
        };
    return r.jsx(Tt, {
        isOpen: t,
        onClose: () => {
            n();
        },
        title: r.jsxs('div', {
            className: 'flex items-center gap-3',
            children: [
                r.jsx('span', { className: 'text-3xl', children: '🧠' }),
                r.jsx('span', {
                    className:
                        'text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow',
                    children: 'Ajouter un souvenir',
                }),
                r.jsx('span', { className: 'text-3xl', children: '💭' }),
            ],
        }),
        size: 'xl',
        footer: r.jsx('div', {
            className: 'flex justify-end space-x-2',
            children: r.jsxs(Fe, {
                children: [
                    r.jsx('button', {
                        className:
                            'rounded-full bg-yellow-200 px-4 py-2 font-bold text-yellow-800 shadow hover:bg-yellow-300',
                        onClick: n,
                        children: 'Fermer',
                    }),
                    r.jsx('button', {
                        className:
                            'rounded-full bg-blue-200 px-4 py-2 font-bold text-blue-800 shadow hover:bg-blue-300',
                        onClick: j,
                        children: 'Sauvegarder',
                    }),
                ],
            }),
        }),
        children: r.jsx('div', {
            className:
                'relative w-full overflow-hidden rounded-3xl border-4 border-dashed border-pink-200 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 p-8 shadow-2xl',
            children: r.jsxs('div', {
                className: 'flex flex-col gap-6',
                children: [
                    r.jsxs('div', {
                        className: 'group relative',
                        children: [
                            r.jsx('input', {
                                className:
                                    'peer w-full rounded-xl border-2 border-transparent bg-white/70 p-3 placeholder-transparent shadow-md transition-all duration-300 hover:shadow-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 focus:outline-none',
                                type: 'text',
                                placeholder: 'Titre du souvenir',
                                value: e,
                                onChange: (P) => i(P.target.value),
                                id: 'souvenir-title',
                                autoComplete: 'off',
                            }),
                            r.jsx('label', {
                                htmlFor: 'souvenir-title',
                                className:
                                    'pointer-events-none absolute top-3 left-3 rounded bg-white/70 px-1 text-base text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-500',
                                children: 'Titre du souvenir',
                            }),
                        ],
                    }),
                    r.jsxs('div', {
                        className: 'group relative',
                        children: [
                            r.jsx('textarea', {
                                className:
                                    'peer min-h-[80px] w-full resize-none rounded-xl border-2 border-transparent bg-white/70 p-3 placeholder-transparent shadow-md transition-all duration-300 hover:shadow-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 focus:outline-none',
                                placeholder: 'Description',
                                value: a,
                                onChange: (P) => c(P.target.value),
                                id: 'souvenir-description',
                                autoComplete: 'off',
                            }),
                            r.jsx('label', {
                                htmlFor: 'souvenir-description',
                                className:
                                    'pointer-events-none absolute top-3 left-3 rounded bg-white/70 px-1 text-base text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500',
                                children: 'Description',
                            }),
                        ],
                    }),
                    r.jsxs('div', {
                        className: 'flex gap-6',
                        children: [
                            r.jsxs('div', {
                                className: 'flex flex-col items-center',
                                children: [
                                    r.jsx('label', {
                                        className:
                                            'mb-2 font-semibold text-pink-500',
                                        children: 'Image de couverture',
                                    }),
                                    r.jsxs('label', {
                                        className:
                                            'group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-pink-300 bg-white/60 p-4 shadow transition-all duration-300 hover:bg-pink-50',
                                        children: [
                                            r.jsx('span', {
                                                className:
                                                    'mb-2 text-2xl transition-transform group-hover:scale-110',
                                                children: '📸',
                                            }),
                                            r.jsx('span', {
                                                className:
                                                    'text-sm text-pink-400 group-hover:text-pink-600',
                                                children: 'Choisir une image',
                                            }),
                                            r.jsx('input', {
                                                type: 'file',
                                                accept: 'image/*',
                                                onChange: b,
                                                className: 'hidden',
                                            }),
                                        ],
                                    }),
                                    l &&
                                        r.jsx('img', {
                                            src: URL.createObjectURL(l),
                                            alt: 'front',
                                            className:
                                                'mt-3 h-32 w-24 rounded-xl border-2 border-pink-200 object-cover shadow-lg',
                                        }),
                                ],
                            }),
                            r.jsxs('div', {
                                className: 'flex flex-col items-center',
                                children: [
                                    r.jsx('label', {
                                        className:
                                            'mb-2 font-semibold text-blue-500',
                                        children: 'Image de dos',
                                    }),
                                    r.jsxs('label', {
                                        className:
                                            'group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-white/60 p-4 shadow transition-all duration-300 hover:bg-blue-50',
                                        children: [
                                            r.jsx('span', {
                                                className:
                                                    'mb-2 text-2xl transition-transform group-hover:scale-110',
                                                children: '🖼️',
                                            }),
                                            r.jsx('span', {
                                                className:
                                                    'text-sm text-blue-400 group-hover:text-blue-600',
                                                children: 'Choisir une image',
                                            }),
                                            r.jsx('input', {
                                                type: 'file',
                                                accept: 'image/*',
                                                onChange: x,
                                                className: 'hidden',
                                            }),
                                        ],
                                    }),
                                    m &&
                                        r.jsx('img', {
                                            src: URL.createObjectURL(m),
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
const So = () => {
    const {
            isModalOpen: t,
            closeModal: n,
            setSelectedItems: o,
            selectedItems: e,
        } = Rt(),
        [i, a] = E.useState(!1),
        c = () => a(!0),
        l = () => a(!1),
        f = () => {
            a(!1);
        };
    return r.jsxs(r.Fragment, {
        children: [
            r.jsx(no, {}),
            r.jsx(go, {
                handleCloseModal: n,
                isModalOpen: t,
                selectedItems: e,
                setSelectedItems: o,
            }),
            r.jsx('button', {
                className:
                    'absolute top-4 right-4 z-10 transform rounded-full bg-blue-200 px-4 py-2 font-bold text-blue-800 shadow transition duration-300 hover:scale-105 hover:bg-blue-300 hover:shadow-xl hover:ring-2 hover:ring-blue-400',
                onClick: c,
                children: 'Ajouter un souvenir',
            }),
            r.jsx(vn, {
                className:
                    'absolute top-4 right-10 z-10 transform rounded-full bg-blue-200 px-4 py-2 font-bold text-blue-800 shadow transition duration-300 hover:scale-105 hover:bg-blue-300 hover:shadow-xl hover:ring-2 hover:ring-blue-400',
                onClick: c,
                children: 'Retour',
            }),
            r.jsx(xo, { handleCloseModal: l, isModalOpen: i, handleSave: f }),
            r.jsx(An, {}),
            r.jsx(wn, {
                style: { width: '100%', height: '100%' },
                shadows: !0,
                camera: {
                    position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
                    fov: 45,
                },
                className: 'bg-gradient',
                children: r.jsx('group', {
                    'position-y': 0,
                    children: r.jsx(E.Suspense, {
                        fallback: null,
                        children: r.jsx(mo, {}),
                    }),
                }),
            }),
        ],
    });
};
export { So as default };
