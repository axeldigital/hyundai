import React, { useState } from 'react'
import Link from 'next/link'
import ImageUpload from 'image-upload-react'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroUsuarios from '../../components/admin/registroUsuarios'
import Table from 'react-bootstrap/Table'
import RowTabla from "./rowTabla"

export default function Usuarios() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Usuarios</h2>
        <h3>Lorem ipsum dolor</h3>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
      <Row>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                  <th>#</th>
                  <th>Fecha</th>
                  <th>Distribuidor</th>
                  <th>Tipo auto</th>
                  <th></th>
                </tr>
              </thead>
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
        </Row>
      </Container>
    </Layout>
  )
}