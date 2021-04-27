import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Slider from "../components/slider";
import Carta from "../components/card";
import Tarjeta from "../components/tarjeta";
import Banner from '../components/banner';
import Filtros from '../components/filtros';

export default function Categoria() {
  return (
    <Layout>
      <Slider className="mt-3" />
      <Container fluid={true} className="destacados">
        <Row>
          <Col>
            <h3 className="text-center p-3">Modelos</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={4}>
            <Filtros />
          </Col>
          <Col>
            <Row>
              <Col>
                <Tarjeta />
              </Col>
              <Col>
                <Tarjeta />
              </Col>
              <Col>
                <Tarjeta />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta />
              </Col>
              <Col>
                <Tarjeta />
              </Col>
              <Col>
                <Tarjeta />
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
      <div className="bannercontenedor">
        <h4>Conoce Hyundai Promise</h4>
        <div className="bannerx">
          <Banner
            icono="/iconos/icono_queeselprograma.svg"
            titulo="¿Qué es el programa Hyundai Promise?"
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
            icono="/iconos/certificacion.svg"
            titulo="¿En qué consiste la certificación?"
            boton="Búsqueda Inteligente"
          />
        </div>
        <div className="bannerx">
          <Banner
            icono="/iconos/162puntos.svg"
            titulo="Revisión de 162 puntos"
            boton="Búsqueda Inteligente"
          />
          <div className="linea"></div>
          <Banner
            icono="/iconos/registrar.svg"
            titulo="Quiero registrar mi auto"
            boton="Búsqueda Inteligente"
          />
          <div className="linea"></div>
          <Banner
            icono="/iconos/contacto.svg"
            titulo="Quiero registrar mi auto"
            boton="Búsqueda Inteligente"
          />
        </div>
      </div>
    </Layout>
  )
}
