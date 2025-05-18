import React, { lazy } from 'react';
import { getInitialDarkModePreference } from '../utils/theme';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../../presentation/components/landing/PageTransition';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ConnectionStatus from '../../presentation/components/common/connectionStatus';
import ProtectedRoute from '../../guards/protectedRoutes';
import Assistance from '../../presentation/pages/assistance';

import ProjectGraveYard from '../../presentation/components/project_graveyard';
import { LeaderboardTop3 } from '../../presentation/components/podium';
// Globale Routes
const Layout = lazy(() => import('../../presentation/pages'));

// ------------------------------------------------------------------------------------------------------
// Pages Route
const AuthRoutes = lazy(() => import('./auth-Route'));
const DashboardRoutes = lazy(() => import('./dashboard-route'));
const RedirectionRoutes = lazy(() => import('./redirect-route'));
const AssistanceRoutes = lazy(() => import('./assistance-route'));
const LandingRoutes = lazy(() => import('./landing-route'));
const BuilderRoutes = lazy(() => import('./builder-route'));
const BlogRoutes = lazy(() => import('./blog-route'));

const SouvenirRoutes = lazy(() => import('./souvenir-route'));
// ------------------------------------------------------------------------------------------------------

// Redirection pages
const NotFound = lazy(
    () => import('../../presentation/pages/redirect/notFound')
);

const RoutesConfig = () => {
    getInitialDarkModePreference();

    return (
        <BrowserRouter>
            <AnimatePresence mode="wait">
                {/* Constant components */}
                <ConnectionStatus />

                <Routes>
                    {/* Redirect '/' in '/landing' */}
                    <Route
                        path="/"
                        element={<Navigate to="/landing" replace />}
                    />

                    <Route path="/" element={<Layout />}>
                        {/* Landing routes*/}
                        <Route
                            path="landing/*"
                            element={
                                // <PageTransition>
                                <LandingRoutes />
                                // </PageTransition>
                            }
                        />
                        {/* Authentification routes*/}
                        <Route
                            path="auth/*"
                            element={
                                localStorage.getItem('token') ? (
                                    <Navigate to="/dashboard" replace />
                                ) : (
                                    <AuthRoutes />
                                )
                            }
                        />
                        {/* Dashboard routes*/}
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="dashboard/*"
                                element={<DashboardRoutes />}
                            />
                        </Route>

                        {/* Assisatnce routes*/}
                        <Route
                            path="assitance/ai"
                            element={<AssistanceRoutes />}
                        />
                        <Route
                            path="assitance/project-graveyard"
                            element={<ProjectGraveYard />}
                        />
                        <Route
                            path="leaderboard"
                            element={<LeaderboardTop3 />}
                        />

                        {/* Builder Pages */}
                        <Route path="builder/*" element={<BuilderRoutes />} />

                        <Route path="blog/*" element={<BlogRoutes />} />

                        {/* Page de Souvenir */}
                        <Route path="souvenir/*" element={<SouvenirRoutes />} />

                        {/* Sous-routes pour les redirections */}
                        <Route
                            path="redirect/*"
                            element={<RedirectionRoutes />}
                        />
                        {/* Routes des pages introuvable*/}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default RoutesConfig;
