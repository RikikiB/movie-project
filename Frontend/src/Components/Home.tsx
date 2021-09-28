import './Home.css'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homecontainer'>
      <div className='watch'>Don't know what to watch?</div>
      <Link to='/quizpage'>
        <div className='startquiz'>START QUIZ!</div>
      </Link>
    </div>
  )
}

export default Home
