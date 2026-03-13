import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {

  const layers = [
    { count: 15, size: 3, speed: 8, opacity: 0.8 },
    { count: 25, size: 2, speed: 15, opacity: 0.5 },
    { count: 40, size: 1, speed: 25, opacity: 0.3 },
  ];

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[600px] bg-purple-600/25 blur-[130px] rounded-full" />
      <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] bg-blue-500/10 blur-[110px] rounded-full" />

      {layers.map((layer, layerIdx) => (
        <div key={layerIdx} className="absolute inset-0">
          {[...Array(layer.count)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${layer.size}px`,
                height: `${layer.size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: layer.size > 1 ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none',
              }}
              animate={{
               
                x: [0, 150, -150, 0], 
                y: [0, -100, 100, 0],
                opacity: [layer.opacity, 1, layer.opacity],
              }}
              transition={{
                duration: layer.speed + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Background;