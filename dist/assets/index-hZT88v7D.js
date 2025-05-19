import { r as p, j as e, m as o, A as y } from './index-BRBA0OY8.js';
import { P as t } from './index-BjnEytZW.js';
const d = p.memo(
    ({
        children: c,
        onClick: i,
        className: x = '',
        disabled: r = !1,
        type: f = 'button',
        audio: l = null,
        variant: u = 'primary',
        size: h = 'medium',
        ...b
    }) => {
        const [n, m] = p.useState(!1),
            g = p.useCallback(
                (s) => {
                    l && new Audio(l).play(), i == null || i(s);
                },
                [l, i]
            ),
            j = 'rounded-3xl relative overflow-hidden perspective-1000',
            v = {
                primary: 'bg-primary-500 text-white',
                secondary: 'bg-green-500 text-white',
                sea: 'bg-blue-500 text-white',
                outline: 'border-2 border-primary-600 text-primary-600',
                ghost: 'bg-transparent text-gray-700',
            },
            w = {
                small: 'px-3 py-1.5 text-sm',
                medium: 'px-4 py-2 text-base',
                large: 'px-6 py-3 text-lg',
            },
            N = `
    ${j}
    ${v[u]}
    ${w[h]}
    ${r ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${x}
  `.trim();
        return e.jsxs(o.button, {
            type: f,
            className: N,
            onClick: g,
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            disabled: r,
            initial: { scale: 1 },
            whileHover: r ? {} : { scale: 1.02 },
            whileTap: r ? {} : { scale: 0.98 },
            transition: { duration: 0.2 },
            ...b,
            children: [
                e.jsx('div', {
                    className: 'flex items-center justify-center',
                    children: c
                        .toString()
                        .split('')
                        .map((s, a) =>
                            e.jsx(
                                o.span,
                                {
                                    initial: { opacity: 0, y: 20 },
                                    animate: {
                                        opacity: n ? 0 : 1,
                                        y: n ? -20 : 0,
                                    },
                                    exit: { opacity: 0, y: 20 },
                                    transition: {
                                        duration: 0.2,
                                        delay: a * 0.05,
                                        ease: 'easeInOut',
                                    },
                                    children: s === ' ' ? ' ' : s,
                                },
                                a
                            )
                        ),
                }),
                e.jsx(y, {
                    children:
                        n &&
                        e.jsx('div', {
                            className:
                                'absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center',
                            children: c
                                .toString()
                                .split('')
                                .map((s, a) =>
                                    e.jsx(
                                        o.span,
                                        {
                                            initial: { opacity: 0, y: 20 },
                                            animate: { opacity: 1, y: 0 },
                                            exit: { opacity: 0, y: 20 },
                                            transition: {
                                                duration: 0.2,
                                                delay: a * 0.05,
                                                ease: 'easeInOut',
                                            },
                                            className: 'text-white',
                                            children: s === ' ' ? ' ' : s,
                                        },
                                        a
                                    )
                                ),
                        }),
                }),
                e.jsx(y, {
                    children:
                        n &&
                        e.jsx(o.div, {
                            className:
                                'transitin-all absolute z-4 rounded-full',
                            style: {
                                width: '150%',
                                height: '150%',
                                background:
                                    u === 'primary' ? '#222' : '#d85dc1',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            },
                            initial: { scale: 0 },
                            animate: { scale: 3 },
                            exit: { scale: 0 },
                            transition: { duration: 0.5, ease: 'easeOut' },
                        }),
                }),
            ],
        });
    }
);
d.propTypes = {
    children: t.node.isRequired,
    onClick: t.func,
    className: t.string,
    disabled: t.bool,
    type: t.oneOf(['button', 'submit', 'reset']),
    audio: t.string,
    variant: t.oneOf(['primary', 'secondary', 'outline', 'ghost']),
    size: t.oneOf(['small', 'medium', 'large']),
};
d.displayName = 'Button';
export { d as B };
