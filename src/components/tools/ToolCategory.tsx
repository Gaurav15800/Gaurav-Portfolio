import React from 'react';
import { motion } from 'motion/react';
import { ToolItem } from './ToolItem';

interface ToolCategoryProps {
  category: string;
  items: { name: string; icon: string }[];
  columns?: number;
}

export const ToolCategory: React.FC<ToolCategoryProps> = ({ category, items, columns = 2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className="bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 shadow-xl h-full"
    >
      <h3 className="text-xs font-bold text-text-main mb-4 tracking-tight flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
        {category}
      </h3>
      <div 
        className="grid gap-1.5"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {items.map((item) => (
          <ToolItem key={item.name} name={item.name} icon={item.icon} />
        ))}
      </div>
    </motion.div>
  );
};
