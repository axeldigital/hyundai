import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Slider from "../components/slider";
import Carta from "../components/card";
import Tarjeta from "../components/tarjeta";
import Banner from '../components/banner';
import Filtros from '../components/filtros';

export default function Categoria() {
  return (
    <Layout>
      <Container className="destacados p-5">
        <Row>
          <Col>
            <h3 className="text-center p-3">Registro</h3>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h3>Datos personales</h3>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col md={3}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Saludo</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>Sr.</option>
                  <option>Sra.</option>
                  <option>Lic.</option>
                  <option>Prof.</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre(s)*</Form.Label>
                <Form.Control type="text" placeholder="Nombre completo" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Apellidos*</Form.Label>
                <Form.Control type="text" placeholder="Apellido paterno y materno" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Celular(10 Digitos)*</Form.Label>
                <Form.Control type="number" placeholder="Teléfono con 10 digitos" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail*</Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Estado*</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>Sr.</option>
                  <option>Sra.</option>
                  <option>Lic.</option>
                  <option>Prof.</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Ciudad*</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>Sr.</option>
                  <option>Sra.</option>
                  <option>Lic.</option>
                  <option>Prof.</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Automovil*</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>Sr.</option>
                  <option>Sra.</option>
                  <option>Lic.</option>
                  <option>Prof.</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Año*</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>Sr.</option>
                  <option>Sra.</option>
                  <option>Lic.</option>
                  <option>Prof.</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit" className="w-100 mt-5">
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

    </Layout>
  )
}
