import React, { useContext, useEffect, useState } from 'react'
import { Contexto } from '../../context/GlobalContext'

const Input = ({ type, placeholder, name, text, change, data }) => {
  // const { inputValidation } = useContext(Contexto)
  if (type == null || type === "") type = "text"

  // const [mensajeError, setMensajeError] = useState('');

  // Función que se ejecuta cuando el valor del input cambia
  const actualizarTexto = (event) => {
    change(event.target.value)
  }


  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input 
        type={type}
        placeholder={placeholder} 
        name={name} 
        onChange={actualizarTexto} 
        value={data}
        required
      />
    </div>
  )
}

export default Input
