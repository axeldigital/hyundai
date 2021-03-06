import Link from 'next/link'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function nuevousuario() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Usuarios</h2>
        <h3>Nuevo usuario</h3>
      </Container>
      <Container className="p-0 mb-3 pb-0">
        <Row>
          <Col></Col>
          <Col className="p-5 mb-3 bg-light">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Distribuidor</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rol</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar usuario y enviar confirmaci??n
              </Button>
              <p className="text-center"><small>*Se enviara una liga al nuevo usuario con su password</small></p>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  )
}