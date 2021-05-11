import Link from 'next/link'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroUsuarios from '../../components/admin/registroUsuarios'
import Table from 'react-bootstrap/Table'
import RowTablaUsuario from "./rowTablaUsuario"
import Form from 'react-bootstrap/Form'

export default function Usuarios() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container className="p-0 pt-4 dashtablas">
        <h2>Usuarios</h2>
        <h3>Lorem ipsum dolor</h3>
      </Container>
      <Container className="pb-0">
        <Row>
          <Col className="p-0 mb-0">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Distribuidor:</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
          </Col>
        </Row>
      </Container>
      <Container className="pb-4 dashtablas">
      <Row>
          
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                  <th>#</th>
                  <th>Fecha</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
                <RowTablaUsuario />
              </tbody>
            </Table>
        </Row>
        <Row>
          <Col>
          <div align="center">
            <Link href="/admin/nuevousuario" style={{fontSize:'0.8rem'}}>
              <a className="btn btn-primary">
              Nuevo Usuario
              </a>
            </Link>
          </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}