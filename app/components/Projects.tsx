'use client'
import React from 'react'
import  Image  from 'next/image'
import  {projects} from '../data'
import { motion,useScroll } from 'framer-motion'

function Projects() {
  const {scrollXProgress} = useScroll()
  console.log(scrollXProgress)
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-10">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps `&apos;I`ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center ">
          {projects.map((project,idx) => (
            <a
              href={project.link}
              key={idx}
              className="">
              <motion.div  className="flex relative md:w-[300px] md:h-[300px]">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
                  src={project.image}
                />
                <div className="  px-8 py-10 relative  w-full border-4 border-gray-800 bg-gray-900 opacity-0 transition-all ease-in duration-200 hover:opacity-100 rounded-2xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
