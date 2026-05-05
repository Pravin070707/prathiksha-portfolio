import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const phrases = [
    "I design for humans.",
    "I craft digital experiences.",
    "I turn ideas into interfaces."
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    setTypewriterText(phrases[index].substring(0, subIndex));
  }, [subIndex, index]);

  const name = "Prathiksha B";
  const letters = Array.from(name);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden text-5xl md:text-8xl font-syne font-bold mb-4"
      >
        <span className="mr-4">Hi, I'm</span>
        <div className="flex">
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-muted text-lg md:text-2xl mb-8 font-medium"
      >
        UI/UX Designer · Visual Storyteller · Digital Creator
      </motion.p>

      <div className="h-12 mb-12">
        <p className="text-accent text-xl md:text-3xl font-syne italic">
          {typewriterText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <button className="shimmer-btn bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
          View My Work
        </button>
        <button className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all">
          Download Resume
        </button>
      </motion.div>

      {/* Floating Mockup Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-[-100px] md:bottom-[-200px] w-full max-w-4xl opacity-40 pointer-events-none"
      >
        <div className="glass aspect-video rounded-3xl p-4 shadow-2xl">
          <div className="bg-surface w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
                <div className="bg-accent/20 rounded-xl overflow-hidden relative group/item">
                   <img src="https://i.pinimg.com/originals/44/76/81/4476816035659850117498020a599b50.gif" className="w-full h-full object-cover opacity-60 transition-opacity group-hover/item:opacity-100" alt="UI Design" />
                </div>
                <div className="bg-accent2/20 rounded-xl overflow-hidden relative group/item">
                   <img src="https://i.pinimg.com/originals/e8/ad/01/e8ad01061c28c894819d45a95b871c53.gif" className="w-full h-full object-cover opacity-60 transition-opacity group-hover/item:opacity-100" alt="UX Design" />
                </div>
                <div className="bg-indigo-500/20 rounded-xl overflow-hidden relative group/item">
                   <img src="https://i.pinimg.com/originals/60/9a/50/609a50201503ed782161f3a2283e3592.gif" className="w-full h-full object-cover opacity-60 transition-opacity group-hover/item:opacity-100" alt="Prototyping" />
                </div>
                <div className="col-span-2 bg-white/5 rounded-xl overflow-hidden relative group/item">
                   <img src="https://i.pinimg.com/originals/30/0b/40/300b402015a99b45e7f1e78498877592.gif" className="w-full h-full object-cover opacity-40 transition-opacity group-hover/item:opacity-80" alt="Mobile App" />
                </div>
                <div className="bg-accent/20 rounded-xl overflow-hidden relative group/item">
                   <img src="https://cdn.dribbble.com/users/1240533/screenshots/15462529/media/014f33b1e065538e7f1d4319409893d5.gif" className="w-full h-full object-cover opacity-60 transition-opacity group-hover/item:opacity-100" alt="Interface" />
                </div>
              </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
