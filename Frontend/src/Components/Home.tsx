import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="container">
        <h2>Don't know what to watch?</h2>
        <Link to="/quizpage">
          <button className="btn5">
            <h1>START QUIZ!</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
