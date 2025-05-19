import React from 'react';
import Sidebar from './layouts/sidebar';
import { Outlet, Link } from 'react-router-dom';

const BuilderPage = () => {
    return (
        <div className="pointBackground min-h-screen cursor-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="content relative flex h-full w-full overflow-hidden">
                <Link
                    to="/"
                    className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md transition-colors hover:bg-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back
                </Link>

                <Sidebar />

                <div className="absolute right-10 bottom-10 z-10 flex flex-col gap-3 p-4">
                    <Link
                        to="/assitance/ai"
                        className="transform rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-600"
                    >
                        AI Assistance
                    </Link>
                    <Link
                        to="/video/ia"
                        className="transform rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-green-600"
                    >
                        Video
                    </Link>
                </div>

                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default BuilderPage;
