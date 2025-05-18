import React from 'react';

interface CardWorkingProps {
    title: string;
    image: string;
    description: string;
    index: number;
    onLearnMore: (index: number) => void;
}

const CardWorking: React.FC<CardWorkingProps> = ({
    title,
    image,
    description,
    index,
    onLearnMore,
}) => {
    return (
        <div className="boreder-2 hover:shadow-large group auto z-10 w-full rounded-[30px] border-2 border-transparent bg-white pb-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:z-20 hover:border-2 hover:border-[#C43C93] hover:bg-gray-50 lg:w-[260px] lg:rounded-3xl dark:bg-gray-600 dark:text-white">
            <div className="mb-4 h-[100px] overflow-hidden rounded-t-3xl bg-red-400">
                <img
                    src={image}
                    alt={title}
                    className="object-fit mb-4 w-full"
                />
            </div>
            {/* </> */}

            <div className="mb-2 flex rounded-full px-6">
                <h3 className="bg-gradient-to-r from-[#00306A] to-[#C43C93] bg-clip-text text-xl text-transparent dark:text-white">
                    {title}
                </h3>
            </div>

            <p className="px-6 text-justify text-[12px] leading-[25px] tracking-wide text-gray-600 lg:h-[110px] dark:text-white">
                {description}
            </p>

            <div className="mt-4 text-left">
                <button
                    onClick={() => onLearnMore(index)}
                    className="bg -gradient-to-r w-full rounded-full from-[#00306A] to-[#C43C93] bg-clip-text px-6 py-2 text-center text-sm text-transparent transition-opacity hover:opacity-90 lg:w-auto lg:text-left dark:text-white"
                >
                    En savoir plus
                </button>
            </div>
        </div>
    );
};

export default CardWorking;
