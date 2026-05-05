import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiPenTool as Palette, 
  FiMonitor as Monitor, 
  FiSmartphone as Smartphone, 
  FiLayers as Layers, 
  FiCamera as Camera, 
  FiPrinter as Printer, 
  FiZap as Zap 
} from 'react-icons/fi';

const DesignWorks = () => {
  const designs = [
    { label: "Logo Designs", icon: <Zap className="text-yellow-400" /> },
    { label: "Screen Designs", icon: <Monitor className="text-blue-400" /> },
    { label: "Branding", icon: <Palette className="text-purple-400" /> },
    { label: "Photo Editing", icon: <Camera className="text-green-400" /> },
    { label: "Website Designs", icon: <Layers className="text-pink-400" /> },
    { label: "App Designs", icon: <Smartphone className="text-cyan-400" /> },
    { label: "Printing Designs", icon: <Printer className="text-orange-400" /> },
  ];

  return (
    <section className="py-32 px-6 bg-surface/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-syne font-bold mb-16 text-center">Design Specializations</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {designs.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center cursor-default group"
            >
              <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
              
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignWorks;
