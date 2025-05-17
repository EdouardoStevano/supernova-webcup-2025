import React from 'react';

export default function MediaCard({
    titre,
    image,
    description,
    detenteur,
    date,
    onWatch,
}) {
    return (
        <div className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800">
            <img className="h-48 w-full object-cover" src={image} alt={titre} />
            <div className="space-y-3 p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {titre}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>🎬 {detenteur}</span>
                    <span>📅 {date}</span>
                </div>
                <button
                    onClick={onWatch}
                    className="bg-primary-600 hover:bg-primary-800 mt-3 w-full rounded-xl py-2 text-white transition"
                >
                    Regarder
                </button>
            </div>
        </div>
    );
}
