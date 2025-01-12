import React, { act, useRef,useState } from 'react'
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";




const Navbar = ({activeLink,setActiveLink}) => {
  
    const typeWriterRef=useRef(null);
    useEffect(()=>{
      if(typeWriterRef.current){
        new Typewriter(typeWriterRef.current, {
            strings: ['Web Designer', 'Web Developer', 'Freelancer'],
            autoStart: true,
            loop:true,
            cursor:' ',
            deleteSpeed:100
          });
      }}
    ,[])

    const handleSetActive = (link) => {
      setActiveLink(link); // Update the active link
    };
  return (
    <div className='bg-gray-100 h-min w-full sm:bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 fixed top-0 left-0 z-50'>
        <div className='text-center sm:hidden'>
      <h1 className='font-bold text-lg'>Shreyas Raut</h1>
      <p ref={typeWriterRef} className='text-blue-400'></p>
        </div>
        <hr className='bg-gray-200 h-[2px] '  />
        <div className='w-full bg-gray-100 sm:w-fit  sm:border sm:absolute sm:top-10 sm:left-4 sm:z-10 sm:border-gray-200 sm:rounded-lg ' >
                 {/* <ul className='grid grid-cols-4 gap-4'> */}
                 <ul className='flex justify-between p-4 sm:flex-col sm:w-min sm:gap-10 '>
                 <li onClick={() => handleSetActive("resume")} className={`flex flex-col items-center ${
                  activeLink === "resume" ? "text-blue-400 font-bold" : ""
                }`}>
               
                    <FontAwesomeIcon icon={faFile} />
                       <span><Link
                to="resume"
                smooth={true}
                duration={500}
                
              >
                Resume
              </Link></span> </li>
                       <li onClick={() => handleSetActive("work")} className={`flex flex-col items-center ${
                  activeLink === "work" ? "text-blue-400 font-bold" : ""
                }`}>
                  

                    <FontAwesomeIcon icon={faPaintBrush} />
                      <span > <Link  to='resume' smooth={true} duration={500}  >Work</Link></span>  
                    </li>
                    <li onClick={() => handleSetActive("about")} className={`flex flex-col items-center ${
                  activeLink === "about" ? "text-blue-400 font-bold" : ""
                }`}>
                 

                    <FontAwesomeIcon icon={faUser} />
                       <span><Link to='about' smooth={true} duration={500} >About</Link></span> 
                        </li>
                    <li onClick={() => handleSetActive("contact")} className={`flex flex-col items-center ${
                  activeLink === "contact" ? "text-blue-400 font-bold" : ""
                }`}>
                  
                    
                    <FontAwesomeIcon icon={faIdBadge} />
                        
                        <span><Link to='contact' smooth={true} duration={500} >Contact</Link></span></li>
                 </ul>
                </div>
        
    </div>
  )
}

export default Navbar
