import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Header() {
  return (
    <Container className="p-3 menuprincipal">
      <Row>
        <Col md={2}>
          <Link href="/">
            <img src="/logo-hyundai.svg" alt="hyndai seminuevos" title="hyundai seminuevos" style={{
              width: '150px'
            }} />
          </Link>
        </Col>
        <Col md={7} className="flex align-items-center justify-content-center">
          <ul>
            <li>
              <Link href="/">
                <a>Modelos</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Financiamiento</a>
              </Link>
            </li>
            <li>
              <Link href="/categoria">
                <a>Seminuevos</a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={3} className="p-0">
          <p className="text-right pr-0">
            <span className="lnr lnr-map-marker"></span> Hyundai Coacalco
            <Link href="/">
              <span className="lnr lnr-menu mx-2"></span>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}