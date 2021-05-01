import Layout from '../../components/layout'
import RowTabla from "./rowTabla"
import RowTablaCampana from "./rowTablaCampana"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import Table from 'react-bootstrap/Table'

export default function Dashboard() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container className="p-0 pt-4 dashtablas">
        <h2>Home</h2>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col>
            <h3>Validaciones pendientes</h3>
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
            <h3>Vehículos alertados</h3>
            <Table striped bordered hover size="sm">
              <tbody>
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
                <RowTablaCampana />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}