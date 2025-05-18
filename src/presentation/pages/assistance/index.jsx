import { useState, useRef } from 'react';
import AudioVisualizer from '../../components/blobVisual';
import { StartConversation } from '../../components/blobVisual/startConversation';
import { Mic, MicOff } from 'lucide-react';
import TextInputBar from '../../components/blobVisual/textareaBar';
import { getEvaluation } from '../../components/iaService/getIAresponse';

/**
 * @desc: Assistance page with voice response using TTS and STT
 */
const Assistance = () => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [message, setMessage] = useState(
        'Je suis vraiment là pour toi, prête à t’aider à chaque étape. N’hésite surtout pas, tu peux compter sur moi. Tu n’es pas seule.'
    );
    const [isListening, setIsListening] = useState(false);
    const [isOpen, setOpen] = useState(true);
    const recognitionRef = useRef(null);

    const defaultAudio = '/default_voice.mp3';

    const startSpeechRecognition = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.error('Speech Recognition non supporté.');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'fr-FR';
        recognition.interimResults = false;
        recognition.continuous = true;

        recognition.onresult = (event) => {
            const lastResult = event.results[event.results.length - 1];
            const transcript = lastResult[0].transcript.trim();
            console.log('Transcription :', transcript);

            if (transcript) {
                sendToTTS(transcript);
            }
        };

        recognition.onerror = (event) => {
            console.error('Erreur STT :', event.error);
            if (event.error === 'network') {
                console.error(
                    'Erreur de reconnaissance vocale : vérifier la connexion Internet et les permissions micro.'
                );
            }
            if (event.error === 'not-allowed') {
                console.error(
                    'Permission microphone refusée. Veuillez autoriser l’accès au microphone.'
                );
                stopSpeechRecognition();
            }
        };

        recognition.onend = () => {
            if (isListening) recognition.start();
        };

        recognition.start();
        recognitionRef.current = recognition;
        setIsListening(true);
    };

    const stopSpeechRecognition = () => {
        recognitionRef.current?.stop();
        setIsListening(false);
    };

    const handleMessage = async (message) => {
        try {
            const aiResponse = await getEvaluation(message);
            if (aiResponse) {
                await sendToTTS(aiResponse);
            }
        } catch (error) {
            console.error('Erreur lors du traitement du message :', error);
        }
    };

    const sendToTTS = async (text) => {
        try {
            setMessage(text);
            const response = await fetch(
                'https://tts-french-production.up.railway.app/generate_speech/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text }),
                }
            );

            if (!response.ok) throw new Error('Échec de génération audio');

            const blob = await response.blob();
            if (!blob.type.startsWith('audio/'))
                throw new Error('Type audio invalide');

            const localUrl = URL.createObjectURL(blob);
            setAudioUrl(localUrl);
        } catch (error) {
            console.error('Erreur TTS :', error);
        }
    };

    const handleAccept = () => {
        setAudioUrl(defaultAudio);
        setOpen(false);
        setTimeout(() => {
            startSpeechRecognition();
        }, 2000);
    };

    return (
        <div className="relative min-h-screen pb-24">
            <StartConversation
                isOpen={isOpen}
                onAccept={handleAccept}
                onReject={stopSpeechRecognition}
            />
            {!isOpen && <TextInputBar onSubmit={handleMessage} />}
            {audioUrl && (
                <AudioVisualizer audioUrl={audioUrl} message={message} />
            )}
        </div>
    );
};

export default Assistance;
