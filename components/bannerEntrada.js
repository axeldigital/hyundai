import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function BannerEntrada({icono, titulo, width}) {
    return (
        <Container>
            <div align="center">
                <img src={icono} style={{
                    width: width,
                    marginBottom: '20px'
                }} alt="seminuevos hyundai" title="seminuevos hyundai" />
            </div>
            {titulo}
        </Container>
    )
}