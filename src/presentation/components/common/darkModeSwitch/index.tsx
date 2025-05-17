import React, { useEffect, useState } from 'react';
import useConfetti from '../../../../presentation/hooks/useConfetti';
import { getInitialDarkModePreference } from '../../../../core/utils/theme';
import { Sun, Moon } from 'lucide-react';

/**
 *
 * @desc: Composant de Switch pour le mode Dark avec explosion confetti
 */
const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const { explodeConfetti } = useConfetti();

    useEffect(() => {
        const darkModePreference = getInitialDarkModePreference();
        setIsDarkMode(darkModePreference);
    }, []);

    const handleDarkModeToggle = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('abm-mytick-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('abm-mytick-theme', 'light');
            }

            // 💥 Explosion confetti
            explodeConfetti();

            return newMode;
        });
    };

    return (
        <label className="relative inline-flex cursor-pointer items-center">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleDarkModeToggle}
                className="peer sr-only h-6"
            />
            <div
                className={`peer-checked:bg-primary-500 relative flex h-6 w-10 items-center justify-between rounded-full bg-gray-200 px-2 after:absolute after:start-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-4`}
            >
                <Sun
                    className={`relative right-0.5 z-20 h-5 w-5 ${isDarkMode ? 'text-primary-500 opacity-0' : 'text-primary-500'}`}
                />
                <Moon
                    className={`relative left-0.5 z-20 h-5 w-5 ${isDarkMode ? 'text-primary-500' : 'text-gray-400 opacity-0'}`}
                />
            </div>
            <span className="ms-3 text-sm text-gray-700 dark:text-gray-300">
                Mode sombre
            </span>
        </label>
    );
};

export default DarkModeSwitch;
