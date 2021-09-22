import BootstrapCarousel from 'react-bootstrap/Carousel'
// import './Carousel.scss'

interface iCarousel {
  slides: any
  rest?: any
}

function Carousel({ slides = [], ...rest }: iCarousel) {
  if (!slides.length) return null
  return (
    <BootstrapCarousel {...rest}>
      {slides?.map((slide: any) => {
        return (
          <BootstrapCarousel.Item
            key={slide.movieId}
            onClick={() => {
              alert(slide.movieId)
            }}
          >
            <img
              className='d-block w-50'
              src={slide?.src}
              alt={slide?.altText}
            />

            <BootstrapCarousel.Caption>
              <h3>{slide?.label}</h3>
              <p>{slide?.desc}</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        )
      })}
    </BootstrapCarousel>
  )
}
export default Carousel
