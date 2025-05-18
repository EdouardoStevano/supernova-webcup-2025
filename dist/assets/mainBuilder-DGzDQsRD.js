import {
    C as mn,
    e as rt,
    r as s,
    x as B,
    B as ot,
    j as d,
    m as de,
    X as Xt,
} from './index-DwbPX98K.js';
import { P as xn, I as wn } from './palette-8R_pbFLM.js';
import { E as Cn } from './eye-D90DUWMx.js';
var Ee = mn();
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
    Sn = rt('grip-vertical', Dn);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const En = [
        ['path', { d: 'M11 19H5v-6', key: '8awifj' }],
        ['path', { d: 'M13 5h6v6', key: '7voy1q' }],
        ['path', { d: 'M19 5 5 19', key: 'wwaj1z' }],
    ],
    Rn = rt('move-diagonal', En);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nn = [
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
    jn = rt('share-2', Nn),
    We =
        typeof window < 'u' &&
        typeof window.document < 'u' &&
        typeof window.document.createElement < 'u';
function ye(e) {
    const t = Object.prototype.toString.call(e);
    return t === '[object Window]' || t === '[object global]';
}
function it(e) {
    return 'nodeType' in e;
}
function $(e) {
    var t, n;
    return e
        ? ye(e)
            ? e
            : it(e) &&
                (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) !=
                    null
              ? t
              : window
        : window;
}
function st(e) {
    const { Document: t } = $(e);
    return e instanceof t;
}
function ke(e) {
    return ye(e) ? !1 : e instanceof $(e).HTMLElement;
}
function Yt(e) {
    return e instanceof $(e).SVGElement;
}
function me(e) {
    return e
        ? ye(e)
            ? e.document
            : it(e)
              ? st(e)
                  ? e
                  : ke(e) || Yt(e)
                    ? e.ownerDocument
                    : document
              : document
        : document;
}
const se = We ? s.useLayoutEffect : s.useEffect;
function at(e) {
    const t = s.useRef(e);
    return (
        se(() => {
            t.current = e;
        }),
        s.useCallback(function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
            return t.current == null ? void 0 : t.current(...r);
        }, [])
    );
}
function Mn() {
    const e = s.useRef(null),
        t = s.useCallback((r, o) => {
            e.current = setInterval(r, o);
        }, []),
        n = s.useCallback(() => {
            e.current !== null &&
                (clearInterval(e.current), (e.current = null));
        }, []);
    return [t, n];
}
function lt(e, t) {
    t === void 0 && (t = [e]);
    const n = s.useRef(e);
    return (
        se(() => {
            n.current !== e && (n.current = e);
        }, t),
        n
    );
}
function Ae(e, t) {
    const n = s.useRef();
    return s.useMemo(() => {
        const r = e(n.current);
        return (n.current = r), r;
    }, [...t]);
}
function Je(e) {
    const t = at(e),
        n = s.useRef(null),
        r = s.useCallback((o) => {
            o !== n.current && (t == null || t(o, n.current)), (n.current = o);
        }, []);
    return [n, r];
}
function Qe(e) {
    const t = s.useRef();
    return (
        s.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
}
let qe = {};
function ct(e, t) {
    return s.useMemo(() => {
        if (t) return t;
        const n = qe[e] == null ? 0 : qe[e] + 1;
        return (qe[e] = n), e + '-' + n;
    }, [e, t]);
}
function Kt(e) {
    return function (t) {
        for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
        )
            r[o - 1] = arguments[o];
        return r.reduce(
            (i, a) => {
                const l = Object.entries(a);
                for (const [c, f] of l) {
                    const u = i[c];
                    u != null && (i[c] = u + e * f);
                }
                return i;
            },
            { ...t }
        );
    };
}
const be = Kt(1),
    Be = Kt(-1);
