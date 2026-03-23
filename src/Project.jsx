import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Project1 from './img/project-1.jpg';
import Project2 from './img/project-2.jpg';
import Project3 from './img/project-3.jpg';


const Project = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Web",
            desc: "ShopEasy E-Commerce is a full-stack online store built with React and Tailwind CSS, featuring a dynamic shopping experience. Users can browse products, add items to a shopping cart, and explore a visually appealing interface.",
            image: Project1,
            tags: ["React", "Tailwind", "Framer Motion"],
            github: "https://github.com/HarPhezDev/ShopEasy",
            live: "https://shopeasy3.netlify.app/"
        },
        {
            id: 2,
            title: "Easy Currency Converter",
            desc: "Easy Currency Converter is a modern web application that allows users to quickly and accurately convert currencies using live exchange rates from a reliable API. Built with React and Tailwind CSS, the app features a fully responsive design and smooth animations with Framer Motion, providing an intuitive and engaging user experience across all devices. Users can select currencies, view conversion results instantly, and enjoy a visually appealing interface designed for clarity and ease of use.",
            image: Project2,
            tags: ["React", "Tailwind", "API", "Framer Motion"],
            github: "https://github.com/HarPhezDev/Easy-Currency-Converter",
            live: "https://easycurrencyconverter0.netlify.app/"
        },

        {
            id: 3,
            title: "Crypto Dash",
            desc: "Crypto Dash is a modern, interactive cryptocurrency dashboard built with React and TypeScript (TSX), providing real-time market insights and analytics using the CoinGecko Live API. The platform combines strong type safety with dynamic UI components for a smooth and responsive user experience.",
            image: Project3,
            tags: ["TypeScript", "API", "TailwindCss",],
            github: "https://github.com/HarPhezDev/CryptoDash",
            live: "#"
        },

    ];

    return (
        <section id="projects" className='w-full py-12 md:py-24 flex justify-center px-4 md:px-6 bg-[#0a0a0a]'>
            <div className='w-full max-w-[1200px] flex flex-col gap-12'>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-white"
                >
                    <span className='text-blue-500'>PROJECTS</span>
                </motion.h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((proj, index) => (
                        <motion.div
                            key={proj.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col"
                        >
                            <div className='w-full h-[220px] overflow-hidden relative'>
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    src={proj.image}
                                    alt={proj.title}
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60' />
                            </div>

                            <div className='p-6 flex flex-col flex-grow'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {proj.tags.map((tag, i) => (
                                        <span key={`${proj.id}-${tag}-${i}`} className='text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md border border-blue-500/20'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-blue-500 transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {proj.desc}
                                </p>

                                <div className='mt-auto flex items-center gap-6'>
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors'
                                    >
                                        <FiGithub size={18} /> Code
                                    </a>
                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors font-bold'
                                    >
                                        <FiExternalLink size={18} /> Live Site
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project