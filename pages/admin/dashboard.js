import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import Filtros from '../../components/filtros';
import Tarjeta from "../../components/tarjeta";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <img src="/logo-hyundai.svg" alt="" title="" style={{ width: '200px', padding: '10px' }} />
        </Col>
        <Col>
          <p style={{ padding: '10px', textAlign: 'right' }}><small><b>USUARIO: </b> Gerardo Lopez Monreal</small></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Filtros />
        </Col>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> AUTOS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">AGREGAR</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">EDITAR</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">ELIMINAR</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">SALIR</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
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
                <Row style={{ marginTop: '20px'}}>
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
                <Row style={{ marginTop: '20px'}}>
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
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>ugiugiugi</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>ugiugiugi</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <p>ugiugiugi</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <p>ugiugiugi</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}