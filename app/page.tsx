'use client'
import About from './components/About'
import Contact from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import TopBar from './components/TopBar';
import { useGlobalContext } from './context/cotext';

export default function Home() {
  const { isDarkMode } = useGlobalContext()
  return (
    <main className={  isDarkMode?` overflow-hidden transition-all ease-in-out duration-500 bg-gradient-to-r from-slate-800 via-indigo-600 to-cyan-600 text-white` : ` text-black transition-all ease-in-out duration-500 bg-gradient-to-r from-slate-300 via-indigo-600 to-cyan-600` }>
      <Navbar />
      <About />
      <br id="projects"/>
      <TopBar />
      <Projects />
      <Skill />
      <Contact />
    </main>
  )
}
