import Image from 'next/image'
import About from './components/About'
import Contact from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className=' bg-gradient-to-r from-black via-indigo-600 to-cyan-600'>
      <Navbar />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </main>
  )
}
