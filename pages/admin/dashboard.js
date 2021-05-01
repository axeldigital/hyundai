import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

//import FiltrosDashboard from '../../components/FiltrosDashboard';
import Tarjeta from "../../components/tarjeta";

export default function Dashboard() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="m-0 p-0">
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
                  <form>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
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