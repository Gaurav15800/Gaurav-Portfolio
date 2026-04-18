import React from 'react';
import { motion } from 'motion/react';
import { PROCESS } from '../data/portfolio';

export function Process() {
  return (
    <section id="process" className="py-16 px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[0.7rem] font-bold text-primary uppercase tracking-[0.2em] mb-4">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-extrabold leading-tight tracking-tight">
            A Battle-Tested Optimization <span className="text-text-dim">Playbook.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="flex flex-col items-center lg:items-start glass-card p-8 rounded-3xl h-full border-border-subtle hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-surface-dark border border-border-subtle flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xl font-bold mb-3 font-sans relative z-10 tracking-tight">{item.title}</h4>
                <p className="text-text-dim text-sm leading-relaxed lg:text-left text-center relative z-10">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
