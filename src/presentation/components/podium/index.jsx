import {
    Crown,
    Smile,
    Meh,
    Frown,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
} from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { LeaderboardList } from './components/list';
import './style.css';
import dataSource from '../../../data/datasource/leaderBoard.json';
import { Link } from 'react-router-dom';

const gradients = [
    'linear-gradient(to bottom, #ffffff 50%, #ffe57f 100%)',
    'linear-gradient(to bottom, #e0e0e0 50%, #e8dada 100%)',
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
            {index === 0 && (
                <>
                    <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center">
                        <div className="sun-rays animate-spin-slow h-24 w-24 rounded-full bg-yellow-300 opacity-30 blur-2xl" />
                    </div>
                    {/* GIFs */}
                    <img
                        src="/images/sad.GIF"
                        className="absolute top-[-40px] left-[58%] -translate-x-1/2 transform"
                        width={60}
                    />
                    <img
                        src="/images/sad.GIF"
                        className="absolute bottom-0 left-0"
                        width={70}
                    />
                    <img
                        src="/images/sad.GIF"
                        className="absolute right-0 bottom-0"
                        width={70}
                    />
                </>
            )}

            {index === 1 && (
                <div className="pointer-events-none absolute inset-0 z-0">
                    <img
                        src="/images/calm.GIF"
                        className="absolute top-[-40px] left-[44%] -translate-x-1/2 transform"
                        width={60}
                    />
                    <img
                        src="/images/calm.GIF"
                        className="absolute bottom-0 left-0"
                        width={70}
                    />
                    <img
                        src="/images/calm.GIF"
                        className="absolute right-0 bottom-0"
                        width={70}
                    />
                </div>
            )}

            {index === 2 && (
                <div className="pointer-events-none absolute inset-0 z-0">
                    <img
                        src="/images/happy.gif"
                        className="absolute top-[-40px] left-[58%] -translate-x-1/2 transform"
                        width={60}
                    />
                    <img
                        src="/images/happy.gif"
                        className="absolute bottom-0 left-0"
                        width={70}
                    />
                    <img
                        src="/images/happy.gif"
                        className="absolute right-0 bottom-0"
                        width={70}
                    />
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
            <p className="z-10 px-2 text-center text-[16px] font-bold text-gray-900">
                {data.name}
            </p>
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
    const [players, setPlayers] = useState([]);
    const [top3, setTop3] = useState([]);
    const [others, setOthers] = useState([]);
    const [prevPositions, setPrevPositions] = useState({}); // pour détecter le déplacement

    useEffect(() => {
        const initData = dataSource.map((item, index) => ({
            ...item,
            id: item.name || index, // identifiant unique
        }));

        setPlayers(initData);
        setPrevPositions(
            initData.reduce((acc, curr, i) => {
                acc[curr.id] = i;
                return acc;
            }, {})
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedPlayers = [...players].map((p) => ({
                ...p,
                // Simuler les changements :
                positive: p.positive + Math.floor(Math.random() * 3),
                negative: p.negative + Math.floor(Math.random() * 2),
            }));

            const sorted = [...updatedPlayers].sort(
                (a, b) => b.positive - b.negative - (a.positive - a.negative)
            );

            const newPositions = {};
            sorted.forEach((p, index) => {
                newPositions[p.id] = index;
            });

            setPrevPositions(newPositions);
            setPlayers(sorted);
            setTop3(sorted.slice(0, 3));
            setOthers(sorted.slice(3));
        }, 2000); // toutes les 4 secondes

        return () => clearInterval(interval);
    }, [players]);

    if (top3.length === 0)
        return (
            <div className="swipeUpDown flex h-screen w-full items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            </div>
        );

    return (
        <div className="gradientBack1 swipeUpFade animate-swipe-down">
            <div className="pointBackground flex min-h-screen flex-col items-center justify-center bg-gray-200 py-10">
                <Link
                    to="/"
                    className="fixed top-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-700 shadow-md transition-colors hover:bg-gray-50"
                >
                    <ArrowLeft size={20} />
                    <span>Retour</span>
                </Link>
                <h1 className="mb-8 text-3xl font-bold text-gray-800">
                    Leaderboard
                </h1>
                {/* <div className={'flex items-center gap-8'}> */}
                <div className="flex justify-center gap-6">
                    {top3.map((player, i) => (
                        <LeaderboardCard
                            key={player.id}
                            data={player}
                            index={i}
                        />
                    ))}
                </div>
                <LeaderboardList data={others} prevPositions={prevPositions} />
                {/* </div> */}
            </div>
        </div>
    );
}
