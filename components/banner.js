import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Banner({titulo, texto, boton}) {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>{titulo}</h1>
                <p>{texto}</p>
                <Button variant="secondary">{boton}</Button>
            </Container>
        </Jumbotron>
    )
}