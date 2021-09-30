import BootstrapCard from 'react-bootstrap/Card'
import './Movieslayout'
import './Cardstyle.scss'

function Cardstyle({ movie, show }: { movie: any; show: any }) {
  console.log({ movie, show })
  return movie ? (
    <BootstrapCard className='bg-dark text-white '>
      <BootstrapCard.Img
        className='Card'
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        alt='Card Image'
      />
    </BootstrapCard>
  ) : (
    <BootstrapCard className='bg-dark text-white '>
      <BootstrapCard.Img
        className='Card2test'
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${show.poster_path}`}
        alt='Card2'
      />
    </BootstrapCard>
  )
}

export default Cardstyle
