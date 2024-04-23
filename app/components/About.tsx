// 'use client'
import React from 'react'
import Image from 'next/image'
import coding from '../img/coding.jpg'
import { useGlobalContext } from '../context/cotext'
import {motion} from 'framer-motion'

function About() {
    const {isDarkMode}:any = useGlobalContext()
    
  return (
    <section className=' md:h-[90vh] md:flex ' id="about">
    <div className=" container mx-auto flex px-10 py-5 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
          Hi, I&apos;m Reed.
          <br className="hidden lg:inline-block" />I love to build amazing
          apps.
        </h1>
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className=" transition-all ease-in duration-200 inline-flex text-slatr-300 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Me
          </a>
          <a
            href="#projects"
            className={` transition-all ease-in duration-200 ml-4 inline-flex ${isDarkMode?`bg-gray-800`: 'bg-slate-300 text-slate-900'}  border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg`}>
            See My Past Work
          </a>
        </div>
      </div>
      <motion.div initial={{opacity:0 ,x:10}} transition={{delay:.5}} whileInView={{opacity:1,x:1}} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image 
        className="object-cover object-center rounded-2xl"
        priority
          alt="hero"
          width={500}
          height={500}
          src= {coding}/>        
      </motion.div>
    </div>
  </section>
  )
}

export default About
