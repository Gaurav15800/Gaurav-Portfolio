import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Award } from 'lucide-react';
import { INTERPERSONAL, CERTIFICATIONS } from '../data/portfolio';

export function AdditionalDetails() {
  return (
    <section className="py-16 px-6 bg-surface-darker">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Interpersonal Skills */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6 animate-pulse">
            <Handshake className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-4 tracking-tight text-center">Interpersonal Skills</h2>
          <p className="text-text-dim max-w-2xl text-center mb-10 text-sm md:text-base">
            Soft skills that complement my technical expertise and drive successful collaborations
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {INTERPERSONAL.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#1e293b]/30 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:bg-[#1e293b]/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-7 h-7" />
                </div>
                <h4 className="text-[0.85rem] font-bold text-text-main tracking-tight">{skill.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-4xl font-sans font-extrabold mb-4 tracking-tight">Industry Certifications</h3>
          <p className="text-text-dim max-w-2xl mb-12">Professional certifications that validate my expertise and commitment to continuous learning</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col gap-6 group hover:border-secondary/50 transition-all border-border-subtle"
              >
                <div className="flex items-start justify-between">
                  <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-[0.7rem] text-text-dim font-bold uppercase tracking-widest">{cert.issuer}</div>
                    <div className="text-[0.6rem] text-secondary font-bold tracking-widest mt-1">{cert.year}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-text-main tracking-tight mb-3">{cert.title}</h4>
                  <p className="text-text-dim text-sm leading-relaxed mb-2 line-clamp-3">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
