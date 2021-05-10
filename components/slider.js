import Carousel from 'react-bootstrap/Carousel'

export default function Slider({imagen, texto}) {
  return (
    <Carousel className="registro">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="Conoce Hyundai Promise"
        />
        <Carousel.Caption>
          <h3>{texto}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}