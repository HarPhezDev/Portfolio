import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Background from './Background.jsx'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Stack from './Stack.jsx'
import Services from './Services.jsx'
import Contact from './Contact.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="relative min-h-screen text-white">
      <Background /> 
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Project />
      <Services />
      <Contact />
    </div>
  </StrictMode>,
)
