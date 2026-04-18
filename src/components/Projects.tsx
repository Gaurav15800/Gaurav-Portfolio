import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { PROJECTS, SIDE_PROJECTS } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="pt-8 pb-16 px-6 bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary-500 uppercase tracking-[0.2em] mb-4">Work & Impact</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Real Authority Through <br /> <span className="text-slate-500">Measurable Outcomes.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm">
            I approach every project with a focus on real impact, turning strategy and content into outcomes that drive meaningful business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col glass-card rounded-3xl overflow-hidden hover:border-primary-500/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 backdrop-blur-md rounded-lg text-[0.7rem] font-bold uppercase tracking-wider text-white border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xl font-extrabold text-primary uppercase tracking-widest mb-1.5">{project.role}</div>
                    <div className="text-sm font-bold text-text-dim uppercase tracking-widest mb-5 flex items-center gap-2 opacity-80">
                      <Clock className="w-4 h-4 text-primary/60" />
                      {project.duration}
                    </div>
                    <h4 className="text-4xl font-bold font-sans tracking-tight mb-2">{project.title}</h4>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-xl bg-white/5 hover:bg-primary text-text-dim hover:text-white transition-all border border-border-subtle"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-text-dim text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border-subtle">
                  <div className="text-[0.65rem] text-text-dim uppercase tracking-widest mb-1 font-bold">Key Achievement</div>
                  <div className="text-lg font-extrabold text-primary">{project.achievement}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Projects Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111827]/50 rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-12 font-sans tracking-tight">Side Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIDE_PROJECTS.map((sp, idx) => (
              <div 
                key={idx}
                className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-6 hover:bg-[#1e293b]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 mb-6 text-primary group-hover:scale-110 transition-transform">
                  <sp.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl mb-2 tracking-tight line-clamp-2 min-h-[48px] flex items-center">{sp.title}</h4>
                <p className="text-[0.7rem] text-text-dim leading-relaxed line-clamp-3">
                  {sp.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
