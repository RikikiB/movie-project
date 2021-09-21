import React from 'react'
import BootstrapCarousel from 'react-bootstrap/Carousel'
import BootstrapOnSlide from 'react-bootstrap'
import './Carousel.scss'

function Carousel() {
  return (
    <div id='Carousel-item' className='Carousel-slide'>
      <BootstrapCarousel>
        <BootstrapCarousel.Item interval={1000}>
          <img
            className='A'
            src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg'
            alt='Movie 1'
          />
          <BootstrapCarousel.Caption>
            <h3>Avengers</h3>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item interval={500}>
          <img
            className='B'
            src='https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg'
            alt='Movie 2'
          />
          <BootstrapCarousel.Caption>
            <h3>Black Panther</h3>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className='C'
            src='https://ichef.bbci.co.uk/images/ic/1200x675/p061d1pl.jpg'
            alt='Movie 3'
          />
          <BootstrapCarousel.Caption>
            <h3>Guardian's of the Galaxy</h3>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  )
}
function onSlide() {
  return <div className='Slide'></div>
}

export default Carousel
