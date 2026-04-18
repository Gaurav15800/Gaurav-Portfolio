import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="contact" className="py-16 px-6 relative overflow-hidden bg-bg">
      <div className="bg-glow-blur top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10" />
      
      <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-10 md:p-20 text-center relative z-10 border-border-subtle">
        <h2 className="text-4xl md:text-5xl font-sans font-extrabold mb-4 leading-tight tracking-tighter">
          Let's Build Something <br /> <span className="text-gradient">That Grows.</span>
        </h2>
        <p className="text-text-dim text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          If you’re working on something and thinking about growth, I’d love to hear your ideas and see how we can build it together..
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/qr/DZVGTR4DHFKYN1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal-primary !px-10"
          >
            <MessageCircle className="w-5 h-5" />
            Let's Talk Growth
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:gauravsingh15800@gmail.com"
            className="btn-minimal-outline !px-10 text-white"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/in/gaurav-singh-parihar-a29a251b0/"
            className="btn-minimal-outline !px-10 text-white"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle bg-surface-darker">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-extrabold text-xl tracking-tight text-gradient">
          Gaurav Singh Parihar
        </div>
        
        <div className="text-[0.7rem] text-text-dim font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Gaurav Singh Parihar. Built for organic success.
        </div>

        <div className="flex gap-6 text-text-dim uppercase text-[0.65rem] font-bold tracking-[0.2em]">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Medium</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
