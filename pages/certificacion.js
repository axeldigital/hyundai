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

  if(!tarjetas){
    return(
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
        <h3>Checklist 162 puntos de certificación</h3>
        <div>
          <Carousel>
            {tarjetas.map((i, tarjeta) => {
              <Carousel.Item key={i}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tarjeta.imagen} />
                  <Card.Body>
                    <Card.Text>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            })}
          </Carousel>
        </div>
      </Container>
    </Layout>
  )
}
