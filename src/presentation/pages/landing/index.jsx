import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../components/landing/scrollToTop/scrollToTop';
import Navbar from './layouts/Navbar';
import AnimatedCursor from '../../components/common/cursor';
import BottomMenu from './layouts/bottomMenu';
import EcoIndex from './layouts/ecoIndex';

/**
 *
 * @desc: Landing pages
 */
const Landing = () => {
    return (
        <div className="pointBackground dark:bg-gray-900">
            <ScrollToTop />
            {/* <Preload /> */}
            <AnimatedCursor />
            <BottomMenu />
            <EcoIndex />

            {/* <div className="bg-red-600">
                Test
                <div id="ecoindex-badge" data-theme="dark">
                    Test
                </div>
            </div> */}

            <Navbar />
            <div className="gradientBack1 h-[300vh]">
                <Outlet />
            </div>
        </div>
    );
};

export default Landing;
