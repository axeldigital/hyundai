import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'
import RowTablaDistribuidor from "./rowTablaDistribuidor"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
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
        <h2 className="pt-3 ml-0">Distribuidores</h2>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <tbody>
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
                <RowTablaDistribuidor />
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
          <div align="center">
            <Link href="/admin/nuevodistribuidor" style={{fontSize:'0.8rem'}}>
              <a className="btn btn-primary">
              Nuevo Distribuidor
              </a>
            </Link>
          </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}