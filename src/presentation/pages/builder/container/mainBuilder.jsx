import React from "react";
import EditorCanvas from "../../../components/builder/EditorCanvas";
import { useFarewell } from "../../../../context/FarewellContext";
import { motion } from "framer-motion";
import { Share2, Palette } from "lucide-react";

const MainBuilder = () => {
  const { farewellPage, setBackground } = useFarewell();

  const backgrounds = [
    {
      name: "Dramatic",
      value: "dramatic-bg",
      preview: "bg-gradient-to-r from-[#1f1c2c] to-[#928dab]",
    },
    {
      name: "Ironic",
      value: "ironic-bg",
      preview: "bg-gradient-to-r from-[#fceabb] to-[#f8b500]",
    },
    {
      name: "Cringe",
      value: "cringe-bg",
      preview: "bg-gradient-to-r from-[#ff4e50] to-[#f9d423]",
    },
    {
      name: "Classy",
      value: "classy-bg",
      preview: "bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7]",
    },
    {
      name: "Absurd",
      value: "absurd-bg",
      preview: "bg-gradient-to-r from-[#fc466b] via-[#3f5efb] to-[#00c9ff]",
    },
  ];

  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="mb-4 glass-panel p-4 border-purple-500/30">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {farewellPage.tone
              ? `${farewellPage.tone.charAt(0).toUpperCase() + farewellPage.tone.slice(1)} Farewell`
              : "Your Farewell Page"}
          </h2>

          <div className="flex items-center gap-2">
            {/* Background Selector */}
            <div className="relative group">
              <motion.button
                className="flex items-center gap-2 p-2 glass-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Palette className="w-4 h-4" />
                <span>Themes</span>
              </motion.button>

              <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="glass-panel p-2 shadow-xl">
                  <div className="grid grid-cols-1 gap-2">
                    {backgrounds.map((bg) => (
                      <motion.button
                        key={bg.value}
                        onClick={() => setBackground(bg.value)}
                        whileHover={{ scale: 1.03 }}
                        className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                          farewellPage.background === bg.value
                            ? "border border-gradient-to-r from-purple-400 to-blue-400 bg-white/10"
                            : "hover:bg-white/10"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full ${bg.preview}`} />
                        <span>{bg.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <motion.button
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="w-4 h-4" />
              Publish
            </motion.button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto glass-panel p-6 custom-scrollbar">
        <EditorCanvas />
      </div>
    </div>
  );
};

export default MainBuilder;
