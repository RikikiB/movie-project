import './App.css'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import MovieDetailPage from './views/MovieDetailPage'
import Quizpage from './Quizpage'
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
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
