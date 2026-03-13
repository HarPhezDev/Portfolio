import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-[1200px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Let’s Build <span className="text-blue-500">Together</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          I'm currently looking for new opportunities and collaborations. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:olundegunabdulhafeez@gmail.com" 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            <FiMail size={20} /> Say Hello
          </a>

          <a 
            href="/path-to-your-cv.pdf" 
            target="_blank"
            rel="noopener noreferrer" // Added for security on external links
            className="flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            Download CV
          </a>
        </div>

        {/* Social Links Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-center gap-8 text-gray-400">
           <a 
            href="https://github.com/harphezdev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
           >
            <FiGithub size={24}/>
           </a>
           <a 
            href="https://www.linkedin.com/in/olundegun-abdulhafeez-2a4969220/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
           >
            <FiLinkedin size={24}/>
           </a>
        </div>
      </motion.div>
      
      <footer className="mt-12 text-center text-gray-600 text-sm">
        © 2026 OLOLADE. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;