import React from 'react';
import CardWorking from '../../../../components/landing/cardWorking';

import image1 from '../../../../assets/illustrations/auth2.jpg';
import image2 from '../../../../assets/illustrations/auth2.jpg';
import image3 from '../../../../assets/illustrations/auth2.jpg';
import { useTranslation } from 'react-i18next';

const HowWorksSection = () => {
    const { t } = useTranslation();
    return (
        <section
            className="line-back flex overflow-hidden bg-gray-100 py-20 dark:bg-gray-800"
            id="working"
        >
            <div className="mx-auto w-full max-w-[1200px] overflow-hidden">
                <div className="flex w-full">
                    <div className="hidden w-[400px] lg:flex"></div>

                    <div>
                        <div
                            className="z-10 flex w-full items-center"
                            data-aos="fade-right"
                        >
                            <div className="relative w-full justify-start px-10 py-8 text-center lg:mr-2 lg:w-[600px] lg:px-0 lg:text-left">
                                <h1 className="z-2 inline-flex flex-wrap items-center gap-2 text-2xl font-semibold text-gray-800 sm:text-3xl md:gap-3 md:text-4xl dark:text-white">
                                    {t('solutionSection.title')}
                                </h1>
                                <p className="mt-2 max-w-2xl text-sm text-gray-500 sm:text-base md:mt-4 md:text-[14px] dark:text-white">
                                    {t('solutionSection.description')}
                                </p>
                            </div>

                            <div className="z-2 my-8 hidden h-[1px] w-[300px] bg-slate-700 lg:block"></div>
                        </div>

                        <div className="CardWork z-10 mt-2 mb-4 flex flex-wrap justify-center gap-4 px-10 lg:justify-start">
                            {[
                                {
                                    title: t(
                                        'solutionSection.cards.models.title'
                                    ),
                                    image: image1,
                                    description: t(
                                        'solutionSection.cards.models.description'
                                    ),
                                },
                                {
                                    title: 'Un lien partageable',
                                    image: image2,
                                    description:
                                        'Chaque page de fin est accessible via une URL unique, facile à envoyer à ses collègues, ex, partenaires de projet ou amis. Une fin, ça se partage !',
                                },
                                {
                                    title: 'Assistance IA',
                                    image: image3,
                                    description:
                                        'L’IA t’aide à choisir parmi des templates prédéfinis celui qui correspond le mieux à ton intention : "Fin douce", "Explosion de rage", "Adieu stylé", etc.',
                                },
                            ].map((card, index) => (
                                <div
                                    key={card.title}
                                    data-aos="fade-up-right"
                                    data-aos-delay={index * 200}
                                >
                                    <CardWorking
                                        title={card.title}
                                        image={card.image}
                                        description={card.description}
                                        index={index}
                                        onLearnMore={(idx) =>
                                            console.log(
                                                'Learn more clicked for index:',
                                                idx
                                            )
                                        }
                                    />
                                </div>
                            ))}
                        </div>

                        <div
                            className="mt-10 flex items-center gap-2 px-10 lg:px-0"
                            data-aos="fade-right"
                        >
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C43C93] opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-[#C43C93]"></span>
                            </span>
                            <small className="text-[14px] text-slate-600 dark:text-white">
                                {t('solutionSection.footer.quote')}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWorksSection;
