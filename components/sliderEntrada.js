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
        <Card.Title style={{color:'#012E5E'}}>Hyundai Promise</Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <Link href="/pagina">
                  <Button variant="primary" className="favoritos dos">Encuentra tu Hyundai Promise</Button>
              </Link>
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Hyundai Finnance"
                texto="Solo por ser parte del programa de Hyundai Promise ofrecemos productos financieros con beneficios especiales para Seminuevos Certificados."
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Hyundai Protect"
                texto="Como parte de los beneficios de Hyundai Promise ofrecemos seguros con coberturas especiales para Seminuevos Certificados."
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="ASSURANT"
                texto="Líder en el segmento de Seminuevos Certificados."
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col className="p-0 m-0">
              <BannerEntrada
                icono="iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="TOMA Y VENTA"
                texto="Transparencia y confianza en el proceso."
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <Link href="/registrar">
                  <Button variant="primary" className="favoritos dos float-right">Toma y venta</Button>
              </Link>
            </Col>
          </Row>
        </Card.Text>
        </Container>
      </Card.ImgOverlay>
    </Card>
  )
}