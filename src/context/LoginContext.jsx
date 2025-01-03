import React, { createContext, useContext, useEffect, useState } from "react";
import { Contexto } from "./GlobalContext";

export const Log = createContext();

const LoginContext = ({ children }) => {
  const {setIsLog, setUserDataAccess, newUser} = useContext(Contexto)

  const [name, setName] = useState("");
  const [user, setUser] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = async () => {
    const res = await fetch(`http://localhost:3000/user`)
    const data = await res.json()
    setUser([...data])
  }

  useEffect(() => {
    api()
  }, [])
  const formLogin = [
    {
      id: 1,
      type: "email",
      text: "Correo Electronico",
      placeholder: "Ingrese su correo...",
      change: setEmail,
      data: email.toLowerCase(),
      name: "correo"
    },
    {
      id: 2,
      type: "password",
      text: "Contraseña",
      placeholder: "Ingrese su contraseña...",
      change: setPassword,
      data: password,
      name: "contraseña"
    }
  ]
  const formRegister = [
    {
      id: 1,
      type: "",
      text: "Nombre",
      placeholder: "Ingrese su nombre...",
      change: setName,
      data: name,
      name: "nombre"
    },
    {
      id: 2,
      type: "email",
      text: "Correo Electronico",
      placeholder: "Ingrese su correo...",
      change: setEmail,
      data: email.toLowerCase(),
      name: "correo"
    },
    {
      id: 3,
      type: "password",
      text: "Contraseña",
      placeholder: "Ingrese su contraseña...",
      change: setPassword,
      data: password,
      name: "contraseña"
    }
  ]
  const uploadDataLogin = (e) => {
    e.preventDefault()
    let dataForm = {
      email,
      password
    }
    console.log(dataForm);
    
    for (let i = 0; i < user.length; i++) {
      if(dataForm.email === user[i].email && dataForm.password === user[i].password) {
        console.log(user[i]);
        setUserDataAccess(user[i])
        setIsLog(true)
        resetInput()
      }
    }
  }
  const uploadDataRegister = (e) => {
    e.preventDefault()
    let dataForm = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      password
    }
    newUser(dataForm)
    resetInput()
  }
  const resetInput = () => {
    setName("")
    setEmail("")
    setPassword("")
  }
  return (
    <Log.Provider value={{
    formLogin, 
    formRegister, 
    uploadDataLogin, 
    uploadDataRegister, 
    resetInput
    }}>
      {children}
    </Log.Provider>
  )
}

export default LoginContext