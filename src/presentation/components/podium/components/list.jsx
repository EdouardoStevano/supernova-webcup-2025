import { ArrowUp, ArrowDown, User, Smile, Meh, Frown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function LeaderboardList({ data }) {
    const [pinned, setPinned] = useState(false);
    const titleRef = useRef(null);

    const emotionIcons = {
        Heureux: <Smile size={20} className="text-yellow-500" />,
        Calme: <Meh size={20} className="text-blue-500" />,
        Concentré: <Frown size={20} className="text-purple-500" />,
        // nouvelles émotions
        Soulagé: <Smile size={20} className="text-green-500" />,
        Soulagée: <Smile size={20} className="text-green-500" />,
        Triste: <Frown size={20} className="text-gray-500" />,
        Motivé: <Smile size={20} className="text-orange-400" />,
        Motivée: <Smile size={20} className="text-orange-400" />,
        Déterminé: <Smile size={20} className="text-pink-500" />,
        Apaisée: <Meh size={20} className="text-teal-500" />,
        Excité: <Smile size={20} className="text-red-400" />,
        Nostalgique: <Meh size={20} className="text-indigo-400" />,
        Frustré: <Frown size={20} className="text-red-600" />,
        Libérée: <Smile size={20} className="text-fuchsia-500" />,
        Serein: <Meh size={20} className="text-blue-400" />,
        Optimiste: <Smile size={20} className="text-lime-500" />,
        Indécis: <Meh size={20} className="text-yellow-400" />,
        Heureuse: <Smile size={20} className="text-yellow-500" />,
        Épuisé: <Frown size={20} className="text-gray-600" />,
        Ambitieux: <Smile size={20} className="text-sky-500" />,
        Fière: <Smile size={20} className="text-emerald-500" />,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setPinned(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    return (
        <div className="relative mt-10 w-full max-w-3xl px-4">
            {pinned && (
                <div className="fixed top-0 right-0 left-0 z-50 bg-white px-40 py-3 shadow">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Top 15 lettre d'adieu
                    </h2>
                </div>
            )}

            <div ref={titleRef}>
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                    Top 15 lettre d'adieu
                </h2>
            </div>

            <ul className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-lg">
                {data.map((player, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between p-4 transition hover:bg-blue-50"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-6 text-center text-lg font-bold ${
                                    index === 0
                                        ? 'text-yellow-500'
                                        : index === 1
                                          ? 'text-gray-400'
                                          : index === 2
                                            ? 'text-orange-500'
                                            : 'text-gray-600'
                                }`}
                            >
                                {index + 4}
                            </div>
                            <User className="text-gray-400" size={20} />
                            <span className="text-sm font-medium text-gray-700">
                                {player.name}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                {emotionIcons[player.emotion] || (
                                    <Meh size={20} className="text-gray-400" />
                                )}
                                <span>{player.emotion}</span>
                            </div>

                            <div className="flex items-center gap-1 text-sm text-green-600">
                                <ArrowUp size={16} />
                                <span>{player.positive}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-red-500">
                                <ArrowDown size={16} />
                                <span>{player.negative}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
