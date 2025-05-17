import {
  Crown,
  Smile,
  Meh,
  Frown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { LeaderboardList } from "./components/list";
import "./style.css";
import data from "../../../data/datasource/leaderBoard.json";

const gradients = [
  "linear-gradient(to bottom, #ffffff 50%, #ffe57f 100%)",
  "linear-gradient(to bottom, #d0e4fa 50%, #64b5f6 100%)",
  "linear-gradient(to bottom, #ffffff 50%, #ce93d8 100%)",
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
      className="relative p-4 w-64 h-64 flex flex-col items-center gap-3 rounded-xl transition-transform duration-200 ease-out cursor-pointer"
      style={{
        background: gradients[index],
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* animations inchangées */}
      {index === 0 && <div className="absolute inset-0 z-0 flex items-start justify-center pointer-events-none"><div className="sun-rays animate-spin-slow w-24 h-24 bg-yellow-300 rounded-full opacity-30 blur-2xl"></div></div>}
      {index === 1 && <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"><div className="cloud cloud1"><img src="/images/cloud.webp" alt="" /></div><div className="cloud cloud2"><img src="/images/cloud.webp" alt="" /></div></div>}
      {index === 2 && <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">{[...Array(10)].map((_, i) => <div key={i} className="raindrop" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }} />)}</div>}

      <div className="absolute -top-4 bg-white rounded-full p-1 shadow-sm z-10">
        <Crown
          size={24}
          className={
            index === 0
              ? "text-yellow-500"
              : index === 1
              ? "text-blue-400"
              : "text-purple-400"
          }
        />
      </div>

      <div className="text-lg font-bold text-gray-800 mt-4 z-10">{`Top ${index + 1}`}</div>

      <div className="flex flex-col items-center z-10">
        {emotionIcons[data.emotion]}
        <span className="text-sm text-gray-700 mt-1">{data.emotion}</span>
      </div>

      <p className="text-center text-sm text-gray-600 italic px-2 z-10">
        {data.description}
      </p>

      <div className="flex justify-between items-center gap-4 mt-2 z-10">
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
    const sorted = [...data]
    setTop3(sorted.slice(0, 3));
    setOthers(sorted.slice(3));
    console.log(others)
  }, [data]);

  if (top3.length === 0) return <p>Chargement...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-50 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Leaderboard</h1>
      <div className="flex justify-center gap-6">
        {top3.map((player, i) => (
          <LeaderboardCard key={i} data={player} index={i} />
        ))}
      </div>
      <LeaderboardList data={others} />
    </div>
  );
}