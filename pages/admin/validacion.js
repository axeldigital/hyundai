import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Header from '../../components/admin/header'
import RegistroVehiculo from '../../components/admin/registroVehiculo'
import Tarjeta from "../../components/tarjeta";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Validacion() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container className="p-0 pt-4 dashtablas">
        <h2>Validación</h2>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col md={4}>
            <h3>Validar vehículo</h3>
            <RegistroVehiculo />
          </Col>
          <Col>
            <Row>
              <Col>
                <Tarjeta link="/producto" />
              </Col>
              <Col>
                <Tarjeta link="/producto" />
              </Col>
              <Col>
                <Tarjeta link="/producto" />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" />
              </Col>
              <Col>
                <Tarjeta link="/producto" />
              </Col>
              <Col>
                <Tarjeta link="/producto" />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" />
              </Col>
              <Col>
                <Tarjeta link="/producto" />
              </Col>
              <Col>
                <Tarjeta link="/producto" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}