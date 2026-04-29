import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Trophy, Users, MessageCircle, FileDown } from 'lucide-react';
import { HERO_DATA } from '../data/portfolio';

const ROLE_DUR = 3000;

export function Hero() {
  const [roleIdx, setRoleIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % HERO_DATA.roles.length);
    }, ROLE_DUR);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-20 pb-6 px-12 overflow-hidden min-h-[70vh] flex items-center">
      {/* Background blobs */}
      <div className="bg-glow-blur top-[-100px] right-[-100px] w-[400px] h-[400px] bg-primary/15" />
      <div className="bg-glow-blur bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-secondary/10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-section"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[0.75rem] font-bold uppercase tracking-widest mb-6">
            Strategic Growth Marketer
          </div>

          <h1 className="text-5xl md:text-[4rem] font-sans font-extrabold leading-[1.05] tracking-tighter mb-8">
            I Build Strategies That <br /> <span className="text-primary italic">Drive Organic Growth.</span>
          </h1>

          <div className="h-10 mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl md:text-2xl font-medium text-text-dim"
              >
                {HERO_DATA.roles[roleIdx]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-lg text-text-dim max-w-lg mb-12 leading-relaxed">
            {HERO_DATA.subtext}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/qr/DZVGTR4DHFKYN1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-minimal-primary group"
            >
              Let's Talk Growth
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1WbfIuB8-jeDDhmHjSWPYd5Wu_KaOTie4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-minimal-outline group"
            >
              Download CV
              <FileDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-[340px] h-[340px] rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
            <div className="w-[300px] h-[300px] rounded-full border-4 border-primary/20 shadow-[0_0_60px_rgba(14,165,233,0.15)] overflow-hidden relative bg-bg">
              <img 
                src="https://lh3.googleusercontent.com/u/0/d/1YALzkN9EItDb6gGQXXH0HrJm8VK0_OaJ"
                alt="Gaurav Singh Parihar"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-5 -right-2 z-20 glass-card p-3 px-4 rounded-2xl border-border-subtle"
            >
              <span className="block text-[0.65rem] text-text-dim uppercase font-bold mb-1">Experience</span>
              <span className="text-lg font-extrabold text-primary tracking-tight">5+ Years</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 -left-8 z-20 glass-card p-3 px-4 rounded-2xl border-border-subtle"
            >
              <span className="block text-[0.65rem] text-text-dim uppercase font-bold mb-1">Growth Driven</span>
              <span className="text-lg font-extrabold text-primary tracking-tight">10+ Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
