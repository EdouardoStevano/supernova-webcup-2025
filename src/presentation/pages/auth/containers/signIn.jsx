import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Imporatation des utils
import { getCopyrightText } from '../../../../core/utils/copyright';

// Importation des composants
import DarkModeSwitch from '../../../components/common/darkModeSwitch';
import LangSelection from '../../../components/common/LangSelection';
import Button from '../../../components/common/Btn';

import { useToast } from '../../../components/common/superToast';

// Importation des icones
import { ArrowDownLeft, Eye, EyeOff } from 'lucide-react';
import Star1 from '../../../assets/illustrations/Cube-found.png';
import Star2 from '../../../assets/illustrations/Cube-found.png';
import Bell from '../../../assets/illustrations/Cube-found.png';

// Importation des resources
import { getAuthData } from '../../../../core/utils/authUtils';
import authService from '../../../services/authService';

/**
 * @desc: Interface du Panel de connexion
 */
const SignIn = () => {
    // State management
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [session, setSession] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { t } = useTranslation();
    const { addToast } = useToast();
    const navigate = useNavigate();

    // Load saved auth data on mount
    useEffect(() => {
        const authData = getAuthData();
        if (authData.email && authData.password) {
            setSession(authData.email);
            setPassword(authData.password);
        }
    }, [session, password]);

    // Event handlers
    const toggleVisibilityPassword = () =>
        setIsVisiblePassword(!isVisiblePassword);

    const handleLogin = async (session, password) => {
        const currentSession = session || '';
        const currentPassword = password || '';

        // Validate empty fields
        if (!currentSession.trim()) {
            addToast('Veuillez saisir votre session', 'error');
            return;
        }

        if (!currentPassword.trim()) {
            addToast('Veuillez saisir votre mot de passe', 'error');
            return;
        }

        // Proceed with login if validation passes
        authService
            .login(currentSession, currentPassword)
            .then((user) => {
                navigate('/dashboard');
                addToast('Connexion réussie !', 'success');
            })
            .catch((error) => {
                console.error('Login failed:', error.message);
                addToast(
                    'Échec de la connexion. Veuillez vérifier vos identifiants.',
                    'error'
                );
            });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin(session, password);
        }
    };

    return (
        <div
            className="sign-in pointBackground flex h-screen cursor-auto flex-row bg-transparent dark:bg-gray-900"
            onKeyDown={handleKeyDown}
        >
            <div className="sign-in-right gradientBack1 flex h-screen w-full flex-col justify-between px-9 py-4">
                {/* Header Section */}
                <div className="sign-right-top fadeIn flex w-full justify-between">
                    <div className="sign-top-left font-poppins flex items-center">
                        <span className="m-auto flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-lime-600 text-center text-white">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvElEQVR4nO2Yy28PURTHhyYlulLxiFdtGpFYqB0NaRcEISwRj40/gBKRSBBvideCBaGRSESUSEq8VuKtqcQrUdZaCaFVb8pHTp2J4/bO7zftzCwG32Q2c2fO+X7vPefcc28Q/MdfCmA2cEKf2UGeACyjJ5YGeQHQ4hHQEuQFQLtHQHuQFwDnPQIag7wAqAK6DPlvwKQgTwD2GwF7Yv7TPysyIyQEgHfAHZnhYkSAauCHPtWFyAEDgJO6Uo+BiWkLEPIWz4GBzjfjgLXALeCTJwc+69g6oML5d73z7dW0BXR6CM01xOt19uLiK3AMGKM2njjjT9MWIGHjYrdsThpWLiSBW4FmfdqcpA7xFtjieb8yi6oihCw+ehxfAJYAgz02BuvYxYhVeQecAmalSt4QGChhIxXFQ/4+MK0XtqYDDxwb+zIh7nEuYWMhszaoD3bKgAbH1vJsWP92Os6JeSHfL4G9fsBpJ4xGpsv6T4f1TtgMSsFmGfDQ2K1Ph61/9m2pnG7GFgBvgCtAqfNfKbBLK5EUgp2eb2qM3e/A6CwErLXVxhk7Z8YmO2NC2MVOj/1LZnx1FgJuGwdLnLH5wGvgsmd23fIraC1SHG4mOUk9BTq0Ja4yvU1YOrt8db6AzbgCyjV8wmTuLg6yW0snC5TEOcO66NKucmoh50Xs+kJoR8S3L8w3wuesNoOCJkn4Qo7k8B2F0IiguZcCSlVEa1QSh9C2oxBWBFkKAIbHWu7o/5uTCPCFkJTNvcAU864t4n/pc77EWu5oDi+MnznAGZMXd4va1ErQoofyxvAYGCeJPckaPVt+30MM2fcmiUcnWdVYZVTHnxcTAGxXctuK3CXdSEQ2QsAa4+BikRDyLrfpozqLbGR1WQioiGol4iaxzLyK2Oq8r3XybmzqAtTREePoQV8SNaKZe2TsHkqHrd/ZWKedbki5ne4ERqXLuqfThU6yNvSxZMrMW/Le4pA6tGd55jiWfr6mFzZqnbBBq1hVlsSHARuBV93ueopAD+yyl5RH1PllTrUJYUuwNJNHgXlpES8BNjuXVS/1lmFxxLXKdz3A3NOnzWxSODG/SG89fDiedv0PscGMS7t7uA8XW4fsyStiRQUzkgqwpy20pRgaUaHqgOvABw8ReXcNWBXeyFlo2PiQ7HQmBhyDm2L+N0YPRh0+wp7v52W1AiUaRo0qJlZTBczsLQngeOo5kGCDsr19U9wNj1/C6xLPfBIAEzyhMD7IC4BKj4DKIE8ADhryB4I8gl8rka+Z/49/DT8B+kvOttHs3JIAAAAASUVORK5CYII="
                                alt="virus"
                            />
                        </span>
                        <p className="ml-2 flex flex-col text-[18px]">
                            <span className="first-letter font-Poppins text-center font-extrabold text-slate-800">
                                {/* {process.env.REACT_APP_PROJECT_NAME} */}
                                TheEndPage
                            </span>
                            <span className="text-[10px]">by Supernova</span>
                        </p>
                    </div>

                    <div className="left-header flex items-center gap-2">
                        <LangSelection />
                        <DarkModeSwitch />

                        <Link to={'/'}>
                            <Button
                                className="ml-4 bg-gray-100 px-4 py-1"
                                size="medium"
                                variant="light"
                                color="secondary"
                            >
                                Retour
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="sign-middle flex w-full items-center justify-around">
                    {/* Left Decorative Section */}
                    <div className="hidden w-[30%] flex-col items-center justify-around lg:flex">
                        <div className="fadeIn flex gap-6">
                            <div className="authImage1 floating-element-vertical bg-secondary-600 absolute top-[14vh] left-[10vw] h-[40%] w-[20%] -rotate-12 rounded-2xl rounded-b-[100%] shadow-xl shadow-slate-300 outline outline-offset-2 outline-yellow-300 transition hover:-translate-y-7 dark:shadow-slate-800"></div>
                            <div className="sign-image3 shadow-large border-opacity-15 bg-opacity-25 absolute bottom-[20vh] left-[20vw] mt-[130px] h-[180px] w-[180px] rounded-full border-1 border-gray-300 bg-slate-300/20 shadow-slate-300 backdrop-blur-sm transition hover:scale-110 dark:shadow-slate-700">
                                <svg
                                    className="turnInfinite absolute h-[180px] w-[180px]"
                                    viewBox="0 0 200 200"
                                >
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                                        />
                                    </defs>
                                    <text
                                        fill="black"
                                        fontSize="14"
                                        fontWeight="bold"
                                    >
                                        <textPath
                                            xlinkHref="#circlePath"
                                            className="flex justify-between"
                                            startOffset="50%"
                                            textAnchor="middle"
                                        >
                                            Une sortie propre, une page sale (ou
                                            l’inverse). L’art de claquer la
                                            porte avec style
                                        </textPath>
                                    </text>
                                </svg>
                                <ArrowDownLeft className="border-opacity-15 absolute top-[20%] left-[20%] h-[110px] w-[110px] rounded-full border-1 border-gray-300 text-black" />
                            </div>
                            <img
                                src={Star1}
                                className="relative -top-18 -bottom-[35vh] left-[15vw] h-[40%] w-[40%]"
                                alt="star 1"
                            />
                        </div>
                    </div>

                    {/* Login Form Section */}
                    <div className="sign-form swipeFadeUp mx-auto w-[90%] rounded-2xl p-6 lg:w-[35%]">
                        <div className="sign-in-title font-poppins mx-auto mb-4 text-center">
                            <h2 className="font-poppins text-xl font-semibold text-slate-700 dark:text-slate-200">
                                {t('banner.welcome')}
                            </h2>
                            <h1 className="font-syne mt-1 w-full bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-6xl font-bold text-slate-800 text-transparent md:text-[76px] dark:text-slate-200">
                                TheEndAct
                            </h1>
                            <p className="font-poppins mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                                Un service plus rapide, une attente mieux
                                organisée.
                            </p>
                        </div>

                        <div className="form font-poppins m-auto mb-6 flex w-full max-w-[400px] flex-col flex-wrap items-end sm:flex-nowrap md:mb-0">
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Session
                                </label>
                                <input
                                    type="text"
                                    value={session}
                                    onChange={(e) => setSession(e.target.value)}
                                    className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-xl border-gray-300 bg-gray-100 p-4 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="Entrer votre session"
                                />
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    Entrer votre session
                                </p>
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Mot de passe
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            isVisiblePassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-xl border-gray-300 bg-gray-100 p-4 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        placeholder="Entrer votre mot de passe"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleVisibilityPassword}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        aria-label="toggle password visibility"
                                    >
                                        {isVisiblePassword ? (
                                            <Eye className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <EyeOff className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    Entrer votre mot de passe
                                </p>
                            </div>
                            <div className="form-options bg-red mt-4 flex w-full items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300"
                                        checked={rememberMe}
                                        onChange={() =>
                                            setRememberMe(!rememberMe)
                                        }
                                        defaultChecked={
                                            !!localStorage.getItem(
                                                'userSession'
                                            )
                                        }
                                    />
                                    <span className="font-poppins ml-2 text-[11px] opacity-60 dark:text-slate-100">
                                        se souvenir de moi
                                    </span>
                                </label>

                                <Link
                                    className="font-poppins text-[11px] opacity-60 dark:text-slate-100"
                                    to={'/forgot-password'}
                                >
                                    mot de passe oublié?
                                </Link>
                            </div>

                            <Button
                                variant="primary"
                                size="large"
                                className="mt-10 w-full text-white"
                                onClick={() => handleLogin(session, password)}
                            >
                                se connecter
                            </Button>
                            <Link
                                to={'/auth/signup'}
                                className="font-poppins mt-4 w-full text-center text-[13px] text-slate-800 dark:text-slate-200"
                            >
                                Vous n'avez pas de compte ?
                            </Link>
                        </div>
                    </div>

                    {/* Right Decorative Section */}
                    <div className="hidden w-[30%] flex-col items-center justify-around lg:flex">
                        <div className="fadeIn flex gap-6">
                            <div className="authImage2 bg-success-600 floating-element-vertical-right absolute right-[10vw] bottom-[17vh] mt-[130px] h-[40%] w-[18%] rotate-12 rounded-2xl rounded-ss-[100%] shadow-xl shadow-slate-300 outline outline-offset-2 outline-teal-400 transition hover:-translate-y-4 dark:shadow-slate-800"></div>
                            <img
                                src={Star2}
                                className="relative -top-20 left-[3vw] h-16 w-16"
                                alt="star 1"
                            />
                            <img
                                src={Bell}
                                className="relative top-[-200px] right-[10vw] w-[29%]"
                                alt="Bell"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="fadeIn flex flex-col items-center md:flex-row md:justify-between">
                    <div className="font-poppins flex items-start text-[12px] text-slate-900">
                        <span className="mt-2 mr-[7px] opacity-80 dark:text-slate-100">
                            Made with love{' '}
                            <span className="text-lime-700">❤</span> by
                            Supernova Team
                        </span>
                    </div>
                    <p
                        className={
                            'font-Poppins float-right mt-4 text-center text-[11px] font-normal opacity-80 dark:text-slate-100'
                        }
                        dangerouslySetInnerHTML={{ __html: getCopyrightText() }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
