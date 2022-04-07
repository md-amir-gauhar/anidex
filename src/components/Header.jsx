import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header flex align-center justify-between'>
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <Link to='#'>Login</Link>
    </header>
  )
}

export default Header