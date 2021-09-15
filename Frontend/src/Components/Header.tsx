import React from 'react'
import { Link } from 'react-router-dom'
import './mysass.scss'

function Header() {
  return (
    <div className='Header'>
      <button className='btn1'>GENRES</button>
      <button className='btn2'>YEAR</button>
      <button className='btn3'>RATING</button>
      <button className='btn4'>ACTOR</button>
      <input type='text' placeholder='Search..' name='search'></input>
      <div className='container'>
        <h2>Don't know what to watch?</h2>
        <button className='btn5'>
          <h1>START QUIZ!</h1>
        </button>
      </div>
    </div>
  )
}

export default Header
