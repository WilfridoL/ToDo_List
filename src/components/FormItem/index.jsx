import React, { useContext, useState } from 'react'
import { Contexto } from '../../context/GlobalContext'
import Input from '../Inputs'
import { FaPaperPlane, FaPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const FormItem = () => {
  const { setItemData } = useContext(Contexto)

  const [textItem, setTextItem] = useState("")
  const [activeAdd, setActiveAdd] = useState(false)

  const dataItem = (event) => {
    event.preventDefault()
    let data = {
      id: Math.floor(Math.random() * 1000),
      text: textItem,
      check: false
    }
    setItemData((prevItem) => [...prevItem, data])

  }

  return (<>
    <div className="new_item">
      {activeAdd ? <form onSubmit={dataItem} className="input_new_item">
        <button type="button" onClick={() => setActiveAdd(!activeAdd)}><IoClose /></button>
        <Input data={textItem} change={setTextItem} />
        <button type="submit"><FaPaperPlane /></button>
      </form> :
        <div className="btn_new_item">
          <button type="button" onClick={() => setActiveAdd(!activeAdd)}>
            <div className='icon_plus'><FaPlus /></div>
            Add new list
          </button>
        </div>}
    </div>
  </>
  )
}

export default FormItem