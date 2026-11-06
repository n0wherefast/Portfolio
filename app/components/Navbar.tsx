'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiSettings, FiX } from 'react-icons/fi'
import { useGlobalContext } from '../context/cotext'
import Switches from './Switch'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { isDarkMode, handleDarkMode, isLangSwitch, handleLangSwitch } = useGlobalContext()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={closeMenu} aria-label="Alessio Russo, home">
          <span className="brand-mark">AR</span>
          <span className="brand-name">Alessio Russo</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <Link href="#projects" className="nav-link" onClick={closeMenu}>Projects</Link>
          <Link href="#skills" className="nav-link" onClick={closeMenu}>Expertise</Link>
          <Link href="/CV_Alessio_Russo.pdf" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Resume ↗
          </Link>
        </nav>

        <div className="nav-actions">
          <div className="settings-wrap">
            <button
              type="button"
              className="settings-button"
              aria-label="Display and language settings"
              aria-expanded={settingsOpen}
              onClick={() => setSettingsOpen((open) => !open)}
            >
              <FiSettings size={19} />
            </button>
            {settingsOpen && (
              <div className="settings-panel">
                <div className="setting-row">
                  <span>Dark theme</span>
                  <Switches checked={isDarkMode} handle={handleDarkMode} label="Toggle dark theme" />
                </div>
                <div className="setting-row">
                  <span>English / Italiano</span>
                  <Switches checked={isLangSwitch} handle={handleLangSwitch} label="Toggle language" />
                </div>
              </div>
            )}
          </div>
          <Link href="#contact" className="nav-cta">Let&apos;s talk</Link>
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
