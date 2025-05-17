import React from 'react';
import { motion } from 'framer-motion';
import image from '../../../../assets/illustrations/auth1.jpg';

const images = [image, image, image, image];

const MarqueePartener = () => {
    return (
        <div className="w-full overflow-hidden bg-[#333] py-10">
            <h1 className="mx-auto mb-4 text-center text-3xl text-white">
                Partenaires
            </h1>
            <motion.div
                className="flex gap-8 whitespace-nowrap"
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
                        className="h-[150px] min-w-[200px] overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src={src}
                            alt={`marquee-${index}`}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MarqueePartener;
