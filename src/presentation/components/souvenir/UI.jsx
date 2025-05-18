import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import iconsEDs from '../../assets/supernova/icoLarge.png';
const pictures = [
    'DSC00680',
    'DSC00933',
    'DSC00966',
    'DSC00983',
    'DSC01011',
    'DSC01040',
    'DSC01064',
    'DSC01071',
    'DSC01103',
    'DSC01145',
    'DSC01420',
    'DSC01461',
    'DSC01489',
    'DSC02031',
    'DSC02064',
    'DSC02069',
];

export const pageAtom = atom(0);
export const pages = [
    {
        front: 'book-cover',
        back: pictures[0],
    },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
    pages.push({
        front: pictures[i % pictures.length],
        back: pictures[(i + 1) % pictures.length],
    });
}

pages.push({
    front: pictures[pictures.length - 1],
    back: 'book-back',
});

export const UI = () => {
    const [page, setPage] = useAtom(pageAtom);

    useEffect(() => {
        const audio = new Audio('/audios/page-flip-01a.mp3');
        audio.play();
    }, [page]);

    return (
        <>
            <main className="pointer-events-none fixed inset-0 z-10 flex flex-col justify-between select-none">
                <div>
                    <h1 className="flex items-center gap-2 p-2 text-2xl text-white">
                        <div className="flex w-[52px] justify-center">
                            <img
                                src={iconsEDs}
                                alt="logo"
                                className=""
                                loading="lazy"
                            />
                        </div>
                        <div>The ENDPAGE</div>
                    </h1>
                </div>
                <div className="pointer-events-auto flex w-full justify-center overflow-auto">
                    <div className="flex max-w-full items-center gap-4 overflow-auto p-10">
                        {[...pages].map((_, index) => (
                            <button
                                key={index}
                                className={`shrink-0 rounded-full border border-transparent px-4 py-3 text-lg uppercase transition-all duration-300 hover:border-white ${
                                    index === page
                                        ? 'bg-white/90 text-black'
                                        : 'bg-black/30 text-white'
                                }`}
                                onClick={() => setPage(index)}
                            >
                                {index === 0 ? 'Cover' : `Souvennir ${index}`}
                            </button>
                        ))}
                        <button
                            className={`shrink-0 rounded-full border border-transparent px-4 py-3 text-lg uppercase transition-all duration-300 hover:border-white ${
                                page === pages.length
                                    ? 'bg-white/90 text-black'
                                    : 'bg-black/30 text-white'
                            }`}
                            onClick={() => setPage(pages.length)}
                        >
                            Back Cover
                        </button>
                    </div>
                </div>
            </main>

            <div className="fixed inset-0 flex -rotate-2 items-center select-none">
                <div className="relative">
                    <div className="animate-horizontal-scroll flex w-max items-center gap-8 bg-white/0 px-8">
                        <h1 className="text-10xl shrink-0 font-black text-white">
                            Team Supernova
                        </h1>
                        <h2 className="shrink-0 text-8xl font-light text-white italic">
                            Souvennirs
                        </h2>
                        <h2 className="text-12xl shrink-0 font-bold text-white">
                            Personnels
                        </h2>
                        <h2 className="text-12xl outline-text shrink-0 font-bold text-transparent italic">
                            du pasée
                        </h2>
                        <h2 className="shrink-0 text-9xl font-medium text-white">
                            et peut être
                        </h2>
                        <h2 className="shrink-0 text-9xl font-extralight text-white italic">
                            au futur
                        </h2>
                        <h2 className="text-13xl shrink-0 font-bold text-white">
                            de la
                        </h2>
                        <h2 className="text-13xl outline-text shrink-0 font-bold text-transparent italic">
                            réalité
                        </h2>
                    </div>
                    <div className="animate-horizontal-scroll-2 absolute top-0 left-0 flex w-max items-center gap-8 bg-white/0 px-8">
                        <h1 className="text-10xl shrink-0 font-black text-white">
                            Supernova
                        </h1>
                        <h2 className="shrink-0 text-8xl font-light text-white italic">
                            Souvennirs
                        </h2>
                        <h2 className="text-12xl shrink-0 font-bold text-white">
                            Personnels
                        </h2>
                        <h2 className="text-12xl outline-text shrink-0 font-bold text-transparent italic">
                            Ultimate Guide
                        </h2>
                        <h2 className="shrink-0 text-9xl font-medium text-white">
                            Tutorials
                        </h2>
                        <h2 className="shrink-0 text-9xl font-extralight text-white italic">
                            Learn
                        </h2>
                        <h2 className="text-13xl shrink-0 font-bold text-white">
                            Practice
                        </h2>
                        <h2 className="text-13xl outline-text shrink-0 font-bold text-transparent italic">
                            Creative
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};
