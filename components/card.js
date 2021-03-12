import Card from 'react-bootstrap/Card'

export default function Carta(){
  return(
    <Card className="bg-dark text-white">
      <Card.Img src="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/3FAdVwEMPE/banner-02-n.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}