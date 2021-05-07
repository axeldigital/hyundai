
import Link from 'next/link'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroUsuarios from '../../components/admin/registroUsuarios'
import Table from 'react-bootstrap/Table'
import RowTablaLeads from "./rowTablaLeads"
import RowTablaLeadsImagen from "./rowTablaLeadsImagen"
import Form from 'react-bootstrap/Form'


export default function Leads() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Leads administrador</h2>
        <h3>Lorem ipsum dolor</h3>
      </Container>
      <Container className="p-0 pt- pb-4 dashtablas">
        <Row>
          <Col>
          <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th></th>
                  <th>Modelo</th>
                  <th>Fecha</th>
                  <th>Distribuidor</th>
                </tr>
              </thead>
              <tbody>
                <RowTablaLeadsImagen />
                <RowTablaLeadsImagen />
                <RowTablaLeadsImagen />
                <RowTablaLeadsImagen />
              </tbody>
            </Table>
            
          </Col>
        </Row>
        <Row>
          <Col>
            <div align="center">
              <hr />
              <p>Nombre de usuario registrado</p>
              <hr />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Tipo Auto</th>
                  <th>Año</th>
                  <th>Kilometraje</th>
                  <th>Fecha</th>
                  <th>Ciudad</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
                <RowTablaLeads />
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col>
            <div align="center">
              <Link href="/admin/nuevousuario" style={{ fontSize: '0.8rem' }}>
                <a className="btn btn-primary">
                  Nuevo Lead
              </a>
              </Link>
            </div>
          </Col>

        </Row>
      </Container>
    </Layout>
  )
}