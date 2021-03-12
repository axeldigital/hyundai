import Carousel from 'react-bootstrap/Carousel'

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner.jpg"
          alt="HYUNDAI SEMINUEVOS"
        />
        <Carousel.Caption>
          <h3>SEMINUEVOS</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner.jpg"
          alt="HYUNDAI SEMINUEVOS"
        />
        <Carousel.Caption>
          <h3>PROMESA</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner.jpg"
          alt="HYUNDAI SEMINUEVOS"
        />
        <Carousel.Caption>
          <h3>EXPERIENCIA</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}