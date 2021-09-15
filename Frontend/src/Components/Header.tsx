import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import './Home.tsx'
function Header() {
  return (
    <div className='Header'>
      <div className='navbar'>
        <Link to='/quiz'> Quiz </Link>
        <Link to='/'>Home</Link>
        <button className='btn'>GENRES</button>
        <button className='btn'>YEAR</button>
        <button className='btn'>RATING</button>
        <button className='btn'>ACTOR</button>
        <input type='text' placeholder='Search..' name='search'></input>
      </div>
    </div>
  )
}

export default Header
