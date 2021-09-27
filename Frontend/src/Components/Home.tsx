import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='watch'>Don't know what to watch?</div>
      <div className='container'></div>
      <div>
        <Link className='btn5' to='/quizpage'>
          <h1>START QUIZ!</h1>
        </Link>
      </div>
    </>
  )
}

export default Home
