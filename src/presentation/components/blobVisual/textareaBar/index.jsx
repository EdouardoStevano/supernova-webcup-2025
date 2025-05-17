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
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-3xl px-4 py-1 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200">
      <div className="flex items-end gap-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Écris ton message ici..."
          rows={1}
          className="flex-grow resize-none rounded-xl border border-gray-300 p-3 text-base bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
        <button
          onClick={() => alert('Simulation de transcription vocale')}
          className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
          title="Transcription vocale"
        >
          <Mic className="text-blue-600 w-5 h-5" />
        </button>
        <button
          onClick={handleSend}
          className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all text-white"
          title="Envoyer"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TextInputBar;
