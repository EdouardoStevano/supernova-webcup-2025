import React from 'react';
import { motion } from 'framer-motion';
import { X, GripVertical, MoveDiagonal } from 'lucide-react';
import { useFarewell } from '../../../context/FarewellContext';
import { useDraggable } from '@dnd-kit/core';

const MIN_WIDTH = 40;
const MIN_HEIGHT = 40;

const BuildingBlock = ({ element, selected, onSelect }) => {
    const { removeElement, updateElement } = useFarewell();
    const [isEditing, setIsEditing] = React.useState(false);
    const [editContent, setEditContent] = React.useState(element.content || '');
    const [resizing, setResizing] = React.useState(false);

    // Use dnd-kit's useDraggable hook
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: element.id,
    });

    // --- Resize logic ---
    const startResize = (e) => {
        e.stopPropagation();
        setResizing(true);
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = element.size?.width || 120;
        const startHeight = element.size?.height || 120;

        const onMouseMove = (moveEvent) => {
            const newWidth = Math.max(
                MIN_WIDTH,
                startWidth + (moveEvent.clientX - startX)
            );
            const newHeight = Math.max(
                MIN_HEIGHT,
                startHeight + (moveEvent.clientY - startY)
            );
            updateElement(element.id, {
                size: { width: newWidth, height: newHeight },
            });
        };

        const onMouseUp = () => {
            setResizing(false);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    };

    // --- Content rendering ---
    const renderContent = () => {
        switch (element.type) {
            case 'text':
                return isEditing ? (
                    <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        onBlur={() => {
                            updateElement(element.id, { content: editContent });
                            setIsEditing(false);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                updateElement(element.id, {
                                    content: editContent,
                                });
                                setIsEditing(false);
                            }
                        }}
                        autoFocus
                        className="w-full resize-none border-none bg-transparent text-white outline-none"
                        style={{
                            fontSize: element.size?.height
                                ? `${Math.max(16, element.size.height / 2.5)}px`
                                : '32px',
                            color: element.style?.color || '#ffffff',
                            fontFamily: element.style?.font,
                            fontWeight: element.style?.fontWeight || 'normal',
                            fontStyle: element.style?.fontStyle || 'normal',
                            textDecoration:
                                element.style?.textDecoration || 'none',
                            minHeight: 32,
                            minWidth: 80,
                            height: '100%',
                            width: '100%',
                        }}
                        rows={2}
                    />
                ) : (
                    <p
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling
                            if (onSelect) onSelect();
                        }}
                        onDoubleClick={() => setIsEditing(true)}
                        className="cursor-text whitespace-pre-wrap"
                        style={{
                            fontSize: element.size?.height
                                ? `${Math.max(16, element.size.height / 2.5)}px`
                                : '32px',
                            color: element.style?.color || '#ffffff',
                            fontFamily: element.style?.font,
                            fontWeight: element.style?.fontWeight || 'normal',
                            fontStyle: element.style?.fontStyle || 'normal',
                            textDecoration:
                                element.style?.textDecoration || 'none',
                            minHeight: 32,
                            minWidth: 80,
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        {element.content}
                    </p>
                );
            case 'image':
            case 'gif':
                return (
                    <img
                        src={element.content}
                        alt={element.type}
                        className="rounded-lg object-contain"
                        style={{
                            width: '100%',
                            height: '100%',
                            filter: element.style?.filter,
                            pointerEvents: 'none',
                        }}
                        draggable={false}
                    />
                );
            case 'sticker':
                return (
                    <div
                        className="flex items-center justify-center text-6xl"
                        style={{
                            filter: element.style?.filter,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        {element.content}
                    </div>
                );
            case 'emoji':
                return (
                    <div
                        className="flex items-center justify-center text-4xl"
                        style={{ width: '100%', height: '100%' }}
                    >
                        {element.content}
                    </div>
                );
            case 'effect':
                let effectClass = '';
                switch (element.effect) {
                    case 'tears':
                        effectClass = 'effect-block animate-tears';
                        break;
                    case 'sparkles':
                        effectClass = 'effect-block animate-sparkles';
                        break;
                    case 'cringe':
                        effectClass = 'effect-block animate-cringe';
                        break;
                    case 'cry':
                        effectClass = 'effect-block animate-cry';
                        break;
                    default:
                        effectClass = 'effect-block';
                }
                return (
                    <div
                        className={effectClass}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                );
            default:
                return null;
        }
    };

    // --- Container classes ---
    const getContainerClasses = () => {
        if (
            element.type === 'image' ||
            element.type === 'gif' ||
            element.type === 'effect' ||
            element.type === 'sticker' ||
            element.type === 'emoji'
        ) {
            return 'w-full h-full flex items-center justify-center';
        }
        return 'w-full h-full';
    };

    // --- Main render ---
    return (
        <motion.div
            ref={setNodeRef}
            className={`group absolute z-10 cursor-grab ${selected ? 'ring-2 ring-blue-400' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            style={{
                left: element.position.x,
                top: element.position.y,
                width: element.size?.width || 120,
                height: element.size?.height || 120,
                minWidth: MIN_WIDTH,
                minHeight: MIN_HEIGHT,
                transform: transform
                    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
                    : undefined,
                userSelect: resizing ? 'none' : undefined,
            }}
            {...attributes}
            onClick={(e) => {
                e.stopPropagation();
                if (onSelect) onSelect();
            }}
        >
            <div className="relative h-full w-full">
                {/* Remove button */}
                <div
                    className="absolute -top-3 -right-3 cursor-pointer rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    onClick={(e) => {
                        e.stopPropagation();
                        removeElement(element.id);
                    }}
                >
                    <X size={14} />
                </div>

                {/* Drag indicator */}
                <div
                    className="absolute -top-3 -left-3 rounded-full bg-gray-800 p-1 text-white opacity-0 group-hover:opacity-100"
                    {...listeners}
                >
                    <GripVertical size={14} />
                </div>

                {/* Content */}
                <div className={getContainerClasses()}>{renderContent()}</div>

                {/* Resize handle */}
                <div
                    className="absolute right-1 bottom-1 z-20 flex h-5 w-5 cursor-se-resize items-center justify-center rounded border border-gray-400 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    onMouseDown={startResize}
                    style={{ touchAction: 'none' }}
                >
                    <MoveDiagonal size={16} className="text-gray-500" />
                </div>
            </div>
        </motion.div>
    );
};

export default BuildingBlock;
