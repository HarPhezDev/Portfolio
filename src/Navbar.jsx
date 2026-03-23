import React, { useState } from 'react'
import image from './img/logo.png' 

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        
        <nav className="navbar-hero-bg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl text-white h-auto md:h-20 w-[92%] md:w-full max-w-7xl px-5 mx-auto mt-6 md:mt-10 transition-all duration-500">

            <div className='flex justify-between items-center h-20'>
                <div className='flex items-center gap-3 transition-transform duration-300 hover:scale-105'>
                    <img className='w-15 h-10 object-contain' src={image} alt="Logo" />
                    <p className='text-white text-xl md:text-2xl font-medium uppercase'>LOLADE TECH</p>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-5 justify-between cursor-pointer'>
                    <li className='hover:text-blue-600 transition-colors duration-300 cursor-pointer'><a href="/">Home</a></li>
                    <li className='hover:text-blue-600 transition-colors duration-300 cursor-pointer'><a href="#about">About</a></li>
                    <li className='hover:text-blue-600 transition-colors duration-300 cursor-pointer'><a href="#stack">Stack</a></li>
                    <li className='hover:text-blue-600 transition-colors duration-300 cursor-pointer'><a href="#projects">Projects</a></li>
                    <li className='hover:text-blue-600 transition-colors duration-300 cursor-pointer'><a href="#services">Services</a></li>
                    <li className='hover:text-blue-600 transition-colors duration-300 cursor-pointer'><a href="#contact">Contact</a></li>
                </ul>

                {/* Button */}
                <div className='hidden md:flex bg-blue-700 h-11 px-5 rounded-2xl items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-blue-800'>
                    <h1 className='text-white text-xl cursor-pointer'>HIRE ME</h1>
                </div>

                {/* Hamburger*/}
                <div
                    className='md:hidden cursor-pointer text-2xl transition-transform duration-300 hover:rotate-90'
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <div className='flex flex-col gap-4 pb-4 px-2 border-t border-white/10 pt-4'>
                    <a href="/" className='hover:text-blue-600 transition-colors duration-300' onClick={() => setOpen(false)}>Home</a>
                    <a href="#about" className='hover:text-blue-600 transition-colors duration-300' onClick={() => setOpen(false)}>About</a>
                    <a href="#stack" className='hover:text-blue-600 transition-colors duration-300' onClick={() => setOpen(false)}>Stack</a>
                    <a href="#projects" className='hover:text-blue-600 transition-colors duration-300' onClick={() => setOpen(false)}>Projects</a>
                    <a href="#contact" className='hover:text-blue-600 transition-colors duration-300' onClick={() => setOpen(false)}>Contact</a>

                    <div className='bg-blue-700 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-blue-800'>
                        <h1 className='text-white text-xl cursor-pointer'>HIRE ME</h1>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar