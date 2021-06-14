import Link from 'next/link';
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
            <h1>Grand i10 Sedán GL TM...</h1>
            <h2>$209,500 MXN</h2>
            <hr/>
            <ul>
              <li>Motor: 1.2L</li>
              <li>Desplazamiento (cc): 1197</li>
              <li>Cilindros: 4 en línea</li>
              <li>Radio de compresión: 10.5:1</li>
              <li>Potencia (hp @ rpm): 83 @ 6,000</li>
              <li>Torque (lb-ft @ rpm): 84 @ 4,000</li>
            </ul>
            <hr/>
            <div className="detalles">
              <Link href="/">
                Solicitar cita
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="Ficha" title="Descripción">
                <h2>Descripción</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi in purus tristique luctus. Proin nec condimentum leo, sit amet eleifend elit. Cras id nisl euismod, condimentum ante non, luctus diam. Mauris tincidunt vestibulum leo id mattis. Mauris pharetra dapibus pulvinar. Ut non pharetra leo, sit amet tincidunt diam. Nulla et dictum urna, et congue felis. Pellentesque at urna sed nibh tristique finibus. Nam eu est felis.</p>
              </Tab>
              <Tab eventKey="profile" title="Especificaciones técnicas">
                <h2>Especificaciones técnicas</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi in purus tristique luctus. Proin nec condimentum leo, sit amet eleifend elit. Cras id nisl euismod, condimentum ante non, luctus diam. Mauris tincidunt vestibulum leo id mattis. Mauris pharetra dapibus pulvinar. Ut non pharetra leo, sit amet tincidunt diam. Nulla et dictum urna, et congue felis. Pellentesque at urna sed nibh tristique finibus. Nam eu est felis.</p>
              </Tab>
              <Tab eventKey="contact" title="Certificación">
                <h2>Certificación</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi in purus tristique luctus. Proin nec condimentum leo, sit amet eleifend elit. Cras id nisl euismod, condimentum ante non, luctus diam. Mauris tincidunt vestibulum leo id mattis. Mauris pharetra dapibus pulvinar. Ut non pharetra leo, sit amet tincidunt diam. Nulla et dictum urna, et congue felis. Pellentesque at urna sed nibh tristique finibus. Nam eu est felis.</p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      
    </Layout>
  )
}