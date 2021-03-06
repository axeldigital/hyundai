import React, { useState } from 'react'
import Link from 'next/link'
import ImageUpload from 'image-upload-react'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroEdicionVehiculo from '../../components/admin/registroEdicionVehiculo'

export default function editarvehiculo() {
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
          <Col md={3}>
            <h3>Editar vehículo</h3>
            <RegistroEdicionVehiculo />
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
                    <a className="btn btn-secondary w-100">
                      Enviar cambios
                    </a>
                  </Link>
              </Col>
              <Col>
                  <Link href="/">
                    <a className="btn btn-primary w-100">
                      Guardar cambios
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