import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
    const stories = [
        {
            id: 1,
            name: ' Camille R. — ex-collaboratrice RH',
            date: '19 March 2025',
            image: 'https://randomuser.me/api/portraits/men/10.jpg',
            text: 'Je voulais éviter le pot de départ gênant… Ma page a fait le tour de la boîte en 15 minutes. On en rigole encore dans le groupe WhatsApp !',
        },
        {
            id: 2,
            name: ' Lucas T. — freelance désabusé',
            date: '15 March 2025',
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            text: 'TheEnd.page m’a permis de dire au revoir à un client toxique avec ironie… et une playlist. C’était libérateur. Et classe.',
        },
        {
            id: 3,
            name: ' Lucas T. — freelance désabusé',
            date: '10 March 2025',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            text: 'TheEnd.page m’a permis de dire au revoir à un client toxique avec ironie… et une playlist. C’était libérateur. Et classe.',
        },
        {
            id: 4,
            name: 'Sophie D. — ancienne membre d’un serveur Discord',
            date: '15 March 2025',
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
            text: 'J’ai quitté un serveur où ça devenait n’importe quoi. Ma page de départ ? 100 % passive-agressive, 100 % moi.',
        },
        {
            id: 5,
            name: 'Jonathan B. — dev fullstack fatigué',
            date: '10 March 2025',
            image: 'https://randomuser.me/api/portraits/men/5.jpg',
            text: 'C’est l’IA qui m’a soufflé les meilleures punchlines pour ma démission. Résultat : une page partagée 62 fois. Je suis une légende dans mon open-space.',
        },
        {
            id: 6,
            name: 'Mélanie P. — ex en paix',
            date: '15 March 2025',
            image: 'https://randomuser.me/api/portraits/men/6.jpg',
            text: 'Thanks to pronoïa, I got my first job in less than two weeks. The platform is fast, clean, and the CV generator is amazing.',
        },
        {
            id: 7,
            name: 'Maria Lee',
            date: '10 March 2025',
            image: 'https://randomuser.me/api/portraits/men/7.jpg',
            text: 'J’ai utilisé TheEnd.page pour tourner la page avec mon ex. J’ai pu dire tout ce que j’avais sur le cœur… avec poésie et humour. Même lui a aimé',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNavigation = (dir) => {
        setDirection(dir === 'left' ? -1 : 1);
        if (dir === 'left') {
            setCurrentIndex((prev) =>
                prev === 0 ? stories.length - 1 : prev - 1
            );
        } else {
            setCurrentIndex((prev) =>
                prev === stories.length - 1 ? 0 : prev + 1
            );
        }
    };

    const getPreviousIndex = () => {
        return currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    };

    const getNextIndex = () => {
        return currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300, // Reduced distance to match card width
            scale: 0.3,
            opacity: 0.5,
        }),
        center: {
            zIndex: 1,
            x: 0,
            scale: 1,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 600 : -600, // Reduced distance to match card width
            scale: 0.85,
            opacity: 0.5,
        }),
    };
    return (
        <section className="bg-gray-900 px-4 py-10 sm:px-6 lg:px-8" id="testy">
            <div className="mx-auto mt-14 max-w-[1200px]">
                <h1
                    data-aos="fade-up"
                    className="flex flex-wrap items-center justify-center gap-3 text-center text-3xl font-extrabold text-white/90 sm:text-4xl"
                >
                    <img
                        src="/favicon.svg"
                        alt="Logo"
                        className="h-auto w-10"
                    />
                    <span>Ils sont partis, et ils ont brillé</span>
                </h1>
                <p
                    data-aos="fade-up"
                    className="mx-auto mt-4 mb-10 max-w-2xl text-center text-[16px] text-gray-300"
                >
                    TheEnd.page, ces utilisateurs ont transformé leur fin en
                    moment mémorable — parfois drôle, parfois touchant, parfois
                    explosif. Voici leurs histoires, leurs pages, et leurs mots.
                    Parce qu’une bonne sortie, ça se raconte.
                </p>

                {/* <a href="#home">test</a> */}

                {/* Carousel navigation buttons */}
                <div
                    data-aos="fade-up"
                    className="relative top-44 z-20 mx-auto mb-8 flex justify-between gap-8 md:w-[450px]"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleNavigation('left')}
                        className="text-custom-bright-blue hover:bg-custom-bright-blue rounded-full bg-white px-4 py-3 shadow-md transition duration-300 hover:text-white"
                    >
                        <ArrowLeft />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleNavigation('right')}
                        className="text-custom-bright-blue hover:bg-custom-bright-blue rounded-full bg-white px-4 py-3 shadow-md transition duration-300 hover:text-white"
                    >
                        <ArrowRight />
                    </motion.button>
                </div>

                {/* Carousel */}
                <div
                    data-aos="fade-up"
                    className="lightSuccess relative -top-20 flex items-center justify-center gap-2 overflow-hidden px-10 py-16 md:px-0"
                >
                    {/* Previous Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={getPreviousIndex()}
                            initial={{ opacity: 0, x: 0 }}
                            animate={{
                                opacity: 0.5,
                                scale: 0.85,
                                x: 0,
                                transition: {
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                },
                            }}
                            exit={{ opacity: 0 }}
                            className="CardSuccess hidden h-[300px] w-[600px] rounded-[40px] bg-white/5 p-8 text-white shadow-2xl md:block"
                        >
                            <div className="mb-6 flex items-center space-x-4">
                                <img
                                    src={stories[getPreviousIndex()].image}
                                    alt={stories[getPreviousIndex()].name}
                                    className="h-20 w-20 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-xl font-semibold">
                                        {stories[getPreviousIndex()].name}
                                    </p>
                                    <div className="flex space-x-1">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="text-base text-yellow-400"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <span className="mb-4 block text-sm text-gray-300">
                                {stories[getPreviousIndex()].date}
                            </span>
                            <p className="text-[15px] leading-relaxed">
                                "{stories[getPreviousIndex()].text}"
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Current Card */}
                    <AnimatePresence
                        initial={false}
                        custom={direction}
                        mode="wait"
                    >
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                opacity: {
                                    duration: 0.2,
                                    ease: 'linear',
                                },
                            }}
                            className="CardSuccess border-custom-bright-blue z-10 h-[300px] w-[600px] rounded-[40px] bg-white/5 p-8 text-white shadow-2xl"
                        >
                            <div className="mb-6 flex items-center space-x-4">
                                <img
                                    src={stories[currentIndex].image}
                                    alt={stories[currentIndex].name}
                                    className="h-20 w-20 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-xl font-semibold">
                                        {stories[currentIndex].name}
                                    </p>
                                    <div className="flex space-x-1">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="text-base text-yellow-400"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <span className="mb-4 block text-sm text-gray-300">
                                {stories[currentIndex].date}
                            </span>
                            <p className="text-[15px] leading-relaxed">
                                "{stories[currentIndex].text}"
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Next Card */}
                    <AnimatePresence
                        initial={false}
                        custom={direction}
                        mode="wait"
                    >
                        <motion.div
                            key={getPreviousIndex()}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 0.5,
                                scale: 0.85,
                                transition: {
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                },
                            }}
                            exit={{ opacity: 0 }}
                            className="CardSuccess hidden h-[300px] w-[600px] rounded-[40px] bg-white/5 p-8 text-white shadow-2xl md:block"
                        >
                            <div className="mb-6 flex items-center space-x-4">
                                <img
                                    src={stories[getNextIndex()].image}
                                    alt={stories[getNextIndex()].name}
                                    className="h-20 w-20 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-xl font-semibold">
                                        {stories[getNextIndex()].name}
                                    </p>
                                    <div className="flex space-x-1">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="text-base text-yellow-400"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <span className="mb-4 block text-sm text-gray-300">
                                {stories[getNextIndex()].date}
                            </span>
                            <p className="text-[12px] leading-relaxed md:text-[15px]">
                                "{stories[getNextIndex()].text}"
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
