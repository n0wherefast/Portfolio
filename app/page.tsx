'use client'
import Image from 'next/image'
import About from './components/About'
import Contact from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import { useGlobalContext } from './context/cotext';

export default function Home() {
  const {isDarkMode}:any = useGlobalContext()
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className={ isDarkMode?` transition-all ease-in-out duration-500 bg-gradient-to-r from-slate-800 via-indigo-600 to-cyan-600 text-white` : ` text-black transition-all ease-in-out duration-500 bg-gradient-to-r from-slate-300 via-indigo-600 to-cyan-600`}>
      <Navbar />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </main>
  )
}
