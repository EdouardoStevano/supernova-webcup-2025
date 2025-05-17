import React from "react";
import { motion } from "framer-motion";
import { X, GripVertical } from "lucide-react";
import { useFarewell } from "../../../context/FarewellContext";
import { useDraggable } from "@dnd-kit/core";

const BuildingBlock = ({ element }) => {
  const { removeElement, updateElement } = useFarewell();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editContent, setEditContent] = React.useState(element.content || "");

  // Use dnd-kit's useDraggable hook
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: element.id,
  });

  const handleContentClick = () => {
    if (element.type === "text") {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    updateElement(element.id, { content: editContent });
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
  };

  const renderContent = () => {
    switch (element.type) {
      case "text":
        return isEditing ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className={`w-full bg-transparent text-white border-none outline-none resize-none ${element.style?.font || ""}`}
            style={{ color: element.style?.color }}
            rows={2}
          />
        ) : (
          <p
            onClick={handleContentClick}
            className={`cursor-text whitespace-pre-wrap ${element.style?.font || ""}`}
            style={{ color: element.style?.color }}
          >
            {element.content}
          </p>
        );
      case "image":
        return (
          <img
            src={element.content}
            alt="User uploaded image"
            className="max-w-full h-auto rounded-lg"
            style={{
              filter: element.style?.filter,
              maxHeight: "200px",
            }}
          />
        );
      case "gif":
        return (
          <img
            src={element.content}
            alt="GIF"
            className="max-w-full h-auto rounded-lg"
            style={{
              filter: element.style?.filter,
              maxHeight: "150px",
              maxWidth: "200px",
            }}
          />
        );
      case "sticker":
        return (
          <div className="text-6xl" style={{ filter: element.style?.filter }}>
            {element.content}
          </div>
        );
      case "emoji":
        return <div className="text-4xl">{element.content}</div>;
      case "effect":
        let effectClass = "";
        switch (element.effect) {
          case "tears":
            effectClass = "effect-block animate-tears";
            break;
          case "sparkles":
            effectClass = "effect-block animate-sparkles";
            break;
          case "cringe":
            effectClass = "effect-block animate-cringe";
            break;
          case "cry":
            effectClass = "effect-block animate-cry";
            break;
          default:
            effectClass = "effect-block";
        }
        return (
          <div
            className={effectClass}
            style={{
              width: element.size?.width || 120,
              height: element.size?.height || 120,
            }}
          />
        );
      default:
        return null;
    }
  };

  // Adjust container width based on element type
  const getContainerClasses = () => {
    let baseClasses = "min-w-[100px] min-h-[40px] p-4 ";

    if (element.type === "image" || element.type === "gif") {
      return `${baseClasses} flex items-center justify-center`;
    }

    return baseClasses;
  };

  // ❌ REMOVE this early return for effects!
  // if (element.type === "effect") { ... }

  return (
    <motion.div
      ref={setNodeRef}
      className="absolute group cursor-grab z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      style={{
        left: element.position.x,
        top: element.position.y,
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      {...attributes}
    >
      <div className="relative">
        {/* Remove button */}
        <div
          className="opacity-0 group-hover:opacity-100 absolute -top-3 -right-3 bg-red-500 text-white p-1 rounded-full cursor-pointer transition-opacity duration-200"
          onClick={() => removeElement(element.id)}
        >
          <X size={14} />
        </div>

        {/* Drag indicator */}
        <div
          className="opacity-0 group-hover:opacity-100 absolute -top-3 -left-3 bg-gray-800 text-white p-1 rounded-full"
          {...listeners}
        >
          <GripVertical size={14} />
        </div>

        {/* Content */}
        <div className={getContainerClasses()}>{renderContent()}</div>
      </div>
    </motion.div>
  );
};

export default BuildingBlock;