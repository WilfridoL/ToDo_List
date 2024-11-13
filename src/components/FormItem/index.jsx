import React, { useContext, useState } from 'react'
import { Contexto } from '../../context/GlobalContext'
import Input from '../Inputs'

const Form = () => {
  const {setItemData} = useContext(Contexto)
  
  const [textItem, setTextItem] = useState("")
  const [activeAdd, setActiveAdd] = useState(false)

  const dataItem = (event) => {
    event.preventDefault()
    let data = {
      id: Math.floor(Math.random() * 1000),
      text: textItem,
      check:false
    }
    setItemData((prevItem) => [...prevItem, data])
    
  } 

  return (<>
    <div className="new_item">
        {activeAdd ? <form onSubmit={dataItem} className="input_new_item">
        <Input data={textItem} change={setTextItem}/>
          <button type="submit">Añadir</button>
          <button type="button" onClick={() => setActiveAdd(!activeAdd)}>X</button>
        </form> :
        <div className="btn_new_item">
          <button type="button" onClick={() => setActiveAdd(!activeAdd)}>Añadir nuevo item</button>
        </div> }
      </div>
  </>
  )
}

export default Form