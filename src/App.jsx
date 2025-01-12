import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resume from './components/Resume'
import About from './components/About'
import Contact from './components/Contact'
const App = () => {
 const [activeLink, setActiveLink] = useState("resume");
  return (
    
    <div>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink}/>
      <div className='lg:flex lg:h-screen'>
      <Hero activeLink={activeLink} setActiveLink={setActiveLink}/>
      <Resume activeLink={activeLink} setActiveLink={setActiveLink}/>
      <About activeLink={activeLink} setActiveLink={setActiveLink}/>
      <Contact activeLink={activeLink} setActiveLink={setActiveLink}/>
      </div>
    </div>
  )
}

export default App
