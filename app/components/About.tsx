'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { useGlobalContext } from '../context/cotext'

function About() {
  const { isLangSwitch } = useGlobalContext()
  const [readMore, setReadMore] = useState(false)

  const introduction = isLangSwitch
    ? 'I build thoughtful web experiences, from polished interfaces to complete applications. My work focuses on JavaScript technologies, accessible UI, and practical solutions.'
    : 'Realizzo esperienze web curate, dalle interfacce alle applicazioni complete. Mi concentro sulle tecnologie JavaScript, sull’accessibilità e su soluzioni concrete.'

  const additionalText = isLangSwitch
    ? 'I am a self-taught developer who enjoys taking a product from the first idea through to release. I am always learning, especially across software and mobile development. Outside work, you will find me surfing or spending time by the sea.'
    : 'Sono uno sviluppatore autodidatta e mi piace seguire un prodotto dall’idea iniziale fino alla pubblicazione. Continuo a imparare, soprattutto nell’ambito dello sviluppo software e mobile. Fuori dal lavoro mi trovi spesso a fare surf o a godermi il mare.'

  return (
    <section className="hero section-container" id="about">
      <div className="hero-grid">
        <div>
          <motion.span
            className="section-kicker"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {isLangSwitch
              ? 'Web developer · AI & DATA Specialist'
              : 'Sviluppatore web · AI & DATA Specialist'}
          </motion.span>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {isLangSwitch ? <>I build web apps<br />and <span>AI solutions.</span></> : <>Creo applicazioni web<br />e <span>soluzioni AI.</span></>}
          </motion.h1>
          <p className="hero-copy">
            {introduction}
            {readMore && <> {additionalText}</>}
          </p>
          <button
            type="button"
            className="read-more"
            aria-expanded={readMore}
            onClick={() => setReadMore((open) => !open)}
          >
            {readMore
              ? <>{isLangSwitch ? 'Read less' : 'Leggi meno'} <FiArrowUpRight /></>
              : <>{isLangSwitch ? 'More about me' : 'Scopri di più'} <FiArrowDownRight /></>}
          </button>
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              {isLangSwitch ? 'View selected work' : 'Progetti selezionati'} <FiArrowUpRight />
            </a>
            <a href="#contact" className="button-secondary">
              {isLangSwitch ? 'Get in touch' : 'Contattami'}
            </a>
          </div>
          <div className="hero-meta">
            <span><i className="status-dot" /> {isLangSwitch ? 'Open to opportunities' : 'Disponibile per nuove opportunità'}</span>
            <span>Catania, Italy</span>
          </div>
        </div>

        <motion.div
          className="code-window"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          aria-label="Example code profile"
        >
          <div className="code-toolbar">
            <span className="window-controls"><i /><i /><i /></span>
            <span>alessio.ts</span>
            <span className="code-toolbar-label">TypeScript</span>
          </div>
          <div className="code-body" aria-hidden="true">
            <div className="code-line"><span className="line-number">1</span><span><b>const</b> developer = {'{'}</span></div>
            <div className="code-line"><span className="line-number">2</span><span className="code-indent"><b>name</b>: <i>&apos;Alessio Russo&apos;</i>,</span></div>
            <div className="code-line"><span className="line-number">3</span><span className="code-indent"><b>role</b>: <i>&apos;Web developer · AI &amp; DATA Specialist&apos;</i>,</span></div>
            <div className="code-line"><span className="line-number">4</span><span className="code-indent"><b>focus</b>: [</span></div>
            <div className="code-line"><span className="line-number">5</span><span className="code-indent code-indent-deep"><i>&apos;Web applications&apos;</i>,</span></div>
            <div className="code-line"><span className="line-number">6</span><span className="code-indent code-indent-deep"><i>&apos;Frontend engineering&apos;</i></span></div>
            <div className="code-line"><span className="line-number">7</span><span className="code-indent">],</span></div>
            <div className="code-line"><span className="line-number">8</span><span className="code-indent"><b>openToWork</b>: <strong>true</strong></span></div>
            <div className="code-line"><span className="line-number">9</span><span>{'}'}</span></div>
          </div>
          <div className="code-footer">
            <span><i className="status-dot" /> {isLangSwitch ? 'Available for opportunities' : 'Disponibile per nuove opportunità'}</span>
            <span>CT · IT</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
