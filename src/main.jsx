import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // React 18 utilise createRoot
import "./styles/index.css";
import RoutesConfig from "./core/routes/index.jsx";

import "./config/translation/i18n.js";
import "driver.js/dist/driver.css";

// Provider
import { ToastProvider } from "./presentation/components/common/superToast";
import { FarewellProvider } from "./context/FarewellContext.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <FarewellProvider>
      <ToastProvider>
        <RoutesConfig />
      </ToastProvider>
    </FarewellProvider>
  </StrictMode>
);
