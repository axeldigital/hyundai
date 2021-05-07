import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Submenu() {
  return (
    <Container fluid={true} className="submenu">
      <Row className="m-0 p-0">
        <Col className="flex align-items-center justify-content-center">
          <ul>
            <li>
              <Link href="/categoria">
                <a>Seminuevos Certificados</a>
              </Link>
            </li>
            <li>
              <Link href="/registro">
                <a>Registro para toma y venta</a>
              </Link>
            </li>
            <li>
              <Link href="/beneficios">
                <a>Beneficios Hyundai Promise</a>
              </Link>
            </li>
            <li>
              <Link href="/pagina">
                <a>¿Qué es Hyundai Promise?</a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}