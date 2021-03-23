import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Filtros from '../components/filtros';

export default function Auto(){
  return(
    <Layout>
      <Container className="categorias">
        <Row>
          <Col>
            <Filtros/>
          </Col>
        </Row>
        <Row>
          <Col className="menu detalle" md={6}>
            <img src="https://hmm-api.s3.amazonaws.com/2021_Grand_i10_Sedan_GL_MT_360_exterior_color_Plata_02_e8f347d12d.jpg" className="img-fluid" alt="" title="" />
          </Col>
          <Col>
            <hr/>
            <h1>Grand i10 Sedán GL TM</h1>
            <h2>$209,500 MXN</h2>
            <h7><i>"Sé el primero en evolucionar"</i></h7>
            <hr/>
            <ul>
              <li>Motor: 1.2L</li>
              <li>Desplazamiento (cc): 1197</li>
              <li>Cilindros: 4 en línea</li>
              <li>Radio de compresión: 10.5:1</li>
              <li>Potencia (hp @ rpm): 83 @ 6,000</li>
              <li>Torque (lb-ft @ rpm): 84 @ 4,000</li>
            </ul>
            <div className="detalles">

            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="Ficha" title="Ficha Técnica">
                <h2>Ficha técnica</h2>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <h2>Detalles</h2>
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <h2>Espacios</h2>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      
    </Layout>
  )
}