import { users } from '../../data/datasource/users';

const authService = {
    login: (username, password) => {
        return new Promise((resolve, reject) => {
            const user = users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                // Create JWT payload with user data
                const payload = {
                    data: user,
                    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiration
                };

                // Sign JWT token with a secret key
                const secret = 'stevano'; // Should be in environment variables
                const header = {
                    alg: 'HS256',
                    typ: 'JWT',
                };

                // Encode header and payload
                const encodedHeader = btoa(JSON.stringify(header));
                const encodedPayload = btoa(JSON.stringify(payload));

                // Create signature
                const signature = btoa(
                    encodedHeader + '.' + encodedPayload + secret
                );

                // Combine to form JWT token
                const token = `${encodedHeader}.${encodedPayload}.${signature}`;

                localStorage.setItem('token', token);
                resolve(user);
            } else {
                reject(new Error('Invalid email or password'));
            }
        });
    },

    register: (userData) => {
        return new Promise((resolve, reject) => {
            // Check if user already exists
            const existingUser = users.find((u) => u.email === userData.email);

            if (existingUser) {
                reject(new Error('User with this email already exists'));
                return;
            }

            // Create new user
            const newUser = {
                id: users.length + 1,
                ...userData,
            };

            users.push(newUser);
            resolve(newUser);
        });
    },

    logout: () => {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            resolve();
        });
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('token'));
    },

    isAuthenticated: () => {
        return localStorage.getItem('token') !== null;
    },
};

export default authService;

// // Example usage of authService

// // Login example
// authService.login('user@example.com', 'password123')
//     .then(user => {
//         console.log('Successfully logged in:', user);
//     })
//     .catch(error => {
//         console.error('Login failed:', error.message);
//     });

// // Register example
// const newUserData = {
//     email: 'newuser@example.com',
//     password: 'newpass123',
//     firstName: 'John',
//     lastName: 'Doe'
// };

// authService.register(newUserData)
//     .then(user => {
//         console.log('Successfully registered:', user);
//     })
//     .catch(error => {
//         console.error('Registration failed:', error.message);
//     });

// // Check authentication status
// console.log('Is user authenticated?', authService.isAuthenticated());

// // Get current user
// const currentUser = authService.getCurrentUser();
// console.log('Current user:', currentUser);

// // Logout example
// authService.logout()
//     .then(() => {
//         console.log('Successfully logged out');
//     });
