import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { SKILLS } from '../data/portfolio';

export function Skills() {
  return (
    <section id="expertise" className="py-16 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-14">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6 animate-pulse">
            <Zap className="w-10 h-10 fill-primary/20" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-4 tracking-tight text-center">Core Capabilities</h2>
          <p className="text-text-dim max-w-2xl text-center text-sm md:text-base leading-relaxed">
            Leveraging years of experience in digital marketing to deliver exceptional results through data-driven action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.core.map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#1e293b]/30 border border-white/5 rounded-[2rem] p-8 group hover:bg-[#1e293b]/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-text-main tracking-tight leading-tight">
                  {skill.title}
                </h4>
              </div>
              
              <p className="text-text-dim text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
