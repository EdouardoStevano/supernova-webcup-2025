import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Tilt } from 'react-tilt';

// Imporatation des utils
import { getCopyrightText } from '../../../../core/utils/copyright';

// Importation des composants
import DarkModeSwitch from '../../../components/common/darkModeSwitch';

// Importation des icones
import { ArrowDownLeft, Eye, EyeOff } from 'lucide-react';
import Star1 from '../../../assets/illustrations/Cube-found.png';
import Star2 from '../../../assets/illustrations/Cube-found.png';

// Importation des resources
import LangSelection from '../../../components/common/LangSelection';
import Button from '../../../components/common/Btn';

/**
 * @desc: Interface du Panel d'inscription
 */
const SignUp: React.FC = () => {
    // State management
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
    const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
        useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const { t } = useTranslation();

    // Event handlers
    const toggleVisibilityPassword = (): void =>
        setIsVisiblePassword(!isVisiblePassword);

    const toggleVisibilityConfirmPassword = (): void =>
        setIsVisibleConfirmPassword(!isVisibleConfirmPassword);

    const handleSignUp = async (): Promise<void> => {
        console.log('Sign Up');
    };

    const handleKeyDown = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            handleSignUp();
        }
    };

    return (
        <div
            className="sign-up pointBackground bg-backglass3-background flex h-screen flex-row bg-transparent dark:bg-gray-900"
            onKeyDown={handleKeyDown}
        >
            <div className="sign-up-right flex h-screen w-full flex-col justify-between px-9 py-4">
                {/* Header Section */}
                <div className="sign-right-top fadeIn flex w-full justify-between">
                    <div className="sign-top-left font-poppins flex items-center">
                        <span className="bg-light-custom-primary m-auto flex h-10 w-10 flex-col items-center justify-center rounded-xl text-center text-white">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvElEQVR4nO2Yy28PURTHhyYlulLxiFdtGpFYqB0NaRcEISwRj40/gBKRSBBvideCBaGRSESUSEq8VuKtqcQrUdZaCaFVb8pHTp2J4/bO7zftzCwG32Q2c2fO+X7vPefcc28Q/MdfCmA2cEKf2UGeACyjJ5YGeQHQ4hHQEuQFQLtHQHuQFwDnPQIag7wAqAK6DPlvwKQgTwD2GwF7Yv7TPysyIyQEgHfAHZnhYkSAauCHPtWFyAEDgJO6Uo+BiWkLEPIWz4GBzjfjgLXALeCTJwc+69g6oML5d73z7dW0BXR6CM01xOt19uLiK3AMGKM2njjjT9MWIGHjYrdsThpWLiSBW4FmfdqcpA7xFtjieb8yi6oihCw+ehxfAJYAgz02BuvYxYhVeQecAmalSt4QGChhIxXFQ/4+MK0XtqYDDxwb+zIh7nEuYWMhszaoD3bKgAbH1vJsWP92Os6JeSHfL4G9fsBpJ4xGpsv6T4f1TtgMSsFmGfDQ2K1Ph61/9m2pnG7GFgBvgCtAqfNfKbBLK5EUgp2eb2qM3e/A6CwErLXVxhk7Z8YmO2NC2MVOj/1LZnx1FgJuGwdLnLH5wGvgsmd23fIraC1SHG4mOUk9BTq0Ja4yvU1YOrt8db6AzbgCyjV8wmTuLg6yW0snC5TEOcO66NKucmoh50Xs+kJoR8S3L8w3wuesNoOCJkn4Qo7k8B2F0IiguZcCSlVEa1QSh9C2oxBWBFkKAIbHWu7o/5uTCPCFkJTNvcAU864t4n/pc77EWu5oDi+MnznAGZMXd4va1ErQoofyxvAYGCeJPckaPVt+30MM2fcmiUcnWdVYZVTHnxcTAGxXctuK3CXdSEQ2QsAa4+BikRDyLrfpozqLbGR1WQioiGol4iaxzLyK2Oq8r3XybmzqAtTREePoQV8SNaKZe2TsHkqHrd/ZWKedbki5ne4ERqXLuqfThU6yNvSxZMrMW/Le4pA6tGd55jiWfr6mFzZqnbBBq1hVlsSHARuBV93ueopAD+yyl5RH1PllTrUJYUuwNJNHgXlpES8BNjuXVS/1lmFxxLXKdz3A3NOnzWxSODG/SG89fDiedv0PscGMS7t7uA8XW4fsyStiRQUzkgqwpy20pRgaUaHqgOvABw8ReXcNWBXeyFlo2PiQ7HQmBhyDm2L+N0YPRh0+wp7v52W1AiUaRo0qJlZTBczsLQngeOo5kGCDsr19U9wNj1/C6xLPfBIAEzyhMD7IC4BKj4DKIE8ADhryB4I8gl8rka+Z/49/DT8B+kvOttHs3JIAAAAASUVORK5CYII="
                                alt="virus"
                            />
                        </span>
                        <p className="ml-2 flex flex-col text-[18px]">
                            <span className="first-letter font-Poppins text-center font-extrabold text-slate-800">
                                SIRIUS
                            </span>
                            <span className="text-[10px]">by Supernova</span>
                        </p>
                    </div>

                    <div className="left-header flex items-center gap-2">
                        <LangSelection />
                        <DarkModeSwitch />
                        <Link to={'/'}>
                            <Button
                                className="ml-4"
                                size="sm"
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
                            <div className="sign-image2 floating-element-vertical bg-secondary-600 absolute top-[14vh] left-[6vw] h-[40%] w-[30%] -rotate-12 rounded-3xl outline outline-offset-2 outline-lime-500 transition hover:-translate-y-7"></div>
                            <img
                                src={Star1}
                                className="relative -top-18 right-[4vw] -bottom-[25vh] h-[30%] w-[30%]"
                                alt="star 1"
                            />
                            <img
                                src={Star2}
                                className="relative -top-[200px] left-[21vw] h-16 w-16"
                                alt="star 1"
                            />
                            <div className="sign-image3 bg-opacity-45 absolute top-[8vh] left-[31vw] mt-[130px] h-[170px] w-[170px] rounded-full bg-slate-300 backdrop-blur-md transition hover:scale-110">
                                <svg
                                    className="turnInfinite absolute h-[170px] w-[170px]"
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
                                            Your Circular Text Here - Your
                                            Circular Text - Your CircularText
                                        </textPath>
                                    </text>
                                </svg>
                                <ArrowDownLeft className="absolute top-7 left-8 h-[100px] w-[100px] text-black" />
                            </div>

                            <div className="sign-image bg-success-600 floating-element-vertical-right absolute bottom-[17vh] left-[25vw] mt-[130px] h-[40%] w-[28%] rotate-12 rounded-3xl outline outline-offset-2 outline-sky-500 transition hover:-translate-y-4"></div>
                        </div>
                    </div>

                    {/* Sign Up Form Section */}
                    <div className="sign-form swipeFadeUp flex w-[90%] flex-col justify-center rounded-2xl lg:w-[40%]">
                        <div className="sign-up-title font-poppins mx-auto mb-2 min-w-[400px] text-left">
                            <h1 className="font-syne mt-1 w-full bg-gradient-to-r from-red-500 to-blue-700 bg-clip-text text-6xl font-bold text-slate-800 text-transparent md:text-[46px] dark:text-slate-200">
                                Inscription
                            </h1>
                            <p className="font-poppins mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                                Un service plus rapide, une attente mieux
                                organisée.
                            </p>
                        </div>

                        <div className="form font-poppins mx-auto mb-6 flex w-full max-w-[400px] flex-col flex-wrap items-end sm:flex-nowrap md:mb-0">
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-xl border-gray-300 bg-gray-100 p-4 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="Entrer votre session"
                                />
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-xl border-gray-300 bg-gray-100 p-4 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="Entrer votre session"
                                />
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
                                        placeholder="Entrer votre session"
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
                            </div>

                            <div className="mt-4 flex w-full items-center justify-between">
                                <Link
                                    to="/auth"
                                    className="text-[13px] text-slate-500 hover:text-slate-700"
                                >
                                    Déjà un compte ? Connectez-vous
                                </Link>
                            </div>

                            <Button
                                className="mt-4 w-full"
                                variant="primary"
                                onClick={handleSignUp}
                            >
                                S'inscrire
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="sign-right-bottom fadeIn flex w-full items-center justify-between text-xs text-slate-500">
                    <p>{getCopyrightText()}</p>
                    <div className="flex gap-4">
                        <Link to="/" className="hover:text-slate-700">
                            Conditions d'utilisation
                        </Link>
                        <Link to="/" className="hover:text-slate-700">
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
