import './Movieslayout.scss'
import Carousel from './Carousel'

function MovieLayout() {
  // get movie list here or pass it in as a prop
  return (
    <div className='Movielayout'>
      <h1> This is for the layout of all movies</h1>
      <Carousel
        indicators={false}
        slides={[
          {
            src: 'https://via.placeholder.com/800x400.png',
            altText: 'First Slide',
            label: 'first slide label',
            desc: 'first slide desc',
            movieId: 'asdfasdf',
          },
          {
            src: 'https://via.placeholder.com/800x400.png',
            altText: 'second Slide',
            label: 'second slide label',
            desc: 'second slide desc',
            movieId: 'asdfasdsfghf',
          },
          {
            src: 'https://via.placeholder.com/800x400.png',
            altText: 'third Slide',
            label: 'third slide label',
            desc: 'third slide desc',
            movieId: 'asdfasdfasdf',
          },
        ]}
      />
    </div>
  )
}

export default MovieLayout
