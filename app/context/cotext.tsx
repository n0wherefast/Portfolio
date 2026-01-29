"use client"
import { useContext, createContext, useState, ReactNode } from 'react'

export type AppContextType = {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isLangSwitch: boolean
  setIsLangSwitch: React.Dispatch<React.SetStateAction<boolean>>
  handleDarkMode: () => void
  handleLangSwitch: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLangSwitch, setIsLangSwitch] = useState(true)

  const handleDarkMode = () => {
    setIsDarkMode((v) => !v)
  }
  const handleLangSwitch = () => {
    setIsLangSwitch((v) => !v)
  }

  return (
    <AppContext.Provider
      value={{ isDarkMode, setIsDarkMode, isLangSwitch, setIsLangSwitch, handleDarkMode, handleLangSwitch }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = (): AppContextType => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useGlobalContext must be used within AppProvider')
  return ctx
}

export { AppProvider, useGlobalContext }