import {
    r as u,
    j as K,
    ay as st,
    aJ as at,
    aK as ct,
    aL as lt,
    aM as ut,
    aN as dt,
    aO as ft,
    aP as ht,
    aQ as pt,
    aR as mt,
    F as D,
    aS as q,
    aT as G,
    S as Ae,
    Q as Re,
    ac as pe,
    V as S,
    aU as me,
    aV as bt,
    aW as gt,
    a5 as V,
    i as Et,
} from './index-CkKx-SB9.js';
function Ce(o, n) {
    let i;
    return (...e) => {
        window.clearTimeout(i), (i = window.setTimeout(() => o(...e), n));
    };
}
function vt(
    { debounce: o, scroll: n, polyfill: i, offsetSize: e } = {
        debounce: 0,
        scroll: !1,
        offsetSize: !1,
    }
) {
    const p = i || (typeof window > 'u' ? class {} : window.ResizeObserver);
    if (!p)
        throw new Error(
            'This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills'
        );
    const [E, y] = u.useState({
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
        }),
        s = u.useRef({
            element: null,
            scrollContainers: null,
            resizeObserver: null,
            lastBounds: E,
            orientationHandler: null,
        }),
        d = o ? (typeof o == 'number' ? o : o.scroll) : null,
        I = o ? (typeof o == 'number' ? o : o.resize) : null,
        f = u.useRef(!1);
    u.useEffect(() => ((f.current = !0), () => void (f.current = !1)));
    const [v, P, O] = u.useMemo(() => {
        const g = () => {
            if (!s.current.element) return;
            const {
                    left: A,
                    top: R,
                    width: j,
                    height: b,
                    bottom: m,
                    right: Y,
                    x: T,
                    y: _,
                } = s.current.element.getBoundingClientRect(),
                l = {
                    left: A,
                    top: R,
                    width: j,
                    height: b,
                    bottom: m,
                    right: Y,
                    x: T,
                    y: _,
                };
            s.current.element instanceof HTMLElement &&
                e &&
                ((l.height = s.current.element.offsetHeight),
                (l.width = s.current.element.offsetWidth)),
                Object.freeze(l),
                f.current &&
                    !Ot(s.current.lastBounds, l) &&
                    y((s.current.lastBounds = l));
        };
        return [g, I ? Ce(g, I) : g, d ? Ce(g, d) : g];
    }, [y, e, d, I]);
    function M() {
        s.current.scrollContainers &&
            (s.current.scrollContainers.forEach((g) =>
                g.removeEventListener('scroll', O, !0)
            ),
            (s.current.scrollContainers = null)),
            s.current.resizeObserver &&
                (s.current.resizeObserver.disconnect(),
                (s.current.resizeObserver = null)),
            s.current.orientationHandler &&
                ('orientation' in screen &&
                'removeEventListener' in screen.orientation
                    ? screen.orientation.removeEventListener(
                          'change',
                          s.current.orientationHandler
                      )
                    : 'onorientationchange' in window &&
                      window.removeEventListener(
                          'orientationchange',
                          s.current.orientationHandler
                      ));
    }
    function x() {
        s.current.element &&
            ((s.current.resizeObserver = new p(O)),
            s.current.resizeObserver.observe(s.current.element),
            n &&
                s.current.scrollContainers &&
                s.current.scrollContainers.forEach((g) =>
                    g.addEventListener('scroll', O, {
                        capture: !0,
                        passive: !0,
                    })
                ),
            (s.current.orientationHandler = () => {
                O();
            }),
            'orientation' in screen && 'addEventListener' in screen.orientation
                ? screen.orientation.addEventListener(
                      'change',
                      s.current.orientationHandler
                  )
                : 'onorientationchange' in window &&
                  window.addEventListener(
                      'orientationchange',
                      s.current.orientationHandler
                  ));
    }
    const L = (g) => {
        !g ||
            g === s.current.element ||
            (M(),
            (s.current.element = g),
            (s.current.scrollContainers = Fe(g)),
            x());
    };
    return (
        wt(O, !!n),
        yt(P),
        u.useEffect(() => {
            M(), x();
        }, [n, O, P]),
        u.useEffect(() => M, []),
        [L, E, v]
    );
}
function yt(o) {
    u.useEffect(() => {
        const n = o;
        return (
            window.addEventListener('resize', n),
            () => void window.removeEventListener('resize', n)
        );
    }, [o]);
}
function wt(o, n) {
    u.useEffect(() => {
        if (n) {
            const i = o;
            return (
                window.addEventListener('scroll', i, {
                    capture: !0,
                    passive: !0,
                }),
                () => void window.removeEventListener('scroll', i, !0)
            );
        }
    }, [o, n]);
}
function Fe(o) {
    const n = [];
    if (!o || o === document.body) return n;
    const {
        overflow: i,
        overflowX: e,
        overflowY: p,
    } = window.getComputedStyle(o);
    return (
        [i, e, p].some((E) => E === 'auto' || E === 'scroll') && n.push(o),
        [...n, ...Fe(o.parentElement)]
    );
}
const Pt = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height'],
    Ot = (o, n) => Pt.every((i) => o[i] === n[i]);
