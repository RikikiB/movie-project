import './Movieslayout.scss'
import Cardstyle from './Cardstyle'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MovieLayout(props) {
  const [movies, setMovies] = useState([])
  const [shows, setShows] = useState([])
  // const [images, setImages] = useState({ images: [] })
  const [open, setOpen] = useState([false])
  const tmdb_api_key = '795cf19c05b9ff607f4b7206a0a4abd3'

  // async function getRecommendations(movieId) {
  //   const URL_api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdb_api_key}&language=en-US&page=1`
  //   const response = await fetch(URL_api)
  //   return await response.json()
  // }

  useEffect(() => {
    const URL_api = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdb_api_key}&language=en-US&page1`
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results)
      })
  }, [])

  useEffect(() => {
    const URL_api = `
    https://api.themoviedb.org/3/tv/popular?api_key=${tmdb_api_key}&language=en-US&page=1`
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setShows(response.results)
      })
  }, [])

  // get movie list here or pass it in as a prop
  console.log(movies)
  console.log(shows)
  return (
    <div>
      <div className='Movieslayout'></div>
      <div className='cardsWrapper'>
        <div className='Cards' onClick={() => setOpen(!open)}>
          {movies?.map((movie) => (
            <Link to={`/detail/${movie.id}`}>
              <Cardstyle key={movie.id} movie={movie} />
            </Link>
          ))}
        </div>
        <div className='Cards2'>
          {shows?.map((show) => (
            <Link to={`/detail/${show.id}`}>
              <Cardstyle key={show.id} show={show} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default MovieLayout
