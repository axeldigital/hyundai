import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import BannerEntrada from '../components/bannerEntrada';

export default function SliderEntrada() {
  return (
    <Card className="bg-dark text-white entrada">
      <Card.Img src="hero.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Hyundai Promise</Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <Link href="/categoria">
                  <Button variant="primary" className="favoritos dos">Conoce Huyndai Promise</Button>
              </Link>
            </Col>
            <Col>
              <BannerEntrada
                icono="/iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Beneficios del programa"
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <BannerEntrada
                icono="/iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Beneficios del programa"
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <BannerEntrada
                icono="/iconos/icono_beneficiosdelprograma_bn.svg"
                titulo="Beneficios del programa"
                boton="Búsqueda Inteligente"
              />
            </Col>
            <Col>
              <Link href="/categoria">
                  <Button variant="primary" className="favoritos dos">Quiero vender mi auto</Button>
              </Link>
            </Col>
          </Row>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}