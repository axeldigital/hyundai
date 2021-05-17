import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export default function Tarjeta({link,modelo,precio,kilometros,anio,imagen}) {
    const cuantos = Math.round(Math.random() * 100)
    let kms = kilometros.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
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
                    <img src="https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/home/carrusel/accent-sedan-2021-1600X590.jpg" alt="" title="" className="img-fluid" />
                </div>
            </Link>
            <Card.Body>
                <h3>{modelo}</h3>
                <h3>{anio}</h3>
                <div className="detalles">
                    <p className="desde">Desde {formatter.format(precio)}</p>
                    {/*<p>{kms === 0 ? '' : `${kms} Kilometros`}</p>*/}
                    <p>{cuantos} Modelos</p>
                </div>
                <Link href={link} className="w-90">
                    <Button variant="primary">Ver modelos</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}