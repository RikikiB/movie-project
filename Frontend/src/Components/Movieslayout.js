import './Movieslayout.scss'
import Carousel from './Carousel'

function MovieLayout() {
  // get movie list here or pass it in as a prop
  return (
    <>
      <div className='Movieslayout'>
        <div className='Carousel'>
          <h1>ACTION</h1>
          <Carousel
            interval={5000}
            indicators={false}
            slides={[
              {
                src: 'bee.jpeg',
                alt: 'First Slide',
                movieId: 'asdfasdf',
              },
              {
                src: 'bee.jpeg',
                alt: 'second Slide',
                movieId: 'asdfasdsfghf',
              },
              {
                src: 'bee.jpeg',
                alt: 'third Slide',
                movieId: 'asdfasdfasdf',
              },
              {
                src: 'bee.jpeg',
                altText: 'fourth Slide',
                movieId: 'asdfasdfasdfe',
              },
            ]}
          />
          <h1>ROMANCE</h1>
          <Carousel
            interval={4000}
            indicators={false}
            slides={[
              {
                src: 'https://upload.wikimedia.org/wikipedia/en/0/00/Dirty_Dancing.jpg',
                altText: 'First Slide',
                movieId: 'asdfasdf',
              },
              {
                src: 'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg',
                altText: 'second Slide',
                movieId: 'asdfasdsfghf',
              },
              {
                src: 'https://m.media-amazon.com/images/M/MV5BMzU3NTYxM2MtNjViMS00YmNlLWEwM2MtYWI2MzgzNTkxODFjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
                altText: 'third Slide',
                movieId: 'asdfasdfasdf',
              },
              {
                src: 'https://m.media-amazon.com/images/I/51iJbYR78qL._AC_.jpg',
                altText: 'fourth Slide',
                movieId: 'asdfasdfasdfe',
              },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default MovieLayout
