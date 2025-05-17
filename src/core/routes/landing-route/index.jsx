import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importation du page
const LandingLayout = lazy(() => import('../../../presentation/pages/landing'));

// Importation des panels avec un wrapper
const LandingTest = lazy(
    () => import('../../../presentation/pages/landing/contents/home')
);

// Importation des pages de redirection
const LandingNotFound = lazy(
    () => import('../../../presentation/pages/redirect/notFound')
);

/**
 *
 * @desc: Landing Routes
 */
const LandingRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<LandingLayout />}>
                <Route index element={<LandingTest />} />
            </Route>

            {/* Page de redirection */}
            <Route path="*" element={<LandingNotFound />} />
        </Routes>
    );
};

export default LandingRoutes;
