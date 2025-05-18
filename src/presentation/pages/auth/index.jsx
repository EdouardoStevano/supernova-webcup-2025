import { GoogleOAuthProvider } from '@react-oauth/google';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div className="main-content bg-abstract-background overflow-y-auto sm:h-full sm:w-full">
            <Outlet />
        </div>
    );
};

export default Auth;
