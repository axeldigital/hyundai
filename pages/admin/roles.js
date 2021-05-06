
import Link from 'next/link'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import RegistroUsuarios from '../../components/admin/registroUsuarios'
import Table from 'react-bootstrap/Table'
import RowTablaRoles from "./rowTablaRoles"
import Form from 'react-bootstrap/Form'


export default function Roles() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Roles</h2>
      </Container>
      <Container className="p-0 mb-0 pb-0">
        <Row>
          <Col className="p-0 mb-0">
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Roles:</Form.Label>
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
      <Container className="p-0 pt- pb-4 dashtablas">
        <Row>
          <Table striped bordered hover size="sm">
            <tbody>
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
              <RowTablaRoles />
            </tbody>
          </Table>
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
        <Row className="mb-3">
          <Col className="d-flex">
            <>
              <p className="mr-3">Distribuidor</p>
              <Form.Check type="radio" aria-label="radio 1" />
            </>
          </Col>
          <Col className="d-flex">
            <>
              <p className="mr-3">Administrador</p>
              <Form.Check type="radio" aria-label="radio 1" />
            </>
          </Col>
        </Row>
        <Row>
          <Col>
            <div align="center">
              <Link href="/" style={{ fontSize: '0.8rem' }}>
                <a className="btn btn-primary">
                  Editar usuario
              </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}