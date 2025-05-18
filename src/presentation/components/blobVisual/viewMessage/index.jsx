import AnimatedText from '../animatedText';

export function ViewMessage({ message }) {
    if (!message || message === '') return null;

    return (
        <div className="fixed top-1/2 left-4 z-[99] -translate-y-1/2">
            <div className="animate-fade-in flex max-w-sm items-start gap-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-4 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                    🤖
                </div>

                <div>
                    <h2 className="mb-1 text-sm font-semibold text-gray-800">
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
