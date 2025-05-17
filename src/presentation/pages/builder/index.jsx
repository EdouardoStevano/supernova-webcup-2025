import React from 'react';
import Sidebar from './layouts/sidebar';
import { Outlet } from 'react-router-dom';

const BuilderPage = () => {
    return (
        <div className="pointBackground h-screen max-h-[100vh] overflow-hidden bg-gray-200">
            <div className="content flex h-full w-full overflow-hidden">
                <Sidebar />

                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default BuilderPage;
