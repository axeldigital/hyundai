import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import RowTabla from "./rowTabla"
import RowCampana from "./rowCampana"
import RowCampanaCoche from "./rowCampanaCoche"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../components/admin/header'
import Table from 'react-bootstrap/Table'
import Loader from '../../components/loader'

import { useEntries } from '../../lib/swr-hooks'

export default function Dashboard() {
  const [usuario, setUsuario] = useState({})
  const [autos, setAutos] = useState()
  const { entries, isLoading } = useEntries()

  useEffect(() => {
    setAutos(entries)
    const id = sessionStorage.getItem('id');
    const nombre = sessionStorage.getItem('nombre');
    const email = sessionStorage.getItem('email');
    setUsuario({id, nombre, email})
  }, [entries])

  if (!autos || isLoading) {
    return (
      <Loader />
    )
  }
  console.log(entries)
  console.log(usuario)
  return (
    <Layout>
      <Container fluid={true}>
        <Header id={usuario.id} nombre={usuario.nombre} email={usuario.email} />
      </Container>
      <Container className="p-0 pt-4 dashtablas">
        <h2>Home</h2>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col>
            <h3>Validaciones pendientes</h3>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th style={{backgroundColor: '#fefefe'}}></th>
                  <th style={{background: '#fefefe'}}><span className="lnr lnr-calendar-full"></span> Fecha <span className="lnr lnr-chevron-down float-right"></span></th>
                  <th style={{background: '#fefefe'}}><span className="lnr lnr-funnel"></span> Distribuidor <span className="lnr lnr-chevron-down float-right"></span></th>
                  <th style={{background: '#fefefe'}}><span className="lnr lnr-car"></span> Tipo Auto <span className="lnr lnr-chevron-down float-right"></span></th>
                </tr>
              </thead>
              <tbody>
                <RowTabla />

              </tbody>
            </Table>
            <p className="float-right"><small>1-10 de 20 autos</small></p>
          </Col>
          <Col>
            <h3>Vehículos alertados</h3>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                  <th style={{background: '#fefefe'}}></th>
                  <th style={{background: '#fefefe'}}><span className="lnr lnr-calendar-full"></span> Fecha <span className="lnr lnr-chevron-down float-right"></span></th>
                  <th style={{background: '#fefefe'}}><span className="lnr lnr-funnel"></span> Distribuidor <span className="lnr lnr-chevron-down float-right"></span></th>
                  <th style={{background: '#fefefe'}}><span className="lnr lnr-car"></span> Tipo Auto <span className="lnr lnr-chevron-down float-right"></span></th>
                </tr>
              </thead>
              <tbody>
                <RowCampana />

              </tbody>
            </Table>
            <p className="float-right"><small>1-10 de 20 autos</small></p>
          </Col>
        </Row>
      </Container>
      <Container className="p-0 pt-0 pb-4 d-none">
        <Row>
          <Col>
            <Row>
              <Col className="d-flex justify-content-between">
                <p className="pa-0 m-0"><span className="lnr lnr-calendar-full"></span> Todas las fechas</p>
                <p>1 - 10 de 20 autos</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <Table striped bordered hover size="sm" style={{fontSize: '0.7rem'}}>
                <tbody>
                  {autos.map(auto => (
                    <RowCampanaCoche modelo={auto.modelo} imagen={auto.imagen} />
                  ))}
                </tbody>
              </Table>
              </Col>
            </Row>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}