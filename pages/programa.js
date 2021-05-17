import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Slider from "../components/slider"

export default function Programa() {
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
      <Slider className="mt-3" imagen="hero6.png" texto="¿Qué es Hyundai Promise?" />
      <Container style={{marginBottom: '50px'}}>
        <Row>
          <Col md={4}>
            <img src="programa1.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light d-flex align-items-center" style={{paddingBottom: '100px'}}>
            <div className="tarjetax p-3">
              <p><small>Hyundai de Mexico es el programa de autos seminuevos certificados más enfocado en la calidad y servicio, con los mejores beneficios del mercado. </small></p>
              <h3 style={{color: "#012E5E"}}>Características</h3>
              <p><small>Para garantizar que los vehículos alcancen el máximo nivel de calidad y seguridad, todos nuestros autos seminuevos han pasado por una exhaustiva revisión de 162 puntos para obtener su certificación, de esta manera tu auto estará en las mejores condiciones de acuerdo a su edad y modelo. Además de contar con beneficios exclusivos como:</small></p>
              <h3 style={{color: "#012E5E"}}>Hyundai Finnance</h3>
              <p><small>Solo por ser parte del programa de Hyundai Promise ofrecemos productos financieros con beneficios especiales para Seminuevos Certificados.</small></p>
              <h3 style={{color: "#012E5E"}}>Hyundai Protect</h3>
              <p><small>Como parte de los beneficios de Hyundai Promise ofrecemos seguros con coberturas especiales para Seminuevos Certificados.</small></p>
              <h3 style={{color: "#012E5E"}}>ASSURANT</h3>
              <p><small>Líder en el segmento de Seminuevos Certificados.</small></p>
              <h3 style={{color: "#012E5E"}}>TOMA Y VENTA</h3>
              <p><small>Transparencia y confianza en todo el proceso.</small></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
