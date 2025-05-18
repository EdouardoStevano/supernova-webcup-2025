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
        <div className="fixed bottom-4 left-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2 transform rounded-3xl border border-gray-200 bg-white/90 px-4 py-1 shadow-xl backdrop-blur-md">
            <div className="flex items-end gap-3">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Écris ton message ici..."
                    rows={1}
                    className="transition-allfocus:ring-blue-400 flex-grow resize-none rounded-xl border-0 border-gray-300 bg-white p-3 text-base shadow-inner outline-0"
                />
                <button
                    onClick={() => alert('Simulation de transcription vocale')}
                    className="bg-primary-100 rounded-full p-3 transition-colors hover:bg-blue-200"
                    title="Transcription vocale"
                >
                    <Mic className="text-primary-600 h-5 w-5 text-[#ff84e8]" />
                </button>
                <button
                    onClick={handleSend}
                    className="from-primary-500 to-primary-700 rounded-full bg-gradient-to-br p-3 text-white transition-all hover:from-gray-600 hover:to-gray-800"
                    title="Envoyer"
                >
                    <Send className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default TextInputBar;
