import React from 'react';
import { motion } from 'motion/react';
import { METRICS } from '../data/portfolio';

export function SocialProof() {
  return (
    <div className="py-12 border-y border-border-subtle bg-surface-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl flex flex-col"
            >
              <span className="text-[0.75rem] text-text-dim uppercase tracking-widest font-bold mb-3">{item.label}</span>
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
