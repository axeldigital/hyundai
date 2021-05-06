import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Header from '../../components/admin/header'
import RegistroVehiculo from '../../components/admin/registroVehiculo'
import TarjetaAdmin from "../../components/admin/tarjetaAdmin";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import RowTabla from "./rowTabla"

export default function Validacion() {
  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-0 pt-4 dashtablas">
        <h2 className="p-3">Validación</h2>
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