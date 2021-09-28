import './App.css'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../main.css'
import Home from './Home'
import MovieDetailPage from './views/MovieDetailPage'
import Flashmain from './question/Flashmain.js'
import MovieLayout from './Movieslayout'
import Navbar from './dropdownmenu.js'

const tmdb_api_key = '795cf19c05b9ff607f4b7206a0a4abd3'
function App() {
  const [genres, setGenres] = useState({ genres: [] })

  useEffect(() => {
    const URL_api = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdb_api_key}&language=en-US`
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setGenres(response)
      })
  }, [])
  return (
    <div className='App'>
      <Router>
        <Navbar genres={genres} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/detail/:movieId'>
            <MovieDetailPage />
          </Route>
          <Route path='/Movieslayout'>
            <MovieLayout />
          </Route>
          <Route path='/quizpage'>
            <Flashmain />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
export { tmdb_api_key }
export default App
