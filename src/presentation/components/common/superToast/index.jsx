import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle, Info } from 'lucide-react';
import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from 'react';

const ToastContext = createContext();

// Import notification sound using dynamic import
const notificationSoundPath = new URL(
    '../../../assets/audio/notification.mp3',
    import.meta.url
).href;

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        // Initialize audio on component mount
        const audioElement = new Audio(notificationSoundPath);
        setAudio(audioElement);

        // Preload audio
        audioElement.load();

        return () => {
            // Cleanup audio on unmount
            if (audioElement) {
                audioElement.pause();
                audioElement.src = '';
            }
        };
    }, []);

    const playNotificationSound = useCallback(async () => {
        if (!audio) return;

        try {
            // Reset audio to start
            audio.currentTime = 0;
            await audio.play();
        } catch (err) {
            console.warn('Could not play notification sound:', err);
        }
    }, [audio]);

    const addToast = useCallback(
        (message, type = 'info') => {
            const id = Date.now().toString(); // Using timestamp as unique ID
            setToasts((prev) => [...prev, { id, message, type }]);

            // Play notification sound
            playNotificationSound();

            const timer = setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, 3000);

            return () => clearTimeout(timer);
        },
        [playNotificationSound]
    );

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
                <AnimatePresence mode="popLayout">
                    {toasts.map((toast) => (
                        <Toast
                            key={toast.id}
                            {...toast}
                            onRemove={() => removeToast(toast.id)}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

const toastIcons = {
    success: <Check className="h-5 w-5 text-green-50" />,
    error: <X className="h-5 w-5 text-red-50" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-50" />,
    info: <Info className="h-5 w-5 text-blue-50" />,
};

const toastStyles = {
    success: 'bg-green-600/80  backdrop-blur-md text-green-50',
    error: 'bg-red-600/80  backdrop-blur-md text-red-50',
    warning: 'bg-yellow-600/80  backdrop-blur-md text-yellow-50',
    info: 'bg-blue-600/80  backdrop-blur-md text-blue-50',
};

const Toast = ({ id, message, type, onRemove }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
            className={`flex w-[250px] items-center gap-3 rounded-2xl p-4 shadow-lg ${toastStyles[type]} cursor-pointer`}
            onClick={onRemove}
            id={`toast-${id}`}
            role="alert"
            aria-live="polite"
        >
            {toastIcons[type]}
            <span className="text-sm font-medium">{message}</span>
        </motion.div>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
