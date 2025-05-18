import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../../../guards/protectedRoutes';

// Importation du page
const DashboardLayout = lazy(
    () => import('../../../presentation/pages/dashboard')
);

// Importation des panels avec un wrapper
const DashboardHome = lazy(
    () => import('../../../presentation/pages/dashboard/container/home')
);
const DashboardData = lazy(
    () => import('../../../presentation/pages/dashboard/container/data')
);
const DashboardProfile = lazy(
    () => import('../../../presentation/pages/dashboard/container/profile')
);

const DashboardNotFound = lazy(
    () => import('../../../presentation/pages/redirect/notFound')
);

const RedirectRoute = () => {
    return (
        <Routes>
            <Route path="" element={<DashboardLayout />}>
                <Route index element={<Navigate to="/dashboard/home" />} />
                <Route element={<ProtectedRoute requiredRoles={['admin']} />}>
                    <Route path="home" element={<DashboardHome />} />
                    <Route path="data" element={<DashboardData />} />
                    <Route path="profile" element={<DashboardProfile />} />
                </Route>

                <Route path="not-found" element={<DashboardNotFound />} />
            </Route>
        </Routes>
    );
};

export default RedirectRoute;
