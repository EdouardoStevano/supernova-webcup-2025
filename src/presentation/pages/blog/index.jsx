import { Outlet } from 'react-router-dom';
import BlogNavBar from './layouts/blogNavBar';
import SidePanel from './layouts/sidePanel';

const BlogPages = () => {
    return (
        <div className="flex">
            <div>
                <BlogNavBar />
            </div>
            <div className="fadeIn w-[calc(100%-688px)]">
                <Outlet />
            </div>
            <div>
                <SidePanel />
            </div>
        </div>
    );
};

export default BlogPages;
