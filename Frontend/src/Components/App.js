import './App.css'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../main.css'
import Home from './Home'
import MovieDetailPage from './views/MovieDetailPage'
import Quizpage from './Quizpage.js'
import MovieLayout from './Movieslayout'
import Navbar from './dropdownmenu.js'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
            <div>
              <Link to='/'></Link>
              <button className='btn5'>
                <h1>START QUIZ!</h1>
              </button>
            </div>
          </Route>
          <Route path='/detail/:movieId'>
            <MovieDetailPage />
          </Route>
          <Route path='/Movieslayout'>
            <MovieLayout />
          </Route>
          <Route path='/quizpage'>
            <Quizpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
