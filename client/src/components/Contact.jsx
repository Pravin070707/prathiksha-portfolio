import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend as Send, FiCheckCircle as CheckCircle } from 'react-icons/fi';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Pointing to the backend API
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      if (response.status === 201) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8">
              Let's craft something <span className="text-accent">extraordinary</span>.
            </h2>
            <p className="text-muted text-lg mb-12">
              Have a project in mind or just want to say hi? I'm always open to new opportunities and creative collaborations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Send size={20} />
                </div>
                <p className="text-lg">prathikshaprathiksha866@gmail.com</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-muted mb-2 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-muted mb-2 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-muted mb-2 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-text resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-accent hover:bg-accent/80 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shimmer-btn"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>

            {/* Success Overlay */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-bg/90 rounded-[2rem] flex flex-col items-center justify-center text-center p-8 z-20 backdrop-blur-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white mb-6"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-syne font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted">I've received your message and will get back to you soon. ✨</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
