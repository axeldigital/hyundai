import { useEffect, useState } from 'react'
import axios from 'axios';
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
    e.preventDefault();
    let saludo = e.target.saludo.value;
    let nombre = e.target.nombre.value;
    let apellidos = e.target.apellidos.value;
    let celular = e.target.celular.value;
    let email = e.target.email.value;
    let estado = e.target.estado.value;
    let ciudad = e.target.ciudad.value;
    let automovil = e.target.automovil.value;
    let anhio = e.target.anhio.value;
    let kilometraje = e.target.kilometraje.value;
    let version = e.target.version.value;

    let usuario = {
      "fk_tipo_usuario": "3",
      "saludo": saludo,
      "nombre": nombre,
      "apellidos": apellidos,
      "telefono": celular,
      "mail": email,
      "fk_codigo_postal": "75700",
      "fk_id_asenta_cpcons": "2403",
      "automovil": automovil,
      "anhio": anhio,
      "mensaje": "Este numero 3 es el componente perfecto",
      "mas_modelos": "S"
    }

    var optionAxios = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post('https://seminuevos.hyundai.com.mx/hyundai_back/api/create_user.php', usuario, optionAxios)
      .then(function (response) {
        console.log(response);
        if(response.status === 200){
          setEnviar(!enviar)
        } else {
          alert('Error enviando sus datos...')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
              <p style={{ color: '#898989' }}><small>El siguiente paso para convertir tu auto en un Certificado Promise es completar el siguiente registro y seguir las instrucciones para agendar la inspección y valoración de tu vehículo.</small></p>
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
                    <Form.Control name="saludo" as="select">
                      <option value="Sr">Sr.</option>
                      <option value="Sra">Sra.</option>
                      <option value="Lic">Lic.</option>
                      <option value="Dr">Dr.</option>
                    </Form.Control>
                  </Col>
                  <Col md={4}>
                    <Form.Label>Nombre(s)*</Form.Label>
                    <Form.Control name="nombre" />
                  </Col>
                  <Col>
                    <Form.Label>Apellidos*</Form.Label>
                    <Form.Control name="apellidos" />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Label>Celular(10 dígitos)*</Form.Label>
                    <Form.Control name="celular" />
                  </Col>
                  <Col>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control name="email" />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control name="estado" as="select">
                      {estado.map(edo => (
                        <option value={edo.name} key={edo.code}>{edo.name}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control name="ciudad" as="select">
                      <option value="Álvaro Obregón">Álvaro Obregón</option>
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
                    <Form.Control name="automovil" as="select">
                      <option value="TUCSON">TUCSON</option>
                      <option value="CRETA">CRETA</option>
                      <option value="SANTA FE">SANTA FE</option>
                      <option value="GRAND I10 HB">GRAND I10 HB</option>
                      <option value="GRAND I10 SD">GRAND I10 SD⁠</option>
                      <option value="ACCENT SD⁠">ACCENT SD⁠</option>
                      <option value="ACCENT HB">ACCENT HB⁠</option>
                      <option value="ELANTRA">ELANTRA⁠</option>
                      <option value="IONIQ">IONIQ⁠</option>
                      <option value="IX35">IX35⁠</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Label>Año</Form.Label>
                    <Form.Control name="anhio" as="select">
                      <option name="2015">2015</option>
                      <option name="2016">2016</option>
                      <option name="2017">2017</option>
                      <option name="2018">2018</option>
                      <option name="2019">2019</option>
                      <option name="2020">2020</option>
                      <option name="2021">2021</option>
                      <option name="2022">2022</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
                <Form.Row className="mt-2">
                  <Col>
                    <Form.Label>Kilometraje</Form.Label>
                    <Form.Control type="number" name="kilometraje" placeholder="Kilometraje" />
                  </Col>
                  <Col>
                    <Form.Label>Versión</Form.Label>
                    <Form.Control placeholder="version" name="version" as="select">
                      <option name="GLS">GLS</option>
                      <option name="GLS Premium">GLS Premium</option>
                      <option name="GLS Premium TA">GLS Premium TA</option>
                      <option name="Limited">Limited</option>
                      <option name="Limited Navi">Limited Navi</option>
                    </Form.Control>
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
