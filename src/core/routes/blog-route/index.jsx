import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// Importation du page
const BlogLayout = lazy(() => import('../../../presentation/pages/blog/'));

// Importation des panels avec un wrapper
const BlogHome = lazy(
    () => import('../../../presentation/pages/blog/container/blogContainer')
);
const BlogPages = lazy(
    () => import('../../../presentation/pages/blog/container/pagesContainer')
);

// Importation des pages de redirection
const AuthNotFound = lazy(
    () => import('../../../presentation/pages/redirect/notFound')
);

const BlogRoute = () => {
    return (
        <Routes>
            <Route path="" element={<BlogLayout />}>
                <Route index element={<Navigate to="/blog/main" />} />
                <Route path="main" element={<BlogHome />} />
                <Route path="pages" element={<BlogPages />} />
                <Route path="pages/:id" element={<BlogPages />} />
            </Route>
            {/* Page de redirection */}
            <Route path="*" element={<AuthNotFound />} />
        </Routes>
    );
};

export default BlogRoute;
