import {useRouter} from 'next/router'

import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Administrador() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'admin/dashboard'
    })
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col></Col>
          <Col style={{
            padding: '20px'
          }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="logo-hyundai.svg" style={{
                padding: '20px'
              }} />
              <Card.Body>
                <Card.Title>LOGIN DE USUARIOS</Card.Title>
                <Card.Text>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo electrónico:</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar su Correo electrónico" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar su contraseña" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Guardar mi contraseña" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    INGRESAR
                  </Button>
                </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  )
}

