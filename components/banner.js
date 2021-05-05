import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Banner({ icono, titulo, texto, boton }) {
    return (
        <Container>
            <div align="center" style={{
                height: '90px'
            }}>
                <img src={icono} style={{
                    width: '60px'
                }} alt="" title="" />
            </div>
            <h5 style={{marginBottom: '0'}}>{titulo}</h5>
            <Link href="/categoria">
                <Button variant="secondary">Ver más</Button>
            </Link>
        </Container>
    )
}