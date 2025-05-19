import { r as n, h as f, j as e } from './index-BRBA0OY8.js';
import { a as b } from './authService-DHxwl4GY.js';
import './users-D_sYzQY4.js';
const j = () => {
    const [s, i] = n.useState({
            username: '',
            email: '',
            role: '',
            bio: '',
            address: '',
            contact: '',
            image: '',
            isActive: !1,
            createdAt: '',
        }),
        [a, l] = n.useState(!1),
        [d, c] = n.useState(!1);
    n.useEffect(() => {
        u();
    }, []);
    const u = async () => {
            try {
                const r = await f();
                i(r);
            } catch (r) {
                console.error('Error fetching user info:', r);
            }
        },
        t = (r) => {
            const { name: o, value: g } = r.target;
            i((x) => ({ ...x, [o]: g }));
        },
        m = async (r) => {
            r.preventDefault(), c(!0);
            try {
                await b.updateUser(s.id, s), l(!1);
            } catch (o) {
                console.error('Error updating user info:', o);
            } finally {
                c(!1);
            }
        };
    return e.jsxs('div', {
        className:
            'swipeFadeUp w-full max-w-[1300px] rounded-2xl bg-white p-8 shadow-lg',
        children: [
            e.jsxs('div', {
                className: 'mb-8 flex items-center gap-8',
                children: [
                    e.jsx('img', {
                        src: s.image || 'https://via.placeholder.com/150',
                        alt: 'Profile',
                        className:
                            'h-32 w-32 rounded-full border-4 border-blue-500 object-cover',
                    }),
                    e.jsxs('div', {
                        children: [
                            e.jsx('h1', {
                                className: 'text-3xl font-bold text-gray-800',
                                children: s.username,
                            }),
                            e.jsx('span', {
                                className:
                                    'mt-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white',
                                children: s.role,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs('form', {
                onSubmit: m,
                className: 'space-y-6',
                children: [
                    e.jsxs('div', {
                        className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
                        children: [
                            e.jsxs('div', {
                                className: 'space-y-2',
                                children: [
                                    e.jsx('label', {
                                        className:
                                            'text-sm font-medium text-gray-700',
                                        children: 'Username',
                                    }),
                                    e.jsx('input', {
                                        type: 'text',
                                        name: 'username',
                                        value: s.username,
                                        onChange: t,
                                        disabled: !a,
                                        className:
                                            'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500',
                                    }),
                                ],
                            }),
                            e.jsxs('div', {
                                className: 'space-y-2',
                                children: [
                                    e.jsx('label', {
                                        className:
                                            'text-sm font-medium text-gray-700',
                                        children: 'Email',
                                    }),
                                    e.jsx('input', {
                                        type: 'email',
                                        name: 'email',
                                        value: s.email,
                                        onChange: t,
                                        disabled: !a,
                                        className:
                                            'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500',
                                    }),
                                ],
                            }),
                            e.jsxs('div', {
                                className: 'space-y-2',
                                children: [
                                    e.jsx('label', {
                                        className:
                                            'text-sm font-medium text-gray-700',
                                        children: 'Contact',
                                    }),
                                    e.jsx('input', {
                                        type: 'tel',
                                        name: 'contact',
                                        value: s.contact,
                                        onChange: t,
                                        disabled: !a,
                                        className:
                                            'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500',
                                    }),
                                ],
                            }),
                            e.jsxs('div', {
                                className: 'space-y-2',
                                children: [
                                    e.jsx('label', {
                                        className:
                                            'text-sm font-medium text-gray-700',
                                        children: 'Profile Image URL',
                                    }),
                                    e.jsx('input', {
                                        type: 'url',
                                        name: 'image',
                                        value: s.image,
                                        onChange: t,
                                        disabled: !a,
                                        className:
                                            'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'space-y-2',
                        children: [
                            e.jsx('label', {
                                className: 'text-sm font-medium text-gray-700',
                                children: 'Bio',
                            }),
                            e.jsx('textarea', {
                                name: 'bio',
                                value: s.bio,
                                onChange: t,
                                disabled: !a,
                                rows: '3',
                                className:
                                    'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'space-y-2',
                        children: [
                            e.jsx('label', {
                                className: 'text-sm font-medium text-gray-700',
                                children: 'Address',
                            }),
                            e.jsx('textarea', {
                                name: 'address',
                                value: s.address,
                                onChange: t,
                                disabled: !a,
                                rows: '2',
                                className:
                                    'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500',
                            }),
                        ],
                    }),
                    e.jsx('div', {
                        className: 'flex justify-end space-x-4',
                        children: a
                            ? e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx('button', {
                                          type: 'button',
                                          onClick: () => l(!1),
                                          className:
                                              'rounded-lg bg-gray-200 px-6 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-300',
                                          children: 'Cancel',
                                      }),
                                      e.jsx('button', {
                                          type: 'submit',
                                          disabled: d,
                                          className:
                                              'rounded-lg bg-green-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-300',
                                          children: d
                                              ? 'Saving...'
                                              : 'Save Changes',
                                      }),
                                  ],
                              })
                            : e.jsx('button', {
                                  type: 'button',
                                  onClick: () => l(!0),
                                  className:
                                      'rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                                  children: 'Edit Profile',
                              }),
                    }),
                ],
            }),
        ],
    });
};
export { j as default };
