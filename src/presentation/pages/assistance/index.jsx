import { useState, useRef } from 'react';
import AudioVisualizer from '../../components/blobVisual';
import { StartConversation } from '../../components/blobVisual/startConversation';
import TextInputBar from '../../components/blobVisual/textareaBar';
import { getEvaluation } from '../../components/iaService/getIAresponse';
import { ViewMessage } from '../../components/blobVisual/viewMessage';
import { Link } from 'react-router-dom';

/**
 * @desc: Assistance page with voice response using TTS and STT
 */
const Assistance = () => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [isLoading, setLoading] = useState(null);
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
                handleMessage(transcript);
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
        setLoading(true);
        try {
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
            setMessage(text);
            setLoading(false);
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
        <div className="pointBackground relative h-screen min-h-screen overflow-hidden bg-gray-200 pb-24">
            <div className="gradientBack1">
                {audioUrl && (
                    <Link
                        to="/"
                        className="absolute top-5 right-10 z-50 rounded-3xl bg-gray-100 p-2 px-4 transition hover:scale-105"
                    >
                        Retour
                    </Link>
                )}
                <StartConversation
                    isOpen={isOpen}
                    onAccept={handleAccept}
                    onReject={stopSpeechRecognition}
                />
                {isLoading && <h1>Loading...</h1>}
                {!isOpen && <TextInputBar onSubmit={handleMessage} />}
                {!isOpen && <ViewMessage message={message} />}

                {audioUrl && (
                    <div className="fade-in">
                        <AudioVisualizer
                            audioUrl={audioUrl}
                            message={'  ' + message}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Assistance;
