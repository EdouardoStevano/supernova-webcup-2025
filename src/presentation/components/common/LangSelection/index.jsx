import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, RefreshCcw } from 'lucide-react';
import useConfetti from '../../../hooks/useConfetti';

const flagUrls = {
    mg: 'https://flagcdn.com/w40/mg.png',
    fr: 'https://flagcdn.com/w40/fr.png',
    en: 'https://flagcdn.com/w40/us.png',
};

const LangSelection = () => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(
        localStorage.getItem('i18nextLng') || 'fr'
    );
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { explodeConfetti } = useConfetti();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (lang) => {
        console.log('Langue', lang);
        try {
            i18n.changeLanguage(lang);
            localStorage.setItem('i18nextLng', lang);
            setCurrentLang(lang);
            setIsOpen(false);
            explodeConfetti();
            // window.location.reload();
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 flex cursor-pointer items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/20 dark:text-white"
            >
                <img
                    src={flagUrls[currentLang]}
                    alt="Selected Language Flag"
                    className="h-4 w-4"
                />
                <span className="dark:text-white">
                    {currentLang.toUpperCase()}
                </span>
                <RefreshCcw
                    size={16}
                    className={`transition-transform ease-out hover:rotate-180 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="ring-opacity-5 absolute right-0 z-40 mt-2 w-32 rounded-lg bg-white py-2 shadow-lg dark:bg-gray-800">
                    {Object.entries(flagUrls).map(([lang, url]) => (
                        <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            <img
                                src={url}
                                alt={`${lang} Flag`}
                                className="h-4 w-4"
                            />
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LangSelection;
