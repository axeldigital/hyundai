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
      <Container fluid={true} className="destacados">
        <Row>
          <Col>
            <h3 className="text-center p-3">Registro</h3>
          </Col>
        </Row>
        <Row>

        </Row>

      </Container>
      
    </Layout>
  )
}
