import {
  ArrowUp,
  ArrowDown,
  User,
  Smile,
  Meh,
  Frown,
} from "lucide-react";
// import { useEffect, useRef, useState } from "react";


import { motion, AnimatePresence } from "framer-motion";

export function LeaderboardList({ data, prevPositions }) {
  return (
    <div className="mt-10 w-full max-w-xl">
      <AnimatePresence>
        {data.map((player, index) => {
          const prevIndex = prevPositions[player.id];
          const positionChange = prevIndex !== undefined ? prevIndex - index : 0;

          return (
            <motion.div
              key={player.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="border border-dotted border-gray-500 bg-white rounded-lg px-4 py-2 mb-2 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-gray-700">{index + 4}.</span>
                <div>
                  <div className="font-semibold text-gray-800">{player.name}</div>
                  <div className="text-sm text-gray-500 italic">{player.description}</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUp size={14} />
                    <span className="text-[11px]">{player.positive}</span>
                  </div>
                  <div className="flex items-center gap-1 text-red-500">
                    <ArrowDown size={14} />
                    <span className="text-[11px]">{player.negative}</span>
                </div>
                </div>
                {positionChange !== 0 && (
                  <div
                    className={`text-[20px] mt-1 font-medium ${
                      positionChange > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {positionChange > 0 ? `+${positionChange}` : positionChange}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

