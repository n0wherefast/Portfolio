'use client'
import {useContext,createContext,useState, ReactNode} from 'react'

const AppContext = createContext({})

const AppProvider : React.FC<{children:ReactNode}> =  ({children}) => {
    const [isDarkMode,setIsDarkMode] = useState(true)
    const [isLangSwitch,setIsLangSwitch] = useState(false)


    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
       }
       const handleLangSwitch = () => {
        setIsLangSwitch(!isLangSwitch)
        // console.log (isLangSwitch)
      }

    return(
        <AppContext.Provider value={{isDarkMode,isLangSwitch,handleLangSwitch,setIsLangSwitch,setIsDarkMode,handleDarkMode}}>
          {children}
        </AppContext.Provider>
      )
}

const useGlobalContext = () =>{
    return useContext(AppContext);
  }

  export {AppProvider,useGlobalContext};