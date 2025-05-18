import React from 'react';

const sideBarData = [
    {
        title: 'À propos de The ENDPAGE',
        content:
            'Bienvenue sur The End Pages ! Ici, nous partageons nos hummeur .',
    },
    {
        title: 'Catégories',
        content: (
            <ul className="ml-3 list-disc text-sm text-gray-300">
                <li>THe end Pages</li>
                <li>Toutes</li>
            </ul>
        ),
    },
    {
        title: 'Réseaux sociaux',
        content: (
            <div className="mt-1 flex gap-3">
                <a href="#" className="hover:text-[#ce47bc]">
                    Twitter
                </a>
                <a href="#" className="hover:text-[#ce47bc]">
                    LinkedIn
                </a>
                <a href="#" className="hover:text-[#ce47bc]">
                    GitHub
                </a>
            </div>
        ),
    },
];

export default function SidePanel() {
    return (
        <aside
            className="fixed top-0 right-0 z-40 flex h-full w-72 flex-col gap-6 border-l border-[#23272a] bg-[#2f3136] p-5 shadow-lg"
            style={{ minWidth: 260 }}
        >
            <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <h2 className="text-lg font-bold tracking-wide text-white">
                    The ENDPAGE
                </h2>
            </div>
            {sideBarData.map((section, idx) => (
                <div
                    key={idx}
                    className="rounded-lg bg-[#36393f] p-4 shadow-inner"
                >
                    <h3
                        className="mb-2 text-sm font-semibold"
                        style={{ color: '#ce47bc' }}
                    >
                        {section.title}
                    </h3>
                    <div className="text-sm text-gray-300">
                        {section.content}
                    </div>
                </div>
            ))}
            <div className="mt-auto text-center text-xs text-gray-500">
                © 2025 Supernova Webcup
            </div>
        </aside>
    );
}
