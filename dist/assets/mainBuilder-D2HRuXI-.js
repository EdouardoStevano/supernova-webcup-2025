import {
    I as mn,
    c as rt,
    r as a,
    k as B,
    H as ot,
    j as f,
    m as fe,
    X as Xt,
} from './index-BRBA0OY8.js';
import { P as xn, I as wn } from './palette-gdAEGhtr.js';
import { E as Cn } from './eye-BIZu7uzw.js';
var Se = mn();
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dn = [
        ['circle', { cx: '9', cy: '12', r: '1', key: '1vctgf' }],
        ['circle', { cx: '9', cy: '5', r: '1', key: 'hp0tcf' }],
        ['circle', { cx: '9', cy: '19', r: '1', key: 'fkjjf6' }],
        ['circle', { cx: '15', cy: '12', r: '1', key: '1tmaij' }],
        ['circle', { cx: '15', cy: '5', r: '1', key: '19l28e' }],
        ['circle', { cx: '15', cy: '19', r: '1', key: 'f4zoj3' }],
    ],
    En = rt('grip-vertical', Dn);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sn = [
        ['path', { d: 'M11 19H5v-6', key: '8awifj' }],
        ['path', { d: 'M13 5h6v6', key: '7voy1q' }],
        ['path', { d: 'M19 5 5 19', key: 'wwaj1z' }],
    ],
    kn = rt('move-diagonal', Sn);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rn = [
        ['circle', { cx: '18', cy: '5', r: '3', key: 'gq8acd' }],
        ['circle', { cx: '6', cy: '12', r: '3', key: 'w7nqdw' }],
        ['circle', { cx: '18', cy: '19', r: '3', key: '1xt0gg' }],
        [
            'line',
            {
                x1: '8.59',
                x2: '15.42',
                y1: '13.51',
                y2: '17.49',
                key: '47mynk',
            },
        ],
        [
            'line',
            { x1: '15.41', x2: '8.59', y1: '6.51', y2: '10.49', key: '1n3mei' },
        ],
    ],
    Nn = rt('share-2', Rn),
    He =
        typeof window < 'u' &&
        typeof window.document < 'u' &&
        typeof window.document.createElement < 'u';
function me(e) {
    const t = Object.prototype.toString.call(e);
    return t === '[object Window]' || t === '[object global]';
}
function it(e) {
    return 'nodeType' in e;
}
function H(e) {
    var t, n;
    return e
        ? me(e)
            ? e
            : it(e) &&
                (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) !=
                    null
              ? t
              : window
        : window;
}
function st(e) {
    const { Document: t } = H(e);
    return e instanceof t;
}
function je(e) {
    return me(e) ? !1 : e instanceof H(e).HTMLElement;
}
function Gt(e) {
    return e instanceof H(e).SVGElement;
}
function xe(e) {
    return e
        ? me(e)
            ? e.document
            : it(e)
              ? st(e)
                  ? e
                  : je(e) || Gt(e)
                    ? e.ownerDocument
                    : document
              : document
        : document;
}
const le = He ? a.useLayoutEffect : a.useEffect;
function at(e) {
    const t = a.useRef(e);
    return (
        le(() => {
            t.current = e;
        }),
        a.useCallback(function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
            return t.current == null ? void 0 : t.current(...r);
        }, [])
    );
}
function Mn() {
    const e = a.useRef(null),
        t = a.useCallback((r, o) => {
            e.current = setInterval(r, o);
        }, []),
        n = a.useCallback(() => {
            e.current !== null &&
                (clearInterval(e.current), (e.current = null));
        }, []);
    return [t, n];
}
function lt(e, t) {
    t === void 0 && (t = [e]);
    const n = a.useRef(e);
    return (
        le(() => {
            n.current !== e && (n.current = e);
        }, t),
        n
    );
}
function Ae(e, t) {
    const n = a.useRef();
    return a.useMemo(() => {
        const r = e(n.current);
        return (n.current = r), r;
    }, [...t]);
}
function Je(e) {
    const t = at(e),
        n = a.useRef(null),
        r = a.useCallback((o) => {
            o !== n.current && (t == null || t(o, n.current)), (n.current = o);
        }, []);
    return [n, r];
}
function Qe(e) {
    const t = a.useRef();
    return (
        a.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
}
let Ke = {};
function ct(e, t) {
    return a.useMemo(() => {
        if (t) return t;
        const n = Ke[e] == null ? 0 : Ke[e] + 1;
        return (Ke[e] = n), e + '-' + n;
    }, [e, t]);
}
function Yt(e) {
    return function (t) {
        for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
        )
            r[o - 1] = arguments[o];
        return r.reduce(
            (i, l) => {
                const s = Object.entries(l);
                for (const [d, h] of s) {
                    const c = i[d];
                    c != null && (i[d] = c + e * h);
                }
                return i;
            },
            { ...t }
        );
    };
}
const ye = Yt(1),
    Fe = Yt(-1);
function jn(e) {
    return 'clientX' in e && 'clientY' in e;
}
function Kt(e) {
    if (!e) return !1;
    const { KeyboardEvent: t } = H(e.target);
    return t && e instanceof t;
}
function An(e) {
    if (!e) return !1;
    const { TouchEvent: t } = H(e.target);
    return t && e instanceof t;
}
function Ze(e) {
    if (An(e)) {
        if (e.touches && e.touches.length) {
            const { clientX: t, clientY: n } = e.touches[0];
            return { x: t, y: n };
        } else if (e.changedTouches && e.changedTouches.length) {
            const { clientX: t, clientY: n } = e.changedTouches[0];
            return { x: t, y: n };
        }
    }
    return jn(e) ? { x: e.clientX, y: e.clientY } : null;
}
const Mt =
    'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function Tn(e) {
    return e.matches(Mt) ? e : e.querySelector(Mt);
}
const In = { display: 'none' };
function Ln(e) {
    let { id: t, value: n } = e;
    return B.createElement('div', { id: t, style: In }, n);
}
function zn(e) {
    let { id: t, announcement: n, ariaLiveType: r = 'assertive' } = e;
    const o = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(100%)',
        whiteSpace: 'nowrap',
    };
    return B.createElement(
        'div',
        { id: t, style: o, role: 'status', 'aria-live': r, 'aria-atomic': !0 },
        n
    );
}
function On() {
    const [e, t] = a.useState('');
    return {
        announce: a.useCallback((r) => {
            r != null && t(r);
        }, []),
        announcement: e,
    };
}
const qt = a.createContext(null);
function Pn(e) {
    const t = a.useContext(qt);
    a.useEffect(() => {
        if (!t)
            throw new Error(
                'useDndMonitor must be used within a children of <DndContext>'
            );
        return t(e);
    }, [e, t]);
}
function Fn() {
    const [e] = a.useState(() => new Set()),
        t = a.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
    return [
        a.useCallback(
            (r) => {
                let { type: o, event: i } = r;
                e.forEach((l) => {
                    var s;
                    return (s = l[o]) == null ? void 0 : s.call(l, i);
                });
            },
            [e]
        ),
        t,
    ];
}
const $n = {
        draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
    },
    Bn = {
        onDragStart(e) {
            let { active: t } = e;
            return 'Picked up draggable item ' + t.id + '.';
        },
        onDragOver(e) {
            let { active: t, over: n } = e;
            return n
                ? 'Draggable item ' +
                      t.id +
                      ' was moved over droppable area ' +
                      n.id +
                      '.'
                : 'Draggable item ' +
                      t.id +
                      ' is no longer over a droppable area.';
        },
        onDragEnd(e) {
            let { active: t, over: n } = e;
            return n
                ? 'Draggable item ' +
                      t.id +
                      ' was dropped over droppable area ' +
                      n.id
                : 'Draggable item ' + t.id + ' was dropped.';
        },
        onDragCancel(e) {
            let { active: t } = e;
            return (
                'Dragging was cancelled. Draggable item ' +
                t.id +
                ' was dropped.'
            );
        },
    };
