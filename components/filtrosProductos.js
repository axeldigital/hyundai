import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import FormaDistribuidor from '../components/formaDistribuidor'
import Link from 'next/link'

const AnyReactComponent = ({ precio }) => <div>{text}</div>;

export default function FiltrosProductos({ 
  precio, 
  modelo, 
  ano, 
  kilometros, 
  transmision,
  distribuidor 
}) {
  const [show, setShow] = useState(false);
  const [showMapa, setShowMapa] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseMapa = () => setShowMapa(false);
  const handleShowMapa = () => setShowMapa(true);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  return (
    <Container className="filtros mb-5">
      <Row>
        <Col>
          <table className="table borderless filtros">
            <tbody>
              <tr>
                <td style={{ 'width': '50%'}}><b>Precio</b></td>
                <td>{formatter.format(precio)}</td>
              </tr>
              <tr style={{
                borderTop: '1px solid #ccc'
              }}>
                <td><b>Modelo</b></td>
                <td><span className="gris">{modelo}</span></td>
              </tr>
              <tr>
                <td><b>Año</b></td>
                <td><span className="gris">{ano}</span></td>
              </tr>
              <tr>
                <td><b>Versión</b></td>
                <td><span className="gris">GI Mid TA</span></td>
              </tr>
              <tr>
                <td><b>Kilometraje</b></td>
                <td><span className="gris">{kilometros} km</span></td>
              </tr>
              <tr>
                <td><b>Color</b></td>
                <td><span className="gris">Blanco</span></td>
              </tr>
              <tr>
                <td><b>Transmisión</b></td>
                <td><span className="gris">{transmision}</span></td>
              </tr>
              <tr>
                <td><b>Distribuidor</b></td>
                <td><span className="gris">{distribuidor}</span></td>
              </tr>
              <tr>
                <td>
                  <Link href="/categoria">
                    <p className="p-0 m-0" style={{
                      cursor: 'pointer'
                    }}>
                      <small>Ver más modelos del distribuidor</small>
                    </p>
                  </Link>
                </td>
                <td><p className="p-0 m-0"><small><span className="gris">Autopista México-Queretaro 2600, Hab Valle de los Pinos 1a sección, 54540 Tlalnepantla</span></small></p></td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '200px', width: '100%', marginTop: '10px'}}>
            <img src="/mapa.png" className="img-fluid" alt="" title="" onClick={handleShowMapa} />
          </div>
          <Button variant="primary" className="favoritos w-100" onClick={handleShow}style={{
            minWidth: '100%'
          }}>Contactar al distribuidor</Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modelo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">Contactar al distribuidor</h4>
        <FormaDistribuidor />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="w-100" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showMapa} onHide={handleCloseMapa}>
        <Modal.Header closeButton>
          <Modal.Title>Ubicación del distribuidor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.565832118309!2d-99.21426838444779!3d19.431156345760506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f59f3fbcd3%3A0xfd31bf8284286906!2sInnocean%20Worldwide%20Mexico!5e0!3m2!1ses!2smx!4v1619917241336!5m2!1ses!2smx" height="450" className="w-100" style={{border: '0'}}></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMapa}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}