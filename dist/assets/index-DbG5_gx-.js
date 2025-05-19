import { j as e, A as m, m as l } from './index-BRBA0OY8.js';
import { P as i } from './index-BjnEytZW.js';
const p = {
        md: 'w-11/12 md:w-2/3 lg:w-1/3 max-w-lg',
        lg: 'w-11/12 md:w-3/4 lg:w-1/2 max-w-2xl',
        xl: 'w-11/12 md:w-4/5 lg:w-3/4 max-w-4xl',
    },
    n = ({
        isOpen: o,
        onClose: t,
        children: c,
        title: s,
        size: d,
        footer: a,
    }) => {
        const x = (r) => {
            r.target === r.currentTarget && t();
        };
        return e.jsx(m, {
            children:
                o &&
                e.jsx(l.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.4 },
                    className:
                        'fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/10',
                    onClick: x,
                    children: e.jsxs(l.div, {
                        initial: { scale: 0.2, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.2, opacity: 0 },
                        transition: { type: 'spring', duration: 0.5 },
                        className: `${p[d]} rounded-3xl bg-white shadow-xl`,
                        children: [
                            e.jsxs('div', {
                                className:
                                    'flex items-center justify-between border-b border-gray-200 px-6 py-4',
                                children: [
                                    s &&
                                        e.jsx('h2', {
                                            className:
                                                'text-xl font-semibold text-gray-800',
                                            children: s,
                                        }),
                                    e.jsx('button', {
                                        className:
                                            'text-2xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none',
                                        onClick: t,
                                        children: '×',
                                    }),
                                ],
                            }),
                            e.jsx('div', {
                                className: 'bg-gray-100 px-6 py-2',
                                children: c,
                            }),
                            a &&
                                e.jsx('div', {
                                    className:
                                        'border-t border-gray-200 px-4 py-2',
                                    children: a,
                                }),
                        ],
                    }),
                }),
        });
    };
n.propTypes = {
    isOpen: i.bool.isRequired,
    onClose: i.func.isRequired,
    children: i.node.isRequired,
    title: i.string,
    size: i.oneOf(['md', 'lg', 'xl']),
    footer: i.node,
};
n.defaultProps = { title: '', size: 'lg', footer: null };
export { n as M };
