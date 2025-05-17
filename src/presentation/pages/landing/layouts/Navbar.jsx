import React, { useState } from 'react';
import { opacity } from '../anim/menuAnim';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from '../../../components/landing/Navigation/nav';
import Button from '../../../components/common/Btn';
import LangSelection from '../../../components/common/LangSelection';
import DarkModeSwitch from '../../../components/common/darkModeSwitch';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.3,
            }}
            className="fixed top-0 z-50 w-full py-5"
        >
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex gap-2">
                        <img
                            className="h-8 w-auto"
                            src="/favicon.svg"
                            alt="Logo"
                        />

                        <div className="flex flex-col">
                            <span className="text-[15px] font-bold dark:text-white">
                                TheEnd.page
                            </span>
                            <span className="text-[8px] dark:text-white">
                                Créez des pages de fin stylisées{' '}
                            </span>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex items-center gap-3">
                        <div className="flex flex-row items-center">
                            <span className="mr-3 hidden text-sm text-gray-600 md:flex dark:text-white">
                                Je claque la porte{' '}
                            </span>

                            <Link to="/auth">
                                <Button
                                    variants="primary"
                                    size="small"
                                    className="rounded-full px-4 py-1 text-[13px] text-white transition-colors"
                                >
                                    Se connecter
                                </Button>
                            </Link>
                        </div>

                        <div className="hidden items-center md:flex">
                            <LangSelection />
                            <DarkModeSwitch />
                        </div>

                        <div>
                            <div
                                onClick={() => {
                                    setIsActive(!isActive);
                                }}
                                className="flex cursor-pointer items-center justify-center gap-2 dark:text-white"
                            >
                                <motion.div
                                    className="relative z-20 h-[2px] w-[22.5px]"
                                    initial={false}
                                >
                                    <motion.span
                                        className="absolute block h-[1px] w-full bg-black dark:text-white"
                                        animate={{
                                            rotate: isActive ? 45 : 0,
                                            y: isActive ? 0 : -4,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    />
                                    <motion.span
                                        className="absolute block h-[1px] w-full bg-black"
                                        animate={{
                                            rotate: isActive ? -45 : 0,
                                            y: isActive ? 0 : 4,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    />
                                </motion.div>

                                <div className="relative hidden h-full items-center md:flex">
                                    <motion.p
                                        variants={opacity}
                                        animate={!isActive ? 'open' : 'closed'}
                                        className="text-xs font-normal uppercase sm:text-sm"
                                    >
                                        Menu
                                    </motion.p>

                                    <motion.p
                                        variants={opacity}
                                        animate={isActive ? 'open' : 'closed'}
                                        className="absolute text-xs font-normal uppercase opacity-0 sm:text-sm"
                                    >
                                        Close
                                    </motion.p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isActive && <Nav />}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
