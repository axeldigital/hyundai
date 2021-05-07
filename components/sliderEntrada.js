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
        <Card.Title style={{color:'#012E5E',paddingBottom:'220px'}}>Hyundai Promise</Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <Link href="/categoria">
                  <Button variant="primary" className="favoritos dos">Encuentra tu Hyundai Promise</Button>
              </Link>
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/pin.svg"
                titulo="Asistencia vial"
                texto="Solo por ser parte del programa de Hyundai Promise ofrecemos productos financieros con beneficios especiales para Seminuevos Certificados."
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/check.svg"
                titulo="Inspección de todos los sistemas"
                texto="Como parte de los beneficios de Hyundai Promise ofrecemos seguros con coberturas especiales para Seminuevos Certificados."
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/clock.svg"
                titulo="Programa de Garantía extendida"
                texto="Líder en el segmento de Seminuevos Certificados."
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <Link href="/registrar">
                  <Button variant="primary" className="favoritos dos float-right">Compra y venta</Button>
              </Link>
            </Col>
          </Row>
        </Card.Text>
        </Container>
      </Card.ImgOverlay>
    </Card>
  )
}