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
      <Container>
        <Row>
          <Col md={4}>
            <img src="guerita.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <h3>Conoce Hyundai Promise</h3>
              <h4>Qué es Hyundai Promise</h4>
              <p><small>Hyundai Promisenace de la búsqueda de las personas por una experiencia segura en la compra y venta de Seminuevos, Hyundai Promise es un programa que a través de una revisión exhaustiva que certifica los autos y avala que esten en buen estado, además de otros beneficiosque hacen de este proceso una experiencia de completa que mantiene la confianza de una venta segura y un buen trato en todo momento.</small></p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <h3>Lorem ipsum dolor</h3>
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, dui vitae luctus tristique, magna lectus maximus felis, nec tincidunt mi nunc ullamcorper lacus. Morbi quis enim bibendum, eleifend erat eget, luctus leo. Donec hendrerit placerat massa, eu pellentesque metus euismod eu. Mauris a sapien id tortor facilisis tempus. Pellentesque at ipsum scelerisque, tincidunt odio vitae, finibus sapien. Vivamus varius scelerisque arcu. Vivamus auctor nunc vitae diam sollicitudin sodales. Morbi tristique lorem id risus consequat, quis pellentesque dolor imperdiet. Praesent libero metus, dapibus ut laoreet vel, efficitur vel lectus. Nullam condimentum et nisi ut venenatis. Proin mollis sem ut dui vehicula, non sagittis ipsum tincidunt. Curabitur malesuada rhoncus orci in sodales. Suspendisse sit amet lorem nisi. Maecenas elementum nulla nec iaculis faucibus. Cras ultrices eros ut enim scelerisque, eu blandit tortor pellentesque. Maecenas eget dui non est egestas vehicula.</small></p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <h3>Lorem ipsum dolor</h3>
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, dui vitae luctus tristique, magna lectus maximus felis, nec tincidunt mi nunc ullamcorper lacus. Morbi quis enim bibendum, eleifend erat eget, luctus leo. Donec hendrerit placerat massa, eu pellentesque metus euismod eu. Mauris a sapien id tortor facilisis tempus. Pellentesque at ipsum scelerisque, tincidunt odio vitae, finibus sapien. Vivamus varius scelerisque arcu. Vivamus auctor nunc vitae diam sollicitudin sodales. Morbi tristique lorem id risus consequat, quis pellentesque dolor imperdiet. Praesent libero metus, dapibus ut laoreet vel, efficitur vel lectus. Nullam condimentum et nisi ut venenatis. Proin mollis sem ut dui vehicula, non sagittis ipsum tincidunt. Curabitur malesuada rhoncus orci in sodales. Suspendisse sit amet lorem nisi. Maecenas elementum nulla nec iaculis faucibus. Cras ultrices eros ut enim scelerisque, eu blandit tortor pellentesque. Maecenas eget dui non est egestas vehicula.</small></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
