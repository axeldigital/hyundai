import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Banner({ icono, titulo, size, linker }) {
    return (
        <Container>
            <div align="center" style={{
                height: '90px'
            }}>
                <img src={icono} style={{
                    width: size ? size : '60px'
                }} alt="" title="" />
            </div>
            <h5 style={{marginBottom: '0',color: '#333'}}>{titulo}</h5>
            <Link href={linker ? linker : '/'}>
                <Button variant="secondary">Conoce más</Button>
            </Link>
        </Container>
    )
}