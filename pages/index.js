import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Slider from "../components/slider";
import Carta from "../components/card";
import Tarjeta from "../components/tarjeta";
import Banner from '../components/banner';

export default function Home() {
  return (
    <Layout>
      <Slider className="mt-3" />
      <Container className="categorias">
        <Row>
          <Col>
            <Carta 
              titulo="Búsqueda Inteligente"
              imagen="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/3FAdVwEMPE/kona%20ev%201.jpg"
            />
          </Col>
          <Col>
            <Carta 
              titulo="Promociones"
              imagen="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/3FAdVwEMPE/banner-02-n.jpg"
            />
          </Col>
          <Col>
            <Carta 
              titulo="Promesas"
              imagen="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/3FAdVwEMPE/ioniq%203.jpg"
            />
          </Col>
        </Row>
      </Container>
      <Container className="destacados">
        <Row>
          <Col>
            <h2 className="text-center">Modelos destacados</h2>
            <p className="text-center">Encuentra entre nuestros modelos disponibles el Hyundai que mejor se adapta a ti, y disfruta con toda tranquilidad del programa DE PROMESAS.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tarjeta/>
          </Col>
          <Col>
            <Tarjeta/>
          </Col>
          <Col>
            <Tarjeta/>
          </Col>
          <Col>
            <Tarjeta/>
          </Col>
        </Row>
        <Row className="mt-3 mb-5">
          <Col>
            <Tarjeta/>
          </Col>
          <Col>
            <Tarjeta/>
          </Col>
          <Col>
            <Tarjeta/>
          </Col>
          <Col>
            <Tarjeta/>
          </Col>
        </Row>
      </Container>
      <Banner 
        titulo="¿SABES LO QUE ESTÁS BUSCANDO?"
        texto="Si conoces el modelo que deseas, por qué no probar nuestra búsqueda por modelo para una selección más rápida y fácil."
        boton="Búsqueda Inteligente"
      />
    </Layout>
  )
}
