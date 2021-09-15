import './App.css'
import Footer from './Footer'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './views/Home'
function App() {
  return (
    <Router>
      <div className='App'>
        <Footer />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Header />
      </div>
    </Router>
  )
}

export default App
