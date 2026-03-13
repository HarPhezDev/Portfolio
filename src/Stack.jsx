import React from 'react';
import { motion } from 'framer-motion';

import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit

} from 'react-icons/si';

const Stack = () => {
  const skills = [
    { id: 1, name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { id: 2, name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { id: 3, name: "Framer Motion", icon: <SiFramer className="text-white" /> },
    { id: 4, name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { id: 5, name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { id: 6, name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { id: 7, name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  ];

  return (
    <section id="stack" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-500">Tech Stack</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-colors"
            >
              <div className="text-5xl mb-4">
                {skill.icon}
              </div>
              <span className="text-gray-400 font-medium text-sm tracking-wide">
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