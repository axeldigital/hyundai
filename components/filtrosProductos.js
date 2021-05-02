import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import FormaDistribuidor from '../components/formaDistribuidor'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function FiltrosProductos() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="filtros mb-5">
      <Row>
        <Col>
          <table class="table filtros">
            <tbody>
              <tr>
                <td><b>Precio</b></td>
                <td>$150,000.00</td>
              </tr>
              <tr>
                <td><b>Modelo</b></td>
                <td><span className="gris">Grand i10 Sédan</span></td>
              </tr>
              <tr>
                <td><b>Año</b></td>
                <td><span className="gris">2018</span></td>
              </tr>
              <tr>
                <td><b>Versión</b></td>
                <td><span className="gris">GI Mid TA</span></td>
              </tr>
              <tr>
                <td><b>Kilometraje</b></td>
                <td><span className="gris">30,000 km</span></td>
              </tr>
              <tr>
                <td><b>Color</b></td>
                <td><span className="gris">Blanco</span></td>
              </tr>
              <tr>
                <td><b>Transmisión</b></td>
                <td><span className="gris">Automática</span></td>
              </tr>
              <tr>
                <td><b>Distribuidor</b></td>
                <td><span className="gris">Hyundai Satélite</span></td>
              </tr>
              <tr>
                <td><p className="p-0 m-0"><small>Ver más modelos del distribuidor</small></p></td>
                <td><p className="p-0 m-0"><small><span className="gris">Autopista México-Queretaro 2600, Hab Valle de los Pinos 1a sección, 54540 Tlalnepantla</span></small></p></td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '200px', width: '100%', marginTop: '10px', marginBottom: '30px'}}>
            <img src="/mapa.png" className="img-fluid" alt="" title="" />
          </div>
          <Button variant="primary" className="favoritos w-100" onClick={handleShow}>Contactar al distribuidor</Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contactar al distribuidor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormaDistribuidor />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar mensaje
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}