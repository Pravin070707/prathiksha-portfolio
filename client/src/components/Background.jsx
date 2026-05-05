import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Noise Grain */}
      <div className="noise-overlay" />

      {/* Floating Orbs with Parallax */}
      <motion.div 
        className="bg-orb orb-1"
        animate={{ 
          x: mousePos.x * 0.5, 
          y: mousePos.y * 0.5 
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />
      <motion.div 
        className="bg-orb orb-2"
        animate={{ 
          x: mousePos.x * -0.8, 
          y: mousePos.y * -0.8 
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />
      <motion.div 
        className="bg-orb orb-3"
        animate={{ 
          x: mousePos.x * 0.3, 
          y: mousePos.y * 0.3 
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />

      {/* Particle Field */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
