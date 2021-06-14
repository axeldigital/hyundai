import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function TarjetaAdmin({modelo, precio, kilometros, anio, imagen}) {
  const alerta = () => {
    alert("Seguro quiere eliminarlo?")
  }
    return (
        <Card>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <h3 className="mt-4">{modelo}</h3>
                <h3>{anio}</h3>
                <div className="detalles">
                    <div className="adminot">
                        <p className="desde">$ {precio}.00</p>
                        <p className="desde">{kilometros} km</p>
                    </div>
                    <p><span className="oppt">Alta:</span> - 2 de mayo 2021</p>
                    <p><span className="oppt">Vencimiento:</span> - 2 de julio 2021</p>
                </div>
                <div className="d-flex justify-content-between">
                    <Link href="/admin/editarvehiculo">
                        <Button variant="primary" className="w-50 pl-1 pr-1">Editar</Button>
                    </Link>
                    <img src="/iconos/trash-solid.svg" alt="" title="" className="float-right mr-3" style={{width: '20px'}} onClick={alerta} />
                </div>
                
            </Card.Body>
        </Card>
    )
}