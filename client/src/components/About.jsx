import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating Gradient Border */}
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent bg-gradient-to-tr from-accent to-accent2 animate-[spin_10s_linear_infinite]" style={{ maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '3px' }} />
              
              {/* Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-surface p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-card flex items-center justify-center overflow-hidden">
                   {/* Placeholder for portrait */}
                   <img 
                    src="/profile.jpeg" 
                    alt="Prathiksha B" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                   />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 -right-4 glass px-6 py-3 rounded-2xl"
              >
                <p className="text-sm font-bold">Based in TN, India</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-syne font-bold mb-8">
              Designing with <span className="text-accent">Purpose</span>
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                I'm a UI/UX Designer pursuing B.E-ECE at Hindusthan College of Engineering and Technology, Coimbatore, while simultaneously completing a Certificate in UX/UI at Monz Creative School.
              </p>
              <p>
                I specialize in wireframing, prototyping, and crafting clean, functional interfaces that feel natural to use. My approach blends technical precision with creative empathy to solve complex problems through design.
              </p>
              <p>
                Whether it's a mobile app or a complex web ecosystem, my goal is always the same: to create digital experiences that are not just visually stunning, but fundamentally human-centric.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-accent font-syne font-bold text-2xl">2+</h4>
                <p className="text-sm text-muted">Years of Learning</p>
              </div>
              <div>
                <h4 className="text-accent2 font-syne font-bold text-2xl">15+</h4>
                <p className="text-sm text-muted">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
