import './App.css'
import Footer from './Footer'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../main.css'

import Home from './Home'
import MovieDetailPage from './views/MovieDetailPage'
import Quizpage from './Quizpage'
import MovieLayout from './Movieslayout'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
            <div>
              <Link to='/quizpage'></Link>
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
          <Route path='/quiz'>
            <Quizpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
