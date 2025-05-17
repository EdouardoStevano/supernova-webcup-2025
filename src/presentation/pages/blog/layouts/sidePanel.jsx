import React from "react";

const sideBarData = [
  {
    title: "À propos de The ENDPAGE",
    content: "Bienvenue sur The End Pages ! Ici, nous partageons nos hummeur .",
  },
  {
    title: "Catégories",
    content: (
      <ul className="ml-3 list-disc text-sm text-gray-300">
        <li>THe end Pages</li>
        <li>Toutes</li>
      </ul>
    ),
  },
  {
    title: "Réseaux sociaux",
    content: (
      <div className="flex gap-3 mt-1">
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
      className="fixed right-0 top-0 h-full w-72 bg-[#2f3136] border-l border-[#23272a] shadow-lg flex flex-col p-5 gap-6 z-40"
      style={{ minWidth: 260 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <h2 className="text-lg font-bold text-white tracking-wide">
          The ENDPAGE
        </h2>
      </div>
      {sideBarData.map((section, idx) => (
        <div key={idx} className="bg-[#36393f] rounded-lg p-4 shadow-inner">
          <h3
            className="font-semibold text-sm mb-2"
            style={{ color: "#ce47bc" }}
          >
            {section.title}
          </h3>
          <div className="text-gray-300 text-sm">{section.content}</div>
        </div>
      ))}
      <div className="mt-auto text-xs text-gray-500 text-center">
        © 2025 Supernova Webcup
      </div>
    </aside>
  );
}
