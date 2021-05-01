import { useRouter } from 'next/router'
import Link from 'next/link'
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
      <Container fluid={true}>
        <Row className="p-0 m-0">
          <Col className="bgn entrada">
            <div className="introsub">
              <Link href="/admin/dashboard">
                <img src="/logo-hyundai-blanco.svg" alt="hyndai seminuevos" title="hyundai seminuevos" style={{
                  width: '250px'
                }} />
              </Link>
              <h2>Interfaz administrativa de Hyundai Promise. Seminuevos Certificados</h2>
            </div>
            
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h5>Iniciar Sesión</h5>
            <Card style={{ width: '50%' }}>
              <Card.Body style={{padding: '30px', background: '#f3f3f3'}}>
                <Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Nombre de usuario:</Form.Label>
                      <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña:</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <p><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet,</small></p>
                    <p><a href="/">Olvidé mi contraseña</a></p>
                    <Button href="/admin/dashboard" variant="primary" type="submit" className="w-100">
                      ENVIAR
                  </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*
        <Row>
          <Col></Col>
          <Col style={{
            padding: '20px'
          }}>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>LOGIN DE USUARIOS</Card.Title>
                <hr/>
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
        */}
      </Container>
    </Layout>
  )
}

