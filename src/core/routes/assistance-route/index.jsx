import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importation du page
const Assistance = lazy(() => import('../../../presentation/pages/assistance'));
/**
 *
 * @desc: Assistance Routes
 */
const AssistanceRoutes = () => {
    return (
        <Routes>
            <Route index element={<Assistance />} />

        </Routes>
    );
};

export default AssistanceRoutes;
