import React, { useState } from 'react'
import Link from 'next/link'
import ImageUpload from 'image-upload-react'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroVehiculo from '../../components/admin/RegistroVehiculo'

export default function Vehiculos() {
  const [imageSrc, setImageSrc] = useState()

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container className="p-0 pt-4 dashtablas">
        <h2>Vehículos</h2>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col md={4}>
            <h3>Registrar nuevo vehículo</h3>
            <RegistroVehiculo />
          </Col>
          <Col>
            <Row>
              <Col className="mt-5">
                <ImageUpload
                  handleImageSelect={handleImageSelect}
                  imageSrc={imageSrc}
                  setImageSrc={setImageSrc}
                  style={{
                    width: '100%',
                    height: '250px',
                    background: '#0c2d5d'
                  }}
                />
              </Col>
              <Col className="mt-5">
                <ImageUpload
                  handleImageSelect={handleImageSelect}
                  imageSrc={imageSrc}
                  setImageSrc={setImageSrc}
                  style={{
                    width: '100%',
                    height: '250px',
                    background: '#0c2d5d'
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col className="mt-5">
                <ImageUpload
                  handleImageSelect={handleImageSelect}
                  imageSrc={imageSrc}
                  setImageSrc={setImageSrc}
                  style={{
                    width: '100%',
                    height: '250px',
                    background: '#0c2d5d'
                  }}
                />
              </Col>
              <Col className="mt-5">
                <ImageUpload
                  handleImageSelect={handleImageSelect}
                  imageSrc={imageSrc}
                  setImageSrc={setImageSrc}
                  style={{
                    width: '100%',
                    height: '250px',
                    background: '#0c2d5d'
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                  <Link href="/">
                    <a className="btn btn-secondary w-100 d-block">
                      Enviar cambios
                    </a>
                  </Link>
              </Col>
              <Col>
                  <Link href="/">
                    <a className="btn btn-secondary w-100">
                      Guardar cambios
                    </a>
                  </Link>
              </Col>
              <Col>
                  <Link href="/">
                    <a className="btn btn-secondary w-100">
                      Guardar sin enviar
                    </a>
                  </Link>
              </Col>
              <Col>
                  <Link href="/">
                    <a className="btn btn-primary w-100">
                      Enviar
                    </a>
                  </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}