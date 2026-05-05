import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink as ExternalLink, FiArrowRight as ArrowRight } from 'react-icons/fi';

const Portfolio = () => {
  const projects = [
    {
      title: "Food Bee",
      type: "Mobile App · Food Delivery",
      description: "A mobile UI/UX design for a food delivery app featuring intuitive navigation, real-time order tracking UI, and a warm, appetite-driven visual language.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
      accent: "from-orange-500/20 to-red-500/20",
      link: "https://www.behance.net/gallery/248570421/Food-delivery-mobile-application-_-Foodie-bee"
    },
    {
      title: "Zyra",
      type: "Branding + Web Design",
      description: "A luxury handbag brand identity including logo design, brand style guide, and e-commerce website UI with an elegant, editorial aesthetic.",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
      accent: "from-accent/20 to-accent2/20",
      link: "https://www.behance.net/gallery/248571007/Handbag-_-ZYRA"
    },
    {
      title: "Style Hub",
      type: "Web Design · Fashion Studio",
      description: "A fashion studio website featuring lookbook layout, appointment booking UI, and a bold typographic-led homepage.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      accent: "from-purple-500/20 to-blue-500/20",
      link: "https://www.behance.net/gallery/248571385/Style-Hub-Fashion-Studio-_-Style-Hub"
    }
  ];

  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <p className="text-accent font-bold tracking-widest uppercase mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-syne font-bold">Featured Projects</h2>
          </div>
          <motion.a 
            href="#"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-muted hover:text-text transition-colors mt-6 md:mt-0"
          >
            All Projects <ArrowRight size={20} />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-accent/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} z-10 opacity-60`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white text-bg px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider uppercase mb-4 text-accent2">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
