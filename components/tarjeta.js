import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Tarjeta() {
    return (
        <Card>
            <Card.Img variant="top" src="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/UqfXuhelB/i10-newest.png" />
            <Card.Body>
                <Card.Title>Hyundai i10</Card.Title>
                <Card.Text className="pb-0">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">VER DETALLES</Button>
            </Card.Body>
        </Card>
    )
}