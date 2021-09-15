import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className='Header'>
      <button className='btn'>GENRES</button>
      <button className='btn'>YEAR</button>
      <button className='btn'>RATING</button>
      <button className='btn'>ACTOR</button>
      <input type='text' placeholder='Search..' name='search'></input>
      <Link to='/'>Home</Link>
      <Link to='/quiz'> Quiz </Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Header
