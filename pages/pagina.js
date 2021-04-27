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
      <Slider className="mt-3" />
      <Container fluid={true} className="destacados">
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
