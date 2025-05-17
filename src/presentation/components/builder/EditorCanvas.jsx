import React from 'react';
import { motion } from 'framer-motion';
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import BuildingBlock from './BuildingBlock';
import { useFarewell } from '../../../context/FarewellContext';

const EditorCanvas = () => {
  const { farewellPage, moveElement } = useFarewell();
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
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

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className={`h-[600px] w-full relative overflow-hidden rounded-2xl shadow-xl border-4 border-white/20 ${farewellPage.background}`}>
        <div className="noisy-bg w-full h-full">
          {farewellPage.elements.map((element) => (
            <BuildingBlock
              key={element.id}
              element={element}
            />
          ))}

          {farewellPage.elements.length === 0 && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center text-white/50 text-center px-8"
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