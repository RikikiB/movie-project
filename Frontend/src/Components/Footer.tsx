import React from 'react'

import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      {''}
      <Link to='/'>Home</Link>
      <Link to='/quiz'></Link>
      <Link to='/about'>About</Link>
      <h4> 2021 Punchcode team SSK, all rights reserved</h4>
    </div>
  )
}
export default Footer
