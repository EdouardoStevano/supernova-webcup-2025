import 'locomotive-scroll/dist/locomotive-scroll.css';
import Jumbotron from './section/jumbotron';
import Marquee from '../../../components/landing/marquee';
import Working from './section/working';
import Presentation from '../../../components/landing/presentation/presentation';
import StickyFooter from '../../../components/landing/stickyfooter/stickyFooter';
import HorizontalPin from '../../../components/landing/textPin';
import ListPage from './section/listPage';
import Contact from './section/contact';
import Testimonials from './section/testimonials';
import MarqueePartener from './section/MarqueePartener';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * @desc: Landing page avec scroll fluide et toasts
 */

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
    return (
        <div className="overflow-hidden0 z-1 overflow-hidden text-gray-800">
            {/* <section className="flex h-[110vh] flex-col items-center justify-center"> */}
            <Jumbotron />
            <Marquee />
            {/* </section> */}

            <section className="flex h-screen items-center justify-center text-white">
                <Presentation />
            </section>

            <Working />

            <section className="bg-card-background relative -top-10 hidden md:block">
                <HorizontalPin />
            </section>

            <ListPage />

            <MarqueePartener />

            <Testimonials />

            <Contact />

            <StickyFooter
                heightValue="100dvh"
                className="text-neutral-900 dark:text-neutral-100"
            >
                <FooterContent />
            </StickyFooter>
        </div>
    );
};

export default Landing;

export function FooterContent() {
    return (
        <div className="bg-line-background flex h-full w-full flex-col justify-between bg-slate-200 px-[90px] py-8 dark:bg-gray-500">
            <div className="mt-20 grid shrink-0 grid-cols-1 gap-20 sm:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <h3 className="mb-2 text-neutral-500 uppercase">
                        À propos
                    </h3>
                    <a href="#home">Accueil</a>
                    <a href="#explore">Explorez</a>
                    <a href="#testy">Testimoniales</a>
                    <a href="#contact">Contactez-nous</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="mb-2 text-neutral-500 uppercase">Outils</h3>
                    <p>Expace communautaire</p>
                    <p>Assisatnce IA</p>
                    <p>Cimetière des projets</p>
                    <p>Espace de creation</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="mb-2 text-neutral-500">
                        Pour t’inspirer ou t’exprimer, les pages publiques te
                        permettent de faire partie de l’histoire collective des
                        plus belles fins.
                    </h3>
                </div>
            </div>

            <div className="font-syne flex flex-col items-end gap-4 sm:flex-row">
                <h1 className="mt-10 text-[14vw] leading-[0.8]">TheEnd.Page</h1>
                <p>©copyright - 2025</p>
            </div>
        </div>
    );
}
