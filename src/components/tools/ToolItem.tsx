import React from 'react';
import { motion } from 'motion/react';

interface ToolItemProps {
  name: string;
  icon: string;
}

export const ToolItem: React.FC<ToolItemProps> = ({ name, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/5 border border-white/5 transition-all cursor-default group whitespace-nowrap overflow-hidden"
    >
      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center overflow-hidden">
        <img 
          src={icon} 
          alt={name} 
          className="w-full h-full object-contain filter group-hover:brightness-125 transition-all"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-[0.65rem] md:text-[0.7rem] font-medium text-text-dim group-hover:text-text-main transition-colors truncate">
        {name}
      </span>
    </motion.div>
  );
};
