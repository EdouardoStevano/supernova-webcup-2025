const FloatAssistance = () => {
    return (
        <div className="fixed right-8 bottom-8 z-50 hidden md:flex">
            <button
                className="cursor-auto rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600"
                aria-label="Get assistance"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default FloatAssistance;
