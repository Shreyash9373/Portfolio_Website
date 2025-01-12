import React from 'react'
import { motion } from "framer-motion";
import { useState,useEffect } from 'react';

const Contact = ({activeLink,setActiveLink}) => {
    const data=["Address...","Email...","Phone..."];
    const value=["Timber Market, Pune","shreyashraut8@gmail.com","9373180080"];
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
    <div className={`bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full flex flex-col items-center sm:items-end sm:pr-4 lg:items-start  lg:z-10 ${activeLink === "contact"?"":"lg:hidden"} `} id='contact'>
      <motion.div className={`w-[85%] bg-gray-100 py-3 mb-3 sm:w-[75%] lg:mt-[9vw] lg:w-[95%] lg:pl-5 `}
      initial={isLgScreen ? { x: "-100%", opacity: 0 } : false}
      animate={
        isLgScreen && activeLink === "contact"
          ? { x: 0, opacity: 1 }
          : isLgScreen
          ? { x: "-100%", opacity: 0.5 }
          : false
      }
      transition={isLgScreen ? { duration: 0.7, ease: "easeInOut" } : {}}
      >
        <h1 className='text-xl font-bold pl-4'><span className='text-blue-400'>Get</span> in touch</h1>
        <hr className='h-2 m-2' />
        <div className='flex justify-center' >
        <iframe className='w-[85%] h-[70%] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.452822843451!2d73.86343647702883!3d18.508428324660464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c03c27fa62d5%3A0x9f0d5dc26f4e5121!2sTimber%20Market%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736100039594!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='py-10 lg:py-3'>
           {
            data.map((item,index)=>{
                return (
                    <div className='grid grid-cols-2 py-2 px-5'>
                        <p className='bg-blue-400 h-fit px-2 w-fit text-white'>{item}</p>
                        <p className='overflow-x-auto'>{value[index]}</p>
                        <hr className='m-2'/>
                    </div>
                )
            })
           }
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
