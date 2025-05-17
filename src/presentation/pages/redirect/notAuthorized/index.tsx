import React from 'react';
import Button from '../../../components/common/Btn';
import FooterRedirect from '../../../components/redirect/footerCopyright';
import { Link } from 'react-router-dom';

const NotAuthorizedPage = () => {
    return (
        <div className="fade pointBackground font-Poppins bg-custom-light-gray bannerBackground h-screen w-screen dark:bg-slate-950">
            <div className="gradientBack flex h-screen flex-col items-center justify-center bg-cover">
                <div className="animate-zoom flex w-[80%] flex-col items-center justify-center">
                    <h1 className="from-custom-green via-custom-dark-gray to-custom-bright-blue font-syne md:text-[90px]xl:-mt-5 text-[50px]font-semibold mb-10 bg-gradient-to-br from-sky-600 to-pink-400 bg-clip-text py-1 text-center text-[50px] text-transparent md:leading-[110px] xl:text-[100px]">
                        Vous n'êtes pas autorisé à accéder à cette page
                    </h1>
                    <h3 className="-mt-8 mb-6 font-bold text-slate-500 xl:text-xl">
                        - Non Autorisé -
                    </h3>
                    <p className="mb-8 px-10 text-center font-normal text-gray-600 md:w-[40%] md:text-[12px] xl:text-[14px]">
                        Vous n'avez pas les autorisations nécessaires pour
                        accéder à cette page. Veuillez vous connecter avec un
                        compte disposant des droits requis ou contacter un
                        administrateur si vous pensez qu'il s'agit d'une erreur.
                    </p>
                    <Link to="/">
                        <Button
                            className="bg-primary-400 rounded-3xl p-3 px-6 text-white"
                            to="/"
                        >
                            Retour à l'accueil
                        </Button>
                    </Link>
                </div>
            </div>

            <FooterRedirect />
        </div>
    );
};

export default NotAuthorizedPage;
