import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Slider from "../components/slider"

export default function Registrar() {
  const [estado, setEstados] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/astockwell/countries-and-provinces-states-regions/master/countries/mexico.json')
    .then(response => response.json())
    .then(data => 
      setEstados(data)
    );
  }, [])

  
  return (
    <Layout>
      <Slider className="mt-3" imagen="hero4.png" />
      <Container>
        <Row>
          <Col md={4}>
            <img src="registrar.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <h3 className="mt-3">Registra tu vehículo</h3>
              <p><small>El siguiente paso para convertir tu auto en un Certificado Promise es completar el siguiente registro y seguir las instrucciones para agendar la inspección y valoración de tu vehículo.</small></p>
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
                    {estado.map(edo => (
                      <option key={edo.code}>{edo.name}</option>
                    ))}
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
