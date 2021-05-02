import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export default function Tarjeta({link,modelo,precio,kilometros,anio,imagen}) {
    const cuantos = Math.round(Math.random() * 100)
    return (
        <Card className="mb-4">
            <Link href={link ? link : ""}>
                <div style={{
                    height: '150px', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Card.Img variant="top" src={imagen} />
                </div>
            </Link>
            <Card.Body>
                <h3>{modelo}</h3>
                <h3>{anio}</h3>
                <div className="detalles">
                    <p className="desde">Desde {formatter.format(precio)}</p>
                    <p>{kilometros === 0 ? '' : `${kilometros} Kilometraje`}</p>
                    <p>{cuantos} Modelos</p>
                </div>
                <Link href={link ? link : ""} className="w-100">
                    <Button variant="primary">Ver modelo</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}