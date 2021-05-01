import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Tarjeta(props) {
    return (
        <Card>
            <Card.Img variant="top" src="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/UqfXuhelB/i10-newest.png" />
            <Card.Body>
                <h3>Hyundai i10</h3>
                <h3>2021</h3>
                <div className="detalles">
                    <p className="desde">Desde $000,000.00</p>
                    <p>00 Modelos</p>
                </div>
                <Link href={props.link ? props.link : ""}>
                    <Button variant="primary">Ver modelos</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}