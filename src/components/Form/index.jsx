import React from 'react'
import Input from '../Inputs'

const Formulario = ({submitData, inputs, typeLog, changeLog, reset}) => {
  return (
    <form action="" onSubmit={submitData}>
      {
        inputs.map(event => <Input 
        type={event.type} 
        text={event.text}
        placeholder={event.placeholder}
        change={event.change}
        data={event.data}
        key={event.id}
        />)
      }
      <h5 type='button' onClick={() => {changeLog(!typeLog), reset()}}>
        {typeLog ? "¿Tienes cuenta?" : "¿No tienes cuenta?"}
      </h5>
      <button type='submit'>{typeLog ? "Registrarse" : "Iniciar Sesion"}</button>
    </form>
  )
}

export default Formulario