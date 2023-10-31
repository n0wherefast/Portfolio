'use client'
import {useContext,createContext,useState, ReactNode} from 'react'

const AppContext = createContext({})

const AppProvider : React.FC<{children:ReactNode}> =  ({children}) => {
    const [isDarkMode,setIsDarkMode] = useState(true)

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
       }

    return(
        <AppContext.Provider value={{isDarkMode,setIsDarkMode,handleDarkMode}}>
          {children}
        </AppContext.Provider>
      )
}

const useGlobalContext = () =>{
    return useContext(AppContext);
  }

  export {AppProvider,useGlobalContext};