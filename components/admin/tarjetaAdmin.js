import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function TarjetaAdmin(props) {
  const alerta = () => {
    alert("Seguro quiere eliminarlo?")
  }
    return (
        <Card>
            <Card.Img variant="top" src="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/UqfXuhelB/i10-newest.png" />
            <Card.Body>
                <h3>Hyundai i10</h3>
                <h3>2021</h3>
                <div className="detalles">
                    <div className="adminot">
                        <p className="desde">$100,000.00</p>
                        <p className="desde">30,000 km</p>
                    </div>
                    <p><span className="oppt">Alta:</span> - 2 de mayo 2021</p>
                    <p><span className="oppt">Vencimiento:</span> - 2 de julio 2021</p>
                </div>
                <Link href={props.link ? props.link : ""}>
                    <Button variant="primary" className="w-50 pl-1 pr-1">Editar</Button>
                </Link>
                <img src="/iconos/trash-solid.svg" alt="" title="" className="float-right mr-3" onClick={alerta} />
            </Card.Body>
        </Card>
    )
}