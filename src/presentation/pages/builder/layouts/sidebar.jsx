import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Type,
  Image,
  Smile,
  Music,
  Palette,
  ChevronDown,
  Sparkles,
  GripHorizontal,
  Upload,
} from "lucide-react";

import { useFarewell } from "../../../../context/FarewellContext";

const SidebarBuilder = () => {
  const [activeCategory, setActiveCategory] = useState("text");
  const { farewellPage, addElement } = useFarewell();
  const fileInputRef = useRef(null);

  //effects

  const categories = [
    {
      id: "text",
      name: "Text",
      icon: <Type className="w-5 h-5" />,
      items: [
        { content: "Dramatic Text", style: { font: "typographie-dramatic" } },
        { content: "Retro Text", style: { font: "typographie-retro" } },
        { content: "Pixel Text", style: { font: "typographie-pixel" } },
        { content: "Comic Text", style: { font: "typographie-comic" } },
      ],
    },
    {
      id: "images",
      name: "Images",
      icon: <Image className="w-5 h-5" />,
      isUploadSection: true,
    },
    {
      id: "gifs",
      name: "GIFs",
      icon: <Image className="w-5 h-5" />,
      items: [
        {
          content: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
          type: "gif",
        },
        {
          content: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
          type: "gif",
        },
        {
          content: "https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif",
          type: "gif",
        },
        {
          content: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
          type: "gif",
        },
        {
          content:
            "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE3eGYzdHh3bHdrbGt3eWxicWttbmo3ZW94eDd3YTlqeDcxeWh6ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZxomYqy9uGtSQSSjth/giphy.gif",
          type: "gif",
        },
        {
          content:
            "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWl0NzFkMmtuNzJxdHRvNDY4MWxibnVueWg0bXJvd3R0MDQ1bXl3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2SpRA8mHlDJjuh7G/giphy.gif",
          type: "gif",
        },
        {
          content:
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRhcWx6d3drZWdrcnBnemtkemcycTY1Y2F0bWhnYjNtdjh1MWNiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mlE7uhX8KFgEmY/giphy.gif",
          type: "gif",
        },
      ],
    },
    {
      id: "stickers",
      name: "Stickers",
      icon: <Sparkles className="w-5 h-5" />,
      items: [
        { content: "⭐", type: "sticker" },
        { content: "💫", type: "sticker" },
        { content: "✨", type: "sticker" },
        { content: "🌟", type: "sticker" },
      ],
    },
    {
      id: "emojis",
      name: "Emojis",
      icon: <Smile className="w-5 h-5" />,
      items: [
        { content: "😭", type: "emoji" },
        { content: "👋", type: "emoji" },
        { content: "💔", type: "emoji" },
        { content: "🥺", type: "emoji" },
      ],
    },
    {
      id: "music",
      name: "Music",
      icon: <Music className="w-5 h-5" />,
      items: [{ content: "🎵 Coming soon...", disabled: true }],
    },
    {
      id: "effects",
      name: "Funny Effects",
      icon: <Palette className="w-5 h-5" />,
      items: [
        { content: "😭 Animated Tears", type: "effect", effect: "tears" },
        { content: "✨ Sparkles", type: "effect", effect: "sparkles" },
        { content: "🤡 Cringe Filter", type: "effect", effect: "cringe" },
        { content: "💧 Dramatic Cry", type: "effect", effect: "cry" },
      ],
    },
  ];

  const handleDragStart = (item, category) => {
    if (category.id === "effects" && item.effect) {
      addElement({
        type: "effect",
        effect: item.effect,
        position: { x: 300, y: 200 },
        size: { width: 120, height: 120 },
      });
      return;
    }
    const element = {
      type: category.id === "text" ? "text" : item.type || category.id,
      content: item.content,
      style: item.style || {},
      position: { x: 100, y: 100 },
    };
    addElement(element);
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files?.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        const element = {
          type: "image",
          content: imageUrl,
          style: {},
          position: { x: 100, y: 100 },
        };
        addElement(element);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="w-[320px] h-[calc(100vh-2rem)] m-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/80 to-slate-900/90 backdrop-blur-xl"
      style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <GripHorizontal className="w-5 h-5 text-teal-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
            Elements
          </span>
        </h2>
      </div>

      <div className="h-full overflow-y-auto p-4 custom-scrollbar">
        <AnimatePresence>
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <motion.button
                className={`w-full flex items-center justify-between p-3 rounded-lg text-white ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-white/10"
                    : "hover:bg-white/5"
                } transition-all duration-200`}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.id ? null : category.id
                  )
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`${
                      activeCategory === category.id
                        ? "text-teal-400"
                        : "text-slate-400"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <span
                    className={`${
                      activeCategory === category.id
                        ? "text-white"
                        : "text-slate-300"
                    }`}
                  >
                    {category.name}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeCategory === category.id
                      ? "rotate-180 text-teal-400"
                      : "text-slate-400"
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 grid grid-cols-2 gap-2"
                  >
                    {category.isUploadSection ? (
                      <div className="col-span-2">
                        <motion.div
                          className="p-4 rounded-lg cursor-pointer border-2 border-dashed border-teal-500/30 hover:border-teal-400/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 transition-all duration-200 flex flex-col items-center justify-center gap-3"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleUploadClick}
                        >
                          <Upload className="w-8 h-8 text-teal-400" />
                          <div className="text-center">
                            <p className="font-medium text-white">
                              Upload an image
                            </p>
                            <p className="text-sm text-slate-400">
                              PNG, JPG, GIF up to 5MB
                            </p>
                          </div>
                          <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </motion.div>
                      </div>
                    ) : (
                      category.items?.map((item, index) => (
                        <motion.div
                          key={index}
                          className={`p-3 rounded-lg cursor-grab bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/5 hover:border-teal-500/30 transition-all duration-200 ${
                            item.disabled ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          whileHover={!item.disabled ? { scale: 1.05 } : {}}
                          whileTap={!item.disabled ? { scale: 0.95 } : {}}
                          onMouseDown={() =>
                            !item.disabled && handleDragStart(item, category)
                          }
                        >
                          {category.id === "gifs" ? (
                            <img
                              src={item.content}
                              alt="Funny gif"
                              className="rounded-md object-cover w-full h-[80px]"
                            />
                          ) : (
                            <div
                              className={`text-center ${
                                category.id === "text"
                                  ? item.style?.font || ""
                                  : ""
                              } ${item.disabled ? "text-slate-500" : "text-white"}`}
                            >
                              {item.content}
                            </div>
                          )}
                        </motion.div>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SidebarBuilder;
