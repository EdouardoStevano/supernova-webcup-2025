import {
    BellIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    LogOut,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../../../components/common/modal';
import { sampleNotifications } from '../../../../data/datasource/notifications';
import authService from '../../../services/authService';
import { getUserInfo } from '../../../../core/utils/infoDecode';
import { driver } from 'driver.js';

const DashboardNavbar = ({ menuGroups }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationGroups, setNotificationGroups] =
        useState(sampleNotifications);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const notificationsRef = useRef(null);
    const profileMenuRef = useRef(null);
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const userInfo = getUserInfo();

    // const driverObj = driver({
    //     showProgress: true,
    //     steps: [
    //         {
    //             element: '#tour1',
    //             popover: {
    //                 title: 'Animated Tour Example',
    //                 description:
    //                     "Here is the code example showing animated tour. Let's walk you through it.",
    //                 side: 'bottom',
    //                 align: 'start',
    //             },
    //         },
    //         {
    //             element: '#tour2',
    //             popover: {
    //                 title: 'Import the Library',
    //                 description:
    //                     'It works the same in vanilla JavaScript as well as frameworks.',
    //                 side: 'bottom',
    //                 align: 'start',
    //             },
    //         },
    //     ],
    // });

    // driverObj.drive();

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                notificationsRef.current &&
                !notificationsRef.current.contains(event.target)
            ) {
                setShowNotifications(false);
            }
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target)
            ) {
                setShowProfileMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    function handleMarkAllAsRead() {
        console.log('Mark all as read');
        alert('Mark all as read');
    }
    function toggleNotification(id) {
        setNotificationGroups((prevGroups) =>
            prevGroups.map((group) => ({
                ...group,
                notifications: group.notifications.map((notification) =>
                    notification.id === id
                        ? { ...notification, expanded: !notification.expanded }
                        : notification
                ),
            }))
        );
    }

    async function handleLogout() {
        try {
            await authService.logout().then(() => {
                navigate('/auth');
            });
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
    return (
        <div className="animate-swipe-down fixed bottom-0 z-20 h-auto w-full items-center justify-center rounded-b-[20px] md:relative md:flex md:h-[80px] md:bg-white/80">
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Déconnexion"
                size="md"
                footer={
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={handleCloseModal}
                            className="cursor-pointer rounded-xl bg-gray-200 px-6 py-2 text-gray-700 transition hover:bg-gray-300"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={handleLogout}
                            className="cursor-pointer rounded-xl bg-red-600 px-6 py-2 text-white transition hover:bg-red-700"
                        >
                            Déconnecter
                        </button>
                    </div>
                }
            >
                <div className="px-2 py-4">
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                        Confirmation de déconnexion
                    </h3>
                    <p className="mb-2 text-[14px] text-gray-600">
                        Êtes-vous sûr de vouloir vous déconnecter ?
                    </p>
                </div>
            </Modal>

            <div className="z-20 m-4 flex max-w-[1400px] flex-col items-center justify-between rounded-2xl bg-white/80 p-2 md:m-0 md:w-full md:flex-row md:bg-transparent md:px-14">
                <div className="hidden items-center md:flex">
                    <img
                        src="/favicon.svg"
                        alt="Logo"
                        className="h-auto w-16 transition-all md:w-10"
                        id="tour1"
                    />
                    <span className="ml-2">TheEndPage</span>
                </div>

                <nav className="flex items-center">
                    <ul className="flex items-center space-x-4">
                        {menuGroups.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={item.link}
                                        className="dashLink md:bg-custom-light-gray rounded-[50px] bg-transparent text-[14px] text-gray-700"
                                    >
                                        <span className="nav-icon">
                                            {item.icon}
                                        </span>
                                        <span className="nav-text fade md:ml-2 md:flex">
                                            {item.text}
                                        </span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="fixed right-4 bottom-[93vh] z-20 flex items-center space-x-3 md:relative md:top-0 lg:space-x-4">
                    <div ref={notificationsRef} className="relative" id="tour2">
                        <button
                            onClick={() =>
                                setShowNotifications(!showNotifications)
                            }
                            className="text-custom-dark-gray hover:bg-primary-300 relative z-20 h-9 w-9 cursor-pointer rounded-md bg-white/80 p-[5.5px] transition-colors hover:text-white md:rounded-full md:bg-white"
                        >
                            <BellIcon className="text-lg lg:text-xl" />
                            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                                {notificationGroups.reduce(
                                    (total, group) =>
                                        total + group.notifications.length,
                                    0
                                )}
                            </span>
                        </button>

                        {showNotifications && (
                            <div className="fadein shadow-medium absolute -right-8 z-50 mt-2 w-[340px] overflow-hidden rounded-[24px] bg-white/80 backdrop-blur-md lg:-right-4 lg:w-[500px]">
                                <header className="flex items-center justify-between border-b border-gray-300 p-4">
                                    <h1 className="text-[20px] font-bold">
                                        Notifications
                                    </h1>
                                    <button
                                        onClick={handleMarkAllAsRead}
                                        className="text-sm font-semibold text-orange-500 hover:text-orange-300"
                                    >
                                        Mark all as read
                                    </button>
                                </header>

                                <div className="max-h-96 overflow-y-auto p-4 px-8">
                                    {notificationGroups.map(
                                        (group, groupIndex) => (
                                            <section key={groupIndex}>
                                                <h3 className="py-2 text-sm font-medium text-gray-500">
                                                    {group.date}
                                                </h3>
                                                <div className="overflow-hidden rounded-[20px] bg-gray-100">
                                                    {group.notifications.map(
                                                        (
                                                            notification,
                                                            index
                                                        ) => (
                                                            <article
                                                                key={
                                                                    notification.id
                                                                }
                                                                className={`group transition hover:bg-gray-50 ${
                                                                    index !==
                                                                    group
                                                                        .notifications
                                                                        .length -
                                                                        1
                                                                        ? 'border-b border-b-gray-300'
                                                                        : ''
                                                                }`}
                                                            >
                                                                <button
                                                                    onClick={() =>
                                                                        toggleNotification(
                                                                            notification.id
                                                                        )
                                                                    }
                                                                    className="flex w-full cursor-pointer items-center justify-between p-4"
                                                                >
                                                                    <div className="flex items-center">
                                                                        <img
                                                                            src={
                                                                                notification.image
                                                                            }
                                                                            alt=""
                                                                            className="mr-3 h-10 w-10 rounded-full"
                                                                        />
                                                                        <p className="text-sm font-medium">
                                                                            {
                                                                                notification.title
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    {notification.expanded ? (
                                                                        <ChevronDownIcon className="mr-3 h-4 w-4 text-gray-400" />
                                                                    ) : (
                                                                        <ChevronRightIcon className="mr-3 h-4 w-4 text-gray-400" />
                                                                    )}
                                                                </button>
                                                                {notification.expanded && (
                                                                    <div className="fade px-11 pb-4">
                                                                        <p className="text-sm text-gray-600">
                                                                            {
                                                                                notification.content
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </article>
                                                        )
                                                    )}
                                                </div>
                                            </section>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div ref={profileMenuRef} className="relative">
                        <button
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                            className="cursor-pointer"
                        >
                            <div
                                className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full font-bold text-white transition hover:border-3 md:h-7 md:w-7 lg:h-8 lg:w-8 ${
                                    !userInfo.image
                                        ? 'bg-primary-500 border-primary-200'
                                        : ''
                                }`}
                            >
                                {userInfo.image ? (
                                    <img
                                        src={userInfo.image}
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    userInfo.name.charAt(0)
                                )}
                            </div>
                        </button>

                        {showProfileMenu && (
                            <div className="fadein absolute right-0 z-50 mt-2 w-48 divide-y divide-gray-100 overflow-hidden rounded-[15px] bg-white/80 shadow-lg backdrop-blur-md">
                                <div className="flex gap-2 p-3">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={userInfo.image}
                                        alt=""
                                    />
                                    <div className="flex flex-col text-gray-800">
                                        <span className="text-[14px]">
                                            Bonjour{' '}
                                            <span className="font-semibold">
                                                {userInfo.username}
                                            </span>
                                        </span>
                                        <span className="text-[12px] text-gray-500">
                                            {userInfo.role}
                                        </span>
                                    </div>
                                </div>

                                <nav>
                                    <NavLink
                                        to="/dashboard/profile"
                                        className="hover:bg-primary-300 block w-full px-4 py-2 text-sm text-gray-700 transition hover:text-white"
                                    >
                                        Profile
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/settings/account"
                                        className="hover:bg-primary-300 block w-full px-4 py-2 text-sm text-gray-700 transition hover:text-white"
                                    >
                                        Settings
                                    </NavLink>
                                </nav>
                                <div>
                                    <button
                                        onClick={handleOpenModal}
                                        className="block w-full cursor-pointer px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-600 hover:text-white"
                                    >
                                        Déconnexion
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
