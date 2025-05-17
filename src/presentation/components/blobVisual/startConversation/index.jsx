import { Bot } from "lucide-react";
import React from "react";

export function StartConversation({ isOpen, onAccept, onReject }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 bg-white rounded-xl shadow-lg w-50 p-5 flex flex-col items-center gap-4">
        <Bot className="w-16 h-16 text-blue-500" />
        <div className="text-base font-medium text-gray-800">Start Conversation</div>

        <div className="flex w-full justify-between gap-3 mt-2">
          <button
            onClick={onReject}
            className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-[10px] transition"
          >
            Refuser
          </button>
          <button
            onClick={onAccept}
            className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-[10px] transition"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
