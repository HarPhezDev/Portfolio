import React from 'react'
import Profile from './img/Profile.png'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

const Hero = () => {
    const name = "OLOLADE.";

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
        },
    };

    return (
        <div className='w-full py-8 md:py-20 flex justify-center px-4 md:px-6 overflow-hidden'>
            <div className='w-full max-w-[1200px] flex flex-col md:flex-row gap-10 items-center justify-between'>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2'
                >
                    <motion.img
                        src={Profile}
                        alt='Ololade Profile'
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className='w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-[60px] md:rounded-[100px] object-cover shadow-2xl border-2 border-white/10'
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className='w-full md:w-1/2 text-center md:text-left order-2 md:order-1'
                >
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                        Hi, I'm{' '}
                        <motion.span
                            style={{ display: "inline-flex" }}
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className='text-blue-500'
                        >
                            {name.split("").map((letter, index) => (
                                <motion.span variants={child} key={`${letter}-${index}`}>
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}

                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-[2px] h-10 md:h-14 bg-blue-500 ml-1 inline-block"
                            />
                        </motion.span>
                    </h1>
                    <p className='text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto md:mx-0'>
                        Passionate Frontend Engineer specializing in React, Typescript and Tailwind CSS.
                        I build responsive, user-centric web applications with a focus on seamless interactivity.
                    </p>

                    <div className='flex justify-center md:justify-start'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg h-12 w-44 rounded-2xl transition-colors shadow-lg'
                            onClick={() => {
                                const projectsSection = document.getElementById("projects");
                                projectsSection?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            VIEW PROJECTS
                        </motion.button>
                    </div>

                    {/* Social Icons */}
                    <div className='flex items-center justify-center md:justify-start gap-6 mt-8'>
                        <motion.a
                            href="https://github.com/harphezdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ scale: 1.2, y: -3 }}
                            className='text-white text-3xl hover:text-gray-400 transition-colors duration-300'
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/olundegun-abdulhafeez-2a4969220/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.2, y: -3 }}
                            className='text-white text-3xl hover:text-[#0077b5] transition-colors duration-300'
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a
                            href="https://x.com/har_phez_dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X (Twitter)"
                            whileHover={{ scale: 1.2, y: -3 }}
                            className='text-white text-3xl hover:text-blue-400 transition-colors duration-300'
                        >
                            <FaXTwitter />
                        </motion.a>

                        <motion.a
                            href="https://wa.me/2348085939242"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            whileHover={{ scale: 1.2, y: -3 }}
                            className='text-white text-3xl hover:text-[#25D366] transition-colors duration-300'
                        >
                            <FaWhatsapp />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero