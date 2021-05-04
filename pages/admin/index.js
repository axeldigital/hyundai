import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Administrador() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [usuario, setUsuario] = useState("")
  const [olvide, setOlvide] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/get-user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      const json = await res.json()
      if (json.length === 0) {
        setUsuario("Sus datos de ingreso no son correctos")
      } else {
        setUsuario("Ingresando a su cuenta")
        sessionStorage.setItem('id', json[0].id);
        sessionStorage.setItem('email', json[0].email);
        sessionStorage.setItem('nombre', json[0].nombre);
        router.push('/admin/dashboard')
      }
      //setSubmitting(false)
      //if (!res.ok) throw Error(json.message)
      //Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
    //router.push({
    //  pathname: 'admin/dashboard'
    //})
  }

  const olvido = () => {
    setOlvide(!olvide)
  }

  async function handleOlvide(e) {
    e.preventDefault()
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
              <h2>Interfaz administrativa de Hyundai Promise. Seminuevos Certificados.</h2>
            </div>

          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h5>{olvide ? 'Restablecer contraseña' : 'Inicicar sesión'}</h5>
            <Card style={{ width: '70%' }}>
              <Card.Body style={{ padding: '30px', background: '#f3f3f3' }}>
                <p className="text-center text-danger">{usuario}</p>
                <Card.Text>
                  {olvide ?
                    <Form onSubmit={handleOlvide}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo electrónico:</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="mb-3"
                        />
                        <Button disabled={submitting} variant="primary" type="submit" className="w-100">
                          Recuperar contraseña
                        </Button>
                        <p className="btn btn-secondary olvide text-white w-100 mt-3" onClick={olvido}>Volver al inicio de sesión</p>
                      </Form.Group>
                    </Form>
                    :
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <p><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet,</small></p>
                      <p className="d-flex align-items-center"><Form.Check aria-label="option 1" /> Recordarme</p>
                      <p className="olvide" onClick={olvido}>Olvidé mi contraseña</p>
                      <Button disabled={submitting} /*href="/admin/dashboard"*/ variant="primary" type="submit" className="w-100">
                        {submitting ? 'ENVIANDO' : 'ENVIAR'}
                      </Button>
                    </Form>
                  }
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

