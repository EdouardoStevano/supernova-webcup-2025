import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, SquarePen } from "lucide-react";

const emotionThemes = {
  happy: "bg-yellow-100 text-yellow-800",
  sad: "bg-blue-100 text-blue-800",
  angry: "bg-red-100 text-red-800",
  neutral: "bg-gray-100 text-gray-700",
  surprised: "bg-purple-100 text-purple-800",
};

function fakeEmotionAnalysis() {
  const emotions = ["happy", "sad", "angry", "neutral", "surprised"];
  return emotions[Math.floor(Math.random() * emotions.length)];
}

export default function VideoRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [emotion, setEmotion] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [userNote, setUserNote] = useState("");
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
    const options = { mimeType: "video/webm; codecs=vp9" };
    const mediaRecorder = new MediaRecorder(mediaStream, options);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
      const detectedEmotion = fakeEmotionAnalysis();
      setEmotion(detectedEmotion);
    };

    mediaRecorder.start();
    setIsRecording(true);
    setEmotion(null);
    setVideoURL(null);
    setUserNote("");
    setNoteSaved(false);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleNoteSubmit = () => {
    console.log("Note enregistrée :", userNote);
    setNoteSaved(true);
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-8 transition-colors duration-500"
      animate={{
        backgroundColor: emotion
          ? getComputedStyle(document.documentElement).getPropertyValue(
              `--tw-${emotionThemes[emotion].split(" ")[0]}`
            )
          : "#ffffff",
        color: emotion
          ? getComputedStyle(document.documentElement).getPropertyValue(
              `--tw-${emotionThemes[emotion].split(" ")[1]}`
            )
          : "#1f2937",
      }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Video Live */}
        <div className="flex-1 relative rounded-xl bg-black aspect-video overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {isRecording && (
            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black bg-opacity-60 px-4 py-1 select-none rounded">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
              <span className="text-white font-semibold text-xs">
                Enregistrement...
              </span>
            </div>
          )}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2 px-4 rounded-md flex items-center gap-2 shadow-md"
              >
                <Play size={16} />
                Démarrer
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-2 px-4 rounded-md shadow-md"
              >
                Arrêter
              </button>
            )}
          </div>
        </div>

        {/* Video Rejouée */}
        <motion.div
          className="flex-1 flex flex-col items-center border border-dotted border-gray-500 aspect-video relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {videoURL ? (
            <>
              <video
                src={videoURL}
                controls
                className="w-full h-full object-cover"
              />
              {emotion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full shadow-sm
                    ${
                      emotion === "happy"
                        ? "bg-yellow-300 text-yellow-900"
                        : emotion === "sad"
                        ? "bg-blue-300 text-blue-900"
                        : emotion === "angry"
                        ? "bg-red-300 text-red-900"
                        : emotion === "neutral"
                        ? "bg-gray-300 text-gray-900"
                        : "bg-purple-300 text-purple-900"
                    }`}
                >
                  {emotion.toUpperCase()}
                </motion.div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center text-gray-400 italic text-lg select-none h-full">
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6"
        >
          <label className="block text-gray-700 font-medium mb-1 text-[12px]">
            Votre notre :
          </label>

          <div className="relative w-full md:w-1/2">
            <textarea
              type="text"
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              readOnly={noteSaved}
              placeholder="Ajouter une note..."
              className={`w-full pr-10 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                noteSaved ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            {noteSaved && (
              <button
                onClick={() => setNoteSaved(false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 text-xs"
                title="Modifier"
              >
                <SquarePen size={14} />
              </button>
            )}
          </div>

          {!noteSaved && (
            <button
              onClick={handleNoteSubmit}
              className="mt-2 text-[12px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded-md transition"
            >
              Enregistrer
            </button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
