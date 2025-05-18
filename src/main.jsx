import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // React 18 utilise createRoot
import './styles/index.css';
import RoutesConfig from './core/routes/index.jsx';

import './config/translation/i18n.js';
import 'driver.js/dist/driver.css';

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
// Provider
import { ToastProvider } from './presentation/components/common/superToast';
import { FarewellProvider } from './context/FarewellContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <GoogleOAuthProvider clientId="212693773268-vdcde7idcp9nmv978c9q64ogme04s69d.apps.googleusercontent.com">
            <FarewellProvider>
                <ToastProvider>
                    <RoutesConfig />
                </ToastProvider>
            </FarewellProvider>
        </GoogleOAuthProvider>
    </StrictMode>
);
