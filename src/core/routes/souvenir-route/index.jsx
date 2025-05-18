import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// Importation du page
const SouvenirLayout = lazy(
    () => import('../../../presentation/pages/souvenir/')
);

// Importation des panels avec un wrapper
const SouvenirHome = lazy(
    () => import('../../../presentation/pages/souvenir/container/souvenir')
);

// Importation des pages de redirection
const AuthNotFound = lazy(
    () => import('../../../presentation/pages/redirect/notFound')
);

const SouvenirRoute = () => {
    return (
        <Routes>
            <Route path="" element={<SouvenirLayout />}>
                <Route index element={<Navigate to="/souvenir/main" />} />
                <Route path="main" element={<SouvenirHome />} />
            </Route>

            {/* Page de redirection */}
            <Route path="*" element={<AuthNotFound />} />
        </Routes>
    );
};

export default SouvenirRoute;