function kn(e) {
    return 'clientX' in e && 'clientY' in e;
}
function qt(e) {
    if (!e) return !1;
    const { KeyboardEvent: t } = $(e.target);
    return t && e instanceof t;
}
function An(e) {
    if (!e) return !1;
    const { TouchEvent: t } = $(e.target);
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
    return kn(e) ? { x: e.clientX, y: e.clientY } : null;
}
const Mt =
    'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function Tn(e) {
    return e.matches(Mt) ? e : e.querySelector(Mt);
}
const Ln = { display: 'none' };
function On(e) {
    let { id: t, value: n } = e;
    return B.createElement('div', { id: t, style: Ln }, n);
}
function In(e) {
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
function zn() {
    const [e, t] = s.useState('');
    return {
        announce: s.useCallback((r) => {
            r != null && t(r);
        }, []),
        announcement: e,
    };
}
const Vt = s.createContext(null);
function Pn(e) {
    const t = s.useContext(Vt);
    s.useEffect(() => {
        if (!t)
            throw new Error(
                'useDndMonitor must be used within a children of <DndContext>'
            );
        return t(e);
    }, [e, t]);
}
function Bn() {
    const [e] = s.useState(() => new Set()),
        t = s.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
    return [
        s.useCallback(
            (r) => {
                let { type: o, event: i } = r;
                e.forEach((a) => {
                    var l;
                    return (l = a[o]) == null ? void 0 : l.call(a, i);
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
    Fn = {
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
function Wn(e) {
    let {
        announcements: t = Fn,
        container: n,
        hiddenTextDescribedById: r,
        screenReaderInstructions: o = $n,
    } = e;
    const { announce: i, announcement: a } = zn(),
        l = ct('DndLiveRegion'),
        [c, f] = s.useState(!1);
    if (
        (s.useEffect(() => {
            f(!0);
        }, []),
        Pn(
            s.useMemo(
                () => ({
                    onDragStart(h) {
                        let { active: b } = h;
                        i(t.onDragStart({ active: b }));
                    },
                    onDragMove(h) {
                        let { active: b, over: p } = h;
                        t.onDragMove && i(t.onDragMove({ active: b, over: p }));
                    },
                    onDragOver(h) {
                        let { active: b, over: p } = h;
                        i(t.onDragOver({ active: b, over: p }));
                    },
                    onDragEnd(h) {
                        let { active: b, over: p } = h;
                        i(t.onDragEnd({ active: b, over: p }));
                    },
                    onDragCancel(h) {
                        let { active: b, over: p } = h;
                        i(t.onDragCancel({ active: b, over: p }));
                    },
                }),
                [i, t]
            )
        ),
        !c)
    )
        return null;
    const u = B.createElement(
        B.Fragment,
        null,
        B.createElement(On, { id: r, value: o.draggable }),
        B.createElement(In, { id: l, announcement: a })
    );
    return n ? Ee.createPortal(u, n) : u;
}
var O;
(function (e) {
    (e.DragStart = 'dragStart'),
        (e.DragMove = 'dragMove'),
        (e.DragEnd = 'dragEnd'),
        (e.DragCancel = 'dragCancel'),
        (e.DragOver = 'dragOver'),
        (e.RegisterDroppable = 'registerDroppable'),
        (e.SetDroppableDisabled = 'setDroppableDisabled'),
        (e.UnregisterDroppable = 'unregisterDroppable');
})(O || (O = {}));
function $e() {}
function kt(e, t) {
    return s.useMemo(() => ({ sensor: e, options: t ?? {} }), [e, t]);
}
function Hn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return s.useMemo(() => [...t].filter((r) => r != null), [...t]);
}
const _ = Object.freeze({ x: 0, y: 0 });
function Un(e, t) {
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
function Yn(e, t) {
    const n = Math.max(t.top, e.top),
        r = Math.max(t.left, e.left),
        o = Math.min(t.left + t.width, e.left + e.width),
        i = Math.min(t.top + t.height, e.top + e.height),
        a = o - r,
        l = i - n;
    if (r < o && n < i) {
        const c = t.width * t.height,
            f = e.width * e.height,
            u = a * l,
            h = u / (c + f - u);
        return Number(h.toFixed(4));
    }
    return 0;
}
const Kn = (e) => {
    let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
    const o = [];
    for (const i of r) {
        const { id: a } = i,
            l = n.get(a);
        if (l) {
            const c = Yn(l, t);
            c > 0 &&
                o.push({ id: a, data: { droppableContainer: i, value: c } });
        }
    }
    return o.sort(Un);
};
function qn(e, t, n) {
    return {
        ...e,
        scaleX: t && n ? t.width / n.width : 1,
        scaleY: t && n ? t.height / n.height : 1,
    };
}
function _t(e, t) {
    return e && t ? { x: e.left - t.left, y: e.top - t.top } : _;
}
function Vn(e) {
    return function (n) {
        for (
            var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
        )
            o[i - 1] = arguments[i];
        return o.reduce(
            (a, l) => ({
                ...a,
                top: a.top + e * l.y,
                bottom: a.bottom + e * l.y,
                left: a.left + e * l.x,
                right: a.right + e * l.x,
            }),
            { ...n }
        );
    };
}
const _n = Vn(1);
function Gn(e) {
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
    const r = Gn(t);
    if (!r) return e;
    const { scaleX: o, scaleY: i, x: a, y: l } = r,
        c = e.left - a - (1 - o) * parseFloat(n),
        f = e.top - l - (1 - i) * parseFloat(n.slice(n.indexOf(' ') + 1)),
        u = o ? e.width / o : e.width,
        h = i ? e.height / i : e.height;
    return {
        width: u,
        height: h,
        top: f,
        right: c + u,
        bottom: f + h,
        left: c,
    };
}
const Qn = { ignoreTransform: !1 };
function Te(e, t) {
    t === void 0 && (t = Qn);
    let n = e.getBoundingClientRect();
    if (t.ignoreTransform) {
        const { transform: f, transformOrigin: u } = $(e).getComputedStyle(e);
        f && (n = Jn(n, f, u));
    }
    const { top: r, left: o, width: i, height: a, bottom: l, right: c } = n;
    return { top: r, left: o, width: i, height: a, bottom: l, right: c };
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
        t === void 0 && (t = $(e).getComputedStyle(e)), t.position === 'fixed'
    );
}
function tr(e, t) {
    t === void 0 && (t = $(e).getComputedStyle(e));
    const n = /(auto|scroll|overlay)/;
    return ['overflow', 'overflowX', 'overflowY'].some((o) => {
        const i = t[o];
        return typeof i == 'string' ? n.test(i) : !1;
    });
}
function ut(e, t) {
    const n = [];
    function r(o) {
        if ((t != null && n.length >= t) || !o) return n;
        if (
            st(o) &&
            o.scrollingElement != null &&
            !n.includes(o.scrollingElement)
        )
            return n.push(o.scrollingElement), n;
        if (!ke(o) || Yt(o) || n.includes(o)) return n;
        const i = $(e).getComputedStyle(o);
        return o !== e && tr(o, i) && n.push(o), er(o, i) ? n : r(o.parentNode);
    }
    return e ? r(e) : n;
}
function Gt(e) {
    const [t] = ut(e, 1);
    return t ?? null;
}
function Ve(e) {
    return !We || !e
        ? null
        : ye(e)
          ? e
          : it(e)
            ? st(e) || e === me(e).scrollingElement
                ? window
                : ke(e)
                  ? e
                  : null
            : null;
}
function Jt(e) {
    return ye(e) ? e.scrollX : e.scrollLeft;
}
function Qt(e) {
    return ye(e) ? e.scrollY : e.scrollTop;
}
function et(e) {
    return { x: Jt(e), y: Qt(e) };
}
var A;
(function (e) {
    (e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward');
})(A || (A = {}));
function Zt(e) {
    return !We || !e ? !1 : e === document.scrollingElement;
}
function en(e) {
    const t = { x: 0, y: 0 },
        n = Zt(e)
            ? { height: window.innerHeight, width: window.innerWidth }
            : { height: e.clientHeight, width: e.clientWidth },
        r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
        o = e.scrollTop <= t.y,
        i = e.scrollLeft <= t.x,
        a = e.scrollTop >= r.y,
        l = e.scrollLeft >= r.x;
    return {
        isTop: o,
        isLeft: i,
        isBottom: a,
        isRight: l,
        maxScroll: r,
        minScroll: t,
    };
}
const nr = { x: 0.2, y: 0.2 };
function rr(e, t, n, r, o) {
    let { top: i, left: a, right: l, bottom: c } = n;
    r === void 0 && (r = 10), o === void 0 && (o = nr);
    const { isTop: f, isBottom: u, isLeft: h, isRight: b } = en(e),
        p = { x: 0, y: 0 },
        S = { x: 0, y: 0 },
        v = { height: t.height * o.y, width: t.width * o.x };
    return (
        !f && i <= t.top + v.height
            ? ((p.y = A.Backward),
              (S.y = r * Math.abs((t.top + v.height - i) / v.height)))
            : !u &&
              c >= t.bottom - v.height &&
              ((p.y = A.Forward),
              (S.y = r * Math.abs((t.bottom - v.height - c) / v.height))),
        !b && l >= t.right - v.width
            ? ((p.x = A.Forward),
              (S.x = r * Math.abs((t.right - v.width - l) / v.width)))
            : !h &&
              a <= t.left + v.width &&
              ((p.x = A.Backward),
              (S.x = r * Math.abs((t.left + v.width - a) / v.width))),
        { direction: p, speed: S }
    );
}
function or(e) {
    if (e === document.scrollingElement) {
        const { innerWidth: i, innerHeight: a } = window;
        return { top: 0, left: 0, right: i, bottom: a, width: i, height: a };
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
    return e.reduce((t, n) => be(t, et(n)), _);
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
    Gt(e) &&
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
class dt {
    constructor(t, n) {
        (this.rect = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.right = void 0),
            (this.left = void 0);
        const r = ut(n),
            o = tn(r);
        (this.rect = { ...t }),
            (this.width = t.width),
            (this.height = t.height);
        for (const [i, a, l] of lr)
            for (const c of a)
                Object.defineProperty(this, c, {
                    get: () => {
                        const f = l(r),
                            u = o[i] - f;
                        return this.rect[c] + u;
                    },
                    enumerable: !0,
                });
        Object.defineProperty(this, 'rect', { enumerable: !1 });
    }
}
class Re {
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
    const { EventTarget: t } = $(e);
    return e instanceof t ? e : me(e);
}
function _e(e, t) {
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
function ur(e) {
    e.stopPropagation();
}
var R;
(function (e) {
    (e.Space = 'Space'),
        (e.Down = 'ArrowDown'),
        (e.Right = 'ArrowRight'),
        (e.Left = 'ArrowLeft'),
        (e.Up = 'ArrowUp'),
        (e.Esc = 'Escape'),
        (e.Enter = 'Enter'),
        (e.Tab = 'Tab');
})(R || (R = {}));
const nn = {
        start: [R.Space, R.Enter],
        cancel: [R.Esc],
        end: [R.Space, R.Enter, R.Tab],
    },
    dr = (e, t) => {
        let { currentCoordinates: n } = t;
        switch (e.code) {
            case R.Right:
                return { ...n, x: n.x + 25 };
            case R.Left:
                return { ...n, x: n.x - 25 };
            case R.Down:
                return { ...n, y: n.y + 25 };
            case R.Up:
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
            (this.listeners = new Re(me(n))),
            (this.windowListeners = new Re($(n))),
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
        r && ar(r), n(_);
    }
    handleKeyDown(t) {
        if (qt(t)) {
            const { active: n, context: r, options: o } = this.props,
                {
                    keyboardCodes: i = nn,
                    coordinateGetter: a = dr,
                    scrollBehavior: l = 'smooth',
                } = o,
                { code: c } = t;
            if (i.end.includes(c)) {
                this.handleEnd(t);
                return;
            }
            if (i.cancel.includes(c)) {
                this.handleCancel(t);
                return;
            }
            const { collisionRect: f } = r.current,
                u = f ? { x: f.left, y: f.top } : _;
            this.referenceCoordinates || (this.referenceCoordinates = u);
            const h = a(t, {
                active: n,
                context: r.current,
                currentCoordinates: u,
            });
            if (h) {
                const b = Be(h, u),
                    p = { x: 0, y: 0 },
                    { scrollableAncestors: S } = r.current;
                for (const v of S) {
                    const y = t.code,
                        {
                            isTop: g,
                            isRight: w,
                            isLeft: N,
                            isBottom: C,
                            maxScroll: E,
                            minScroll: D,
                        } = en(v),
                        m = or(v),
                        x = {
                            x: Math.min(
                                y === R.Right ? m.right - m.width / 2 : m.right,
                                Math.max(
                                    y === R.Right
                                        ? m.left
                                        : m.left + m.width / 2,
                                    h.x
                                )
                            ),
                            y: Math.min(
                                y === R.Down
                                    ? m.bottom - m.height / 2
                                    : m.bottom,
                                Math.max(
                                    y === R.Down ? m.top : m.top + m.height / 2,
                                    h.y
                                )
                            ),
                        },
                        M = (y === R.Right && !w) || (y === R.Left && !N),
                        k = (y === R.Down && !C) || (y === R.Up && !g);
                    if (M && x.x !== h.x) {
                        const j = v.scrollLeft + b.x,
                            I =
                                (y === R.Right && j <= E.x) ||
                                (y === R.Left && j >= D.x);
                        if (I && !b.y) {
                            v.scrollTo({ left: j, behavior: l });
                            return;
                        }
                        I
                            ? (p.x = v.scrollLeft - j)
                            : (p.x =
                                  y === R.Right
                                      ? v.scrollLeft - E.x
                                      : v.scrollLeft - D.x),
                            p.x && v.scrollBy({ left: -p.x, behavior: l });
                        break;
                    } else if (k && x.y !== h.y) {
                        const j = v.scrollTop + b.y,
                            I =
                                (y === R.Down && j <= E.y) ||
                                (y === R.Up && j >= D.y);
                        if (I && !b.x) {
                            v.scrollTo({ top: j, behavior: l });
                            return;
                        }
                        I
                            ? (p.y = v.scrollTop - j)
                            : (p.y =
                                  y === R.Down
                                      ? v.scrollTop - E.y
                                      : v.scrollTop - D.y),
                            p.y && v.scrollBy({ top: -p.y, behavior: l });
                        break;
                    }
                }
                this.handleMove(t, be(Be(h, this.referenceCoordinates), p));
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
            const { code: a } = e.nativeEvent;
            if (r.start.includes(a)) {
                const l = i.activatorNode.current;
                return l && e.target !== l
                    ? !1
                    : (e.preventDefault(),
                      o == null || o({ event: e.nativeEvent }),
                      !0);
            }
            return !1;
        },
    },
];
function Lt(e) {
    return !!(e && 'distance' in e);
}
function Ot(e) {
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
            { target: a } = i;
        (this.props = t),
            (this.events = n),
            (this.document = me(a)),
            (this.documentListeners = new Re(this.document)),
            (this.listeners = new Re(r)),
            (this.windowListeners = new Re($(a))),
            (this.initialCoordinates = (o = Ze(i)) != null ? o : _),
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
            if (Ot(n)) {
                (this.timeoutId = setTimeout(this.handleStart, n.delay)),
                    this.handlePending(n);
                return;
            }
            if (Lt(n)) {
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
            this.documentListeners.add(K.Click, ur, { capture: !0 }),
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
                onMove: a,
                options: { activationConstraint: l },
            } = i;
        if (!o) return;
        const c = (n = Ze(t)) != null ? n : _,
            f = Be(o, c);
        if (!r && l) {
            if (Lt(l)) {
                if (l.tolerance != null && _e(f, l.tolerance))
                    return this.handleCancel();
                if (_e(f, l.distance)) return this.handleStart();
            }
            if (Ot(l) && _e(f, l.tolerance)) return this.handleCancel();
            this.handlePending(l, f);
            return;
        }
        t.cancelable && t.preventDefault(), a(c);
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
        t.code === R.Esc && this.handleCancel();
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
            r = me(n.target);
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
        super(t, hr, me(t.event.target));
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
const Ge = {
    cancel: { name: 'touchcancel' },
    move: { name: 'touchmove' },
    end: { name: 'touchend' },
};
class an extends ft {
    constructor(t) {
        super(t, Ge);
    }
    static setup() {
        return (
            window.addEventListener(Ge.move.name, t, {
                capture: !1,
                passive: !1,
            }),
            function () {
                window.removeEventListener(Ge.move.name, t);
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
var Ne;
(function (e) {
    (e[(e.Pointer = 0)] = 'Pointer'),
        (e[(e.DraggableRect = 1)] = 'DraggableRect');
})(Ne || (Ne = {}));
var Fe;
(function (e) {
    (e[(e.TreeOrder = 0)] = 'TreeOrder'),
        (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder');
})(Fe || (Fe = {}));
function gr(e) {
    let {
        acceleration: t,
        activator: n = Ne.Pointer,
        canScroll: r,
        draggingRect: o,
        enabled: i,
        interval: a = 5,
        order: l = Fe.TreeOrder,
        pointerCoordinates: c,
        scrollableAncestors: f,
        scrollableAncestorRects: u,
        delta: h,
        threshold: b,
    } = e;
    const p = pr({ delta: h, disabled: !i }),
        [S, v] = Mn(),
        y = s.useRef({ x: 0, y: 0 }),
        g = s.useRef({ x: 0, y: 0 }),
        w = s.useMemo(() => {
            switch (n) {
                case Ne.Pointer:
                    return c
                        ? { top: c.y, bottom: c.y, left: c.x, right: c.x }
                        : null;
                case Ne.DraggableRect:
                    return o;
            }
        }, [n, o, c]),
        N = s.useRef(null),
        C = s.useCallback(() => {
            const D = N.current;
            if (!D) return;
            const m = y.current.x * g.current.x,
                x = y.current.y * g.current.y;
            D.scrollBy(m, x);
        }, []),
        E = s.useMemo(
            () => (l === Fe.TreeOrder ? [...f].reverse() : f),
            [l, f]
        );
    s.useEffect(() => {
        if (!i || !f.length || !w) {
            v();
            return;
        }
        for (const D of E) {
            if ((r == null ? void 0 : r(D)) === !1) continue;
            const m = f.indexOf(D),
                x = u[m];
            if (!x) continue;
            const { direction: M, speed: k } = rr(D, x, w, t, b);
            for (const j of ['x', 'y']) p[j][M[j]] || ((k[j] = 0), (M[j] = 0));
            if (k.x > 0 || k.y > 0) {
                v(), (N.current = D), S(C, a), (y.current = k), (g.current = M);
                return;
            }
        }
        (y.current = { x: 0, y: 0 }), (g.current = { x: 0, y: 0 }), v();
    }, [
        t,
        C,
        r,
        v,
        i,
        a,
        JSON.stringify(w),
        JSON.stringify(p),
        S,
        f,
        E,
        u,
        JSON.stringify(b),
    ]);
}
const vr = {
    x: { [A.Backward]: !1, [A.Forward]: !1 },
    y: { [A.Backward]: !1, [A.Forward]: !1 },
};
function pr(e) {
    let { delta: t, disabled: n } = e;
    const r = Qe(t);
    return Ae(
        (o) => {
            if (n || !r || !o) return vr;
            const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
            return {
                x: {
                    [A.Backward]: o.x[A.Backward] || i.x === -1,
                    [A.Forward]: o.x[A.Forward] || i.x === 1,
                },
                y: {
                    [A.Backward]: o.y[A.Backward] || i.y === -1,
                    [A.Forward]: o.y[A.Forward] || i.y === 1,
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
    return s.useMemo(
        () =>
            e.reduce((n, r) => {
                const { sensor: o } = r,
                    i = o.activators.map((a) => ({
                        eventName: a.eventName,
                        handler: t(a.handler, r),
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
const It = new Map();
function mr(e, t) {
    let { dragging: n, dependencies: r, config: o } = t;
    const [i, a] = s.useState(null),
        { frequency: l, measure: c, strategy: f } = o,
        u = s.useRef(e),
        h = y(),
        b = lt(h),
        p = s.useCallback(
            function (g) {
                g === void 0 && (g = []),
                    !b.current &&
                        a((w) =>
                            w === null
                                ? g
                                : w.concat(g.filter((N) => !w.includes(N)))
                        );
            },
            [b]
        ),
        S = s.useRef(null),
        v = Ae(
            (g) => {
                if (h && !n) return It;
                if (!g || g === It || u.current !== e || i != null) {
                    const w = new Map();
                    for (let N of e) {
                        if (!N) continue;
                        if (
                            i &&
                            i.length > 0 &&
                            !i.includes(N.id) &&
                            N.rect.current
                        ) {
                            w.set(N.id, N.rect.current);
                            continue;
                        }
                        const C = N.node.current,
                            E = C ? new dt(c(C), C) : null;
                        (N.rect.current = E), E && w.set(N.id, E);
                    }
                    return w;
                }
                return g;
            },
            [e, i, n, h, c]
        );
    return (
        s.useEffect(() => {
            u.current = e;
        }, [e]),
        s.useEffect(() => {
            h || p();
        }, [n, h]),
        s.useEffect(() => {
            i && i.length > 0 && a(null);
        }, [JSON.stringify(i)]),
        s.useEffect(() => {
            h ||
                typeof l != 'number' ||
                S.current !== null ||
                (S.current = setTimeout(() => {
                    p(), (S.current = null);
                }, l));
        }, [l, h, p, ...r]),
        {
            droppableRects: v,
            measureDroppableContainers: p,
            measuringScheduled: i != null,
        }
    );
    function y() {
        switch (f) {
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
        o = s.useMemo(() => {
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
        s.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o
    );
}
function ht(e) {
    let { callback: t, disabled: n } = e;
    const r = at(t),
        o = s.useMemo(() => {
            if (n || typeof window > 'u' || typeof window.ResizeObserver > 'u')
                return;
            const { ResizeObserver: i } = window;
            return new i(r);
        }, [n]);
    return (
        s.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o
    );
}
function Cr(e) {
    return new dt(Te(e), e);
}
function zt(e, t, n) {
    t === void 0 && (t = Cr);
    const [r, o] = s.useState(null);
    function i() {
        o((c) => {
            if (!e) return null;
            if (e.isConnected === !1) {
                var f;
                return (f = c ?? n) != null ? f : null;
            }
            const u = t(e);
            return JSON.stringify(c) === JSON.stringify(u) ? c : u;
        });
    }
    const a = wr({
            callback(c) {
                if (e)
                    for (const f of c) {
                        const { type: u, target: h } = f;
                        if (
                            u === 'childList' &&
                            h instanceof HTMLElement &&
                            h.contains(e)
                        ) {
                            i();
                            break;
                        }
                    }
            },
        }),
        l = ht({ callback: i });
    return (
        se(() => {
            i(),
                e
                    ? (l == null || l.observe(e),
                      a == null ||
                          a.observe(document.body, {
                              childList: !0,
                              subtree: !0,
                          }))
                    : (l == null || l.disconnect(),
                      a == null || a.disconnect());
        }, [e]),
        r
    );
}
function Dr(e) {
    const t = ln(e);
    return _t(e, t);
}
const Pt = [];
function Sr(e) {
    const t = s.useRef(e),
        n = Ae(
            (r) =>
                e
                    ? r &&
                      r !== Pt &&
                      e &&
                      t.current &&
                      e.parentNode === t.current.parentNode
                        ? r
                        : ut(e)
                    : Pt,
            [e]
        );
    return (
        s.useEffect(() => {
            t.current = e;
        }, [e]),
        n
    );
}
function Er(e) {
    const [t, n] = s.useState(null),
        r = s.useRef(e),
        o = s.useCallback((i) => {
            const a = Ve(i.target);
            a && n((l) => (l ? (l.set(a, et(a)), new Map(l)) : null));
        }, []);
    return (
        s.useEffect(() => {
            const i = r.current;
            if (e !== i) {
                a(i);
                const l = e
                    .map((c) => {
                        const f = Ve(c);
                        return f
                            ? (f.addEventListener('scroll', o, { passive: !0 }),
                              [f, et(f)])
                            : null;
                    })
                    .filter((c) => c != null);
                n(l.length ? new Map(l) : null), (r.current = e);
            }
            return () => {
                a(e), a(i);
            };
            function a(l) {
                l.forEach((c) => {
                    const f = Ve(c);
                    f == null || f.removeEventListener('scroll', o);
                });
            }
        }, [o, e]),
        s.useMemo(
            () =>
                e.length
                    ? t
                        ? Array.from(t.values()).reduce((i, a) => be(i, a), _)
                        : tn(e)
                    : _,
            [e, t]
        )
    );
}
function Bt(e, t) {
    t === void 0 && (t = []);
    const n = s.useRef(null);
    return (
        s.useEffect(() => {
            n.current = null;
        }, t),
        s.useEffect(() => {
            const r = e !== _;
            r && !n.current && (n.current = e),
                !r && n.current && (n.current = null);
        }, [e]),
        n.current ? Be(e, n.current) : _
    );
}
function Rr(e) {
    s.useEffect(
        () => {
            if (!We) return;
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
function Nr(e, t) {
    return s.useMemo(
        () =>
            e.reduce((n, r) => {
                let { eventName: o, handler: i } = r;
                return (
                    (n[o] = (a) => {
                        i(a, t);
                    }),
                    n
                );
            }, {}),
        [e, t]
    );
}
function cn(e) {
    return s.useMemo(() => (e ? Zn(e) : null), [e]);
}
const $t = [];
function jr(e, t) {
    t === void 0 && (t = Te);
    const [n] = e,
        r = cn(n ? $(n) : null),
        [o, i] = s.useState($t);
    function a() {
        i(() => (e.length ? e.map((c) => (Zt(c) ? r : new dt(t(c), c))) : $t));
    }
    const l = ht({ callback: a });
    return (
        se(() => {
            l == null || l.disconnect(),
                a(),
                e.forEach((c) => (l == null ? void 0 : l.observe(c)));
        }, [e]),
        o
    );
}
function Mr(e) {
    if (!e) return null;
    if (e.children.length > 1) return e;
    const t = e.children[0];
    return ke(t) ? t : e;
}
function kr(e) {
    let { measure: t } = e;
    const [n, r] = s.useState(null),
        o = s.useCallback(
            (f) => {
                for (const { target: u } of f)
                    if (ke(u)) {
                        r((h) => {
                            const b = t(u);
                            return h
                                ? { ...h, width: b.width, height: b.height }
                                : b;
                        });
                        break;
                    }
            },
            [t]
        ),
        i = ht({ callback: o }),
        a = s.useCallback(
            (f) => {
                const u = Mr(f);
                i == null || i.disconnect(),
                    u && (i == null || i.observe(u)),
                    r(u ? t(u) : null);
            },
            [t, i]
        ),
        [l, c] = Je(a);
    return s.useMemo(() => ({ nodeRef: l, rect: n, setRef: c }), [n, l, c]);
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
class je extends Map {
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
const Lr = {
        activatorEvent: null,
        active: null,
        activeNode: null,
        activeNodeRect: null,
        collisions: null,
        containerNodeRect: null,
        draggableNodes: new Map(),
        droppableRects: new Map(),
        droppableContainers: new je(),
        over: null,
        dragOverlay: { nodeRef: { current: null }, rect: null, setRef: $e },
        scrollableAncestors: [],
        scrollableAncestorRects: [],
        measuringConfiguration: Pe,
        measureDroppableContainers: $e,
        windowRect: null,
        measuringScheduled: !1,
    },
    Or = {
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
    gt = s.createContext(Or),
    Ir = s.createContext(Lr);
function zr() {
    return {
        draggable: {
            active: null,
            initialCoordinates: { x: 0, y: 0 },
            nodes: new Map(),
            translate: { x: 0, y: 0 },
        },
        droppable: { containers: new je() },
    };
}
function Pr(e, t) {
    switch (t.type) {
        case O.DragStart:
            return {
                ...e,
                draggable: {
                    ...e.draggable,
                    initialCoordinates: t.initialCoordinates,
                    active: t.active,
                },
            };
        case O.DragMove:
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
        case O.DragEnd:
        case O.DragCancel:
            return {
                ...e,
                draggable: {
                    ...e.draggable,
                    active: null,
                    initialCoordinates: { x: 0, y: 0 },
                    translate: { x: 0, y: 0 },
                },
            };
        case O.RegisterDroppable: {
            const { element: n } = t,
                { id: r } = n,
                o = new je(e.droppable.containers);
            return (
                o.set(r, n),
                { ...e, droppable: { ...e.droppable, containers: o } }
            );
        }
        case O.SetDroppableDisabled: {
            const { id: n, key: r, disabled: o } = t,
                i = e.droppable.containers.get(n);
            if (!i || r !== i.key) return e;
            const a = new je(e.droppable.containers);
            return (
                a.set(n, { ...i, disabled: o }),
                { ...e, droppable: { ...e.droppable, containers: a } }
            );
        }
        case O.UnregisterDroppable: {
            const { id: n, key: r } = t,
                o = e.droppable.containers.get(n);
            if (!o || r !== o.key) return e;
            const i = new je(e.droppable.containers);
            return (
                i.delete(n),
                { ...e, droppable: { ...e.droppable, containers: i } }
            );
        }
        default:
            return e;
    }
}
function Br(e) {
    let { disabled: t } = e;
    const {
            active: n,
            activatorEvent: r,
            draggableNodes: o,
        } = s.useContext(gt),
        i = Qe(r),
        a = Qe(n == null ? void 0 : n.id);
    return (
        s.useEffect(() => {
            if (!t && !r && i && a != null) {
                if (!qt(i) || document.activeElement === i.target) return;
                const l = o.get(a);
                if (!l) return;
                const { activatorNode: c, node: f } = l;
                if (!c.current && !f.current) return;
                requestAnimationFrame(() => {
                    for (const u of [c.current, f.current]) {
                        if (!u) continue;
                        const h = Tn(u);
                        if (h) {
                            h.focus();
                            break;
                        }
                    }
                });
            }
        }, [r, t, o, a, i]),
        null
    );
}
function $r(e, t) {
    let { transform: n, ...r } = t;
    return e != null && e.length
        ? e.reduce((o, i) => i({ transform: o, ...r }), n)
        : n;
}
function Fr(e) {
    return s.useMemo(
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
function Wr(e) {
    let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
    const i = s.useRef(!1),
        { x: a, y: l } = typeof o == 'boolean' ? { x: o, y: o } : o;
    se(() => {
        if ((!a && !l) || !t) {
            i.current = !1;
            return;
        }
        if (i.current || !r) return;
        const f = t == null ? void 0 : t.node.current;
        if (!f || f.isConnected === !1) return;
        const u = n(f),
            h = _t(u, r);
        if (
            (a || (h.x = 0),
            l || (h.y = 0),
            (i.current = !0),
            Math.abs(h.x) > 0 || Math.abs(h.y) > 0)
        ) {
            const b = Gt(f);
            b && b.scrollBy({ top: h.y, left: h.x });
        }
    }, [t, a, l, r, n]);
}
const un = s.createContext({ ..._, scaleX: 1, scaleY: 1 });
var ie;
(function (e) {
    (e[(e.Uninitialized = 0)] = 'Uninitialized'),
        (e[(e.Initializing = 1)] = 'Initializing'),
        (e[(e.Initialized = 2)] = 'Initialized');
})(ie || (ie = {}));
const Hr = s.memo(function (t) {
        var n, r, o, i;
        let {
            id: a,
            accessibility: l,
            autoScroll: c = !0,
            children: f,
            sensors: u = Ar,
            collisionDetection: h = Kn,
            measuring: b,
            modifiers: p,
            ...S
        } = t;
        const v = s.useReducer(Pr, void 0, zr),
            [y, g] = v,
            [w, N] = Bn(),
            [C, E] = s.useState(ie.Uninitialized),
            D = C === ie.Initialized,
            {
                draggable: { active: m, nodes: x, translate: M },
                droppable: { containers: k },
            } = y,
            j = m != null ? x.get(m) : null,
            I = s.useRef({ initial: null, translated: null }),
            z = s.useMemo(() => {
                var L;
                return m != null
                    ? {
                          id: m,
                          data:
                              (L = j == null ? void 0 : j.data) != null
                                  ? L
                                  : Tr,
                          rect: I,
                      }
                    : null;
            }, [m, j]),
            F = s.useRef(null),
            [ae, xe] = s.useState(null),
            [X, Q] = s.useState(null),
            P = lt(S, Object.values(S)),
            He = ct('DndDescribedBy', a),
            vt = s.useMemo(() => k.getEnabled(), [k]),
            le = Fr(b),
            {
                droppableRects: fe,
                measureDroppableContainers: Le,
                measuringScheduled: pt,
            } = mr(vt, {
                dragging: D,
                dependencies: [M.x, M.y],
                config: le.droppable,
            }),
            q = br(x, m),
            bt = s.useMemo(() => (X ? Ze(X) : null), [X]),
            yt = yn(),
            mt = xr(q, le.draggable.measure);
        Wr({
            activeNode: m != null ? x.get(m) : null,
            config: yt.layoutShiftCompensation,
            initialRect: mt,
            measure: le.draggable.measure,
        });
        const V = zt(q, le.draggable.measure, mt),
            Ue = zt(q ? q.parentElement : null),
            ce = s.useRef({
                activatorEvent: null,
                active: null,
                activeNode: q,
                collisionRect: null,
                collisions: null,
                droppableRects: fe,
                draggableNodes: x,
                draggingNode: null,
                draggingNodeRect: null,
                droppableContainers: k,
                over: null,
                scrollableAncestors: [],
                scrollAdjustedTranslate: null,
            }),
            xt = k.getNodeFor((n = ce.current.over) == null ? void 0 : n.id),
            ue = kr({ measure: le.dragOverlay.measure }),
            Oe = (r = ue.nodeRef.current) != null ? r : q,
            he = D ? ((o = ue.rect) != null ? o : V) : null,
            wt = !!(ue.nodeRef.current && ue.rect),
            Ct = Dr(wt ? null : V),
            Xe = cn(Oe ? $(Oe) : null),
            ee = Sr(D ? (xt ?? q) : null),
            Ie = jr(ee),
            ze = $r(p, {
                transform: {
                    x: M.x - Ct.x,
                    y: M.y - Ct.y,
                    scaleX: 1,
                    scaleY: 1,
                },
                activatorEvent: X,
                active: z,
                activeNodeRect: V,
                containerNodeRect: Ue,
                draggingNodeRect: he,
                over: ce.current.over,
                overlayNodeRect: ue.rect,
                scrollableAncestors: ee,
                scrollableAncestorRects: Ie,
                windowRect: Xe,
            }),
            Dt = bt ? be(bt, M) : null,
            St = Er(ee),
            dn = Bt(St),
            fn = Bt(St, [V]),
            ge = be(ze, dn),
            ve = he ? _n(he, ze) : null,
            we =
                z && ve
                    ? h({
                          active: z,
                          collisionRect: ve,
                          droppableRects: fe,
                          droppableContainers: vt,
                          pointerCoordinates: Dt,
                      })
                    : null,
            Et = Xn(we, 'id'),
            [te, Rt] = s.useState(null),
            hn = wt ? ze : be(ze, fn),
            gn = qn(
                hn,
                (i = te == null ? void 0 : te.rect) != null ? i : null,
                V
            ),
            Ye = s.useRef(null),
            Nt = s.useCallback(
                (L, W) => {
                    let { sensor: H, options: ne } = W;
                    if (F.current == null) return;
                    const Y = x.get(F.current);
                    if (!Y) return;
                    const U = L.nativeEvent,
                        G = new H({
                            active: F.current,
                            activeNode: Y,
                            event: U,
                            options: ne,
                            context: ce,
                            onAbort(T) {
                                if (!x.get(T)) return;
                                const { onDragAbort: J } = P.current,
                                    Z = { id: T };
                                J == null || J(Z),
                                    w({ type: 'onDragAbort', event: Z });
                            },
                            onPending(T, re, J, Z) {
                                if (!x.get(T)) return;
                                const { onDragPending: De } = P.current,
                                    oe = {
                                        id: T,
                                        constraint: re,
                                        initialCoordinates: J,
                                        offset: Z,
                                    };
                                De == null || De(oe),
                                    w({ type: 'onDragPending', event: oe });
                            },
                            onStart(T) {
                                const re = F.current;
                                if (re == null) return;
                                const J = x.get(re);
                                if (!J) return;
                                const { onDragStart: Z } = P.current,
                                    Ce = {
                                        activatorEvent: U,
                                        active: {
                                            id: re,
                                            data: J.data,
                                            rect: I,
                                        },
                                    };
                                Ee.unstable_batchedUpdates(() => {
                                    Z == null || Z(Ce),
                                        E(ie.Initializing),
                                        g({
                                            type: O.DragStart,
                                            initialCoordinates: T,
                                            active: re,
                                        }),
                                        w({ type: 'onDragStart', event: Ce }),
                                        xe(Ye.current),
                                        Q(U);
                                });
                            },
                            onMove(T) {
                                g({ type: O.DragMove, coordinates: T });
                            },
                            onEnd: pe(O.DragEnd),
                            onCancel: pe(O.DragCancel),
                        });
                    Ye.current = G;
                    function pe(T) {
                        return async function () {
                            const {
                                active: J,
                                collisions: Z,
                                over: Ce,
                                scrollAdjustedTranslate: De,
                            } = ce.current;
                            let oe = null;
                            if (J && De) {
                                const { cancelDrop: Se } = P.current;
                                (oe = {
                                    activatorEvent: U,
                                    active: J,
                                    collisions: Z,
                                    delta: De,
                                    over: Ce,
                                }),
                                    T === O.DragEnd &&
                                        typeof Se == 'function' &&
                                        (await Promise.resolve(Se(oe))) &&
                                        (T = O.DragCancel);
                            }
                            (F.current = null),
                                Ee.unstable_batchedUpdates(() => {
                                    g({ type: T }),
                                        E(ie.Uninitialized),
                                        Rt(null),
                                        xe(null),
                                        Q(null),
                                        (Ye.current = null);
                                    const Se =
                                        T === O.DragEnd
                                            ? 'onDragEnd'
                                            : 'onDragCancel';
                                    if (oe) {
                                        const Ke = P.current[Se];
                                        Ke == null || Ke(oe),
                                            w({ type: Se, event: oe });
                                    }
                                });
                        };
                    }
                },
                [x]
            ),
            vn = s.useCallback(
                (L, W) => (H, ne) => {
                    const Y = H.nativeEvent,
                        U = x.get(ne);
                    if (
                        F.current !== null ||
                        !U ||
                        Y.dndKit ||
                        Y.defaultPrevented
                    )
                        return;
                    const G = { active: U };
                    L(H, W.options, G) === !0 &&
                        ((Y.dndKit = { capturedBy: W.sensor }),
                        (F.current = ne),
                        Nt(H, W));
                },
                [x, Nt]
            ),
            jt = yr(u, vn);
        Rr(u),
            se(() => {
                V && C === ie.Initializing && E(ie.Initialized);
            }, [V, C]),
            s.useEffect(() => {
                const { onDragMove: L } = P.current,
                    {
                        active: W,
                        activatorEvent: H,
                        collisions: ne,
                        over: Y,
                    } = ce.current;
                if (!W || !H) return;
                const U = {
                    active: W,
                    activatorEvent: H,
                    collisions: ne,
                    delta: { x: ge.x, y: ge.y },
                    over: Y,
                };
                Ee.unstable_batchedUpdates(() => {
                    L == null || L(U), w({ type: 'onDragMove', event: U });
                });
            }, [ge.x, ge.y]),
            s.useEffect(() => {
                const {
                    active: L,
                    activatorEvent: W,
                    collisions: H,
                    droppableContainers: ne,
                    scrollAdjustedTranslate: Y,
                } = ce.current;
                if (!L || F.current == null || !W || !Y) return;
                const { onDragOver: U } = P.current,
                    G = ne.get(Et),
                    pe =
                        G && G.rect.current
                            ? {
                                  id: G.id,
                                  rect: G.rect.current,
                                  data: G.data,
                                  disabled: G.disabled,
                              }
                            : null,
                    T = {
                        active: L,
                        activatorEvent: W,
                        collisions: H,
                        delta: { x: Y.x, y: Y.y },
                        over: pe,
                    };
                Ee.unstable_batchedUpdates(() => {
                    Rt(pe),
                        U == null || U(T),
                        w({ type: 'onDragOver', event: T });
                });
            }, [Et]),
            se(() => {
                (ce.current = {
                    activatorEvent: X,
                    active: z,
                    activeNode: q,
                    collisionRect: ve,
                    collisions: we,
                    droppableRects: fe,
                    draggableNodes: x,
                    draggingNode: Oe,
                    draggingNodeRect: he,
                    droppableContainers: k,
                    over: te,
                    scrollableAncestors: ee,
                    scrollAdjustedTranslate: ge,
                }),
                    (I.current = { initial: he, translated: ve });
            }, [z, q, we, ve, x, Oe, he, fe, k, te, ee, ge]),
            gr({
                ...yt,
                delta: M,
                draggingRect: ve,
                pointerCoordinates: Dt,
                scrollableAncestors: ee,
                scrollableAncestorRects: Ie,
            });
        const pn = s.useMemo(
                () => ({
                    active: z,
                    activeNode: q,
                    activeNodeRect: V,
                    activatorEvent: X,
                    collisions: we,
                    containerNodeRect: Ue,
                    dragOverlay: ue,
                    draggableNodes: x,
                    droppableContainers: k,
                    droppableRects: fe,
                    over: te,
                    measureDroppableContainers: Le,
                    scrollableAncestors: ee,
                    scrollableAncestorRects: Ie,
                    measuringConfiguration: le,
                    measuringScheduled: pt,
                    windowRect: Xe,
                }),
                [z, q, V, X, we, Ue, ue, x, k, fe, te, Le, ee, Ie, le, pt, Xe]
            ),
            bn = s.useMemo(
                () => ({
                    activatorEvent: X,
                    activators: jt,
                    active: z,
                    activeNodeRect: V,
                    ariaDescribedById: { draggable: He },
                    dispatch: g,
                    draggableNodes: x,
                    over: te,
                    measureDroppableContainers: Le,
                }),
                [X, jt, z, V, g, He, x, te, Le]
            );
        return B.createElement(
            Vt.Provider,
            { value: N },
            B.createElement(
                gt.Provider,
                { value: bn },
                B.createElement(
                    Ir.Provider,
                    { value: pn },
                    B.createElement(un.Provider, { value: gn }, f)
                ),
                B.createElement(Br, {
                    disabled: (l == null ? void 0 : l.restoreFocus) === !1,
                })
            ),
            B.createElement(Wn, { ...l, hiddenTextDescribedById: He })
        );
        function yn() {
            const L = (ae == null ? void 0 : ae.autoScrollEnabled) === !1,
                W = typeof c == 'object' ? c.enabled === !1 : c === !1,
                H = D && !L && !W;
            return typeof c == 'object' ? { ...c, enabled: H } : { enabled: H };
        }
    }),
    Ur = s.createContext(null),
    Ft = 'button',
    Xr = 'Draggable';
function Yr(e) {
    let { id: t, data: n, disabled: r = !1, attributes: o } = e;
    const i = ct(Xr),
        {
            activators: a,
            activatorEvent: l,
            active: c,
            activeNodeRect: f,
            ariaDescribedById: u,
            draggableNodes: h,
            over: b,
        } = s.useContext(gt),
        {
            role: p = Ft,
            roleDescription: S = 'draggable',
            tabIndex: v = 0,
        } = o ?? {},
        y = (c == null ? void 0 : c.id) === t,
        g = s.useContext(y ? un : Ur),
        [w, N] = Je(),
        [C, E] = Je(),
        D = Nr(a, t),
        m = lt(n);
    se(
        () => (
            h.set(t, { id: t, key: i, node: w, activatorNode: C, data: m }),
            () => {
                const M = h.get(t);
                M && M.key === i && h.delete(t);
            }
        ),
        [h, t]
    );
    const x = s.useMemo(
        () => ({
            role: p,
            tabIndex: v,
            'aria-disabled': r,
            'aria-pressed': y && p === Ft ? !0 : void 0,
            'aria-roledescription': S,
            'aria-describedby': u.draggable,
        }),
        [r, p, v, y, S, u.draggable]
    );
    return {
        active: c,
        activatorEvent: l,
        activeNodeRect: f,
        attributes: x,
        isDragging: y,
        listeners: r ? void 0 : D,
        node: w,
        over: b,
        setNodeRef: N,
        setActivatorNodeRef: E,
        transform: g,
    };
}
const Wt = 40,
    Ht = 40,
    Kr = ({ element: e, selected: t, onSelect: n }) => {
        var w, N;
        const { removeElement: r, updateElement: o } = ot(),
            [i, a] = B.useState(!1),
            [l, c] = B.useState(e.content || ''),
            [f, u] = B.useState(!1),
            {
                attributes: h,
                listeners: b,
                setNodeRef: p,
                transform: S,
            } = Yr({ id: e.id }),
            v = (C) => {
                var j, I;
                C.stopPropagation(), u(!0);
                const E = C.clientX,
                    D = C.clientY,
                    m = ((j = e.size) == null ? void 0 : j.width) || 120,
                    x = ((I = e.size) == null ? void 0 : I.height) || 120,
                    M = (z) => {
                        const F = Math.max(Wt, m + (z.clientX - E)),
                            ae = Math.max(Ht, x + (z.clientY - D));
                        o(e.id, { size: { width: F, height: ae } });
                    },
                    k = () => {
                        u(!1),
                            window.removeEventListener('mousemove', M),
                            window.removeEventListener('mouseup', k);
                    };
                window.addEventListener('mousemove', M),
                    window.addEventListener('mouseup', k);
            },
            y = () => {
                var C, E, D, m, x, M, k, j, I, z, F, ae, xe, X;
                switch (e.type) {
                    case 'text':
                        return i
                            ? d.jsx('textarea', {
                                  value: l,
                                  onChange: (P) => c(P.target.value),
                                  onBlur: () => {
                                      o(e.id, { content: l }), a(!1);
                                  },
                                  onKeyDown: (P) => {
                                      P.key === 'Enter' &&
                                          !P.shiftKey &&
                                          (P.preventDefault(),
                                          o(e.id, { content: l }),
                                          a(!1));
                                  },
                                  autoFocus: !0,
                                  className:
                                      'w-full resize-none border-none bg-transparent text-white outline-none',
                                  style: {
                                      fontSize:
                                          (C = e.size) != null && C.height
                                              ? `${Math.max(16, e.size.height / 2.5)}px`
                                              : '32px',
                                      color:
                                          ((E = e.style) == null
                                              ? void 0
                                              : E.color) || '#ffffff',
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
                                          ((M = e.style) == null
                                              ? void 0
                                              : M.textDecoration) || 'none',
                                      minHeight: 32,
                                      minWidth: 80,
                                      height: '100%',
                                      width: '100%',
                                  },
                                  rows: 2,
                              })
                            : d.jsx('p', {
                                  onClick: (P) => {
                                      P.stopPropagation(), n && n();
                                  },
                                  onDoubleClick: () => a(!0),
                                  className: 'cursor-text whitespace-pre-wrap',
                                  style: {
                                      fontSize:
                                          (k = e.size) != null && k.height
                                              ? `${Math.max(16, e.size.height / 2.5)}px`
                                              : '32px',
                                      color:
                                          ((j = e.style) == null
                                              ? void 0
                                              : j.color) || '#ffffff',
                                      fontFamily:
                                          (I = e.style) == null
                                              ? void 0
                                              : I.font,
                                      fontWeight:
                                          ((z = e.style) == null
                                              ? void 0
                                              : z.fontWeight) || 'normal',
                                      fontStyle:
                                          ((F = e.style) == null
                                              ? void 0
                                              : F.fontStyle) || 'normal',
                                      textDecoration:
                                          ((ae = e.style) == null
                                              ? void 0
                                              : ae.textDecoration) || 'none',
                                      minHeight: 32,
                                      minWidth: 80,
                                      height: '100%',
                                      width: '100%',
                                  },
                                  children: e.content,
                              });
                    case 'image':
                    case 'gif':
                        return d.jsx('img', {
                            src: e.content,
                            alt: e.type,
                            className: 'rounded-lg object-contain',
                            style: {
                                width: '100%',
                                height: '100%',
                                filter:
                                    (xe = e.style) == null ? void 0 : xe.filter,
                                pointerEvents: 'none',
                            },
                            draggable: !1,
                        });
                    case 'sticker':
                        return d.jsx('div', {
                            className:
                                'flex items-center justify-center text-6xl',
                            style: {
                                filter:
                                    (X = e.style) == null ? void 0 : X.filter,
                                width: '100%',
                                height: '100%',
                            },
                            children: e.content,
                        });
                    case 'emoji':
                        return d.jsx('div', {
                            className:
                                'flex items-center justify-center text-4xl',
                            style: { width: '100%', height: '100%' },
                            children: e.content,
                        });
                    case 'effect':
                        let Q = '';
                        switch (e.effect) {
                            case 'tears':
                                Q = 'effect-block animate-tears';
                                break;
                            case 'sparkles':
                                Q = 'effect-block animate-sparkles';
                                break;
                            case 'cringe':
                                Q = 'effect-block animate-cringe';
                                break;
                            case 'cry':
                                Q = 'effect-block animate-cry';
                                break;
                            default:
                                Q = 'effect-block';
                        }
                        return d.jsx('div', {
                            className: Q,
                            style: { width: '100%', height: '100%' },
                        });
                    default:
                        return null;
                }
            },
            g = () =>
                e.type === 'image' ||
                e.type === 'gif' ||
                e.type === 'effect' ||
                e.type === 'sticker' ||
                e.type === 'emoji'
                    ? 'w-full h-full flex items-center justify-center'
                    : 'w-full h-full';
        return d.jsx(de.div, {
            ref: p,
            className: `group absolute z-10 cursor-grab ${t ? 'ring-2 ring-blue-400' : ''}`,
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            whileHover: { scale: 1.02 },
            style: {
                left: e.position.x,
                top: e.position.y,
                width: ((w = e.size) == null ? void 0 : w.width) || 120,
                height: ((N = e.size) == null ? void 0 : N.height) || 120,
                minWidth: Wt,
                minHeight: Ht,
                transform: S ? `translate3d(${S.x}px, ${S.y}px, 0)` : void 0,
                userSelect: f ? 'none' : void 0,
            },
            ...h,
            onClick: (C) => {
                C.stopPropagation(), n && n();
            },
            children: d.jsxs('div', {
                className: 'relative h-full w-full',
                children: [
                    d.jsx('div', {
                        className:
                            'absolute -top-3 -right-3 cursor-pointer rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                        onClick: (C) => {
                            C.stopPropagation(), r(e.id);
                        },
                        children: d.jsx(Xt, { size: 14 }),
                    }),
                    d.jsx('div', {
                        className:
                            'absolute -top-3 -left-3 rounded-full bg-gray-800 p-1 text-white opacity-0 group-hover:opacity-100',
                        ...b,
                        children: d.jsx(Sn, { size: 14 }),
                    }),
                    d.jsx('div', { className: g(), children: y() }),
                    d.jsx('div', {
                        className:
                            'absolute right-1 bottom-1 z-20 flex h-5 w-5 cursor-se-resize items-center justify-center rounded border border-gray-400 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                        onMouseDown: v,
                        style: { touchAction: 'none' },
                        children: d.jsx(Rn, {
                            size: 16,
                            className: 'text-gray-500',
                        }),
                    }),
                ],
            }),
        });
    },
    Ut = () => {
        var h, b, p, S, v, y;
        const { farewellPage: e, moveElement: t, updateElement: n } = ot(),
            [r, o] = s.useState(null);
        s.useEffect(() => {
            const g = (w) => {
                w.key === 'Escape' && r && o(null);
            };
            return (
                document.addEventListener('keydown', g),
                () => document.removeEventListener('keydown', g)
            );
        }, [r]);
        const i = kt(sn, { activationConstraint: { distance: 8 } }),
            a = kt(an, { activationConstraint: { delay: 250, tolerance: 5 } }),
            l = Hn(i, a),
            c = (g) => {
                const { active: w, delta: N } = g,
                    C = w.id,
                    E = e.elements.find((D) => D.id === C);
                if (E && E.position) {
                    const D = { x: E.position.x + N.x, y: E.position.y + N.y };
                    t(C, D);
                }
            },
            f = () =>
                typeof e.background == 'object' &&
                e.background.type === 'custom-image'
                    ? {
                          backgroundImage: `url(${e.background.url})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }
                    : {},
            u = e.elements.find((g) => g.id === r);
        return d.jsx(Hr, {
            sensors: l,
            onDragEnd: c,
            measuring: { droppable: { strategy: 'always' } },
            children: d.jsx('div', {
                id: 'farewell-canvas',
                className: `relative h-[80vh] w-full overflow-hidden rounded-2xl border-4 border-white/20 shadow-xl ${typeof e.background == 'string' ? e.background : ''}`,
                style: f(),
                onMouseDown: (g) => {
                    (g.target === g.currentTarget ||
                        g.target.classList.contains('noisy-bg')) &&
                        o(null);
                },
                children: d.jsxs('div', {
                    className: 'noisy-bg h-full w-full',
                    children: [
                        e.elements.map((g) =>
                            d.jsx(
                                Kr,
                                {
                                    element: g,
                                    selected: r === g.id,
                                    onSelect: () => o(g.id),
                                },
                                g.id
                            )
                        ),
                        (u == null ? void 0 : u.type) === 'text' &&
                            d.jsxs(de.div, {
                                initial: { opacity: 0, y: -10 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -10 },
                                className:
                                    'absolute z-50 rounded-lg border border-gray-200 bg-white shadow-xl',
                                style: {
                                    left: Math.max(
                                        10,
                                        Math.min(
                                            u.position.x +
                                                (((h = u.size) == null
                                                    ? void 0
                                                    : h.width) || 120) /
                                                    2 -
                                                150,
                                            window.innerWidth - 310
                                        )
                                    ),
                                    top: Math.max(10, u.position.y - 60),
                                },
                                onClick: (g) => g.stopPropagation(),
                                children: [
                                    d.jsxs('div', {
                                        className:
                                            'flex items-center justify-between border-b border-gray-100 px-3 py-2',
                                        children: [
                                            d.jsx('span', {
                                                className:
                                                    'text-sm font-medium text-gray-700',
                                                children: 'Text Formatting',
                                            }),
                                            d.jsx('button', {
                                                onClick: () => o(null),
                                                className:
                                                    'text-gray-400 transition-colors hover:text-gray-600',
                                                children: d.jsx(Xt, {
                                                    size: 16,
                                                }),
                                            }),
                                        ],
                                    }),
                                    d.jsxs('div', {
                                        className:
                                            'flex items-center gap-2 p-3',
                                        children: [
                                            d.jsxs('select', {
                                                value:
                                                    ((b = u.style) == null
                                                        ? void 0
                                                        : b.font) || 'Arial',
                                                onChange: (g) =>
                                                    n(u.id, {
                                                        style: {
                                                            ...(u.style || {}),
                                                            font: g.target
                                                                .value,
                                                        },
                                                    }),
                                                className:
                                                    'cursor-pointer rounded border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-700 transition-colors hover:bg-white focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none',
                                                children: [
                                                    d.jsx('option', {
                                                        value: 'Arial',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Arial',
                                                    }),
                                                    d.jsx('option', {
                                                        value: 'Georgia',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Georgia',
                                                    }),
                                                    d.jsx('option', {
                                                        value: 'Comic Sans MS',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Comic Sans',
                                                    }),
                                                    d.jsx('option', {
                                                        value: 'Impact',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Impact',
                                                    }),
                                                    d.jsx('option', {
                                                        value: 'Helvetica',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Helvetica',
                                                    }),
                                                    d.jsx('option', {
                                                        value: 'Times New Roman',
                                                        className:
                                                            'bg-white text-gray-700',
                                                        children: 'Times',
                                                    }),
                                                ],
                                            }),
                                            d.jsx('div', {
                                                className:
                                                    'h-6 w-px bg-gray-300',
                                            }),
                                            d.jsxs('div', {
                                                className:
                                                    'flex items-center gap-1',
                                                children: [
                                                    d.jsx('span', {
                                                        className:
                                                            'text-xs text-gray-600',
                                                        children: 'Color:',
                                                    }),
                                                    d.jsx('input', {
                                                        type: 'color',
                                                        value:
                                                            ((p = u.style) ==
                                                            null
                                                                ? void 0
                                                                : p.color) ||
                                                            '#ffffff',
                                                        onChange: (g) =>
                                                            n(u.id, {
                                                                style: {
                                                                    ...(u.style ||
                                                                        {}),
                                                                    color: g
                                                                        .target
                                                                        .value,
                                                                },
                                                            }),
                                                        className:
                                                            'h-8 w-8 cursor-pointer rounded border border-gray-300',
                                                    }),
                                                ],
                                            }),
                                            d.jsx('div', {
                                                className:
                                                    'h-6 w-px bg-gray-300',
                                            }),
                                            d.jsxs('div', {
                                                className: 'flex gap-1',
                                                children: [
                                                    d.jsx('button', {
                                                        className: `flex h-8 w-8 items-center justify-center rounded text-sm font-bold transition-colors ${((S = u.style) == null ? void 0 : S.fontWeight) === 'bold' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                        onClick: () => {
                                                            var g;
                                                            return n(u.id, {
                                                                style: {
                                                                    ...(u.style ||
                                                                        {}),
                                                                    fontWeight:
                                                                        ((g =
                                                                            u.style) ==
                                                                        null
                                                                            ? void 0
                                                                            : g.fontWeight) ===
                                                                        'bold'
                                                                            ? 'normal'
                                                                            : 'bold',
                                                                },
                                                            });
                                                        },
                                                        children: 'B',
                                                    }),
                                                    d.jsx('button', {
                                                        className: `flex h-8 w-8 items-center justify-center rounded text-sm italic transition-colors ${((v = u.style) == null ? void 0 : v.fontStyle) === 'italic' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                        onClick: () => {
                                                            var g;
                                                            return n(u.id, {
                                                                style: {
                                                                    ...(u.style ||
                                                                        {}),
                                                                    fontStyle:
                                                                        ((g =
                                                                            u.style) ==
                                                                        null
                                                                            ? void 0
                                                                            : g.fontStyle) ===
                                                                        'italic'
                                                                            ? 'normal'
                                                                            : 'italic',
                                                                },
                                                            });
                                                        },
                                                        children: 'I',
                                                    }),
                                                    d.jsx('button', {
                                                        className: `flex h-8 w-8 items-center justify-center rounded text-sm underline transition-colors ${((y = u.style) == null ? void 0 : y.textDecoration) === 'underline' ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                        onClick: () => {
                                                            var g;
                                                            return n(u.id, {
                                                                style: {
                                                                    ...(u.style ||
                                                                        {}),
                                                                    textDecoration:
                                                                        ((g =
                                                                            u.style) ==
                                                                        null
                                                                            ? void 0
                                                                            : g.textDecoration) ===
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
                                    d.jsx('div', {
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
                            d.jsx(de.div, {
                                className:
                                    'pointer-events-none absolute inset-0 flex items-center justify-center px-8 text-center text-white/50',
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { delay: 0.5 },
                                children: d.jsx('p', {
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
    Gr = () => {
        var l;
        const { farewellPage: e, setBackground: t } = ot(),
            n = s.useRef(null),
            [r, o] = s.useState(!1),
            i = [
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
            a = (c) => {
                const f = c.target.files[0];
                if (f) {
                    const u = URL.createObjectURL(f);
                    t({ type: 'custom-image', url: u });
                }
            };
        return d.jsxs('div', {
            className: 'flex flex-1 flex-col overflow-hidden p-4',
            children: [
                r &&
                    d.jsx('div', {
                        className:
                            'fixed inset-0 z-50 flex items-center justify-center bg-black/70',
                        children: d.jsxs('div', {
                            className:
                                'relative flex h-[90vh] max-h-[90vh] w-[90vw] max-w-6xl flex-col rounded-xl bg-white p-4 shadow-2xl',
                            children: [
                                d.jsx('button', {
                                    className:
                                        'absolute top-4 right-6 z-10 text-3xl text-gray-600 hover:text-black',
                                    onClick: () => o(!1),
                                    'aria-label': 'Close preview',
                                    children: '×',
                                }),
                                d.jsx('div', {
                                    className:
                                        'flex-1 overflow-auto rounded-lg bg-gray-100 p-4',
                                    children: d.jsx(Ut, { previewMode: !0 }),
                                }),
                            ],
                        }),
                    }),
                d.jsx('div', {
                    className: 'glass-panel mb-4 border-purple-500/30 p-4',
                    children: d.jsxs('div', {
                        className: 'flex items-center justify-between',
                        children: [
                            d.jsx('h2', {
                                className:
                                    'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent',
                                children: e.tone
                                    ? `${e.tone.charAt(0).toUpperCase() + e.tone.slice(1)} Farewell`
                                    : 'Your Farewell Page',
                            }),
                            d.jsxs('div', {
                                className: 'flex items-center gap-2',
                                children: [
                                    d.jsxs('div', {
                                        className: 'group relative',
                                        children: [
                                            d.jsxs(de.button, {
                                                className:
                                                    'glass-button flex items-center gap-2 p-2',
                                                whileHover: { scale: 1.05 },
                                                whileTap: { scale: 0.95 },
                                                children: [
                                                    d.jsx(xn, {
                                                        className: 'h-4 w-4',
                                                    }),
                                                    d.jsx('span', {
                                                        children: 'Themes',
                                                    }),
                                                ],
                                            }),
                                            d.jsx('div', {
                                                className:
                                                    'invisible absolute right-0 z-10 mt-2 w-56 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100',
                                                children: d.jsxs('div', {
                                                    className:
                                                        'glass-panel p-2 shadow-xl',
                                                    children: [
                                                        d.jsx('div', {
                                                            className:
                                                                'grid grid-cols-1 gap-2',
                                                            children: i.map(
                                                                (c) => {
                                                                    var f;
                                                                    return d.jsxs(
                                                                        de.button,
                                                                        {
                                                                            onClick:
                                                                                () =>
                                                                                    t(
                                                                                        c.value
                                                                                    ),
                                                                            whileHover:
                                                                                {
                                                                                    scale: 1.03,
                                                                                },
                                                                            className: `flex items-center gap-3 rounded-lg p-2 transition-colors ${(typeof e.background == 'string' ? e.background === c.value : ((f = e.background) == null ? void 0 : f.type) === c.value) ? 'border-gradient-to-r border bg-white/10 from-purple-400 to-blue-400' : 'hover:bg-white/10'}`,
                                                                            children:
                                                                                [
                                                                                    d.jsx(
                                                                                        'div',
                                                                                        {
                                                                                            className: `h-5 w-5 rounded-full ${c.preview}`,
                                                                                            children:
                                                                                                c.value ===
                                                                                                    'custom-image' &&
                                                                                                d.jsx(
                                                                                                    wn,
                                                                                                    {
                                                                                                        className:
                                                                                                            'mx-auto my-auto h-4 w-4 text-gray-500',
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                                    d.jsx(
                                                                                        'span',
                                                                                        {
                                                                                            children:
                                                                                                c.name,
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        },
                                                                        c.value
                                                                    );
                                                                }
                                                            ),
                                                        }),
                                                        (e.background ===
                                                            'custom-image' ||
                                                            ((l =
                                                                e.background) ==
                                                            null
                                                                ? void 0
                                                                : l.type) ===
                                                                'custom-image') &&
                                                            d.jsx('div', {
                                                                className:
                                                                    'mt-2',
                                                                children: d.jsx(
                                                                    'input',
                                                                    {
                                                                        ref: n,
                                                                        type: 'file',
                                                                        accept: 'image/*',
                                                                        onChange:
                                                                            a,
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
                                    d.jsxs(de.button, {
                                        className:
                                            'flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-medium',
                                        whileHover: { scale: 1.05 },
                                        whileTap: { scale: 0.95 },
                                        onClick: () => o(!0),
                                        children: [
                                            d.jsx(Cn, { className: 'h-4 w-4' }),
                                            'Preview',
                                        ],
                                    }),
                                    d.jsxs(de.button, {
                                        className:
                                            'flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-medium',
                                        whileHover: { scale: 1.05 },
                                        whileTap: { scale: 0.95 },
                                        children: [
                                            d.jsx(jn, { className: 'h-4 w-4' }),
                                            'Publish',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                d.jsx('div', {
                    className:
                        'glass-panel custom-scrollbar flex-1 overflow-auto p-6',
                    children: d.jsx(Ut, {}),
                }),
            ],
        });
    };
export { Gr as default };
