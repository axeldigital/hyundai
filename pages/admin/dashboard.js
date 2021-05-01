import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

//import FiltrosDashboard from '../../components/FiltrosDashboard';
import Tarjeta from "../../components/tarjeta";

export default function Dashboard() {
  return (
    <Layout>
      <Container fluid={true}>
        <Row>
          <Col>
            <p style={{ padding: '5px', textAlign: 'right', paddingTop: '10px' }}><small><b>USUARIO: </b> Gerardo Lopez Monreal</small></p>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} style={{
              background: '#f2f2f2'
            }}>

              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first"><span className="lnr lnr-home"></span> Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"><span className="lnr lnr-text-align-justify"></span>Administración</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"><span className="lnr lnr-rocket"></span>Vehículos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth"><span className="lnr lnr-checkmark-circle"></span>Validacicóm</Nav.Link>
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
                  <Row style={{ marginTop: '20px' }}>
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
                  <Row style={{ marginTop: '20px' }}>
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
    </Layout>
  )
}