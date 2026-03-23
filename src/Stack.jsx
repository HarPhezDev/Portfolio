import React from 'react';
import { motion } from 'framer-motion';

import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiGit
} from 'react-icons/si';

const Stack = () => {
  const skills = [
    { id: 1, name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { id: 2, name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { id: 3, name: "Framer Motion", icon: <SiFramer className="text-white" /> },
    { id: 4, name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { id: 5, name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { id: 6, name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
    { id: 7, name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  ];

  return (
    <section id="stack" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-500">Tech Stack</span>
          </h2>
          <div className="h-1.5 w-12 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-[900px] mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ 
                y: -8, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(59, 130, 246, 0.5)" 
              }}
              className="flex flex-col items-center justify-center 
                         w-[160px] h-[160px] md:w-[200px] md:h-[180px]
                         bg-white/5 border border-white/10 rounded-[2rem] 
                         transition-all duration-300 cursor-default"
            >
              <div className="text-5xl mb-4 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {skill.icon}
              </div>
              <span className="text-gray-400 font-semibold text-sm tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stack;