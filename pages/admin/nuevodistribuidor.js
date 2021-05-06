import Link from 'next/link'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function nuevodistribuidor() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Distribuidor</h2>
        <h3>Nuevo distribuidor</h3>
      </Container>
      <Container className="d-flex justify-content-center align-items-center p-0 mb-5 pb-0 bg-light">
        <Row>
          <Col className="p-5 mb-3d-flex justify-content-center align-items-center">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Liga de google maps</Form.Label>
              <Form.Control type="text" placeholder="Password" />
              </Form.Group>
            </Form>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
          <Form>
            <div className="mt-3">
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input isValid />
                <Form.File.Label data-browse="Button text">
                  Subir imagen
                </Form.File.Label>
                <Form.Control.Feedback type="valid">Agregar imagen de mapa</Form.Control.Feedback>
              </Form.File>
            </div>
          </Form>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Button variant="primary" type="submit">
              Guardar distribuidor
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}