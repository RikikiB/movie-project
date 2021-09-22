import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.tsx'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [drop, setDrop] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to='/quizpage'> Movie Quiz</Link>

      <div className='genresbox'>
        <button className='genres' onClick={() => setDrop(!drop)}>
          Genres
        </button>
        {drop && (
          <div className='listholder'>
            <Link to='/detail/:movieId'>horror</Link>
          </div>
        )}
      </div>

      <div className='yearbox'>
        <button className='year' onClick={() => setOpen((prev) => !prev)}>
          Year
        </button>
        {open && (
          <div className='listholder'>
            <Link to='/detail/:movieId'>2018</Link>
          </div>
        )}
      </div>

      <label>
        <input type='text' placeholder='Search..' name='search' />
        <FontAwesomeIcon icon={faSearchPlus} />
      </label>
    </div>
  )
}

export default Navbar
