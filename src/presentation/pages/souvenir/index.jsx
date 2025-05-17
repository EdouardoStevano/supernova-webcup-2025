import { Outlet } from "react-router-dom";
import SidebarSouvenir from "./layouts/sidebar";

const SouvenirPage = () => {
  return (
    <div className="pointBackground h-screen max-h-[100vh] overflow-hidden bg-gray-200">
      <SidebarSouvenir />

      <Outlet />
    </div>
  );
};
export default SouvenirPage;
