import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='watch'>Don't know what to watch?</div>
      <div className='container'></div>
      <div>
        <Link to='/'></Link>
        <button className='btn5'>
          <h1>START QUIZ!</h1>
        </button>
      </div>
    </>
  )
}

export default Home
