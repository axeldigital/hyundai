import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})

export default function Tarjeta({link,modelo,precio,anio,imagen}) {
    const cuantos = Math.round(Math.random() * 100)

    return (
        <Card xs={6} sm={6} className="mb-4">
            <Link href={link}>
                <div style={{
                    height: '150px', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <img src={imagen} alt="Seminuevos hyundai" title="Seminuevos hyundai" className="img-fluid" />
                </div>
            </Link>
            <Card.Body>
                <h3>{modelo}</h3>
                <div className="detalles">
                    <p className="desde">Desde {formatter.format(precio)}</p>
                    {/*<p>{kms === 0 ? '' : `${kms} Kilometros`}</p>*/}
                    <p className="modelos">{cuantos} Modelos</p>
                </div>
                <Link href={link} className="w-90">
                    <Button variant="primary">Ver modelos</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}