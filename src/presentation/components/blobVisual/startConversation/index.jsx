import { Bot } from 'lucide-react';
import React from 'react';

export function StartConversation({ isOpen, onAccept, onReject }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" />

            <div
                className="relative z-10 flex w-64 flex-col items-center gap-4 rounded-3xl p-5 shadow-2xl"
                style={{
                    background: `linear-gradient(to bottom, white 50%, #d0eaff 100%)`,
                    boxShadow: `
            0 10px 30px rgba(0, 0, 50, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.5)
          `,
                }}
            >
                <div className="h-[100px] w-[100px]">
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

                <div className="mt-2 flex w-full justify-between gap-3">
                    <button
                        onClick={onReject}
                        className="cursor-pointer rounded-lg bg-gray-100 px-3 py-1 text-[10px] text-gray-700 transition hover:bg-gray-200"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={onAccept}
                        className="cursor-pointer rounded-lg bg-blue-600 px-3 py-1 text-[10px] text-white shadow-md transition hover:bg-blue-700"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}
