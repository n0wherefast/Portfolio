import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import coding from '../asset/coding.webp'
import { useGlobalContext } from '../context/cotext'
import {motion} from 'framer-motion'
import {CONTEXT} from '../components/Navbar'
import { LuArrowUpRight, LuArrowDownLeft } from "react-icons/lu";


function About() {
  const {isDarkMode,isLangSwitch}:CONTEXT = useGlobalContext()
  const [readMore, setReadMore] = useState(false)
  const [icon,setIcon] = useState('')

  const HandleReadMore = () => {
    return(
      <button className={`flex gap-1 w-full justify-center md:justify-start hover:text-emerald-500 p-1 text-sm font-medium `} onClick={()=>setReadMore(!readMore)}> { readMore==false? <>READ MORE <LuArrowUpRight size={18} /></> : <>READ LESS <LuArrowDownLeft/> </>}</button>
    )
  }
 
 useEffect(()=>{
  const random  = () =>  Math.floor(Math.random()*4) 

  

        switch(random()){
      case 0 : setIcon("🌊" ) 
      break;
      case 1 : setIcon("🍕" )  
      break;
      case 2 :  setIcon("🏄" )
      break;
      case 3 : setIcon("🤖" )
      break; 
    }  
 },[])
    
    
  return (
    <section className=' md:min-h-[90vh] md:flex ' id="about">
    <div className=" container mx-auto flex px-10 py-2 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
      {
       isLangSwitch == false ?
        <motion.h1
          initial={{opacity:0 ,y:-10}} transition={{delay:.5}} whileInView={{opacity:1,y:1}}
          className="title-font sm:text-6xl text-3xl mb-4 font-medium  ">
          Ciao, Sono Alessio.
          <br className="hidden lg:inline-block " />Mi piace Sviluppare Applicazioni. E mangiare Pizza <span className=' animate-bounce'>{icon}</span>
        </motion.h1>
        :
        <motion.h1
          initial={{opacity:0 ,y:-10}} transition={{delay:.5}} whileInView={{opacity:1,y:1}}
          className="title-font sm:text-6xl text-3xl mb-2 font-medium ">
          Hi, I&apos;m Alessio.
          <br className="hidden lg:inline-block " />I love to build apps. And Eating Pizza <span className=' animate-bounce'>{icon}</span>
        </motion.h1>}
        { isLangSwitch == false ?
          < motion.p initial={{opacity:0 ,x:-10}} transition={{delay:.5}} whileInView={{opacity:1,x:1}} className="mb-8 leading-relaxed font-medium text-lg ">
            Sono uno sviluppatore Web autodidatta con una passione per le tecnologie JavaScript.{ readMore == false? HandleReadMore() :null}
            <br />
            { readMore == true ? <div>
            Mi concentro principalmente su sviluppo Web frontend, creando siti Web e applicazioni Web interattive e coinvolgenti.
            Sono sempre alla ricerca di nuove sfide e opportunità per ampliare le mie conoscenze e competenze.
            In futuro vorrei approfondendire le mie conoscenze in sviluppo software e sviluppo di applicazioni mobili.
            <br />
            Oltre al mio lavoro, ho una grande passione per gli sport all&apos;aperto, in particolare per il surf.
            Amo trascorrere il mio tempo libero tra le onde 🌊 e godendomi la bellezza del mare.
            <br />
            Amo mangiare pizza 🍕 e stare in compagnia dei miei amici.
            Sono una persona creativa e orientata al problem solving.
            Sono sempre pronto a mettermi alla prova e ad affrontare nuove sfide. { readMore &&  HandleReadMore() }</div> : null}
        </motion.p>
        :
        < motion.p initial={{opacity:0 ,x:-10}} transition={{delay:.5}} whileInView={{opacity:1,x:1}}
           className={`mb-8 leading-relaxed font-medium text-lg `}>
        I am a self-taught web developer with a passion for JavaScript technologies. { readMore== false?  HandleReadMore() : null}
        <br />
        { readMore == true ? <div>I mainly focus on frontend web development, creating interactive and engaging websites and web applications.
        I am always looking for new challenges and opportunities to expand my knowledge and skills.
        In the future, I would like to deepen my knowledge in software development and mobile application development.
        <br />
        In addition to my work, I have a great passion for outdoor sports, especially surfing.
        I love spending my free time in the waves 🌊 and enjoying the beauty of the sea.
        <br />
        I love eating pizza 🍕 and being in the company of my friends.
        I am a creative and problem-solving oriented person.
        I am always ready to challenge myself and take on new challenges. { readMore &&  HandleReadMore() } </div> : null }

        </motion.p>}
        <div className="flex justify-center">
          <motion.a initial={{opacity:0 ,y:10}} transition={{delay:.5}} whileInView={{opacity:1,y:1}}
            href="#contact"
            className=" transition-all ease-in duration-200 inline-flex text-slatr-300 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Me
          </motion.a>
          <motion.a
          initial={{opacity:0 ,y:10}} transition={{delay:.5}} whileInView={{opacity:1,y:1}}
            href="#projects"
            className={` transition-all ease-in duration-200 ml-4 inline-flex ${isDarkMode?`bg-gray-800`: 'bg-slate-300 text-slate-900'}  border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg`}>
            See My Past Work
          </motion.a>
        </div>
      </div>
      <motion.div initial={{opacity:0 ,x:10}} transition={{delay:.5}} whileInView={{opacity:1,x:1}} 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center ">
            <div className=' bg-gradient-to-r from-slate-100 via-indigo-800 to-cyan-800 w-full h-full mix-blend-soft-light rounded-full animate-spinSlow absolute  '> </div>
        <Image 
        className="object-cover object-center rounded-full"
        priority
          alt="hero"
          width={515}
          height={515}
          src= {coding}/>        
      </motion.div>
    </div>
  </section>
  )
}

export default About
