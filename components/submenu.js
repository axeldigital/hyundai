import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Submenu() {
  return (
    <Container fluid={true} className="submenu">
      <Container>
      <Row className="m-0 p-0">
        <Col className="flex align-items-center justify-content-center">
          <ul>
            <li>
              <Link href="/programa">
                <a>¿Qué es hyundai promise?</a>
              </Link>
            </li>
            <li>
              <Link href="/beneficios">
                <a>Beneficios de Hyundai Promise</a>
              </Link>
            </li>
            <li>
              <Link href="/certificacion">
                <a>Cerificación de Seminuevos</a>
              </Link>
            </li>
            <li>
              <Link href="/registrar">
                <a>Vende tu Hyundai</a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      </Container>
      
    </Container>
  )
}