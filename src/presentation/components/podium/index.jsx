import { Crown, Smile, Meh, Frown, ArrowUp, ArrowDown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { LeaderboardList } from './components/list';
import './style.css';
import data from '../../../data/datasource/leaderBoard.json';

const gradients = [
    'linear-gradient(to bottom, #ffffff 50%, #ffe57f 100%)',
    'linear-gradient(to bottom, #d0e4fa 50%, #64b5f6 100%)',
    'linear-gradient(to bottom, #ffffff 50%, #ce93d8 100%)',
];

const emotionIcons = {
    Heureux: <Smile className="text-yellow-700" size={24} />,
    Calme: <Meh className="text-blue-700" size={24} />,
    Concentré: <Frown className="text-purple-700" size={24} />,
};

function LeaderboardCard({ data, index }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex h-64 w-64 cursor-pointer flex-col items-center gap-3 rounded-xl p-4 transition-transform duration-200 ease-out"
            style={{
                background: gradients[index],
                transformStyle: 'preserve-3d',
                willChange: 'transform',
            }}
        >
            {/* animations inchangées */}
            {index === 0 && (
                <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center">
                    <div className="sun-rays animate-spin-slow h-24 w-24 rounded-full bg-yellow-300 opacity-30 blur-2xl"></div>
                </div>
            )}
            {index === 1 && (
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <div className="cloud cloud1">
                        <img src="/images/cloud.webp" alt="" />
                    </div>
                    <div className="cloud cloud2">
                        <img src="/images/cloud.webp" alt="" />
                    </div>
                </div>
            )}
            {index === 2 && (
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="raindrop"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="absolute -top-4 z-10 rounded-full bg-white p-1 shadow-sm">
                <Crown
                    size={24}
                    className={
                        index === 0
                            ? 'text-yellow-500'
                            : index === 1
                              ? 'text-blue-400'
                              : 'text-purple-400'
                    }
                />
            </div>

            <div className="z-10 mt-4 text-lg font-bold text-gray-800">{`Top ${index + 1}`}</div>

            <div className="z-10 flex flex-col items-center">
                {emotionIcons[data.emotion]}
                <span className="mt-1 text-sm text-gray-700">
                    {data.emotion}
                </span>
            </div>

            <p className="z-10 px-2 text-center text-sm text-gray-600 italic">
                {data.description}
            </p>

            <div className="z-10 mt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-green-600">
                    <ArrowUp size={16} />
                    <span className="text-sm font-medium">{data.positive}</span>
                </div>
                <div className="flex items-center gap-1 text-red-500">
                    <ArrowDown size={16} />
                    <span className="text-sm font-medium">{data.negative}</span>
                </div>
            </div>
        </div>
    );
}

export function LeaderboardTop3() {
    const [top3, setTop3] = useState([]);
    const [others, setOthers] = useState([]);

    useEffect(() => {
        const sorted = [...data];
        setTop3(sorted.slice(0, 3));
        setOthers(sorted.slice(3));
        console.log(others);
    }, [data]);

    if (top3.length === 0) return <p>Chargement...</p>;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white to-blue-50 py-10">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">
                Leaderboard
            </h1>
            <div className="flex justify-center gap-6">
                {top3.map((player, i) => (
                    <LeaderboardCard key={i} data={player} index={i} />
                ))}
            </div>
            <LeaderboardList data={others} />
        </div>
    );
}
