import { Bot } from "lucide-react";
import React from "react";

export function StartConversation({ isOpen, onAccept, onReject }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" />

      <div
        className="relative z-10 p-5 w-64 flex flex-col items-center gap-4 rounded-xl shadow-2xl"
        style={{
          background: `linear-gradient(to bottom, white 50%, #d0eaff 100%)`,
          boxShadow: `
            0 10px 30px rgba(0, 0, 50, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.5)
          `,
        }}
      >
        <div className="w-[100px] h-[100px]">
          <lottie-player
            src="https://lottie.host/5685a641-d486-418a-821a-05cb1f6406ed/QEFc3vi7BE.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>

        <div className="text-base font-semibold text-blue-900">
          Start Conversation
        </div>

        <div className="flex w-full justify-between gap-3 mt-2">
          <button
            onClick={onReject}
            className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-[10px] transition"
          >
            Refuser
          </button>
          <button
            onClick={onAccept}
            className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-[10px] shadow-md transition"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
