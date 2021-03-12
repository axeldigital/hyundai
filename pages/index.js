import Layout from '../components/layout';
import Slider from "../components/slider";
import Carta from "../components/card";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Layout>
      <Slider className="mt-3" />
      <Container className="categorias">
        <Row>
          <Col><Carta/></Col>
          <Col><Carta/></Col>
          <Col><Carta/></Col>
        </Row>
      </Container>
    </Layout>
  )
}
