import React from 'react';
import MediaCard from '../../../../components/common/mediaCard';

const films = [
    {
        titre: 'Les Chroniques du Futur',
        image: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg',
        description:
            'Une aventure interstellaire dans un monde où le temps se plie aux émotions humaines.',
        detenteur: 'Mada Films',
        date: '17 Mai 2025',
    },
    {
        titre: 'Le Dernier Silence',
        image: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg',
        description:
            'Un thriller psychologique autour du pouvoir du secret dans un monde trop bavard.',
        detenteur: 'Silencio Studio',
        date: '02 Juin 2025',
    },
    {
        titre: 'Renaissance Digitale',
        image: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg',
        description:
            'Quand l’intelligence artificielle découvre la poésie humaine.',
        detenteur: 'NeoVerse Production',
        date: '20 Juillet 2025',
    },
];

const ListPage = () => {
    const handleWatch = (titre) => {
        alert(`Vous regardez : ${titre}`);
    };
    return (
        <div className="justify-center md:flex md:h-screen" id="list">
            <div className="max-auto max-w-[1200px]">
                <div className="mb-2 flex flex-col justify-start px-10 md:px-0">
                    <h1 className="mb-2 text-5xl font-bold text-gray-800 dark:text-white">
                        Claque la porte, mais laisse une trace
                    </h1>
                    <p className="w-[50%] text-[14px] text-gray-600 dark:text-white">
                        Ils sont partis, mais leur page est restée. Découvre ces
                        chefs-d'œuvre de drama, de sarcasme, de poésie ou de
                        grand n’importe quoi. Rires, larmes, malaises garantis.
                        Attention, certaines sorties sont plus bruyantes que
                        d’autres…
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 px-10 py-1 sm:grid-cols-2 md:grid-cols-3 md:px-0 md:py-20">
                    {films.map((film, index) => (
                        <MediaCard
                            key={index}
                            {...film}
                            onWatch={() => handleWatch(film.titre)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListPage;
