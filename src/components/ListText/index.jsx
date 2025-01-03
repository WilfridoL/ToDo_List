import React, { useState } from 'react'
import Item from './Item'

const ContainerItem = ({item}) => {
  console.log(item.lenght);
  
  return (
    <>
      <div className="containerItem">
        {item ? <>
          <h1>No hay tareas disponibles,
          Por favor ingrese nuevas tareas</h1>
        </> : <>
        <h2>Por ahora no hay lista de tareas</h2>
        <h4>Por favor ingrese una lista de tareas</h4>
        </>}
        {item.map(event => <Item data={event} key={event.id} />)}
      </div>
    </>
  )
}

export default ContainerItem