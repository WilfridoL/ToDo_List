import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function RouterApp() {
  
  return (<>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/login' element={<Login />}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default RouterApp