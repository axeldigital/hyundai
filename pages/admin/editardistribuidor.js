import Link from 'next/link'
import Table from 'react-bootstrap/Table'
import Layout from '../../components/layout';
import RowTabla from "./rowTabla"
import RowCampana from "./rowCampana"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function editardistribuidor() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Distribuidor</h2>
        <h3 className="pt-2">Editar distribuidor</h3>
      </Container>
      <Container className="d-flex justify-content-center align-items-center p-0 mb-5 pb-0 bg-light">
        <Row>
          <Col className="p-5 mb-3d-flex justify-content-center align-items-center">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Lorem ipsum dolor sit amet" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Lorem ipsum dolor sit amet" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Liga de google maps</Form.Label>
              <Form.Control type="text" placeholder="Lorem ipsum dolor sit amet" />
              </Form.Group>
            </Form>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
          <Form>
            <div className="mt-5">
              <img src="/mapa.png" className="img-fluid" alt="" title="" />
            </div>
          </Form>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Button variant="primary" type="submit">
              Guardar cambios
            </Button>
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
              </tbody>
            </Table>
          </Col>
          <Col>
            <h3>Vehículos registrados por validar</h3>
            <Table striped bordered hover size="sm">
              <tbody>
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
                <RowTabla />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}