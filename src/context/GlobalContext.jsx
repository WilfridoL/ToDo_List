import { createContext, useEffect, useState } from 'react';

export const Contexto = createContext()
const GlobalContext = ({ children }) => {

  // STATES
  const [isLog, setIsLog] = useState(false)
  const [inputValidation, setInputValidation] = useState(false)
  const [userDataAccess, setUserDataAccess] = useState([])
  const [itemData, setItemData] = useState([])
  const itemDelete = (id) => {
    itemData.map(event => {
      if(event.id == id) console.log(event);
    })
    console.log(itemData);
  }
  // USER API
  // API GET
  const newUser = async (event) => {
    const res = await fetch(`http://localhost:3000/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
    })
    const data = await res.json()
  }

  // API PUSH
  
  return (
    <Contexto.Provider value={{ 
      isLog, 
      setIsLog, 
      newUser,
      setUserDataAccess, 
      userDataAccess,
      itemData, 
      setItemData,
      itemDelete,
      inputValidation, 
      setInputValidation
      }}>
      {children}
    </Contexto.Provider>
  )
}

export default GlobalContext