var Mt = Object.defineProperty,
    Tt = Object.defineProperties,
    xt = Object.getOwnPropertyDescriptors,
    De = Object.getOwnPropertySymbols,
    jt = Object.prototype.hasOwnProperty,
    _t = Object.prototype.propertyIsEnumerable,
    Se = (o, n, i) =>
        n in o
            ? Mt(o, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
              })
            : (o[n] = i),
    Ie = (o, n) => {
        for (var i in n || (n = {})) jt.call(n, i) && Se(o, i, n[i]);
        if (De) for (var i of De(n)) _t.call(n, i) && Se(o, i, n[i]);
        return o;
    },
    Lt = (o, n) => Tt(o, xt(n)),
    ze,
    Ne;
typeof window < 'u' &&
(((ze = window.document) != null && ze.createElement) ||
    ((Ne = window.navigator) == null ? void 0 : Ne.product) === 'ReactNative')
    ? u.useLayoutEffect
    : u.useEffect;
function Ue(o, n, i) {
    if (!o) return;
    if (i(o) === !0) return o;
    let e = o.child;
    for (; e; ) {
        const p = Ue(e, n, i);
        if (p) return p;
        e = e.sibling;
    }
}
function Xe(o) {
    try {
        return Object.defineProperties(o, {
            _currentRenderer: {
                get() {
                    return null;
                },
                set() {},
            },
            _currentRenderer2: {
                get() {
                    return null;
                },
                set() {},
            },
        });
    } catch {
        return o;
    }
}
const ke = console.error;
console.error = function () {
    const o = [...arguments].join('');
    if (o != null && o.startsWith('Warning:') && o.includes('useContext')) {
        console.error = ke;
        return;
    }
    return ke.apply(this, arguments);
};
const ge = Xe(u.createContext(null));
class Ze extends u.Component {
    render() {
        return u.createElement(
            ge.Provider,
            { value: this._reactInternals },
            this.props.children
        );
    }
}
function At() {
    const o = u.useContext(ge);
    if (o === null)
        throw new Error(
            'its-fine: useFiber must be called within a <FiberProvider />!'
        );
    const n = u.useId();
    return u.useMemo(() => {
        for (const e of [o, o == null ? void 0 : o.alternate]) {
            if (!e) continue;
            const p = Ue(e, !1, (E) => {
                let y = E.memoizedState;
                for (; y; ) {
                    if (y.memoizedState === n) return !0;
                    y = y.next;
                }
            });
            if (p) return p;
        }
    }, [o, n]);
}
function Rt() {
    const o = At(),
        [n] = u.useState(() => new Map());
    n.clear();
    let i = o;
    for (; i; ) {
        if (i.type && typeof i.type == 'object') {
            const p =
                i.type._context === void 0 && i.type.Provider === i.type
                    ? i.type
                    : i.type._context;
            p && p !== ge && !n.has(p) && n.set(p, u.useContext(Xe(p)));
        }
        i = i.return;
    }
    return n;
}
function Ct() {
    const o = Rt();
    return u.useMemo(
        () =>
            Array.from(o.keys()).reduce(
                (n, i) => (e) =>
                    u.createElement(
                        n,
                        null,
                        u.createElement(
                            i.Provider,
                            Lt(Ie({}, e), { value: o.get(i) })
                        )
                    ),
                (n) => u.createElement(Ze, Ie({}, n))
            ),
        [o]
    );
}
const Dt = u.forwardRef(function (
        {
            children: n,
            fallback: i,
            resize: e,
            style: p,
            gl: E,
            events: y = dt,
            eventSource: s,
            eventPrefix: d,
            shadows: I,
            linear: f,
            flat: v,
            legacy: P,
            orthographic: O,
            frameloop: M,
            dpr: x,
            performance: L,
            raycaster: g,
            camera: A,
            scene: R,
            onPointerMissed: j,
            onCreated: b,
            ...m
        },
        Y
    ) {
        u.useMemo(() => st(at), []);
        const T = Ct(),
            [_, l] = vt({
                scroll: !0,
                debounce: { scroll: 50, resize: 0 },
                ...e,
            }),
            F = u.useRef(null),
            re = u.useRef(null);
        u.useImperativeHandle(Y, () => F.current);
        const z = ct(j),
            [W, ie] = u.useState(!1),
            [Q, se] = u.useState(!1);
        if (W) throw W;
        if (Q) throw Q;
        const C = u.useRef(null);
        lt(() => {
            const N = F.current;
            l.width > 0 &&
                l.height > 0 &&
                N &&
                (C.current || (C.current = ut(N)),
                C.current.configure({
                    gl: E,
                    events: y,
                    shadows: I,
                    linear: f,
                    flat: v,
                    legacy: P,
                    orthographic: O,
                    frameloop: M,
                    dpr: x,
                    performance: L,
                    raycaster: g,
                    camera: A,
                    scene: R,
                    size: l,
                    onPointerMissed: (...k) =>
                        z.current == null ? void 0 : z.current(...k),
                    onCreated: (k) => {
                        k.events.connect == null ||
                            k.events.connect(
                                s ? (ft(s) ? s.current : s) : re.current
                            ),
                            d &&
                                k.setEvents({
                                    compute: (J, H) => {
                                        const ae = J[d + 'X'],
                                            ue = J[d + 'Y'];
                                        H.pointer.set(
                                            (ae / H.size.width) * 2 - 1,
                                            -(ue / H.size.height) * 2 + 1
                                        ),
                                            H.raycaster.setFromCamera(
                                                H.pointer,
                                                H.camera
                                            );
                                    },
                                }),
                            b == null || b(k);
                    },
                }),
                C.current.render(
                    K.jsx(T, {
                        children: K.jsx(ht, {
                            set: se,
                            children: K.jsx(u.Suspense, {
                                fallback: K.jsx(pt, { set: ie }),
                                children: n ?? null,
                            }),
                        }),
                    })
                ));
        }),
            u.useEffect(() => {
                const N = F.current;
                if (N) return () => mt(N);
            }, []);
        const $ = s ? 'none' : 'auto';
        return K.jsx('div', {
            ref: re,
            style: {
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: $,
                ...p,
            },
            ...m,
            children: K.jsx('div', {
                ref: _,
                style: { width: '100%', height: '100%' },
                children: K.jsx('canvas', {
                    ref: F,
                    style: { display: 'block' },
                    children: i,
                }),
            }),
        });
    }),
    Zt = u.forwardRef(function (n, i) {
        return K.jsx(Ze, { children: K.jsx(Dt, { ...n, ref: i }) });
    });
