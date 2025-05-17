import React from 'react';
import AvatarHappy from '../../../../assets/illustrations/Avatarshappy.png';

const Contact = () => {
    return (
        <section
            id="contact"
            className="font-Poppins bannerBackground relative overflow-hidden px-4 pt-28 pb-12 sm:px-6 md:py-20 lg:px-8"
        >
            {/* Upward curved blur effect - added at the top of the section */}
            {/* <div className="absolute inset-x-0 bottom-7 h-full pointer-events-none overflow-hidden z-0">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-custom-green to-custom-bright-blue -translate-y-12 
                    [mask-image:radial-gradient(70%_95px_at_top,transparent_100%,black)] 
                    [-webkit-mask-image:radial-gradient(70%_95px_at_top,transparent_100%,black)]"
                ></div>
                <div
                    className="relative w-full h-full bg-custom-light-gray
                    [mask-image:radial-gradient(80%_80px_at_top,transparent_100%,black)] 
                    [-webkit-mask-image:radial-gradient(80%_80px_at_top,transparent_100%,black)]"
                ></div>
                <div className="absolute inset-0 bg-custom-blue bg-opacity-20 backdrop-blur-sm sm:backdrop-blur-md"></div>
            </div> */}

            <div className="h-[800px]">
                <div
                    className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-8 sm:pt-20 md:px-0 lg:grid-cols-2"
                    id="contact"
                >
                    {/* Left - Form */}
                    <div className="space-y-6 dark:text-white">
                        <h1 className="text-custom-dark-gray inline-flex flex-wrap items-center justify-center gap-2 text-3xl font-extrabold sm:text-4xl md:gap-3">
                            Lancer la bouteille à la mer
                        </h1>

                        <p className="text-[14px] text-slate-800 dark:text-white">
                            Et si tu as juste envie de balancer une message ou
                            une citation de fin… vas-y. On aime les surprises.
                        </p>
                        <form className="space-y-5">
                            <div>
                                <label className="text-custom-dark-gray mb-1 block font-medium">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    placeholder="Example : Edouardo Stevano"
                                    className="focus:ring-custom-bright-blue w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-custom-dark-gray mb-1 block font-medium">
                                    Contact
                                </label>
                                <input
                                    type="tel"
                                    placeholder="example: +261 34 85 009 92"
                                    className="focus:ring-custom-bright-blue w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-custom-dark-gray mb-1 block font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="focus:ring-custom-bright-blue w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-custom-dark-gray mb-1 block font-medium">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Message..."
                                    className="focus:ring-custom-bright-blue max-h-[100px] min-h-[100px] w-full rounded-xl bg-gray-200 px-4 py-3 focus:ring-2 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group from-custom-orange via-custom-bright-blue to-custom-green relative inline-flex overflow-hidden rounded-full bg-gradient-to-r p-0.5 text-sm font-medium text-gray-900 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none"
                            >
                                {/* <span className="relative bg-gradient-to-r from-custom-orange via-custom-bright-blue to-custom-green bg-clip-text text-transparent px-6 py-3  font-semibold    rounded-full group-hover:bg-transparent">
                                    Send Message
                                </span> */}
                                <span className="relative rounded-full bg-white px-6 py-3 font-semibold">
                                    <span className="from-custom-orange via-custom-bright-blue to-custom-green bg-gradient-to-r bg-clip-text text-transparent">
                                        Envoyer
                                    </span>
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Right - Image */}
                    <div className="hidden lg:block">
                        <img
                            src={AvatarHappy}
                            alt="Contact Illustration"
                            className="relative left-8 mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
