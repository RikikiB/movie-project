import './Movieslayout.scss'
import Carousel from './Carousel'

function MovieLayout() {
  // get movie list here or pass it in as a prop
  return (
    <div className='Movielayout'>
      <h1>ACTION</h1>
      <Carousel
        interval={5000}
        indicators={false}
        slides={[
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg',
            altText: 'First Slide',
            label: 'first slide label',
            desc: 'first slide desc',
            movieId: 'asdfasdf',
          },
          {
            src: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
            altText: 'second Slide',
            label: 'second slide label',
            desc: 'second slide desc',
            movieId: 'asdfasdsfghf',
          },
          {
            src: 'https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0%2C0%2C1400%2C2100',
            altText: 'third Slide',
            label: 'third slide label',
            desc: 'third slide desc',
            movieId: 'asdfasdfasdf',
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg',
            altText: 'fourth Slide',
            label: 'fourth slide label',
            desc: 'fourth slide desc',
            movieId: 'asdfasdfasdfe',
          },
        ]}
      />
      <h1>ROMANCE</h1>
      <Carousel
        interval={5000}
        indicators={false}
        slides={[
          {
            src: 'https://upload.wikimedia.org/wikipedia/en/0/00/Dirty_Dancing.jpg',
            altText: 'First Slide',
            label: 'first slide label',
            desc: 'first slide desc',
            movieId: 'asdfasdf',
          },
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg',
            altText: 'second Slide',
            label: 'second slide label',
            desc: 'second slide desc',
            movieId: 'asdfasdsfghf',
          },
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMzU3NTYxM2MtNjViMS00YmNlLWEwM2MtYWI2MzgzNTkxODFjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            altText: 'third Slide',
            label: 'third slide label',
            desc: 'third slide desc',
            movieId: 'asdfasdfasdf',
          },
          {
            src: 'https://m.media-amazon.com/images/I/51iJbYR78qL._AC_.jpg',
            altText: 'fourth Slide',
            label: 'fourth slide label',
            desc: 'fourth slide desc',
            movieId: 'asdfasdfasdfe',
          },
        ]}
      />
    </div>
  )
}

export default MovieLayout
