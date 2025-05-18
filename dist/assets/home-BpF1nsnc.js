import {
    n as So,
    o as Bs,
    p as jo,
    r as O,
    q as Co,
    s as Mo,
    t as No,
    v as Eo,
    w as Tn,
    e as ts,
    j as i,
    m as Ee,
    A as mn,
    x as To,
} from './index-DwbPX98K.js';
import { u as Mn } from './useTranslation-B7Ddawmm.js';
import { B as Po } from './index-BcdMkzvf.js';
import { g as Lr } from './index-D3jsOSc0.js';
import { i as Qr } from './auth1-DlM34e_H.js';
import './index-fdT-esFM.js';
function Ao(...t) {
    const e = !Array.isArray(t[0]),
        s = e ? 0 : -1,
        r = t[0 + s],
        n = t[1 + s],
        o = t[2 + s],
        a = t[3 + s],
        l = So(n, o, a);
    return e ? l(r) : l;
}
function Yn(t) {
    const e = Bs(() => jo(t)),
        { isStatic: s } = O.useContext(Co);
    if (s) {
        const [, r] = O.useState(t);
        O.useEffect(() => e.on('change', r), []);
    }
    return e;
}
function Fs(t, e) {
    const s = Yn(e()),
        r = () => s.set(e());
    return (
        r(),
        Mo(() => {
            const n = () => No.preRender(r, !1, !0),
                o = t.map((a) => a.on('change', n));
            return () => {
                o.forEach((a) => a()), Eo(r);
            };
        }),
        s
    );
}
function zo(t) {
    (Tn.current = []), t();
    const e = Fs(Tn.current, t);
    return (Tn.current = void 0), e;
}
function Zr(t, e, s, r) {
    if (typeof t == 'function') return zo(t);
    const n = typeof e == 'function' ? e : Ao(e, s, r);
    return Array.isArray(t) ? ps(t, n) : ps([t], ([o]) => n(o));
}
function ps(t, e) {
    const s = Bs(() => []);
    return Fs(t, () => {
        s.length = 0;
        const r = t.length;
        for (let n = 0; n < r; n++) s[n] = t[n].get();
        return e(s);
    });
}
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ro = [
        ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
        ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
    ],
    Oo = ts('arrow-left', Ro);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Io = [
        ['path', { d: 'M5 12h14', key: '1ays0h' }],
        ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
    ],
    Ys = ts('arrow-right', Io);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lo = [
        [
            'path',
            {
                d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
                key: 'r04s7s',
            },
        ],
    ],
    Pn = ts('star', Lo);
function Xs(t) {
    var e,
        s,
        r = '';
    if (typeof t == 'string' || typeof t == 'number') r += t;
    else if (typeof t == 'object')
        if (Array.isArray(t)) {
            var n = t.length;
            for (e = 0; e < n; e++)
                t[e] && (s = Xs(t[e])) && (r && (r += ' '), (r += s));
        } else for (s in t) t[s] && (r && (r += ' '), (r += s));
    return r;
}
function Do() {
    for (var t, e, s = 0, r = '', n = arguments.length; s < n; s++)
        (t = arguments[s]) && (e = Xs(t)) && (r && (r += ' '), (r += e));
    return r;
}
const rs = '-',
    Bo = (t) => {
        const e = Yo(t),
            { conflictingClassGroups: s, conflictingClassGroupModifiers: r } =
                t;
        return {
            getClassGroupId: (a) => {
                const l = a.split(rs);
                return (
                    l[0] === '' && l.length !== 1 && l.shift(),
                    Gs(l, e) || Fo(a)
                );
            },
            getConflictingClassGroupIds: (a, l) => {
                const d = s[a] || [];
                return l && r[a] ? [...d, ...r[a]] : d;
            },
        };
    },
    Gs = (t, e) => {
        var a;
        if (t.length === 0) return e.classGroupId;
        const s = t[0],
            r = e.nextPart.get(s),
            n = r ? Gs(t.slice(1), r) : void 0;
        if (n) return n;
        if (e.validators.length === 0) return;
        const o = t.join(rs);
        return (a = e.validators.find(({ validator: l }) => l(o))) == null
            ? void 0
            : a.classGroupId;
    },
    fs = /^\[(.+)\]$/,
    Fo = (t) => {
        if (fs.test(t)) {
            const e = fs.exec(t)[1],
                s = e == null ? void 0 : e.substring(0, e.indexOf(':'));
            if (s) return 'arbitrary..' + s;
        }
    },
    Yo = (t) => {
        const { theme: e, classGroups: s } = t,
            r = { nextPart: new Map(), validators: [] };
        for (const n in s) Xn(s[n], r, n, e);
        return r;
    },
    Xn = (t, e, s, r) => {
        t.forEach((n) => {
            if (typeof n == 'string') {
                const o = n === '' ? e : hs(e, n);
                o.classGroupId = s;
                return;
            }
            if (typeof n == 'function') {
                if (Xo(n)) {
                    Xn(n(r), e, s, r);
                    return;
                }
                e.validators.push({ validator: n, classGroupId: s });
                return;
            }
            Object.entries(n).forEach(([o, a]) => {
                Xn(a, hs(e, o), s, r);
            });
        });
    },
    hs = (t, e) => {
        let s = t;
        return (
            e.split(rs).forEach((r) => {
                s.nextPart.has(r) ||
                    s.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (s = s.nextPart.get(r));
            }),
            s
        );
    },
    Xo = (t) => t.isThemeGetter,
    Go = (t) => {
        if (t < 1) return { get: () => {}, set: () => {} };
        let e = 0,
            s = new Map(),
            r = new Map();
        const n = (o, a) => {
            s.set(o, a), e++, e > t && ((e = 0), (r = s), (s = new Map()));
        };
        return {
            get(o) {
                let a = s.get(o);
                if (a !== void 0) return a;
                if ((a = r.get(o)) !== void 0) return n(o, a), a;
            },
            set(o, a) {
                s.has(o) ? s.set(o, a) : n(o, a);
            },
        };
    },
    Gn = '!',
    qn = ':',
    qo = qn.length,
    Ho = (t) => {
        const { prefix: e, experimentalParseClassName: s } = t;
        let r = (n) => {
            const o = [];
            let a = 0,
                l = 0,
                d = 0,
                h;
            for (let x = 0; x < n.length; x++) {
                let L = n[x];
                if (a === 0 && l === 0) {
                    if (L === qn) {
                        o.push(n.slice(d, x)), (d = x + qo);
                        continue;
                    }
                    if (L === '/') {
                        h = x;
                        continue;
                    }
                }
                L === '['
                    ? a++
                    : L === ']'
                      ? a--
                      : L === '('
                        ? l++
                        : L === ')' && l--;
            }
            const v = o.length === 0 ? n : n.substring(d),
                j = Vo(v),
                m = j !== v,
                p = h && h > d ? h - d : void 0;
            return {
                modifiers: o,
                hasImportantModifier: m,
                baseClassName: j,
                maybePostfixModifierPosition: p,
            };
        };
        if (e) {
            const n = e + qn,
                o = r;
            r = (a) =>
                a.startsWith(n)
                    ? o(a.substring(n.length))
                    : {
                          isExternal: !0,
                          modifiers: [],
                          hasImportantModifier: !1,
                          baseClassName: a,
                          maybePostfixModifierPosition: void 0,
                      };
        }
        if (s) {
            const n = r;
            r = (o) => s({ className: o, parseClassName: n });
        }
        return r;
    },
    Vo = (t) =>
        t.endsWith(Gn)
            ? t.substring(0, t.length - 1)
            : t.startsWith(Gn)
              ? t.substring(1)
              : t,
    Wo = (t) => {
        const e = Object.fromEntries(
            t.orderSensitiveModifiers.map((r) => [r, !0])
        );
        return (r) => {
            if (r.length <= 1) return r;
            const n = [];
            let o = [];
            return (
                r.forEach((a) => {
                    a[0] === '[' || e[a]
                        ? (n.push(...o.sort(), a), (o = []))
                        : o.push(a);
                }),
                n.push(...o.sort()),
                n
            );
        };
    },
    $o = (t) => ({
        cache: Go(t.cacheSize),
        parseClassName: Ho(t),
        sortModifiers: Wo(t),
        ...Bo(t),
    }),
    Uo = /\s+/,
    Jo = (t, e) => {
        const {
                parseClassName: s,
                getClassGroupId: r,
                getConflictingClassGroupIds: n,
                sortModifiers: o,
            } = e,
            a = [],
            l = t.trim().split(Uo);
        let d = '';
        for (let h = l.length - 1; h >= 0; h -= 1) {
            const v = l[h],
                {
                    isExternal: j,
                    modifiers: m,
                    hasImportantModifier: p,
                    baseClassName: x,
                    maybePostfixModifierPosition: L,
                } = s(v);
            if (j) {
                d = v + (d.length > 0 ? ' ' + d : d);
                continue;
            }
            let Y = !!L,
                U = r(Y ? x.substring(0, L) : x);
            if (!U) {
                if (!Y) {
                    d = v + (d.length > 0 ? ' ' + d : d);
                    continue;
                }
                if (((U = r(x)), !U)) {
                    d = v + (d.length > 0 ? ' ' + d : d);
                    continue;
                }
                Y = !1;
            }
            const $ = o(m).join(':'),
                K = p ? $ + Gn : $,
                M = K + U;
            if (a.includes(M)) continue;
            a.push(M);
            const xe = n(U, Y);
            for (let D = 0; D < xe.length; ++D) {
                const k = xe[D];
                a.push(K + k);
            }
            d = v + (d.length > 0 ? ' ' + d : d);
        }
        return d;
    };
