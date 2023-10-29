'use client'
import React, { useEffect, useState } from 'react'
import {IoIosArrowForward,IoIosArrowDown} from 'react-icons/io'
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import Switches from './Switch'
import Image from 'next/image'
import { motion } from "framer-motion"
import itaFlag from "../img/italy_flags_flag_17018.png"
import engFlag from "../img/united_kingdom_flags_flag_17079.png"


function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  const [isDarkMode,setIsDarkMode] = useState(false)
  const [isLangSwitch,setIsLangSwitch] = useState(false)
  const [isClick,setIsClick] = useState(false)
 
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    console.log (isDarkMode)
  }
  const handleLangSwitch = () => {
    setIsLangSwitch(!isLangSwitch)
    console.log (isLangSwitch)
  }

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth> 800){
        setIsOpen(false)
      }
    }

     window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
    };

  }, []);

  
  return (
    <header className = { isOpen?` transition-all duration-300 ease-in-out bg-sky-950 md:sticky top-0 z-10 text-white ` : ` text-white transition-all duration-300 ease-in-out md:bg-gray-900 md:sticky top-0 z-10`}>
        <div className=" transition-all ease-in-out  container mx-auto flex  p-3 flex-col  md:flex-row justify-between items-center md:justify-start">
                
        <div className='flex flex-row w-full md:w-auto justify-between items-center m-2 md:p-0'>
                <p className="title-font font-medium text-white md:mb-0">
                  <a href="#about" className={isOpen? `ml-3 text-3xl md:text-xl`:`ml-3 text-2xl`}>
                    Alessio Russo
                  </a>
                </p>
                <button className= {isOpen? `  flex rotate-180 md:hidden text-sky-500 transition-all ease-in duration-200`:` hover:bg-sky-900 p-2 rounded-full rotate-0 flex md:hidden text-white transition-all ease-in`  }
                        onClick={()=>setIsOpen(!isOpen)}
                >
                { isOpen ? <IoMdClose size={30} /> :   <FaBars size={25} />}
                </button>
        </div>
        <nav  className={isOpen? ` transition-all ease-in-out w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	flex  flex-col md:flex-row items-start text-base justify-start  ` :
                                 ` hidden  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	md:flex  items-center text-base justify-center`}>
          <a href="#projects" className=" text-2xl md:text-xl  mr-5 py-1 px-3 transition-all ease-in rounded-lg hover:text-white hover:bg-sky-500 hover:animate-bounce">
            Past Work
          </a>
          <a href="#skills" className=" text-2xl md:text-xl mr-5 py-1 px-3 transition-all ease-in rounded-lg hover:text-white hover:bg-sky-500 hover:animate-bounce">
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        <div className={isOpen?` w-full flex flex-col items-start justify-start p-3 md:mr-5   `:`  hidden md:flex  items-center justify-center mr-5`}  >
           <div className='flex items-center cursor-pointer ' onClick={()=>setIsClick(!isClick)}>
             <p className=' text-lg'>Set</p>
             <IoIosArrowForward className={ isClick?`rotate-90  text-sky-500 hover:text-sky-500 transition-all ease-in` : `text-slate-200 hover:text-sky-500 transition-all ease-in`} size={27} />
           </div>
          {isClick? 
            <div className={ `w-full flex flex-col md:flex-row items-start md:m-2 md:gap-1 bg-orange-500 `}>
            <div className='p-3 text-lg flex md:flex-row items-center  gap-1'>
            <p >Dark Mode : </p>
            <Switches checked={isDarkMode} handle={()=>handleDarkMode()} />
            </div>
            <div className='text-xl p-3 flex md:flex-row items-center gap-1'>
            <Image className='w-6' src={itaFlag} alt='Ita-Flag'/>
            <Switches checked={isLangSwitch} handle={()=>handleLangSwitch()} />
            <Image className='w-6' src={engFlag} alt='UK-flag'/>
          </div>          
        </div> : null }
        </div>
        <a
          href="#contact"
          className= {isOpen? `md:inline-flex items-center bg-gray-800 border-0 py-1 px-3 transition-all ease-in focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0` 
                    :  ` hidden md:inline-flex items-center bg-gray-800 border-0 py-1 px-3 transition-all ease-in focus:outline-none hover:bg-gray-600 rounded text-lg mt-4 md:mt-0 hover:animate-pulse ` }>
          Hire Me
        </a>
        </div>
        
      
    </header>
  )
}

export default Navbar
