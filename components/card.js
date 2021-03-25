import Link from 'next/link'
import Card from 'react-bootstrap/Card'

export default function Carta({titulo, imagen}){
  return(
    <Link href="/condiciones">
      <Card className="bg-dark text-white">
        <Card.Img src={imagen} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><b>{titulo}</b></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  )
}