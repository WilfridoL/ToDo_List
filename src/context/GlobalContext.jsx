import { createContext, useEffect, useState } from 'react';

export const Contexto = createContext()
const GlobalContext = ({ children }) => {

  // STATES
  const [isLog, setIsLog] = useState(false)
  const [inputValidation, setInputValidation] = useState(false)
  const [user, setUser] = useState([])
  const [userDataAccess, setUserDataAccess] = useState([])
  const [itemData, setItemData] = useState([])
  

  
  // USER API
  // API GET
  const api = async () => {
    const res = await fetch(`http://localhost:3000/user`)
    const data = await res.json()
    setUser([...data])
  }
  
  useEffect(() => {
    api()
  }, [])

  // API PUSH
  
  return (
    <Contexto.Provider value={{ 
      isLog, 
      setIsLog, 
      user, 
      setUserDataAccess, 
      userDataAccess,
      itemData, 
      setItemData,
      inputValidation, 
      setInputValidation
      }}>
      {children}
    </Contexto.Provider>
  )
}

export default GlobalContext