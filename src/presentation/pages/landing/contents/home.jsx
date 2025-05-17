import { useEffect, useRef } from "react";
import { useToast } from "../../../components/common/superToast";
import MyScenne from "../../../components/models3D/MyScenne";
import useScroll from "../../../hooks/useScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 *
 * @desc: Landing pages
 */

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   // Initialize Locomotive Scroll
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("#main-scroll"),
  //     smooth: true,
  //     multiplier: 1,
  //     lerp: 0.03,
  //     smartphone: {
  //       smooth: true,
  //     },
  //     tablet: {
  //       smooth: true,
  //     },
  //   });

  //   // Clean up Locomotive Scroll instance
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  const { addToast } = useToast();

  // Toast d'information (par défaut)
  const montrerInfo = () => {
    addToast("Voici une information importante");
  };

  // Toast de succès
  const montrerSucces = () => {
    addToast("Opération réussie !", "success");
  };

  // Toast d'erreur
  const montrerErreur = () => {
    addToast("Une erreur s'est produite", "error");
  };

  // Toast d'avertissement
  const montrerAvertissement = () => {
    addToast("Attention !", "warning");
  };

  const { setScrollYPercent } = useScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".container-3D",
        start: "top top",
        end: "bottom top",
        pin: ".scenne",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          setScrollYPercent(self.progress);
        },
      });
    });

    return () => ctx.revert(); // Nettoyage
  }, []);

  return (
    <>
      <div className="h-screen bg-blue-500 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
        <p className="text-center">This is a test</p>
      </div>

      <div className="container-3D relative h-[400vh] bg-gray-200">
        <div className="absolute w-full  scenne h-screen flex justify-center items-center">
          <MyScenne />
        </div>
        <div className="herro-secr   h-screen  text-3xl font-bold underline text-center flex justify-center items-center relative z-10">
          <h1>Section 1</h1>
        </div>

        <div className="herro-secr h-screen   text-3xl font-bold underline text-center flex justify-center items-center relative z-10">
          <h1>Section 2 </h1>
        </div>

        <div className="herro-secr h-screen    text-3xl font-bold underline text-center flex justify-center items-center relative z-10">
          <h1>Section 3</h1>
        </div>
        <div className="herro-secr h-screen  text-3xl font-bold underline text-center flex justify-center items-center relative z-10">
          <h1>Section 4</h1>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center z-50">
        {/* dont touch  in this section na vide ary s */}
      </div>
      <div className="h-screen flex flex-col justify-center items-center z-50">
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
        <p className="text-center">This is a test</p>
      </div>
    </>
  );
};

export default Landing;
