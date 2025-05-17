import React from 'react';
import { Outlet } from 'react-router-dom';
import AnimatedCursor from '../components/common/cursor';

const MainPage = () => {
    return (
        <div className="main-content overflow-y-auto sm:h-full sm:w-full">
            <AnimatedCursor />

            <Outlet />
        </div>
    );
};

export default MainPage;
