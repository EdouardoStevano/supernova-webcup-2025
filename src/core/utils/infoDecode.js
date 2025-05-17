import { jwtDecode } from 'jwt-decode';

/**
 * Decodes a JWT token and extracts user information
 * @param {string} token - JWT token to decode
 * @returns {Object|null} Decoded token payload or null if invalid
 */
export const decodeToken = (token) => {
    try {
        if (!token) {
            return null;
        }

        // Decode the token
        const decoded = jwtDecode(token);

        // Check if token is expired
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp < currentTime) {
            return null;
        }

        return decoded;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

/**
 * Extracts specific user info from decoded token
 * @param {string} token - JWT token
 * @returns {Object} User information object
 */
export const getUserInfo = () => {
    const token = localStorage.getItem('token');
    const decoded = decodeToken(token);

    if (!decoded || !decoded.data) {
        return null;
    }

    return decoded.data;
};

/**
 * How to use:
 *
 * 1. Decoding a JWT token:
 *    ```js
 *    const token = "your.jwt.token";
 *    const decoded = decodeToken(token);
 *    // decoded will contain the token payload or null if invalid
 *    ```
 *
 * 2. Getting user information:
 *    ```js
 *    const token = "your.jwt.token";
 *    const userInfo = getUserInfo(token);
 *    // userInfo will contain: { id, email, name, role }
 *    ```
 *
 * 3. Example with localStorage:
 *    ```js
 *    const token = localStorage.getItem('authToken');
 *    const userInfo = getUserInfo(token);
 *    if (userInfo.id) {
 *        // User is authenticated
 *    }
 *    ```
 */
