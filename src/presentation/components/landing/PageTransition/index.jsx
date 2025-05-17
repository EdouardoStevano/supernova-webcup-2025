// components/PageTransition.tsx
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const pageVariants = {
    initial: {
        x: '100%',
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: {
        x: '-100%',
        opacity: 0,
        scale: 0.8,
    },
};

const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export default function PageTransition({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsTransitioning(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="page-container"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                {/* Background overlay */}
                <motion.div
                    variants={overlayVariants}
                    initial="initial"
                    animate={isTransitioning ? 'animate' : 'exit'}
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.3)',
                        zIndex: 10,
                    }}
                />

                {/* Page content with slide effect */}
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        duration: 0.6,
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        zIndex: 20,
                    }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
