import './App.css'
import Footer from './Footer'
import Header from './Header'
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import MovieDetailPage from './views/MovieDetailPage'
import Quizpage from './Quizpage'
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Home'
import MovieDetailPage from './views/MovieDetailPage'
import { Link } from 'react-router-dom'
>>>>>>> 8f1dd34d7fa7c2f87720365d1999ff4a38de1d0a
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
<<<<<<< HEAD
=======
            <div>
              <Link to='/quizpage'></Link>
              <button className='btn5'>
                <h1>START QUIZ!</h1>
              </button>
            </div>
>>>>>>> 8f1dd34d7fa7c2f87720365d1999ff4a38de1d0a
          </Route>
          <Route path='/detail'>
            <MovieDetailPage />
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
