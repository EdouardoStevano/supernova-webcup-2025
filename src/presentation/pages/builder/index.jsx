import React from 'react';
import Sidebar from './layouts/sidebar';
import { Outlet } from 'react-router-dom';

const BuilderPage = () => {
    return (
        <div className="pointBackground h-screen max-h-[100vh] cursor-auto overflow-hidden bg-gray-200">
            <div className="content flex h-full w-full overflow-hidden">
                <Sidebar />

                <div className="absolute right-10 bottom-10 z-10 flex flex-col gap-2 p-4">
                    <button
                        onClick={() => (window.location.href = '/assitance/ai')}
                        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                    >
                        AI Assistance
                    </button>
                    <button
                        onClick={() => (window.location.href = '/video')}
                        className="rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600"
                    >
                        Video
                    </button>
                </div>

                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default BuilderPage;
