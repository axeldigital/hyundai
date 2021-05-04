import React, { useState } from 'react'
import Link from 'next/link'
import ImageUpload from 'image-upload-react'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroDistribuidor from '../../components/admin/registroDistribuidor'

export default function Distribuidores() {
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
        <h2>Distribuidores</h2>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col md={3}>
            <h3>Registrar nuevo distribuidor</h3>
            <RegistroDistribuidor />
          </Col>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}