import './Home.css'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homecontainer'>
      <div className='watch'>Don't know what to watch?</div>
      <Link to='/quizpage'>
        <button className='startquiz'>START QUIZ!</button>
      </Link>
    </div>
  )
}

export default Home
