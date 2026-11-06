'use client'
import About from './components/About'
import Contact from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import { useGlobalContext } from './context/cotext';

export default function Home() {
  const { isDarkMode } = useGlobalContext()
  return (
    <main className={`site-shell ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <Navbar />
      <About />
      <Projects />
      <Skill />
      <Contact />
      <footer className="site-footer">
        <div className="section-container footer-inner">
          <span>© {new Date().getFullYear()} Alessio Russo</span>
          <span>Designed &amp; built with Next.js</span>
        </div>
      </footer>
    </main>
  )
}
