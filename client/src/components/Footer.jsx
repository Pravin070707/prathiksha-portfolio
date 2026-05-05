import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin as Linkedin, FiMail as Mail, FiHeart as Heart } from 'react-icons/fi';
import { FaBehance as Behance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.a 
            href="#"
            className="text-2xl font-bold font-syne"
            whileHover={{ scale: 1.05 }}
          >
            PB<span className="text-accent">.</span>
          </motion.a>

          <div className="flex items-center gap-8">
            <motion.a whileHover={{ y: -3, textShadow: "0 0 10px #7c3aed" }} href="https://www.linkedin.com/in/prathiksha21?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-muted hover:text-white transition-colors">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3, textShadow: "0 0 10px #7c3aed" }} href="mailto:prathikshaprathiksha866@gmail.com" className="text-muted hover:text-white transition-colors">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3, textShadow: "0 0 10px #7c3aed" }} href="https://www.behance.net/prathikprathik9" className="text-muted hover:text-white transition-colors">
              <Behance size={20} />
            </motion.a>
          </div>

          <p className="text-muted text-sm text-center md:text-right">
            Designed & crafted by <span className="text-text font-medium">Prathiksha B</span> · 2025
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block ml-2 text-red-500"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span>
          </p>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent2/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
