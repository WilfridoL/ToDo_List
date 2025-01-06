import React, { useState } from 'react'
import Item from './Item'

const ContainerItem = ({item}) => {
  let length0fObject = 0;
  const getLengthOfObject = (obj) => {

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          length0fObject++;
        }
      }

      // console.log(length0fObject);
      return length0fObject;
    }

  
  getLengthOfObject(item)
  return (
    <>
      <div className="containerItem">
        {length0fObject != 0 ? <>
          {item.map(event => <Item data={event} key={event.id} />)}
        </> : <>
          <h1>No hay tareas disponibles,
          Por favor ingrese nuevas tareas</h1>
        </>}
      </div>
    </>
  )
}

export default ContainerItem