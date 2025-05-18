import React, { useCallback, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const Button = memo(
    ({
        children,
        onClick,
        className = '',
        disabled = false,
        type = 'button',
        audio = null,
        variant = 'primary',
        size = 'medium',
        ...props
    }) => {
        const [isHovered, setIsHovered] = useState(false);

        const handleClick = useCallback(
            (e) => {
                if (audio) {
                    const sound = new Audio(audio);
                    sound.play();
                }
                onClick?.(e);
            },
            [audio, onClick]
        );

        const baseStyles =
            'rounded-3xl relative overflow-hidden perspective-1000';

        const variantStyles = {
            primary: 'bg-primary-500 text-white',
            secondary: 'bg-green-500 text-white',
            sea: 'bg-blue-500 text-white',
            outline: 'border-2 border-primary-600 text-primary-600',
            ghost: 'bg-transparent text-gray-700',
        };

        const sizeStyles = {
            small: 'px-3 py-1.5 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-6 py-3 text-lg',
        };

        const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

        return (
            <motion.button
                type={type}
                className={buttonClasses}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={disabled}
                initial={{ scale: 1 }}
                whileHover={!disabled ? { scale: 1.02 } : {}}
                whileTap={!disabled ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
                {...props}
            >
                <div className="flex items-center justify-center">
                    {children
                        .toString()
                        .split('')
                        .map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isHovered ? 0 : 1,
                                    y: isHovered ? -20 : 0,
                                }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.05,
                                    ease: 'easeInOut',
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                </div>

                <AnimatePresence>
                    {isHovered && (
                        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center">
                            {children
                                .toString()
                                .split('')
                                .map((char, index) => (
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
                                        className="text-white"
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                        </div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            className="transitin-all absolute z-4 rounded-full"
                            style={{
                                width: '150%',
                                height: '150%',
                                background:
                                    variant === 'primary' ? '#222' : '#d85dc1',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 3 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                    )}
                </AnimatePresence>
            </motion.button>
        );
    }
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    audio: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.displayName = 'Button';

export default Button;
