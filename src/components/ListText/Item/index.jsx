import React from 'react'

const Item = ({data}) => {
  const {id, text, check} = data
  return (
    <div className="item">
      <input type="checkbox" value={check}/>
      <p>{text}</p>
      <button type="button">Delete</button>
    </div>
  )
}

export default Item