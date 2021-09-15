import './App.css'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Quizpage from './Quizpage'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route exact path='/quizpage' component={Quizpage}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
