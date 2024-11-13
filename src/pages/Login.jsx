import React, { useContext, useState } from 'react'
import { Contexto } from '../context/GlobalContext';
import Input from '../components/Inputs';
import { Link } from 'react-router-dom';

const Login = () => {
  const {setIsLog, user, setUserDataAccess, setInputValidation} = useContext(Contexto)

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeLog, setTypeLog] = useState(false)
  const uploadDataLogin = (e) => {
    e.preventDefault()
    let dataForm = {
      email,
      password
    }
    setInputValidation(true)
    for (let i = 0; i < user.length; i++) {
      if(dataForm.email === user[i].email && dataForm.password === user[i].password) {
        // console.log(user[i]);
        setUserDataAccess(user[i])
        setIsLog(true)
      }
    }
  }

  return <>
     <div className="login">
      <h3>Iniciar Sesion</h3>
      <form action="" onSubmit={uploadDataLogin}>
        <Input 
        type={"email"} 
        text={"Correo Electronico"} 
        placeholder={"Ingrese su correo..."} 
        change={setEmail} 
        data={email}
        name={"correo"}/>
        <Input 
        type={"password"} text={"Contraseña"} 
        placeholder={"Ingrese su contraseña..."} 
        change={setPassword} 
        data={password}
        name={"contraseña"}/>
        <Link to={'/register'} >¿Estás registrado?</Link>
        <button 
        type="submit">Iniciar sesion</button>
      </form>
     
    </div>
  </>
}

export default Login