function Hn(e) {
    let {
        announcements: t = Bn,
        container: n,
        hiddenTextDescribedById: r,
        screenReaderInstructions: o = $n,
    } = e;
    const { announce: i, announcement: l } = On(),
        s = ct('DndLiveRegion'),
        [d, h] = a.useState(!1);
    if (
        (a.useEffect(() => {
            h(!0);
        }, []),
        Pn(
            a.useMemo(
                () => ({
                    onDragStart(u) {
                        let { active: b } = u;
                        i(t.onDragStart({ active: b }));
                    },
                    onDragMove(u) {
                        let { active: b, over: y } = u;
                        t.onDragMove && i(t.onDragMove({ active: b, over: y }));
                    },
                    onDragOver(u) {
                        let { active: b, over: y } = u;
                        i(t.onDragOver({ active: b, over: y }));
                    },
                    onDragEnd(u) {
                        let { active: b, over: y } = u;
                        i(t.onDragEnd({ active: b, over: y }));
                    },
                    onDragCancel(u) {
                        let { active: b, over: y } = u;
                        i(t.onDragCancel({ active: b, over: y }));
                    },
                }),
                [i, t]
            )
        ),
        !d)
    )
        return null;
    const c = B.createElement(
        B.Fragment,
        null,
        B.createElement(Ln, { id: r, value: o.draggable }),
        B.createElement(zn, { id: s, announcement: l })
    );
    return n ? Se.createPortal(c, n) : c;
}
var P;
(function (e) {
    (e.DragStart = 'dragStart'),
        (e.DragMove = 'dragMove'),
        (e.DragEnd = 'dragEnd'),
        (e.DragCancel = 'dragCancel'),
        (e.DragOver = 'dragOver'),
        (e.RegisterDroppable = 'registerDroppable'),
        (e.SetDroppableDisabled = 'setDroppableDisabled'),
        (e.UnregisterDroppable = 'unregisterDroppable');
})(P || (P = {}));
function $e() {}
function jt(e, t) {
    return a.useMemo(() => ({ sensor: e, options: t ?? {} }), [e, t]);
}
function Un() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return a.useMemo(() => [...t].filter((r) => r != null), [...t]);
}
const Q = Object.freeze({ x: 0, y: 0 });
function Wn(e, t) {
    let {
            data: { value: n },
        } = e,
        {
            data: { value: r },
        } = t;
    return r - n;
}
function Xn(e, t) {
    if (!e || e.length === 0) return null;
    const [n] = e;
    return n[t];
}
function Gn(e, t) {
    const n = Math.max(t.top, e.top),
        r = Math.max(t.left, e.left),
        o = Math.min(t.left + t.width, e.left + e.width),
        i = Math.min(t.top + t.height, e.top + e.height),
        l = o - r,
        s = i - n;
    if (r < o && n < i) {
        const d = t.width * t.height,
            h = e.width * e.height,
            c = l * s,
            u = c / (d + h - c);
        return Number(u.toFixed(4));
    }
    return 0;
}
const Yn = (e) => {
    let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
    const o = [];
    for (const i of r) {
        const { id: l } = i,
            s = n.get(l);
        if (s) {
            const d = Gn(s, t);
            d > 0 &&
                o.push({ id: l, data: { droppableContainer: i, value: d } });
        }
    }
    return o.sort(Wn);
};
function Kn(e, t, n) {
    return {
        ...e,
        scaleX: t && n ? t.width / n.width : 1,
        scaleY: t && n ? t.height / n.height : 1,
    };
}
function Vt(e, t) {
    return e && t ? { x: e.left - t.left, y: e.top - t.top } : Q;
}
function qn(e) {
    return function (n) {
        for (
            var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
        )
            o[i - 1] = arguments[i];
        return o.reduce(
            (l, s) => ({
                ...l,
                top: l.top + e * s.y,
                bottom: l.bottom + e * s.y,
                left: l.left + e * s.x,
                right: l.right + e * s.x,
            }),
            { ...n }
        );
    };
}
const Vn = qn(1);
function _n(e) {
    if (e.startsWith('matrix3d(')) {
        const t = e.slice(9, -1).split(/, /);
        return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
    } else if (e.startsWith('matrix(')) {
        const t = e.slice(7, -1).split(/, /);
        return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
    }
    return null;
}
function Jn(e, t, n) {
    const r = _n(t);
    if (!r) return e;
    const { scaleX: o, scaleY: i, x: l, y: s } = r,
        d = e.left - l - (1 - o) * parseFloat(n),
        h = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(' ') + 1)),
        c = o ? e.width / o : e.width,
        u = i ? e.height / i : e.height;
    return {
        width: c,
        height: u,
        top: h,
        right: d + c,
        bottom: h + u,
        left: d,
    };
}
const Qn = { ignoreTransform: !1 };
function Te(e, t) {
    t === void 0 && (t = Qn);
    let n = e.getBoundingClientRect();
    if (t.ignoreTransform) {
        const { transform: h, transformOrigin: c } = H(e).getComputedStyle(e);
        h && (n = Jn(n, h, c));
    }
    const { top: r, left: o, width: i, height: l, bottom: s, right: d } = n;
    return { top: r, left: o, width: i, height: l, bottom: s, right: d };
}
function At(e) {
    return Te(e, { ignoreTransform: !0 });
}
function Zn(e) {
    const t = e.innerWidth,
        n = e.innerHeight;
    return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function er(e, t) {
    return (
        t === void 0 && (t = H(e).getComputedStyle(e)), t.position === 'fixed'
    );
}
function tr(e, t) {
    t === void 0 && (t = H(e).getComputedStyle(e));
    const n = /(auto|scroll|overlay)/;
    return ['overflow', 'overflowX', 'overflowY'].some((o) => {
        const i = t[o];
        return typeof i == 'string' ? n.test(i) : !1;
    });
}
function dt(e, t) {
    const n = [];
    function r(o) {
        if ((t != null && n.length >= t) || !o) return n;
        if (
            st(o) &&
            o.scrollingElement != null &&
            !n.includes(o.scrollingElement)
        )
            return n.push(o.scrollingElement), n;
        if (!je(o) || Gt(o) || n.includes(o)) return n;
        const i = H(e).getComputedStyle(o);
        return o !== e && tr(o, i) && n.push(o), er(o, i) ? n : r(o.parentNode);
    }
    return e ? r(e) : n;
}
function _t(e) {
    const [t] = dt(e, 1);
    return t ?? null;
}
function qe(e) {
    return !He || !e
        ? null
        : me(e)
          ? e
          : it(e)
            ? st(e) || e === xe(e).scrollingElement
                ? window
                : je(e)
                  ? e
                  : null
            : null;
}
function Jt(e) {
    return me(e) ? e.scrollX : e.scrollLeft;
}
function Qt(e) {
    return me(e) ? e.scrollY : e.scrollTop;
}
function et(e) {
    return { x: Jt(e), y: Qt(e) };
}
var L;
(function (e) {
    (e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward');
})(L || (L = {}));
function Zt(e) {
    return !He || !e ? !1 : e === document.scrollingElement;
}
function en(e) {
    const t = { x: 0, y: 0 },
        n = Zt(e)
            ? { height: window.innerHeight, width: window.innerWidth }
            : { height: e.clientHeight, width: e.clientWidth },
        r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
        o = e.scrollTop <= t.y,
        i = e.scrollLeft <= t.x,
        l = e.scrollTop >= r.y,
        s = e.scrollLeft >= r.x;
    return {
        isTop: o,
        isLeft: i,
        isBottom: l,
        isRight: s,
        maxScroll: r,
        minScroll: t,
    };
}
const nr = { x: 0.2, y: 0.2 };
function rr(e, t, n, r, o) {
    let { top: i, left: l, right: s, bottom: d } = n;
    r === void 0 && (r = 10), o === void 0 && (o = nr);
    const { isTop: h, isBottom: c, isLeft: u, isRight: b } = en(e),
        y = { x: 0, y: 0 },
        R = { x: 0, y: 0 },
        w = { height: t.height * o.y, width: t.width * o.x };
    return (
        !h && i <= t.top + w.height
            ? ((y.y = L.Backward),
              (R.y = r * Math.abs((t.top + w.height - i) / w.height)))
            : !c &&
              d >= t.bottom - w.height &&
              ((y.y = L.Forward),
              (R.y = r * Math.abs((t.bottom - w.height - d) / w.height))),
        !b && s >= t.right - w.width
            ? ((y.x = L.Forward),
              (R.x = r * Math.abs((t.right - w.width - s) / w.width)))
            : !u &&
              l <= t.left + w.width &&
              ((y.x = L.Backward),
              (R.x = r * Math.abs((t.left + w.width - l) / w.width))),
        { direction: y, speed: R }
    );
}
function or(e) {
    if (e === document.scrollingElement) {
        const { innerWidth: i, innerHeight: l } = window;
        return { top: 0, left: 0, right: i, bottom: l, width: i, height: l };
    }
    const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect();
    return {
        top: t,
        left: n,
        right: r,
        bottom: o,
        width: e.clientWidth,
        height: e.clientHeight,
    };
}
function tn(e) {
    return e.reduce((t, n) => ye(t, et(n)), Q);
}
function ir(e) {
    return e.reduce((t, n) => t + Jt(n), 0);
}
function sr(e) {
    return e.reduce((t, n) => t + Qt(n), 0);
}
function ar(e, t) {
    if ((t === void 0 && (t = Te), !e)) return;
    const { top: n, left: r, bottom: o, right: i } = t(e);
    _t(e) &&
        (o <= 0 ||
            i <= 0 ||
            n >= window.innerHeight ||
            r >= window.innerWidth) &&
        e.scrollIntoView({ block: 'center', inline: 'center' });
}
const lr = [
    ['x', ['left', 'right'], ir],
    ['y', ['top', 'bottom'], sr],
];
class ut {
    constructor(t, n) {
        (this.rect = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.right = void 0),
            (this.left = void 0);
        const r = dt(n),
            o = tn(r);
        (this.rect = { ...t }),
            (this.width = t.width),
            (this.height = t.height);
        for (const [i, l, s] of lr)
            for (const d of l)
                Object.defineProperty(this, d, {
                    get: () => {
                        const h = s(r),
                            c = o[i] - h;
                        return this.rect[d] + c;
                    },
                    enumerable: !0,
                });
        Object.defineProperty(this, 'rect', { enumerable: !1 });
    }
}
class ke {
    constructor(t) {
        (this.target = void 0),
            (this.listeners = []),
            (this.removeAll = () => {
                this.listeners.forEach((n) => {
                    var r;
                    return (r = this.target) == null
                        ? void 0
                        : r.removeEventListener(...n);
                });
            }),
            (this.target = t);
    }
    add(t, n, r) {
        var o;
        (o = this.target) == null || o.addEventListener(t, n, r),
            this.listeners.push([t, n, r]);
    }
}
function cr(e) {
    const { EventTarget: t } = H(e);
    return e instanceof t ? e : xe(e);
}
function Ve(e, t) {
    const n = Math.abs(e.x),
        r = Math.abs(e.y);
    return typeof t == 'number'
        ? Math.sqrt(n ** 2 + r ** 2) > t
        : 'x' in t && 'y' in t
          ? n > t.x && r > t.y
          : 'x' in t
            ? n > t.x
            : 'y' in t
              ? r > t.y
              : !1;
}
var K;
(function (e) {
    (e.Click = 'click'),
        (e.DragStart = 'dragstart'),
        (e.Keydown = 'keydown'),
        (e.ContextMenu = 'contextmenu'),
        (e.Resize = 'resize'),
        (e.SelectionChange = 'selectionchange'),
        (e.VisibilityChange = 'visibilitychange');
})(K || (K = {}));
function Tt(e) {
    e.preventDefault();
}
function dr(e) {
    e.stopPropagation();
}
var j;
(function (e) {
    (e.Space = 'Space'),
        (e.Down = 'ArrowDown'),
        (e.Right = 'ArrowRight'),
        (e.Left = 'ArrowLeft'),
        (e.Up = 'ArrowUp'),
        (e.Esc = 'Escape'),
        (e.Enter = 'Enter'),
        (e.Tab = 'Tab');
})(j || (j = {}));
const nn = {
        start: [j.Space, j.Enter],
        cancel: [j.Esc],
        end: [j.Space, j.Enter, j.Tab],
    },
    ur = (e, t) => {
        let { currentCoordinates: n } = t;
        switch (e.code) {
            case j.Right:
                return { ...n, x: n.x + 25 };
            case j.Left:
                return { ...n, x: n.x - 25 };
            case j.Down:
                return { ...n, y: n.y + 25 };
            case j.Up:
                return { ...n, y: n.y - 25 };
        }
    };
class rn {
    constructor(t) {
        (this.props = void 0),
            (this.autoScrollEnabled = !1),
            (this.referenceCoordinates = void 0),
            (this.listeners = void 0),
            (this.windowListeners = void 0),
            (this.props = t);
        const {
            event: { target: n },
        } = t;
        (this.props = t),
            (this.listeners = new ke(xe(n))),
            (this.windowListeners = new ke(H(n))),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            this.attach();
    }
    attach() {
        this.handleStart(),
            this.windowListeners.add(K.Resize, this.handleCancel),
            this.windowListeners.add(K.VisibilityChange, this.handleCancel),
            setTimeout(() => this.listeners.add(K.Keydown, this.handleKeyDown));
    }
    handleStart() {
        const { activeNode: t, onStart: n } = this.props,
            r = t.node.current;
        r && ar(r), n(Q);
    }
    handleKeyDown(t) {
        if (Kt(t)) {
            const { active: n, context: r, options: o } = this.props,
                {
                    keyboardCodes: i = nn,
                    coordinateGetter: l = ur,
                    scrollBehavior: s = 'smooth',
                } = o,
                { code: d } = t;
            if (i.end.includes(d)) {
                this.handleEnd(t);
                return;
            }
            if (i.cancel.includes(d)) {
                this.handleCancel(t);
                return;
            }
            const { collisionRect: h } = r.current,
                c = h ? { x: h.left, y: h.top } : Q;
            this.referenceCoordinates || (this.referenceCoordinates = c);
            const u = l(t, {
                active: n,
                context: r.current,
                currentCoordinates: c,
            });
            if (u) {
                const b = Fe(u, c),
                    y = { x: 0, y: 0 },
                    { scrollableAncestors: R } = r.current;
                for (const w of R) {
                    const k = t.code,
                        {
                            isTop: v,
                            isRight: E,
                            isLeft: N,
                            isBottom: g,
                            maxScroll: p,
                            minScroll: D,
                        } = en(w),
                        m = or(w),
                        x = {
                            x: Math.min(
                                k === j.Right ? m.right - m.width / 2 : m.right,
                                Math.max(
                                    k === j.Right
                                        ? m.left
                                        : m.left + m.width / 2,
                                    u.x
                                )
                            ),
                            y: Math.min(
                                k === j.Down
                                    ? m.bottom - m.height / 2
                                    : m.bottom,
                                Math.max(
                                    k === j.Down ? m.top : m.top + m.height / 2,
                                    u.y
                                )
                            ),
                        },
                        C = (k === j.Right && !E) || (k === j.Left && !N),
                        S = (k === j.Down && !g) || (k === j.Up && !v);
                    if (C && x.x !== u.x) {
                        const M = w.scrollLeft + b.x,
                            T =
                                (k === j.Right && M <= p.x) ||
                                (k === j.Left && M >= D.x);
                        if (T && !b.y) {
                            w.scrollTo({ left: M, behavior: s });
                            return;
                        }
                        T
                            ? (y.x = w.scrollLeft - M)
                            : (y.x =
                                  k === j.Right
                                      ? w.scrollLeft - p.x
                                      : w.scrollLeft - D.x),
                            y.x && w.scrollBy({ left: -y.x, behavior: s });
                        break;
                    } else if (S && x.y !== u.y) {
                        const M = w.scrollTop + b.y,
                            T =
                                (k === j.Down && M <= p.y) ||
                                (k === j.Up && M >= D.y);
                        if (T && !b.x) {
                            w.scrollTo({ top: M, behavior: s });
                            return;
                        }
                        T
                            ? (y.y = w.scrollTop - M)
                            : (y.y =
                                  k === j.Down
                                      ? w.scrollTop - p.y
                                      : w.scrollTop - D.y),
                            y.y && w.scrollBy({ top: -y.y, behavior: s });
                        break;
                    }
                }
                this.handleMove(t, ye(Fe(u, this.referenceCoordinates), y));
            }
        }
    }
    handleMove(t, n) {
        const { onMove: r } = this.props;
        t.preventDefault(), r(n);
    }
    handleEnd(t) {
        const { onEnd: n } = this.props;
        t.preventDefault(), this.detach(), n();
    }
    handleCancel(t) {
        const { onCancel: n } = this.props;
        t.preventDefault(), this.detach(), n();
    }
    detach() {
        this.listeners.removeAll(), this.windowListeners.removeAll();
    }
}
rn.activators = [
    {
        eventName: 'onKeyDown',
        handler: (e, t, n) => {
            let { keyboardCodes: r = nn, onActivation: o } = t,
                { active: i } = n;
            const { code: l } = e.nativeEvent;
            if (r.start.includes(l)) {
                const s = i.activatorNode.current;
                return s && e.target !== s
                    ? !1
                    : (e.preventDefault(),
                      o == null || o({ event: e.nativeEvent }),
                      !0);
            }
            return !1;
        },
    },
];
function It(e) {
    return !!(e && 'distance' in e);
}
function Lt(e) {
    return !!(e && 'delay' in e);
}
class ft {
    constructor(t, n, r) {
        var o;
        r === void 0 && (r = cr(t.event.target)),
            (this.props = void 0),
            (this.events = void 0),
            (this.autoScrollEnabled = !0),
            (this.document = void 0),
            (this.activated = !1),
            (this.initialCoordinates = void 0),
            (this.timeoutId = null),
            (this.listeners = void 0),
            (this.documentListeners = void 0),
            (this.windowListeners = void 0),
            (this.props = t),
            (this.events = n);
        const { event: i } = t,
            { target: l } = i;
        (this.props = t),
            (this.events = n),
            (this.document = xe(l)),
            (this.documentListeners = new ke(this.document)),
            (this.listeners = new ke(r)),
            (this.windowListeners = new ke(H(l))),
            (this.initialCoordinates = (o = Ze(i)) != null ? o : Q),
            (this.handleStart = this.handleStart.bind(this)),
            (this.handleMove = this.handleMove.bind(this)),
            (this.handleEnd = this.handleEnd.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            (this.handleKeydown = this.handleKeydown.bind(this)),
            (this.removeTextSelection = this.removeTextSelection.bind(this)),
            this.attach();
    }
    attach() {
        const {
            events: t,
            props: {
                options: {
                    activationConstraint: n,
                    bypassActivationConstraint: r,
                },
            },
        } = this;
        if (
            (this.listeners.add(t.move.name, this.handleMove, { passive: !1 }),
            this.listeners.add(t.end.name, this.handleEnd),
            t.cancel && this.listeners.add(t.cancel.name, this.handleCancel),
            this.windowListeners.add(K.Resize, this.handleCancel),
            this.windowListeners.add(K.DragStart, Tt),
            this.windowListeners.add(K.VisibilityChange, this.handleCancel),
            this.windowListeners.add(K.ContextMenu, Tt),
            this.documentListeners.add(K.Keydown, this.handleKeydown),
            n)
        ) {
            if (
                r != null &&
                r({
                    event: this.props.event,
                    activeNode: this.props.activeNode,
                    options: this.props.options,
                })
            )
                return this.handleStart();
            if (Lt(n)) {
                (this.timeoutId = setTimeout(this.handleStart, n.delay)),
                    this.handlePending(n);
                return;
            }
            if (It(n)) {
                this.handlePending(n);
                return;
            }
        }
        this.handleStart();
    }
    detach() {
        this.listeners.removeAll(),
            this.windowListeners.removeAll(),
            setTimeout(this.documentListeners.removeAll, 50),
            this.timeoutId !== null &&
                (clearTimeout(this.timeoutId), (this.timeoutId = null));
    }
    handlePending(t, n) {
        const { active: r, onPending: o } = this.props;
        o(r, t, this.initialCoordinates, n);
    }
    handleStart() {
        const { initialCoordinates: t } = this,
            { onStart: n } = this.props;
        t &&
            ((this.activated = !0),
            this.documentListeners.add(K.Click, dr, { capture: !0 }),
            this.removeTextSelection(),
            this.documentListeners.add(
                K.SelectionChange,
                this.removeTextSelection
            ),
            n(t));
    }
    handleMove(t) {
        var n;
        const { activated: r, initialCoordinates: o, props: i } = this,
            {
                onMove: l,
                options: { activationConstraint: s },
            } = i;
        if (!o) return;
        const d = (n = Ze(t)) != null ? n : Q,
            h = Fe(o, d);
        if (!r && s) {
            if (It(s)) {
                if (s.tolerance != null && Ve(h, s.tolerance))
                    return this.handleCancel();
                if (Ve(h, s.distance)) return this.handleStart();
            }
            if (Lt(s) && Ve(h, s.tolerance)) return this.handleCancel();
            this.handlePending(s, h);
            return;
        }
        t.cancelable && t.preventDefault(), l(d);
    }
    handleEnd() {
        const { onAbort: t, onEnd: n } = this.props;
        this.detach(), this.activated || t(this.props.active), n();
    }
    handleCancel() {
        const { onAbort: t, onCancel: n } = this.props;
        this.detach(), this.activated || t(this.props.active), n();
    }
    handleKeydown(t) {
        t.code === j.Esc && this.handleCancel();
    }
    removeTextSelection() {
        var t;
        (t = this.document.getSelection()) == null || t.removeAllRanges();
    }
}
const fr = {
    cancel: { name: 'pointercancel' },
    move: { name: 'pointermove' },
    end: { name: 'pointerup' },
};
class on extends ft {
    constructor(t) {
        const { event: n } = t,
            r = xe(n.target);
        super(t, fr, r);
    }
}
on.activators = [
    {
        eventName: 'onPointerDown',
        handler: (e, t) => {
            let { nativeEvent: n } = e,
                { onActivation: r } = t;
            return !n.isPrimary || n.button !== 0
                ? !1
                : (r == null || r({ event: n }), !0);
        },
    },
];
const hr = { move: { name: 'mousemove' }, end: { name: 'mouseup' } };
var tt;
(function (e) {
    e[(e.RightClick = 2)] = 'RightClick';
})(tt || (tt = {}));
class sn extends ft {
    constructor(t) {
        super(t, hr, xe(t.event.target));
    }
}
sn.activators = [
    {
        eventName: 'onMouseDown',
        handler: (e, t) => {
            let { nativeEvent: n } = e,
                { onActivation: r } = t;
            return n.button === tt.RightClick
                ? !1
                : (r == null || r({ event: n }), !0);
        },
    },
];
const _e = {
    cancel: { name: 'touchcancel' },
    move: { name: 'touchmove' },
    end: { name: 'touchend' },
};
class an extends ft {
    constructor(t) {
        super(t, _e);
    }
    static setup() {
        return (
            window.addEventListener(_e.move.name, t, {
                capture: !1,
                passive: !1,
            }),
            function () {
                window.removeEventListener(_e.move.name, t);
            }
        );
        function t() {}
    }
}
an.activators = [
    {
        eventName: 'onTouchStart',
        handler: (e, t) => {
            let { nativeEvent: n } = e,
                { onActivation: r } = t;
            const { touches: o } = n;
            return o.length > 1 ? !1 : (r == null || r({ event: n }), !0);
        },
    },
];
var Re;
(function (e) {
    (e[(e.Pointer = 0)] = 'Pointer'),
        (e[(e.DraggableRect = 1)] = 'DraggableRect');
})(Re || (Re = {}));
var Be;
(function (e) {
    (e[(e.TreeOrder = 0)] = 'TreeOrder'),
        (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder');
})(Be || (Be = {}));
function gr(e) {
    let {
        acceleration: t,
        activator: n = Re.Pointer,
        canScroll: r,
        draggingRect: o,
        enabled: i,
        interval: l = 5,
        order: s = Be.TreeOrder,
        pointerCoordinates: d,
        scrollableAncestors: h,
        scrollableAncestorRects: c,
        delta: u,
        threshold: b,
    } = e;
    const y = vr({ delta: u, disabled: !i }),
        [R, w] = Mn(),
        k = a.useRef({ x: 0, y: 0 }),
        v = a.useRef({ x: 0, y: 0 }),
        E = a.useMemo(() => {
            switch (n) {
                case Re.Pointer:
                    return d
                        ? { top: d.y, bottom: d.y, left: d.x, right: d.x }
                        : null;
                case Re.DraggableRect:
                    return o;
            }
        }, [n, o, d]),
        N = a.useRef(null),
        g = a.useCallback(() => {
            const D = N.current;
            if (!D) return;
            const m = k.current.x * v.current.x,
                x = k.current.y * v.current.y;
            D.scrollBy(m, x);
        }, []),
        p = a.useMemo(
            () => (s === Be.TreeOrder ? [...h].reverse() : h),
            [s, h]
        );
    a.useEffect(() => {
        if (!i || !h.length || !E) {
            w();
            return;
        }
        for (const D of p) {
            if ((r == null ? void 0 : r(D)) === !1) continue;
            const m = h.indexOf(D),
                x = c[m];
            if (!x) continue;
            const { direction: C, speed: S } = rr(D, x, E, t, b);
            for (const M of ['x', 'y']) y[M][C[M]] || ((S[M] = 0), (C[M] = 0));
            if (S.x > 0 || S.y > 0) {
                w(), (N.current = D), R(g, l), (k.current = S), (v.current = C);
                return;
            }
        }
        (k.current = { x: 0, y: 0 }), (v.current = { x: 0, y: 0 }), w();
    }, [
        t,
        g,
        r,
        w,
        i,
        l,
        JSON.stringify(E),
        JSON.stringify(y),
        R,
        h,
        p,
        c,
        JSON.stringify(b),
    ]);
}
const pr = {
    x: { [L.Backward]: !1, [L.Forward]: !1 },
    y: { [L.Backward]: !1, [L.Forward]: !1 },
};
function vr(e) {
    let { delta: t, disabled: n } = e;
    const r = Qe(t);
    return Ae(
        (o) => {
            if (n || !r || !o) return pr;
            const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
            return {
                x: {
                    [L.Backward]: o.x[L.Backward] || i.x === -1,
                    [L.Forward]: o.x[L.Forward] || i.x === 1,
                },
                y: {
                    [L.Backward]: o.y[L.Backward] || i.y === -1,
                    [L.Forward]: o.y[L.Forward] || i.y === 1,
                },
            };
        },
        [n, t, r]
    );
}
function br(e, t) {
    const n = t != null ? e.get(t) : void 0,
        r = n ? n.node.current : null;
    return Ae(
        (o) => {
            var i;
            return t == null ? null : (i = r ?? o) != null ? i : null;
        },
        [r, t]
    );
}
function yr(e, t) {
    return a.useMemo(
        () =>
            e.reduce((n, r) => {
                const { sensor: o } = r,
                    i = o.activators.map((l) => ({
                        eventName: l.eventName,
                        handler: t(l.handler, r),
                    }));
                return [...n, ...i];
            }, []),
        [e, t]
    );
}
var Me;
(function (e) {
    (e[(e.Always = 0)] = 'Always'),
        (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
        (e[(e.WhileDragging = 2)] = 'WhileDragging');
})(Me || (Me = {}));
var nt;
(function (e) {
    e.Optimized = 'optimized';
})(nt || (nt = {}));
const zt = new Map();
function mr(e, t) {
    let { dragging: n, dependencies: r, config: o } = t;
    const [i, l] = a.useState(null),
        { frequency: s, measure: d, strategy: h } = o,
        c = a.useRef(e),
        u = k(),
        b = lt(u),
        y = a.useCallback(
            function (v) {
                v === void 0 && (v = []),
                    !b.current &&
                        l((E) =>
                            E === null
                                ? v
                                : E.concat(v.filter((N) => !E.includes(N)))
                        );
            },
            [b]
        ),
        R = a.useRef(null),
        w = Ae(
            (v) => {
                if (u && !n) return zt;
                if (!v || v === zt || c.current !== e || i != null) {
                    const E = new Map();
                    for (let N of e) {
                        if (!N) continue;
                        if (
                            i &&
                            i.length > 0 &&
                            !i.includes(N.id) &&
                            N.rect.current
                        ) {
                            E.set(N.id, N.rect.current);
                            continue;
                        }
                        const g = N.node.current,
                            p = g ? new ut(d(g), g) : null;
                        (N.rect.current = p), p && E.set(N.id, p);
                    }
                    return E;
                }
                return v;
            },
            [e, i, n, u, d]
        );
    return (
        a.useEffect(() => {
            c.current = e;
        }, [e]),
        a.useEffect(() => {
            u || y();
        }, [n, u]),
        a.useEffect(() => {
            i && i.length > 0 && l(null);
        }, [JSON.stringify(i)]),
        a.useEffect(() => {
            u ||
                typeof s != 'number' ||
                R.current !== null ||
                (R.current = setTimeout(() => {
                    y(), (R.current = null);
                }, s));
        }, [s, u, y, ...r]),
        {
            droppableRects: w,
            measureDroppableContainers: y,
            measuringScheduled: i != null,
        }
    );
    function k() {
        switch (h) {
            case Me.Always:
                return !1;
            case Me.BeforeDragging:
                return n;
            default:
                return !n;
        }
    }
}
function ln(e, t) {
    return Ae(
        (n) => (e ? n || (typeof t == 'function' ? t(e) : e) : null),
        [t, e]
    );
}
function xr(e, t) {
    return ln(e, t);
}
function wr(e) {
    let { callback: t, disabled: n } = e;
    const r = at(t),
        o = a.useMemo(() => {
            if (
                n ||
                typeof window > 'u' ||
                typeof window.MutationObserver > 'u'
            )
                return;
            const { MutationObserver: i } = window;
            return new i(r);
        }, [r, n]);
    return (
        a.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o
    );
}
function ht(e) {
    let { callback: t, disabled: n } = e;
    const r = at(t),
        o = a.useMemo(() => {
            if (n || typeof window > 'u' || typeof window.ResizeObserver > 'u')
                return;
            const { ResizeObserver: i } = window;
            return new i(r);
        }, [n]);
    return (
        a.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o
    );
}
function Cr(e) {
    return new ut(Te(e), e);
}
function Ot(e, t, n) {
    t === void 0 && (t = Cr);
    const [r, o] = a.useState(null);
    function i() {
        o((d) => {
            if (!e) return null;
            if (e.isConnected === !1) {
                var h;
                return (h = d ?? n) != null ? h : null;
            }
            const c = t(e);
            return JSON.stringify(d) === JSON.stringify(c) ? d : c;
        });
    }
    const l = wr({
            callback(d) {
                if (e)
                    for (const h of d) {
                        const { type: c, target: u } = h;
                        if (
                            c === 'childList' &&
                            u instanceof HTMLElement &&
                            u.contains(e)
                        ) {
                            i();
                            break;
                        }
                    }
            },
        }),
        s = ht({ callback: i });
    return (
        le(() => {
            i(),
                e
                    ? (s == null || s.observe(e),
                      l == null ||
                          l.observe(document.body, {
                              childList: !0,
                              subtree: !0,
                          }))
                    : (s == null || s.disconnect(),
                      l == null || l.disconnect());
        }, [e]),
        r
    );
}
function Dr(e) {
    const t = ln(e);
    return Vt(e, t);
}
const Pt = [];
function Er(e) {
    const t = a.useRef(e),
        n = Ae(
            (r) =>
                e
                    ? r &&
                      r !== Pt &&
                      e &&
                      t.current &&
                      e.parentNode === t.current.parentNode
                        ? r
                        : dt(e)
                    : Pt,
            [e]
        );
    return (
        a.useEffect(() => {
            t.current = e;
        }, [e]),
        n
    );
}
function Sr(e) {
    const [t, n] = a.useState(null),
        r = a.useRef(e),
        o = a.useCallback((i) => {
            const l = qe(i.target);
            l && n((s) => (s ? (s.set(l, et(l)), new Map(s)) : null));
        }, []);
    return (
        a.useEffect(() => {
            const i = r.current;
            if (e !== i) {
                l(i);
                const s = e
                    .map((d) => {
                        const h = qe(d);
                        return h
                            ? (h.addEventListener('scroll', o, { passive: !0 }),
                              [h, et(h)])
                            : null;
                    })
                    .filter((d) => d != null);
                n(s.length ? new Map(s) : null), (r.current = e);
            }
            return () => {
                l(e), l(i);
            };
            function l(s) {
                s.forEach((d) => {
                    const h = qe(d);
                    h == null || h.removeEventListener('scroll', o);
                });
            }
        }, [o, e]),
        a.useMemo(
            () =>
                e.length
                    ? t
                        ? Array.from(t.values()).reduce((i, l) => ye(i, l), Q)
                        : tn(e)
                    : Q,
            [e, t]
        )
    );
}
function Ft(e, t) {
    t === void 0 && (t = []);
    const n = a.useRef(null);
    return (
        a.useEffect(() => {
            n.current = null;
        }, t),
        a.useEffect(() => {
            const r = e !== Q;
            r && !n.current && (n.current = e),
                !r && n.current && (n.current = null);
        }, [e]),
        n.current ? Fe(e, n.current) : Q
    );
}
function kr(e) {
    a.useEffect(
        () => {
            if (!He) return;
            const t = e.map((n) => {
                let { sensor: r } = n;
                return r.setup == null ? void 0 : r.setup();
            });
            return () => {
                for (const n of t) n == null || n();
            };
        },
        e.map((t) => {
            let { sensor: n } = t;
            return n;
        })
    );
}
function Rr(e, t) {
    return a.useMemo(
        () =>
            e.reduce((n, r) => {
                let { eventName: o, handler: i } = r;
                return (
                    (n[o] = (l) => {
                        i(l, t);
                    }),
                    n
                );
            }, {}),
        [e, t]
    );
}
function cn(e) {
    return a.useMemo(() => (e ? Zn(e) : null), [e]);
}
const $t = [];
function Nr(e, t) {
    t === void 0 && (t = Te);
    const [n] = e,
        r = cn(n ? H(n) : null),
        [o, i] = a.useState($t);
    function l() {
        i(() => (e.length ? e.map((d) => (Zt(d) ? r : new ut(t(d), d))) : $t));
    }
    const s = ht({ callback: l });
    return (
        le(() => {
            s == null || s.disconnect(),
                l(),
                e.forEach((d) => (s == null ? void 0 : s.observe(d)));
        }, [e]),
        o
    );
}
function Mr(e) {
    if (!e) return null;
    if (e.children.length > 1) return e;
    const t = e.children[0];
    return je(t) ? t : e;
}
function jr(e) {
    let { measure: t } = e;
    const [n, r] = a.useState(null),
        o = a.useCallback(
            (h) => {
                for (const { target: c } of h)
                    if (je(c)) {
                        r((u) => {
                            const b = t(c);
                            return u
                                ? { ...u, width: b.width, height: b.height }
                                : b;
                        });
                        break;
                    }
            },
            [t]
        ),
        i = ht({ callback: o }),
        l = a.useCallback(
            (h) => {
                const c = Mr(h);
                i == null || i.disconnect(),
                    c && (i == null || i.observe(c)),
                    r(c ? t(c) : null);
            },
            [t, i]
        ),
        [s, d] = Je(l);
    return a.useMemo(() => ({ nodeRef: s, rect: n, setRef: d }), [n, s, d]);
}
const Ar = [
        { sensor: on, options: {} },
        { sensor: rn, options: {} },
    ],
    Tr = { current: {} },
    Pe = {
        draggable: { measure: At },
        droppable: {
            measure: At,
            strategy: Me.WhileDragging,
            frequency: nt.Optimized,
        },
        dragOverlay: { measure: Te },
    };
class Ne extends Map {
    get(t) {
        var n;
        return t != null && (n = super.get(t)) != null ? n : void 0;
    }
    toArray() {
        return Array.from(this.values());
    }
    getEnabled() {
        return this.toArray().filter((t) => {
            let { disabled: n } = t;
            return !n;
        });
    }
    getNodeFor(t) {
        var n, r;
        return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null
            ? n
            : void 0;
    }
}
const Ir = {
        activatorEvent: null,
        active: null,
        activeNode: null,
        activeNodeRect: null,
        collisions: null,
        containerNodeRect: null,
        draggableNodes: new Map(),
        droppableRects: new Map(),
        droppableContainers: new Ne(),
        over: null,
        dragOverlay: { nodeRef: { current: null }, rect: null, setRef: $e },
        scrollableAncestors: [],
        scrollableAncestorRects: [],
        measuringConfiguration: Pe,
        measureDroppableContainers: $e,
        windowRect: null,
        measuringScheduled: !1,
    },
    Lr = {
        activatorEvent: null,
        activators: [],
        active: null,
        activeNodeRect: null,
        ariaDescribedById: { draggable: '' },
        dispatch: $e,
        draggableNodes: new Map(),
        over: null,
        measureDroppableContainers: $e,
    },
    gt = a.createContext(Lr),
    zr = a.createContext(Ir);
function Or() {
    return {
        draggable: {
            active: null,
            initialCoordinates: { x: 0, y: 0 },
            nodes: new Map(),
            translate: { x: 0, y: 0 },
        },
        droppable: { containers: new Ne() },
    };
}
function Pr(e, t) {
    switch (t.type) {
        case P.DragStart:
            return {
                ...e,
                draggable: {
                    ...e.draggable,
                    initialCoordinates: t.initialCoordinates,
                    active: t.active,
                },
            };
        case P.DragMove:
            return e.draggable.active == null
                ? e
                : {
                      ...e,
                      draggable: {
                          ...e.draggable,
                          translate: {
                              x:
                                  t.coordinates.x -
                                  e.draggable.initialCoordinates.x,
                              y:
                                  t.coordinates.y -
                                  e.draggable.initialCoordinates.y,
                          },
                      },
                  };
        case P.DragEnd:
        case P.DragCancel:
            return {
                ...e,
                draggable: {
                    ...e.draggable,
                    active: null,
                    initialCoordinates: { x: 0, y: 0 },
                    translate: { x: 0, y: 0 },
                },
            };
        case P.RegisterDroppable: {
            const { element: n } = t,
                { id: r } = n,
                o = new Ne(e.droppable.containers);
            return (
                o.set(r, n),
                { ...e, droppable: { ...e.droppable, containers: o } }
            );
        }
        case P.SetDroppableDisabled: {
            const { id: n, key: r, disabled: o } = t,
                i = e.droppable.containers.get(n);
            if (!i || r !== i.key) return e;
            const l = new Ne(e.droppable.containers);
            return (
                l.set(n, { ...i, disabled: o }),
                { ...e, droppable: { ...e.droppable, containers: l } }
            );
        }
        case P.UnregisterDroppable: {
            const { id: n, key: r } = t,
                o = e.droppable.containers.get(n);
            if (!o || r !== o.key) return e;
            const i = new Ne(e.droppable.containers);
            return (
                i.delete(n),
                { ...e, droppable: { ...e.droppable, containers: i } }
            );
        }
        default:
            return e;
    }
}
function Fr(e) {
    let { disabled: t } = e;
    const {
            active: n,
            activatorEvent: r,
            draggableNodes: o,
        } = a.useContext(gt),
        i = Qe(r),
        l = Qe(n == null ? void 0 : n.id);
    return (
        a.useEffect(() => {
            if (!t && !r && i && l != null) {
                if (!Kt(i) || document.activeElement === i.target) return;
                const s = o.get(l);
                if (!s) return;
                const { activatorNode: d, node: h } = s;
                if (!d.current && !h.current) return;
                requestAnimationFrame(() => {
                    for (const c of [d.current, h.current]) {
                        if (!c) continue;
                        const u = Tn(c);
                        if (u) {
                            u.focus();
                            break;
                        }
                    }
                });
            }
        }, [r, t, o, l, i]),
        null
    );
}
function $r(e, t) {
    let { transform: n, ...r } = t;
    return e != null && e.length
        ? e.reduce((o, i) => i({ transform: o, ...r }), n)
        : n;
}
function Br(e) {
    return a.useMemo(
        () => ({
            draggable: {
                ...Pe.draggable,
                ...(e == null ? void 0 : e.draggable),
            },
            droppable: {
                ...Pe.droppable,
                ...(e == null ? void 0 : e.droppable),
            },
            dragOverlay: {
                ...Pe.dragOverlay,
                ...(e == null ? void 0 : e.dragOverlay),
            },
        }),
        [
            e == null ? void 0 : e.draggable,
            e == null ? void 0 : e.droppable,
            e == null ? void 0 : e.dragOverlay,
        ]
    );
}
function Hr(e) {
    let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
    const i = a.useRef(!1),
        { x: l, y: s } = typeof o == 'boolean' ? { x: o, y: o } : o;
    le(() => {
        if ((!l && !s) || !t) {
            i.current = !1;
            return;
        }
        if (i.current || !r) return;
        const h = t == null ? void 0 : t.node.current;
        if (!h || h.isConnected === !1) return;
        const c = n(h),
            u = Vt(c, r);
        if (
            (l || (u.x = 0),
            s || (u.y = 0),
            (i.current = !0),
            Math.abs(u.x) > 0 || Math.abs(u.y) > 0)
        ) {
            const b = _t(h);
            b && b.scrollBy({ top: u.y, left: u.x });
        }
    }, [t, l, s, r, n]);
}
const dn = a.createContext({ ...Q, scaleX: 1, scaleY: 1 });
var ae;
(function (e) {
    (e[(e.Uninitialized = 0)] = 'Uninitialized'),
        (e[(e.Initializing = 1)] = 'Initializing'),
        (e[(e.Initialized = 2)] = 'Initialized');
})(ae || (ae = {}));
const Ur = a.memo(function (t) {
        var n, r, o, i;
        let {
            id: l,
            accessibility: s,
            autoScroll: d = !0,
            children: h,
            sensors: c = Ar,
            collisionDetection: u = Yn,
            measuring: b,
            modifiers: y,
            ...R
        } = t;
        const w = a.useReducer(Pr, void 0, Or),
            [k, v] = w,
            [E, N] = Fn(),
            [g, p] = a.useState(ae.Uninitialized),
            D = g === ae.Initialized,
            {
                draggable: { active: m, nodes: x, translate: C },
                droppable: { containers: S },
            } = k,
            M = m != null ? x.get(m) : null,
            T = a.useRef({ initial: null, translated: null }),
            I = a.useMemo(() => {
                var O;
                return m != null
                    ? {
                          id: m,
                          data:
                              (O = M == null ? void 0 : M.data) != null
                                  ? O
                                  : Tr,
                          rect: T,
                      }
                    : null;
            }, [m, M]),
            F = a.useRef(null),
            [q, V] = a.useState(null),
            [A, U] = a.useState(null),
            $ = lt(R, Object.values(R)),
            Ue = ct('DndDescribedBy', l),
            pt = a.useMemo(() => S.getEnabled(), [S]),
            ce = Br(b),
            {
                droppableRects: he,
                measureDroppableContainers: Ie,
                measuringScheduled: vt,
            } = mr(pt, {
                dragging: D,
                dependencies: [C.x, C.y],
                config: ce.droppable,
            }),
            _ = br(x, m),
            bt = a.useMemo(() => (A ? Ze(A) : null), [A]),
            yt = yn(),
            mt = xr(_, ce.draggable.measure);
        Hr({
            activeNode: m != null ? x.get(m) : null,
            config: yt.layoutShiftCompensation,
            initialRect: mt,
            measure: ce.draggable.measure,
        });
        const J = Ot(_, ce.draggable.measure, mt),
            We = Ot(_ ? _.parentElement : null),
            de = a.useRef({
                activatorEvent: null,
                active: null,
                activeNode: _,
                collisionRect: null,
                collisions: null,
                droppableRects: he,
                draggableNodes: x,
                draggingNode: null,
                draggingNodeRect: null,
                droppableContainers: S,
                over: null,
                scrollableAncestors: [],
                scrollAdjustedTranslate: null,
            }),
            xt = S.getNodeFor((n = de.current.over) == null ? void 0 : n.id),
            ue = jr({ measure: ce.dragOverlay.measure }),
            Le = (r = ue.nodeRef.current) != null ? r : _,
            ge = D ? ((o = ue.rect) != null ? o : J) : null,
            wt = !!(ue.nodeRef.current && ue.rect),
            Ct = Dr(wt ? null : J),
            Xe = cn(Le ? H(Le) : null),
            ne = Er(D ? (xt ?? _) : null),
            ze = Nr(ne),
            Oe = $r(y, {
                transform: {
                    x: C.x - Ct.x,
                    y: C.y - Ct.y,
                    scaleX: 1,
                    scaleY: 1,
                },
                activatorEvent: A,
                active: I,
                activeNodeRect: J,
                containerNodeRect: We,
                draggingNodeRect: ge,
                over: de.current.over,
                overlayNodeRect: ue.rect,
                scrollableAncestors: ne,
                scrollableAncestorRects: ze,
                windowRect: Xe,
            }),
            Dt = bt ? ye(bt, C) : null,
            Et = Sr(ne),
            un = Ft(Et),
            fn = Ft(Et, [J]),
            pe = ye(Oe, un),
            ve = ge ? Vn(ge, Oe) : null,
            we =
                I && ve
                    ? u({
                          active: I,
                          collisionRect: ve,
                          droppableRects: he,
                          droppableContainers: pt,
                          pointerCoordinates: Dt,
                      })
                    : null,
            St = Xn(we, 'id'),
            [re, kt] = a.useState(null),
            hn = wt ? Oe : ye(Oe, fn),
            gn = Kn(
                hn,
                (i = re == null ? void 0 : re.rect) != null ? i : null,
                J
            ),
            Ge = a.useRef(null),
            Rt = a.useCallback(
                (O, W) => {
                    let { sensor: X, options: oe } = W;
                    if (F.current == null) return;
                    const Y = x.get(F.current);
                    if (!Y) return;
                    const G = O.nativeEvent,
                        Z = new X({
                            active: F.current,
                            activeNode: Y,
                            event: G,
                            options: oe,
                            context: de,
                            onAbort(z) {
                                if (!x.get(z)) return;
                                const { onDragAbort: ee } = $.current,
                                    te = { id: z };
                                ee == null || ee(te),
                                    E({ type: 'onDragAbort', event: te });
                            },
                            onPending(z, ie, ee, te) {
                                if (!x.get(z)) return;
                                const { onDragPending: De } = $.current,
                                    se = {
                                        id: z,
                                        constraint: ie,
                                        initialCoordinates: ee,
                                        offset: te,
                                    };
                                De == null || De(se),
                                    E({ type: 'onDragPending', event: se });
                            },
                            onStart(z) {
                                const ie = F.current;
                                if (ie == null) return;
                                const ee = x.get(ie);
                                if (!ee) return;
                                const { onDragStart: te } = $.current,
                                    Ce = {
                                        activatorEvent: G,
                                        active: {
                                            id: ie,
                                            data: ee.data,
                                            rect: T,
                                        },
                                    };
                                Se.unstable_batchedUpdates(() => {
                                    te == null || te(Ce),
                                        p(ae.Initializing),
                                        v({
                                            type: P.DragStart,
                                            initialCoordinates: z,
                                            active: ie,
                                        }),
                                        E({ type: 'onDragStart', event: Ce }),
                                        V(Ge.current),
                                        U(G);
                                });
                            },
                            onMove(z) {
                                v({ type: P.DragMove, coordinates: z });
                            },
                            onEnd: be(P.DragEnd),
                            onCancel: be(P.DragCancel),
                        });
                    Ge.current = Z;
                    function be(z) {
                        return async function () {
                            const {
                                active: ee,
                                collisions: te,
                                over: Ce,
                                scrollAdjustedTranslate: De,
                            } = de.current;
                            let se = null;
                            if (ee && De) {
                                const { cancelDrop: Ee } = $.current;
                                (se = {
                                    activatorEvent: G,
                                    active: ee,
                                    collisions: te,
                                    delta: De,
                                    over: Ce,
                                }),
                                    z === P.DragEnd &&
                                        typeof Ee == 'function' &&
                                        (await Promise.resolve(Ee(se))) &&
                                        (z = P.DragCancel);
                            }
                            (F.current = null),
                                Se.unstable_batchedUpdates(() => {
                                    v({ type: z }),
                                        p(ae.Uninitialized),
                                        kt(null),
                                        V(null),
                                        U(null),
                                        (Ge.current = null);
                                    const Ee =
                                        z === P.DragEnd
                                            ? 'onDragEnd'
                                            : 'onDragCancel';
                                    if (se) {
                                        const Ye = $.current[Ee];
                                        Ye == null || Ye(se),
                                            E({ type: Ee, event: se });
                                    }
                                });
                        };
                    }
                },
                [x]
            ),
            pn = a.useCallback(
                (O, W) => (X, oe) => {
                    const Y = X.nativeEvent,
                        G = x.get(oe);
                    if (
                        F.current !== null ||
                        !G ||
                        Y.dndKit ||
                        Y.defaultPrevented
                    )
                        return;
                    const Z = { active: G };
                    O(X, W.options, Z) === !0 &&
                        ((Y.dndKit = { capturedBy: W.sensor }),
                        (F.current = oe),
                        Rt(X, W));
                },
                [x, Rt]
            ),
            Nt = yr(c, pn);
        kr(c),
            le(() => {
                J && g === ae.Initializing && p(ae.Initialized);
            }, [J, g]),
            a.useEffect(() => {
                const { onDragMove: O } = $.current,
                    {
                        active: W,
                        activatorEvent: X,
                        collisions: oe,
                        over: Y,
                    } = de.current;
                if (!W || !X) return;
                const G = {
                    active: W,
                    activatorEvent: X,
                    collisions: oe,
                    delta: { x: pe.x, y: pe.y },
                    over: Y,
                };
                Se.unstable_batchedUpdates(() => {
                    O == null || O(G), E({ type: 'onDragMove', event: G });
                });
            }, [pe.x, pe.y]),
            a.useEffect(() => {
                const {
                    active: O,
                    activatorEvent: W,
                    collisions: X,
                    droppableContainers: oe,
                    scrollAdjustedTranslate: Y,
                } = de.current;
                if (!O || F.current == null || !W || !Y) return;
                const { onDragOver: G } = $.current,
                    Z = oe.get(St),
                    be =
                        Z && Z.rect.current
                            ? {
                                  id: Z.id,
                                  rect: Z.rect.current,
                                  data: Z.data,
                                  disabled: Z.disabled,
                              }
                            : null,
                    z = {
                        active: O,
                        activatorEvent: W,
                        collisions: X,
                        delta: { x: Y.x, y: Y.y },
                        over: be,
                    };
                Se.unstable_batchedUpdates(() => {
                    kt(be),
                        G == null || G(z),
                        E({ type: 'onDragOver', event: z });
                });
            }, [St]),
            le(() => {
                (de.current = {
                    activatorEvent: A,
                    active: I,
                    activeNode: _,
                    collisionRect: ve,
                    collisions: we,
                    droppableRects: he,
                    draggableNodes: x,
                    draggingNode: Le,
                    draggingNodeRect: ge,
                    droppableContainers: S,
                    over: re,
                    scrollableAncestors: ne,
                    scrollAdjustedTranslate: pe,
                }),
                    (T.current = { initial: ge, translated: ve });
            }, [I, _, we, ve, x, Le, ge, he, S, re, ne, pe]),
            gr({
                ...yt,
                delta: C,
                draggingRect: ve,
                pointerCoordinates: Dt,
                scrollableAncestors: ne,
                scrollableAncestorRects: ze,
            });
        const vn = a.useMemo(
                () => ({
                    active: I,
                    activeNode: _,
                    activeNodeRect: J,
                    activatorEvent: A,
                    collisions: we,
                    containerNodeRect: We,
                    dragOverlay: ue,
                    draggableNodes: x,
                    droppableContainers: S,
                    droppableRects: he,
                    over: re,
                    measureDroppableContainers: Ie,
                    scrollableAncestors: ne,
                    scrollableAncestorRects: ze,
                    measuringConfiguration: ce,
                    measuringScheduled: vt,
                    windowRect: Xe,
                }),
                [I, _, J, A, we, We, ue, x, S, he, re, Ie, ne, ze, ce, vt, Xe]
            ),
            bn = a.useMemo(
                () => ({
                    activatorEvent: A,
                    activators: Nt,
                    active: I,
                    activeNodeRect: J,
                    ariaDescribedById: { draggable: Ue },
                    dispatch: v,
                    draggableNodes: x,
                    over: re,
                    measureDroppableContainers: Ie,
                }),
                [A, Nt, I, J, v, Ue, x, re, Ie]
            );
        return B.createElement(
            qt.Provider,
            { value: N },
            B.createElement(
                gt.Provider,
                { value: bn },
                B.createElement(
                    zr.Provider,
                    { value: vn },
                    B.createElement(dn.Provider, { value: gn }, h)
                ),
                B.createElement(Fr, {
                    disabled: (s == null ? void 0 : s.restoreFocus) === !1,
                })
            ),
            B.createElement(Hn, { ...s, hiddenTextDescribedById: Ue })
        );
        function yn() {
            const O = (q == null ? void 0 : q.autoScrollEnabled) === !1,
                W = typeof d == 'object' ? d.enabled === !1 : d === !1,
                X = D && !O && !W;
            return typeof d == 'object' ? { ...d, enabled: X } : { enabled: X };
        }
    }),
    Wr = a.createContext(null),
    Bt = 'button',
    Xr = 'Draggable';
function Gr(e) {
    let { id: t, data: n, disabled: r = !1, attributes: o } = e;
    const i = ct(Xr),
        {
            activators: l,
            activatorEvent: s,
            active: d,
            activeNodeRect: h,
            ariaDescribedById: c,
            draggableNodes: u,
            over: b,
        } = a.useContext(gt),
        {
            role: y = Bt,
            roleDescription: R = 'draggable',
            tabIndex: w = 0,
        } = o ?? {},
        k = (d == null ? void 0 : d.id) === t,
        v = a.useContext(k ? dn : Wr),
        [E, N] = Je(),
        [g, p] = Je(),
        D = Rr(l, t),
        m = lt(n);
    le(
        () => (
            u.set(t, { id: t, key: i, node: E, activatorNode: g, data: m }),
            () => {
                const C = u.get(t);
                C && C.key === i && u.delete(t);
            }
        ),
        [u, t]
    );
    const x = a.useMemo(
        () => ({
            role: y,
            tabIndex: w,
            'aria-disabled': r,
            'aria-pressed': k && y === Bt ? !0 : void 0,
            'aria-roledescription': R,
            'aria-describedby': c.draggable,
        }),
        [r, y, w, k, R, c.draggable]
    );
    return {
        active: d,
        activatorEvent: s,
        activeNodeRect: h,
        attributes: x,
        isDragging: k,
        listeners: r ? void 0 : D,
        node: E,
        over: b,
        setNodeRef: N,
        setActivatorNodeRef: p,
        transform: v,
    };
}
const Ht = 40,
    Ut = 40,
    Yr = ({ element: e, selected: t, onSelect: n }) => {
        var E, N;
        const { removeElement: r, updateElement: o } = ot(),
            [i, l] = B.useState(!1),
            [s, d] = B.useState(e.content || ''),
            [h, c] = B.useState(!1),
            {
                attributes: u,
                listeners: b,
                setNodeRef: y,
                transform: R,
            } = Gr({ id: e.id }),
            w = (g) => {
                var M, T;
                g.stopPropagation(), c(!0);
                const p = g.clientX,
                    D = g.clientY,
                    m = ((M = e.size) == null ? void 0 : M.width) || 120,
                    x = ((T = e.size) == null ? void 0 : T.height) || 120,
                    C = (I) => {
                        const F = Math.max(Ht, m + (I.clientX - p)),
                            q = Math.max(Ut, x + (I.clientY - D));
                        o(e.id, { size: { width: F, height: q } });
                    },
                    S = () => {
                        c(!1),
                            window.removeEventListener('mousemove', C),
                            window.removeEventListener('mouseup', S);
                    };
                window.addEventListener('mousemove', C),
                    window.addEventListener('mouseup', S);
            },
            k = () => {
                var g, p, D, m, x, C, S, M, T, I, F, q, V, A;
                switch (e.type) {
                    case 'text':
                        return i
                            ? f.jsx('textarea', {
                                  value: s,
                                  onChange: ($) => d($.target.value),
                                  onBlur: () => {
                                      o(e.id, { content: s }), l(!1);
                                  },
                                  onKeyDown: ($) => {
                                      $.key === 'Enter' &&
                                          !$.shiftKey &&
                                          ($.preventDefault(),
                                          o(e.id, { content: s }),
                                          l(!1));
                                  },
                                  autoFocus: !0,
                                  className:
                                      'w-full resize-none border-none bg-transparent text-white outline-none',
                                  style: {
                                      fontSize:
                                          (g = e.size) != null && g.height
                                              ? `${Math.max(16, e.size.height / 2.5)}px`
                                              : '32px',
                                      color:
                                          ((p = e.style) == null
                                              ? void 0
                                              : p.color) || '#ffffff',
                                      fontFamily:
                                          (D = e.style) == null
                                              ? void 0
                                              : D.font,
                                      fontWeight:
                                          ((m = e.style) == null
                                              ? void 0
                                              : m.fontWeight) || 'normal',
                                      fontStyle:
                                          ((x = e.style) == null
                                              ? void 0
                                              : x.fontStyle) || 'normal',
                                      textDecoration:
                                          ((C = e.style) == null
                                              ? void 0
                                              : C.textDecoration) || 'none',
                                      minHeight: 32,
                                      minWidth: 80,
                                      height: '100%',
                                      width: '100%',
                                  },
                                  rows: 2,
                              })
                            : f.jsx('p', {
                                  onClick: ($) => {
                                      $.stopPropagation(), n && n();
                                  },
                                  onDoubleClick: () => l(!0),
                                  className: 'cursor-text whitespace-pre-wrap',
                                  style: {
                                      fontSize:
                                          (S = e.size) != null && S.height
                                              ? `${Math.max(16, e.size.height / 2.5)}px`
                                              : '32px',
                                      color:
                                          ((M = e.style) == null
                                              ? void 0
                                              : M.color) || '#ffffff',
                                      fontFamily:
                                          (T = e.style) == null
                                              ? void 0
                                              : T.font,
                                      fontWeight:
                                          ((I = e.style) == null
                                              ? void 0
                                              : I.fontWeight) || 'normal',
                                      fontStyle:
                                          ((F = e.style) == null
                                              ? void 0
                                              : F.fontStyle) || 'normal',
                                      textDecoration:
                                          ((q = e.style) == null
                                              ? void 0
                                              : q.textDecoration) || 'none',
                                      minHeight: 32,
                                      minWidth: 80,
                                      height: '100%',
                                      width: '100%',
                                  },
                                  children: e.content,
                              });
                    case 'image':
                    case 'gif':
                        return f.jsx('img', {
                            src: e.content,
                            alt: e.type,
                            className: 'rounded-lg object-contain',
                            style: {
                                width: '100%',
                                height: '100%',
                                filter:
                                    (V = e.style) == null ? void 0 : V.filter,
                                pointerEvents: 'none',
                            },
                            draggable: !1,
                        });
                    case 'sticker':
                        return f.jsx('div', {
                            className:
                                'flex items-center justify-center text-6xl',
                            style: {
                                filter:
                                    (A = e.style) == null ? void 0 : A.filter,
                                width: '100%',
                                height: '100%',
                            },
                            children: e.content,
                        });
                    case 'emoji':
                        return f.jsx('div', {
                            className:
                                'flex items-center justify-center text-4xl',
                            style: { width: '100%', height: '100%' },
                            children: e.content,
                        });
                    case 'effect':
                        let U = '';
                        switch (e.effect) {
                            case 'tears':
                                U = 'effect-block animate-tears';
                                break;
                            case 'sparkles':
                                U = 'effect-block animate-sparkles';
                                break;
                            case 'cringe':
                                U = 'effect-block animate-cringe';
                                break;
                            case 'cry':
                                U = 'effect-block animate-cry';
                                break;
                            default:
                                U = 'effect-block';
                        }
                        return f.jsx('div', {
                            className: U,
                            style: { width: '100%', height: '100%' },
                        });
                    default:
                        return null;
                }
            },
            v = () =>
                e.type === 'image' ||
                e.type === 'gif' ||
                e.type === 'effect' ||
                e.type === 'sticker' ||
                e.type === 'emoji'
                    ? 'w-full h-full flex items-center justify-center'
                    : 'w-full h-full';
        return f.jsx(fe.div, {
            ref: y,
            className: `group absolute z-10 cursor-grab ${t ? 'ring-2 ring-blue-400' : ''}`,
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            whileHover: { scale: 1.02 },
            style: {
                left: e.position.x,
                top: e.position.y,
                width: ((E = e.size) == null ? void 0 : E.width) || 120,
                height: ((N = e.size) == null ? void 0 : N.height) || 120,
                minWidth: Ht,
                minHeight: Ut,
                transform: R ? `translate3d(${R.x}px, ${R.y}px, 0)` : void 0,
                userSelect: h ? 'none' : void 0,
            },
            ...u,
            onClick: (g) => {
                g.stopPropagation(), n && n();
            },
            children: f.jsxs('div', {
                className: 'relative h-full w-full',
                children: [
                    f.jsx('div', {
                        className:
                            'absolute -top-3 -right-3 cursor-pointer rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                        onClick: (g) => {
                            g.stopPropagation(), r(e.id);
                        },
                        children: f.jsx(Xt, { size: 14 }),
                    }),
                    f.jsx('div', {
                        className:
                            'absolute -top-3 -left-3 rounded-full bg-gray-800 p-1 text-white opacity-0 group-hover:opacity-100',
                        ...b,
                        children: f.jsx(En, { size: 14 }),
                    }),
                    f.jsx('div', { className: v(), children: k() }),
                    f.jsx('div', {
                        className:
                            'absolute right-1 bottom-1 z-20 flex h-5 w-5 cursor-se-resize items-center justify-center rounded border border-gray-400 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                        onMouseDown: w,
                        style: { touchAction: 'none' },
                        children: f.jsx(kn, {
                            size: 16,
                            className: 'text-gray-500',
                        }),
                    }),
                ],
            }),
        });
    },
    Wt = () => {
        var u, b, y, R, w, k;
        const { farewellPage: e, moveElement: t, updateElement: n } = ot(),
            [r, o] = a.useState(null);
        a.useEffect(() => {
            const v = (E) => {
                E.key === 'Escape' && r && o(null);
            };
            return (
                document.addEventListener('keydown', v),
                () => document.removeEventListener('keydown', v)
            );
        }, [r]);
        const i = jt(sn, { activationConstraint: { distance: 8 } }),
            l = jt(an, { activationConstraint: { delay: 250, tolerance: 5 } }),
            s = Un(i, l),
            d = (v) => {
                const { active: E, delta: N } = v,
                    g = E.id,
                    p = e.elements.find((D) => D.id === g);
                if (p && p.position) {
                    const D = { x: p.position.x + N.x, y: p.position.y + N.y };
                    t(g, D);
                }
            },
            h = () =>
                typeof e.background == 'object' &&
                e.background.type === 'custom-image'
                    ? {
                          backgroundImage: `url(${e.background.url})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }
                    : {},
            c = e.elements.find((v) => v.id === r);
        return f.jsx(Ur, {
            sensors: s,
            onDragEnd: d,
            measuring: { droppable: { strategy: 'always' } },
            children: f.jsx('div', {
                id: 'farewell-canvas',
                className: `relative h-[87vh] w-full overflow-hidden rounded-3xl border-4 border-dotted border-white/20 shadow-xl ${typeof e.background == 'string' ? e.background : ''}`,
                style: h(),
                onMouseDown: (v) => {
                    (v.target === v.currentTarget ||
                        v.target.classList.contains('noisy-bg')) &&
                        o(null);
                },
                children: f.jsxs('div', {
                    className: 'noisy-bg animate-zoom h-full w-full',
                    children: [
                        e.elements.map((v) =>
                            f.jsx(
                                Yr,
                                {
                                    element: v,
                                    selected: r === v.id,
                                    onSelect: () => o(v.id),
                                },
                                v.id
                            )
                        ),
                        (c == null ? void 0 : c.type) === 'text' &&
                            f.jsxs(fe.div, {
                                initial: { opacity: 0, y: -10 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -10 },
                                className:
                                    'absolute z-50 rounded-lg border border-gray-200 bg-white shadow-xl',
                                style: {
                                    left: Math.max(
                                        10,
                                        Math.min(
                                            c.position.x +
                                                (((u = c.size) == null
                                                    ? void 0
                                                    : u.width) || 120) /
                                                    2 -
                                                150,
                                            window.innerWidth - 310
                                        )
                                    ),
                                    top: Math.max(10, c.position.y - 60),
                                },
                                onClick: (v) => v.stopPropagation(),
                                children: [
                                    f.jsxs('div', {
                                        className:
                                            'flex items-center justify-between border-b border-gray-100 px-3 py-2',
                                        children: [
                                            f.jsx('span', {
                                                className:
                                                    'text-sm font-medium text-gray-700',
                                                children: 'Text Formatting',
                                            }),
                                            f.jsx('button', {
                                                onClick: () => o(null),
                                                className:
                                                    'text-gray-400 transition-colors hover:text-gray-600',
                                                children: f.jsx(Xt, {
                                                    size: 16,
                                                }),
                                            }),
                                        ],
                                    }),
                                    f.jsxs('div', {
                                        className:
                                            'flex items-center gap-2 p-3',
                                        children: [
                                            f.jsxs('select', {
                                                value:
                                                    ((b = c.style) == null
                                                        ? void 0
                                                        : b.font) || 'Arial',
                                                onChange: (v) =>
                                                    n(c.id, {
                                                        style: {
                                                            ...(c.style || {}),
                                                            font: v.target
                                                                .value,
                                                        },
                                                    }),
                                                className:
                                                    'cursor-pointer rounded border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-700 transition-colors hover:bg-white focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none',
                                                children: [
                                                    f.jsx('option', {
                                                        value: 'Arial',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Arial',
                                                    }),
                                                    f.jsx('option', {
                                                        value: 'Georgia',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Georgia',
                                                    }),
                                                    f.jsx('option', {
                                                        value: 'Comic Sans MS',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Comic Sans',
                                                    }),
                                                    f.jsx('option', {
                                                        value: 'Impact',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Impact',
                                                    }),
                                                    f.jsx('option', {
                                                        value: 'Helvetica',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Helvetica',
                                                    }),
                                                    f.jsx('option', {
                                                        value: 'Times New Roman',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Times',
                                                    }),
                                                ],
                                            }),
                                            f.jsx('div', {
                                                className:
                                                    'h-6 w-px bg-gray-300',
                                            }),
                                            f.jsxs('div', {
                                                className:
                                                    'flex items-center gap-1',
                                                children: [
                                                    f.jsx('span', {
                                                        className:
                                                            'text-xs text-gray-600',
                                                        children: 'Color:',
                                                    }),
                                                    f.jsx('input', {
                                                        type: 'color',
                                                        value:
                                                            ((y = c.style) ==
                                                            null
                                                                ? void 0
                                                                : y.color) ||
                                                            '#ffffff',
                                                        onChange: (v) =>
                                                            n(c.id, {
                                                                style: {
                                                                    ...(c.style ||
                                                                        {}),
                                                                    color: v
                                                                        .target
                                                                        .value,
                                                                },
                                                            }),
                                                        className:
                                                            'h-8 w-8 cursor-pointer rounded border border-gray-300',
                                                    }),
                                                ],
                                            }),
                                            f.jsx('div', {
                                                className:
                                                    'h-6 w-px bg-gray-300',
                                            }),
                                            f.jsxs('div', {
                                                className: 'flex gap-1',
                                                children: [
                                                    f.jsx('button', {
                                                        className: `flex h-8 w-8 items-center justify-center rounded text-sm font-bold transition-colors ${((R = c.style) == null ? void 0 : R.fontWeight) === 'bold' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                        onClick: () => {
                                                            var v;
                                                            return n(c.id, {
                                                                style: {
                                                                    ...(c.style ||
                                                                        {}),
                                                                    fontWeight:
                                                                        ((v =
                                                                            c.style) ==
                                                                        null
                                                                            ? void 0
                                                                            : v.fontWeight) ===
                                                                        'bold'
                                                                            ? 'normal'
                                                                            : 'bold',
                                                                },
                                                            });
                                                        },
                                                        children: 'B',
                                                    }),
                                                    f.jsx('button', {
                                                        className: `flex h-8 w-8 items-center justify-center rounded text-sm italic transition-colors ${((w = c.style) == null ? void 0 : w.fontStyle) === 'italic' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                        onClick: () => {
                                                            var v;
                                                            return n(c.id, {
                                                                style: {
                                                                    ...(c.style ||
                                                                        {}),
                                                                    fontStyle:
                                                                        ((v =
                                                                            c.style) ==
                                                                        null
                                                                            ? void 0
                                                                            : v.fontStyle) ===
                                                                        'italic'
                                                                            ? 'normal'
                                                                            : 'italic',
                                                                },
                                                            });
                                                        },
                                                        children: 'I',
                                                    }),
                                                    f.jsx('button', {
                                                        className: `flex h-8 w-8 items-center justify-center rounded text-sm underline transition-colors ${((k = c.style) == null ? void 0 : k.textDecoration) === 'underline' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                        onClick: () => {
                                                            var v;
                                                            return n(c.id, {
                                                                style: {
                                                                    ...(c.style ||
                                                                        {}),
                                                                    textDecoration:
                                                                        ((v =
                                                                            c.style) ==
                                                                        null
                                                                            ? void 0
                                                                            : v.textDecoration) ===
                                                                        'underline'
                                                                            ? 'none'
                                                                            : 'underline',
                                                                },
                                                            });
                                                        },
                                                        children: 'U',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    f.jsx('div', {
                                        className:
                                            'absolute h-3 w-3 rotate-45 transform border-r border-b border-gray-200 bg-white',
                                        style: {
                                            bottom: -6,
                                            left: '50%',
                                            marginLeft: -6,
                                        },
                                    }),
                                ],
                            }),
                        e.elements.length === 0 &&
                            f.jsx(fe.div, {
                                className:
                                    'pointer-events-none absolute inset-0 flex items-center justify-center px-8 text-center text-white/50',
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { delay: 0.5 },
                                children: f.jsx('p', {
                                    className: 'text-xl text-black',
                                    children:
                                        'Add elements from the sidebar to build your farewell page!',
                                }),
                            }),
                    ],
                }),
            }),
        });
    },
    Kr = async (e) => {
        var N;
        const t = document.implementation.createHTMLDocument('Farewell Page');
        t.title = 'My Farewell Page';
        const n = t.head,
            r = t.body,
            o = t.createElement('meta');
        o.setAttribute('charset', 'UTF-8'), n.appendChild(o);
        const i = t.createElement('meta');
        i.setAttribute('name', 'viewport'),
            i.setAttribute('content', 'width=device-width, initial-scale=1.0'),
            n.appendChild(i);
        const l = t.createElement('style');
        (l.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    }
    .farewell-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .element {
      position: absolute;
      transform-origin: top left;
    }
    .element img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .text-element {
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
  `),
            n.appendChild(l);
        const s = t.createElement('div');
        if (
            ((s.className = 'farewell-container'),
            typeof e.background == 'string')
        )
            switch (e.background) {
                case 'default-bg':
                    s.style.background = '#ffffff';
                    break;
                case 'dramatic-bg':
                    s.style.background =
                        'linear-gradient(to right, #1f1c2c, #928dab)';
                    break;
                case 'ironic-bg':
                    s.style.background =
                        'linear-gradient(to right, #fceabb, #f8b500)';
                    break;
                case 'cringe-bg':
                    s.style.background =
                        'linear-gradient(to right, #ff4e50, #f9d423)';
                    break;
                case 'classy-bg':
                    s.style.background =
                        'linear-gradient(to right, #2c3e50, #bdc3c7)';
                    break;
                case 'absurd-bg':
                    s.style.background =
                        'linear-gradient(to right, #fc466b, #3f5efb, #00c9ff)';
                    break;
                default:
                    s.style.background = '#ffffff';
            }
        else if (
            ((N = e.background) == null ? void 0 : N.type) === 'custom-image'
        )
            try {
                const g = e.background.url,
                    p = await d(g);
                (s.style.backgroundImage = `url(${p})`),
                    (s.style.backgroundSize = 'cover'),
                    (s.style.backgroundPosition = 'center');
            } catch (g) {
                console.error('Error embedding background image:', g),
                    (s.style.background = '#ffffff');
            }
        async function d(g) {
            if (g.startsWith('data:')) return g;
            try {
                if (g.startsWith('blob:')) {
                    const p = await fetch(g);
                    if (!p.ok)
                        throw new Error(`HTTP error! status: ${p.status}`);
                    const D = await p.blob();
                    return new Promise((m, x) => {
                        const C = new FileReader();
                        (C.onloadend = () => m(C.result)),
                            (C.onerror = (S) => {
                                console.error('FileReader error:', S), x(S);
                            }),
                            C.readAsDataURL(D);
                    });
                } else {
                    const p = await fetch(g, {
                        mode: 'cors',
                        credentials: 'omit',
                    });
                    if (!p.ok)
                        throw new Error(`HTTP error! status: ${p.status}`);
                    const D = await p.blob();
                    return new Promise((m, x) => {
                        const C = new FileReader();
                        (C.onloadend = () => m(C.result)),
                            (C.onerror = (S) => {
                                console.error('FileReader error:', S), x(S);
                            }),
                            C.readAsDataURL(D);
                    });
                }
            } catch (p) {
                return (
                    console.warn(
                        'Could not fetch and convert to base64, using original URL:',
                        g,
                        p
                    ),
                    g
                );
            }
        }
        async function h(g, p, D) {
            try {
                const m = D.createElement('img');
                m.alt = 'Animated GIF';
                let x;
                const C = g.src || g.content;
                if (!C) throw new Error('No GIF source found');
                if (C.startsWith('data:')) x = C;
                else
                    try {
                        (x = await d(C)),
                            console.log('Successfully embedded GIF as base64');
                    } catch (S) {
                        console.warn(
                            'Could not embed GIF, using original URL:',
                            S
                        ),
                            (x = C);
                    }
                (m.src = x),
                    (m.onerror = function () {
                        console.error('GIF failed to load:', C),
                            (this.style.display = 'none');
                        const S = D.createElement('div');
                        (S.innerHTML = `
          <div style="text-align: center;">
            <p style="color: #666; margin-bottom: 8px;">GIF could not be loaded</p>
            <a href="${C}" target="_blank" style="color: #007bff; text-decoration: underline; font-size: 12px;">
              View original GIF
            </a>
          </div>
        `),
                            (S.style.cssText = `
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #ccc;
          background-color: #f9f9f9;
          font-size: 14px;
        `),
                            p.appendChild(S);
                    }),
                    (m.onload = function () {
                        console.log('GIF loaded successfully');
                    }),
                    p.appendChild(m);
            } catch (m) {
                console.error('Error processing GIF:', m);
                const x = g.src || g.content,
                    C = D.createElement('div');
                (C.innerHTML = `
        <div style="text-align: center;">
          <p style="color: #666; margin-bottom: 8px;">GIF failed to load</p>
          ${x ? `<a href="${x}" target="_blank" style="color: #007bff; text-decoration: underline; font-size: 12px;">View original GIF</a>` : ''}
        </div>
      `),
                    (C.style.cssText = `
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed #ccc;
        background-color: #f9f9f9;
        font-size: 14px;
      `),
                    p.appendChild(C);
            }
        }
        const c = e.elements.map(async (g) => {
            var D, m, x, C, S, M, T, I;
            const p = t.createElement('div');
            switch (
                ((p.className = 'element'),
                (p.style.left = `${g.position.x}px`),
                (p.style.top = `${g.position.y}px`),
                g.size &&
                    ((p.style.width = `${g.size.width}px`),
                    (p.style.height = `${g.size.height}px`)),
                g.type)
            ) {
                case 'text':
                    (p.className += ' text-element'),
                        (p.style.fontFamily =
                            ((D = g.style) == null ? void 0 : D.font) ||
                            'Arial'),
                        (p.style.color =
                            ((m = g.style) == null ? void 0 : m.color) ||
                            '#000000'),
                        (p.style.fontWeight =
                            ((x = g.style) == null ? void 0 : x.fontWeight) ||
                            'normal'),
                        (p.style.fontStyle =
                            ((C = g.style) == null ? void 0 : C.fontStyle) ||
                            'normal'),
                        (p.style.textDecoration =
                            ((S = g.style) == null
                                ? void 0
                                : S.textDecoration) || 'none'),
                        (p.style.fontSize =
                            ((M = g.style) == null ? void 0 : M.fontSize) ||
                            '16px'),
                        (p.style.lineHeight =
                            ((T = g.style) == null ? void 0 : T.lineHeight) ||
                            '1.5'),
                        (p.style.textAlign =
                            ((I = g.style) == null ? void 0 : I.textAlign) ||
                            'left'),
                        (p.innerHTML = g.content || '');
                    break;
                case 'image':
                    try {
                        const V = g.src || g.content;
                        if (!V) throw new Error('No image source found');
                        const A = t.createElement('img');
                        (A.src = await d(V)),
                            (A.alt = 'Farewell page image'),
                            (A.onerror = function () {
                                console.error('Image failed to load:', V),
                                    (this.style.display = 'none');
                                const U = t.createElement('div');
                                (U.textContent = 'Image failed to load'),
                                    (U.style.cssText = `
              color: red;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px dashed #ccc;
              background-color: #f9f9f9;
            `),
                                    p.appendChild(U);
                            }),
                            p.appendChild(A);
                    } catch (V) {
                        console.error('Error embedding image:', V);
                        const A = t.createElement('div');
                        (A.textContent = 'Image failed to load'),
                            (A.style.cssText = `
            color: red;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed #ccc;
            background-color: #f9f9f9;
          `),
                            p.appendChild(A);
                    }
                    break;
                case 'gif':
                    const F = { ...g, src: g.content || g.src };
                    await h(F, p, t);
                    break;
                default:
                    console.warn(`Unsupported element type: ${g.type}`);
                    const q = t.createElement('div');
                    (q.textContent = `Unknown element type: ${g.type}`),
                        (q.style.cssText = `
          color: gray;
          border: 1px dashed gray;
          padding: 10px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `),
                        p.appendChild(q);
            }
            return p;
        });
        (await Promise.all(c)).forEach((g) => s.appendChild(g)),
            r.appendChild(s);
        const b = t.createElement('div');
        (b.style.cssText = `
    position: fixed;
    bottom: 5px;
    right: 5px;
    font-size: 10px;
    color: rgba(0,0,0,0.3);
    z-index: 1000;
  `),
            (b.textContent = `Created on ${new Date().toLocaleDateString()}`),
            r.appendChild(b);
        const y = t.createElement('script');
        (y.textContent = `
    // Add any interactive behaviors here
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Farewell page loaded successfully!');
      
      // Add additional error handling for any images that might fail
      const images = document.querySelectorAll('img');
      images.forEach(function(img) {
        if (!img.onerror) {
          img.onerror = function() {
            console.error('Image failed to load:', this.src);
            this.style.display = 'none';
            
            const parent = this.parentElement;
            if (parent && !parent.querySelector('.error-message')) {
              const errorDiv = document.createElement('div');
              errorDiv.className = 'error-message';
              errorDiv.textContent = 'Media failed to load';
              errorDiv.style.cssText = 'color: red; text-align: center; padding: 20px;';
              parent.appendChild(errorDiv);
            }
          };
        }
      });
    });
  `),
            r.appendChild(y);
        const w = `<!DOCTYPE html>
