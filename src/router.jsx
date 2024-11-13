import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Record from './pages/Record'

function RouterApp() {
  
  return (<>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Record />}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default RouterApp