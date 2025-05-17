import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/landing/scrollToTop/scrollToTop";
import Navbar from "./layouts/Navbar";

/**
 *
 * @desc: Landing pages
 */
const Landing = () => {
  return (
    <div>
      <ScrollToTop />
      {/* <Preload /> */}
      <Navbar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Landing;