function be() {
    return (
        (be = Object.assign
            ? Object.assign.bind()
            : function (o) {
                  for (var n = 1; n < arguments.length; n++) {
                      var i = arguments[n];
                      for (var e in i)
                          ({}).hasOwnProperty.call(i, e) && (o[e] = i[e]);
                  }
                  return o;
              }),
        be.apply(null, arguments)
    );
}
var St = Object.defineProperty,
    It = (o, n, i) =>
        n in o
            ? St(o, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
              })
            : (o[n] = i),
    zt = (o, n, i) => (It(o, n + '', i), i);
class Nt {
    constructor() {
        zt(this, '_listeners');
    }
    addEventListener(n, i) {
        this._listeners === void 0 && (this._listeners = {});
        const e = this._listeners;
        e[n] === void 0 && (e[n] = []), e[n].indexOf(i) === -1 && e[n].push(i);
    }
    hasEventListener(n, i) {
        if (this._listeners === void 0) return !1;
        const e = this._listeners;
        return e[n] !== void 0 && e[n].indexOf(i) !== -1;
    }
    removeEventListener(n, i) {
        if (this._listeners === void 0) return;
        const p = this._listeners[n];
        if (p !== void 0) {
            const E = p.indexOf(i);
            E !== -1 && p.splice(E, 1);
        }
    }
    dispatchEvent(n) {
        if (this._listeners === void 0) return;
        const e = this._listeners[n.type];
        if (e !== void 0) {
            n.target = this;
            const p = e.slice(0);
            for (let E = 0, y = p.length; E < y; E++) p[E].call(this, n);
            n.target = null;
        }
    }
}
var kt = Object.defineProperty,
    Ht = (o, n, i) =>
        n in o
            ? kt(o, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
              })
            : (o[n] = i),
    a = (o, n, i) => (Ht(o, typeof n != 'symbol' ? n + '' : n, i), i);
const le = new bt(),
    He = new gt(),
    Yt = Math.cos(70 * (Math.PI / 180)),
    Ye = (o, n) => ((o % n) + n) % n;
