import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Importation du page
const AuthLayout = lazy(() => import('../../../presentation/pages/auth'));

// Importation des panels avec un wrapper
const SignIn = lazy(
    () => import('../../../presentation/pages/auth/containers/signIn')
);
const SignUp = lazy(
    () => import('../../../presentation/pages/auth/containers/signUp')
);

// Importation des pages de redirection
const AuthNotFound = lazy(
    () => import('../../../presentation/pages/redirect/notFound')
);

/**
 *
 * @desc: Auth Routes
 */
const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<AuthLayout />}>
                <Route index element={<Navigate to="/auth/signin" />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Route>

            {/* Page de redirection */}
            <Route path="*" element={<AuthNotFound />} />
        </Routes>
    );
};

export default AuthRoutes;
