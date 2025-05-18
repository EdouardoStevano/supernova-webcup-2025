import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EcoIndex = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-5 left-5 z-20">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <motion.div
                    className={`flex cursor-pointer items-center justify-center bg-green-500 transition-all duration-300`}
                    animate={{
                        borderRadius: isHovered ? '20px' : '50%',
                        width: isHovered ? '300px' : '40px',
                        height: isHovered ? '120px' : '40px',
                    }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    {/* Ping animation effect */}
                    <div className="absolute -inset-2">
                        <div
                            className={`h-full w-full animate-ping rounded-full bg-green-500 opacity-20 ${
                                isHovered ? 'hidden' : ''
                            }`}
                        ></div>
                    </div>

                    <motion.div
                        className="flex flex-col items-center justify-center px-6"
                        animate={{ color: isHovered ? '#22c55e25' : 'white' }}
                    >
                        <span
                            className={`fixed text-2xl font-bold ${isHovered ? 'hidden' : ''}`}
                        >
                            e
                        </span>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-2 text-left"
                            >
                                <h3 className="mb-1 font-bold text-white">
                                    Eco-Friendly
                                </h3>
                                <p className="text-xs text-white">
                                    Our commitment to environmental
                                    sustainability and eco-friendly practices
                                    helps create a better future for our planet.
                                </p>
                                <div id="ecoindex-badge"></div>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default EcoIndex;
