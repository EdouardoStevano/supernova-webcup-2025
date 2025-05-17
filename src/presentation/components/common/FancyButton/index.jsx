import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const FancyButton = ({ title, label, textHover, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                backgroundColor: isHovered ? '#d85dc1' : '#fff',
            }}
            onClick={onClick}
            className="relative flex h-[50px] w-[170px] items-center gap-3 overflow-hidden rounded-full px-2 py-2 shadow-md"
        >
            {/* Texte "Enter" qui apparaît à gauche */}
            <AnimatePresence>
                {isHovered && (
                    <motion.span className="text-vilot-600 absolute z-40 px-3 text-sm font-medium text-white">
                        {Array.from(textHover).map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.05,
                                    ease: 'easeInOut',
                                }}
                                style={{ display: 'inline-block' }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.span>
                )}
            </AnimatePresence>

            {/* Cercle contenant la flèche */}
            <motion.div
                initial={{ scale: 1, x: 0 }}
                animate={{
                    scale: isHovered ? 4 : 1,
                    x: isHovered ? 70 : 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                    scale: {
                        type: 'spring',
                        damping: 15,
                        stiffness: 200,
                    },
                }}
                className="bg-primary-500 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white"
            >
                <motion.div
                    animate={{
                        x: isHovered ? 9 : 0,
                        scale: isHovered ? 0.3 : 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                    }}
                    whileHover={{ scale: 0.5 }}
                    whileTap={{ scale: 0.3 }}
                >
                    <motion.div
                        animate={{
                            x: [-2, 2, -2],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <ArrowRight size={20} />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Texte principal */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0 : 1,
                    x: isHovered ? 10 : 0,
                }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="text-left leading-tight"
            >
                <span className="block text-xs text-gray-400">{title}</span>
                <span className="block text-sm font-semibold text-black">
                    {label}
                </span>
            </motion.div>
        </motion.button>
    );
};

// How to use:
//  <FancyButton
//      title="Discover More"
//       textHover="Mety io eh"
//       label={'Test'}
//       onClick={console.log('test')}
//  />
