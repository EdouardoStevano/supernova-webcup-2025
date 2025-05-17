import React from 'react';
import Lottie from 'react-lottie';

import Button from '../../../components/common/Btn';
import NotFoundImage from '../../../assets/lottie/notFound.json';

// Importation des composants
import Cube from '../../../assets/illustrations/Cube-found.png';
import Quetsion from '../../../assets/illustrations/question-found.png';
import FooterRedirect from '../../../components/redirect/footerCopyright';
import { Link } from 'react-router-dom';

const notFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NotFoundImage,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="fade pointBackground font-Poppins bg-custom-light-gray bannerBackground h-screen w-screen dark:bg-slate-950">
            <div className="gradientBack flex h-screen flex-col items-center justify-center bg-cover">
                <div
                    className={
                        'flex-start fade-in relative -top-12 hidden h-[140px] md:flex'
                    }
                >
                    <Lottie height={200} width={200} options={defaultOptions} />
                </div>

                <img
                    src={Cube}
                    width={'200px'}
                    alt="Cube"
                    className="float md: absolute top-30 left-70 z-20 hidden md:hidden xl:flex"
                />

                <img
                    src={Quetsion}
                    width={'220px'}
                    alt="Cube"
                    className="float absolute right-70 bottom-52 z-20 hidden md:hidden xl:flex"
                />

                <div className="animate-zoom flex flex-col items-center justify-center">
                    <h1 className="from-custom-green via-custom-dark-gray to-custom-bright-blue font-syne mb-2 bg-gradient-to-br from-sky-600 to-pink-400 bg-clip-text py-1 text-center text-[50px] font-semibold text-transparent md:text-[90px] xl:-mt-5 xl:text-[200px]">
                        Erreur 404
                    </h1>
                    <h3 className="-mt-8 mb-6 font-bold text-slate-500 xl:text-xl">
                        - Page Non Trouvée -
                    </h3>
                    <p className="mb-8 px-10 text-center font-normal text-gray-600 md:w-[40%] md:text-[12px] xl:text-[14px]">
                        Désolé, la page que vous recherchez semble indisponible.
                        Peut-être avez-vous suivi un lien incorrect ou la page a
                        été déplacée. Retournez à la page d'accueil pour
                        continuer votre navigation.
                    </p>
                    <Link to="/">
                        <Button className="bg-primary-400 rounded-3xl p-3 px-6 text-white">
                            Retour à l'accueil
                        </Button>
                    </Link>
                </div>
            </div>
            <FooterRedirect />
        </div>
    );
};

export default notFound;
