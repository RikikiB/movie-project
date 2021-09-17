<<<<<<< HEAD
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import MovieDetailPage from "./views/MovieDetailPage";
import Quizpage from "./Quizpage";
=======
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Quizpage from './Quizpage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Home'
import MovieDetailPage from './views/MovieDetailPage'
import { Link } from 'react-router-dom'
>>>>>>> 61a1f2e2fb109bc5303c7ad17451affd9f3c353d
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <div>
              <Link to="/quizpage"></Link>
              <button className="btn5">
                <h1>START QUIZ!</h1>
              </button>
            </div>
          </Route>
          <Route path="/detail">
            <MovieDetailPage />
          </Route>
          <Route path="/quiz">
            <Quizpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
