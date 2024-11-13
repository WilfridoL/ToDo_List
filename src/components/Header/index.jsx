import React from 'react'

const Header = ({userName, closeLog}) => {
  return <>
    <header>
      <nav>
        <h1>To Do List</h1>
        <ul>
          <div className="user">
            <h3>{userName}</h3>
            <i>user_icon</i>
          </div>
          <button type="button" onClick={() => closeLog(false)}>Log up</button>
        </ul>
      </nav>
    </header>
  </>
}

export default Header