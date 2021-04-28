import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageGallery from 'react-image-gallery';
import Slider from "../components/slider";
import Carta from "../components/card";
import Tarjeta from "../components/tarjeta";
import Banner from '../components/banner';
import FiltrosProductos from '../components/filtrosProductos';

const images = [
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
  },
];

export default function Producto() {
  return (
    <Layout>
      <Container fluid={true} className="destacados">
        <Row>
          <Col>
            <h3 className="text-center p-3">Modelos</h3>
          </Col>
        </Row>
        <Row>
          <Col md={9} sm={9}>
            <ImageGallery items={images} />
            <Row className="mt-3">
              <Col>
                <p><small>Descarga ficha técnica</small></p>
              </Col>
              <Col>
                <p>Ver más modelos</p>
              </Col>
              <Col>
                <p><small>Compartir</small></p>
              </Col>
            </Row>
            <Row>
              <div className="bannercontenedor producto">
                <div className="bannerx">
                  <Banner
                    icono="/iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="/iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="/iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                </div>
              </div>
            </Row>
          </Col>
          <Col md={3} sm={3}>
            <FiltrosProductos />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
