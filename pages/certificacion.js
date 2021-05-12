import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from "../components/slider"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import JSONResult from './data/puntos.json';

export default function Certificacion() {
  const [estado, setEstados] = useState([])
  const [tarjetas, setTarjetas] = useState()

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/astockwell/countries-and-provinces-states-regions/master/countries/mexico.json')
      .then(response => response.json())
      .then(data =>
        setEstados(data)
      );
  }, [])

  useEffect(() => {
    setTarjetas(JSONResult.certificacion)
  }, [])

  if (!tarjetas) {
    return (
      'CARGANDO'
    )
  }

  console.log(tarjetas)

  return (
    <Layout>
      <Slider className="mt-3" imagen="certificacion.png" texto="Certificación de seminuevos" />
      <Container>
        <Row>
          <Col md={4}>
            <img src="certificacion2.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light d-flex justify-content-center align-items-center">
            <div className="tarjetax p-3">
              <p><small>El programa de certificación consiste en la valoración, una inspección mecánica exhaustiva de seguridad y estética de 162 puntos, realizada de acuerdo a los estándares del programa Seminuevos Certificados para asegurar su calidad, durabilidad y confianza.<br /><br />Para cumplir con el objetivo de tener el mejor programa de certificados contamos con los siguientes 162 puntos de certificación.</small></p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col md={{ span: 9, offset: 2 }}>

          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="bg-light p-3 certipe">
        <h3 className="pt-4 pb-3" style={{fontWeight: '100'}}>Checklist 162 puntos de certificación</h3>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="/certificacion/MOTOR1.png" />
              <Card.Body style={{background: '#e8e8e8',padding:'20px 20px'}}>
                <Card.Text>
                  <ul className="certix">
                    <li>Imprimir reporte de mantenimiento</li>
                    <li>Las cubiertas de la válvula están en buen estado</li>
                    <li>Los sellos y juntas del motor están en buen estado</li>
                    <li>Existen restos de aceite quemado o lodoso en el motor</li>
                    <li>El aceite se encuentra en buen estado (no mezcla con agua)</li>
                    <li>Cintillos de motor en buen estado</li>
                    <li>Mangueras del motor en buen estado</li>
                    <li>Soportes del motor en buen estado</li>
                    <li>Tensor de banda en buen estado</li>
                    <li>Línea de vacío en buen estado (sin fugas)</li>
                    <li>Barra de torsión en buen estado</li>
                    <li>Condición de aislamiento del cofre</li>
                    <li>Etiquetas / Calcomanías: presente y condición</li>
                    <li>La bomba de gasolina funciona correctamente 15. El radiador se encuentra en buen estado</li>
                    <li>El ventilador se encuentra en buen estado</li>
                    <li>Deposito de recuperación en buen estado</li>
                    <li>La batería y los cables se encuentran en buen estado (Fije los resultados de la verificación de la batería)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="/certificacion/MOTOR2.png" />
              <Card.Body style={{background: '#e8e8e8',padding:'10px 20px'}}>
                <Card.Text>
                  <ul className="certix">
                    <li>Imprimir reporte de mantenimiento</li>
                    <li>Las cubiertas de la válvula están en buen estado</li>
                    <li>Los sellos y juntas del motor están en buen estado</li>
                    <li>Existen restos de aceite quemado o lodoso en el motor</li>
                    <li>El aceite se encuentra en buen estado (no mezcla con agua)</li>
                    <li>Cintillos de motor en buen estado</li>
                    <li>Mangueras del motor en buen estado</li>
                    <li>Soportes del motor en buen estado</li>
                    <li>Tensor de banda en buen estado</li>
                    <li>Línea de vacío en buen estado (sin fugas)</li>
                    <li>Barra de torsión en buen estado</li>
                    <li>Condición de aislamiento del cofre</li>
                    <li>Etiquetas / Calcomanías: presente y condición</li>
                    <li>La bomba de gasolina funciona correctamente 15. El radiador se encuentra en buen estado</li>
                    <li>El ventilador se encuentra en buen estado</li>
                    <li>Deposito de recuperación en buen estado</li>
                    <li>La batería y los cables se encuentran en buen estado (Fije los resultados de la verificación de la batería)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="/certificacion/MOTOR3.png" />
              <Card.Body style={{background: '#e8e8e8',padding:'10px 20px'}}>
                <Card.Text>
                  <ul className="certix">
                    <li>Imprimir reporte de mantenimiento</li>
                    <li>Las cubiertas de la válvula están en buen estado</li>
                    <li>Los sellos y juntas del motor están en buen estado</li>
                    <li>Existen restos de aceite quemado o lodoso en el motor</li>
                    <li>El aceite se encuentra en buen estado (no mezcla con agua)</li>
                    <li>Cintillos de motor en buen estado</li>
                    <li>Mangueras del motor en buen estado</li>
                    <li>Soportes del motor en buen estado</li>
                    <li>Tensor de banda en buen estado</li>
                    <li>Línea de vacío en buen estado (sin fugas)</li>
                    <li>Barra de torsión en buen estado</li>
                    <li>Condición de aislamiento del cofre</li>
                    <li>Etiquetas / Calcomanías: presente y condición</li>
                    <li>La bomba de gasolina funciona correctamente 15. El radiador se encuentra en buen estado</li>
                    <li>El ventilador se encuentra en buen estado</li>
                    <li>Deposito de recuperación en buen estado</li>
                    <li>La batería y los cables se encuentran en buen estado (Fije los resultados de la verificación de la batería)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
