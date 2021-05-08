import Carousel from 'react-bootstrap/Carousel'

export default function Slider({imagen}) {
  return (
    <Carousel className="registro">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="Conoce Hyundai Promise"
        />
        <Carousel.Caption>
          <h3>Quiero registrar mi auto</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}