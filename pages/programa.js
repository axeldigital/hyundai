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
      <Slider className="mt-3" imagen="programa.png" texto="¿Qué es el programa Hyundai Promise?" />
      <Container>
        <Row>
          <Col md={4}>
            <img src="programa1.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light d-flex align-items-center">
            <div className="tarjetax p-3">
              <p><small>Hyundai Promise nace de la búsqueda de las personas por una experiencia segura en la compra y venta de Seminuevos.<br/><br/>Hyundai Promise es un programa que a través de una revisión exhaustiva que certifica los autos y avala que estén en buen estado, además de otros beneficios que hacen de este proceso una experiencia de completa que mantiene la confianza de una venta segura y un buen trato en todo momento.</small></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
