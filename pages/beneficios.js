import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Slider from "../components/slider";
import Carta from "../components/card";
import Tarjeta from "../components/tarjeta";
import Banner from '../components/banner';
import Filtros from '../components/filtros';

export default function Beneficios() {
  return (
    <Layout>
      <Slider className="mt-3" imagen="hero.png" />
      <Container className="mb-3">
        <Row>
          <Col md={4}>
            <img src="guerita.png" className="img-fluid" alt="" title="" />
          </Col>
          <Col className="bg-light">
            <div className="tarjetax p-3">
              <h3>Beneficios del Programa Hyundai Promise</h3>
              <hr/>
              <h4>PROGRAMA DE GRARANTÍA EXTENDIDA</h4>
              <p><small>Hyundai Motor ofrece vehículos Seminuevos Certificados por 3 años/ 60,000 km mediante un proveedor líder en la industria de los vehículos certificados.</small></p>
              <h4>ASISTENCIA VIAL</h4>
              <p><small>Cobertura complementaria de 3 años / kilometraje ilimitado; 24 horas al día, 7 días a la semana, 365 días al año. La cobertura de asistencia en el camino incluye: remolque, batería muerta / arranque con puente, cambio de llanta desinflada y entrega de combustible.</small></p>
              <h4>INSPECCIÓN DE TODOS LOS SISTEMAS</h4>
              <p><small>Una exhaustiva inspección mecánica, de seguridad y de apariencia de 162 puntos, realizada de acuerdo a los estándares del programa Seminuevos Certificados.</small></p>
              <h4>CERTIFICACIÓN DE SEMINUEVOS</h4>
              <p><small>El programa de certificación consiste en la valoración, una inspección mecánica exhaustiva de seguridad y estética de 162 puntos, realizada de acuerdo a los estándares del programa Seminuevos Certificados para asegurar su calidad, durabilidad y confianza.<br/><br/>Para cumplir con el objetivo de tener el mejor programa de  certificados contamos con los siguientes 162 puntos de certificación.</small></p>
              <ul>
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
                <li>La bomba de gasolina funciona correctamente</li>
                <li>El radiador se encuentra en buen estado</li>
                <li>El ventilador se encuentra en buen estado</li>
                <li>Depósito de recuperación en buen estado</li>
                <li>La batería y los cables se encuentran en buen estado</li>
                <li>Encendido, arranque y acelerador en buen estado</li>
                <li>No hay evidencia de daños por agua</li>
                <li>Si existen modificaciones mecánicas cumplen con las especificaciones de garantía de fábrica</li>
                <li>El indicador de cambio de marcha identifica correctamente el cambio</li>
                <li>Sellos de juntas de transmisión en buen estado</li>
                <li>Buen movimiento de la columna de la dirección</li>
                <li>Diferencial en buen estado</li>
                <li>Bomba de dirección en buen estado (sin fugas)</li>
                <li>Amortiguadores en buen estado</li>
                <li>La barra estabilizadora se encuentra en buen estado</li>
                <li>Las rotulas se encuentran en buen estado</li>
                <li>Los baleros se encuentran en buen estado</li>
                <li>Pintura con buen brillo y acabado</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
