import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './Home.tsx'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [genre, setGenre] = useState({ genres: [] })
  const [rating, setRating] = useState({ results: [] })
  const [drop, setDrop] = useState(false)
  const [open, setOpen] = useState(false)

  const tmdb_api_key = '795cf19c05b9ff607f4b7206a0a4abd3'

  useEffect(() => {
    const URL_api = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdb_api_key}&language=en-US`
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setGenre(response)
      })
  }, [])

  useEffect(() => {
    const URL_api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdb_api_key}&language=en-US&page=1`
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setRating(response)
      })
  }, [])
  console.log(rating)
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
            {genre.genres.map(function (genre) {
              return <li key={genre.name}>{genre.name} </li>
            })}
          </div>
        )}
      </div>

      <div className='ratebox'>
        <button className='ratinglist' onClick={() => setOpen(!open)}>
          Top Rated
        </button>
        {open && (
          <div className='listholder'>
            {rating.results.map(function (rating) {
              return <li key={rating.id}>{rating.title} </li>
            })}
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
