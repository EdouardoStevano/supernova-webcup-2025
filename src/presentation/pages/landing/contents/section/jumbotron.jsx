import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Banner1 from '../../../../assets/illustrations/jumbo1.png';
import Banner2 from '../../../../assets/illustrations/jumbo2.png';
import Banner3 from '../../../../assets/illustrations/jumbo3.png';
import Banner4 from '../../../../assets/illustrations/jumbo4.png';
import Cloud from '../../../../assets/illustrations/ccS.png';
import { FancyButton } from '../../../../components/common/FancyButton';
import { useTranslation } from 'react-i18next';

const Jumbotron = () => {
    const containerRef = useRef(null);
    const { t } = useTranslation();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const container = containerRef.current;
            if (!container) return;

            const { left, top, width, height } =
                container.getBoundingClientRect();
            const x = e.clientX - (left + width / 2);
            const y = e.clientY - (top + height / 2);

            mouseX.set(x);
            mouseY.set(y);
        };

        const container = containerRef.current;
        if (container) container.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (container)
                container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Adoucir la rotation (angle max : ±4°)
    const rotateX = useTransform(mouseY, [-100, 100], [3, -3]);
    const rotateY = useTransform(mouseX, [-150, 150], [-3, 3]);

    // Profondeur modérée
    const createDepthStyle = (depth = 1.0) => ({
        x: useTransform(mouseX, (v) => v / (depth * 10)),
        y: useTransform(mouseY, (v) => v / (depth * 10)),
        scale: 1 + 0.0025 * (10 / depth),
    });

    // Floating + fade-in variants
    const floatAndFade = (delay = 0) => ({
        initial: { y: 30 },
        animate: {
            y: [0, -10, 0], // floating
            transition: {
                delay,
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeOut',
        },
    });

    const banner1Style = createDepthStyle(8);
    const banner2Style = createDepthStyle(5);
    const banner3Style = createDepthStyle(3);
    const banner4Style = createDepthStyle(2);

    return (
        <div
            ref={containerRef}
            className="gradientBack2 -mt-16 w-full overflow-hidden"
            style={{ perspective: 1000 }}
            id="home"
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="relative mx-auto h-[800px] max-w-[1300px]"
            >
                <div className="fade relative top-[100px]">
                    <h3 className="relative top-[60px] left-6 text-[14px] text-slate-500 md:text-[30px] dark:text-white">
                        {t('banner.welcome')}
                    </h3>
                    <h1 className="absolute top-[80px] bg-gradient-to-b from-gray-50 to-slate-700 bg-clip-text text-[160px] text-transparent md:relative md:top-auto md:text-[240px]">
                        TheEnd.Page
                    </h1>
                </div>
                <img
                    src={Cloud}
                    alt="cloud"
                    className="absolute bottom-40 dark:hidden"
                />
                <FancyButton
                    title="Discover More"
                    textHover="Mety io eh"
                    label={'Test'}
                    className="absolute right-5 bottom-40 dark:hidden"
                    onClick={console.log('Explore')}
                />
                <div className="floating-element">
                    <motion.img
                        src={Banner1}
                        alt="Banner1"
                        width={400}
                        style={banner1Style}
                        className="absolute -bottom-108 left-[130px] z-[1] hidden blur-[2px] transition hover:scale-120 md:flex"
                    />
                    <motion.img
                        src={Banner2}
                        alt="Banner2"
                        width={220}
                        style={banner2Style}
                        className="absolute -bottom-[10px] left-[400px] z-[2] hidden transition hover:scale-120 md:flex"
                    />
                    <motion.img
                        src={Banner3}
                        alt="Banner3"
                        width={100}
                        style={banner3Style}
                        className="absolute right-[60px] bottom-[20px] z-[3] hidden blur-sm transition hover:scale-120 md:flex"
                    />
                    <motion.img
                        src={Banner4}
                        alt="Banner4"
                        width={350}
                        style={banner4Style}
                        className="absolute top-[220px] right-[150px] z-[4] transition hover:scale-120 md:-top-[80px]"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    style={createDepthStyle(7)}
                    className="relative top-[500px] left-6 z-10 w-[70%] rounded-xl bg-white/60 p-4 text-sm text-gray-600 backdrop-blur-lg md:top-5 md:w-[40%]"
                >
                    {t('banner.para1')}
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Jumbotron;
