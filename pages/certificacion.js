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
              <div style={{width:'100%',height:'170px',overflow:'hidden'}}>
                <Card.Img variant="top" src="/certificacion/MOTOR1.png" />
              </div>
              <Card.Body style={{background: '#e8e8e8',padding:'20px 20px'}}>
                <Card.Text>
                  <ul className="certix">
                    <li>1.Imprimir reporte de mantenimiento</li>
                    <li>2.Las cubiertas de la válvula están en buen estado</li>
                    <li>3.Los sellos y juntas del motor están en buen estado</li>
                    <li>4.Existen restos de aceite quemado o lodoso en el motor</li>
                    <li>5.El aceite se encuentra en buen estado (no mezcla con agua)</li>
                    <li>6.Cintillos de motor en buen estado</li>
                    <li>7.Mangueras del motor en buen estado</li>
                    <li>8.Soportes del motor en buen estado</li>
                    <li>9.Tensor de banda en buen estado</li>
                    <li>10.Línea de vacío en buen estado (sin fugas)</li>
                    <li>11.Barra de torsión en buen estado</li>
                    <li>12.Condición de aislamiento del cofre</li>
                    <li>13.Etiquetas / Calcomanías: presente y condición</li>
                    <li>14.La bomba de gasolina funciona correctamente</li>
                    <li>15.El radiador se encuentra en buen estado</li>
                    <li>16.El ventilador se encuentra en buen estado</li>
                    <li>17.Deposito de recuperación en buen estado</li>
                    <li>18.La batería y los cables se encuentran en buen estado (Fije los resultados de la verificación de la batería)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{width:'100%',height:'170px',overflow:'hidden'}}>
                <Card.Img variant="top" src="/certificacion/MOTOR2.png" />
              </div>
              <Card.Body style={{background: '#e8e8e8',padding:'10px 20px'}}>
                <Card.Text> 
                  <ul className="certix">
                    <li>19.Encendido, arranque y acelerador en buen estado</li>
                    <li>20.No hay evidencia de daños por agua</li>
                    <li>21.Si existen modificaciones mecánicas cumplen con las especificaciones de garantía de fábrica</li>
                    <li>22.El indicador de cambio de marcha identifica correctament el cambio</li>
                    <li>23.Sellos de juntas de transmisión en buen estado</li>
                    <li>24.Buen movimiento de la columna de la dirección</li>
                    <li>25.Diferencial en buen estado</li>
                    <li>26.Bomba de dirección en buen estado (sin fugas)</li>
                    <li>27.Amortiguadores en buen estado</li>
                    <li>28.La barra estabilizadora se encuentra en buen estado</li>
                    <li>29.Las rotulas se encuentran en buen estado</li>
                    <li>30.Los baleros se encuentran en buen estado</li>
                    <li>31.Pintura con buen brillo y acabado</li>
                    <li>32.Se encuentran en buen estado gomas y plásticos</li>
                    <li>33.Los paneles de carrocería están alineados</li>
                    <li>34.Marco de carrocería sin daño visible</li>
                    <li>35.Fascia delantera en buen estado 36. Las molduras están en buen estado</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{width:'100%',height:'170px',overflow:'hidden'}}>
                <Card.Img variant="top" src="/certificacion/MOTOR3.png" />
              </div>
              <Card.Body style={{background: '#e8e8e8',padding:'10px 20px'}}>
                <Card.Text>
                                 
                  <ul className="certix">
                    <li>37.Fascia trasera en buen estado</li>
                    <li>38.Cuenta con llave, duplicado y llave de valet</li>
                    <li>39.Brazos del limpiador en buen estado</li>
                    <li>40.Gomas del limpiador en buen estado</li>
                    <li>41.Carcazas de espejos laterales en buen estado</li>
                    <li>42.Sistema eléctrico de espejos laterales funciona (si aplica)</li>
                    <li>43.Antena: presente y funcionando</li>
                    <li>44.Chapas de puertas funcionando</li>
                    <li>45.Funcionan las manijas de las puertas (estado físico)</li>
                    <li>46.Funcionan los seguros de las puertas (suben y bajan las cuatro)</li>
                    <li>47.Las bisagras de las puertas funcionan correctamente</li>
                    <li>48.Los amortiguadores del cofre están en buen estado</li>
                    <li>49.Los amortiguadores de la tapa de cajuela funcionan</li>
                    <li>50.Apertura remota de cajuela: operación (si corresponde)</li>
                    <li>51.Apertura presencial de cajuela (si aplica)</li>
                    <li>52.Soporte de matrícula: presente</li>
                    <li>53.Sin filtración de agua evidente: sin daño visible</li>
                    <li>54.Si existen modificaciones exteriores cumplen con las especificaciones de calidad de fábrica</li>
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
