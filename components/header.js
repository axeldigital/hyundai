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
        <Col md={1} className="m-0 p-0">
          <Link href="/">
            <img src="/logo-hyundai.svg" alt="hyndai seminuevos" title="hyundai seminuevos" style={{
              width: '150px'
            }} />
          </Link>
        </Col>
        <Col md={11}>
          <nav class="navbar-expand-md navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link href="/programa">
                    <a class="nav-link">¿Qué es hyundai promise?</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/beneficios">
                    <a class="nav-link">Beneficios de Hyundai Promise.</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/certificacion">
                    <a class="nav-link">Certificación de Seminuevos</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/registrar">
                    <a class="nav-link">Vende tu Hyundai</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/registrar">
                    <a class="nav-link">Contacta a un distribuidor</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contactar al distribuidor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.565832118309!2d-99.21426838444779!3d19.431156345760506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f59f3fbcd3%3A0xfd31bf8284286906!2sInnocean%20Worldwide%20Mexico!5e0!3m2!1ses!2smx!4v1619917241336!5m2!1ses!2smx" height="450" className="w-100" style={{ border: '0' }}></iframe>
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