${new XMLSerializer().serializeToString(t)}`,
            k = new Blob([w], { type: 'text/html' }),
            v =
                typeof crypto < 'u' && crypto.randomUUID
                    ? crypto.randomUUID()
                    : Math.random().toString(36).substring(2, 10),
            E = document.createElement('a');
        return (
            (E.href = URL.createObjectURL(k)),
            (E.download = `${v}.html`),
            document.body.appendChild(E),
            E.click(),
            document.body.removeChild(E),
            URL.revokeObjectURL(E.href),
            !0
        );
    },
    Jr = () => {
        var c;
        const { farewellPage: e, setBackground: t } = ot(),
            n = a.useRef(null),
            [r, o] = a.useState(!1),
            [i, l] = a.useState(!1),
            s = [
                {
                    name: 'Default',
                    value: 'default-bg',
                    preview: 'bg-gradient-to-r from-[#fff] to-[#fff]',
                },
                {
                    name: 'Dramatic',
                    value: 'dramatic-bg',
                    preview: 'bg-gradient-to-r from-[#1f1c2c] to-[#928dab]',
                },
                {
                    name: 'Ironic',
                    value: 'ironic-bg',
                    preview: 'bg-gradient-to-r from-[#fceabb] to-[#f8b500]',
                },
                {
                    name: 'Cringe',
                    value: 'cringe-bg',
                    preview: 'bg-gradient-to-r from-[#ff4e50] to-[#f9d423]',
                },
                {
                    name: 'Classy',
                    value: 'classy-bg',
                    preview: 'bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7]',
                },
                {
                    name: 'Absurd',
                    value: 'absurd-bg',
                    preview:
                        'bg-gradient-to-r from-[#fc466b] via-[#3f5efb] to-[#00c9ff]',
                },
                {
                    name: 'Custom Image',
                    value: 'custom-image',
                    preview: 'bg-gray-300 flex items-center justify-center',
                },
            ],
            d = (u) => {
                const b = u.target.files[0];
                if (b) {
                    const y = URL.createObjectURL(b);
                    t({ type: 'custom-image', url: y });
                }
            },
            h = async () => {
                l(!0);
                try {
                    await Kr(e);
                } catch (u) {
                    console.error('Error exporting farewell page:', u);
                } finally {
                    l(!1);
                }
            };
        return f.jsxs('div', {
            className: 'flex flex-1 flex-col overflow-hidden p-4',
            children: [
                r &&
                    f.jsx('div', {
                        className:
                            'fixed inset-0 z-50 flex items-center justify-center bg-black/70',
                        children: f.jsxs('div', {
                            className:
                                'relative flex h-[90vh] max-h-[90vh] w-[90vw] max-w-6xl flex-col rounded-xl bg-white p-4 shadow-2xl',
                            children: [
                                f.jsx('button', {
                                    className:
                                        'absolute top-4 right-6 z-10 text-3xl text-gray-600 hover:text-black',
                                    onClick: () => o(!1),
                                    'aria-label': 'Close preview',
                                    children: '×',
                                }),
                                f.jsx('div', {
                                    className:
                                        'flex-1 overflow-auto rounded-lg bg-gray-100 p-4',
                                    children: f.jsx(Wt, { previewMode: !0 }),
                                }),
                            ],
                        }),
                    }),
                f.jsxs('div', {
                    className: 'glass-panel mb-1 h-screen',
                    children: [
                        f.jsxs('div', {
                            className: 'mb-2 flex items-center justify-between',
                            children: [
                                f.jsx('h2', {
                                    className: 'text-2xl text-gray-700',
                                    children: e.tone
                                        ? `${e.tone.charAt(0).toUpperCase() + e.tone.slice(1)} Farewell`
                                        : 'Your Farewell Page',
                                }),
                                f.jsxs('div', {
                                    className: 'flex items-center gap-2',
                                    children: [
                                        f.jsxs('div', {
                                            className: 'group relative',
                                            children: [
                                                f.jsxs(fe.button, {
                                                    className:
                                                        'glass-button flex items-center gap-2 p-2',
                                                    whileHover: { scale: 1.05 },
                                                    whileTap: { scale: 0.95 },
                                                    children: [
                                                        f.jsx(xn, {
                                                            className:
                                                                'h-4 w-4',
                                                        }),
                                                        f.jsx('span', {
                                                            children: 'Themes',
                                                        }),
                                                    ],
                                                }),
                                                f.jsx('div', {
                                                    className:
                                                        'invisible absolute right-0 z-10 mt-2 w-56 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100',
                                                    children: f.jsxs('div', {
                                                        className:
                                                            'glass-panel p-2 shadow-xl',
                                                        children: [
                                                            f.jsx('div', {
                                                                className:
                                                                    'grid grid-cols-1 gap-2',
                                                                children: s.map(
                                                                    (u) => {
                                                                        var b;
                                                                        return f.jsxs(
                                                                            fe.button,
                                                                            {
                                                                                onClick:
                                                                                    () =>
                                                                                        t(
                                                                                            u.value
                                                                                        ),
                                                                                whileHover:
                                                                                    {
                                                                                        scale: 1.03,
                                                                                    },
                                                                                className: `flex items-center gap-3 rounded-lg p-2 transition-colors ${(typeof e.background == 'string' ? e.background === u.value : ((b = e.background) == null ? void 0 : b.type) === u.value) ? 'border-gradient-to-r border bg-white/10 from-purple-400 to-blue-400' : 'hover:bg-white/10'}`,
                                                                                children:
                                                                                    [
                                                                                        f.jsx(
                                                                                            'div',
                                                                                            {
                                                                                                className: `h-5 w-5 rounded-full ${u.preview}`,
                                                                                                children:
                                                                                                    u.value ===
                                                                                                        'custom-image' &&
                                                                                                    f.jsx(
                                                                                                        wn,
                                                                                                        {
                                                                                                            className:
                                                                                                                'mx-auto my-auto h-4 w-4 text-gray-500',
                                                                                                        }
                                                                                                    ),
                                                                                            }
                                                                                        ),
                                                                                        f.jsx(
                                                                                            'span',
                                                                                            {
                                                                                                children:
                                                                                                    u.name,
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                            u.value
                                                                        );
                                                                    }
                                                                ),
                                                            }),
                                                            (e.background ===
                                                                'custom-image' ||
                                                                ((c =
                                                                    e.background) ==
                                                                null
                                                                    ? void 0
                                                                    : c.type) ===
                                                                    'custom-image') &&
                                                                f.jsx('div', {
                                                                    className:
                                                                        'mt-2',
                                                                    children:
                                                                        f.jsx(
                                                                            'input',
                                                                            {
                                                                                ref: n,
                                                                                type: 'file',
                                                                                accept: 'image/*',
                                                                                onChange:
                                                                                    d,
                                                                                className:
                                                                                    'block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100',
                                                                            }
                                                                        ),
                                                                }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        f.jsxs(fe.button, {
                                            className:
                                                'bg-primary-500 flex items-center gap-2 rounded-full px-4 py-2 font-medium text-white',
                                            whileHover: { scale: 1.05 },
                                            whileTap: { scale: 0.95 },
                                            onClick: () => o(!0),
                                            children: [
                                                f.jsx(Cn, {
                                                    className: 'h-4 w-4',
                                                }),
                                                'Preview',
                                            ],
                                        }),
                                        f.jsxs(fe.button, {
                                            className:
                                                'bg-primary-500 flex items-center gap-2 rounded-full px-4 py-2 font-medium text-white',
                                            whileHover: { scale: 1.05 },
                                            whileTap: { scale: 0.95 },
                                            onClick: h,
                                            disabled: i,
                                            children: [
                                                f.jsx(Nn, {
                                                    className: 'h-4 w-4',
                                                }),
                                                'Publish',
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsx('div', {
                            className:
                                'glass-panel custom-scrollbar h-full flex-1 overflow-auto',
                            children: f.jsx(Wt, {}),
                        }),
                    ],
                }),
            ],
        });
    };
export { Jr as default };
