import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, SquarePen } from 'lucide-react';

const emotionThemes = {
    happy: 'bg-yellow-100 text-yellow-800',
    sad: 'bg-blue-100 text-blue-800',
    angry: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-700',
    surprised: 'bg-purple-100 text-purple-800',
};

function fakeEmotionAnalysis() {
    const emotions = ['happy', 'sad', 'angry', 'neutral', 'surprised'];
    return emotions[Math.floor(Math.random() * emotions.length)];
}

export default function VideoRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [emotion, setEmotion] = useState(null);
    const [mediaStream, setMediaStream] = useState(null);
    const [videoURL, setVideoURL] = useState(null);
    const [userNote, setUserNote] = useState('');
    const [noteSaved, setNoteSaved] = useState(false);

    const mediaRecorderRef = useRef(null);
    const recordedChunks = useRef([]);
    const videoRef = useRef(null);

    useEffect(() => {
        async function getMedia() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                setMediaStream(stream);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                alert("Erreur d'accès à la caméra : " + err.message);
            }
        }
        getMedia();

        return () => {
            if (mediaStream) {
                mediaStream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    const startRecording = () => {
        if (!mediaStream) return;
        recordedChunks.current = [];
        const options = { mimeType: 'video/webm; codecs=vp9' };
        const mediaRecorder = new MediaRecorder(mediaStream, options);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) recordedChunks.current.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks.current, {
                type: 'video/webm',
            });
            const url = URL.createObjectURL(blob);
            setVideoURL(url);
            const detectedEmotion = fakeEmotionAnalysis();
            setEmotion(detectedEmotion);
        };

        mediaRecorder.start();
        setIsRecording(true);
        setEmotion(null);
        setVideoURL(null);
        setUserNote('');
        setNoteSaved(false);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handleNoteSubmit = () => {
        console.log('Note enregistrée :', userNote);
        setNoteSaved(true);
    };

    return (
        <motion.div
            className="mx-auto max-w-6xl p-8 transition-colors duration-500"
            animate={{
                backgroundColor: emotion
                    ? getComputedStyle(
                          document.documentElement
                      ).getPropertyValue(
                          `--tw-${emotionThemes[emotion].split(' ')[0]}`
                      )
                    : '#ffffff',
                color: emotion
                    ? getComputedStyle(
                          document.documentElement
                      ).getPropertyValue(
                          `--tw-${emotionThemes[emotion].split(' ')[1]}`
                      )
                    : '#1f2937',
            }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-8 md:flex-row">
                {/* Video Live */}
                <div className="relative aspect-video flex-1 overflow-hidden rounded-xl bg-black">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    />
                    {isRecording && (
                        <div className="bg-opacity-60 absolute top-4 left-4 flex items-center space-x-2 rounded bg-black px-4 py-1 select-none">
                            <span className="h-3 w-3 animate-ping rounded-full bg-red-600"></span>
                            <span className="text-xs font-semibold text-white">
                                Enregistrement...
                            </span>
                        </div>
                    )}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
                        {!isRecording ? (
                            <button
                                onClick={startRecording}
                                className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-700"
                            >
                                <Play size={16} />
                                Démarrer
                            </button>
                        ) : (
                            <button
                                onClick={stopRecording}
                                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-700"
                            >
                                Arrêter
                            </button>
                        )}
                    </div>
                </div>

                {/* Video Rejouée */}
                <motion.div
                    className="relative flex aspect-video flex-1 flex-col items-center overflow-hidden rounded-xl border border-dotted border-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {videoURL ? (
                        <>
                            <video
                                src={videoURL}
                                controls
                                className="h-full w-full object-cover"
                            />
                            {emotion && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${
                                        emotion === 'happy'
                                            ? 'bg-yellow-300 text-yellow-900'
                                            : emotion === 'sad'
                                              ? 'bg-blue-300 text-blue-900'
                                              : emotion === 'angry'
                                                ? 'bg-red-300 text-red-900'
                                                : emotion === 'neutral'
                                                  ? 'bg-gray-300 text-gray-900'
                                                  : 'bg-purple-300 text-purple-900'
                                    }`}
                                >
                                    {emotion.toUpperCase()}
                                </motion.div>
                            )}
                        </>
                    ) : (
                        <div className="flex h-full items-center justify-center text-lg text-gray-400 italic select-none">
                            <p>Aucune vidéo enregistrée</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Champ de note après enregistrement */}
            {videoURL && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mt-6"
                >
                    <label className="mb-1 block text-[12px] font-medium text-gray-700">
                        Votre notre :
                    </label>

                    <div className="relative w-full md:w-1/2">
                        <textarea
                            type="text"
                            value={userNote}
                            onChange={(e) => setUserNote(e.target.value)}
                            readOnly={noteSaved}
                            placeholder="Ajouter une note..."
                            className={`w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm shadow-sm transition focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                                noteSaved
                                    ? 'cursor-not-allowed bg-gray-100'
                                    : ''
                            }`}
                        />
                        {noteSaved && (
                            <button
                                onClick={() => setNoteSaved(false)}
                                className="absolute top-1/2 right-2 -translate-y-1/2 transform text-xs text-blue-500 hover:text-blue-700"
                                title="Modifier"
                            >
                                <SquarePen size={14} />
                            </button>
                        )}
                    </div>

                    {!noteSaved && (
                        <button
                            onClick={handleNoteSubmit}
                            className="mt-2 rounded-md bg-blue-600 px-4 py-1 text-[12px] font-medium text-white transition hover:bg-blue-700"
                        >
                            Enregistrer
                        </button>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
}
