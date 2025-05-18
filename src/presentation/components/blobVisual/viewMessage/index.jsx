import AnimatedText from '../animatedText';

export function ViewMessage({ message }) {
    if (!message || message === '') return null;

    return (
        <div className="absolute top-1/2 left-4 z-[99] w-[400px] -translate-y-1/2">
            <div className="animate-fade-in flex max-h-[80%] max-w-sm items-start gap-4 rounded-2xl bg-white/70 p-4 shadow-xl backdrop-blur-sm">
                <div className="bg-primary-500 flex h-10 max-w-10 min-w-10 items-center justify-center rounded-full font-bold text-white">
                    🤖
                </div>

                <div>
                    <h2 className="mb-1 text-sm font-bold text-gray-800">
                        Bot
                    </h2>
                    <AnimatedText text={message} />
                    <p className="mt-2 text-xs text-gray-500">
                        {new Date().toLocaleTimeString()}
                    </p>
                </div>
            </div>
        </div>
    );
}
