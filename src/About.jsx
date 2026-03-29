import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div id="about" className='w-full py-12 md:py-24 flex justify-center px-4 md:px-6 bg-[#0a0a0a]'>
            <div className='w-full max-w-[1200px] flex flex-col gap-10'>

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
                        ABOUT <span className="text-blue-500">ME</span>
                    </h2>
                    <div className="h-[1px] flex-grow bg-blue-500/30"></div>
                </motion.div>
                <div className='flex flex-col md:flex-row gap-12 items-start justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-3/5"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a Frontend Engineer based in Nigeria, driven by the challenge of creating digital experiences that solve real-world human problems.
                            I focus on building tools that are both functionally robust and aesthetically pleasing. What started as a curiosity about how the web works has
                            evolved into a career dedicated to building high-performance,
                            user-centric applications
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            When I'm not coding, I'm exploring new design trends or optimizing
                            my workflow to ensure the cleanest code possible.
                        </p>
                    </motion.div>

               
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/5 bg-white/5 p-8 rounded-3xl border border-white/10"
                    >
                        <h3 className="text-blue-500 font-bold mb-4">CURRENT FOCUS</h3>
                        <ul className="text-gray-300 space-y-3">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">▹</span> Scalable React Architectures
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">▹</span> Micro-interactions with Framer Motion
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">▹</span> Performance Optimization
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">▹</span> Testing & Maintenance
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-500">▹</span> APIs
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default About