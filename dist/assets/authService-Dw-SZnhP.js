const r = [
        {
            id: '1',
            username: 'admin',
            email: 'admin@example.com',
            password: 'admin123',
            role: 'admin',
            bio: 'System administrator with 5+ years of experience',
            address: '123 Admin Street, Tech City, TC 12345',
            contact: '+1 (555) 123-4567',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            isActive: !0,
            createdAt: '2024-03-15T10:00:00Z',
        },
        {
            id: '2',
            username: 'john_doe',
            email: 'john@example.com',
            password: '300600Eds@',
            role: 'user',
            bio: 'Software developer passionate about web technologies',
            address: '456 Oak Avenue, Developer Town, DT 67890',
            contact: '+1 (555) 234-5678',
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            isActive: !0,
            createdAt: '2024-03-15T11:00:00Z',
        },
        {
            id: '3',
            username: 'jane_smith',
            email: 'jane@example.com',
            password: 'pass456',
            role: 'moderator',
            bio: 'Community moderator and content curator',
            address: '789 Maple Lane, Mod City, MC 13579',
            contact: '+1 (555) 345-6789',
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
            isActive: !0,
            createdAt: '2024-03-15T12:00:00Z',
        },
        {
            id: '4',
            username: 'bob_wilson',
            email: 'bob@example.com',
            password: 'bobpass789',
            role: 'user',
            bio: 'Digital artist and UI/UX enthusiast',
            address: '321 Pine Road, Art Valley, AV 24680',
            contact: '+1 (555) 456-7890',
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
            isActive: !1,
            createdAt: '2024-03-15T13:00:00Z',
        },
    ],
    u = {
        login: (e, o) =>
            new Promise((s, n) => {
                const t = r.find((a) => a.username === e && a.password === o);
                if (t) {
                    const a = {
                            data: t,
                            exp: Math.floor(Date.now() / 1e3) + 3600,
                        },
                        m = 'stevano',
                        i = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })),
                        d = btoa(JSON.stringify(a)),
                        c = btoa(i + '.' + d + m),
                        l = `${i}.${d}.${c}`;
                    localStorage.setItem('token', l), s(t);
                } else n(new Error('Invalid email or password'));
            }),
        register: (e) =>
            new Promise((o, s) => {
                if (r.find((a) => a.email === e.email)) {
                    s(new Error('User with this email already exists'));
                    return;
                }
                const t = { id: r.length + 1, ...e };
                r.push(t), o(t);
            }),
        logout: () =>
            new Promise((e) => {
                localStorage.removeItem('token'), e();
            }),
        getCurrentUser: () => JSON.parse(localStorage.getItem('token')),
        isAuthenticated: () => localStorage.getItem('token') !== null,
    };
export { u as a };
