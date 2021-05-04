import React, { useState } from 'react'
import Layout from '../../components/layout'
import RowCampana from "./rowCampana"
import RowTabla from "./rowTabla"
import RowCampanaCoche from "./rowCampanaCoche"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroDistribuidor from '../../components/admin/registroDistribuidor'
import Table from 'react-bootstrap/Table'

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
        <h2>Editar Distribuidor</h2>
      </Container>
      <Container className="p-0 pt-2 pb-2 dashtablas">
        <Row>
          <Col>
            <h3>Registrar nuevo distribuidor</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <RegistroDistribuidor />
          </Col>
        </Row>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col>
            <h3>Vehículos registrados vigentes</h3>
            <Table striped bordered hover size="sm">
              <tbody>
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
              </tbody>
            </Table>
          </Col>
          <Col>
            <h3>Vehículos registrados por validar</h3>
            <Table striped bordered hover size="sm">
              <tbody>
                <RowCampana />
                <RowCampana />
                <RowCampana />
                <RowCampana />
                <RowCampana />
                <RowCampana />
                <RowCampana />
                <RowCampana />
                <RowCampana />
                <RowCampana />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}