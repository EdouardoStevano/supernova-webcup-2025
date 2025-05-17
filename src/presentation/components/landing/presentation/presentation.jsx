import { Tilt } from 'react-tilt';
import ctaImage from '../../../assets/illustrations/auth2.jpg';
import Button from '../../common/Btn';
import { useTranslation } from 'react-i18next';

const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const CTA = () => {
    const { t } = useTranslation();
    return (
        <section
            className="cta flex flex-col items-center justify-center py-[80px]"
            id="working"
        >
            <div className="mx-auto flex w-full max-w-[1350px] items-center gap-6 px-10">
                <div
                    className="float hidden w-1/2 lg:block"
                    data-aos="fade-up-right"
                >
                    <Tilt
                        options={defaultOptions}
                        style={{ height: 550, width: 550 }}
                    >
                        <img
                            src={ctaImage}
                            alt="CTA"
                            className="relative top-40 rotate-3 rounded-3xl"
                        />
                    </Tilt>

                    <div className="relative bottom-[450px] left-[40px] h-[120px] w-[200px] rounded-3xl bg-white/50 p-3 backdrop-blur-md">
                        <small className="text-justify text-black/60">
                            {t('about.parasmall')}{' '}
                        </small>
                    </div>
                </div>

                <div className="lg:w-1/2" data-aos="fade-down-right">
                    <h1 className="mb-4 bg-gradient-to-r from-[#40006a] to-[#C43C93] bg-clip-text text-3xl font-semibold text-transparent lg:text-6xl lg:leading-[70px]">
                        {t('about.title')}
                    </h1>
                    <p className="text-[14px] text-[#2c2c2c] dark:text-white">
                        {t('about.para')}
                    </p>
                    <Button
                        variant={'primary'}
                        className="mt-7 rounded-xl p-4 px-7 text-white transition hover:scale-105"
                    >
                        {t('about.btn')}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
