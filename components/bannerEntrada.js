import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function BannerEntrada({icono, titulo, texto, boton}) {
    return (
        <Container className="mt-5">
            <div align="center">
                <img src={icono} style={{
                    width: '30px',
                    marginBottom: '20px'
                }} alt="" title="" />
            </div>
            <h5>{titulo}</h5>
            <p>{texto}</p>
            <Button variant="secondary">Ver más</Button>
        </Container>
    )
}