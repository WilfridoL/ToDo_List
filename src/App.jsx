import { useContext, useEffect, useState } from 'react'
import Login from './pages/Login'
import { Contexto } from './context/GlobalContext'
import Home from './pages/Home'
import Formulario from './components/Form'
function App() {
  const {isLog} = useContext(Contexto)
  return <>
    {/* {isLog ? 
    <Home />: 
    <Login />
    } */}
    <Home />
  </>
}

export default App
