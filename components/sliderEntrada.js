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
        <Card.Title>Hyundai Promise</Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <Link href="/pagina">
                  <Button variant="primary" className="favoritos dos">Conoce Huyndai Promise</Button>
              </Link>
            </Col>
            <Col>
              <BannerEntrada
                icono="iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Beneficios del programa"
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <BannerEntrada
                icono="iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Beneficios del programa"
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <BannerEntrada
                icono="iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Beneficios del programa"
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <Link href="/registrar">
                  <Button variant="primary" className="favoritos dos float-right">Quiero vender mi auto</Button>
              </Link>
            </Col>
          </Row>
        </Card.Text>
        </Container>
      </Card.ImgOverlay>
    </Card>
  )
}