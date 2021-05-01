import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Slider from "../components/slider"
import Carta from "../components/card";
import Tarjeta from "../components/tarjeta";
import Banner from '../components/banner';
import Filtros from '../components/filtros';

export default function Registrar() {
  return (
    <Layout>
      <Slider className="mt-3" imagen="hero3.png" />
      <Container>
        <Row>
          <Col md={4}>
            <img src="guerita.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <h3>Lorem ipsum dolor</h3>
              <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, dui vitae luctus tristique, magna lectus maximus felis, nec tincidunt mi nunc ullamcorper lacus. Morbi quis enim bibendum, eleifend erat eget, luctus leo. Donec hendrerit placerat massa, eu pellentesque metus euismod eu. Mauris a sapien id tortor facilisis tempus. Pellentesque at ipsum scelerisque, tincidunt odio vitae, finibus sapien. Vivamus varius scelerisque arcu. Vivamus auctor nunc vitae diam sollicitudin sodales. Morbi tristique lorem id risus consequat, quis pellentesque dolor imperdiet. Praesent libero metus, dapibus ut laoreet vel, efficitur vel lectus. Nullam condimentum et nisi ut venenatis.</small></p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          
          <Col md={{ span: 9, offset: 2 }} className="bg-light p-3">
            <h3 className="text-center mb-4 mt-0 p-0">Datos personales</h3>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Label>Saludo</Form.Label>
                  <Form.Control as="select">
                    <option>Sr.</option>
                    <option>Sra.</option>
                    <option>Lic.</option>
                    <option>Dr.</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Nombre(s)*</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Apellidos*</Form.Label>
                  <Form.Control />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Celular(10 dígitos)*</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Email*</Form.Label>
                  <Form.Control />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control as="select">
                    <option>Sr.</option>
                    <option>Sra.</option>
                    <option>Lic.</option>
                    <option>Dr.</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control as="select">
                    <option>Sr.</option>
                    <option>Sra.</option>
                    <option>Lic.</option>
                    <option>Dr.</option>
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Automovil</Form.Label>
                  <Form.Control as="select">
                    <option>Sr.</option>
                    <option>Sra.</option>
                    <option>Lic.</option>
                    <option>Dr.</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Año</Form.Label>
                  <Form.Control as="select">
                    <option>Sr.</option>
                    <option>Sra.</option>
                    <option>Lic.</option>
                    <option>Dr.</option>
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Kilometraje</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <div className="text-center">
              <Button variant="primary" type="submit" className="pl-5 pr-5 pt-1 pb-1">
                Enviar
              </Button>
              </div>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
