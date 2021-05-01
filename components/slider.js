import Carousel from 'react-bootstrap/Carousel'

export default function Slider({imagen}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="HYUNDAI SEMINUEVOS"
        />
      </Carousel.Item>
    </Carousel>
  )
}