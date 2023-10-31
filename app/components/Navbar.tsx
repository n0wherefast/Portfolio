'use client'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/cotext'
import {IoIosArrowForward} from 'react-icons/io'
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import Switches from './Switch'
import Image from 'next/image'
import { motion } from "framer-motion"
import itaFlag from "../img/italy_flags_flag_17018.png"
import engFlag from "../img/united_kingdom_flags_flag_17079.png"


function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  const [isLangSwitch,setIsLangSwitch] = useState(false)
  const [isClick,setIsClick] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const {isDarkMode,setIsDarkMode,handleDarkMode}:any = useGlobalContext()
 

  const handleLangSwitch = () => {
    setIsLangSwitch(!isLangSwitch)
    console.log (isLangSwitch)
  }
  
  useEffect(() => {
    function handleResize() {
      setWidth(innerWidth)
      if(window.innerWidth > 800 || window.innerWidth < 500){
        setIsOpen(false)
        setIsClick(false)
      } 
    }

     window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
    };

  }, []);

  const  setMenu = () =>{
    return(
      <div  onClick={()=>setIsClick(!isClick)} className= {` cursor-pointer flex  md:inline-flex md:items-center md:border-0  text-xl mt-4 md:mt-0 `}>
                          <button className="relative h-[30px] w-24 overflow-hidden rounded-xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-500 before:transition-all ease-in before:duration-700 hover:text-white hover:before:w-full">
                            <span className="flex relative z-10">Set
                            <IoIosArrowForward className={ isClick?`rotate-90  hover:text-white transition-all ease-in` : ` transition-all ease-in`} size={27} />

                            </span>
                          </button>
                        </div>
    )
  }

  
  return (
    <header className = { isOpen?` transition-all duration-500 ease-in-out ${isDarkMode? 'bg-sky-950 text-white':'bg-slate-100'}   md:sticky top-0 z-10  ` : `transition-all duration-500 ease-in-out  ${isDarkMode?'md:bg-sky-950 text-white' : 'md:bg-slate-100 text-white md:text-black '} md:sticky top-0 z-10`}>
        <div className={isOpen ? ` h-96 transition-all ease-in-out duration-300  container mx-auto flex  p-3 flex-col  md:flex-row justify-between items-center md:justify-start` :
                                 ` h-24 transition-all ease-in-out duration-200  container mx-auto flex  p-3 flex-col  md:flex-row justify-between items-center md:justify-start`}>
                
        <div className='flex flex-row w-full md:w-auto justify-between items-center m-2 md:p-0'>
                <p className="title-font font-medium md:mb-0">
                  <a href="#about" className={isOpen? `ml-3 text-3xl md:text-xl`:`ml-3 text-2xl`}>
                    Alessio Russo 
                  </a>
                </p>
                <button className= {isOpen? `  flex rotate-180 md:hidden text-sky-500 transition-all ease-in duration-200`:` hover:bg-sky-900 p-2 rounded-full rotate-0 flex md:hidden text-white transition-all ease-in`  }
                        onClick={()=>(setIsOpen(!isOpen) ,setIsClick(false))}
                >
                { isOpen ? <IoMdClose size={30} /> :   <FaBars size={25} />}
                </button>
        </div>
        <nav  className={isOpen? ` gap-2  w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	flex  flex-col md:flex-row items-start text-base justify-start  ` :
                                 ` hidden  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	md:flex  items-center text-base justify-center`}>
          <a href="#projects" className=" text-3xl md:text-xl  mr-5 py-1 px-3  rounded-lg hover:text-white hover:bg-sky-500 hover:animate-bounce">
             <span>Past Work</span>
          </a>
          <a href="#skills" className=" text-3xl md:text-xl mr-5 py-1 px-3 transition-all ease-in rounded-lg hover:text-white hover:bg-sky-500 hover:animate-bounce">
             <span>Skills</span>
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
         {isOpen? null: window.innerWidth > 800 ? setMenu() :null}


        <div className={` w-full  md:w-auto p-3  flex  md:justify-end  ` } >
           <div className = {isClick? ` transition-all ease-in duration-200  h-32 md:h-12 md:w-96 flex flex-col md:flex-row items-start md:items-center justify-center `:
                                      ` h-4 transition-all ease-in duration-200 flex md:flex-row`}>
                        { isOpen? setMenu():null}
                        {isClick? 
                          <div className={   `w-full flex flex-col md:flex-row items-start  md:m-2 md:gap-1`}>
                          <div className='p-3 text-lg flex md:flex-row items-center  gap-1'>
                          <p >Dark Mode : </p>
                          <Switches checked={isDarkMode} handle={()=>handleDarkMode()}  />
                          </div>
                          <div className='text-xl p-3 flex md:flex-row items-center gap-1'>
                          <Image className='w-5 rounded-full' src={itaFlag} alt='Ita-Flag'/>
                          <Switches checked={isLangSwitch} handle={()=>handleLangSwitch()} />
                          <Image className='w-5 rounded-full' src={engFlag} alt='UK-flag'/>
                        </div>          
                      </div> : null }
           </div>
           
        </div>
        
          <a href="#contact" className={` ${isDarkMode? 'text-white':'text-black'} rounded relative flex h-[40px] w-28 items-center justify-center overflow-hidden  font-medium transition-all ease-in duration-400 before:absolute before:inset-0 before:border-0 before:border-red-500 before:duration-100 before:ease-linear hover:bg-red-500 hover:text-white hover:before:border-[25px]`}>
              <span className="relative z-10">Hire Me</span>
          </a>

        </div>
        
      
    </header>
  )
}

export default Navbar
