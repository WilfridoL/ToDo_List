import React, { useContext, useState } from 'react'
import { Contexto } from '../context/GlobalContext';
import { Log } from '../context/LoginContext';
import Formulario from '../components/Form';

const Login = () => {
  const {formLogin, formRegister, uploadDataLogin, uploadDataRegister, resetInput} = useContext(Log);
  const [typeLog, setTypeLog] = useState(false)

  return <>
     <div className="login">
      {typeLog ? <>
        <h3>Registrarse</h3>
        <Formulario 
        submitData={uploadDataRegister} 
        inputs={formRegister} 
        typeLog={typeLog}
        changeLog={setTypeLog}
        reset={resetInput}/>
      </>:
      <>
        <h3>Iniciar Sesion</h3>
        <Formulario 
        submitData={uploadDataLogin} 
        inputs={formLogin} 
        typeLog={typeLog}
        changeLog={setTypeLog}
        reset={resetInput}/>
      </>}
    </div>
  </>
}

export default Login