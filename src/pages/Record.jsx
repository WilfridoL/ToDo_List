import React, { useContext, useState } from 'react'
import { Contexto } from '../context/GlobalContext';
import Input from '../components/Inputs';
import { Link } from 'react-router-dom';

const Record = () => {
  const {setInputValidation} = useContext(Contexto)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const uploadDataRegister = (e) => {
    e.preventDefault()
    let dataForm = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      password
    }
    setInputValidation(true)
  }

  return (
    <>
      <h3>Registrar usuario</h3>
      <form action="" onSubmit={uploadDataRegister}>
        <Input 
        text={"Nombre"} 
        placeholder={"Ingrese su nombre..."} 
        change={setName} 
        data={name}
        name={"nombre"}/>
        <Input 
        type={"email"} 
        text={"Correo Electronico"} 
        placeholder={"Ingrese su correo..."} 
        change={setEmail} 
        data={email}
        name={"correo"}/>
        <Input 
        type={"password"} 
        text={"Contraseña"} 
        placeholder={"Ingrese su contraseña..."} 
        change={setPassword} 
        data={password}
        name={"contraseña"}/>
        <Link to={'/login'} >¿Ya tienes una cuenta?</Link>

        <button 
        type="submit" >Registrarse</button>
      </form>
    </>
  )
}

export default Record