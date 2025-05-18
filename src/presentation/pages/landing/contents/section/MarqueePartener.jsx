import React from 'react';
import { motion } from 'framer-motion';

const images = [
    '/sponsor/association-webcup.webp',
    '/sponsor/avanahub.webp',
    '/sponsor/etech.webp',
    '/sponsor/hodi.webp',
    '/sponsor/INGENOSYA Business Services.webp',
    '/sponsor/novity.webp',
    '/sponsor/vivetic.webp',
    '/sponsor/yas.webp',
];

const MarqueePartener = () => {
    return (
        <div className="w-full overflow-hidden bg-[#fff] py-10">
            <h1 className="mx-auto mb-4 text-center text-3xl text-white">
                Partenaires
            </h1>
            <motion.div
                className="flex gap-20 whitespace-nowrap"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 30, // Plus bas = plus rapide
                }}
            >
                {[...images, ...images].map((src, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="h-[150px] min-w-[200px] overflow-hidden rounded-xl"
                    >
                        <img
                            src={src}
                            alt={`marquee-${index}`}
                            className="h-full w-full object-contain"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MarqueePartener;
