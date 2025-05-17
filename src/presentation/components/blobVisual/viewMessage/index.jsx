import AnimatedText from "../animatedText";

export function ViewMessage({ message }) {
  if (!message || message === "") return null;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[99]">
      <div className="max-w-sm bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl shadow-xl flex items-start gap-4 animate-fade-in">
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
          🤖
        </div>

        <div>
          <h2 className="text-gray-800 font-semibold text-sm mb-1">Bot</h2>
          <AnimatedText text={message} />
          <p className="text-xs text-gray-500 mt-2">{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
}