function Ko() {
    let t = 0,
        e,
        s,
        r = '';
    for (; t < arguments.length; )
        (e = arguments[t++]) && (s = qs(e)) && (r && (r += ' '), (r += s));
    return r;
}
const qs = (t) => {
    if (typeof t == 'string') return t;
    let e,
        s = '';
    for (let r = 0; r < t.length; r++)
        t[r] && (e = qs(t[r])) && (s && (s += ' '), (s += e));
    return s;
};
function Qo(t, ...e) {
    let s,
        r,
        n,
        o = a;
    function a(d) {
        const h = e.reduce((v, j) => j(v), t());
        return (s = $o(h)), (r = s.cache.get), (n = s.cache.set), (o = l), l(d);
    }
    function l(d) {
        const h = r(d);
        if (h) return h;
        const v = Jo(d, s);
        return n(d, v), v;
    }
    return function () {
        return o(Ko.apply(null, arguments));
    };
}
const Ae = (t) => {
        const e = (s) => s[t] || [];
        return (e.isThemeGetter = !0), e;
    },
    Hs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Vs = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    Zo = /^\d+\/\d+$/,
    ei = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    ti =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    ri = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    ni = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    si =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ur = (t) => Zo.test(t),
    B = (t) => !!t && !Number.isNaN(Number(t)),
    Bt = (t) => !!t && Number.isInteger(Number(t)),
    An = (t) => t.endsWith('%') && B(t.slice(0, -1)),
    Pt = (t) => ei.test(t),
    oi = () => !0,
    ii = (t) => ti.test(t) && !ri.test(t),
    Ws = () => !1,
    ai = (t) => ni.test(t),
    li = (t) => si.test(t),
    ci = (t) => !w(t) && !_(t),
    ui = (t) => yr(t, Js, Ws),
    w = (t) => Hs.test(t),
    Jt = (t) => yr(t, Ks, ii),
    zn = (t) => yr(t, mi, B),
    ms = (t) => yr(t, $s, Ws),
    di = (t) => yr(t, Us, li),
    en = (t) => yr(t, Qs, ai),
    _ = (t) => Vs.test(t),
    Cr = (t) => wr(t, Ks),
    pi = (t) => wr(t, gi),
    gs = (t) => wr(t, $s),
    fi = (t) => wr(t, Js),
    hi = (t) => wr(t, Us),
    tn = (t) => wr(t, Qs, !0),
    yr = (t, e, s) => {
        const r = Hs.exec(t);
        return r ? (r[1] ? e(r[1]) : s(r[2])) : !1;
    },
    wr = (t, e, s = !1) => {
        const r = Vs.exec(t);
        return r ? (r[1] ? e(r[1]) : s) : !1;
    },
    $s = (t) => t === 'position' || t === 'percentage',
    Us = (t) => t === 'image' || t === 'url',
    Js = (t) => t === 'length' || t === 'size' || t === 'bg-size',
    Ks = (t) => t === 'length',
    mi = (t) => t === 'number',
    gi = (t) => t === 'family-name',
    Qs = (t) => t === 'shadow',
    xi = () => {
        const t = Ae('color'),
            e = Ae('font'),
            s = Ae('text'),
            r = Ae('font-weight'),
            n = Ae('tracking'),
            o = Ae('leading'),
            a = Ae('breakpoint'),
            l = Ae('container'),
            d = Ae('spacing'),
            h = Ae('radius'),
            v = Ae('shadow'),
            j = Ae('inset-shadow'),
            m = Ae('text-shadow'),
            p = Ae('drop-shadow'),
            x = Ae('blur'),
            L = Ae('perspective'),
            Y = Ae('aspect'),
            U = Ae('ease'),
            $ = Ae('animate'),
            K = () => [
                'auto',
                'avoid',
                'all',
                'avoid-page',
                'page',
                'left',
                'right',
                'column',
            ],
            M = () => [
                'center',
                'top',
                'bottom',
                'left',
                'right',
                'top-left',
                'left-top',
                'top-right',
                'right-top',
                'bottom-right',
                'right-bottom',
                'bottom-left',
                'left-bottom',
            ],
            xe = () => [...M(), _, w],
            D = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
            k = () => ['auto', 'contain', 'none'],
            b = () => [_, w, d],
            Q = () => [ur, 'full', 'auto', ...b()],
            S = () => [Bt, 'none', 'subgrid', _, w],
            fe = () => ['auto', { span: ['full', Bt, _, w] }, Bt, _, w],
            C = () => [Bt, 'auto', _, w],
            ot = () => ['auto', 'min', 'max', 'fr', _, w],
            ae = () => [
                'start',
                'end',
                'center',
                'between',
                'around',
                'evenly',
                'stretch',
                'baseline',
                'center-safe',
                'end-safe',
            ],
            de = () => [
                'start',
                'end',
                'center',
                'stretch',
                'center-safe',
                'end-safe',
            ],
            te = () => ['auto', ...b()],
            X = () => [
                ur,
                'auto',
                'full',
                'dvw',
                'dvh',
                'lvw',
                'lvh',
                'svw',
                'svh',
                'min',
                'max',
                'fit',
                ...b(),
            ],
            f = () => [t, _, w],
            re = () => [...M(), gs, ms, { position: [_, w] }],
            c = () => [
                'no-repeat',
                { repeat: ['', 'x', 'y', 'space', 'round'] },
            ],
            le = () => ['auto', 'cover', 'contain', fi, ui, { size: [_, w] }],
            be = () => [An, Cr, Jt],
            se = () => ['', 'none', 'full', h, _, w],
            ee = () => ['', B, Cr, Jt],
            we = () => ['solid', 'dashed', 'dotted', 'double'],
            ve = () => [
                'normal',
                'multiply',
                'screen',
                'overlay',
                'darken',
                'lighten',
                'color-dodge',
                'color-burn',
                'hard-light',
                'soft-light',
                'difference',
                'exclusion',
                'hue',
                'saturation',
                'color',
                'luminosity',
            ],
            A = () => [B, An, gs, ms],
            Ce = () => ['', 'none', x, _, w],
            pe = () => ['none', B, _, w],
            Xe = () => ['none', B, _, w],
            ne = () => [B, _, w],
            _e = () => [ur, 'full', ...b()];
        return {
            cacheSize: 500,
            theme: {
                animate: ['spin', 'ping', 'pulse', 'bounce'],
                aspect: ['video'],
                blur: [Pt],
                breakpoint: [Pt],
                color: [oi],
                container: [Pt],
                'drop-shadow': [Pt],
                ease: ['in', 'out', 'in-out'],
                font: [ci],
                'font-weight': [
                    'thin',
                    'extralight',
                    'light',
                    'normal',
                    'medium',
                    'semibold',
                    'bold',
                    'extrabold',
                    'black',
                ],
                'inset-shadow': [Pt],
                leading: [
                    'none',
                    'tight',
                    'snug',
                    'normal',
                    'relaxed',
                    'loose',
                ],
                perspective: [
                    'dramatic',
                    'near',
                    'normal',
                    'midrange',
                    'distant',
                    'none',
                ],
                radius: [Pt],
                shadow: [Pt],
                spacing: ['px', B],
                text: [Pt],
                'text-shadow': [Pt],
                tracking: [
                    'tighter',
                    'tight',
                    'normal',
                    'wide',
                    'wider',
                    'widest',
                ],
            },
            classGroups: {
                aspect: [{ aspect: ['auto', 'square', ur, w, _, Y] }],
                container: ['container'],
                columns: [{ columns: [B, w, _, l] }],
                'break-after': [{ 'break-after': K() }],
                'break-before': [{ 'break-before': K() }],
                'break-inside': [
                    {
                        'break-inside': [
                            'auto',
                            'avoid',
                            'avoid-page',
                            'avoid-column',
                        ],
                    },
                ],
                'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
                box: [{ box: ['border', 'content'] }],
                display: [
                    'block',
                    'inline-block',
                    'inline',
                    'flex',
                    'inline-flex',
                    'table',
                    'inline-table',
                    'table-caption',
                    'table-cell',
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row-group',
                    'table-row',
                    'flow-root',
                    'grid',
                    'inline-grid',
                    'contents',
                    'list-item',
                    'hidden',
                ],
                sr: ['sr-only', 'not-sr-only'],
                float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
                clear: [
                    {
                        clear: [
                            'left',
                            'right',
                            'both',
                            'none',
                            'start',
                            'end',
                        ],
                    },
                ],
                isolation: ['isolate', 'isolation-auto'],
                'object-fit': [
                    {
                        object: [
                            'contain',
                            'cover',
                            'fill',
                            'none',
                            'scale-down',
                        ],
                    },
                ],
                'object-position': [{ object: xe() }],
                overflow: [{ overflow: D() }],
                'overflow-x': [{ 'overflow-x': D() }],
                'overflow-y': [{ 'overflow-y': D() }],
                overscroll: [{ overscroll: k() }],
                'overscroll-x': [{ 'overscroll-x': k() }],
                'overscroll-y': [{ 'overscroll-y': k() }],
                position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
                inset: [{ inset: Q() }],
                'inset-x': [{ 'inset-x': Q() }],
                'inset-y': [{ 'inset-y': Q() }],
                start: [{ start: Q() }],
                end: [{ end: Q() }],
                top: [{ top: Q() }],
                right: [{ right: Q() }],
                bottom: [{ bottom: Q() }],
                left: [{ left: Q() }],
                visibility: ['visible', 'invisible', 'collapse'],
                z: [{ z: [Bt, 'auto', _, w] }],
                basis: [{ basis: [ur, 'full', 'auto', l, ...b()] }],
                'flex-direction': [
                    { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
                ],
                'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
                flex: [{ flex: [B, ur, 'auto', 'initial', 'none', w] }],
                grow: [{ grow: ['', B, _, w] }],
                shrink: [{ shrink: ['', B, _, w] }],
                order: [{ order: [Bt, 'first', 'last', 'none', _, w] }],
                'grid-cols': [{ 'grid-cols': S() }],
                'col-start-end': [{ col: fe() }],
                'col-start': [{ 'col-start': C() }],
                'col-end': [{ 'col-end': C() }],
                'grid-rows': [{ 'grid-rows': S() }],
                'row-start-end': [{ row: fe() }],
                'row-start': [{ 'row-start': C() }],
                'row-end': [{ 'row-end': C() }],
                'grid-flow': [
                    {
                        'grid-flow': [
                            'row',
                            'col',
                            'dense',
                            'row-dense',
                            'col-dense',
                        ],
                    },
                ],
                'auto-cols': [{ 'auto-cols': ot() }],
                'auto-rows': [{ 'auto-rows': ot() }],
                gap: [{ gap: b() }],
                'gap-x': [{ 'gap-x': b() }],
                'gap-y': [{ 'gap-y': b() }],
                'justify-content': [{ justify: [...ae(), 'normal'] }],
                'justify-items': [{ 'justify-items': [...de(), 'normal'] }],
                'justify-self': [{ 'justify-self': ['auto', ...de()] }],
                'align-content': [{ content: ['normal', ...ae()] }],
                'align-items': [
                    { items: [...de(), { baseline: ['', 'last'] }] },
                ],
                'align-self': [
                    { self: ['auto', ...de(), { baseline: ['', 'last'] }] },
                ],
                'place-content': [{ 'place-content': ae() }],
                'place-items': [{ 'place-items': [...de(), 'baseline'] }],
                'place-self': [{ 'place-self': ['auto', ...de()] }],
                p: [{ p: b() }],
                px: [{ px: b() }],
                py: [{ py: b() }],
                ps: [{ ps: b() }],
                pe: [{ pe: b() }],
                pt: [{ pt: b() }],
                pr: [{ pr: b() }],
                pb: [{ pb: b() }],
                pl: [{ pl: b() }],
                m: [{ m: te() }],
                mx: [{ mx: te() }],
                my: [{ my: te() }],
                ms: [{ ms: te() }],
                me: [{ me: te() }],
                mt: [{ mt: te() }],
                mr: [{ mr: te() }],
                mb: [{ mb: te() }],
                ml: [{ ml: te() }],
                'space-x': [{ 'space-x': b() }],
                'space-x-reverse': ['space-x-reverse'],
                'space-y': [{ 'space-y': b() }],
                'space-y-reverse': ['space-y-reverse'],
                size: [{ size: X() }],
                w: [{ w: [l, 'screen', ...X()] }],
                'min-w': [{ 'min-w': [l, 'screen', 'none', ...X()] }],
                'max-w': [
                    {
                        'max-w': [
                            l,
                            'screen',
                            'none',
                            'prose',
                            { screen: [a] },
                            ...X(),
                        ],
                    },
                ],
                h: [{ h: ['screen', 'lh', ...X()] }],
                'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...X()] }],
                'max-h': [{ 'max-h': ['screen', 'lh', ...X()] }],
                'font-size': [{ text: ['base', s, Cr, Jt] }],
                'font-smoothing': ['antialiased', 'subpixel-antialiased'],
                'font-style': ['italic', 'not-italic'],
                'font-weight': [{ font: [r, _, zn] }],
                'font-stretch': [
                    {
                        'font-stretch': [
                            'ultra-condensed',
                            'extra-condensed',
                            'condensed',
                            'semi-condensed',
                            'normal',
                            'semi-expanded',
                            'expanded',
                            'extra-expanded',
                            'ultra-expanded',
                            An,
                            w,
                        ],
                    },
                ],
                'font-family': [{ font: [pi, w, e] }],
                'fvn-normal': ['normal-nums'],
                'fvn-ordinal': ['ordinal'],
                'fvn-slashed-zero': ['slashed-zero'],
                'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
                tracking: [{ tracking: [n, _, w] }],
                'line-clamp': [{ 'line-clamp': [B, 'none', _, zn] }],
                leading: [{ leading: [o, ...b()] }],
                'list-image': [{ 'list-image': ['none', _, w] }],
                'list-style-position': [{ list: ['inside', 'outside'] }],
                'list-style-type': [
                    { list: ['disc', 'decimal', 'none', _, w] },
                ],
                'text-alignment': [
                    {
                        text: [
                            'left',
                            'center',
                            'right',
                            'justify',
                            'start',
                            'end',
                        ],
                    },
                ],
                'placeholder-color': [{ placeholder: f() }],
                'text-color': [{ text: f() }],
                'text-decoration': [
                    'underline',
                    'overline',
                    'line-through',
                    'no-underline',
                ],
                'text-decoration-style': [{ decoration: [...we(), 'wavy'] }],
                'text-decoration-thickness': [
                    { decoration: [B, 'from-font', 'auto', _, Jt] },
                ],
                'text-decoration-color': [{ decoration: f() }],
                'underline-offset': [{ 'underline-offset': [B, 'auto', _, w] }],
                'text-transform': [
                    'uppercase',
                    'lowercase',
                    'capitalize',
                    'normal-case',
                ],
                'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
                'text-wrap': [
                    { text: ['wrap', 'nowrap', 'balance', 'pretty'] },
                ],
                indent: [{ indent: b() }],
                'vertical-align': [
                    {
                        align: [
                            'baseline',
                            'top',
                            'middle',
                            'bottom',
                            'text-top',
                            'text-bottom',
                            'sub',
                            'super',
                            _,
                            w,
                        ],
                    },
                ],
                whitespace: [
                    {
                        whitespace: [
                            'normal',
                            'nowrap',
                            'pre',
                            'pre-line',
                            'pre-wrap',
                            'break-spaces',
                        ],
                    },
                ],
                break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
                hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                content: [{ content: ['none', _, w] }],
                'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                'bg-clip': [
                    { 'bg-clip': ['border', 'padding', 'content', 'text'] },
                ],
                'bg-origin': [
                    { 'bg-origin': ['border', 'padding', 'content'] },
                ],
                'bg-position': [{ bg: re() }],
                'bg-repeat': [{ bg: c() }],
                'bg-size': [{ bg: le() }],
                'bg-image': [
                    {
                        bg: [
                            'none',
                            {
                                linear: [
                                    {
                                        to: [
                                            't',
                                            'tr',
                                            'r',
                                            'br',
                                            'b',
                                            'bl',
                                            'l',
                                            'tl',
                                        ],
                                    },
                                    Bt,
                                    _,
                                    w,
                                ],
                                radial: ['', _, w],
                                conic: [Bt, _, w],
                            },
                            hi,
                            di,
                        ],
                    },
                ],
                'bg-color': [{ bg: f() }],
                'gradient-from-pos': [{ from: be() }],
                'gradient-via-pos': [{ via: be() }],
                'gradient-to-pos': [{ to: be() }],
                'gradient-from': [{ from: f() }],
                'gradient-via': [{ via: f() }],
                'gradient-to': [{ to: f() }],
                rounded: [{ rounded: se() }],
                'rounded-s': [{ 'rounded-s': se() }],
                'rounded-e': [{ 'rounded-e': se() }],
                'rounded-t': [{ 'rounded-t': se() }],
                'rounded-r': [{ 'rounded-r': se() }],
                'rounded-b': [{ 'rounded-b': se() }],
                'rounded-l': [{ 'rounded-l': se() }],
                'rounded-ss': [{ 'rounded-ss': se() }],
                'rounded-se': [{ 'rounded-se': se() }],
                'rounded-ee': [{ 'rounded-ee': se() }],
                'rounded-es': [{ 'rounded-es': se() }],
                'rounded-tl': [{ 'rounded-tl': se() }],
                'rounded-tr': [{ 'rounded-tr': se() }],
                'rounded-br': [{ 'rounded-br': se() }],
                'rounded-bl': [{ 'rounded-bl': se() }],
                'border-w': [{ border: ee() }],
                'border-w-x': [{ 'border-x': ee() }],
                'border-w-y': [{ 'border-y': ee() }],
                'border-w-s': [{ 'border-s': ee() }],
                'border-w-e': [{ 'border-e': ee() }],
                'border-w-t': [{ 'border-t': ee() }],
                'border-w-r': [{ 'border-r': ee() }],
                'border-w-b': [{ 'border-b': ee() }],
                'border-w-l': [{ 'border-l': ee() }],
                'divide-x': [{ 'divide-x': ee() }],
                'divide-x-reverse': ['divide-x-reverse'],
                'divide-y': [{ 'divide-y': ee() }],
                'divide-y-reverse': ['divide-y-reverse'],
                'border-style': [{ border: [...we(), 'hidden', 'none'] }],
                'divide-style': [{ divide: [...we(), 'hidden', 'none'] }],
                'border-color': [{ border: f() }],
                'border-color-x': [{ 'border-x': f() }],
                'border-color-y': [{ 'border-y': f() }],
                'border-color-s': [{ 'border-s': f() }],
                'border-color-e': [{ 'border-e': f() }],
                'border-color-t': [{ 'border-t': f() }],
                'border-color-r': [{ 'border-r': f() }],
                'border-color-b': [{ 'border-b': f() }],
                'border-color-l': [{ 'border-l': f() }],
                'divide-color': [{ divide: f() }],
                'outline-style': [{ outline: [...we(), 'none', 'hidden'] }],
                'outline-offset': [{ 'outline-offset': [B, _, w] }],
                'outline-w': [{ outline: ['', B, Cr, Jt] }],
                'outline-color': [{ outline: f() }],
                shadow: [{ shadow: ['', 'none', v, tn, en] }],
                'shadow-color': [{ shadow: f() }],
                'inset-shadow': [{ 'inset-shadow': ['none', j, tn, en] }],
                'inset-shadow-color': [{ 'inset-shadow': f() }],
                'ring-w': [{ ring: ee() }],
                'ring-w-inset': ['ring-inset'],
                'ring-color': [{ ring: f() }],
                'ring-offset-w': [{ 'ring-offset': [B, Jt] }],
                'ring-offset-color': [{ 'ring-offset': f() }],
                'inset-ring-w': [{ 'inset-ring': ee() }],
                'inset-ring-color': [{ 'inset-ring': f() }],
                'text-shadow': [{ 'text-shadow': ['none', m, tn, en] }],
                'text-shadow-color': [{ 'text-shadow': f() }],
                opacity: [{ opacity: [B, _, w] }],
                'mix-blend': [
                    { 'mix-blend': [...ve(), 'plus-darker', 'plus-lighter'] },
                ],
                'bg-blend': [{ 'bg-blend': ve() }],
                'mask-clip': [
                    {
                        'mask-clip': [
                            'border',
                            'padding',
                            'content',
                            'fill',
                            'stroke',
                            'view',
                        ],
                    },
                    'mask-no-clip',
                ],
                'mask-composite': [
                    { mask: ['add', 'subtract', 'intersect', 'exclude'] },
                ],
                'mask-image-linear-pos': [{ 'mask-linear': [B] }],
                'mask-image-linear-from-pos': [{ 'mask-linear-from': A() }],
                'mask-image-linear-to-pos': [{ 'mask-linear-to': A() }],
                'mask-image-linear-from-color': [{ 'mask-linear-from': f() }],
                'mask-image-linear-to-color': [{ 'mask-linear-to': f() }],
                'mask-image-t-from-pos': [{ 'mask-t-from': A() }],
                'mask-image-t-to-pos': [{ 'mask-t-to': A() }],
                'mask-image-t-from-color': [{ 'mask-t-from': f() }],
                'mask-image-t-to-color': [{ 'mask-t-to': f() }],
                'mask-image-r-from-pos': [{ 'mask-r-from': A() }],
                'mask-image-r-to-pos': [{ 'mask-r-to': A() }],
                'mask-image-r-from-color': [{ 'mask-r-from': f() }],
                'mask-image-r-to-color': [{ 'mask-r-to': f() }],
                'mask-image-b-from-pos': [{ 'mask-b-from': A() }],
                'mask-image-b-to-pos': [{ 'mask-b-to': A() }],
                'mask-image-b-from-color': [{ 'mask-b-from': f() }],
                'mask-image-b-to-color': [{ 'mask-b-to': f() }],
                'mask-image-l-from-pos': [{ 'mask-l-from': A() }],
                'mask-image-l-to-pos': [{ 'mask-l-to': A() }],
                'mask-image-l-from-color': [{ 'mask-l-from': f() }],
                'mask-image-l-to-color': [{ 'mask-l-to': f() }],
                'mask-image-x-from-pos': [{ 'mask-x-from': A() }],
                'mask-image-x-to-pos': [{ 'mask-x-to': A() }],
                'mask-image-x-from-color': [{ 'mask-x-from': f() }],
                'mask-image-x-to-color': [{ 'mask-x-to': f() }],
                'mask-image-y-from-pos': [{ 'mask-y-from': A() }],
                'mask-image-y-to-pos': [{ 'mask-y-to': A() }],
                'mask-image-y-from-color': [{ 'mask-y-from': f() }],
                'mask-image-y-to-color': [{ 'mask-y-to': f() }],
                'mask-image-radial': [{ 'mask-radial': [_, w] }],
                'mask-image-radial-from-pos': [{ 'mask-radial-from': A() }],
                'mask-image-radial-to-pos': [{ 'mask-radial-to': A() }],
                'mask-image-radial-from-color': [{ 'mask-radial-from': f() }],
                'mask-image-radial-to-color': [{ 'mask-radial-to': f() }],
                'mask-image-radial-shape': [
                    { 'mask-radial': ['circle', 'ellipse'] },
                ],
                'mask-image-radial-size': [
                    {
                        'mask-radial': [
                            {
                                closest: ['side', 'corner'],
                                farthest: ['side', 'corner'],
                            },
                        ],
                    },
                ],
                'mask-image-radial-pos': [{ 'mask-radial-at': M() }],
                'mask-image-conic-pos': [{ 'mask-conic': [B] }],
                'mask-image-conic-from-pos': [{ 'mask-conic-from': A() }],
                'mask-image-conic-to-pos': [{ 'mask-conic-to': A() }],
                'mask-image-conic-from-color': [{ 'mask-conic-from': f() }],
                'mask-image-conic-to-color': [{ 'mask-conic-to': f() }],
                'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
                'mask-origin': [
                    {
                        'mask-origin': [
                            'border',
                            'padding',
                            'content',
                            'fill',
                            'stroke',
                            'view',
                        ],
                    },
                ],
                'mask-position': [{ mask: re() }],
                'mask-repeat': [{ mask: c() }],
                'mask-size': [{ mask: le() }],
                'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                'mask-image': [{ mask: ['none', _, w] }],
                filter: [{ filter: ['', 'none', _, w] }],
                blur: [{ blur: Ce() }],
                brightness: [{ brightness: [B, _, w] }],
                contrast: [{ contrast: [B, _, w] }],
                'drop-shadow': [{ 'drop-shadow': ['', 'none', p, tn, en] }],
                'drop-shadow-color': [{ 'drop-shadow': f() }],
                grayscale: [{ grayscale: ['', B, _, w] }],
                'hue-rotate': [{ 'hue-rotate': [B, _, w] }],
                invert: [{ invert: ['', B, _, w] }],
                saturate: [{ saturate: [B, _, w] }],
                sepia: [{ sepia: ['', B, _, w] }],
                'backdrop-filter': [{ 'backdrop-filter': ['', 'none', _, w] }],
                'backdrop-blur': [{ 'backdrop-blur': Ce() }],
                'backdrop-brightness': [{ 'backdrop-brightness': [B, _, w] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [B, _, w] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': ['', B, _, w] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [B, _, w] }],
                'backdrop-invert': [{ 'backdrop-invert': ['', B, _, w] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [B, _, w] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [B, _, w] }],
                'backdrop-sepia': [{ 'backdrop-sepia': ['', B, _, w] }],
                'border-collapse': [{ border: ['collapse', 'separate'] }],
                'border-spacing': [{ 'border-spacing': b() }],
                'border-spacing-x': [{ 'border-spacing-x': b() }],
                'border-spacing-y': [{ 'border-spacing-y': b() }],
                'table-layout': [{ table: ['auto', 'fixed'] }],
                caption: [{ caption: ['top', 'bottom'] }],
                transition: [
                    {
                        transition: [
                            '',
                            'all',
                            'colors',
                            'opacity',
                            'shadow',
                            'transform',
                            'none',
                            _,
                            w,
                        ],
                    },
                ],
                'transition-behavior': [{ transition: ['normal', 'discrete'] }],
                duration: [{ duration: [B, 'initial', _, w] }],
                ease: [{ ease: ['linear', 'initial', U, _, w] }],
                delay: [{ delay: [B, _, w] }],
                animate: [{ animate: ['none', $, _, w] }],
                backface: [{ backface: ['hidden', 'visible'] }],
                perspective: [{ perspective: [L, _, w] }],
                'perspective-origin': [{ 'perspective-origin': xe() }],
                rotate: [{ rotate: pe() }],
                'rotate-x': [{ 'rotate-x': pe() }],
                'rotate-y': [{ 'rotate-y': pe() }],
                'rotate-z': [{ 'rotate-z': pe() }],
                scale: [{ scale: Xe() }],
                'scale-x': [{ 'scale-x': Xe() }],
                'scale-y': [{ 'scale-y': Xe() }],
                'scale-z': [{ 'scale-z': Xe() }],
                'scale-3d': ['scale-3d'],
                skew: [{ skew: ne() }],
                'skew-x': [{ 'skew-x': ne() }],
                'skew-y': [{ 'skew-y': ne() }],
                transform: [{ transform: [_, w, '', 'none', 'gpu', 'cpu'] }],
                'transform-origin': [{ origin: xe() }],
                'transform-style': [{ transform: ['3d', 'flat'] }],
                translate: [{ translate: _e() }],
                'translate-x': [{ 'translate-x': _e() }],
                'translate-y': [{ 'translate-y': _e() }],
                'translate-z': [{ 'translate-z': _e() }],
                'translate-none': ['translate-none'],
                accent: [{ accent: f() }],
                appearance: [{ appearance: ['none', 'auto'] }],
                'caret-color': [{ caret: f() }],
                'color-scheme': [
                    {
                        scheme: [
                            'normal',
                            'dark',
                            'light',
                            'light-dark',
                            'only-dark',
                            'only-light',
                        ],
                    },
                ],
                cursor: [
                    {
                        cursor: [
                            'auto',
                            'default',
                            'pointer',
                            'wait',
                            'text',
                            'move',
                            'help',
                            'not-allowed',
                            'none',
                            'context-menu',
                            'progress',
                            'cell',
                            'crosshair',
                            'vertical-text',
                            'alias',
                            'copy',
                            'no-drop',
                            'grab',
                            'grabbing',
                            'all-scroll',
                            'col-resize',
                            'row-resize',
                            'n-resize',
                            'e-resize',
                            's-resize',
                            'w-resize',
                            'ne-resize',
                            'nw-resize',
                            'se-resize',
                            'sw-resize',
                            'ew-resize',
                            'ns-resize',
                            'nesw-resize',
                            'nwse-resize',
                            'zoom-in',
                            'zoom-out',
                            _,
                            w,
                        ],
                    },
                ],
                'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
                'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
                resize: [{ resize: ['none', '', 'y', 'x'] }],
                'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                'scroll-m': [{ 'scroll-m': b() }],
                'scroll-mx': [{ 'scroll-mx': b() }],
                'scroll-my': [{ 'scroll-my': b() }],
                'scroll-ms': [{ 'scroll-ms': b() }],
                'scroll-me': [{ 'scroll-me': b() }],
                'scroll-mt': [{ 'scroll-mt': b() }],
                'scroll-mr': [{ 'scroll-mr': b() }],
                'scroll-mb': [{ 'scroll-mb': b() }],
                'scroll-ml': [{ 'scroll-ml': b() }],
                'scroll-p': [{ 'scroll-p': b() }],
                'scroll-px': [{ 'scroll-px': b() }],
                'scroll-py': [{ 'scroll-py': b() }],
                'scroll-ps': [{ 'scroll-ps': b() }],
                'scroll-pe': [{ 'scroll-pe': b() }],
                'scroll-pt': [{ 'scroll-pt': b() }],
                'scroll-pr': [{ 'scroll-pr': b() }],
                'scroll-pb': [{ 'scroll-pb': b() }],
                'scroll-pl': [{ 'scroll-pl': b() }],
                'snap-align': [
                    { snap: ['start', 'end', 'center', 'align-none'] },
                ],
                'snap-stop': [{ snap: ['normal', 'always'] }],
                'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
                touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                'touch-pz': ['touch-pinch-zoom'],
                select: [{ select: ['none', 'text', 'all', 'auto'] }],
                'will-change': [
                    {
                        'will-change': [
                            'auto',
                            'scroll',
                            'contents',
                            'transform',
                            _,
                            w,
                        ],
                    },
                ],
                fill: [{ fill: ['none', ...f()] }],
                'stroke-w': [{ stroke: [B, Cr, Jt, zn] }],
                stroke: [{ stroke: ['none', ...f()] }],
                'forced-color-adjust': [
                    { 'forced-color-adjust': ['auto', 'none'] },
                ],
            },
            conflictingClassGroups: {
                overflow: ['overflow-x', 'overflow-y'],
                overscroll: ['overscroll-x', 'overscroll-y'],
                inset: [
                    'inset-x',
                    'inset-y',
                    'start',
                    'end',
                    'top',
                    'right',
                    'bottom',
                    'left',
                ],
                'inset-x': ['right', 'left'],
                'inset-y': ['top', 'bottom'],
                flex: ['basis', 'grow', 'shrink'],
                gap: ['gap-x', 'gap-y'],
                p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
                px: ['pr', 'pl'],
                py: ['pt', 'pb'],
                m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
                mx: ['mr', 'ml'],
                my: ['mt', 'mb'],
                size: ['w', 'h'],
                'font-size': ['leading'],
                'fvn-normal': [
                    'fvn-ordinal',
                    'fvn-slashed-zero',
                    'fvn-figure',
                    'fvn-spacing',
                    'fvn-fraction',
                ],
                'fvn-ordinal': ['fvn-normal'],
                'fvn-slashed-zero': ['fvn-normal'],
                'fvn-figure': ['fvn-normal'],
                'fvn-spacing': ['fvn-normal'],
                'fvn-fraction': ['fvn-normal'],
                'line-clamp': ['display', 'overflow'],
                rounded: [
                    'rounded-s',
                    'rounded-e',
                    'rounded-t',
                    'rounded-r',
                    'rounded-b',
                    'rounded-l',
                    'rounded-ss',
                    'rounded-se',
                    'rounded-ee',
                    'rounded-es',
                    'rounded-tl',
                    'rounded-tr',
                    'rounded-br',
                    'rounded-bl',
                ],
                'rounded-s': ['rounded-ss', 'rounded-es'],
                'rounded-e': ['rounded-se', 'rounded-ee'],
                'rounded-t': ['rounded-tl', 'rounded-tr'],
                'rounded-r': ['rounded-tr', 'rounded-br'],
                'rounded-b': ['rounded-br', 'rounded-bl'],
                'rounded-l': ['rounded-tl', 'rounded-bl'],
                'border-spacing': ['border-spacing-x', 'border-spacing-y'],
                'border-w': [
                    'border-w-x',
                    'border-w-y',
                    'border-w-s',
                    'border-w-e',
                    'border-w-t',
                    'border-w-r',
                    'border-w-b',
                    'border-w-l',
                ],
                'border-w-x': ['border-w-r', 'border-w-l'],
                'border-w-y': ['border-w-t', 'border-w-b'],
                'border-color': [
                    'border-color-x',
                    'border-color-y',
                    'border-color-s',
                    'border-color-e',
                    'border-color-t',
                    'border-color-r',
                    'border-color-b',
                    'border-color-l',
                ],
                'border-color-x': ['border-color-r', 'border-color-l'],
                'border-color-y': ['border-color-t', 'border-color-b'],
                translate: ['translate-x', 'translate-y', 'translate-none'],
                'translate-none': [
                    'translate',
                    'translate-x',
                    'translate-y',
                    'translate-z',
                ],
                'scroll-m': [
                    'scroll-mx',
                    'scroll-my',
                    'scroll-ms',
                    'scroll-me',
                    'scroll-mt',
                    'scroll-mr',
                    'scroll-mb',
                    'scroll-ml',
                ],
                'scroll-mx': ['scroll-mr', 'scroll-ml'],
                'scroll-my': ['scroll-mt', 'scroll-mb'],
                'scroll-p': [
                    'scroll-px',
                    'scroll-py',
                    'scroll-ps',
                    'scroll-pe',
                    'scroll-pt',
                    'scroll-pr',
                    'scroll-pb',
                    'scroll-pl',
                ],
                'scroll-px': ['scroll-pr', 'scroll-pl'],
                'scroll-py': ['scroll-pt', 'scroll-pb'],
                touch: ['touch-x', 'touch-y', 'touch-pz'],
                'touch-x': ['touch'],
                'touch-y': ['touch'],
                'touch-pz': ['touch'],
            },
            conflictingClassGroupModifiers: { 'font-size': ['leading'] },
            orderSensitiveModifiers: [
                '*',
                '**',
                'after',
                'backdrop',
                'before',
                'details-content',
                'file',
                'first-letter',
                'first-line',
                'marker',
                'placeholder',
                'selection',
            ],
        };
    },
    bi = Qo(xi);
function vi(...t) {
    return bi(Do(...t));
}
function yi({ children: t, className: e, heightValue: s = '100dvh', ...r }) {
    return i.jsx('div', {
        className: 'relative',
        style: {
            height: s,
            clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
        },
        ...r,
        children: i.jsx('div', {
            className: vi('fixed bottom-0 w-full', e),
            style: { height: s },
            children: t,
        }),
    });
}
const wi = '/assets/jumbo1-DdM889jb.png',
    _i = '/assets/jumbo2-BWPPYoTa.png',
    ki = '/assets/jumbo3-DcdikBXN.png',
    Si = '/assets/jumbo4-u246S-Ol.png',
    ji = '/assets/ccS-D47_qp1S.png',
    Ci = ({ title: t, label: e, textHover: s, onClick: r }) => {
        const [n, o] = O.useState(!1);
        return i.jsxs(Ee.button, {
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            animate: { backgroundColor: n ? '#d85dc1' : '#fff' },
            onClick: r,
            className:
                'relative flex h-[50px] w-[170px] items-center gap-3 overflow-hidden rounded-full px-2 py-2 shadow-md',
            children: [
                i.jsx(mn, {
                    children:
                        n &&
                        i.jsx(Ee.span, {
                            className:
                                'text-vilot-600 absolute z-40 px-3 text-sm font-medium text-white',
                            children: Array.from(s).map((a, l) =>
                                i.jsx(
                                    Ee.span,
                                    {
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: 20 },
                                        transition: {
                                            duration: 0.2,
                                            delay: l * 0.05,
                                            ease: 'easeInOut',
                                        },
                                        style: { display: 'inline-block' },
                                        children: a,
                                    },
                                    l
                                )
                            ),
                        }),
                }),
                i.jsx(Ee.div, {
                    initial: { scale: 1, x: 0 },
                    animate: { scale: n ? 4 : 1, x: n ? 70 : 0 },
                    transition: {
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                        scale: { type: 'spring', damping: 15, stiffness: 200 },
                    },
                    className:
                        'bg-primary-500 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white',
                    children: i.jsx(Ee.div, {
                        animate: { x: n ? 9 : 0, scale: n ? 0.3 : 1 },
                        transition: { duration: 0.3, ease: 'easeOut' },
                        whileHover: { scale: 0.5 },
                        whileTap: { scale: 0.3 },
                        children: i.jsx(Ee.div, {
                            animate: { x: [-2, 2, -2] },
                            transition: {
                                duration: 1.5,
                                repeat: 1 / 0,
                                ease: 'easeInOut',
                            },
                            children: i.jsx(Ys, { size: 20 }),
                        }),
                    }),
                }),
                i.jsxs(Ee.div, {
                    animate: { opacity: n ? 0 : 1, x: n ? 10 : 0 },
                    transition: { duration: 0.2, ease: 'easeInOut' },
                    className: 'text-left leading-tight',
                    children: [
                        i.jsx('span', {
                            className: 'block text-xs text-gray-400',
                            children: t,
                        }),
                        i.jsx('span', {
                            className: 'block text-sm font-semibold text-black',
                            children: e,
                        }),
                    ],
                }),
            ],
        });
    },
    Mi = () => {
        const t = O.useRef(null),
            { t: e } = Mn(),
            s = Yn(0),
            r = Yn(0);
        O.useEffect(() => {
            const j = (p) => {
                    const x = t.current;
                    if (!x) return;
                    const {
                            left: L,
                            top: Y,
                            width: U,
                            height: $,
                        } = x.getBoundingClientRect(),
                        K = p.clientX - (L + U / 2),
                        M = p.clientY - (Y + $ / 2);
                    s.set(K), r.set(M);
                },
                m = t.current;
            return (
                m && m.addEventListener('mousemove', j),
                () => {
                    m && m.removeEventListener('mousemove', j);
                }
            );
        }, []);
        const n = Zr(r, [-100, 100], [3, -3]),
            o = Zr(s, [-150, 150], [-3, 3]),
            a = (j = 1) => ({
                x: Zr(s, (m) => m / (j * 10)),
                y: Zr(r, (m) => m / (j * 10)),
                scale: 1 + 0.0025 * (10 / j),
            }),
            l = a(8),
            d = a(5),
            h = a(3),
            v = a(2);
        return i.jsx('div', {
            ref: t,
            className: '-mt-16 w-full overflow-hidden',
            style: { perspective: 1e3 },
            id: 'home',
            children: i.jsxs(Ee.div, {
                style: { rotateX: n, rotateY: o },
                className: 'relative mx-auto h-[800px] max-w-[1300px]',
                children: [
                    i.jsxs('div', {
                        className: 'fade relative top-[100px]',
                        children: [
                            i.jsx('h3', {
                                className:
                                    'relative top-[60px] left-6 text-[14px] text-slate-500 md:text-[30px]',
                                children: e('banner.welcome'),
                            }),
                            i.jsx('h1', {
                                className:
                                    'absolute top-[80px] bg-gradient-to-b from-gray-50 to-slate-700 bg-clip-text text-[160px] text-transparent md:relative md:top-auto md:text-[240px]',
                                children: 'TheEnd.Page',
                            }),
                        ],
                    }),
                    i.jsx('img', {
                        src: ji,
                        alt: 'cloud',
                        className: 'absolute bottom-40 dark:hidden',
                    }),
                    i.jsx(Ci, {
                        title: 'Discover More',
                        textHover: 'Mety io eh',
                        label: 'Test',
                        className: 'absolute right-5 bottom-40 dark:hidden',
                        onClick: console.log('Explore'),
                    }),
                    i.jsxs('div', {
                        className: 'floating-element',
                        children: [
                            i.jsx(Ee.img, {
                                src: wi,
                                alt: 'Banner1',
                                width: 400,
                                style: l,
                                className:
                                    'absolute -bottom-108 left-[130px] z-[1] hidden blur-[2px] transition hover:scale-120 md:flex',
                            }),
                            i.jsx(Ee.img, {
                                src: _i,
                                alt: 'Banner2',
                                width: 220,
                                style: d,
                                className:
                                    'absolute -bottom-[10px] left-[400px] z-[2] hidden transition hover:scale-120 md:flex',
                            }),
                            i.jsx(Ee.img, {
                                src: ki,
                                alt: 'Banner3',
                                width: 100,
                                style: h,
                                className:
                                    'absolute right-[60px] bottom-[20px] z-[3] hidden blur-sm transition hover:scale-120 md:flex',
                            }),
                            i.jsx(Ee.img, {
                                src: Si,
                                alt: 'Banner4',
                                width: 350,
                                style: v,
                                className:
                                    'absolute top-[220px] right-[150px] z-[4] transition hover:scale-120 md:-top-[80px]',
                            }),
                        ],
                    }),
                    i.jsx(Ee.p, {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 1, duration: 0.6 },
                        style: a(7),
                        className:
                            'relative top-[500px] left-6 z-10 w-[70%] rounded-xl bg-white/60 p-4 text-sm text-gray-600 backdrop-blur-lg md:top-5 md:w-[40%]',
                        children: e('banner.para1'),
                    }),
                ],
            }),
        });
    },
    Ni = () => {
        const { t } = Mn();
        return i.jsx('div', {
            className: 'marquee-container',
            children: i.jsxs('div', {
                className: 'marquee',
                children: [
                    i.jsx('span', { children: t('marquee.text') }),
                    i.jsx('span', { children: t('marquee.text') }),
                ],
            }),
        });
    },
    Ei = ({ title: t, image: e, description: s, index: r, onLearnMore: n }) =>
        i.jsxs('div', {
            className:
                'boreder-2 hover:shadow-large group auto z-10 w-full rounded-[30px] border-2 border-transparent bg-white pb-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:z-20 hover:border-2 hover:border-[#C43C93] hover:bg-gray-50 lg:w-[260px] lg:rounded-3xl dark:bg-gray-600 dark:text-white',
            children: [
                i.jsx('div', {
                    className:
                        'mb-4 h-[100px] overflow-hidden rounded-t-3xl bg-red-400',
                    children: i.jsx('img', {
                        src: e,
                        alt: t,
                        className: 'object-fit mb-4 w-full',
                    }),
                }),
                i.jsx('div', {
                    className: 'mb-2 flex rounded-full px-6',
                    children: i.jsx('h3', {
                        className:
                            'bg-gradient-to-r from-[#00306A] to-[#C43C93] bg-clip-text text-xl text-transparent dark:text-white',
                        children: t,
                    }),
                }),
                i.jsx('p', {
                    className:
                        'px-6 text-justify text-[12px] leading-[25px] tracking-wide text-gray-600 lg:h-[110px] dark:text-white',
                    children: s,
                }),
                i.jsx('div', {
                    className: 'mt-4 text-left',
                    children: i.jsx('button', {
                        onClick: () => n(r),
                        className:
                            'bg -gradient-to-r w-full rounded-full from-[#00306A] to-[#C43C93] bg-clip-text px-6 py-2 text-center text-sm text-transparent transition-opacity hover:opacity-90 lg:w-auto lg:text-left dark:text-white',
                        children: 'En savoir plus',
                    }),
                }),
            ],
        }),
    er = '/assets/auth2-CQheL5Gh.jpg',
    Ti = () => {
        const { t } = Mn();
        return i.jsx('section', {
            className:
                'line-back flex overflow-hidden bg-gray-100 py-20 dark:bg-gray-800',
            id: 'working',
            children: i.jsx('div', {
                className: 'mx-auto w-full max-w-[1200px] overflow-hidden',
                children: i.jsxs('div', {
                    className: 'flex w-full',
                    children: [
                        i.jsx('div', { className: 'hidden w-[400px] lg:flex' }),
                        i.jsxs('div', {
                            children: [
                                i.jsxs('div', {
                                    className: 'z-10 flex w-full items-center',
                                    'data-aos': 'fade-right',
                                    children: [
                                        i.jsxs('div', {
                                            className:
                                                'relative w-full justify-start px-10 py-8 text-center lg:mr-2 lg:w-[600px] lg:px-0 lg:text-left',
                                            children: [
                                                i.jsx('h1', {
                                                    className:
                                                        'z-2 inline-flex flex-wrap items-center gap-2 text-2xl font-semibold text-gray-800 sm:text-3xl md:gap-3 md:text-4xl dark:text-white',
                                                    children: t(
                                                        'solutionSection.title'
                                                    ),
                                                }),
                                                i.jsx('p', {
                                                    className:
                                                        'mt-2 max-w-2xl text-sm text-gray-500 sm:text-base md:mt-4 md:text-[14px] dark:text-white',
                                                    children: t(
                                                        'solutionSection.description'
                                                    ),
                                                }),
                                            ],
                                        }),
                                        i.jsx('div', {
                                            className:
                                                'z-2 my-8 hidden h-[1px] w-[300px] bg-slate-700 lg:block',
                                        }),
                                    ],
                                }),
                                i.jsx('div', {
                                    className:
                                        'CardWork z-10 mt-2 mb-4 flex flex-wrap justify-center gap-4 px-10 lg:justify-start',
                                    children: [
                                        {
                                            title: t(
                                                'solutionSection.cards.models.title'
                                            ),
                                            image: er,
                                            description: t(
                                                'solutionSection.cards.models.description'
                                            ),
                                        },
                                        {
                                            title: 'Un lien partageable',
                                            image: er,
                                            description:
                                                'Chaque page de fin est accessible via une URL unique, facile à envoyer à ses collègues, ex, partenaires de projet ou amis. Une fin, ça se partage !',
                                        },
                                        {
                                            title: 'Assistance IA',
                                            image: er,
                                            description:
                                                'L’IA t’aide à choisir parmi des templates prédéfinis celui qui correspond le mieux à ton intention : "Fin douce", "Explosion de rage", "Adieu stylé", etc.',
                                        },
                                    ].map((e, s) =>
                                        i.jsx(
                                            'div',
                                            {
                                                'data-aos': 'fade-up-right',
                                                'data-aos-delay': s * 200,
                                                children: i.jsx(Ei, {
                                                    title: e.title,
                                                    image: e.image,
                                                    description: e.description,
                                                    index: s,
                                                    onLearnMore: (r) =>
                                                        console.log(
                                                            'Learn more clicked for index:',
                                                            r
                                                        ),
                                                }),
                                            },
                                            e.title
                                        )
                                    ),
                                }),
                                i.jsxs('div', {
                                    className:
                                        'mt-10 flex items-center gap-2 px-10 lg:px-0',
                                    'data-aos': 'fade-right',
                                    children: [
                                        i.jsxs('span', {
                                            className: 'relative flex size-3',
                                            children: [
                                                i.jsx('span', {
                                                    className:
                                                        'absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C43C93] opacity-75',
                                                }),
                                                i.jsx('span', {
                                                    className:
                                                        'relative inline-flex size-3 rounded-full bg-[#C43C93]',
                                                }),
                                            ],
                                        }),
                                        i.jsx('small', {
                                            className:
                                                'text-[14px] text-slate-600 dark:text-white',
                                            children: t(
                                                'solutionSection.footer.quote'
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    };
var Pi = Object.defineProperty,
    Ai = Object.defineProperties,
    zi = Object.getOwnPropertyDescriptors,
    xs = Object.getOwnPropertySymbols,
    Ri = Object.prototype.hasOwnProperty,
    Oi = Object.prototype.propertyIsEnumerable,
    bs = (t, e, s) =>
        e in t
            ? Pi(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
              })
            : (t[e] = s),
    Mr = (t, e) => {
        for (var s in e || (e = {})) Ri.call(e, s) && bs(t, s, e[s]);
        if (xs) for (var s of xs(e)) Oi.call(e, s) && bs(t, s, e[s]);
        return t;
    },
    Nr = (t, e) => Ai(t, zi(e)),
    Ii = class extends O.Component {
        constructor(t) {
            super(t), (this.ref = To.createRef()), (this.state = { style: {} });
            const e = {
                reverse: !1,
                max: 35,
                perspective: 1e3,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                scale: '1.1',
                speed: '1000',
                transition: !0,
                axis: null,
                reset: !0,
            };
            (this.width = null),
                (this.height = null),
                (this.left = null),
                (this.top = null),
                (this.transitionTimeout = null),
                (this.updateCall = null),
                (this.element = null),
                (this.settings = Object.assign({}, e, this.props.options)),
                (this.reverse = this.settings.reverse ? -1 : 1),
                (this.onMouseEnter = this.onMouseEnter.bind(
                    this,
                    this.props.onMouseEnter
                )),
                (this.onMouseMove = this.onMouseMove.bind(
                    this,
                    this.props.onMouseMove
                )),
                (this.onMouseLeave = this.onMouseLeave.bind(
                    this,
                    this.props.onMouseLeave
                ));
        }
        componentDidMount() {
            (this.element = this.ref.current),
                setTimeout(() => {
                    this.element.parentElement.querySelector(':hover') ===
                        this.element && this.onMouseEnter();
                }, 0);
        }
        componentWillUnmount() {
            clearTimeout(this.transitionTimeout),
                cancelAnimationFrame(this.updateCall);
        }
        onMouseEnter(t = () => {}, e) {
            return (
                this.updateElementPosition(),
                this.setState(
                    Object.assign({}, this.state, {
                        style: Nr(Mr({}, this.state.style), {
                            willChange: 'transform',
                        }),
                    })
                ),
                this.setTransition(),
                t(e)
            );
        }
        reset() {
            window.requestAnimationFrame(() => {
                this.setState(
                    Object.assign({}, this.state, {
                        style: Nr(Mr({}, this.state.style), {
                            transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                        }),
                    })
                );
            });
        }
        onMouseMove(t = () => {}, e) {
            return (
                e.persist(),
                this.updateCall !== null &&
                    window.cancelAnimationFrame(this.updateCall),
                (this.event = e),
                (this.updateCall = requestAnimationFrame(
                    this.update.bind(this, e)
                )),
                t(e)
            );
        }
        setTransition() {
            clearTimeout(this.transitionTimeout),
                this.setState(
                    Object.assign({}, this.state, {
                        style: Nr(Mr({}, this.state.style), {
                            transition: `${this.settings.speed}ms ${this.settings.easing}`,
                        }),
                    })
                ),
                (this.transitionTimeout = setTimeout(() => {
                    this.setState(
                        Object.assign({}, this.state, {
                            style: Nr(Mr({}, this.state.style), {
                                transition: '',
                            }),
                        })
                    );
                }, this.settings.speed));
        }
        onMouseLeave(t = () => {}, e) {
            return (
                this.setTransition(), this.settings.reset && this.reset(), t(e)
            );
        }
        getValues(t) {
            const e = (t.nativeEvent.clientX - this.left) / this.width,
                s = (t.nativeEvent.clientY - this.top) / this.height,
                r = Math.min(Math.max(e, 0), 1),
                n = Math.min(Math.max(s, 0), 1),
                o = (
                    this.reverse *
                    (this.settings.max / 2 - r * this.settings.max)
                ).toFixed(2),
                a = (
                    this.reverse *
                    (n * this.settings.max - this.settings.max / 2)
                ).toFixed(2),
                l = r * 100,
                d = n * 100;
            return { tiltX: o, tiltY: a, percentageX: l, percentageY: d };
        }
        updateElementPosition() {
            const t = this.element.getBoundingClientRect();
            (this.width = this.element.offsetWidth),
                (this.height = this.element.offsetHeight),
                (this.left = t.left),
                (this.top = t.top);
        }
        update(t) {
            const e = this.getValues(t);
            this.setState(
                Object.assign({}, this.state, {
                    style: Nr(Mr({}, this.state.style), {
                        transform: `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === 'x' ? 0 : e.tiltY}deg) rotateY(${this.settings.axis === 'y' ? 0 : e.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`,
                    }),
                })
            ),
                (this.updateCall = null);
        }
        render() {
            const t = Object.assign({}, this.props.style, this.state.style);
            return i.jsx('div', {
                style: t,
                ref: this.ref,
                className: this.props.className,
                onMouseEnter: this.onMouseEnter,
                onMouseMove: this.onMouseMove,
                onMouseLeave: this.onMouseLeave,
                children: this.props.children,
            });
        }
    };
const Li = {
        reverse: !1,
        max: 35,
        perspective: 1e3,
        scale: 1.1,
        speed: 1e3,
        transition: !0,
        axis: null,
        reset: !0,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
    },
    Di = () => {
        const { t } = Mn();
        return i.jsx('section', {
            className:
                'cta flex flex-col items-center justify-center py-[80px]',
            id: 'working',
            children: i.jsxs('div', {
                className:
                    'mx-auto flex w-full max-w-[1350px] items-center gap-6 px-10',
                children: [
                    i.jsxs('div', {
                        className: 'float hidden w-1/2 lg:block',
                        'data-aos': 'fade-up-right',
                        children: [
                            i.jsx(Ii, {
                                options: Li,
                                style: { height: 550, width: 550 },
                                children: i.jsx('img', {
                                    src: er,
                                    alt: 'CTA',
                                    className:
                                        'relative top-40 rotate-3 rounded-3xl',
                                }),
                            }),
                            i.jsx('div', {
                                className:
                                    'relative bottom-[450px] left-[40px] h-[120px] w-[200px] rounded-3xl bg-white/50 p-3 backdrop-blur-md',
                                children: i.jsxs('small', {
                                    className: 'text-justify text-black/60',
                                    children: [t('about.parasmall'), ' '],
                                }),
                            }),
                        ],
                    }),
                    i.jsxs('div', {
                        className: 'lg:w-1/2',
                        'data-aos': 'fade-down-right',
                        children: [
                            i.jsx('h1', {
                                className:
                                    'mb-4 bg-gradient-to-r from-[#40006a] to-[#C43C93] bg-clip-text text-3xl font-semibold text-transparent lg:text-6xl lg:leading-[70px]',
                                children: t('about.title'),
                            }),
                            i.jsx('p', {
                                className:
                                    'text-[14px] text-[#2c2c2c] dark:text-white',
                                children: t('about.para'),
                            }),
                            i.jsx(Po, {
                                variant: 'primary',
                                className:
                                    'mt-7 rounded-xl p-4 px-7 text-white transition hover:scale-105',
                                children: t('about.btn'),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function Bi(t, e) {
    for (var s = 0; s < e.length; s++) {
        var r = e[s];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
    }
}
function Fi(t, e, s) {
    return e && Bi(t.prototype, e), t;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ye,
    gn,
    dt,
    Yt,
    Xt,
    gr,
    Zs,
    Kt,
    Dr,
    eo,
    zt,
    wt,
    to,
    ro = function () {
        return (
            Ye ||
            (typeof window < 'u' &&
                (Ye = window.gsap) &&
                Ye.registerPlugin &&
                Ye)
        );
    },
    no = 1,
    mr = [],
    q = [],
    Mt = [],
    Br = Date.now,
    Hn = function (e, s) {
        return s;
    },
    Yi = function () {
        var e = Dr.core,
            s = e.bridge || {},
            r = e._scrollers,
            n = e._proxies;
        r.push.apply(r, q),
            n.push.apply(n, Mt),
            (q = r),
            (Mt = n),
            (Hn = function (a, l) {
                return s[a](l);
            });
    },
    Gt = function (e, s) {
        return ~Mt.indexOf(e) && Mt[Mt.indexOf(e) + 1][s];
    },
    Fr = function (e) {
        return !!~eo.indexOf(e);
    },
    Ze = function (e, s, r, n, o) {
        return e.addEventListener(s, r, { passive: n !== !1, capture: !!o });
    },
    Qe = function (e, s, r, n) {
        return e.removeEventListener(s, r, !!n);
    },
    rn = 'scrollLeft',
    nn = 'scrollTop',
    Vn = function () {
        return (zt && zt.isPressed) || q.cache++;
    },
    _n = function (e, s) {
        var r = function n(o) {
            if (o || o === 0) {
                no && (dt.history.scrollRestoration = 'manual');
                var a = zt && zt.isPressed;
                (o = n.v = Math.round(o) || (zt && zt.iOS ? 1 : 0)),
                    e(o),
                    (n.cacheID = q.cache),
                    a && Hn('ss', o);
            } else
                (s || q.cache !== n.cacheID || Hn('ref')) &&
                    ((n.cacheID = q.cache), (n.v = e()));
            return n.v + n.offset;
        };
        return (r.offset = 0), e && r;
    },
    st = {
        s: rn,
        p: 'left',
        p2: 'Left',
        os: 'right',
        os2: 'Right',
        d: 'width',
        d2: 'Width',
        a: 'x',
        sc: _n(function (t) {
            return arguments.length
                ? dt.scrollTo(t, Re.sc())
                : dt.pageXOffset || Yt[rn] || Xt[rn] || gr[rn] || 0;
        }),
    },
    Re = {
        s: nn,
        p: 'top',
        p2: 'Top',
        os: 'bottom',
        os2: 'Bottom',
        d: 'height',
        d2: 'Height',
        a: 'y',
        op: st,
        sc: _n(function (t) {
            return arguments.length
                ? dt.scrollTo(st.sc(), t)
                : dt.pageYOffset || Yt[nn] || Xt[nn] || gr[nn] || 0;
        }),
    },
    it = function (e, s) {
        return (
            ((s && s._ctx && s._ctx.selector) || Ye.utils.toArray)(e)[0] ||
            (typeof e == 'string' && Ye.config().nullTargetWarn !== !1
                ? console.warn('Element not found:', e)
                : null)
        );
    },
    Xi = function (e, s) {
        for (var r = s.length; r--; )
            if (s[r] === e || s[r].contains(e)) return !0;
        return !1;
    },
    qt = function (e, s) {
        var r = s.s,
            n = s.sc;
        Fr(e) && (e = Yt.scrollingElement || Xt);
        var o = q.indexOf(e),
            a = n === Re.sc ? 1 : 2;
        !~o && (o = q.push(e) - 1), q[o + a] || Ze(e, 'scroll', Vn);
        var l = q[o + a],
            d =
                l ||
                (q[o + a] =
                    _n(Gt(e, r), !0) ||
                    (Fr(e)
                        ? n
                        : _n(function (h) {
                              return arguments.length ? (e[r] = h) : e[r];
                          })));
        return (
            (d.target = e),
            l || (d.smooth = Ye.getProperty(e, 'scrollBehavior') === 'smooth'),
            d
        );
    },
    Wn = function (e, s, r) {
        var n = e,
            o = e,
            a = Br(),
            l = a,
            d = s || 50,
            h = Math.max(500, d * 3),
            v = function (x, L) {
                var Y = Br();
                L || Y - a > d
                    ? ((o = n), (n = x), (l = a), (a = Y))
                    : r
                      ? (n += x)
                      : (n = o + ((x - o) / (Y - l)) * (a - l));
            },
            j = function () {
                (o = n = r ? 0 : n), (l = a = 0);
            },
            m = function (x) {
                var L = l,
                    Y = o,
                    U = Br();
                return (
                    (x || x === 0) && x !== n && v(x),
                    a === l || U - l > h
                        ? 0
                        : ((n + (r ? Y : -Y)) / ((r ? U : a) - L)) * 1e3
                );
            };
        return { update: v, reset: j, getVelocity: m };
    },
    Er = function (e, s) {
        return (
            s && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
        );
    },
    vs = function (e) {
        var s = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(s) >= Math.abs(r) ? s : r;
    },
    so = function () {
        (Dr = Ye.core.globals().ScrollTrigger), Dr && Dr.core && Yi();
    },
    oo = function (e) {
        return (
            (Ye = e || ro()),
            !gn &&
                Ye &&
                typeof document < 'u' &&
                document.body &&
                ((dt = window),
                (Yt = document),
                (Xt = Yt.documentElement),
                (gr = Yt.body),
                (eo = [dt, Yt, Xt, gr]),
                Ye.utils.clamp,
                (to = Ye.core.context || function () {}),
                (Kt = 'onpointerenter' in gr ? 'pointer' : 'mouse'),
                (Zs = je.isTouch =
                    dt.matchMedia &&
                    dt.matchMedia('(hover: none), (pointer: coarse)').matches
                        ? 1
                        : 'ontouchstart' in dt ||
                            navigator.maxTouchPoints > 0 ||
                            navigator.msMaxTouchPoints > 0
                          ? 2
                          : 0),
                (wt = je.eventTypes =
                    (
                        'ontouchstart' in Xt
                            ? 'touchstart,touchmove,touchcancel,touchend'
                            : 'onpointerdown' in Xt
                              ? 'pointerdown,pointermove,pointercancel,pointerup'
                              : 'mousedown,mousemove,mouseup,mouseup'
                    ).split(',')),
                setTimeout(function () {
                    return (no = 0);
                }, 500),
                so(),
                (gn = 1)),
            gn
        );
    };
st.op = Re;
q.cache = 0;
var je = (function () {
    function t(s) {
        this.init(s);
    }
    var e = t.prototype;
    return (
        (e.init = function (r) {
            gn ||
                oo(Ye) ||
                console.warn('Please gsap.registerPlugin(Observer)'),
                Dr || so();
            var n = r.tolerance,
                o = r.dragMinimum,
                a = r.type,
                l = r.target,
                d = r.lineHeight,
                h = r.debounce,
                v = r.preventDefault,
                j = r.onStop,
                m = r.onStopDelay,
                p = r.ignore,
                x = r.wheelSpeed,
                L = r.event,
                Y = r.onDragStart,
                U = r.onDragEnd,
                $ = r.onDrag,
                K = r.onPress,
                M = r.onRelease,
                xe = r.onRight,
                D = r.onLeft,
                k = r.onUp,
                b = r.onDown,
                Q = r.onChangeX,
                S = r.onChangeY,
                fe = r.onChange,
                C = r.onToggleX,
                ot = r.onToggleY,
                ae = r.onHover,
                de = r.onHoverEnd,
                te = r.onMove,
                X = r.ignoreCheck,
                f = r.isNormalizer,
                re = r.onGestureStart,
                c = r.onGestureEnd,
                le = r.onWheel,
                be = r.onEnable,
                se = r.onDisable,
                ee = r.onClick,
                we = r.scrollSpeed,
                ve = r.capture,
                A = r.allowClicks,
                Ce = r.lockAxis,
                pe = r.onLockAxis;
            (this.target = l = it(l) || Xt),
                (this.vars = r),
                p && (p = Ye.utils.toArray(p)),
                (n = n || 1e-9),
                (o = o || 0),
                (x = x || 1),
                (we = we || 1),
                (a = a || 'wheel,touch,pointer'),
                (h = h !== !1),
                d || (d = parseFloat(dt.getComputedStyle(gr).lineHeight) || 22);
            var Xe,
                ne,
                _e,
                V,
                me,
                Ge,
                qe,
                u = this,
                oe = 0,
                z = 0,
                Te = r.passive || (!v && r.passive !== !1),
                ce = qt(l, st),
                Ke = qt(l, Re),
                Ot = ce(),
                Ht = Ke(),
                Oe =
                    ~a.indexOf('touch') &&
                    !~a.indexOf('pointer') &&
                    wt[0] === 'pointerdown',
                It = Fr(l),
                ke = l.ownerDocument || Yt,
                gt = [0, 0, 0],
                pt = [0, 0, 0],
                Nt = 0,
                _r = function () {
                    return (Nt = Br());
                },
                Me = function (E, J) {
                    return (
                        ((u.event = E) && p && Xi(E.target, p)) ||
                        (J && Oe && E.pointerType !== 'touch') ||
                        (X && X(E, J))
                    );
                },
                Ur = function () {
                    u._vx.reset(), u._vy.reset(), ne.pause(), j && j(u);
                },
                Et = function () {
                    var E = (u.deltaX = vs(gt)),
                        J = (u.deltaY = vs(pt)),
                        g = Math.abs(E) >= n,
                        T = Math.abs(J) >= n;
                    fe && (g || T) && fe(u, E, J, gt, pt),
                        g &&
                            (xe && u.deltaX > 0 && xe(u),
                            D && u.deltaX < 0 && D(u),
                            Q && Q(u),
                            C && u.deltaX < 0 != oe < 0 && C(u),
                            (oe = u.deltaX),
                            (gt[0] = gt[1] = gt[2] = 0)),
                        T &&
                            (b && u.deltaY > 0 && b(u),
                            k && u.deltaY < 0 && k(u),
                            S && S(u),
                            ot && u.deltaY < 0 != z < 0 && ot(u),
                            (z = u.deltaY),
                            (pt[0] = pt[1] = pt[2] = 0)),
                        (V || _e) &&
                            (te && te(u),
                            _e && (Y && _e === 1 && Y(u), $ && $(u), (_e = 0)),
                            (V = !1)),
                        Ge && !(Ge = !1) && pe && pe(u),
                        me && (le(u), (me = !1)),
                        (Xe = 0);
                },
                ar = function (E, J, g) {
                    (gt[g] += E),
                        (pt[g] += J),
                        u._vx.update(E),
                        u._vy.update(J),
                        h ? Xe || (Xe = requestAnimationFrame(Et)) : Et();
                },
                lr = function (E, J) {
                    Ce &&
                        !qe &&
                        ((u.axis = qe = Math.abs(E) > Math.abs(J) ? 'x' : 'y'),
                        (Ge = !0)),
                        qe !== 'y' && ((gt[2] += E), u._vx.update(E, !0)),
                        qe !== 'x' && ((pt[2] += J), u._vy.update(J, !0)),
                        h ? Xe || (Xe = requestAnimationFrame(Et)) : Et();
                },
                Lt = function (E) {
                    if (!Me(E, 1)) {
                        E = Er(E, v);
                        var J = E.clientX,
                            g = E.clientY,
                            T = J - u.x,
                            N = g - u.y,
                            P = u.isDragging;
                        (u.x = J),
                            (u.y = g),
                            (P ||
                                ((T || N) &&
                                    (Math.abs(u.startX - J) >= o ||
                                        Math.abs(u.startY - g) >= o))) &&
                                ((_e = P ? 2 : 1),
                                P || (u.isDragging = !0),
                                lr(T, N));
                    }
                },
                Vt = (u.onPress = function (R) {
                    Me(R, 1) ||
                        (R && R.button) ||
                        ((u.axis = qe = null),
                        ne.pause(),
                        (u.isPressed = !0),
                        (R = Er(R)),
                        (oe = z = 0),
                        (u.startX = u.x = R.clientX),
                        (u.startY = u.y = R.clientY),
                        u._vx.reset(),
                        u._vy.reset(),
                        Ze(f ? l : ke, wt[1], Lt, Te, !0),
                        (u.deltaX = u.deltaY = 0),
                        K && K(u));
                }),
                H = (u.onRelease = function (R) {
                    if (!Me(R, 1)) {
                        Qe(f ? l : ke, wt[1], Lt, !0);
                        var E = !isNaN(u.y - u.startY),
                            J = u.isDragging,
                            g =
                                J &&
                                (Math.abs(u.x - u.startX) > 3 ||
                                    Math.abs(u.y - u.startY) > 3),
                            T = Er(R);
                        !g &&
                            E &&
                            (u._vx.reset(),
                            u._vy.reset(),
                            v &&
                                A &&
                                Ye.delayedCall(0.08, function () {
                                    if (
                                        Br() - Nt > 300 &&
                                        !R.defaultPrevented
                                    ) {
                                        if (R.target.click) R.target.click();
                                        else if (ke.createEvent) {
                                            var N =
                                                ke.createEvent('MouseEvents');
                                            N.initMouseEvent(
                                                'click',
                                                !0,
                                                !0,
                                                dt,
                                                1,
                                                T.screenX,
                                                T.screenY,
                                                T.clientX,
                                                T.clientY,
                                                !1,
                                                !1,
                                                !1,
                                                !1,
                                                0,
                                                null
                                            ),
                                                R.target.dispatchEvent(N);
                                        }
                                    }
                                })),
                            (u.isDragging = u.isGesturing = u.isPressed = !1),
                            j && J && !f && ne.restart(!0),
                            _e && Et(),
                            U && J && U(u),
                            M && M(u, g);
                    }
                }),
                Wt = function (E) {
                    return (
                        E.touches &&
                        E.touches.length > 1 &&
                        (u.isGesturing = !0) &&
                        re(E, u.isDragging)
                    );
                },
                xt = function () {
                    return (u.isGesturing = !1) || c(u);
                },
                bt = function (E) {
                    if (!Me(E)) {
                        var J = ce(),
                            g = Ke();
                        ar((J - Ot) * we, (g - Ht) * we, 1),
                            (Ot = J),
                            (Ht = g),
                            j && ne.restart(!0);
                    }
                },
                vt = function (E) {
                    if (!Me(E)) {
                        (E = Er(E, v)), le && (me = !0);
                        var J =
                            (E.deltaMode === 1
                                ? d
                                : E.deltaMode === 2
                                  ? dt.innerHeight
                                  : 1) * x;
                        ar(E.deltaX * J, E.deltaY * J, 0),
                            j && !f && ne.restart(!0);
                    }
                },
                $t = function (E) {
                    if (!Me(E)) {
                        var J = E.clientX,
                            g = E.clientY,
                            T = J - u.x,
                            N = g - u.y;
                        (u.x = J),
                            (u.y = g),
                            (V = !0),
                            j && ne.restart(!0),
                            (T || N) && lr(T, N);
                    }
                },
                cr = function (E) {
                    (u.event = E), ae(u);
                },
                Tt = function (E) {
                    (u.event = E), de(u);
                },
                kr = function (E) {
                    return Me(E) || (Er(E, v) && ee(u));
                };
            (ne = u._dc = Ye.delayedCall(m || 0.25, Ur).pause()),
                (u.deltaX = u.deltaY = 0),
                (u._vx = Wn(0, 50, !0)),
                (u._vy = Wn(0, 50, !0)),
                (u.scrollX = ce),
                (u.scrollY = Ke),
                (u.isDragging = u.isGesturing = u.isPressed = !1),
                to(this),
                (u.enable = function (R) {
                    return (
                        u.isEnabled ||
                            (Ze(It ? ke : l, 'scroll', Vn),
                            a.indexOf('scroll') >= 0 &&
                                Ze(It ? ke : l, 'scroll', bt, Te, ve),
                            a.indexOf('wheel') >= 0 &&
                                Ze(l, 'wheel', vt, Te, ve),
                            ((a.indexOf('touch') >= 0 && Zs) ||
                                a.indexOf('pointer') >= 0) &&
                                (Ze(l, wt[0], Vt, Te, ve),
                                Ze(ke, wt[2], H),
                                Ze(ke, wt[3], H),
                                A && Ze(l, 'click', _r, !0, !0),
                                ee && Ze(l, 'click', kr),
                                re && Ze(ke, 'gesturestart', Wt),
                                c && Ze(ke, 'gestureend', xt),
                                ae && Ze(l, Kt + 'enter', cr),
                                de && Ze(l, Kt + 'leave', Tt),
                                te && Ze(l, Kt + 'move', $t)),
                            (u.isEnabled = !0),
                            (u.isDragging =
                                u.isGesturing =
                                u.isPressed =
                                V =
                                _e =
                                    !1),
                            u._vx.reset(),
                            u._vy.reset(),
                            (Ot = ce()),
                            (Ht = Ke()),
                            R && R.type && Vt(R),
                            be && be(u)),
                        u
                    );
                }),
                (u.disable = function () {
                    u.isEnabled &&
                        (mr.filter(function (R) {
                            return R !== u && Fr(R.target);
                        }).length || Qe(It ? ke : l, 'scroll', Vn),
                        u.isPressed &&
                            (u._vx.reset(),
                            u._vy.reset(),
                            Qe(f ? l : ke, wt[1], Lt, !0)),
                        Qe(It ? ke : l, 'scroll', bt, ve),
                        Qe(l, 'wheel', vt, ve),
                        Qe(l, wt[0], Vt, ve),
                        Qe(ke, wt[2], H),
                        Qe(ke, wt[3], H),
                        Qe(l, 'click', _r, !0),
                        Qe(l, 'click', kr),
                        Qe(ke, 'gesturestart', Wt),
                        Qe(ke, 'gestureend', xt),
                        Qe(l, Kt + 'enter', cr),
                        Qe(l, Kt + 'leave', Tt),
                        Qe(l, Kt + 'move', $t),
                        (u.isEnabled = u.isPressed = u.isDragging = !1),
                        se && se(u));
                }),
                (u.kill = u.revert =
                    function () {
                        u.disable();
                        var R = mr.indexOf(u);
                        R >= 0 && mr.splice(R, 1), zt === u && (zt = 0);
                    }),
                mr.push(u),
                f && Fr(l) && (zt = u),
                u.enable(L);
        }),
        Fi(t, [
            {
                key: 'velocityX',
                get: function () {
                    return this._vx.getVelocity();
                },
            },
            {
                key: 'velocityY',
                get: function () {
                    return this._vy.getVelocity();
                },
            },
        ]),
        t
    );
})();
je.version = '3.13.0';
je.create = function (t) {
    return new je(t);
};
je.register = oo;
je.getAll = function () {
    return mr.slice();
};
je.getById = function (t) {
    return mr.filter(function (e) {
        return e.vars.id === t;
    })[0];
};
ro() && Ye.registerPlugin(je);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var y,
    fr,
    G,
    ue,
    ut,
    Z,
    ns,
    kn,
    Wr,
    Yr,
    Ar,
    sn,
    $e,
    Nn,
    $n,
    rt,
    ys,
    ws,
    hr,
    io,
    Rn,
    ao,
    et,
    Un,
    lo,
    co,
    Ft,
    Jn,
    ss,
    xr,
    os,
    Sn,
    Kn,
    On,
    on = 1,
    Ue = Date.now,
    In = Ue(),
    mt = 0,
    zr = 0,
    _s = function (e, s, r) {
        var n = ct(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1);
        return (r['_' + s + 'Clamp'] = n), n ? e.substr(6, e.length - 7) : e;
    },
    ks = function (e, s) {
        return s && (!ct(e) || e.substr(0, 6) !== 'clamp(')
            ? 'clamp(' + e + ')'
            : e;
    },
    Gi = function t() {
        return zr && requestAnimationFrame(t);
    },
    Ss = function () {
        return (Nn = 1);
    },
    js = function () {
        return (Nn = 0);
    },
    jt = function (e) {
        return e;
    },
    Rr = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
    },
    uo = function () {
        return typeof window < 'u';
    },
    po = function () {
        return y || (uo() && (y = window.gsap) && y.registerPlugin && y);
    },
    sr = function (e) {
        return !!~ns.indexOf(e);
    },
    fo = function (e) {
        return (
            (e === 'Height' ? os : G['inner' + e]) ||
            ut['client' + e] ||
            Z['client' + e]
        );
    },
    ho = function (e) {
        return (
            Gt(e, 'getBoundingClientRect') ||
            (sr(e)
                ? function () {
                      return (wn.width = G.innerWidth), (wn.height = os), wn;
                  }
                : function () {
                      return At(e);
                  })
        );
    },
    qi = function (e, s, r) {
        var n = r.d,
            o = r.d2,
            a = r.a;
        return (a = Gt(e, 'getBoundingClientRect'))
            ? function () {
                  return a()[n];
              }
            : function () {
                  return (s ? fo(o) : e['client' + o]) || 0;
              };
    },
    Hi = function (e, s) {
        return !s || ~Mt.indexOf(e)
            ? ho(e)
            : function () {
                  return wn;
              };
    },
    Ct = function (e, s) {
        var r = s.s,
            n = s.d2,
            o = s.d,
            a = s.a;
        return Math.max(
            0,
            (r = 'scroll' + n) && (a = Gt(e, r))
                ? a() - ho(e)()[o]
                : sr(e)
                  ? (ut[r] || Z[r]) - fo(n)
                  : e[r] - e['offset' + n]
        );
    },
    an = function (e, s) {
        for (var r = 0; r < hr.length; r += 3)
            (!s || ~s.indexOf(hr[r + 1])) && e(hr[r], hr[r + 1], hr[r + 2]);
    },
    ct = function (e) {
        return typeof e == 'string';
    },
    Je = function (e) {
        return typeof e == 'function';
    },
    Or = function (e) {
        return typeof e == 'number';
    },
    Qt = function (e) {
        return typeof e == 'object';
    },
    Tr = function (e, s, r) {
        return e && e.progress(s ? 0 : 1) && r && e.pause();
    },
    Ln = function (e, s) {
        if (e.enabled) {
            var r = e._ctx
                ? e._ctx.add(function () {
                      return s(e);
                  })
                : s(e);
            r && r.totalTime && (e.callbackAnimation = r);
        }
    },
    dr = Math.abs,
    mo = 'left',
    go = 'top',
    is = 'right',
    as = 'bottom',
    tr = 'width',
    rr = 'height',
    Xr = 'Right',
    Gr = 'Left',
    qr = 'Top',
    Hr = 'Bottom',
    Ne = 'padding',
    ft = 'margin',
    vr = 'Width',
    ls = 'Height',
    ze = 'px',
    ht = function (e) {
        return G.getComputedStyle(e);
    },
    Vi = function (e) {
        var s = ht(e).position;
        e.style.position = s === 'absolute' || s === 'fixed' ? s : 'relative';
    },
    Cs = function (e, s) {
        for (var r in s) r in e || (e[r] = s[r]);
        return e;
    },
    At = function (e, s) {
        var r =
                s &&
                ht(e)[$n] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
                y
                    .to(e, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                    })
                    .progress(1),
            n = e.getBoundingClientRect();
        return r && r.progress(0).kill(), n;
    },
    jn = function (e, s) {
        var r = s.d2;
        return e['offset' + r] || e['client' + r] || 0;
    },
    xo = function (e) {
        var s = [],
            r = e.labels,
            n = e.duration(),
            o;
        for (o in r) s.push(r[o] / n);
        return s;
    },
    Wi = function (e) {
        return function (s) {
            return y.utils.snap(xo(e), s);
        };
    },
    cs = function (e) {
        var s = y.utils.snap(e),
            r =
                Array.isArray(e) &&
                e.slice(0).sort(function (n, o) {
                    return n - o;
                });
        return r
            ? function (n, o, a) {
                  a === void 0 && (a = 0.001);
                  var l;
                  if (!o) return s(n);
                  if (o > 0) {
                      for (n -= a, l = 0; l < r.length; l++)
                          if (r[l] >= n) return r[l];
                      return r[l - 1];
                  } else
                      for (l = r.length, n += a; l--; )
                          if (r[l] <= n) return r[l];
                  return r[0];
              }
            : function (n, o, a) {
                  a === void 0 && (a = 0.001);
                  var l = s(n);
                  return !o || Math.abs(l - n) < a || l - n < 0 == o < 0
                      ? l
                      : s(o < 0 ? n - e : n + e);
              };
    },
    $i = function (e) {
        return function (s, r) {
            return cs(xo(e))(s, r.direction);
        };
    },
    ln = function (e, s, r, n) {
        return r.split(',').forEach(function (o) {
            return e(s, o, n);
        });
    },
    De = function (e, s, r, n, o) {
        return e.addEventListener(s, r, { passive: !n, capture: !!o });
    },
    Le = function (e, s, r, n) {
        return e.removeEventListener(s, r, !!n);
    },
    cn = function (e, s, r) {
        (r = r && r.wheelHandler),
            r && (e(s, 'wheel', r), e(s, 'touchmove', r));
    },
    Ms = {
        startColor: 'green',
        endColor: 'red',
        indent: 0,
        fontSize: '16px',
        fontWeight: 'normal',
    },
    un = { toggleActions: 'play', anticipatePin: 0 },
    Cn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    xn = function (e, s) {
        if (ct(e)) {
            var r = e.indexOf('='),
                n = ~r
                    ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1))
                    : 0;
            ~r &&
                (e.indexOf('%') > r && (n *= s / 100),
                (e = e.substr(0, r - 1))),
                (e =
                    n +
                    (e in Cn
                        ? Cn[e] * s
                        : ~e.indexOf('%')
                          ? (parseFloat(e) * s) / 100
                          : parseFloat(e) || 0));
        }
        return e;
    },
    dn = function (e, s, r, n, o, a, l, d) {
        var h = o.startColor,
            v = o.endColor,
            j = o.fontSize,
            m = o.indent,
            p = o.fontWeight,
            x = ue.createElement('div'),
            L = sr(r) || Gt(r, 'pinType') === 'fixed',
            Y = e.indexOf('scroller') !== -1,
            U = L ? Z : r,
            $ = e.indexOf('start') !== -1,
            K = $ ? h : v,
            M =
                'border-color:' +
                K +
                ';font-size:' +
                j +
                ';color:' +
                K +
                ';font-weight:' +
                p +
                ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
        return (
            (M += 'position:' + ((Y || d) && L ? 'fixed;' : 'absolute;')),
            (Y || d || !L) &&
                (M += (n === Re ? is : as) + ':' + (a + parseFloat(m)) + 'px;'),
            l &&
                (M +=
                    'box-sizing:border-box;text-align:left;width:' +
                    l.offsetWidth +
                    'px;'),
            (x._isStart = $),
            x.setAttribute(
                'class',
                'gsap-marker-' + e + (s ? ' marker-' + s : '')
            ),
            (x.style.cssText = M),
            (x.innerText = s || s === 0 ? e + '-' + s : e),
            U.children[0] ? U.insertBefore(x, U.children[0]) : U.appendChild(x),
            (x._offset = x['offset' + n.op.d2]),
            bn(x, 0, n, $),
            x
        );
    },
    bn = function (e, s, r, n) {
        var o = { display: 'block' },
            a = r[n ? 'os2' : 'p2'],
            l = r[n ? 'p2' : 'os2'];
        (e._isFlipped = n),
            (o[r.a + 'Percent'] = n ? -100 : 0),
            (o[r.a] = n ? '1px' : 0),
            (o['border' + a + vr] = 1),
            (o['border' + l + vr] = 0),
            (o[r.p] = s + 'px'),
            y.set(e, o);
    },
    F = [],
    Qn = {},
    $r,
    Ns = function () {
        return Ue() - mt > 34 && ($r || ($r = requestAnimationFrame(Rt)));
    },
    pr = function () {
        (!et || !et.isPressed || et.startX > Z.clientWidth) &&
            (q.cache++,
            et ? $r || ($r = requestAnimationFrame(Rt)) : Rt(),
            mt || ir('scrollStart'),
            (mt = Ue()));
    },
    Dn = function () {
        (co = G.innerWidth), (lo = G.innerHeight);
    },
    Ir = function (e) {
        q.cache++,
            (e === !0 ||
                (!$e &&
                    !ao &&
                    !ue.fullscreenElement &&
                    !ue.webkitFullscreenElement &&
                    (!Un ||
                        co !== G.innerWidth ||
                        Math.abs(G.innerHeight - lo) >
                            G.innerHeight * 0.25))) &&
                kn.restart(!0);
    },
    or = {},
    Ui = [],
    bo = function t() {
        return Le(I, 'scrollEnd', t) || Zt(!0);
    },
    ir = function (e) {
        return (
            (or[e] &&
                or[e].map(function (s) {
                    return s();
                })) ||
            Ui
        );
    },
    lt = [],
    vo = function (e) {
        for (var s = 0; s < lt.length; s += 5)
            (!e || (lt[s + 4] && lt[s + 4].query === e)) &&
                ((lt[s].style.cssText = lt[s + 1]),
                lt[s].getBBox &&
                    lt[s].setAttribute('transform', lt[s + 2] || ''),
                (lt[s + 3].uncache = 1));
    },
    us = function (e, s) {
        var r;
        for (rt = 0; rt < F.length; rt++)
            (r = F[rt]),
                r && (!s || r._ctx === s) && (e ? r.kill(1) : r.revert(!0, !0));
        (Sn = !0), s && vo(s), s || ir('revert');
    },
    yo = function (e, s) {
        q.cache++,
            (s || !nt) &&
                q.forEach(function (r) {
                    return Je(r) && r.cacheID++ && (r.rec = 0);
                }),
            ct(e) && (G.history.scrollRestoration = ss = e);
    },
    nt,
    nr = 0,
    Es,
    Ji = function () {
        if (Es !== nr) {
            var e = (Es = nr);
            requestAnimationFrame(function () {
                return e === nr && Zt(!0);
            });
        }
    },
    wo = function () {
        Z.appendChild(xr),
            (os = (!et && xr.offsetHeight) || G.innerHeight),
            Z.removeChild(xr);
    },
    Ts = function (e) {
        return Wr(
            '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
        ).forEach(function (s) {
            return (s.style.display = e ? 'none' : 'block');
        });
    },
    Zt = function (e, s) {
        if (
            ((ut = ue.documentElement),
            (Z = ue.body),
            (ns = [G, ue, ut, Z]),
            mt && !e && !Sn)
        ) {
            De(I, 'scrollEnd', bo);
            return;
        }
        wo(),
            (nt = I.isRefreshing = !0),
            q.forEach(function (n) {
                return Je(n) && ++n.cacheID && (n.rec = n());
            });
        var r = ir('refreshInit');
        io && I.sort(),
            s || us(),
            q.forEach(function (n) {
                Je(n) &&
                    (n.smooth && (n.target.style.scrollBehavior = 'auto'),
                    n(0));
            }),
            F.slice(0).forEach(function (n) {
                return n.refresh();
            }),
            (Sn = !1),
            F.forEach(function (n) {
                if (n._subPinOffset && n.pin) {
                    var o = n.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                        a = n.pin[o];
                    n.revert(!0, 1),
                        n.adjustPinSpacing(n.pin[o] - a),
                        n.refresh();
                }
            }),
            (Kn = 1),
            Ts(!0),
            F.forEach(function (n) {
                var o = Ct(n.scroller, n._dir),
                    a = n.vars.end === 'max' || (n._endClamp && n.end > o),
                    l = n._startClamp && n.start >= o;
                (a || l) &&
                    n.setPositions(
                        l ? o - 1 : n.start,
                        a ? Math.max(l ? o : n.start + 1, o) : n.end,
                        !0
                    );
            }),
            Ts(!1),
            (Kn = 0),
            r.forEach(function (n) {
                return n && n.render && n.render(-1);
            }),
            q.forEach(function (n) {
                Je(n) &&
                    (n.smooth &&
                        requestAnimationFrame(function () {
                            return (n.target.style.scrollBehavior = 'smooth');
                        }),
                    n.rec && n(n.rec));
            }),
            yo(ss, 1),
            kn.pause(),
            nr++,
            (nt = 2),
            Rt(2),
            F.forEach(function (n) {
                return Je(n.vars.onRefresh) && n.vars.onRefresh(n);
            }),
            (nt = I.isRefreshing = !1),
            ir('refresh');
    },
    Zn = 0,
    vn = 1,
    Vr,
    Rt = function (e) {
        if (e === 2 || (!nt && !Sn)) {
            (I.isUpdating = !0), Vr && Vr.update(0);
            var s = F.length,
                r = Ue(),
                n = r - In >= 50,
                o = s && F[0].scroll();
            if (
                ((vn = Zn > o ? -1 : 1),
                nt || (Zn = o),
                n &&
                    (mt && !Nn && r - mt > 200 && ((mt = 0), ir('scrollEnd')),
                    (Ar = In),
                    (In = r)),
                vn < 0)
            ) {
                for (rt = s; rt-- > 0; ) F[rt] && F[rt].update(0, n);
                vn = 1;
            } else for (rt = 0; rt < s; rt++) F[rt] && F[rt].update(0, n);
            I.isUpdating = !1;
        }
        $r = 0;
    },
    es = [
        mo,
        go,
        as,
        is,
        ft + Hr,
        ft + Xr,
        ft + qr,
        ft + Gr,
        'display',
        'flexShrink',
        'float',
        'zIndex',
        'gridColumnStart',
        'gridColumnEnd',
        'gridRowStart',
        'gridRowEnd',
        'gridArea',
        'justifySelf',
        'alignSelf',
        'placeSelf',
        'order',
    ],
    yn = es.concat([
        tr,
        rr,
        'boxSizing',
        'max' + vr,
        'max' + ls,
        'position',
        ft,
        Ne,
        Ne + qr,
        Ne + Xr,
        Ne + Hr,
        Ne + Gr,
    ]),
    Ki = function (e, s, r) {
        br(r);
        var n = e._gsap;
        if (n.spacerIsNative) br(n.spacerState);
        else if (e._gsap.swappedIn) {
            var o = s.parentNode;
            o && (o.insertBefore(e, s), o.removeChild(s));
        }
        e._gsap.swappedIn = !1;
    },
    Bn = function (e, s, r, n) {
        if (!e._gsap.swappedIn) {
            for (var o = es.length, a = s.style, l = e.style, d; o--; )
                (d = es[o]), (a[d] = r[d]);
            (a.position = r.position === 'absolute' ? 'absolute' : 'relative'),
                r.display === 'inline' && (a.display = 'inline-block'),
                (l[as] = l[is] = 'auto'),
                (a.flexBasis = r.flexBasis || 'auto'),
                (a.overflow = 'visible'),
                (a.boxSizing = 'border-box'),
                (a[tr] = jn(e, st) + ze),
                (a[rr] = jn(e, Re) + ze),
                (a[Ne] = l[ft] = l[go] = l[mo] = '0'),
                br(n),
                (l[tr] = l['max' + vr] = r[tr]),
                (l[rr] = l['max' + ls] = r[rr]),
                (l[Ne] = r[Ne]),
                e.parentNode !== s &&
                    (e.parentNode.insertBefore(s, e), s.appendChild(e)),
                (e._gsap.swappedIn = !0);
        }
    },
    Qi = /([A-Z])/g,
    br = function (e) {
        if (e) {
            var s = e.t.style,
                r = e.length,
                n = 0,
                o,
                a;
            for ((e.t._gsap || y.core.getCache(e.t)).uncache = 1; n < r; n += 2)
                (a = e[n + 1]),
                    (o = e[n]),
                    a
                        ? (s[o] = a)
                        : s[o] &&
                          s.removeProperty(o.replace(Qi, '-$1').toLowerCase());
        }
    },
    pn = function (e) {
        for (var s = yn.length, r = e.style, n = [], o = 0; o < s; o++)
            n.push(yn[o], r[yn[o]]);
        return (n.t = e), n;
    },
    Zi = function (e, s, r) {
        for (var n = [], o = e.length, a = r ? 8 : 0, l; a < o; a += 2)
            (l = e[a]), n.push(l, l in s ? s[l] : e[a + 1]);
        return (n.t = e.t), n;
    },
    wn = { left: 0, top: 0 },
    Ps = function (e, s, r, n, o, a, l, d, h, v, j, m, p, x) {
        Je(e) && (e = e(d)),
            ct(e) &&
                e.substr(0, 3) === 'max' &&
                (e = m + (e.charAt(4) === '=' ? xn('0' + e.substr(3), r) : 0));
        var L = p ? p.time() : 0,
            Y,
            U,
            $;
        if ((p && p.seek(0), isNaN(e) || (e = +e), Or(e)))
            p &&
                (e = y.utils.mapRange(
                    p.scrollTrigger.start,
                    p.scrollTrigger.end,
                    0,
                    m,
                    e
                )),
                l && bn(l, r, n, !0);
        else {
            Je(s) && (s = s(d));
            var K = (e || '0').split(' '),
                M,
                xe,
                D,
                k;
            ($ = it(s, d) || Z),
                (M = At($) || {}),
                (!M || (!M.left && !M.top)) &&
                    ht($).display === 'none' &&
                    ((k = $.style.display),
                    ($.style.display = 'block'),
                    (M = At($)),
                    k
                        ? ($.style.display = k)
                        : $.style.removeProperty('display')),
                (xe = xn(K[0], M[n.d])),
                (D = xn(K[1] || '0', r)),
                (e = M[n.p] - h[n.p] - v + xe + o - D),
                l && bn(l, D, n, r - D < 20 || (l._isStart && D > 20)),
                (r -= r - D);
        }
        if ((x && ((d[x] = e || -0.001), e < 0 && (e = 0)), a)) {
            var b = e + r,
                Q = a._isStart;
            (Y = 'scroll' + n.d2),
                bn(
                    a,
                    b,
                    n,
                    (Q && b > 20) ||
                        (!Q &&
                            (j ? Math.max(Z[Y], ut[Y]) : a.parentNode[Y]) <=
                                b + 1)
                ),
                j &&
                    ((h = At(l)),
                    j &&
                        (a.style[n.op.p] =
                            h[n.op.p] - n.op.m - a._offset + ze));
        }
        return (
            p &&
                $ &&
                ((Y = At($)),
                p.seek(m),
                (U = At($)),
                (p._caScrollDist = Y[n.p] - U[n.p]),
                (e = (e / p._caScrollDist) * m)),
            p && p.seek(L),
            p ? e : Math.round(e)
        );
    },
    ea = /(webkit|moz|length|cssText|inset)/i,
    As = function (e, s, r, n) {
        if (e.parentNode !== s) {
            var o = e.style,
                a,
                l;
            if (s === Z) {
                (e._stOrig = o.cssText), (l = ht(e));
                for (a in l)
                    !+a &&
                        !ea.test(a) &&
                        l[a] &&
                        typeof o[a] == 'string' &&
                        a !== '0' &&
                        (o[a] = l[a]);
                (o.top = r), (o.left = n);
            } else o.cssText = e._stOrig;
            (y.core.getCache(e).uncache = 1), s.appendChild(e);
        }
    },
    _o = function (e, s, r) {
        var n = s,
            o = n;
        return function (a) {
            var l = Math.round(e());
            return (
                l !== n &&
                    l !== o &&
                    Math.abs(l - n) > 3 &&
                    Math.abs(l - o) > 3 &&
                    ((a = l), r && r()),
                (o = n),
                (n = Math.round(a)),
                n
            );
        };
    },
    fn = function (e, s, r) {
        var n = {};
        (n[s.p] = '+=' + r), y.set(e, n);
    },
    zs = function (e, s) {
        var r = qt(e, s),
            n = '_scroll' + s.p2,
            o = function a(l, d, h, v, j) {
                var m = a.tween,
                    p = d.onComplete,
                    x = {};
                h = h || r();
                var L = _o(r, h, function () {
                    m.kill(), (a.tween = 0);
                });
                return (
                    (j = (v && j) || 0),
                    (v = v || l - h),
                    m && m.kill(),
                    (d[n] = l),
                    (d.inherit = !1),
                    (d.modifiers = x),
                    (x[n] = function () {
                        return L(h + v * m.ratio + j * m.ratio * m.ratio);
                    }),
                    (d.onUpdate = function () {
                        q.cache++, a.tween && Rt();
                    }),
                    (d.onComplete = function () {
                        (a.tween = 0), p && p.call(m);
                    }),
                    (m = a.tween = y.to(e, d)),
                    m
                );
            };
        return (
            (e[n] = r),
            (r.wheelHandler = function () {
                return o.tween && o.tween.kill() && (o.tween = 0);
            }),
            De(e, 'wheel', r.wheelHandler),
            I.isTouch && De(e, 'touchmove', r.wheelHandler),
            o
        );
    },
    I = (function () {
        function t(s, r) {
            fr ||
                t.register(y) ||
                console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
                Jn(this),
                this.init(s, r);
        }
        var e = t.prototype;
        return (
            (e.init = function (r, n) {
                if (
                    ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    !zr)
                ) {
                    this.update = this.refresh = this.kill = jt;
                    return;
                }
                r = Cs(ct(r) || Or(r) || r.nodeType ? { trigger: r } : r, un);
                var o = r,
                    a = o.onUpdate,
                    l = o.toggleClass,
                    d = o.id,
                    h = o.onToggle,
                    v = o.onRefresh,
                    j = o.scrub,
                    m = o.trigger,
                    p = o.pin,
                    x = o.pinSpacing,
                    L = o.invalidateOnRefresh,
                    Y = o.anticipatePin,
                    U = o.onScrubComplete,
                    $ = o.onSnapComplete,
                    K = o.once,
                    M = o.snap,
                    xe = o.pinReparent,
                    D = o.pinSpacer,
                    k = o.containerAnimation,
                    b = o.fastScrollEnd,
                    Q = o.preventOverlaps,
                    S =
                        r.horizontal ||
                        (r.containerAnimation && r.horizontal !== !1)
                            ? st
                            : Re,
                    fe = !j && j !== 0,
                    C = it(r.scroller || G),
                    ot = y.core.getCache(C),
                    ae = sr(C),
                    de =
                        ('pinType' in r
                            ? r.pinType
                            : Gt(C, 'pinType') || (ae && 'fixed')) === 'fixed',
                    te = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                    X = fe && r.toggleActions.split(' '),
                    f = 'markers' in r ? r.markers : un.markers,
                    re = ae ? 0 : parseFloat(ht(C)['border' + S.p2 + vr]) || 0,
                    c = this,
                    le =
                        r.onRefreshInit &&
                        function () {
                            return r.onRefreshInit(c);
                        },
                    be = qi(C, ae, S),
                    se = Hi(C, ae),
                    ee = 0,
                    we = 0,
                    ve = 0,
                    A = qt(C, S),
                    Ce,
                    pe,
                    Xe,
                    ne,
                    _e,
                    V,
                    me,
                    Ge,
                    qe,
                    u,
                    oe,
                    z,
                    Te,
                    ce,
                    Ke,
                    Ot,
                    Ht,
                    Oe,
                    It,
                    ke,
                    gt,
                    pt,
                    Nt,
                    _r,
                    Me,
                    Ur,
                    Et,
                    ar,
                    lr,
                    Lt,
                    Vt,
                    H,
                    Wt,
                    xt,
                    bt,
                    vt,
                    $t,
                    cr,
                    Tt;
                if (
                    ((c._startClamp = c._endClamp = !1),
                    (c._dir = S),
                    (Y *= 45),
                    (c.scroller = C),
                    (c.scroll = k ? k.time.bind(k) : A),
                    (ne = A()),
                    (c.vars = r),
                    (n = n || r.animation),
                    'refreshPriority' in r &&
                        ((io = 1), r.refreshPriority === -9999 && (Vr = c)),
                    (ot.tweenScroll = ot.tweenScroll || {
                        top: zs(C, Re),
                        left: zs(C, st),
                    }),
                    (c.tweenTo = Ce = ot.tweenScroll[S.p]),
                    (c.scrubDuration = function (g) {
                        (Wt = Or(g) && g),
                            Wt
                                ? H
                                    ? H.duration(g)
                                    : (H = y.to(n, {
                                          ease: 'expo',
                                          totalProgress: '+=0',
                                          inherit: !1,
                                          duration: Wt,
                                          paused: !0,
                                          onComplete: function () {
                                              return U && U(c);
                                          },
                                      }))
                                : (H && H.progress(1).kill(), (H = 0));
                    }),
                    n &&
                        ((n.vars.lazy = !1),
                        (n._initted && !c.isReverted) ||
                            (n.vars.immediateRender !== !1 &&
                                r.immediateRender !== !1 &&
                                n.duration() &&
                                n.render(0, !0, !0)),
                        (c.animation = n.pause()),
                        (n.scrollTrigger = c),
                        c.scrubDuration(j),
                        (Lt = 0),
                        d || (d = n.vars.id)),
                    M &&
                        ((!Qt(M) || M.push) && (M = { snapTo: M }),
                        'scrollBehavior' in Z.style &&
                            y.set(ae ? [Z, ut] : C, { scrollBehavior: 'auto' }),
                        q.forEach(function (g) {
                            return (
                                Je(g) &&
                                g.target ===
                                    (ae ? ue.scrollingElement || ut : C) &&
                                (g.smooth = !1)
                            );
                        }),
                        (Xe = Je(M.snapTo)
                            ? M.snapTo
                            : M.snapTo === 'labels'
                              ? Wi(n)
                              : M.snapTo === 'labelsDirectional'
                                ? $i(n)
                                : M.directional !== !1
                                  ? function (g, T) {
                                        return cs(M.snapTo)(
                                            g,
                                            Ue() - we < 500 ? 0 : T.direction
                                        );
                                    }
                                  : y.utils.snap(M.snapTo)),
                        (xt = M.duration || { min: 0.1, max: 2 }),
                        (xt = Qt(xt) ? Yr(xt.min, xt.max) : Yr(xt, xt)),
                        (bt = y
                            .delayedCall(M.delay || Wt / 2 || 0.1, function () {
                                var g = A(),
                                    T = Ue() - we < 500,
                                    N = Ce.tween;
                                if (
                                    (T || Math.abs(c.getVelocity()) < 10) &&
                                    !N &&
                                    !Nn &&
                                    ee !== g
                                ) {
                                    var P = (g - V) / ce,
                                        Ie = n && !fe ? n.totalProgress() : P,
                                        W = T
                                            ? 0
                                            : ((Ie - Vt) / (Ue() - Ar)) * 1e3 ||
                                              0,
                                        Se = y.utils.clamp(
                                            -P,
                                            1 - P,
                                            (dr(W / 2) * W) / 0.185
                                        ),
                                        He = P + (M.inertia === !1 ? 0 : Se),
                                        ye,
                                        he,
                                        ie = M,
                                        yt = ie.onStart,
                                        ge = ie.onInterrupt,
                                        at = ie.onComplete;
                                    if (
                                        ((ye = Xe(He, c)),
                                        Or(ye) || (ye = He),
                                        (he = Math.max(
                                            0,
                                            Math.round(V + ye * ce)
                                        )),
                                        g <= me && g >= V && he !== g)
                                    ) {
                                        if (
                                            N &&
                                            !N._initted &&
                                            N.data <= dr(he - g)
                                        )
                                            return;
                                        M.inertia === !1 && (Se = ye - P),
                                            Ce(
                                                he,
                                                {
                                                    duration: xt(
                                                        dr(
                                                            (Math.max(
                                                                dr(He - Ie),
                                                                dr(ye - Ie)
                                                            ) *
                                                                0.185) /
                                                                W /
                                                                0.05 || 0
                                                        )
                                                    ),
                                                    ease: M.ease || 'power3',
                                                    data: dr(he - g),
                                                    onInterrupt: function () {
                                                        return (
                                                            bt.restart(!0) &&
                                                            ge &&
                                                            ge(c)
                                                        );
                                                    },
                                                    onComplete: function () {
                                                        c.update(),
                                                            (ee = A()),
                                                            n &&
                                                                !fe &&
                                                                (H
                                                                    ? H.resetTo(
                                                                          'totalProgress',
                                                                          ye,
                                                                          n._tTime /
                                                                              n._tDur
                                                                      )
                                                                    : n.progress(
                                                                          ye
                                                                      )),
                                                            (Lt = Vt =
                                                                n && !fe
                                                                    ? n.totalProgress()
                                                                    : c.progress),
                                                            $ && $(c),
                                                            at && at(c);
                                                    },
                                                },
                                                g,
                                                Se * ce,
                                                he - g - Se * ce
                                            ),
                                            yt && yt(c, Ce.tween);
                                    }
                                } else c.isActive && ee !== g && bt.restart(!0);
                            })
                            .pause())),
                    d && (Qn[d] = c),
                    (m = c.trigger = it(m || (p !== !0 && p))),
                    (Tt = m && m._gsap && m._gsap.stRevert),
                    Tt && (Tt = Tt(c)),
                    (p = p === !0 ? m : it(p)),
                    ct(l) && (l = { targets: m, className: l }),
                    p &&
                        (x === !1 ||
                            x === ft ||
                            (x =
                                !x &&
                                p.parentNode &&
                                p.parentNode.style &&
                                ht(p.parentNode).display === 'flex'
                                    ? !1
                                    : Ne),
                        (c.pin = p),
                        (pe = y.core.getCache(p)),
                        pe.spacer
                            ? (Ke = pe.pinState)
                            : (D &&
                                  ((D = it(D)),
                                  D &&
                                      !D.nodeType &&
                                      (D = D.current || D.nativeElement),
                                  (pe.spacerIsNative = !!D),
                                  D && (pe.spacerState = pn(D))),
                              (pe.spacer = Oe = D || ue.createElement('div')),
                              Oe.classList.add('pin-spacer'),
                              d && Oe.classList.add('pin-spacer-' + d),
                              (pe.pinState = Ke = pn(p))),
                        r.force3D !== !1 && y.set(p, { force3D: !0 }),
                        (c.spacer = Oe = pe.spacer),
                        (lr = ht(p)),
                        (_r = lr[x + S.os2]),
                        (ke = y.getProperty(p)),
                        (gt = y.quickSetter(p, S.a, ze)),
                        Bn(p, Oe, lr),
                        (Ht = pn(p))),
                    f)
                ) {
                    (z = Qt(f) ? Cs(f, Ms) : Ms),
                        (u = dn('scroller-start', d, C, S, z, 0)),
                        (oe = dn('scroller-end', d, C, S, z, 0, u)),
                        (It = u['offset' + S.op.d2]);
                    var kr = it(Gt(C, 'content') || C);
                    (Ge = this.markerStart =
                        dn('start', d, kr, S, z, It, 0, k)),
                        (qe = this.markerEnd =
                            dn('end', d, kr, S, z, It, 0, k)),
                        k && (cr = y.quickSetter([Ge, qe], S.a, ze)),
                        !de &&
                            !(Mt.length && Gt(C, 'fixedMarkers') === !0) &&
                            (Vi(ae ? Z : C),
                            y.set([u, oe], { force3D: !0 }),
                            (Ur = y.quickSetter(u, S.a, ze)),
                            (ar = y.quickSetter(oe, S.a, ze)));
                }
                if (k) {
                    var R = k.vars.onUpdate,
                        E = k.vars.onUpdateParams;
                    k.eventCallback('onUpdate', function () {
                        c.update(0, 0, 1), R && R.apply(k, E || []);
                    });
                }
                if (
                    ((c.previous = function () {
                        return F[F.indexOf(c) - 1];
                    }),
                    (c.next = function () {
                        return F[F.indexOf(c) + 1];
                    }),
                    (c.revert = function (g, T) {
                        if (!T) return c.kill(!0);
                        var N = g !== !1 || !c.enabled,
                            P = $e;
                        N !== c.isReverted &&
                            (N &&
                                ((vt = Math.max(A(), c.scroll.rec || 0)),
                                (ve = c.progress),
                                ($t = n && n.progress())),
                            Ge &&
                                [Ge, qe, u, oe].forEach(function (Ie) {
                                    return (Ie.style.display = N
                                        ? 'none'
                                        : 'block');
                                }),
                            N && (($e = c), c.update(N)),
                            p &&
                                (!xe || !c.isActive) &&
                                (N ? Ki(p, Oe, Ke) : Bn(p, Oe, ht(p), Me)),
                            N || c.update(N),
                            ($e = P),
                            (c.isReverted = N));
                    }),
                    (c.refresh = function (g, T, N, P) {
                        if (!(($e || !c.enabled) && !T)) {
                            if (p && g && mt) {
                                De(t, 'scrollEnd', bo);
                                return;
                            }
                            !nt && le && le(c),
                                ($e = c),
                                Ce.tween &&
                                    !N &&
                                    (Ce.tween.kill(), (Ce.tween = 0)),
                                H && H.pause(),
                                L &&
                                    n &&
                                    (n.revert({ kill: !1 }).invalidate(),
                                    n.getChildren &&
                                        n
                                            .getChildren(!0, !0, !1)
                                            .forEach(function (Dt) {
                                                return (
                                                    Dt.vars.immediateRender &&
                                                    Dt.render(0, !0, !0)
                                                );
                                            })),
                                c.isReverted || c.revert(!0, !0),
                                (c._subPinOffset = !1);
                            var Ie = be(),
                                W = se(),
                                Se = k ? k.duration() : Ct(C, S),
                                He = ce <= 0.01 || !ce,
                                ye = 0,
                                he = P || 0,
                                ie = Qt(N) ? N.end : r.end,
                                yt = r.endTrigger || m,
                                ge = Qt(N)
                                    ? N.start
                                    : r.start ||
                                      (r.start === 0 || !m
                                          ? 0
                                          : p
                                            ? '0 0'
                                            : '0 100%'),
                                at = (c.pinnedContainer =
                                    r.pinnedContainer &&
                                    it(r.pinnedContainer, c)),
                                _t = (m && Math.max(0, F.indexOf(c))) || 0,
                                Be = _t,
                                Fe,
                                Ve,
                                Ut,
                                Jr,
                                We,
                                Pe,
                                kt,
                                En,
                                ds,
                                Sr,
                                St,
                                jr,
                                Kr;
                            for (
                                f &&
                                Qt(N) &&
                                ((jr = y.getProperty(u, S.p)),
                                (Kr = y.getProperty(oe, S.p)));
                                Be-- > 0;

                            )
                                (Pe = F[Be]),
                                    Pe.end || Pe.refresh(0, 1) || ($e = c),
                                    (kt = Pe.pin),
                                    kt &&
                                        (kt === m || kt === p || kt === at) &&
                                        !Pe.isReverted &&
                                        (Sr || (Sr = []),
                                        Sr.unshift(Pe),
                                        Pe.revert(!0, !0)),
                                    Pe !== F[Be] && (_t--, Be--);
                            for (
                                Je(ge) && (ge = ge(c)),
                                    ge = _s(ge, 'start', c),
                                    V =
                                        Ps(
                                            ge,
                                            m,
                                            Ie,
                                            S,
                                            A(),
                                            Ge,
                                            u,
                                            c,
                                            W,
                                            re,
                                            de,
                                            Se,
                                            k,
                                            c._startClamp && '_startClamp'
                                        ) || (p ? -0.001 : 0),
                                    Je(ie) && (ie = ie(c)),
                                    ct(ie) &&
                                        !ie.indexOf('+=') &&
                                        (~ie.indexOf(' ')
                                            ? (ie =
                                                  (ct(ge)
                                                      ? ge.split(' ')[0]
                                                      : '') + ie)
                                            : ((ye = xn(ie.substr(2), Ie)),
                                              (ie = ct(ge)
                                                  ? ge
                                                  : (k
                                                        ? y.utils.mapRange(
                                                              0,
                                                              k.duration(),
                                                              k.scrollTrigger
                                                                  .start,
                                                              k.scrollTrigger
                                                                  .end,
                                                              V
                                                          )
                                                        : V) + ye),
                                              (yt = m))),
                                    ie = _s(ie, 'end', c),
                                    me =
                                        Math.max(
                                            V,
                                            Ps(
                                                ie || (yt ? '100% 0' : Se),
                                                yt,
                                                Ie,
                                                S,
                                                A() + ye,
                                                qe,
                                                oe,
                                                c,
                                                W,
                                                re,
                                                de,
                                                Se,
                                                k,
                                                c._endClamp && '_endClamp'
                                            )
                                        ) || -0.001,
                                    ye = 0,
                                    Be = _t;
                                Be--;

                            )
                                (Pe = F[Be]),
                                    (kt = Pe.pin),
                                    kt &&
                                        Pe.start - Pe._pinPush <= V &&
                                        !k &&
                                        Pe.end > 0 &&
                                        ((Fe =
                                            Pe.end -
                                            (c._startClamp
                                                ? Math.max(0, Pe.start)
                                                : Pe.start)),
                                        ((kt === m &&
                                            Pe.start - Pe._pinPush < V) ||
                                            kt === at) &&
                                            isNaN(ge) &&
                                            (ye += Fe * (1 - Pe.progress)),
                                        kt === p && (he += Fe));
                            if (
                                ((V += ye),
                                (me += ye),
                                c._startClamp && (c._startClamp += ye),
                                c._endClamp &&
                                    !nt &&
                                    ((c._endClamp = me || -0.001),
                                    (me = Math.min(me, Ct(C, S)))),
                                (ce = me - V || ((V -= 0.01) && 0.001)),
                                He &&
                                    (ve = y.utils.clamp(
                                        0,
                                        1,
                                        y.utils.normalize(V, me, vt)
                                    )),
                                (c._pinPush = he),
                                Ge &&
                                    ye &&
                                    ((Fe = {}),
                                    (Fe[S.a] = '+=' + ye),
                                    at && (Fe[S.p] = '-=' + A()),
                                    y.set([Ge, qe], Fe)),
                                p && !(Kn && c.end >= Ct(C, S)))
                            )
                                (Fe = ht(p)),
                                    (Jr = S === Re),
                                    (Ut = A()),
                                    (pt = parseFloat(ke(S.a)) + he),
                                    !Se &&
                                        me > 1 &&
                                        ((St = (
                                            ae ? ue.scrollingElement || ut : C
                                        ).style),
                                        (St = {
                                            style: St,
                                            value: St[
                                                'overflow' + S.a.toUpperCase()
                                            ],
                                        }),
                                        ae &&
                                            ht(Z)[
                                                'overflow' + S.a.toUpperCase()
                                            ] !== 'scroll' &&
                                            (St.style[
                                                'overflow' + S.a.toUpperCase()
                                            ] = 'scroll')),
                                    Bn(p, Oe, Fe),
                                    (Ht = pn(p)),
                                    (Ve = At(p, !0)),
                                    (En = de && qt(C, Jr ? st : Re)()),
                                    x
                                        ? ((Me = [x + S.os2, ce + he + ze]),
                                          (Me.t = Oe),
                                          (Be =
                                              x === Ne
                                                  ? jn(p, S) + ce + he
                                                  : 0),
                                          Be &&
                                              (Me.push(S.d, Be + ze),
                                              Oe.style.flexBasis !== 'auto' &&
                                                  (Oe.style.flexBasis =
                                                      Be + ze)),
                                          br(Me),
                                          at &&
                                              F.forEach(function (Dt) {
                                                  Dt.pin === at &&
                                                      Dt.vars.pinSpacing !==
                                                          !1 &&
                                                      (Dt._subPinOffset = !0);
                                              }),
                                          de && A(vt))
                                        : ((Be = jn(p, S)),
                                          Be &&
                                              Oe.style.flexBasis !== 'auto' &&
                                              (Oe.style.flexBasis = Be + ze)),
                                    de &&
                                        ((We = {
                                            top:
                                                Ve.top +
                                                (Jr ? Ut - V : En) +
                                                ze,
                                            left:
                                                Ve.left +
                                                (Jr ? En : Ut - V) +
                                                ze,
                                            boxSizing: 'border-box',
                                            position: 'fixed',
                                        }),
                                        (We[tr] = We['max' + vr] =
                                            Math.ceil(Ve.width) + ze),
                                        (We[rr] = We['max' + ls] =
                                            Math.ceil(Ve.height) + ze),
                                        (We[ft] =
                                            We[ft + qr] =
                                            We[ft + Xr] =
                                            We[ft + Hr] =
                                            We[ft + Gr] =
                                                '0'),
                                        (We[Ne] = Fe[Ne]),
                                        (We[Ne + qr] = Fe[Ne + qr]),
                                        (We[Ne + Xr] = Fe[Ne + Xr]),
                                        (We[Ne + Hr] = Fe[Ne + Hr]),
                                        (We[Ne + Gr] = Fe[Ne + Gr]),
                                        (Ot = Zi(Ke, We, xe)),
                                        nt && A(0)),
                                    n
                                        ? ((ds = n._initted),
                                          Rn(1),
                                          n.render(n.duration(), !0, !0),
                                          (Nt = ke(S.a) - pt + ce + he),
                                          (Et = Math.abs(ce - Nt) > 1),
                                          de &&
                                              Et &&
                                              Ot.splice(Ot.length - 2, 2),
                                          n.render(0, !0, !0),
                                          ds || n.invalidate(!0),
                                          n.parent ||
                                              n.totalTime(n.totalTime()),
                                          Rn(0))
                                        : (Nt = ce),
                                    St &&
                                        (St.value
                                            ? (St.style[
                                                  'overflow' + S.a.toUpperCase()
                                              ] = St.value)
                                            : St.style.removeProperty(
                                                  'overflow-' + S.a
                                              ));
                            else if (m && A() && !k)
                                for (Ve = m.parentNode; Ve && Ve !== Z; )
                                    Ve._pinOffset &&
                                        ((V -= Ve._pinOffset),
                                        (me -= Ve._pinOffset)),
                                        (Ve = Ve.parentNode);
                            Sr &&
                                Sr.forEach(function (Dt) {
                                    return Dt.revert(!1, !0);
                                }),
                                (c.start = V),
                                (c.end = me),
                                (ne = _e = nt ? vt : A()),
                                !k &&
                                    !nt &&
                                    (ne < vt && A(vt), (c.scroll.rec = 0)),
                                c.revert(!1, !0),
                                (we = Ue()),
                                bt && ((ee = -1), bt.restart(!0)),
                                ($e = 0),
                                n &&
                                    fe &&
                                    (n._initted || $t) &&
                                    n.progress() !== $t &&
                                    n
                                        .progress($t || 0, !0)
                                        .render(n.time(), !0, !0),
                                (He ||
                                    ve !== c.progress ||
                                    k ||
                                    L ||
                                    (n && !n._initted)) &&
                                    (n &&
                                        !fe &&
                                        (n._initted ||
                                            ve ||
                                            n.vars.immediateRender !== !1) &&
                                        n.totalProgress(
                                            k && V < -0.001 && !ve
                                                ? y.utils.normalize(V, me, 0)
                                                : ve,
                                            !0
                                        ),
                                    (c.progress =
                                        He || (ne - V) / ce === ve ? 0 : ve)),
                                p &&
                                    x &&
                                    (Oe._pinOffset = Math.round(
                                        c.progress * Nt
                                    )),
                                H && H.invalidate(),
                                isNaN(jr) ||
                                    ((jr -= y.getProperty(u, S.p)),
                                    (Kr -= y.getProperty(oe, S.p)),
                                    fn(u, S, jr),
                                    fn(Ge, S, jr - (P || 0)),
                                    fn(oe, S, Kr),
                                    fn(qe, S, Kr - (P || 0))),
                                He && !nt && c.update(),
                                v && !nt && !Te && ((Te = !0), v(c), (Te = !1));
                        }
                    }),
                    (c.getVelocity = function () {
                        return ((A() - _e) / (Ue() - Ar)) * 1e3 || 0;
                    }),
                    (c.endAnimation = function () {
                        Tr(c.callbackAnimation),
                            n &&
                                (H
                                    ? H.progress(1)
                                    : n.paused()
                                      ? fe || Tr(n, c.direction < 0, 1)
                                      : Tr(n, n.reversed()));
                    }),
                    (c.labelToScroll = function (g) {
                        return (
                            (n &&
                                n.labels &&
                                (V || c.refresh() || V) +
                                    (n.labels[g] / n.duration()) * ce) ||
                            0
                        );
                    }),
                    (c.getTrailing = function (g) {
                        var T = F.indexOf(c),
                            N =
                                c.direction > 0
                                    ? F.slice(0, T).reverse()
                                    : F.slice(T + 1);
                        return (
                            ct(g)
                                ? N.filter(function (P) {
                                      return P.vars.preventOverlaps === g;
                                  })
                                : N
                        ).filter(function (P) {
                            return c.direction > 0 ? P.end <= V : P.start >= me;
                        });
                    }),
                    (c.update = function (g, T, N) {
                        if (!(k && !N && !g)) {
                            var P = nt === !0 ? vt : c.scroll(),
                                Ie = g ? 0 : (P - V) / ce,
                                W = Ie < 0 ? 0 : Ie > 1 ? 1 : Ie || 0,
                                Se = c.progress,
                                He,
                                ye,
                                he,
                                ie,
                                yt,
                                ge,
                                at,
                                _t;
                            if (
                                (T &&
                                    ((_e = ne),
                                    (ne = k ? A() : P),
                                    M &&
                                        ((Vt = Lt),
                                        (Lt =
                                            n && !fe ? n.totalProgress() : W))),
                                Y &&
                                    p &&
                                    !$e &&
                                    !on &&
                                    mt &&
                                    (!W && V < P + ((P - _e) / (Ue() - Ar)) * Y
                                        ? (W = 1e-4)
                                        : W === 1 &&
                                          me >
                                              P +
                                                  ((P - _e) / (Ue() - Ar)) *
                                                      Y &&
                                          (W = 0.9999)),
                                W !== Se && c.enabled)
                            ) {
                                if (
                                    ((He = c.isActive = !!W && W < 1),
                                    (ye = !!Se && Se < 1),
                                    (ge = He !== ye),
                                    (yt = ge || !!W != !!Se),
                                    (c.direction = W > Se ? 1 : -1),
                                    (c.progress = W),
                                    yt &&
                                        !$e &&
                                        ((he =
                                            W && !Se
                                                ? 0
                                                : W === 1
                                                  ? 1
                                                  : Se === 1
                                                    ? 2
                                                    : 3),
                                        fe &&
                                            ((ie =
                                                (!ge &&
                                                    X[he + 1] !== 'none' &&
                                                    X[he + 1]) ||
                                                X[he]),
                                            (_t =
                                                n &&
                                                (ie === 'complete' ||
                                                    ie === 'reset' ||
                                                    ie in n)))),
                                    Q &&
                                        (ge || _t) &&
                                        (_t || j || !n) &&
                                        (Je(Q)
                                            ? Q(c)
                                            : c
                                                  .getTrailing(Q)
                                                  .forEach(function (Ut) {
                                                      return Ut.endAnimation();
                                                  })),
                                    fe ||
                                        (H && !$e && !on
                                            ? (H._dp._time - H._start !==
                                                  H._time &&
                                                  H.render(
                                                      H._dp._time - H._start
                                                  ),
                                              H.resetTo
                                                  ? H.resetTo(
                                                        'totalProgress',
                                                        W,
                                                        n._tTime / n._tDur
                                                    )
                                                  : ((H.vars.totalProgress = W),
                                                    H.invalidate().restart()))
                                            : n &&
                                              n.totalProgress(
                                                  W,
                                                  !!($e && (we || g))
                                              )),
                                    p)
                                ) {
                                    if (
                                        (g && x && (Oe.style[x + S.os2] = _r),
                                        !de)
                                    )
                                        gt(Rr(pt + Nt * W));
                                    else if (yt) {
                                        if (
                                            ((at =
                                                !g &&
                                                W > Se &&
                                                me + 1 > P &&
                                                P + 1 >= Ct(C, S)),
                                            xe)
                                        )
                                            if (!g && (He || at)) {
                                                var Be = At(p, !0),
                                                    Fe = P - V;
                                                As(
                                                    p,
                                                    Z,
                                                    Be.top +
                                                        (S === Re ? Fe : 0) +
                                                        ze,
                                                    Be.left +
                                                        (S === Re ? 0 : Fe) +
                                                        ze
                                                );
                                            } else As(p, Oe);
                                        br(He || at ? Ot : Ht),
                                            (Et && W < 1 && He) ||
                                                gt(
                                                    pt +
                                                        (W === 1 && !at
                                                            ? Nt
                                                            : 0)
                                                );
                                    }
                                }
                                M && !Ce.tween && !$e && !on && bt.restart(!0),
                                    l &&
                                        (ge || (K && W && (W < 1 || !On))) &&
                                        Wr(l.targets).forEach(function (Ut) {
                                            return Ut.classList[
                                                He || K ? 'add' : 'remove'
                                            ](l.className);
                                        }),
                                    a && !fe && !g && a(c),
                                    yt && !$e
                                        ? (fe &&
                                              (_t &&
                                                  (ie === 'complete'
                                                      ? n
                                                            .pause()
                                                            .totalProgress(1)
                                                      : ie === 'reset'
                                                        ? n.restart(!0).pause()
                                                        : ie === 'restart'
                                                          ? n.restart(!0)
                                                          : n[ie]()),
                                              a && a(c)),
                                          (ge || !On) &&
                                              (h && ge && Ln(c, h),
                                              te[he] && Ln(c, te[he]),
                                              K &&
                                                  (W === 1
                                                      ? c.kill(!1, 1)
                                                      : (te[he] = 0)),
                                              ge ||
                                                  ((he = W === 1 ? 1 : 3),
                                                  te[he] && Ln(c, te[he]))),
                                          b &&
                                              !He &&
                                              Math.abs(c.getVelocity()) >
                                                  (Or(b) ? b : 2500) &&
                                              (Tr(c.callbackAnimation),
                                              H
                                                  ? H.progress(1)
                                                  : Tr(
                                                        n,
                                                        ie === 'reverse'
                                                            ? 1
                                                            : !W,
                                                        1
                                                    )))
                                        : fe && a && !$e && a(c);
                            }
                            if (ar) {
                                var Ve = k
                                    ? (P / k.duration()) *
                                      (k._caScrollDist || 0)
                                    : P;
                                Ur(Ve + (u._isFlipped ? 1 : 0)), ar(Ve);
                            }
                            cr &&
                                cr(
                                    (-P / k.duration()) * (k._caScrollDist || 0)
                                );
                        }
                    }),
                    (c.enable = function (g, T) {
                        c.enabled ||
                            ((c.enabled = !0),
                            De(C, 'resize', Ir),
                            ae || De(C, 'scroll', pr),
                            le && De(t, 'refreshInit', le),
                            g !== !1 &&
                                ((c.progress = ve = 0), (ne = _e = ee = A())),
                            T !== !1 && c.refresh());
                    }),
                    (c.getTween = function (g) {
                        return g && Ce ? Ce.tween : H;
                    }),
                    (c.setPositions = function (g, T, N, P) {
                        if (k) {
                            var Ie = k.scrollTrigger,
                                W = k.duration(),
                                Se = Ie.end - Ie.start;
                            (g = Ie.start + (Se * g) / W),
                                (T = Ie.start + (Se * T) / W);
                        }
                        c.refresh(
                            !1,
                            !1,
                            {
                                start: ks(g, N && !!c._startClamp),
                                end: ks(T, N && !!c._endClamp),
                            },
                            P
                        ),
                            c.update();
                    }),
                    (c.adjustPinSpacing = function (g) {
                        if (Me && g) {
                            var T = Me.indexOf(S.d) + 1;
                            (Me[T] = parseFloat(Me[T]) + g + ze),
                                (Me[1] = parseFloat(Me[1]) + g + ze),
                                br(Me);
                        }
                    }),
                    (c.disable = function (g, T) {
                        if (
                            c.enabled &&
                            (g !== !1 && c.revert(!0, !0),
                            (c.enabled = c.isActive = !1),
                            T || (H && H.pause()),
                            (vt = 0),
                            pe && (pe.uncache = 1),
                            le && Le(t, 'refreshInit', le),
                            bt &&
                                (bt.pause(),
                                Ce.tween && Ce.tween.kill() && (Ce.tween = 0)),
                            !ae)
                        ) {
                            for (var N = F.length; N--; )
                                if (F[N].scroller === C && F[N] !== c) return;
                            Le(C, 'resize', Ir), ae || Le(C, 'scroll', pr);
                        }
                    }),
                    (c.kill = function (g, T) {
                        c.disable(g, T), H && !T && H.kill(), d && delete Qn[d];
                        var N = F.indexOf(c);
                        N >= 0 && F.splice(N, 1),
                            N === rt && vn > 0 && rt--,
                            (N = 0),
                            F.forEach(function (P) {
                                return P.scroller === c.scroller && (N = 1);
                            }),
                            N || nt || (c.scroll.rec = 0),
                            n &&
                                ((n.scrollTrigger = null),
                                g && n.revert({ kill: !1 }),
                                T || n.kill()),
                            Ge &&
                                [Ge, qe, u, oe].forEach(function (P) {
                                    return (
                                        P.parentNode &&
                                        P.parentNode.removeChild(P)
                                    );
                                }),
                            Vr === c && (Vr = 0),
                            p &&
                                (pe && (pe.uncache = 1),
                                (N = 0),
                                F.forEach(function (P) {
                                    return P.pin === p && N++;
                                }),
                                N || (pe.spacer = 0)),
                            r.onKill && r.onKill(c);
                    }),
                    F.push(c),
                    c.enable(!1, !1),
                    Tt && Tt(c),
                    n && n.add && !ce)
                ) {
                    var J = c.update;
                    (c.update = function () {
                        (c.update = J), q.cache++, V || me || c.refresh();
                    }),
                        y.delayedCall(0.01, c.update),
                        (ce = 0.01),
                        (V = me = 0);
                } else c.refresh();
                p && Ji();
            }),
            (t.register = function (r) {
                return (
                    fr ||
                        ((y = r || po()),
                        uo() && window.document && t.enable(),
                        (fr = zr)),
                    fr
                );
            }),
            (t.defaults = function (r) {
                if (r) for (var n in r) un[n] = r[n];
                return un;
            }),
            (t.disable = function (r, n) {
                (zr = 0),
                    F.forEach(function (a) {
                        return a[n ? 'kill' : 'disable'](r);
                    }),
                    Le(G, 'wheel', pr),
                    Le(ue, 'scroll', pr),
                    clearInterval(sn),
                    Le(ue, 'touchcancel', jt),
                    Le(Z, 'touchstart', jt),
                    ln(Le, ue, 'pointerdown,touchstart,mousedown', Ss),
                    ln(Le, ue, 'pointerup,touchend,mouseup', js),
                    kn.kill(),
                    an(Le);
                for (var o = 0; o < q.length; o += 3)
                    cn(Le, q[o], q[o + 1]), cn(Le, q[o], q[o + 2]);
            }),
            (t.enable = function () {
                if (
                    ((G = window),
                    (ue = document),
                    (ut = ue.documentElement),
                    (Z = ue.body),
                    y &&
                        ((Wr = y.utils.toArray),
                        (Yr = y.utils.clamp),
                        (Jn = y.core.context || jt),
                        (Rn = y.core.suppressOverwrites || jt),
                        (ss = G.history.scrollRestoration || 'auto'),
                        (Zn = G.pageYOffset || 0),
                        y.core.globals('ScrollTrigger', t),
                        Z))
                ) {
                    (zr = 1),
                        (xr = document.createElement('div')),
                        (xr.style.height = '100vh'),
                        (xr.style.position = 'absolute'),
                        wo(),
                        Gi(),
                        je.register(y),
                        (t.isTouch = je.isTouch),
                        (Ft =
                            je.isTouch &&
                            /(iPad|iPhone|iPod|Mac)/g.test(
                                navigator.userAgent
                            )),
                        (Un = je.isTouch === 1),
                        De(G, 'wheel', pr),
                        (ns = [G, ue, ut, Z]),
                        y.matchMedia
                            ? ((t.matchMedia = function (h) {
                                  var v = y.matchMedia(),
                                      j;
                                  for (j in h) v.add(j, h[j]);
                                  return v;
                              }),
                              y.addEventListener('matchMediaInit', function () {
                                  return us();
                              }),
                              y.addEventListener(
                                  'matchMediaRevert',
                                  function () {
                                      return vo();
                                  }
                              ),
                              y.addEventListener('matchMedia', function () {
                                  Zt(0, 1), ir('matchMedia');
                              }),
                              y
                                  .matchMedia()
                                  .add('(orientation: portrait)', function () {
                                      return Dn(), Dn;
                                  }))
                            : console.warn('Requires GSAP 3.11.0 or later'),
                        Dn(),
                        De(ue, 'scroll', pr);
                    var r = Z.hasAttribute('style'),
                        n = Z.style,
                        o = n.borderTopStyle,
                        a = y.core.Animation.prototype,
                        l,
                        d;
                    for (
                        a.revert ||
                            Object.defineProperty(a, 'revert', {
                                value: function () {
                                    return this.time(-0.01, !0);
                                },
                            }),
                            n.borderTopStyle = 'solid',
                            l = At(Z),
                            Re.m = Math.round(l.top + Re.sc()) || 0,
                            st.m = Math.round(l.left + st.sc()) || 0,
                            o
                                ? (n.borderTopStyle = o)
                                : n.removeProperty('border-top-style'),
                            r ||
                                (Z.setAttribute('style', ''),
                                Z.removeAttribute('style')),
                            sn = setInterval(Ns, 250),
                            y.delayedCall(0.5, function () {
                                return (on = 0);
                            }),
                            De(ue, 'touchcancel', jt),
                            De(Z, 'touchstart', jt),
                            ln(De, ue, 'pointerdown,touchstart,mousedown', Ss),
                            ln(De, ue, 'pointerup,touchend,mouseup', js),
                            $n = y.utils.checkPrefix('transform'),
                            yn.push($n),
                            fr = Ue(),
                            kn = y.delayedCall(0.2, Zt).pause(),
                            hr = [
                                ue,
                                'visibilitychange',
                                function () {
                                    var h = G.innerWidth,
                                        v = G.innerHeight;
                                    ue.hidden
                                        ? ((ys = h), (ws = v))
                                        : (ys !== h || ws !== v) && Ir();
                                },
                                ue,
                                'DOMContentLoaded',
                                Zt,
                                G,
                                'load',
                                Zt,
                                G,
                                'resize',
                                Ir,
                            ],
                            an(De),
                            F.forEach(function (h) {
                                return h.enable(0, 1);
                            }),
                            d = 0;
                        d < q.length;
                        d += 3
                    )
                        cn(Le, q[d], q[d + 1]), cn(Le, q[d], q[d + 2]);
                }
            }),
            (t.config = function (r) {
                'limitCallbacks' in r && (On = !!r.limitCallbacks);
                var n = r.syncInterval;
                (n && clearInterval(sn)) || ((sn = n) && setInterval(Ns, n)),
                    'ignoreMobileResize' in r &&
                        (Un = t.isTouch === 1 && r.ignoreMobileResize),
                    'autoRefreshEvents' in r &&
                        (an(Le) || an(De, r.autoRefreshEvents || 'none'),
                        (ao =
                            (r.autoRefreshEvents + '').indexOf('resize') ===
                            -1));
            }),
            (t.scrollerProxy = function (r, n) {
                var o = it(r),
                    a = q.indexOf(o),
                    l = sr(o);
                ~a && q.splice(a, l ? 6 : 2),
                    n && (l ? Mt.unshift(G, n, Z, n, ut, n) : Mt.unshift(o, n));
            }),
            (t.clearMatchMedia = function (r) {
                F.forEach(function (n) {
                    return n._ctx && n._ctx.query === r && n._ctx.kill(!0, !0);
                });
            }),
            (t.isInViewport = function (r, n, o) {
                var a = (ct(r) ? it(r) : r).getBoundingClientRect(),
                    l = a[o ? tr : rr] * n || 0;
                return o
                    ? a.right - l > 0 && a.left + l < G.innerWidth
                    : a.bottom - l > 0 && a.top + l < G.innerHeight;
            }),
            (t.positionInViewport = function (r, n, o) {
                ct(r) && (r = it(r));
                var a = r.getBoundingClientRect(),
                    l = a[o ? tr : rr],
                    d =
                        n == null
                            ? l / 2
                            : n in Cn
                              ? Cn[n] * l
                              : ~n.indexOf('%')
                                ? (parseFloat(n) * l) / 100
                                : parseFloat(n) || 0;
                return o
                    ? (a.left + d) / G.innerWidth
                    : (a.top + d) / G.innerHeight;
            }),
            (t.killAll = function (r) {
                if (
                    (F.slice(0).forEach(function (o) {
                        return o.vars.id !== 'ScrollSmoother' && o.kill();
                    }),
                    r !== !0)
                ) {
                    var n = or.killAll || [];
                    (or = {}),
                        n.forEach(function (o) {
                            return o();
                        });
                }
            }),
            t
        );
    })();
I.version = '3.13.0';
I.saveStyles = function (t) {
    return t
        ? Wr(t).forEach(function (e) {
              if (e && e.style) {
                  var s = lt.indexOf(e);
                  s >= 0 && lt.splice(s, 5),
                      lt.push(
                          e,
                          e.style.cssText,
                          e.getBBox && e.getAttribute('transform'),
                          y.core.getCache(e),
                          Jn()
                      );
              }
          })
        : lt;
};
I.revert = function (t, e) {
    return us(!t, e);
};
I.create = function (t, e) {
    return new I(t, e);
};
I.refresh = function (t) {
    return t ? Ir(!0) : (fr || I.register()) && Zt(!0);
};
I.update = function (t) {
    return ++q.cache && Rt(t === !0 ? 2 : 0);
};
I.clearScrollMemory = yo;
I.maxScroll = function (t, e) {
    return Ct(t, e ? st : Re);
};
I.getScrollFunc = function (t, e) {
    return qt(it(t), e ? st : Re);
};
I.getById = function (t) {
    return Qn[t];
};
I.getAll = function () {
    return F.filter(function (t) {
        return t.vars.id !== 'ScrollSmoother';
    });
};
I.isScrolling = function () {
    return !!mt;
};
I.snapDirectional = cs;
I.addEventListener = function (t, e) {
    var s = or[t] || (or[t] = []);
    ~s.indexOf(e) || s.push(e);
};
I.removeEventListener = function (t, e) {
    var s = or[t],
        r = s && s.indexOf(e);
    r >= 0 && s.splice(r, 1);
};
I.batch = function (t, e) {
    var s = [],
        r = {},
        n = e.interval || 0.016,
        o = e.batchMax || 1e9,
        a = function (h, v) {
            var j = [],
                m = [],
                p = y
                    .delayedCall(n, function () {
                        v(j, m), (j = []), (m = []);
                    })
                    .pause();
            return function (x) {
                j.length || p.restart(!0),
                    j.push(x.trigger),
                    m.push(x),
                    o <= j.length && p.progress(1);
            };
        },
        l;
    for (l in e)
        r[l] =
            l.substr(0, 2) === 'on' && Je(e[l]) && l !== 'onRefreshInit'
                ? a(l, e[l])
                : e[l];
    return (
        Je(o) &&
            ((o = o()),
            De(I, 'refresh', function () {
                return (o = e.batchMax());
            })),
        Wr(t).forEach(function (d) {
            var h = {};
            for (l in r) h[l] = r[l];
            (h.trigger = d), s.push(I.create(h));
        }),
        s
    );
};
var Rs = function (e, s, r, n) {
        return (
            s > n ? e(n) : s < 0 && e(0),
            r > n ? (n - s) / (r - s) : r < 0 ? s / (s - r) : 1
        );
    },
    Fn = function t(e, s) {
        s === !0
            ? e.style.removeProperty('touch-action')
            : (e.style.touchAction =
                  s === !0
                      ? 'auto'
                      : s
                        ? 'pan-' + s + (je.isTouch ? ' pinch-zoom' : '')
                        : 'none'),
            e === ut && t(Z, s);
    },
    hn = { auto: 1, scroll: 1 },
    ta = function (e) {
        var s = e.event,
            r = e.target,
            n = e.axis,
            o = (s.changedTouches ? s.changedTouches[0] : s).target,
            a = o._gsap || y.core.getCache(o),
            l = Ue(),
            d;
        if (!a._isScrollT || l - a._isScrollT > 2e3) {
            for (
                ;
                o &&
                o !== Z &&
                ((o.scrollHeight <= o.clientHeight &&
                    o.scrollWidth <= o.clientWidth) ||
                    !(hn[(d = ht(o)).overflowY] || hn[d.overflowX]));

            )
                o = o.parentNode;
            (a._isScroll =
                o &&
                o !== r &&
                !sr(o) &&
                (hn[(d = ht(o)).overflowY] || hn[d.overflowX])),
                (a._isScrollT = l);
        }
        (a._isScroll || n === 'x') &&
            (s.stopPropagation(), (s._gsapAllow = !0));
    },
    ko = function (e, s, r, n) {
        return je.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: s,
            onWheel: (n = n && ta),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
                return r && De(ue, je.eventTypes[0], Is, !1, !0);
            },
            onDisable: function () {
                return Le(ue, je.eventTypes[0], Is, !0);
            },
        });
    },
    ra = /(input|label|select|textarea)/i,
    Os,
    Is = function (e) {
        var s = ra.test(e.target.tagName);
        (s || Os) && ((e._gsapAllow = !0), (Os = s));
    },
    na = function (e) {
        Qt(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = 'wheel,touch'),
            (e.debounce = !!e.debounce),
            (e.id = e.id || 'normalizer');
        var s = e,
            r = s.normalizeScrollX,
            n = s.momentum,
            o = s.allowNestedScroll,
            a = s.onRelease,
            l,
            d,
            h = it(e.target) || ut,
            v = y.core.globals().ScrollSmoother,
            j = v && v.get(),
            m =
                Ft &&
                ((e.content && it(e.content)) ||
                    (j && e.content !== !1 && !j.smooth() && j.content())),
            p = qt(h, Re),
            x = qt(h, st),
            L = 1,
            Y =
                (je.isTouch && G.visualViewport
                    ? G.visualViewport.scale * G.visualViewport.width
                    : G.outerWidth) / G.innerWidth,
            U = 0,
            $ = Je(n)
                ? function () {
                      return n(l);
                  }
                : function () {
                      return n || 2.8;
                  },
            K,
            M,
            xe = ko(h, e.type, !0, o),
            D = function () {
                return (M = !1);
            },
            k = jt,
            b = jt,
            Q = function () {
                (d = Ct(h, Re)),
                    (b = Yr(Ft ? 1 : 0, d)),
                    r && (k = Yr(0, Ct(h, st))),
                    (K = nr);
            },
            S = function () {
                (m._gsap.y = Rr(parseFloat(m._gsap.y) + p.offset) + 'px'),
                    (m.style.transform =
                        'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                        parseFloat(m._gsap.y) +
                        ', 0, 1)'),
                    (p.offset = p.cacheID = 0);
            },
            fe = function () {
                if (M) {
                    requestAnimationFrame(D);
                    var f = Rr(l.deltaY / 2),
                        re = b(p.v - f);
                    if (m && re !== p.v + p.offset) {
                        p.offset = re - p.v;
                        var c = Rr(
                            (parseFloat(m && m._gsap.y) || 0) - p.offset
                        );
                        (m.style.transform =
                            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                            c +
                            ', 0, 1)'),
                            (m._gsap.y = c + 'px'),
                            (p.cacheID = q.cache),
                            Rt();
                    }
                    return !0;
                }
                p.offset && S(), (M = !0);
            },
            C,
            ot,
            ae,
            de,
            te = function () {
                Q(),
                    C.isActive() &&
                        C.vars.scrollY > d &&
                        (p() > d
                            ? C.progress(1) && p(d)
                            : C.resetTo('scrollY', d));
            };
        return (
            m && y.set(m, { y: '+=0' }),
            (e.ignoreCheck = function (X) {
                return (
                    (Ft && X.type === 'touchmove' && fe()) ||
                    (L > 1.05 && X.type !== 'touchstart') ||
                    l.isGesturing ||
                    (X.touches && X.touches.length > 1)
                );
            }),
            (e.onPress = function () {
                M = !1;
                var X = L;
                (L = Rr(
                    ((G.visualViewport && G.visualViewport.scale) || 1) / Y
                )),
                    C.pause(),
                    X !== L && Fn(h, L > 1.01 ? !0 : r ? !1 : 'x'),
                    (ot = x()),
                    (ae = p()),
                    Q(),
                    (K = nr);
            }),
            (e.onRelease = e.onGestureStart =
                function (X, f) {
                    if ((p.offset && S(), !f)) de.restart(!0);
                    else {
                        q.cache++;
                        var re = $(),
                            c,
                            le;
                        r &&
                            ((c = x()),
                            (le = c + (re * 0.05 * -X.velocityX) / 0.227),
                            (re *= Rs(x, c, le, Ct(h, st))),
                            (C.vars.scrollX = k(le))),
                            (c = p()),
                            (le = c + (re * 0.05 * -X.velocityY) / 0.227),
                            (re *= Rs(p, c, le, Ct(h, Re))),
                            (C.vars.scrollY = b(le)),
                            C.invalidate().duration(re).play(0.01),
                            ((Ft && C.vars.scrollY >= d) || c >= d - 1) &&
                                y.to({}, { onUpdate: te, duration: re });
                    }
                    a && a(X);
                }),
            (e.onWheel = function () {
                C._ts && C.pause(), Ue() - U > 1e3 && ((K = 0), (U = Ue()));
            }),
            (e.onChange = function (X, f, re, c, le) {
                if (
                    (nr !== K && Q(),
                    f &&
                        r &&
                        x(
                            k(
                                c[2] === f
                                    ? ot + (X.startX - X.x)
                                    : x() + f - c[1]
                            )
                        ),
                    re)
                ) {
                    p.offset && S();
                    var be = le[2] === re,
                        se = be ? ae + X.startY - X.y : p() + re - le[1],
                        ee = b(se);
                    be && se !== ee && (ae += ee - se), p(ee);
                }
                (re || f) && Rt();
            }),
            (e.onEnable = function () {
                Fn(h, r ? !1 : 'x'),
                    I.addEventListener('refresh', te),
                    De(G, 'resize', te),
                    p.smooth &&
                        ((p.target.style.scrollBehavior = 'auto'),
                        (p.smooth = x.smooth = !1)),
                    xe.enable();
            }),
            (e.onDisable = function () {
                Fn(h, !0),
                    Le(G, 'resize', te),
                    I.removeEventListener('refresh', te),
                    xe.kill();
            }),
            (e.lockAxis = e.lockAxis !== !1),
            (l = new je(e)),
            (l.iOS = Ft),
            Ft && !p() && p(1),
            Ft && y.ticker.add(jt),
            (de = l._dc),
            (C = y.to(l, {
                ease: 'power4',
                paused: !0,
                inherit: !1,
                scrollX: r ? '+=0.1' : '+=0',
                scrollY: '+=0.1',
                modifiers: {
                    scrollY: _o(p, p(), function () {
                        return C.pause();
                    }),
                },
                onUpdate: Rt,
                onComplete: de.vars.onComplete,
            })),
            l
        );
    };
I.sort = function (t) {
    if (Je(t)) return F.sort(t);
    var e = G.pageYOffset || 0;
    return (
        I.getAll().forEach(function (s) {
            return (s._sortY = s.trigger
                ? e + s.trigger.getBoundingClientRect().top
                : s.start + G.innerHeight);
        }),
        F.sort(
            t ||
                function (s, r) {
                    return (
                        (s.vars.refreshPriority || 0) * -1e6 +
                        (s.vars.containerAnimation ? 1e6 : s._sortY) -
                        ((r.vars.containerAnimation ? 1e6 : r._sortY) +
                            (r.vars.refreshPriority || 0) * -1e6)
                    );
                }
        )
    );
};
I.observe = function (t) {
    return new je(t);
};
I.normalizeScroll = function (t) {
    if (typeof t > 'u') return et;
    if (t === !0 && et) return et.enable();
    if (t === !1) {
        et && et.kill(), (et = t);
        return;
    }
    var e = t instanceof je ? t : na(t);
    return (
        et && et.target === e.target && et.kill(), sr(e.target) && (et = e), e
    );
};
I.core = {
    _getVelocityProp: Wn,
    _inputObserver: ko,
    _scrollers: q,
    _proxies: Mt,
    bridge: {
        ss: function () {
            mt || ir('scrollStart'), (mt = Ue());
        },
        ref: function () {
            return $e;
        },
    },
};
po() && y.registerPlugin(I);
Lr.registerPlugin(I);
function sa() {
    const t = O.useRef(null);
    return (
        O.useEffect(() => {
            const e = [
                { id: '#card-1', endTranslateX: -2e3, rotate: 45 },
                { id: '#card-2', endTranslateX: -1e3, rotate: -30 },
                { id: '#card-3', endTranslateX: -2e3, rotate: 45 },
                { id: '#card-4', endTranslateX: -1500, rotate: -30 },
            ];
            if (t.current) {
                let s = Lr.context(() => {
                    I.create({
                        trigger: t.current,
                        start: 'top top',
                        end: '+=600vh',
                        scrub: 1,
                        pin: !0,
                        onUpdate: (r) => {
                            Lr.to(t.current, {
                                x: `${-350 * r.progress}vw`,
                                duration: 1,
                                ease: 'power3.out',
                            });
                        },
                    }),
                        e.forEach((r) => {
                            I.create({
                                trigger: r.id,
                                start: 'top top',
                                end: '+650vh',
                                scrub: 1,
                                onUpdate: (n) => {
                                    Lr.to(r.id, {
                                        x: `${r.endTranslateX * n.progress}px`,
                                        rotate: `${r.rotate * n.progress * 2}`,
                                        duration: 0.5,
                                        ease: 'power3.out',
                                    });
                                },
                            });
                        });
                });
                return () => s.revert();
            }
        }, []),
        i.jsx('div', {
            className: 'textPin container',
            children: i.jsxs('section', {
                className: 'wrapper-404',
                ref: t,
                children: [
                    i.jsx('h1', {
                        className: 'text-slate-800 dark:text-white',
                        children: 'TheEnd.Page',
                    }),
                    i.jsxs('div', {
                        className:
                            'card bg-opacity-25 bg-white p-5 shadow-2xl backdrop-blur-sm',
                        id: 'card-1',
                        children: [
                            i.jsx('span', {
                                className: 'text-[20px] font-bold',
                                children: 'Les mots de la fin',
                            }),
                            i.jsx('p', {
                                children:
                                    'Derrière chaque fin, il y a une histoire. Ici sont rassemblées celles que l’on a osé écrire et partager. Pages sincères, rageuses, drôles ou touchantes — chaque adieu compte.',
                            }),
                        ],
                    }),
                    i.jsx('div', {
                        className: 'pinImage card shadow-2xl',
                        id: 'card-2',
                        children: i.jsx('img', { src: er, alt: 'Card 2' }),
                    }),
                    i.jsx('div', {
                        className: 'pinImage card shadow-2xl',
                        id: 'card-3',
                        children: i.jsx('img', { src: er, alt: 'Card 3' }),
                    }),
                    i.jsx('div', {
                        className: 'pinImage card shadow-2xl',
                        id: 'card-4',
                        children: i.jsx('img', { src: er, alt: 'Card 4' }),
                    }),
                ],
            }),
        })
    );
}
function oa({
    titre: t,
    image: e,
    description: s,
    detenteur: r,
    date: n,
    onWatch: o,
}) {
    return i.jsxs('div', {
        className:
            'cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800',
        children: [
            i.jsx('img', {
                className: 'h-48 w-full object-cover',
                src: e,
                alt: t,
            }),
            i.jsxs('div', {
                className: 'space-y-3 p-5',
                children: [
                    i.jsx('h2', {
                        className:
                            'text-xl font-semibold text-gray-800 dark:text-white',
                        children: t,
                    }),
                    i.jsx('p', {
                        className: 'text-sm text-gray-600 dark:text-gray-300',
                        children: s,
                    }),
                    i.jsxs('div', {
                        className:
                            'flex items-center justify-between text-sm text-gray-500 dark:text-gray-400',
                        children: [
                            i.jsxs('span', { children: ['🎬 ', r] }),
                            i.jsxs('span', { children: ['📅 ', n] }),
                        ],
                    }),
                    i.jsx('button', {
                        onClick: o,
                        className:
                            'bg-primary-600 hover:bg-primary-800 mt-3 w-full rounded-xl py-2 text-white transition',
                        children: 'Regarder',
                    }),
                ],
            }),
        ],
    });
}
const ia = [
        {
            titre: 'Les Chroniques du Futur',
            image: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg',
            description:
                'Une aventure interstellaire dans un monde où le temps se plie aux émotions humaines.',
            detenteur: 'Mada Films',
            date: '17 Mai 2025',
        },
        {
            titre: 'Le Dernier Silence',
            image: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg',
            description:
                'Un thriller psychologique autour du pouvoir du secret dans un monde trop bavard.',
            detenteur: 'Silencio Studio',
            date: '02 Juin 2025',
        },
        {
            titre: 'Renaissance Digitale',
            image: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg',
            description:
                'Quand l’intelligence artificielle découvre la poésie humaine.',
            detenteur: 'NeoVerse Production',
            date: '20 Juillet 2025',
        },
    ],
    aa = () => {
        const t = (e) => {
            alert(`Vous regardez : ${e}`);
        };
        return i.jsx('div', {
            className: 'justify-center md:flex md:h-screen',
            id: 'list',
            children: i.jsxs('div', {
                className: 'max-auto max-w-[1200px]',
                children: [
                    i.jsxs('div', {
                        className:
                            'mb-2 flex flex-col justify-start px-10 md:px-0',
                        children: [
                            i.jsx('h1', {
                                className:
                                    'mb-2 text-5xl font-bold text-gray-800 dark:text-white',
                                children:
                                    'Claque la porte, mais laisse une trace',
                            }),
                            i.jsx('p', {
                                className:
                                    'w-[50%] text-[14px] text-gray-600 dark:text-white',
                                children:
                                    "Ils sont partis, mais leur page est restée. Découvre ces chefs-d'œuvre de drama, de sarcasme, de poésie ou de grand n’importe quoi. Rires, larmes, malaises garantis. Attention, certaines sorties sont plus bruyantes que d’autres…",
                            }),
                        ],
                    }),
                    i.jsx('div', {
                        className:
                            'grid grid-cols-1 gap-8 px-10 py-1 sm:grid-cols-2 md:grid-cols-3 md:px-0 md:py-20',
                        children: ia.map((e, s) =>
                            i.jsx(oa, { ...e, onWatch: () => t(e.titre) }, s)
                        ),
                    }),
                ],
            }),
        });
    },
    la = '/assets/Avatarshappy-CoUHwG_n.png',
    ca = () =>
        i.jsx('section', {
            id: 'contact',
            className:
                'font-Poppins bannerBackground relative overflow-hidden px-4 pt-28 pb-12 sm:px-6 md:py-20 lg:px-8',
            children: i.jsx('div', {
                className: 'h-[800px]',
                children: i.jsxs('div', {
                    className:
                        'relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-8 sm:pt-20 md:px-0 lg:grid-cols-2',
                    id: 'contact',
                    children: [
                        i.jsxs('div', {
                            className: 'space-y-6 dark:text-white',
                            children: [
                                i.jsx('h1', {
                                    className:
                                        'text-custom-dark-gray inline-flex flex-wrap items-center justify-center gap-2 text-3xl font-extrabold sm:text-4xl md:gap-3',
                                    children: 'Lancer la bouteille à la mer',
                                }),
                                i.jsx('p', {
                                    className:
                                        'text-[14px] text-slate-800 dark:text-white',
                                    children:
                                        'Et si tu as juste envie de balancer une message ou une citation de fin… vas-y. On aime les surprises.',
                                }),
                                i.jsxs('form', {
                                    className: 'space-y-5',
                                    children: [
                                        i.jsxs('div', {
                                            children: [
                                                i.jsx('label', {
                                                    className:
                                                        'text-custom-dark-gray mb-1 block font-medium',
                                                    children: 'Nom',
                                                }),
                                                i.jsx('input', {
                                                    type: 'text',
                                                    placeholder:
                                                        'Example : Edouardo Stevano',
                                                    className:
                                                        'focus:ring-custom-bright-blue w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none',
                                                }),
                                            ],
                                        }),
                                        i.jsxs('div', {
                                            children: [
                                                i.jsx('label', {
                                                    className:
                                                        'text-custom-dark-gray mb-1 block font-medium',
                                                    children: 'Contact',
                                                }),
                                                i.jsx('input', {
                                                    type: 'tel',
                                                    placeholder:
                                                        'example: +261 34 85 009 92',
                                                    className:
                                                        'focus:ring-custom-bright-blue w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none',
                                                }),
                                            ],
                                        }),
                                        i.jsxs('div', {
                                            children: [
                                                i.jsx('label', {
                                                    className:
                                                        'text-custom-dark-gray mb-1 block font-medium',
                                                    children: 'Email',
                                                }),
                                                i.jsx('input', {
                                                    type: 'email',
                                                    placeholder:
                                                        'you@example.com',
                                                    className:
                                                        'focus:ring-custom-bright-blue w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none',
                                                }),
                                            ],
                                        }),
                                        i.jsxs('div', {
                                            children: [
                                                i.jsx('label', {
                                                    className:
                                                        'text-custom-dark-gray mb-1 block font-medium',
                                                    children: 'Message',
                                                }),
                                                i.jsx('textarea', {
                                                    rows: 5,
                                                    placeholder: 'Message...',
                                                    className:
                                                        'focus:ring-custom-bright-blue max-h-[100px] min-h-[100px] w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none',
                                                }),
                                            ],
                                        }),
                                        i.jsx('button', {
                                            type: 'submit',
                                            className:
                                                'group from-custom-orange via-custom-bright-blue to-custom-green relative inline-flex overflow-hidden rounded-full bg-gradient-to-r p-0.5 text-sm font-medium text-gray-900 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none',
                                            children: i.jsx('span', {
                                                className:
                                                    'relative rounded-full bg-white px-6 py-3 font-semibold',
                                                children: i.jsx('span', {
                                                    className:
                                                        'from-custom-orange via-custom-bright-blue to-custom-green bg-gradient-to-r bg-clip-text text-transparent',
                                                    children: 'Envoyer',
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        i.jsx('div', {
                            className: 'hidden lg:block',
                            children: i.jsx('img', {
                                src: la,
                                alt: 'Contact Illustration',
                                className: 'relative left-8 mx-auto',
                            }),
                        }),
                    ],
                }),
            }),
        }),
    ua = () => {
        const t = [
                {
                    id: 1,
                    name: ' Camille R. — ex-collaboratrice RH',
                    date: '19 March 2025',
                    image: 'https://randomuser.me/api/portraits/men/10.jpg',
                    text: 'Je voulais éviter le pot de départ gênant… Ma page a fait le tour de la boîte en 15 minutes. On en rigole encore dans le groupe WhatsApp !',
                },
                {
                    id: 2,
                    name: ' Lucas T. — freelance désabusé',
                    date: '15 March 2025',
                    image: 'https://randomuser.me/api/portraits/men/2.jpg',
                    text: 'TheEnd.page m’a permis de dire au revoir à un client toxique avec ironie… et une playlist. C’était libérateur. Et classe.',
                },
                {
                    id: 3,
                    name: ' Lucas T. — freelance désabusé',
                    date: '10 March 2025',
                    image: 'https://randomuser.me/api/portraits/men/3.jpg',
                    text: 'TheEnd.page m’a permis de dire au revoir à un client toxique avec ironie… et une playlist. C’était libérateur. Et classe.',
                },
                {
                    id: 4,
                    name: 'Sophie D. — ancienne membre d’un serveur Discord',
                    date: '15 March 2025',
                    image: 'https://randomuser.me/api/portraits/men/4.jpg',
                    text: 'J’ai quitté un serveur où ça devenait n’importe quoi. Ma page de départ ? 100 % passive-agressive, 100 % moi.',
                },
                {
                    id: 5,
                    name: 'Jonathan B. — dev fullstack fatigué',
                    date: '10 March 2025',
                    image: 'https://randomuser.me/api/portraits/men/5.jpg',
                    text: 'C’est l’IA qui m’a soufflé les meilleures punchlines pour ma démission. Résultat : une page partagée 62 fois. Je suis une légende dans mon open-space.',
                },
                {
                    id: 6,
                    name: 'Mélanie P. — ex en paix',
                    date: '15 March 2025',
                    image: 'https://randomuser.me/api/portraits/men/6.jpg',
                    text: 'Thanks to pronoïa, I got my first job in less than two weeks. The platform is fast, clean, and the CV generator is amazing.',
                },
                {
                    id: 7,
                    name: 'Maria Lee',
                    date: '10 March 2025',
                    image: 'https://randomuser.me/api/portraits/men/7.jpg',
                    text: 'J’ai utilisé TheEnd.page pour tourner la page avec mon ex. J’ai pu dire tout ce que j’avais sur le cœur… avec poésie et humour. Même lui a aimé',
                },
            ],
            [e, s] = O.useState(0),
            [r, n] = O.useState(0),
            o = (h) => {
                n(h === 'left' ? -1 : 1),
                    s(
                        h === 'left'
                            ? (v) => (v === 0 ? t.length - 1 : v - 1)
                            : (v) => (v === t.length - 1 ? 0 : v + 1)
                    );
            },
            a = () => (e === 0 ? t.length - 1 : e - 1),
            l = () => (e === t.length - 1 ? 0 : e + 1),
            d = {
                enter: (h) => ({
                    x: h > 0 ? 300 : -300,
                    scale: 0.3,
                    opacity: 0.5,
                }),
                center: { zIndex: 1, x: 0, scale: 1, opacity: 1 },
                exit: (h) => ({
                    zIndex: 0,
                    x: h < 0 ? 600 : -600,
                    scale: 0.85,
                    opacity: 0.5,
                }),
            };
        return i.jsx('section', {
            className: 'bg-gray-900 px-4 py-10 sm:px-6 lg:px-8',
            id: 'testy',
            children: i.jsxs('div', {
                className: 'mx-auto mt-14 max-w-[1200px]',
                children: [
                    i.jsxs('h1', {
                        'data-aos': 'fade-up',
                        className:
                            'flex flex-wrap items-center justify-center gap-3 text-center text-3xl font-extrabold text-white/90 sm:text-4xl',
                        children: [
                            i.jsx('img', {
                                src: '/favicon.svg',
                                alt: 'Logo',
                                className: 'h-auto w-10',
                            }),
                            i.jsx('span', {
                                children: 'Ils sont partis, et ils ont brillé',
                            }),
                        ],
                    }),
                    i.jsx('p', {
                        'data-aos': 'fade-up',
                        className:
                            'mx-auto mt-4 mb-10 max-w-2xl text-center text-[16px] text-gray-300',
                        children:
                            'TheEnd.page, ces utilisateurs ont transformé leur fin en moment mémorable — parfois drôle, parfois touchant, parfois explosif. Voici leurs histoires, leurs pages, et leurs mots. Parce qu’une bonne sortie, ça se raconte.',
                    }),
                    i.jsxs('div', {
                        'data-aos': 'fade-up',
                        className:
                            'relative top-44 z-20 mx-auto mb-8 flex justify-between gap-8 md:w-[450px]',
                        children: [
                            i.jsx(Ee.button, {
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.9 },
                                onClick: () => o('left'),
                                className:
                                    'text-custom-bright-blue hover:bg-custom-bright-blue rounded-full bg-white px-4 py-3 shadow-md transition duration-300 hover:text-white',
                                children: i.jsx(Oo, {}),
                            }),
                            i.jsx(Ee.button, {
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.9 },
                                onClick: () => o('right'),
                                className:
                                    'text-custom-bright-blue hover:bg-custom-bright-blue rounded-full bg-white px-4 py-3 shadow-md transition duration-300 hover:text-white',
                                children: i.jsx(Ys, {}),
                            }),
                        ],
                    }),
                    i.jsxs('div', {
                        'data-aos': 'fade-up',
                        className:
                            'lightSuccess relative -top-20 flex items-center justify-center gap-2 overflow-hidden px-10 py-16 md:px-0',
                        children: [
                            i.jsx(mn, {
                                mode: 'wait',
                                children: i.jsxs(
                                    Ee.div,
                                    {
                                        initial: { opacity: 0, x: 0 },
                                        animate: {
                                            opacity: 0.5,
                                            scale: 0.85,
                                            x: 0,
                                            transition: {
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                            },
                                        },
                                        exit: { opacity: 0 },
                                        className:
                                            'CardSuccess hidden h-[300px] w-[600px] rounded-[40px] bg-white/5 p-8 text-white shadow-2xl md:block',
                                        children: [
                                            i.jsxs('div', {
                                                className:
                                                    'mb-6 flex items-center space-x-4',
                                                children: [
                                                    i.jsx('img', {
                                                        src: t[a()].image,
                                                        alt: t[a()].name,
                                                        className:
                                                            'h-20 w-20 rounded-full object-cover',
                                                    }),
                                                    i.jsxs('div', {
                                                        children: [
                                                            i.jsx('p', {
                                                                className:
                                                                    'text-xl font-semibold',
                                                                children:
                                                                    t[a()].name,
                                                            }),
                                                            i.jsx('div', {
                                                                className:
                                                                    'flex space-x-1',
                                                                children:
                                                                    Array.from({
                                                                        length: 5,
                                                                    }).map(
                                                                        (
                                                                            h,
                                                                            v
                                                                        ) =>
                                                                            i.jsx(
                                                                                Pn,
                                                                                {
                                                                                    className:
                                                                                        'text-base text-yellow-400',
                                                                                },
                                                                                v
                                                                            )
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsx('span', {
                                                className:
                                                    'mb-4 block text-sm text-gray-300',
                                                children: t[a()].date,
                                            }),
                                            i.jsxs('p', {
                                                className:
                                                    'text-[15px] leading-relaxed',
                                                children: [
                                                    '"',
                                                    t[a()].text,
                                                    '"',
                                                ],
                                            }),
                                        ],
                                    },
                                    a()
                                ),
                            }),
                            i.jsx(mn, {
                                initial: !1,
                                custom: r,
                                mode: 'wait',
                                children: i.jsxs(
                                    Ee.div,
                                    {
                                        custom: r,
                                        variants: d,
                                        initial: 'enter',
                                        animate: 'center',
                                        exit: 'exit',
                                        transition: {
                                            opacity: {
                                                duration: 0.2,
                                                ease: 'linear',
                                            },
                                        },
                                        className:
                                            'CardSuccess border-custom-bright-blue z-10 h-[300px] w-[600px] rounded-[40px] bg-white/5 p-8 text-white shadow-2xl',
                                        children: [
                                            i.jsxs('div', {
                                                className:
                                                    'mb-6 flex items-center space-x-4',
                                                children: [
                                                    i.jsx('img', {
                                                        src: t[e].image,
                                                        alt: t[e].name,
                                                        className:
                                                            'h-20 w-20 rounded-full object-cover',
                                                    }),
                                                    i.jsxs('div', {
                                                        children: [
                                                            i.jsx('p', {
                                                                className:
                                                                    'text-xl font-semibold',
                                                                children:
                                                                    t[e].name,
                                                            }),
                                                            i.jsx('div', {
                                                                className:
                                                                    'flex space-x-1',
                                                                children:
                                                                    Array.from({
                                                                        length: 5,
                                                                    }).map(
                                                                        (
                                                                            h,
                                                                            v
                                                                        ) =>
                                                                            i.jsx(
                                                                                Pn,
                                                                                {
                                                                                    className:
                                                                                        'text-base text-yellow-400',
                                                                                },
                                                                                v
                                                                            )
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsx('span', {
                                                className:
                                                    'mb-4 block text-sm text-gray-300',
                                                children: t[e].date,
                                            }),
                                            i.jsxs('p', {
                                                className:
                                                    'text-[15px] leading-relaxed',
                                                children: ['"', t[e].text, '"'],
                                            }),
                                        ],
                                    },
                                    e
                                ),
                            }),
                            i.jsx(mn, {
                                initial: !1,
                                custom: r,
                                mode: 'wait',
                                children: i.jsxs(
                                    Ee.div,
                                    {
                                        initial: { opacity: 0 },
                                        animate: {
                                            opacity: 0.5,
                                            scale: 0.85,
                                            transition: {
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                            },
                                        },
                                        exit: { opacity: 0 },
                                        className:
                                            'CardSuccess hidden h-[300px] w-[600px] rounded-[40px] bg-white/5 p-8 text-white shadow-2xl md:block',
                                        children: [
                                            i.jsxs('div', {
                                                className:
                                                    'mb-6 flex items-center space-x-4',
                                                children: [
                                                    i.jsx('img', {
                                                        src: t[l()].image,
                                                        alt: t[l()].name,
                                                        className:
                                                            'h-20 w-20 rounded-full object-cover',
                                                    }),
                                                    i.jsxs('div', {
                                                        children: [
                                                            i.jsx('p', {
                                                                className:
                                                                    'text-xl font-semibold',
                                                                children:
                                                                    t[l()].name,
                                                            }),
                                                            i.jsx('div', {
                                                                className:
                                                                    'flex space-x-1',
                                                                children:
                                                                    Array.from({
                                                                        length: 5,
                                                                    }).map(
                                                                        (
                                                                            h,
                                                                            v
                                                                        ) =>
                                                                            i.jsx(
                                                                                Pn,
                                                                                {
                                                                                    className:
                                                                                        'text-base text-yellow-400',
                                                                                },
                                                                                v
                                                                            )
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsx('span', {
                                                className:
                                                    'mb-4 block text-sm text-gray-300',
                                                children: t[l()].date,
                                            }),
                                            i.jsxs('p', {
                                                className:
                                                    'text-[12px] leading-relaxed md:text-[15px]',
                                                children: [
                                                    '"',
                                                    t[l()].text,
                                                    '"',
                                                ],
                                            }),
                                        ],
                                    },
                                    a()
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    Ls = [Qr, Qr, Qr, Qr],
    da = () =>
        i.jsxs('div', {
            className: 'w-full overflow-hidden bg-[#333] py-10',
            children: [
                i.jsx('h1', {
                    className: 'mx-auto mb-4 text-center text-3xl text-white',
                    children: 'Partenaires',
                }),
                i.jsx(Ee.div, {
                    className: 'flex gap-8 whitespace-nowrap',
                    animate: { x: ['0%', '-100%'] },
                    transition: { repeat: 1 / 0, ease: 'linear', duration: 30 },
                    children: [...Ls, ...Ls].map((t, e) =>
                        i.jsx(
                            Ee.div,
                            {
                                whileHover: { scale: 1.1 },
                                className:
                                    'h-[150px] min-w-[200px] overflow-hidden rounded-xl shadow-lg',
                                children: i.jsx('img', {
                                    src: t,
                                    alt: `marquee-${e}`,
                                    className: 'h-full w-full object-cover',
                                }),
                            },
                            e
                        )
                    ),
                }),
            ],
        });
var tt = function () {
    return (
        (tt =
            Object.assign ||
            function (e) {
                for (var s, r = 1, n = arguments.length; r < n; r++) {
                    s = arguments[r];
                    for (var o in s)
                        Object.prototype.hasOwnProperty.call(s, o) &&
                            (e[o] = s[o]);
                }
                return e;
            }),
        tt.apply(this, arguments)
    );
};
function Pr(t, e, s) {
    var r = O.useRef(e);
    O.useEffect(function () {
        r.current = e;
    }),
        O.useEffect(
            function () {
                var n = window,
                    o = function (a) {
                        return r.current(a);
                    };
                return (
                    n == null || n.addEventListener(t, o),
                    function () {
                        n == null || n.removeEventListener(t, o);
                    }
                );
            },
            [t, s]
        );
}
var pa = function () {
    var t = O.useState({
            info: '',
            Android: function () {
                return null;
            },
            BlackBerry: function () {
                return null;
            },
            IEMobile: function () {
                return null;
            },
            iOS: function () {
                return null;
            },
            iPad: function () {
                return null;
            },
            OperaMini: function () {
                return null;
            },
            any: function () {
                return !1;
            },
        }),
        e = t[0],
        s = t[1];
    return (
        O.useEffect(function () {
            if (typeof navigator < 'u') {
                var r = navigator.userAgent;
                s(function (n) {
                    return tt(tt({}, n), {
                        info: r,
                        Android: function () {
                            return r.match(/Android/i);
                        },
                        BlackBerry: function () {
                            return r.match(/BlackBerry/i);
                        },
                        IEMobile: function () {
                            return r.match(/IEMobile/i);
                        },
                        iOS: function () {
                            return r.match(/iPhone|iPad|iPod/i);
                        },
                        iPad: function () {
                            return !!(
                                r.match(/Mac/) &&
                                navigator.maxTouchPoints &&
                                navigator.maxTouchPoints > 2
                            );
                        },
                        OperaMini: function () {
                            return r.match(/Opera Mini/i);
                        },
                        any: function () {
                            var o, a, l, d, h;
                            return !!(
                                (!(
                                    (o = n.Android()) === null || o === void 0
                                ) &&
                                    o.length) ||
                                (!(
                                    (a = n.BlackBerry()) === null ||
                                    a === void 0
                                ) &&
                                    a.length) ||
                                (!((l = n.iOS()) === null || l === void 0) &&
                                    l.length) ||
                                n.iPad() ||
                                (!(
                                    (d = n.OperaMini()) === null || d === void 0
                                ) &&
                                    d.length) ||
                                (!(
                                    (h = n.IEMobile()) === null || h === void 0
                                ) &&
                                    h.length)
                            );
                        },
                    });
                });
            }
        }, []),
        e
    );
};
function Ds(t, e) {
    for (var s = [], r = 2; r < arguments.length; r++) s[r - 2] = arguments[r];
    if (typeof e != 'function')
        throw new TypeError('callback must be a function');
    for (var n = Object(t), o = n.length >>> 0, a = s[2], l = 0; l < o; l++) {
        var d = n[l];
        if (e.call(a, d, l, n)) return d;
    }
}
function fa(t) {
    var e = t.clickables,
        s =
            e === void 0
                ? [
                      'a',
                      'input[type="text"]',
                      'input[type="email"]',
                      'input[type="number"]',
                      'input[type="submit"]',
                      'input[type="image"]',
                      'label[for]',
                      'select',
                      'textarea',
                      'button',
                      '.link',
                  ]
                : e,
        r = t.children,
        n = t.color,
        o = n === void 0 ? '220, 90, 90' : n,
        a = t.innerScale,
        l = a === void 0 ? 0.6 : a,
        d = t.innerSize,
        h = d === void 0 ? 8 : d,
        v = t.innerStyle,
        j = t.outerAlpha,
        m = j === void 0 ? 0.4 : j,
        p = t.outerScale,
        x = p === void 0 ? 6 : p,
        L = t.outerSize,
        Y = L === void 0 ? 8 : L,
        U = t.outerStyle,
        $ = t.showSystemCursor,
        K = $ === void 0 ? !1 : $,
        M = t.trailingSpeed,
        xe = M === void 0 ? 8 : M,
        D = O.useMemo(
            function () {
                return {
                    children: r,
                    color: o,
                    innerScale: l,
                    innerSize: h,
                    innerStyle: v,
                    outerAlpha: m,
                    outerScale: x,
                    outerSize: Y,
                    outerStyle: U,
                };
            },
            [r, o, l, h, v, m, x, Y, U]
        ),
        k = O.useRef(null),
        b = O.useRef(null),
        Q = O.useRef(null),
        S = O.useRef(null),
        fe = O.useState({ x: 0, y: 0 }),
        C = fe[0],
        ot = fe[1],
        ae = O.useState(!1),
        de = ae[0],
        te = ae[1],
        X = O.useState(D),
        f = X[0],
        re = X[1],
        c = O.useState(!1),
        le = c[0],
        be = c[1],
        se = O.useState(!1),
        ee = se[0],
        we = se[1],
        ve = O.useRef(0),
        A = O.useRef(0),
        Ce = O.useCallback(function (oe) {
            var z = oe.clientX,
                Te = oe.clientY;
            ot({ x: z, y: Te }),
                b.current !== null &&
                    ((b.current.style.top = ''.concat(Te, 'px')),
                    (b.current.style.left = ''.concat(z, 'px'))),
                (ve.current = z),
                (A.current = Te);
        }, []),
        pe = O.useCallback(
            function (oe) {
                S.current !== void 0 &&
                    ((C.x += (ve.current - C.x) / xe),
                    (C.y += (A.current - C.y) / xe),
                    k.current !== null &&
                        ((k.current.style.top = ''.concat(C.y, 'px')),
                        (k.current.style.left = ''.concat(C.x, 'px')))),
                    (S.current = oe),
                    (Q.current = requestAnimationFrame(pe));
            },
            [Q]
        );
    O.useEffect(
        function () {
            return (
                (Q.current = requestAnimationFrame(pe)),
                function () {
                    Q.current !== null && cancelAnimationFrame(Q.current);
                }
            );
        },
        [pe]
    );
    var Xe = function (oe, z) {
            return ''.concat(parseInt(String(oe * z)), 'px');
        },
        ne = O.useCallback(function (oe, z, Te) {
            oe && ((oe.style.height = Xe(z, Te)), (oe.style.width = Xe(z, Te)));
        }, []),
        _e = O.useCallback(function () {
            return be(!0);
        }, []),
        V = O.useCallback(function () {
            return be(!1);
        }, []),
        me = O.useCallback(function () {
            return te(!0);
        }, []),
        Ge = O.useCallback(function () {
            return te(!1);
        }, []);
    Pr('mousemove', Ce),
        Pr('mousedown', _e),
        Pr('mouseup', V),
        Pr('mouseover', me),
        Pr('mouseout', Ge),
        O.useEffect(
            function () {
                le
                    ? (ne(b.current, f.innerSize, f.innerScale),
                      ne(k.current, f.outerSize, f.outerScale))
                    : (ne(b.current, f.innerSize, 1),
                      ne(k.current, f.outerSize, 1));
            },
            [f.innerSize, f.innerScale, f.outerSize, f.outerScale, ne, le]
        ),
        O.useEffect(
            function () {
                ee &&
                    (ne(b.current, f.innerSize, f.innerScale * 1.2),
                    ne(k.current, f.outerSize, f.outerScale * 1.4));
            },
            [f.innerSize, f.innerScale, f.outerSize, f.outerScale, ne, ee]
        ),
        O.useEffect(
            function () {
                b.current == null ||
                    k.current == null ||
                    (de
                        ? ((b.current.style.opacity = '1'),
                          (k.current.style.opacity = '1'))
                        : ((b.current.style.opacity = '0'),
                          (k.current.style.opacity = '0')));
            },
            [de]
        ),
        O.useEffect(
            function () {
                var oe = document.querySelectorAll(
                    s
                        .map(function (z) {
                            return typeof z == 'object' && z != null && z.target
                                ? z.target
                                : (z ?? '');
                        })
                        .join(',')
                );
                return (
                    oe.forEach(function (z) {
                        K || (z.style.cursor = 'none');
                        var Te =
                                typeof s == 'object'
                                    ? Ds(s, function (Ke) {
                                          return (
                                              typeof Ke == 'object' &&
                                              z.matches(Ke.target)
                                          );
                                      })
                                    : {},
                            ce = tt(tt({}, D), Te);
                        z.addEventListener('mouseover', function () {
                            be(!0), re(ce);
                        }),
                            z.addEventListener('click', function () {
                                be(!0), we(!1);
                            }),
                            z.addEventListener('mousedown', function () {
                                we(!0);
                            }),
                            z.addEventListener('mouseup', function () {
                                be(!0);
                            }),
                            z.addEventListener('mouseout', function () {
                                be(!1), we(!1), re(D);
                            });
                    }),
                    function () {
                        oe.forEach(function (z) {
                            var Te =
                                    typeof s == 'object'
                                        ? Ds(s, function (Ke) {
                                              return (
                                                  typeof Ke == 'object' &&
                                                  z.matches(Ke.target)
                                              );
                                          })
                                        : {},
                                ce = tt(tt({}, D), Te);
                            z.removeEventListener('mouseover', function () {
                                be(!0), re(ce);
                            }),
                                z.removeEventListener('click', function () {
                                    be(!0), we(!1);
                                }),
                                z.removeEventListener('mousedown', function () {
                                    we(!0);
                                }),
                                z.removeEventListener('mouseup', function () {
                                    be(!0);
                                }),
                                z.removeEventListener('mouseout', function () {
                                    be(!1), we(!1), re(D);
                                });
                        });
                    }
                );
            },
            [le, s, K, D]
        ),
        O.useEffect(
            function () {
                typeof window == 'object' &&
                    !K &&
                    (document.body.style.cursor = 'none');
            },
            [K]
        );
    var qe = {
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            transition:
                'opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out',
        },
        u = {
            cursorInner: tt(
                tt(
                    {
                        width: f.children ? 'auto' : f.innerSize,
                        height: f.children ? 'auto' : f.innerSize,
                        backgroundColor: f.children
                            ? 'transparent'
                            : 'rgba('.concat(f.color, ', 1)'),
                    },
                    qe
                ),
                f.innerStyle && f.innerStyle
            ),
            cursorOuter: tt(
                tt(
                    {
                        width: f.outerSize,
                        height: f.outerSize,
                        backgroundColor: 'rgba('
                            .concat(f.color, ', ')
                            .concat(f.outerAlpha, ')'),
                    },
                    qe
                ),
                f.outerStyle && f.outerStyle
            ),
        };
    return i.jsxs(i.Fragment, {
        children: [
            i.jsx('div', { ref: k, style: u.cursorOuter }),
            i.jsx(
                'div',
                tt(
                    { ref: b, style: u.cursorInner },
                    {
                        children: i.jsx(
                            'div',
                            tt(
                                {
                                    style: {
                                        opacity: f.children ? 1 : 0,
                                        transition: 'opacity 0.3s ease-in-out',
                                    },
                                },
                                { children: f.children }
                            )
                        ),
                    }
                )
            ),
        ],
    });
}
function ha(t) {
    var e = t.children,
        s = t.clickables,
        r = t.color,
        n = t.innerScale,
        o = t.innerSize,
        a = t.innerStyle,
        l = t.outerAlpha,
        d = t.outerScale,
        h = t.outerSize,
        v = t.outerStyle,
        j = t.showSystemCursor,
        m = t.trailingSpeed,
        p = pa();
    return typeof navigator < 'u' && p.any()
        ? i.jsx(i.Fragment, {})
        : i.jsx(
              fa,
              tt(
                  {
                      clickables: s,
                      color: r,
                      innerScale: n,
                      innerSize: o,
                      innerStyle: a,
                      outerAlpha: l,
                      outerScale: d,
                      outerSize: h,
                      outerStyle: v,
                      showSystemCursor: j,
                      trailingSpeed: m,
                  },
                  { children: e }
              )
          );
}
function ma() {
    return i.jsx('div', {
        children: i.jsx(ha, {
            innerSize: 8,
            outerSize: 25,
            color: '0, 0, 0, 0.5',
            outerAlpha: 1,
            innerScale: 1,
            hasBlendMode: !0,
            showSystemCursor: !1,
            outerStyle: { border: '2px solid #666' },
            innerStyle: { backgroundColor: '#333' },
            outerScale: 2,
            clickables: [
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                {
                    target: '.curso',
                    options: {
                        innerSize: 12,
                        outerSize: 12,
                        color: '255, 255, 255',
                        outerAlpha: 0.3,
                        innerScale: 0.7,
                        outerScale: 5,
                    },
                },
            ],
        }),
    });
}
Lr.registerPlugin(I);
const ka = () =>
    i.jsxs('div', {
        className: 'overflow-hidden0 z-1 overflow-hidden text-gray-800',
        children: [
            i.jsx(ma, {}),
            i.jsxs('section', {
                className:
                    'flex h-[110vh] flex-col items-center justify-center',
                children: [i.jsx(Mi, {}), i.jsx(Ni, {})],
            }),
            i.jsx('section', {
                className:
                    'flex h-screen items-center justify-center text-white',
                children: i.jsx(Di, {}),
            }),
            i.jsx(Ti, {}),
            i.jsx('section', {
                className:
                    'bg-card-background relative -top-10 hidden md:block',
                children: i.jsx(sa, {}),
            }),
            i.jsx(aa, {}),
            i.jsx(da, {}),
            i.jsx(ua, {}),
            i.jsx(ca, {}),
            i.jsx(yi, {
                heightValue: '100dvh',
                className: 'text-neutral-900 dark:text-neutral-100',
                children: i.jsx(ga, {}),
            }),
        ],
    });
function ga() {
    return i.jsxs('div', {
        className:
            'bg-line-background flex h-full w-full flex-col justify-between bg-slate-200 px-[90px] py-8 dark:bg-gray-500',
        children: [
            i.jsxs('div', {
                className:
                    'mt-20 grid shrink-0 grid-cols-1 gap-20 sm:grid-cols-4',
                children: [
                    i.jsxs('div', {
                        className: 'flex flex-col gap-2',
                        children: [
                            i.jsx('h3', {
                                className: 'mb-2 text-neutral-500 uppercase',
                                children: 'À propos',
                            }),
                            i.jsx('a', { href: '#home', children: 'Accueil' }),
                            i.jsx('a', {
                                href: '#explore',
                                children: 'Explorez',
                            }),
                            i.jsx('a', {
                                href: '#testy',
                                children: 'Testimoniales',
                            }),
                            i.jsx('a', {
                                href: '#contact',
                                children: 'Contactez-nous',
                            }),
                        ],
                    }),
                    i.jsxs('div', {
                        className: 'flex flex-col gap-2',
                        children: [
                            i.jsx('h3', {
                                className: 'mb-2 text-neutral-500 uppercase',
                                children: 'Outils',
                            }),
                            i.jsx('p', { children: 'Expace communautaire' }),
                            i.jsx('p', { children: 'Assisatnce IA' }),
                            i.jsx('p', { children: 'Cimetière des projets' }),
                            i.jsx('p', { children: 'Espace de creation' }),
                        ],
                    }),
                    i.jsx('div', {
                        className: 'flex flex-col gap-2',
                        children: i.jsx('h3', {
                            className: 'mb-2 text-neutral-500',
                            children:
                                'Pour t’inspirer ou t’exprimer, les pages publiques te permettent de faire partie de l’histoire collective des plus belles fins.',
                        }),
                    }),
                ],
            }),
            i.jsxs('div', {
                className:
                    'font-syne flex flex-col items-end gap-4 sm:flex-row',
                children: [
                    i.jsx('h1', {
                        className: 'mt-10 text-[14vw] leading-[0.8]',
                        children: 'TheEnd.Page',
                    }),
                    i.jsx('p', { children: '©copyright - 2025' }),
                ],
            }),
        ],
    });
}
export { ga as FooterContent, ka as default };
