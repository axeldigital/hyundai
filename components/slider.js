import Carousel from 'react-bootstrap/Carousel'

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hero.png"
          alt="HYUNDAI SEMINUEVOS"
        />
      </Carousel.Item>
    </Carousel>
  )
}