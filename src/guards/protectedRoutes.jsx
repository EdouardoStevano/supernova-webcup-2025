import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserInfo } from '../core/utils/infoDecode';

// Simulez une méthode pour récupérer le token d'authentification
const getToken = () => {
    const tokenString = localStorage.getItem('token');
    return tokenString;
};

// Fonction pour décoder le token et obtenir les informations de rôle
const getRoleFromToken = () => {
    try {
        const userInfo = getUserInfo();
        if (!userInfo) return null;
        return userInfo.role;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

/**
 * @desc Composant pour protéger les routes
 * @param requiredRoles Tableau de rôles requis pour accéder à la route
 */
const ProtectedRoute = ({ requiredRoles = [] }) => {
    const token = getToken();
    const userRole = getRoleFromToken();

    // Redirection si l'utilisateur n'est pas authentifié
    if (!token) {
        return <Navigate to="/auth" replace />;
    }

    // Redirection si l'utilisateur n'a pas l'un des rôles requis
    if (requiredRoles.length > 0 && !requiredRoles.includes(userRole || '')) {
        return <Navigate to="/redirect/not-authorized" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
