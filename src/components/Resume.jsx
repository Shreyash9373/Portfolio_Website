import React from 'react'
import {useState,useEffect} from 'react';
import ResumeUtils from '../utils/ResumeUtils.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";

const Resume = ({activeLink,setActiveLink}) => {
  const year=['2023-2025','2020-2023','2019-2020','2017-2018'];
  const college=['PES Modern College of Engineering','MMCC College','St Vincent Junior College','Hume Mchenry Memorial High School'];
  const location=['Pune','Pune','Pune','Pune'];
  const degree=['M.C.A','BSC(Computer Science)','HSC','ICSE'];
  const project=['DocMeet','FusionFit','WeatherWebApp']
  const tech=['MondoDB, Express.js, Reactjs, Node.js','AndroidStudio, FireBase, Kotlin, JetPackCompose','HTML, CSS, JavaScipt, Node.js, Express.js']
  const pdesc=['DocMeet is a web app built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), where users can book appointments with doctors for specific dates and times. Doctors have a dashboard to accept or reject appointments, while an admin can log in to add doctors along with their details such as specialty, name, and fees.','This app is created in android studio using kotlin as a programming language.This app gives you the workout and diet plans(Veg/Non-veg) which a beginner can follow easily.It also suggests customized diet and workout plan according to the user goals(Fatloss/Muscle Gain).','Developed a dynamic WEATHER WEB APP that displays real-time temperature and climate information for any location. The application is built using HTML, CSS, JavaScript, Node.js, and Express.js, and fetches data from a real-time APIs to provide accurate weather updates.']
  const backendStyles={textSize: "16px",
    pathColor: "#60a5fa",
    textColor: "#000",}

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
    <div className={`flex justify-center w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-3 sm:justify-end sm:pr-4 lg:justify-start  lg:z-10 ${activeLink === "resume" || activeLink === "work"?"":"lg:hidden"  } `} id='resume' >
    <motion.div className={`w-[85%] bg-gray-100 flex flex-col pl-4 sm:w-[75%] lg:h-[80%] lg:overflow-auto lg:w-[95%] lg:mt-[6vw] lg:pl-5 `}initial={isLgScreen ? { x: "-100%", opacity: 0 } : false}
        animate={
          isLgScreen && activeLink === "resume" || activeLink === "work"
            ? { x: 0, opacity: 1 }
            : isLgScreen
            ? { x: "-100%", opacity: 0.5 }
            : false
        }
        transition={isLgScreen ? { duration: 0.7, ease: "easeInOut" } : {}}>
      <h2 className=' text-xl font-bold py-3' ><span className='text-blue-400'>R</span>esume</h2>
      {/* Education Div */}
      <div>
        <div className='flex py-3'>
         <FontAwesomeIcon icon={faSchool} className='pt-1 text-blue-400'  />
        <h3 className='pl-2 pb-2 text-lg font-semibold'>Education</h3>
        </div>
        {/* Use map function */}
        <div>
          {year.map((item,index)=>(
            <div className='flex flex-col lg:grid lg:grid-cols-2'> 
             <p className='pb-2 border border-gray-300 w-fit px-1'>{item} </p>
              <p className='font-semibold'>{college[index]} </p>
              <p >{location[index]}</p> 
              <p className='pb-6'>{degree[index]}</p>
              </div>
          ))} 
        </div>
      </div>
     {/* Project div */}
     <div>
      <div className='flex py-3'>
     <FontAwesomeIcon className='pt-1 text-blue-400' icon={faCode}  />
      <h3 className='pl-2 pb-2 text-lg font-semibold'>Projects</h3>
      </div>
      <div>
          {project.map((item,index)=>(
            <div className='flex flex-col'> 
             <p className='pb-2 border border-gray-300 w-fit px-1 font-bold'>{item} </p>
              <p className='font-semibold py-2'>Tech Used: {tech[index]} </p>
              <p  className='pb-8 w-[90%]'>{pdesc[index]}</p> 
              </div>
          ))} 
        </div>
    </div>
    {/* Technical skills */}
     <div>
        <h3 className=' text-lg font-semibold'> <span className='text-blue-400'>Technical</span> Skills</h3>
        {/* Frontend div */}
        <div className='flex flex-col py-2'>
          <div className='flex'>
        <FontAwesomeIcon className='pt-4 text-blue-400' icon={faPaintBrush} />
        <h3 className='text-xl font-bold py-3 mx-2 '>Frontend</h3>
          </div>
        <div className=''>
          <p>HTML</p>
        <ProgressBar className='w-[90%]' completed={80} bgColor='#60a5fa' customLabel=' ' transitionTimingFunction='ease-in' transitionDuration='1s' animateOnRender />
          <p>CSS</p>
        <ProgressBar className='w-[90%]' completed={75} bgColor='#60a5fa' customLabel=' ' transitionTimingFunction='ease-in' transitionDuration='1s' animateOnRender />
          <p>JAVASCRIPT</p>
        <ProgressBar className='w-[90%]' completed={85} bgColor='#60a5fa' customLabel=' ' transitionTimingFunction='ease-in' transitionDuration='1s' animateOnRender />
          <p>REACT JS</p>
        <ProgressBar className='w-[90%]' completed={90} bgColor='#60a5fa' customLabel=' ' transitionTimingFunction='ease-in' transitionDuration='1s' animateOnRender />
        </div>
        </div>
        {/* Backend div */}
        <div className='flex flex-col py-4'>
        <div className='flex'>
        <FontAwesomeIcon className='pt-4 text-blue-400' icon={faDatabase} />
        <h3 className='text-xl font-bold py-3 mx-2'>Backend</h3>
          </div>
          <div className='grid grid-cols-2 gap-4 place-items-center pt-3 '>
            <div className='w-1/2 lg:w-[40%]'>
          <CircularProgressbar value={80} text="NodeJS" styles={buildStyles(backendStyles)} />
            </div>
            <div className='w-1/2 lg:w-[40%]'>
          <CircularProgressbar value={90} text="Express" counterClockwise
          styles={buildStyles(backendStyles)}  />
            </div>
            <div className='w-1/2 lg:w-[40%]'>
          <CircularProgressbar value={60} text="PHP" counterClockwise
          styles={buildStyles(backendStyles)}  />
            </div>
            <div className='w-1/2 lg:w-[40%]'>
          <CircularProgressbar value={70} text="MONGODB" counterClockwise
          styles={buildStyles({textSize:"12px",pathColor: "#60a5fa",
            textColor: "#000"})}  />
            </div>
            <div className='w-1/2 lg:w-[40%]'>
          <CircularProgressbar value={65} text="MYSQL" counterClockwise
          styles={buildStyles(backendStyles)}  />
            </div>
            <div className='w-1/2 lg:w-[40%]'>
          <CircularProgressbar value={83} text="POSTGRESQL" counterClockwise
          styles={buildStyles({textSize:"12px",pathColor: "#60a5fa",
            textColor: "#000"})}  />
            </div>
          </div>
        </div>
        {/* Programming languages div */}
        <div className='flex flex-col py-4'>
        <div className='flex'>
        <FontAwesomeIcon className='pt-4 text-blue-400' icon={faTerminal} />
        <h3 className='text-xl font-bold py-3 mx-2'>Programming Languages</h3>
          </div>
          <div className='lg:grid lg:grid-cols-2'>
            <ResumeUtils subjectName='JAVA' filleddots={8} />
            <ResumeUtils subjectName='PYTHON' filleddots={7} />
            <ResumeUtils subjectName='C' filleddots={9} />
            <ResumeUtils subjectName='CPP' filleddots={8} />
          </div>
        </div>
    </div>
    </motion.div>
    </div>
  )
}

export default Resume
