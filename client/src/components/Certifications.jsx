import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      title: "UI & UX Unplugged",
      date: "Feb 2025",
      provider: "Monz Creative School",
      desc: "Comprehensive certification covering user research, wireframing, high-fidelity prototyping, and design systems."
    },
    {
      title: "Embedded System Workshop",
      date: "Dec 2025",
      provider: "Pumo Technovation",
      desc: "Attended hands-on workshop based on PLC and industrial automation, bridging ECE background with tech applications."
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-syne font-bold mb-20 text-center">Milestones</h2>
        
        <div className="relative border-l-2 border-accent/20 ml-4 md:ml-0 md:left-1/2">
          {certs.map((cert, index) => (
            <div key={cert.title} className={`mb-16 relative ${index % 2 === 0 ? 'md:-translate-x-full md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute w-6 h-6 bg-accent rounded-full -left-[13px] md:left-auto md:right-[-13px] top-0 border-4 border-bg shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                style={index % 2 !== 0 ? { left: '-13px' } : {}}
              />
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="glass p-8 rounded-3xl"
              >
                <span className="text-accent font-bold text-sm tracking-widest uppercase mb-2 block">{cert.date}</span>
                <h3 className="text-2xl font-syne font-bold mb-2">{cert.title}</h3>
                <p className="text-accent2 font-medium mb-4">{cert.provider}</p>
                <p className="text-muted leading-relaxed">{cert.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
