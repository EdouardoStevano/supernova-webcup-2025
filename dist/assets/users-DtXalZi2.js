import { r as a, j as e } from './index-BRBA0OY8.js';
import { u as y } from './users-D_sYzQY4.js';
const A = () => {
    const [m, j] = a.useState([]),
        [l, o] = a.useState([]),
        [x, f] = a.useState(''),
        [n, N] = a.useState({ key: null, direction: 'asc' }),
        [i, v] = a.useState(10),
        [r, d] = a.useState(1);
    a.useEffect(() => {
        j(y), o(y);
    }, []),
        a.useEffect(() => {
            const s = m.filter((t) =>
                Object.values(t).some((c) =>
                    c == null
                        ? void 0
                        : c.toString().toLowerCase().includes(x.toLowerCase())
                )
            );
            o(s), d(1);
        }, [x, m]);
    const k = (s) => {
            let t = 'asc';
            n.key === s && n.direction === 'asc' && (t = 'desc'),
                N({ key: s, direction: t });
            const c = [...l].sort((u, b) =>
                u[s] < b[s]
                    ? t === 'asc'
                        ? -1
                        : 1
                    : u[s] > b[s]
                      ? t === 'asc'
                          ? 1
                          : -1
                      : 0
            );
            o(c);
        },
        p = r * i,
        h = p - i,
        w = l.slice(h, p),
        g = Math.ceil(l.length / i),
        S = [
            { key: 'id', label: 'ID' },
            { key: 'username', label: 'Username' },
            { key: 'email', label: 'Email' },
            { key: 'role', label: 'Role' },
            { key: 'phoneNumber', label: 'Phone' },
            { key: 'address', label: 'Address' },
            { key: 'isActive', label: 'Status' },
            { key: 'createdAt', label: 'Created At' },
            { key: 'lastLogin', label: 'Last Login' },
        ];
    return e.jsxs('div', {
        className: 'fadeIn p-6',
        children: [
            e.jsxs('div', {
                className: 'mb-4 flex items-center justify-between',
                children: [
                    e.jsx('input', {
                        type: 'text',
                        className:
                            'w-1/3 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none',
                        placeholder: 'Search users',
                        value: x,
                        onChange: (s) => f(s.target.value),
                    }),
                    e.jsxs('select', {
                        className: 'rounded-lg border border-gray-300 p-2',
                        value: i,
                        onChange: (s) => v(Number(s.target.value)),
                        children: [
                            e.jsx('option', {
                                value: 5,
                                children: '5 per page',
                            }),
                            e.jsx('option', {
                                value: 10,
                                children: '10 per page',
                            }),
                            e.jsx('option', {
                                value: 20,
                                children: '20 per page',
                            }),
                            e.jsx('option', {
                                value: 50,
                                children: '50 per page',
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx('div', {
                className: 'swipeFadeUp overflow-x-auto rounded-lg shadow-md',
                children: e.jsxs('table', {
                    className: 'w-full text-left text-sm text-gray-500',
                    children: [
                        e.jsx('thead', {
                            className:
                                'bg-gray-50 text-xs text-gray-700 uppercase',
                            children: e.jsx('tr', {
                                children: S.map((s) =>
                                    e.jsx(
                                        'th',
                                        {
                                            className:
                                                'cursor-pointer px-6 py-3 hover:bg-gray-100',
                                            onClick: () => k(s.key),
                                            children: e.jsxs('div', {
                                                className: 'flex items-center',
                                                children: [
                                                    s.label,
                                                    n.key === s.key &&
                                                        e.jsx('span', {
                                                            className: 'ml-1',
                                                            children:
                                                                n.direction ===
                                                                'asc'
                                                                    ? '↑'
                                                                    : '↓',
                                                        }),
                                                ],
                                            }),
                                        },
                                        s.key
                                    )
                                ),
                            }),
                        }),
                        e.jsx('tbody', {
                            children: w.map((s) =>
                                e.jsxs(
                                    'tr',
                                    {
                                        className:
                                            'border-b bg-white hover:bg-gray-50',
                                        children: [
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: s.id,
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: s.username,
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: s.email,
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: s.role,
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: s.phoneNumber,
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: s.address,
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: e.jsx('span', {
                                                    className: `rounded-full px-2 py-1 text-xs ${s.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                    children: s.isActive
                                                        ? 'Active'
                                                        : 'Inactive',
                                                }),
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: new Date(
                                                    s.createdAt
                                                ).toLocaleDateString(),
                                            }),
                                            e.jsx('td', {
                                                className: 'px-6 py-4',
                                                children: s.lastLogin
                                                    ? new Date(
                                                          s.lastLogin
                                                      ).toLocaleString()
                                                    : 'Never',
                                            }),
                                        ],
                                    },
                                    s.id
                                )
                            ),
                        }),
                    ],
                }),
            }),
            e.jsxs('div', {
                className: 'mt-4 flex items-center justify-between',
                children: [
                    e.jsxs('div', {
                        className: 'text-sm text-gray-700',
                        children: [
                            'Showing ',
                            h + 1,
                            ' to',
                            ' ',
                            Math.min(p, l.length),
                            ' of',
                            ' ',
                            l.length,
                            ' entries',
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'flex space-x-2',
                        children: [
                            e.jsx('button', {
                                className:
                                    'rounded border px-3 py-1 disabled:opacity-50',
                                onClick: () => d(r - 1),
                                disabled: r === 1,
                                children: 'Previous',
                            }),
                            [...Array(g)].map((s, t) =>
                                e.jsx(
                                    'button',
                                    {
                                        className: `rounded border px-3 py-1 ${r === t + 1 ? 'bg-blue-500 text-white' : ''}`,
                                        onClick: () => d(t + 1),
                                        children: t + 1,
                                    },
                                    t
                                )
                            ),
                            e.jsx('button', {
                                className:
                                    'rounded border px-3 py-1 disabled:opacity-50',
                                onClick: () => d(r + 1),
                                disabled: r === g,
                                children: 'Next',
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
export { A as default };
