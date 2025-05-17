import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

// import imgCard1 from '../../../assets/illustrations/auth2.jpg';
import imgCard2 from '../../../assets/illustrations/auth2.jpg';
import imgCard3 from '../../../assets/illustrations/auth2.jpg';
import imgCard4 from '../../../assets/illustrations/auth2.jpg';

export default function HorizontalPin() {
    const wrapper = useRef(null);

    useEffect(() => {
        const cards = [
            { id: '#card-1', endTranslateX: -2000, rotate: 45 },
            { id: '#card-2', endTranslateX: -1000, rotate: -30 },
            { id: '#card-3', endTranslateX: -2000, rotate: 45 },
            { id: '#card-4', endTranslateX: -1500, rotate: -30 },
        ];

        if (wrapper.current) {
            let ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: wrapper.current,
                    start: 'top top',
                    end: '+=600vh',
                    scrub: 1,
                    pin: true,
                    onUpdate: (self) => {
                        gsap.to(wrapper.current, {
                            x: `${-350 * self.progress}vw`,
                            duration: 1,
                            ease: 'power3.out',
                        });
                    },
                });

                cards.forEach((card) => {
                    ScrollTrigger.create({
                        trigger: card.id,
                        start: 'top top',
                        end: '+650vh',
                        scrub: 1,
                        onUpdate: (self) => {
                            gsap.to(card.id, {
                                x: `${card.endTranslateX * self.progress}px`,
                                rotate: `${card.rotate * self.progress * 2}`,
                                duration: 0.5,
                                ease: 'power3.out',
                            });
                        },
                    });
                });
            });
            return () => ctx.revert();
        }
    }, []);

    return (
        <div className="textPin container">
            <section className="wrapper-404" ref={wrapper}>
                <h1 className="text-slate-800 dark:text-white">TheEnd.Page</h1>
                <div
                    className="card bg-opacity-25 bg-white p-5 shadow-2xl backdrop-blur-sm"
                    id="card-1"
                >
                    <span className="text-[20px] font-bold">
                        Les mots de la fin
                    </span>
                    <p>
                        Derrière chaque fin, il y a une histoire. Ici sont
                        rassemblées celles que l’on a osé écrire et partager.
                        Pages sincères, rageuses, drôles ou touchantes — chaque
                        adieu compte.
                    </p>
                </div>
                <div className="pinImage card shadow-2xl" id="card-2">
                    <img src={imgCard2} alt="Card 2" />
                </div>
                <div className="pinImage card shadow-2xl" id="card-3">
                    <img src={imgCard3} alt="Card 3" />
                </div>
                <div className="pinImage card shadow-2xl" id="card-4">
                    <img src={imgCard4} alt="Card 4" />
                </div>
            </section>
            {/* <section className="outro">
                <h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias ipsum quaerat voluptatibus
                    itaque exercitationem, autem incidunt porro expedita doloribus iste inventore culpa sed quo ducimus
                    debitis quia ab et corporis possimus repudiandae, dolores iusto! Tempora ducimus et eligendi minus?
                </h1>
            </section> */}
        </div>
    );
}