let Ft = class extends Nt {
    constructor(n, i) {
        super(),
            a(this, 'object'),
            a(this, 'domElement'),
            a(this, 'enabled', !0),
            a(this, 'target', new D()),
            a(this, 'minDistance', 0),
            a(this, 'maxDistance', 1 / 0),
            a(this, 'minZoom', 0),
            a(this, 'maxZoom', 1 / 0),
            a(this, 'minPolarAngle', 0),
            a(this, 'maxPolarAngle', Math.PI),
            a(this, 'minAzimuthAngle', -1 / 0),
            a(this, 'maxAzimuthAngle', 1 / 0),
            a(this, 'enableDamping', !1),
            a(this, 'dampingFactor', 0.05),
            a(this, 'enableZoom', !0),
            a(this, 'zoomSpeed', 1),
            a(this, 'enableRotate', !0),
            a(this, 'rotateSpeed', 1),
            a(this, 'enablePan', !0),
            a(this, 'panSpeed', 1),
            a(this, 'screenSpacePanning', !0),
            a(this, 'keyPanSpeed', 7),
            a(this, 'zoomToCursor', !1),
            a(this, 'autoRotate', !1),
            a(this, 'autoRotateSpeed', 2),
            a(this, 'reverseOrbit', !1),
            a(this, 'reverseHorizontalOrbit', !1),
            a(this, 'reverseVerticalOrbit', !1),
            a(this, 'keys', {
                LEFT: 'ArrowLeft',
                UP: 'ArrowUp',
                RIGHT: 'ArrowRight',
                BOTTOM: 'ArrowDown',
            }),
            a(this, 'mouseButtons', {
                LEFT: q.ROTATE,
                MIDDLE: q.DOLLY,
                RIGHT: q.PAN,
            }),
            a(this, 'touches', { ONE: G.ROTATE, TWO: G.DOLLY_PAN }),
            a(this, 'target0'),
            a(this, 'position0'),
            a(this, 'zoom0'),
            a(this, '_domElementKeyEvents', null),
            a(this, 'getPolarAngle'),
            a(this, 'getAzimuthalAngle'),
            a(this, 'setPolarAngle'),
            a(this, 'setAzimuthalAngle'),
            a(this, 'getDistance'),
            a(this, 'getZoomScale'),
            a(this, 'listenToKeyEvents'),
            a(this, 'stopListenToKeyEvents'),
            a(this, 'saveState'),
            a(this, 'reset'),
            a(this, 'update'),
            a(this, 'connect'),
            a(this, 'dispose'),
            a(this, 'dollyIn'),
            a(this, 'dollyOut'),
            a(this, 'getScale'),
            a(this, 'setScale'),
            (this.object = n),
            (this.domElement = i),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object.zoom),
            (this.getPolarAngle = () => f.phi),
            (this.getAzimuthalAngle = () => f.theta),
            (this.setPolarAngle = (t) => {
                let r = Ye(t, 2 * Math.PI),
                    c = f.phi;
                c < 0 && (c += 2 * Math.PI), r < 0 && (r += 2 * Math.PI);
                let h = Math.abs(r - c);
                2 * Math.PI - h < h &&
                    (r < c ? (r += 2 * Math.PI) : (c += 2 * Math.PI)),
                    (v.phi = r - c),
                    e.update();
            }),
            (this.setAzimuthalAngle = (t) => {
                let r = Ye(t, 2 * Math.PI),
                    c = f.theta;
                c < 0 && (c += 2 * Math.PI), r < 0 && (r += 2 * Math.PI);
                let h = Math.abs(r - c);
                2 * Math.PI - h < h &&
                    (r < c ? (r += 2 * Math.PI) : (c += 2 * Math.PI)),
                    (v.theta = r - c),
                    e.update();
            }),
            (this.getDistance = () => e.object.position.distanceTo(e.target)),
            (this.listenToKeyEvents = (t) => {
                t.addEventListener('keydown', fe),
                    (this._domElementKeyEvents = t);
            }),
            (this.stopListenToKeyEvents = () => {
                this._domElementKeyEvents.removeEventListener('keydown', fe),
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
                    e.dispatchEvent(p),
                    e.update(),
                    (d = s.NONE);
            }),
            (this.update = (() => {
                const t = new D(),
                    r = new D(0, 1, 0),
                    c = new Re().setFromUnitVectors(n.up, r),
                    h = c.clone().invert(),
                    w = new D(),
                    U = new Re(),
                    B = 2 * Math.PI;
                return function () {
                    const Le = e.object.position;
                    c.setFromUnitVectors(n.up, r),
                        h.copy(c).invert(),
                        t.copy(Le).sub(e.target),
                        t.applyQuaternion(c),
                        f.setFromVector3(t),
                        e.autoRotate && d === s.NONE && W(re()),
                        e.enableDamping
                            ? ((f.theta += v.theta * e.dampingFactor),
                              (f.phi += v.phi * e.dampingFactor))
                            : ((f.theta += v.theta), (f.phi += v.phi));
                    let X = e.minAzimuthAngle,
                        Z = e.maxAzimuthAngle;
                    isFinite(X) &&
                        isFinite(Z) &&
                        (X < -Math.PI ? (X += B) : X > Math.PI && (X -= B),
                        Z < -Math.PI ? (Z += B) : Z > Math.PI && (Z -= B),
                        X <= Z
                            ? (f.theta = Math.max(X, Math.min(Z, f.theta)))
                            : (f.theta =
                                  f.theta > (X + Z) / 2
                                      ? Math.max(X, f.theta)
                                      : Math.min(Z, f.theta))),
                        (f.phi = Math.max(
                            e.minPolarAngle,
                            Math.min(e.maxPolarAngle, f.phi)
                        )),
                        f.makeSafe(),
                        e.enableDamping === !0
                            ? e.target.addScaledVector(O, e.dampingFactor)
                            : e.target.add(O),
                        (e.zoomToCursor && _) || e.object.isOrthographicCamera
                            ? (f.radius = H(f.radius))
                            : (f.radius = H(f.radius * P)),
                        t.setFromSpherical(f),
                        t.applyQuaternion(h),
                        Le.copy(e.target).add(t),
                        e.object.matrixAutoUpdate || e.object.updateMatrix(),
                        e.object.lookAt(e.target),
                        e.enableDamping === !0
                            ? ((v.theta *= 1 - e.dampingFactor),
                              (v.phi *= 1 - e.dampingFactor),
                              O.multiplyScalar(1 - e.dampingFactor))
                            : (v.set(0, 0, 0), O.set(0, 0, 0));
                    let te = !1;
                    if (e.zoomToCursor && _) {
                        let ne = null;
                        if (
                            e.object instanceof me &&
                            e.object.isPerspectiveCamera
                        ) {
                            const oe = t.length();
                            ne = H(oe * P);
                            const ce = oe - ne;
                            e.object.position.addScaledVector(Y, ce),
                                e.object.updateMatrixWorld();
                        } else if (e.object.isOrthographicCamera) {
                            const oe = new D(T.x, T.y, 0);
                            oe.unproject(e.object),
                                (e.object.zoom = Math.max(
                                    e.minZoom,
                                    Math.min(e.maxZoom, e.object.zoom / P)
                                )),
                                e.object.updateProjectionMatrix(),
                                (te = !0);
                            const ce = new D(T.x, T.y, 0);
                            ce.unproject(e.object),
                                e.object.position.sub(ce).add(oe),
                                e.object.updateMatrixWorld(),
                                (ne = t.length());
                        } else
                            console.warn(
                                'WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.'
                            ),
                                (e.zoomToCursor = !1);
                        ne !== null &&
                            (e.screenSpacePanning
                                ? e.target
                                      .set(0, 0, -1)
                                      .transformDirection(e.object.matrix)
                                      .multiplyScalar(ne)
                                      .add(e.object.position)
                                : (le.origin.copy(e.object.position),
                                  le.direction
                                      .set(0, 0, -1)
                                      .transformDirection(e.object.matrix),
                                  Math.abs(e.object.up.dot(le.direction)) < Yt
                                      ? n.lookAt(e.target)
                                      : (He.setFromNormalAndCoplanarPoint(
                                            e.object.up,
                                            e.target
                                        ),
                                        le.intersectPlane(He, e.target))));
                    } else
                        e.object instanceof pe &&
                            e.object.isOrthographicCamera &&
                            ((te = P !== 1),
                            te &&
                                ((e.object.zoom = Math.max(
                                    e.minZoom,
                                    Math.min(e.maxZoom, e.object.zoom / P)
                                )),
                                e.object.updateProjectionMatrix()));
                    return (
                        (P = 1),
                        (_ = !1),
                        te ||
                        w.distanceToSquared(e.object.position) > I ||
                        8 * (1 - U.dot(e.object.quaternion)) > I
                            ? (e.dispatchEvent(p),
                              w.copy(e.object.position),
                              U.copy(e.object.quaternion),
                              (te = !1),
                              !0)
                            : !1
                    );
                };
            })()),
            (this.connect = (t) => {
                (e.domElement = t),
                    (e.domElement.style.touchAction = 'none'),
                    e.domElement.addEventListener('contextmenu', je),
                    e.domElement.addEventListener('pointerdown', Te),
                    e.domElement.addEventListener('pointercancel', ee),
                    e.domElement.addEventListener('wheel', xe);
            }),
            (this.dispose = () => {
                var t, r, c, h, w, U;
                e.domElement && (e.domElement.style.touchAction = 'auto'),
                    (t = e.domElement) == null ||
                        t.removeEventListener('contextmenu', je),
                    (r = e.domElement) == null ||
                        r.removeEventListener('pointerdown', Te),
                    (c = e.domElement) == null ||
                        c.removeEventListener('pointercancel', ee),
                    (h = e.domElement) == null ||
                        h.removeEventListener('wheel', xe),
                    (w = e.domElement) == null ||
                        w.ownerDocument.removeEventListener('pointermove', de),
                    (U = e.domElement) == null ||
                        U.ownerDocument.removeEventListener('pointerup', ee),
                    e._domElementKeyEvents !== null &&
                        e._domElementKeyEvents.removeEventListener(
                            'keydown',
                            fe
                        );
            });
        const e = this,
            p = { type: 'change' },
            E = { type: 'start' },
            y = { type: 'end' },
            s = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_PAN: 4,
                TOUCH_DOLLY_PAN: 5,
                TOUCH_DOLLY_ROTATE: 6,
            };
        let d = s.NONE;
        const I = 1e-6,
            f = new Ae(),
            v = new Ae();
        let P = 1;
        const O = new D(),
            M = new S(),
            x = new S(),
            L = new S(),
            g = new S(),
            A = new S(),
            R = new S(),
            j = new S(),
            b = new S(),
            m = new S(),
            Y = new D(),
            T = new S();
        let _ = !1;
        const l = [],
            F = {};
        function re() {
            return ((2 * Math.PI) / 60 / 60) * e.autoRotateSpeed;
        }
        function z() {
            return Math.pow(0.95, e.zoomSpeed);
        }
        function W(t) {
            e.reverseOrbit || e.reverseHorizontalOrbit
                ? (v.theta += t)
                : (v.theta -= t);
        }
        function ie(t) {
            e.reverseOrbit || e.reverseVerticalOrbit
                ? (v.phi += t)
                : (v.phi -= t);
        }
        const Q = (() => {
                const t = new D();
                return function (c, h) {
                    t.setFromMatrixColumn(h, 0), t.multiplyScalar(-c), O.add(t);
                };
            })(),
            se = (() => {
                const t = new D();
                return function (c, h) {
                    e.screenSpacePanning === !0
                        ? t.setFromMatrixColumn(h, 1)
                        : (t.setFromMatrixColumn(h, 0),
                          t.crossVectors(e.object.up, t)),
                        t.multiplyScalar(c),
                        O.add(t);
                };
            })(),
            C = (() => {
                const t = new D();
                return function (c, h) {
                    const w = e.domElement;
                    if (
                        w &&
                        e.object instanceof me &&
                        e.object.isPerspectiveCamera
                    ) {
                        const U = e.object.position;
                        t.copy(U).sub(e.target);
                        let B = t.length();
                        (B *= Math.tan(((e.object.fov / 2) * Math.PI) / 180)),
                            Q((2 * c * B) / w.clientHeight, e.object.matrix),
                            se((2 * h * B) / w.clientHeight, e.object.matrix);
                    } else
                        w &&
                        e.object instanceof pe &&
                        e.object.isOrthographicCamera
                            ? (Q(
                                  (c * (e.object.right - e.object.left)) /
                                      e.object.zoom /
                                      w.clientWidth,
                                  e.object.matrix
                              ),
                              se(
                                  (h * (e.object.top - e.object.bottom)) /
                                      e.object.zoom /
                                      w.clientHeight,
                                  e.object.matrix
                              ))
                            : (console.warn(
                                  'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'
                              ),
                              (e.enablePan = !1));
                };
            })();
        function $(t) {
            (e.object instanceof me && e.object.isPerspectiveCamera) ||
            (e.object instanceof pe && e.object.isOrthographicCamera)
                ? (P = t)
                : (console.warn(
                      'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
                  ),
                  (e.enableZoom = !1));
        }
        function N(t) {
            $(P / t);
        }
        function k(t) {
            $(P * t);
        }
        function J(t) {
            if (!e.zoomToCursor || !e.domElement) return;
            _ = !0;
            const r = e.domElement.getBoundingClientRect(),
                c = t.clientX - r.left,
                h = t.clientY - r.top,
                w = r.width,
                U = r.height;
            (T.x = (c / w) * 2 - 1),
                (T.y = -(h / U) * 2 + 1),
                Y.set(T.x, T.y, 1)
                    .unproject(e.object)
                    .sub(e.object.position)
                    .normalize();
        }
        function H(t) {
            return Math.max(e.minDistance, Math.min(e.maxDistance, t));
        }
        function ae(t) {
            M.set(t.clientX, t.clientY);
        }
        function ue(t) {
            J(t), j.set(t.clientX, t.clientY);
        }
        function Ee(t) {
            g.set(t.clientX, t.clientY);
        }
        function Ke(t) {
            x.set(t.clientX, t.clientY),
                L.subVectors(x, M).multiplyScalar(e.rotateSpeed);
            const r = e.domElement;
            r &&
                (W((2 * Math.PI * L.x) / r.clientHeight),
                ie((2 * Math.PI * L.y) / r.clientHeight)),
                M.copy(x),
                e.update();
        }
        function Be(t) {
            b.set(t.clientX, t.clientY),
                m.subVectors(b, j),
                m.y > 0 ? N(z()) : m.y < 0 && k(z()),
                j.copy(b),
                e.update();
        }
        function Ve(t) {
            A.set(t.clientX, t.clientY),
                R.subVectors(A, g).multiplyScalar(e.panSpeed),
                C(R.x, R.y),
                g.copy(A),
                e.update();
        }
        function We(t) {
            J(t), t.deltaY < 0 ? k(z()) : t.deltaY > 0 && N(z()), e.update();
        }
        function qe(t) {
            let r = !1;
            switch (t.code) {
                case e.keys.UP:
                    C(0, e.keyPanSpeed), (r = !0);
                    break;
                case e.keys.BOTTOM:
                    C(0, -e.keyPanSpeed), (r = !0);
                    break;
                case e.keys.LEFT:
                    C(e.keyPanSpeed, 0), (r = !0);
                    break;
                case e.keys.RIGHT:
                    C(-e.keyPanSpeed, 0), (r = !0);
                    break;
            }
            r && (t.preventDefault(), e.update());
        }
        function ve() {
            if (l.length == 1) M.set(l[0].pageX, l[0].pageY);
            else {
                const t = 0.5 * (l[0].pageX + l[1].pageX),
                    r = 0.5 * (l[0].pageY + l[1].pageY);
                M.set(t, r);
            }
        }
        function ye() {
            if (l.length == 1) g.set(l[0].pageX, l[0].pageY);
            else {
                const t = 0.5 * (l[0].pageX + l[1].pageX),
                    r = 0.5 * (l[0].pageY + l[1].pageY);
                g.set(t, r);
            }
        }
        function we() {
            const t = l[0].pageX - l[1].pageX,
                r = l[0].pageY - l[1].pageY,
                c = Math.sqrt(t * t + r * r);
            j.set(0, c);
        }
        function Ge() {
            e.enableZoom && we(), e.enablePan && ye();
        }
        function Qe() {
            e.enableZoom && we(), e.enableRotate && ve();
        }
        function Pe(t) {
            if (l.length == 1) x.set(t.pageX, t.pageY);
            else {
                const c = he(t),
                    h = 0.5 * (t.pageX + c.x),
                    w = 0.5 * (t.pageY + c.y);
                x.set(h, w);
            }
            L.subVectors(x, M).multiplyScalar(e.rotateSpeed);
            const r = e.domElement;
            r &&
                (W((2 * Math.PI * L.x) / r.clientHeight),
                ie((2 * Math.PI * L.y) / r.clientHeight)),
                M.copy(x);
        }
        function Oe(t) {
            if (l.length == 1) A.set(t.pageX, t.pageY);
            else {
                const r = he(t),
                    c = 0.5 * (t.pageX + r.x),
                    h = 0.5 * (t.pageY + r.y);
                A.set(c, h);
            }
            R.subVectors(A, g).multiplyScalar(e.panSpeed),
                C(R.x, R.y),
                g.copy(A);
        }
        function Me(t) {
            const r = he(t),
                c = t.pageX - r.x,
                h = t.pageY - r.y,
                w = Math.sqrt(c * c + h * h);
            b.set(0, w),
                m.set(0, Math.pow(b.y / j.y, e.zoomSpeed)),
                N(m.y),
                j.copy(b);
        }
        function $e(t) {
            e.enableZoom && Me(t), e.enablePan && Oe(t);
        }
        function Je(t) {
            e.enableZoom && Me(t), e.enableRotate && Pe(t);
        }
        function Te(t) {
            var r, c;
            e.enabled !== !1 &&
                (l.length === 0 &&
                    ((r = e.domElement) == null ||
                        r.ownerDocument.addEventListener('pointermove', de),
                    (c = e.domElement) == null ||
                        c.ownerDocument.addEventListener('pointerup', ee)),
                rt(t),
                t.pointerType === 'touch' ? nt(t) : et(t));
        }
        function de(t) {
            e.enabled !== !1 && (t.pointerType === 'touch' ? ot(t) : tt(t));
        }
        function ee(t) {
            var r, c, h;
            it(t),
                l.length === 0 &&
                    ((r = e.domElement) == null ||
                        r.releasePointerCapture(t.pointerId),
                    (c = e.domElement) == null ||
                        c.ownerDocument.removeEventListener('pointermove', de),
                    (h = e.domElement) == null ||
                        h.ownerDocument.removeEventListener('pointerup', ee)),
                e.dispatchEvent(y),
                (d = s.NONE);
        }
        function et(t) {
            let r;
            switch (t.button) {
                case 0:
                    r = e.mouseButtons.LEFT;
                    break;
                case 1:
                    r = e.mouseButtons.MIDDLE;
                    break;
                case 2:
                    r = e.mouseButtons.RIGHT;
                    break;
                default:
                    r = -1;
            }
            switch (r) {
                case q.DOLLY:
                    if (e.enableZoom === !1) return;
                    ue(t), (d = s.DOLLY);
                    break;
                case q.ROTATE:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (e.enablePan === !1) return;
                        Ee(t), (d = s.PAN);
                    } else {
                        if (e.enableRotate === !1) return;
                        ae(t), (d = s.ROTATE);
                    }
                    break;
                case q.PAN:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (e.enableRotate === !1) return;
                        ae(t), (d = s.ROTATE);
                    } else {
                        if (e.enablePan === !1) return;
                        Ee(t), (d = s.PAN);
                    }
                    break;
                default:
                    d = s.NONE;
            }
            d !== s.NONE && e.dispatchEvent(E);
        }
        function tt(t) {
            if (e.enabled !== !1)
                switch (d) {
                    case s.ROTATE:
                        if (e.enableRotate === !1) return;
                        Ke(t);
                        break;
                    case s.DOLLY:
                        if (e.enableZoom === !1) return;
                        Be(t);
                        break;
                    case s.PAN:
                        if (e.enablePan === !1) return;
                        Ve(t);
                        break;
                }
        }
        function xe(t) {
            e.enabled === !1 ||
                e.enableZoom === !1 ||
                (d !== s.NONE && d !== s.ROTATE) ||
                (t.preventDefault(),
                e.dispatchEvent(E),
                We(t),
                e.dispatchEvent(y));
        }
        function fe(t) {
            e.enabled === !1 || e.enablePan === !1 || qe(t);
        }
        function nt(t) {
            switch ((_e(t), l.length)) {
                case 1:
                    switch (e.touches.ONE) {
                        case G.ROTATE:
                            if (e.enableRotate === !1) return;
                            ve(), (d = s.TOUCH_ROTATE);
                            break;
                        case G.PAN:
                            if (e.enablePan === !1) return;
                            ye(), (d = s.TOUCH_PAN);
                            break;
                        default:
                            d = s.NONE;
                    }
                    break;
                case 2:
                    switch (e.touches.TWO) {
                        case G.DOLLY_PAN:
                            if (e.enableZoom === !1 && e.enablePan === !1)
                                return;
                            Ge(), (d = s.TOUCH_DOLLY_PAN);
                            break;
                        case G.DOLLY_ROTATE:
                            if (e.enableZoom === !1 && e.enableRotate === !1)
                                return;
                            Qe(), (d = s.TOUCH_DOLLY_ROTATE);
                            break;
                        default:
                            d = s.NONE;
                    }
                    break;
                default:
                    d = s.NONE;
            }
            d !== s.NONE && e.dispatchEvent(E);
        }
        function ot(t) {
            switch ((_e(t), d)) {
                case s.TOUCH_ROTATE:
                    if (e.enableRotate === !1) return;
                    Pe(t), e.update();
                    break;
                case s.TOUCH_PAN:
                    if (e.enablePan === !1) return;
                    Oe(t), e.update();
                    break;
                case s.TOUCH_DOLLY_PAN:
                    if (e.enableZoom === !1 && e.enablePan === !1) return;
                    $e(t), e.update();
                    break;
                case s.TOUCH_DOLLY_ROTATE:
                    if (e.enableZoom === !1 && e.enableRotate === !1) return;
                    Je(t), e.update();
                    break;
                default:
                    d = s.NONE;
            }
        }
        function je(t) {
            e.enabled !== !1 && t.preventDefault();
        }
        function rt(t) {
            l.push(t);
        }
        function it(t) {
            delete F[t.pointerId];
            for (let r = 0; r < l.length; r++)
                if (l[r].pointerId == t.pointerId) {
                    l.splice(r, 1);
                    return;
                }
        }
        function _e(t) {
            let r = F[t.pointerId];
            r === void 0 && ((r = new S()), (F[t.pointerId] = r)),
                r.set(t.pageX, t.pageY);
        }
        function he(t) {
            const r = t.pointerId === l[0].pointerId ? l[1] : l[0];
            return F[r.pointerId];
        }
        (this.dollyIn = (t = z()) => {
            k(t), e.update();
        }),
            (this.dollyOut = (t = z()) => {
                N(t), e.update();
            }),
            (this.getScale = () => P),
            (this.setScale = (t) => {
                $(t), e.update();
            }),
            (this.getZoomScale = () => z()),
            i !== void 0 && this.connect(i),
            this.update();
    }
};
const Bt = u.forwardRef(
    (
        {
            makeDefault: o,
            camera: n,
            regress: i,
            domElement: e,
            enableDamping: p = !0,
            keyEvents: E = !1,
            onChange: y,
            onStart: s,
            onEnd: d,
            ...I
        },
        f
    ) => {
        const v = V((m) => m.invalidate),
            P = V((m) => m.camera),
            O = V((m) => m.gl),
            M = V((m) => m.events),
            x = V((m) => m.setEvents),
            L = V((m) => m.set),
            g = V((m) => m.get),
            A = V((m) => m.performance),
            R = n || P,
            j = e || M.connected || O.domElement,
            b = u.useMemo(() => new Ft(R), [R]);
        return (
            Et(() => {
                b.enabled && b.update();
            }, -1),
            u.useEffect(
                () => (
                    E && b.connect(E === !0 ? j : E),
                    b.connect(j),
                    () => void b.dispose()
                ),
                [E, j, i, b, v]
            ),
            u.useEffect(() => {
                const m = (_) => {
                        v(), i && A.regress(), y && y(_);
                    },
                    Y = (_) => {
                        s && s(_);
                    },
                    T = (_) => {
                        d && d(_);
                    };
                return (
                    b.addEventListener('change', m),
                    b.addEventListener('start', Y),
                    b.addEventListener('end', T),
                    () => {
                        b.removeEventListener('start', Y),
                            b.removeEventListener('end', T),
                            b.removeEventListener('change', m);
                    }
                );
            }, [y, s, d, b, v, x]),
            u.useEffect(() => {
                if (o) {
                    const m = g().controls;
                    return L({ controls: b }), () => L({ controls: m });
                }
            }, [o, b]),
            u.createElement(
                'primitive',
                be({ ref: f, object: b, enableDamping: p }, I)
            )
        );
    }
);
export { Zt as C, Bt as O, be as _ };
