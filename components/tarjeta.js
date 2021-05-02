import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export default function Tarjeta(props) {
    const cuantos = Math.round(Math.random() * 100)
    return (
        <Card>
            <Link href={props.link ? props.link : ""}>
                <Card.Img variant="top" src="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/UqfXuhelB/i10-newest.png" />
            </Link>
            <Card.Body>
                <h3>Hyundai i10</h3>
                <h3>2021</h3>
                <div className="detalles">
                    <p className="desde">Desde {formatter.format(props.precio)}</p>
                    <p>{props.kilometros === 0 ? '' : `${(props.kilometros).toLocaleString()} Kilometraje`}</p>
                    <p>{cuantos} Modelos</p>
                </div>
                <Link href={props.link ? props.link : ""} className="w-100">
                    <Button variant="primary" className="float-right">Ver modelo</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}