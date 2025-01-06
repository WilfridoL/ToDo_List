import React, { useContext, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import { Contexto } from '../../../context/GlobalContext'

const Item = ({ data }) => {
  const { id, text, check } = data
  const {itemDelete} = useContext(Contexto)
  const [active_menu, setActive_menu] = useState(false)
  const [changeCheckbox, setChangeCheckbox] = useState(check)
  const change = (e) => {
    setChangeCheckbox(e.target.checked);
  }
  return (
    <div className="item">
      <input type="checkbox" checked={changeCheckbox} onChange={change} />
      <div className="item_text">
        <p className={changeCheckbox ? "active_line" : ""}>{text}</p>
        <button type="button" onClick={() => setActive_menu(!active_menu)}><BsThreeDotsVertical /></button>
      </div>
      {active_menu ?
        <button type='button' onClick={() => itemDelete(id)} className="dropdown_menu">
          <FaTrash />
          Delete
        </button>
        :
        ""}
    </div>
  )
}

export default Item