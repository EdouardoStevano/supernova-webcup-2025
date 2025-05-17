import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importation du page
const RedirectLayout = lazy(
    () => import('../../../presentation/pages/redirect')
);

// Importation des panels avec un wrapper
const RedirectLoader = lazy(
    () => import('../../../presentation/pages/redirect/loader')
);
const RedirectNotFound = lazy(
    () => import('../../../presentation/pages/redirect/notFound')
);
const RedirectNotAuthorized = lazy(
    () => import('../../../presentation/pages/redirect/notAuthorized')
);

const RedirectRoute = () => {
    return (
        <Routes>
            <Route path="" element={<RedirectLayout />}>
                <Route index element={<RedirectNotFound />} />
                <Route path="loader" element={<RedirectLoader />} />
                <Route
                    path="not-Authorized"
                    element={<RedirectNotAuthorized />}
                />
                <Route path="not-found" element={<RedirectNotFound />} />
            </Route>
        </Routes>
    );
};

export default RedirectRoute;
