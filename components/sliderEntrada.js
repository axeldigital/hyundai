import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import BannerEntrada from '../components/bannerEntrada';

export default function SliderEntrada() {
  return (
    <Card className="bg-dark text-white entrada banner">
      <Card.ImgOverlay>
        <Container>
        <Card.Title style={{color:'#012E5E',paddingBottom:'290px'}}>Hyundai Promise</Card.Title>
        <Card.Text>
          <Row className="d-flex align-items-center">
            <Col>
              <Link href="/categoria">
                  <Button variant="primary" className="favoritos dos">Consulta del catálogo</Button>
              </Link>
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/clock.svg"
                titulo="Garantía extendida"
              />
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/pin.svg"
                titulo="Asistencia vial"
              />
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/check.svg"
                titulo="Inspección completa sistemas"
              />
            </Col>
            <Col>
              <Link href="/registrar">
                  <Button variant="primary" className="favoritos dos float-right">Vende tu Hyundai</Button>
              </Link>
            </Col>
          </Row>
        </Card.Text>
        </Container>
      </Card.ImgOverlay>
    </Card>
  )
}