import Carousel from 'react-bootstrap/Carousel'

export default function Slider({imagen}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="Conoce Hyundai Promise"
        />
      </Carousel.Item>
    </Carousel>
  )
}