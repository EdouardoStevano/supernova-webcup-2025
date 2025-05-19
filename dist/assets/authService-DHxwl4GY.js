import { u as o } from './users-D_sYzQY4.js';
const w = {
    login: (e, n) =>
        new Promise((s, a) => {
            const t = o.find((r) => r.username === e && r.password === n);
            if (t) {
                const r = { data: t, exp: Math.floor(Date.now() / 1e3) + 3600 },
                    c = 'stevano',
                    i = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })),
                    l = btoa(JSON.stringify(r)),
                    d = btoa(i + '.' + l + c),
                    g = `${i}.${l}.${d}`;
                localStorage.setItem('token', g), s(t);
            } else a(new Error('Invalid email or password'));
        }),
    register: (e) =>
        new Promise((n, s) => {
            if (o.find((r) => r.email === e.email)) {
                s(new Error('User with this email already exists'));
                return;
            }
            const t = { id: o.length + 1, ...e };
            o.push(t), n(t);
        }),
    logout: () =>
        new Promise((e) => {
            localStorage.removeItem('token'), e();
        }),
    getCurrentUser: () => JSON.parse(localStorage.getItem('token')),
    isAuthenticated: () => localStorage.getItem('token') !== null,
};
export { w as a };
