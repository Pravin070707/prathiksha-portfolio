import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPenTool as Palette, FiSmartphone as Smartphone, FiZap as Zap } from 'react-icons/fi';

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
              <div className="grid grid-cols-3 gap-4 p-8 w-full h-full relative overflow-hidden">
                {/* Floating Icons Animation */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [Math.random() * 200, Math.random() * -200, Math.random() * 200],
                      y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20 + Math.random() * 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute text-accent/20 pointer-events-none z-30"
                    style={{
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 80}%`,
                    }}
                  >
                    {i % 3 === 0 ? <Palette size={24} /> : i % 3 === 1 ? <Smartphone size={24} /> : <Zap size={24} />}
                  </motion.div>
                ))}

                {/* Row 1 */}
                <div className="bg-accent/10 border border-white/5 rounded-xl flex items-center justify-center relative overflow-hidden group/item">
                  <div className="w-1/2 h-1 bg-white/10 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </div>
                <div className="bg-accent2/10 border border-white/5 rounded-xl flex flex-col gap-2 p-4 justify-center">
                  <div className="w-full h-1 bg-white/10 rounded-full" />
                  <div className="w-2/3 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="bg-indigo-500/10 border border-white/5 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-white/10 border-dashed animate-spin-slow" />
                </div>

                {/* Row 2 */}
                <div className="bg-white/5 border border-white/5 rounded-xl flex items-center justify-center">
                   <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/5 rounded-sm" />
                   </div>
                </div>
                <div className="bg-accent/10 border border-white/5 rounded-xl flex items-center justify-center">
                   <div className="flex gap-1">
                      {[1,2,3].map(j => <div key={j} className="w-2 h-2 rounded-full bg-white/10" />)}
                   </div>
                </div>
                <div className="bg-accent2/10 border border-white/5 rounded-xl p-4 flex flex-col justify-end">
                  <div className="w-1/2 h-3 bg-white/5 rounded-full" />
                </div>

                {/* Row 3 */}
                <div className="bg-indigo-500/10 border border-white/5 rounded-xl flex items-center justify-center">
                   <Palette size={20} className="text-white/10" />
                </div>
                <div className="col-span-2 bg-white/5 border border-white/5 rounded-xl p-6 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10" />
                   <div className="flex-1 space-y-2">
                      <div className="w-full h-2 bg-white/10 rounded-full" />
                      <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                   </div>
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
