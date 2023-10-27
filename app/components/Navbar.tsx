'use client'
import React, { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import { motion } from "framer-motion"


function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <header className = { isOpen?` transition-all ease-linear bg-sky-950 md:sticky top-0 z-10` : ` transition-all ease-linear md:bg-gray-900 md:sticky top-0 z-10`}>
        <div className=" transition-all ease-linear  container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between items-center md:justify-start">
                
        <div className='flex flex-row w-full md:w-auto justify-between items-center'>
          <a className="title-font font-medium text-white md:mb-0">
                  <a href="#about" className="ml-3 text-xl">
                    Alessio Russo 
                  </a>
                </a>
                <button className= {isOpen? `  flex rotate-180 md:hidden text-sky-500 transition-all ease-in`:` hover:bg-sky-900 p-2 rounded-full rotate-0 flex md:hidden text-white transition-all ease-in`  }
                        onClick={()=>setIsOpen(!isOpen)}
                >
                { isOpen ? <IoMdClose size={30} /> :   <FaBars size={25} />}
              
                </button>
        </div>
        <nav  className={isOpen? ` w-full h-96 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap flex-col md:flex-row items-start text-base justify-start  ` : `hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	md:flex flex-wrap items-center text-base justify-center`}>
          <a href="#projects" className="mr-5 py-1 px-3 transition-all ease-in rounded-lg hover:text-white hover:bg-sky-500">
            Past Work
          </a>
          <a href="#skills" className="mr-5 py-1 px-3 transition-all ease-in rounded-lg hover:text-white hover:bg-sky-500">
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>

        <a
          href="#contact"
          className= {isOpen? `md:inline-flex items-center bg-gray-800 border-0 py-1 px-3 transition-all ease-in focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0` :` hidden md:inline-flex items-center bg-gray-800 border-0 py-1 px-3 transition-all ease-in focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0` }>
          Hire Me
          {/* <AiOutlineArrowRight className="w-4 h-4 ml-1" /> */}
          
        </a>
        </div>
        
      
    </header>
  )
}

export default Navbar
