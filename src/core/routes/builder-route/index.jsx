import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// Importation du page
const BuilderLayout = lazy(
    () => import('../../../presentation/pages/builder/')
);

// Importation des panels avec un wrapper
const BuilderHome = lazy(
    () => import('../../../presentation/pages/builder/container/mainBuilder')
);

// Importation des pages de redirection
const AuthNotFound = lazy(
    () => import('../../../presentation/pages/redirect/notFound')
);

const BuilderRoute = () => {
    return (
        <Routes>
            <Route path="" element={<BuilderLayout />}>
                <Route index element={<Navigate to="/builder/main" />} />
                <Route path="main" element={<BuilderHome />} />
            </Route>

            {/* Page de redirection */}
            <Route path="*" element={<AuthNotFound />} />
        </Routes>
    );
};

export default BuilderRoute;
