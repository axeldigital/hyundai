import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Slider from "../components/slider";
import Carta from "../components/card";
import Tarjeta from "../components/tarjeta";
import Banner from '../components/banner';
import Filtros from '../components/filtros';

export default function Pagina() {
  return (
    <Layout>
      <Slider className="mt-3" imagen="hero.png" />
      <Container className="mb-3">
        <Row>
          <Col md={4}>
            <img src="guerita.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <h3>Conoce Hyundai Promise</h3>
              <h4>Qué es Hyundai Promise</h4>
              <p><small>Hyundai Promise nace de la búsqueda de las personas por una experiencia segura en la compra y venta de Seminuevos, Hyundai Promise es un programa que a través de una revisión exhaustiva que certifica los autos y avala que esten en buen estado, además de otros beneficiosque hacen de este proceso una experiencia de completa que mantiene la confianza de una venta segura y un buen trato en todo momento.</small></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
