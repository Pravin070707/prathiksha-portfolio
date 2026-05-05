import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onFinished }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={onFinished}
      className="fixed inset-0 z-[99999] bg-bg flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-syne font-bold tracking-tighter"
        >
          PB<span className="text-accent">.</span>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute -bottom-4 left-0 h-1 bg-accent"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-muted uppercase tracking-[0.5em] text-[10px] whitespace-nowrap"
        >
          Creative Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
