import React from 'react'
import Image from 'next/image'
import { skills } from '../data'
import skill from '../asset/skill.webp'
import { useGlobalContext } from '../context/cotext'
import {motion} from 'framer-motion'

function Skill() {
  const {isDarkMode}:any = useGlobalContext()
  return (
    <section id="skills" className='' >
    <div className="container px-5 py-10 mx-auto">
      <div className=" flex flex-col  items-center text-center mb-20">
        {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
        < motion.div initial={{opacity:0 ,y:-10}} transition={{delay:.5}} whileInView={{opacity:1,y:1}} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 m-5">
        <Image 
        className="object-cover object-center rounded-full"
          alt="hero"
          width={500}
          height={500}
          src= {skill}/>        
      </motion.div>
        <motion.h1 initial={{opacity:0 ,x:-10}} transition={{delay:.6}} whileInView={{opacity:1,x:1}}
             className=" m-6 sm:text-6xl text-3xl font-black title-font text-white mb-4">
          Skills &amp; Technologies
        </motion.h1>
        <motion.p initial={{opacity:0 ,x:10}} transition={{delay:.7}} whileInView={{opacity:1,y:1}} 
             className="text-xl font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          With a passion for technology, I have developed my skills
           in web development to build customized websites and web applications. 
        </motion.p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill,index) => (
          <div key={index} className="p-2 sm:w-1/2 w-full">
            <motion.div initial={{opacity:0 ,y:10}} transition={{delay:index/5}} whileInView={{opacity:1,y:1}} className= {`${isDarkMode?`bg-gray-800`:`bg-slate-300`} rounded flex p-4 h-full items-center`} >
              {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
              <span  className= {"title-font font-medium"} >
                {skill}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Skill
