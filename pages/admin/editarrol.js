import Link from 'next/link'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function editarrol() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Roles</h2>
        <h3>Editar</h3>
      </Container>
      <Container className="p-0 mb-3 pb-0">
        <Row>
          <Col></Col>
          <Col className="p-5 mb-3 bg-light">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Lorem ipsum dolor sit amet" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Lorem ipsum dolor sit amet" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rol</Form.Label>
                <Form.Control as="select">
                  <option>Distribuidor</option>
                  <option>Administrador</option>
                </Form.Control>
              </Form.Group>
              <div align="center" className="mt-5">
                <Button variant="primary" type="submit">
                  Guardar cambios
                </Button>
              </div>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  )
}