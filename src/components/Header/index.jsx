import React from 'react'
import { CiLogin } from 'react-icons/ci'
import { FaUserCircle } from 'react-icons/fa'

const Header = ({userName, closeLog}) => {
  return <>
    <header>
      <nav>
        <h1>To Do List</h1>
        <ul>
          <div className="user">
            <h3>{userName} luci</h3>
            <FaUserCircle />
          </div>
          <button type="button" onClick={() => closeLog(false)}><CiLogin className='icon_logUp'/> Log up</button>
        </ul>
      </nav>
    </header>
  </>
}

export default Header