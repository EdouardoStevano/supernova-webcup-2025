import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import image1 from '../../../assets/illustrations/auth2.jpg';

// Custom hook for tracking mouse position
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

const menuItems = [
    { id: 1, icon: image1, label: 'Espace création', link: '/builder' },
    { id: 2, icon: image1, label: 'Communauté', link: '/blog' },
    {
        id: 3,
        icon: image1,
        label: 'Cimetière des projets',
        link: '/assitance/project-graveyard',
    },
    {
        id: 3,
        icon: image1,
        label: 'Souvenir',
        link: '/remember',
    },
    { id: 4, icon: image1, label: 'Hall of fame', link: '/leaderboard' },
];

const BottomMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mousePosition = useMousePosition();
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="fixed right-10 bottom-10 z-50">
            <div className="relative">
                {/* Main floating button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-white-600 flex items-center gap-3 rounded-2xl bg-white px-1 py-1 text-[12px] text-gray-700 shadow-lg transition-colors hover:bg-[#d85dc1] hover:text-white"
                >
                    <span
                        className="h-10 w-10 rounded-xl bg-[#521f48] bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${image1})`,
                        }}
                    />
                    {t('floatBtn.title')}
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-1"
                    >
                        ▼
                    </motion.span>
                </motion.button>

                {/* Floating menu items */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-12 -left-10 mb-4"
                        >
                            {menuItems.map((item, index) => (
                                <motion.div key={item.id} className="mb-2">
                                    <motion.div
                                        onClick={() => navigate(item.link)}
                                        className="flex w-[200px] cursor-pointer items-center gap-2 rounded-2xl bg-white p-1 text-[13px] text-gray-600 shadow-md transition-colors hover:bg-purple-50"
                                        style={{
                                            marginBottom: `${mousePosition.y * 0.02}px`,
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                            scale: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            x: mousePosition.x * 0.05,
                                            gap: `${8 + mousePosition.y * 0.02}px`,
                                            transition: {
                                                duration: 0.2,
                                                delay: index * 0.05,
                                                type: 'spring',
                                                stiffness: 50,
                                                damping: 5,
                                            },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 20,
                                            scale: 0,
                                            transition: {
                                                duration: 0.2,
                                                delay:
                                                    (menuItems.length -
                                                        index -
                                                        1) *
                                                    0.1,
                                            },
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <span
                                            className="h-10 w-10 rounded-xl bg-[#d85dc1] bg-cover bg-center bg-no-repeat"
                                            style={{
                                                backgroundImage: `url(${item.icon})`,
                                            }}
                                        />
                                        <span>{item.label}</span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BottomMenu;
