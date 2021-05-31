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
  const [enviar, setEnviar] = useState(false)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/astockwell/countries-and-provinces-states-regions/master/countries/mexico.json')
      .then(response => response.json())
      .then(data =>
        setEstados(data)
      );
  }, [])

  const enviarDatos = (e) => {
    alert(e)
    setEnviar(!enviar)
  }

  return (
    <Layout>
      <Slider className="mt-3" imagen="hero5.png" texto="Quiero registrar mi auto" />
      <Container>
        <Row>
          <Col md={4}>
            <img src="registrar.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <h3 className="mt-3">Registra tu vehículo</h3>
              <p style={{color:'#898989'}}><small>El siguiente paso para convertir tu auto en un Certificado Promise es completar el siguiente registro y seguir las instrucciones para agendar la inspección y valoración de tu vehículo.</small></p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">

          <Col md={{ span: 9, offset: 2 }} className="bg-light p-3">
            <h3 className="text-center mb-4 mt-0 p-0">Datos personales</h3>
            {enviar ?
              <h3 className="text-center mb-4 mt-0 p-0">Gracias!, sus datos fueron enviados,<br />en breve uno de nuestros representantes se pondrá en contacto con usted!</h3>
              :
              <Form onSubmit={enviarDatos}>
                <Form.Row>
                  <Col md={2}>
                    <Form.Label>Saludo</Form.Label>
                    <Form.Control as="select" required="required">
                      <option>Sr.</option>
                      <option>Sra.</option>
                      <option>Lic.</option>
                      <option>Dr.</option>
                    </Form.Control>
                  </Col>
                  <Col md={4}>
                    <Form.Label>Nombre(s)*</Form.Label>
                    <Form.Control required="required" />
                  </Col>
                  <Col>
                    <Form.Label>Apellidos*</Form.Label>
                    <Form.Control required="required" />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Label>Celular(10 dígitos)*</Form.Label>
                    <Form.Control required="required" />
                  </Col>
                  <Col>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control required="required" />
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
                      <option>Álvaro Obregón</option>
                      <option>Cuajimalpa</option>
                      <option>Cuauhtemoc</option>
                      <option>Gustavo A. Madero</option>
                      <option>Iztacalco</option>
                      <option>Iztapalapa</option>
                      <option>Tlahuac</option>
                      <option>Tlalpan</option>
                      <option>Venustiano Carranza</option>
                      <option>Xochimilco</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Label>Automovil</Form.Label>
                    <Form.Control as="select">
                      <option>TUCSON</option>
                      <option>CRETA</option>
                      <option>SANTA FE</option>
                      <option>GRAND I10 HB</option>
                      <option>GRAND I10 SD⁠</option>
                      <option>ACCENT SD⁠</option>
                      <option>ACCENT HB⁠</option>
                      <option>ELANTRA⁠</option>
                      <option>IONIQ⁠</option>
                      <option>IX35⁠</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Label>Año</Form.Label>
                    <Form.Control as="select">
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
                <Form.Row className="mt-4">
                  <Col>
                    <Form.Control type="number" placeholder="Kilometraje" />
                  </Col>
                  <Col>
                  </Col>
                </Form.Row>
                <div className="text-center mt-4">
                  <Button variant="primary" type="submit" className="pl-5 pr-5 pt-1 pb-1">
                    Enviar
                  </Button>
                </div>

              </Form>
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
