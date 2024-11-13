import { useContext, useEffect, useState } from 'react'
import Login from './pages/Login'
import { Contexto } from './context/GlobalContext'
import Home from './pages/Home'
function App() {
  const {isLog} = useContext(Contexto)
  
  return <>
    {isLog ? 
    <Home />: 
    <Login />
    }
  </>
}

export default App
