import React, { useRef, useState } from "react";
import EditorCanvas from "../../../components/builder/EditorCanvas";
import { useFarewell } from "../../../../context/FarewellContext";
import { motion } from "framer-motion";
import { Share2, Palette, Image as ImageIcon, Eye } from "lucide-react";


const MainBuilder = () => {
  const { farewellPage, setBackground } = useFarewell();
  const fileInputRef = useRef(null);
  const [showPreview, setShowPreview] = useState(false);

  
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
    {
      name: "Custom Image",
      value: "custom-image",
      preview: "bg-gray-300 flex items-center justify-center",
    },
  ];

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBackground({ type: "custom-image", url });
    }
  };

  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-4 w-[90vw] h-[90vh] max-w-6xl max-h-[90vh] relative flex flex-col">
            <button
              className="absolute top-4 right-6 text-gray-600 hover:text-black text-3xl z-10"
              onClick={() => setShowPreview(false)}
              aria-label="Close preview"
            >
              ×
            </button>
            <div className="flex-1 overflow-auto bg-gray-100 rounded-lg p-4">
              {/* Pass previewMode to disable editing */}
              <EditorCanvas previewMode />
            </div>
          </div>
        </div>
      )}

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
                          (
                            typeof farewellPage.background === "string"
                              ? farewellPage.background === bg.value
                              : farewellPage.background?.type === bg.value
                          )
                            ? "border border-gradient-to-r from-purple-400 to-blue-400 bg-white/10"
                            : "hover:bg-white/10"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full ${bg.preview}`}>
                          {bg.value === "custom-image" && (
                            <ImageIcon className="w-4 h-4 mx-auto my-auto text-gray-500" />
                          )}
                        </div>
                        <span>{bg.name}</span>
                      </motion.button>
                    ))}
                  </div>
                  {/* Show file input if custom image is selected */}
                  {(farewellPage.background === "custom-image" ||
                    farewellPage.background?.type === "custom-image") && (
                    <div className="mt-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Preview Button */}
            <motion.button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPreview(true)}
            >
              <Eye className="w-4 h-4" />
              Preview
            </motion.button>

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
