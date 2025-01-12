import React from 'react'
import { motion } from "framer-motion";
import { useEffect,useState } from 'react';

const About = ({activeLink,setActiveLink}) => {
  const key=['Age...','Residence...','Profession...','Address...']
  const value=['22','India','Web Developer','Pune, Maharashtra']
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // lg breakpoint = 1024px
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Monitor resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  return (
    <div className={`bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full flex flex-col items-center sm:items-end sm:pr-4 lg:items-start  lg:z-10 ${activeLink === "about"?"":"lg:hidden"}`} id='about'>
      {console.log(activeLink)}
        
      <motion.div className="w-[85%] bg-gray-100 py-3 mb-3 sm:w-[75%] lg:mt-[9vw] lg:w-[95%]"
        initial={isLgScreen ? { x: "-100%", opacity: 0 } : false}
        animate={
          isLgScreen && activeLink === "about"
            ? { x: 0, opacity: 1 }
            : isLgScreen
            ? { x: "-100%", opacity: 0.5 }
            : false
        }
        transition={isLgScreen ? { duration: 0.7, ease: "easeInOut" } : {}}
        >
        <div className='flex py-4 px-2 items-center'>
      <span className='text-xl font-bold px-2'><span className='text-blue-400'>About</span> Me</span>
        </div>
       <p className='px-5 '>  I’m Shreyas Raut, a tech enthusiast passionate about web development and innovation. Graduating as a class topper with a 9.15 CGPA, I enjoy solving problems, creating impactful digital experiences, and merging creativity with logic. I’m committed to designing user-friendly interfaces and writing efficient backend code while continuously learning</p>
       <div className='py-3'>
           {
         key.map((item,index)=>{
          return(
            <div className='grid grid-cols-2 px-5 py-2'>
            <p className='w-fit bg-blue-400 text-white px-2'>{item}</p>
            <p className='text-right' >{value[index]}</p>
            <hr className='my-1' />
            </div>
          )
                })
           } 
       </div>
       </motion.div>
       
    </div>
  )
}

export default About
