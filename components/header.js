import React, { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import FormaDistribuidor from '../components/formaDistribuidor'
import Button from 'react-bootstrap/Button';

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="pt-3 pb-3 menuprincipal">
      <Row>
        <Col md={2} className="m-0 p-0">
          <Link href="/">
            <img src="/logo-hyundai.svg" alt="hyndai seminuevos" title="hyundai seminuevos" style={{
              width: '150px'
            }} />
          </Link>
        </Col>
        <Col md={8} className="flex align-items-center justify-content-center">
          <ul>
            <li>
              <Link href="/categoria">
                <a>Modelos</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Financiamiento</a>
              </Link>
            </li>
            <li>
              <Link href="/admin">
                <a>Seminuevos</a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={2} className="p-0">
          <p className="text-right pr-0">
            <span className="lnr lnr-map-marker m-2" style={{
              border: '1px solid #333',
              padding: '5px',
              borderRadius: '50%',
              background: '#002c5e',
              color: '#fff'
            }} onClick={handleShow}></span> 
            Coacalco
            <Link href="/">
              <span className="lnr lnr-menu mx-2"></span>
            </Link>
          </p>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contactar al distribuidor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.565832118309!2d-99.21426838444779!3d19.431156345760506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f59f3fbcd3%3A0xfd31bf8284286906!2sInnocean%20Worldwide%20Mexico!5e0!3m2!1ses!2smx!4v1619917241336!5m2!1ses!2smx" height="450" className="w-100" style={{border: '0'}}></iframe>
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