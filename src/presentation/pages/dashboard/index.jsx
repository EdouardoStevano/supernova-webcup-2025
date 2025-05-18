import React from 'react';
import DashboardNavbar from './layouts/dashboardNavbar';
import FloatAssistance from '../../components/dashboard/floatAssistance';
import { Outlet } from 'react-router-dom';

import { menus } from './constants/navigation';

const DashboardPage = () => {
    return (
        <div className="h-screen max-h-[100vh] cursor-auto overflow-hidden bg-gray-200">
            <DashboardNavbar menuGroups={menus} />

            <div className="content flex h-[86%] w-full justify-center overflow-y-auto">
                <Outlet />
            </div>

            <FloatAssistance />
        </div>
    );
};

export default DashboardPage;
