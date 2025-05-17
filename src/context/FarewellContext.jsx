import React, { createContext, useContext, useState } from "react";

const FarewellContext = createContext(null);

export const FarewellProvider = ({ children }) => {
  const defaultState = {
    id: "temp-" + Date.now().toString(),
    tone: null,
    elements: [],
    background: "dramatic-bg",
    music: undefined,
  };

  const [farewellPage, setFarewellPage] = useState(defaultState);

  const getDefaultTextForTone = (tone) => {
    switch (tone) {
      case "dramatic":
        return "As the curtain falls on this digital chapter, I bid thee farewell...";
      case "ironic":
        return "Oh no... anyway";
      case "cringe":
        return "OMG can't believe I'm actually leaving!! 😭😭😭";
      case "classy":
        return "With gratitude for our time together, I take my leave.";
      case "absurd":
        return "I have been ABDUCTED by ALIEN DUCKS and must depart this DIMENSION!!!";
      default:
        return "Farewell, my friends...";
    }
  };

  const getDefaultFontForTone = (tone) => {
    switch (tone) {
      case "dramatic":
        return "handwritten";
      case "ironic":
        return "retro-font";
      case "cringe":
        return "comic-sans";
      case "classy":
        return "handwritten";
      case "absurd":
        return "pixel-font";
      default:
        return "retro-font";
    }
  };

  const setTone = (tone) => {
    setFarewellPage((prev) => {
      let background = prev.background;

      if (tone === "dramatic") background = "dramatic-bg";
      if (tone === "ironic") background = "ironic-bg";
      if (tone === "cringe") background = "cringe-bg";
      if (tone === "classy") background = "classy-bg";
      if (tone === "absurd") background = "absurd-bg";

      return {
        ...prev,
        tone,
        background,
        elements: [
          ...prev.elements,
          {
            id: "default-text-" + Date.now(),
            type: "text",
            content: getDefaultTextForTone(tone),
            style: {
              font: getDefaultFontForTone(tone),
              size: "2xl",
              color: "white",
            },
            position: { x: 50, y: 50 },
          },
        ],
      };
    });
  };

  const addElement = (element) => {
    const newElement = {
      ...element,
      id: `${element.type}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    };

    setFarewellPage((prev) => ({
      ...prev,
      elements: [...prev.elements, newElement],
    }));
    
    // For debugging
    if (element.type === 'image') {
      console.log('Image added:', newElement);
    }
  };

  const updateElement = (id, updates) => {
    setFarewellPage((prev) => ({
      ...prev,
      elements: prev.elements.map((el) =>
        el.id === id ? { ...el, ...updates } : el
      ),
    }));
  };

  const removeElement = (id) => {
    setFarewellPage((prev) => ({
      ...prev,
      elements: prev.elements.filter((el) => el.id !== id),
    }));
  };

  const setBackground = (background) => {
    setFarewellPage((prev) => ({ ...prev, background }));
  };

  const setMusic = (music) => {
    setFarewellPage((prev) => ({ ...prev, music }));
  };

  const moveElement = (id, position) => {
    setFarewellPage((prev) => ({
      ...prev,
      elements: prev.elements.map((el) =>
        el.id === id ? { ...el, position } : el
      ),
    }));
  };

  const resetPage = () => {
    setFarewellPage(defaultState);
  };

  return (
    <FarewellContext.Provider
      value={{
        farewellPage,
        setTone,
        addElement,
        updateElement,
        removeElement,
        setBackground,
        setMusic,
        moveElement,
        resetPage,
      }}
    >
      {children}
    </FarewellContext.Provider>
  );
};

export const useFarewell = () => {
  const context = useContext(FarewellContext);
  if (!context) {
    throw new Error("useFarewell must be used within a FarewellProvider");
  }
  return context;
};