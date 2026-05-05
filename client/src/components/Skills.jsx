import React from 'react';
import { motion } from 'framer-motion';
import { SiFigma, SiCanva } from 'react-icons/si';
import { 
  TbBrandAdobePhotoshop, 
  TbBrandAdobeIllustrator, 
  TbBrandAdobeXd, 
  TbBrandAdobeIndesign 
} from 'react-icons/tb';

const Skills = () => {
  const skills = [
    { name: 'Figma', icon: <SiFigma size={32} />, duration: '6s', range: '-20px', delay: '0s', rotate: '4deg', color: '#F24E1E' },
    { name: 'Adobe XD', icon: <TbBrandAdobeXd size={32} />, duration: '7s', range: '-15px', delay: '-2s', rotate: '-3deg', color: '#FF61F6' },
    { name: 'Illustrator', icon: <TbBrandAdobeIllustrator size={32} />, duration: '5s', range: '-25px', delay: '-1s', rotate: '2deg', color: '#FF9A00' },
    { name: 'Photoshop', icon: <TbBrandAdobePhotoshop size={32} />, duration: '8s', range: '-18px', delay: '-3s', rotate: '-4deg', color: '#31A8FF' },
    { name: 'Canva', icon: <SiCanva size={32} />, duration: '6.5s', range: '-12px', delay: '-4s', rotate: '3deg', color: '#00C4CC' },
    { name: 'InDesign', icon: <TbBrandAdobeIndesign size={32} />, duration: '7.5s', range: '-22px', delay: '-1.5s', rotate: '-2deg', color: '#FF3366' },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">My Toolkit</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="antigravity group"
              style={{
                '--float-duration': skill.duration,
                '--float-range': skill.range,
                '--float-delay': skill.delay,
                '--rotate-range': skill.rotate,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -10 }}
                className="glass w-32 h-32 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] group-hover:border-accent/50 cursor-pointer"
              >
                <div 
                  className="transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                  style={{ '--hover-color': skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-muted group-hover:text-text">
                  {skill.name}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
