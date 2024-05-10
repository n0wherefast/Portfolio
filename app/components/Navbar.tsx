'use client'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/cotext'
import {IoIosSettings} from 'react-icons/io'
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import Switches from './Switch'
import Image from 'next/image'
import itaFlag from "../asset/italy_flags_flag_17018.webp"
import engFlag from "../asset/united_kingdom_flags_flag_17079.webp"
import Weather from './Weather'
import { tree } from 'next/dist/build/templates/app-page'
import Link from 'next/link'

export interface CONTEXT {
  isDarkMode?:boolean,
  isLangSwitch?:boolean,
  setIsLangSwitch? : Function,
  setIsDarkMode? : Function,
  handleDarkMode? :Function | any,
  handleLangSwitch? : Function | any,
}


function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  // const [isLangSwitch,setIsLangSwitch] = useState(false)
  const [isClick,setIsClick] = useState(false)
  const {isDarkMode,handleDarkMode,isLangSwitch,handleLangSwitch}:CONTEXT = useGlobalContext()
  const [isMenu , setIsMenu] = useState<boolean>()
  const [isNameChanged,setIsNameChanged] = useState(true)
  const  [size,setSize] =useState(800)
 

  // const handleLangSwitch = () => {
  //   setIsLangSwitch(!isLangSwitch)
  //   console.log (isLangSwitch)
  // }
  
// console.log(size)
  useEffect(() => {
  
    function handleResize() {
      if(window.innerWidth > 800 || window.innerWidth < 500){
        setIsOpen(false)
        setIsClick(false)
        window.innerWidth > 500 ? setIsMenu(true) : setIsMenu(false)
      } 
      setSize(window.innerWidth)
    }
     window.innerWidth > 500 ? setIsMenu(true) : setIsMenu(false)
     window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);



  const  menuSettings = () =>{
    return(
                        <div  onClick={()=>setIsClick(!isClick)} className= {` cursor-pointer flex  md:inline-flex md:items-center md:border-0  text-xl mt-4 md:mt-0 `}>
                          <button 
                          // className=" flex items-center justify-center relative h-[30px] w-24 overflow-hidden rounded-xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-500 before:transition-all ease-in before:duration-700 hover:text-white hover:before:w-full"
                          >
                            <span className="flex relative z-10">
                            <IoIosSettings 
                              className={ isClick?`rotate-90 text-cyan-500 transition-all ease-in` : ` rotate-180 transition-all ease-in`} size={35} />
                            </span>
                          </button>
                        </div>
    )
  }

  
  return (
    <header  className = { isOpen?` p-3 transition-all duration-500 ease-in-out ${isDarkMode? 'bg-sky-950 text-white':'bg-slate-100'}   md:sticky top-0 z-10  ` : 
                                  `transition-all duration-500 ease-in-out  ${isDarkMode?'md:border-b border-slate-600 backdrop-blur-lg text-white' : 'md:bg-slate-100 text-white md:text-black '} md:sticky top-0 z-10`}>

        <div className={isOpen ? ` h-96 transition-all ease-in-out duration-300  container mx-auto flex  p-3 flex-col  md:flex-row justify-around items-center md:justify-start` :
                                 ` h-24 transition-all ease-in-out duration-200  container mx-auto flex  p-3 flex-col  md:flex-row justify-between items-center md:justify-start`}>
                
        <div className='flex flex-row w-full md:w-auto justify-between items-center m-2 md:p-0'>
                <p className="title-font font-medium md:mb-0">
                  <Link href="/" onMouseOver={()=> setIsNameChanged(!isNameChanged)} onMouseLeave={()=>setIsNameChanged(!isNameChanged)} className={isOpen? `ml-3 text-3xl md:text-xl `:`ml-3 text-2xl`}>
                    {isNameChanged === true ? "Alessio Russo" : "Web Dev Portfolio" }  
                  </Link>
                </p>
                
                <button className= {isOpen? `  flex rotate-180 md:hidden text-sky-500 transition-all ease-in duration-200`:` hover:bg-sky-900 p-2 rounded-full rotate-0 flex md:hidden text-white transition-all ease-in `  }
                        onClick={()=>(setIsOpen(!isOpen) ,setIsClick(false))}
                >
                { isOpen ? <IoMdClose size={30} /> :   <FaBars size={25} />}  
                </button>
        </div>
        <nav  className={isOpen? ` gap-2  w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	flex  flex-col md:flex-row items-start text-base justify-start  ` :
                                 ` hidden  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	md:flex  items-center text-base justify-center`}>
             {/* <hr /> <Weather/>    <hr />                 */}
          <Link href="#projects" className=" text-3xl md:text-xl  mr-5 py-1 px-3  rounded-lg hover:text-white hover:bg-sky-500 hover:animate-bounce">
             <span>Past Work</span>
          </Link>
          <Link href="#skills" className=" text-3xl md:text-xl mr-5 py-1 px-3 transition-all ease-in rounded-lg hover:text-white hover:bg-sky-500 hover:animate-bounce">
             <span>Skills</span>
          </Link>
          <Link className="" href="/Alessio_Russo_Résumé.pdf" locale={false} rel="noopener noreferrer" target="_blank" aria-label="Downlod Resume" >
             <button className="p-5 text-xl hover:text-emerald-500 hover:scale-110 hover:font-bold transition-all "> Downlod Resume </button>
          </Link>
          {/* <Link href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </Link> */}
          
        </nav>
         
              
         


        <div className={` w-full  md:w-auto p-3  flex  md:justify-end  ` } >
           <div className = {isClick? ` p-2 transition-all ease-in duration-200  h-32 md:h-12 md:w-96 flex flex-col md:flex-row items-start md:items-center justify-center `:
                                      ` h-4 transition-all ease-in duration-200 flex md:flex-row`}>
                       
                        { isOpen? menuSettings():null}
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
         {size > 770 ?
          <div  className={` ${isDarkMode? 'text-white':'text-black'}
           `}>
              <span className="relative z-10">{ isMenu? menuSettings():null}</span>
          </div> 
           : null } 
           <Link
          href="#contact"
          className= {isOpen? `md:inline-flex items-center bg-gray-800 border-0 py-1 px-3 transition-all ease-in focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0` 
                    :  ` hidden md:inline-flex items-center ml-5 bg-cyan-500 border-0 py-1 px-3 transition-all ease-in focus:outline-none hover:bg-red-700 rounded text-lg mt-4 md:mt-0 hover:animate-pulse ` }>
          Hire Me
        </Link>          

        </div>
        
      
    </header>
  )
}

export default Navbar
