import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react'; // icônes modernes, optionnel

const TextInputBar = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSubmit(text);
            setText('');
        }
    };

    return (
        <div className="fixed bottom-4 left-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2 transform rounded-2xl border border-gray-200 bg-white/90 px-4 py-1 shadow-xl backdrop-blur-md">
            <div className="flex items-end gap-3">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Écris ton message ici..."
                    rows={1}
                    className="flex-grow resize-none rounded-xl border border-gray-300 bg-white p-3 text-base shadow-inner transition-all focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <button
                    onClick={() => alert('Simulation de transcription vocale')}
                    className="rounded-full bg-blue-100 p-3 transition-colors hover:bg-blue-200"
                    title="Transcription vocale"
                >
                    <Mic className="h-5 w-5 text-blue-600" />
                </button>
                <button
                    onClick={handleSend}
                    className="rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-3 text-white transition-all hover:from-blue-600 hover:to-blue-800"
                    title="Envoyer"
                >
                    <Send className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default TextInputBar;
