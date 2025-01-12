import React from 'react'
import photo from '../assets/photo.jpg'
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect/dist/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


import { useEffect, useRef } from 'react';


const Hero = () => {
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
  return (
    <div className='flex justify-center w-full bg-blue-400 pb-3 pt-36 sm:justify-end sm:pr-4 sm:pt-3 lg:justify-end lg:pl-32 lg:w-[55%] lg:items-center lg:pr-0 lg:z-40 ' id='hero'> 
      <div className='bg-gray-100 flex flex-col  w-[85%] items-center sm:w-[75%] lg:w-fit lg:h-fit lg:border lg:border-gray-500 lg:rounded-md'>
        <img src={photo} className='diamond-shape w-full' alt="" />
        <p className='text-4xl py-2 font-semibold'>Shreyas Raut</p>
        <p ref={typeWriterRef} className='text-[1.3rem] font-bold text-blue-300'></p>
        <ul className='flex justify-center gap-4 pt-2 mb-12 '>
            <li> <a href="https://github.com/Shreyash9373" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size='2x' /></a></li>
            <li><a href="https://www.linkedin.com/in/shreyas-raut-379649205/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} size='2x'/></a></li>
            <li><a href="mailto:shreyashraut8@gmail.com" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} size='2x'/></a></li>
        </ul>
      <div className='grid grid-cols-2 w-full border border-gray-200 py-2'>
     <a
    href="/Resume(Shreyas Raut).pdf" // Replace with the actual path to your PDF
    download="Shreyas_Raut_CV.pdf" // This is the downloaded file name
    className="text-center block"
  >Download CV</a>
        <a
    href="tel:+919373180080" // Replace with your actual 10-digit phone number
    className="text-center block"
  >
    Contact Me
  </a>
      </div>
      </div>
    </div>
  )
}

export default Hero
