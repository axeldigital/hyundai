import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageGallery from 'react-image-gallery';
import BreadCrumb from '../components/breadCrumb'
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

  const anterior = () => {
    console.log("modelo anterior")
  }

  const siguiente = () => {
    console.log("modelo siguiente")
  }

  return (
    <Layout>
      <Container fluid={true} className="destacados">
        <BreadCrumb valor="/categoria" />
        <Row className="p-0 m-0">
          <Col>
            <h3 className="text-center pt-3 pb-3" style={{
              color: '#002c5e'
            }}>Modelo <i>HNX 2022</i></h3>
          </Col>
        </Row>
        <Row className="p-0 m-0">
          <Col md={9} sm={9}>
            <ImageGallery items={images} />
            <Row className="mt-3 mb-5">
              <Col>
                <p className="text-left m-0 p-0">
                  <small>Descarga ficha técnica</small>
                </p>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <span className="lnr lnr-chevron-left pr-3" onClick={anterior}></span>
                <p className="text-center m-0 p-0">Ver más modelos</p>
                <span className="lnr lnr-chevron-right pl-3" onClick={siguiente}></span>
              </Col>
              <Col>
                <p className="text-right m-0 p-0"><small>Compartir</small></p>
              </Col>
            </Row>
            <Row>
              <div className="bannercontenedor producto">
                <div className="bannerx">
                  <Banner
                    icono="iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="iconos/icono_beneficiosdelprograma.svg"
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
