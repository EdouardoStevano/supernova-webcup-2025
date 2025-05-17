import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { X } from "lucide-react";
import BuildingBlock from "./BuildingBlock";
import { useFarewell } from "../../../context/FarewellContext";

const EditorCanvas = () => {
  const { farewellPage, moveElement, updateElement } = useFarewell();
  const [selectedId, setSelectedId] = useState(null);

  // Add keyboard listener to close toolbar with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedId) {
        setSelectedId(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedId]);

  // Configure sensors with better activation constraints
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 8 },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  });
  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragEnd = (event) => {
    const { active, delta } = event;
    const id = active.id;
    const element = farewellPage.elements.find((el) => el.id === id);
    if (element && element.position) {
      const newPosition = {
        x: element.position.x + delta.x,
        y: element.position.y + delta.y,
      };
      moveElement(id, newPosition);
    }
  };

  // Helper to get background style for custom image
  const getBgStyle = () => {
    if (
      typeof farewellPage.background === "object" &&
      farewellPage.background.type === "custom-image"
    ) {
      return {
        backgroundImage: `url(${farewellPage.background.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
    return {};
  };

  // Find the selected element
  const selectedElement = farewellPage.elements.find(
    (el) => el.id === selectedId
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      measuring={{
        droppable: {
          strategy: "always",
        },
      }}
    >
      <div
        className={`h-[80vh] w-full relative overflow-hidden rounded-2xl shadow-xl border-4 border-white/20 ${
          typeof farewellPage.background === "string"
            ? farewellPage.background
            : ""
        }`}
        style={getBgStyle()}
        onMouseDown={(e) => {
          // Only deselect if clicking directly on the canvas or its background child
          if (e.target === e.currentTarget || e.target.classList.contains('noisy-bg')) {
            setSelectedId(null);
          }
        }}
      >
        <div className="noisy-bg w-full h-full">
          {farewellPage.elements.map((element) => (
            <BuildingBlock
              key={element.id}
              element={element}
              selected={selectedId === element.id}
              onSelect={() => setSelectedId(element.id)}
            />
          ))}

          {/* Floating toolbar for selected text element */}
          {selectedElement?.type === "text" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 bg-white rounded-lg shadow-xl border border-gray-200"
              style={{
                left: Math.max(
                  10,
                  Math.min(
                    selectedElement.position.x + (selectedElement.size?.width || 120) / 2 - 150,
                    window.innerWidth - 310
                  )
                ),
                top: Math.max(10, selectedElement.position.y - 60),
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Toolbar Header with Close Button */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Text Formatting</span>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Toolbar Controls */}
              <div className="flex items-center gap-2 p-3">
                {/* Font Family Selector */}
                <select
                  value={selectedElement.style?.font || "Arial"}
                  onChange={(e) =>
                    updateElement(selectedElement.id, {
                      style: {
                        ...(selectedElement.style || {}),
                        font: e.target.value,
                      },
                    })
                  }
                  className="px-2 py-1 bg-gray-50 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white hover:bg-white transition-colors cursor-pointer"
                >
                  <option value="Arial" className="bg-white text-gray-700">Arial</option>
                  <option value="Georgia" className="bg-white text-gray-700">Georgia</option>
                  <option value="Comic Sans MS" className="bg-white text-gray-700">Comic Sans</option>
                  <option value="Impact" className="bg-white text-gray-700">Impact</option>
                  <option value="Helvetica" className="bg-white text-gray-700">Helvetica</option>
                  <option value="Times New Roman" className="bg-white text-gray-700">Times</option>
                </select>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300"></div>

                {/* Color Picker */}
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-600">Color:</span>
                  <input
                    type="color"
                    value={selectedElement.style?.color || "#ffffff"}
                    onChange={(e) =>
                      updateElement(selectedElement.id, {
                        style: {
                          ...(selectedElement.style || {}),
                          color: e.target.value,
                        },
                      })
                    }
                    className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                  />
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300"></div>

                {/* Text Style Buttons */}
                <div className="flex gap-1">
                  {/* Bold */}
                  <button
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm font-bold transition-colors ${
                      selectedElement.style?.fontWeight === "bold" 
                        ? "bg-blue-500 text-white shadow-sm" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() =>
                      updateElement(selectedElement.id, {
                        style: {
                          ...(selectedElement.style || {}),
                          fontWeight:
                            selectedElement.style?.fontWeight === "bold"
                              ? "normal"
                              : "bold",
                        },
                      })
                    }
                  >
                    B
                  </button>

                  {/* Italic */}
                  <button
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm italic transition-colors ${
                      selectedElement.style?.fontStyle === "italic" 
                        ? "bg-blue-500 text-white shadow-sm" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() =>
                      updateElement(selectedElement.id, {
                        style: {
                          ...(selectedElement.style || {}),
                          fontStyle:
                            selectedElement.style?.fontStyle === "italic"
                              ? "normal"
                              : "italic",
                        },
                      })
                    }
                  >
                    I
                  </button>

                  {/* Underline */}
                  <button
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm underline transition-colors ${
                      selectedElement.style?.textDecoration === "underline" 
                        ? "bg-blue-500 text-white shadow-sm" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() =>
                      updateElement(selectedElement.id, {
                        style: {
                          ...(selectedElement.style || {}),
                          textDecoration:
                            selectedElement.style?.textDecoration === "underline"
                              ? "none"
                              : "underline",
                        },
                      })
                    }
                  >
                    U
                  </button>
                </div>
              </div>

              {/* Floating Arrow */}
              <div 
                className="absolute w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"
                style={{
                  bottom: -6,
                  left: '50%',
                  marginLeft: -6,
                }}
              ></div>
            </motion.div>
          )}

          {farewellPage.elements.length === 0 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white/50 text-center px-8 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl text-black">
                Add elements from the sidebar to build your farewell page!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </DndContext>
  );
};

export default EditorCanvas;