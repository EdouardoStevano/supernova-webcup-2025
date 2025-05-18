import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../components/landing/scrollToTop/scrollToTop';
import Navbar from './layouts/Navbar';
import BottomMenu from './layouts/bottomMenu';
import EcoIndex from './layouts/ecoIndex';
import StickyFooter from '../../components/landing/stickyfooter/stickyFooter';
// import Preload from '../../components/preload';

/**
 *
 * @desc: Landing pages
 */
const Landing = () => {
    return (
        <div className="pointBackground dark:bg-gray-900">
            <ScrollToTop />
            {/* <Preload /> */}
            <BottomMenu />
            <EcoIndex />

            <Navbar />
            <div className="gradientBack1">
                <Outlet />
            </div>
        </div>
    );
};

export default Landing;
