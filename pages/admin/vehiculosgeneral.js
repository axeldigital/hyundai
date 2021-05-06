import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Header from '../../components/admin/header'
import RegistroEditarVehiculo from '../../components/admin/registroEditarVehiculo'
import TarjetaAdmin from "../../components/admin/tarjetaAdmin";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loader from '../../components/loader'

import { useEntries } from '../../lib/swr-hooks'

export default function VehiculosGeneral() {
  const [autos, setAutos] = useState()
  const { entries, isLoading } = useEntries()

  useEffect(() => {
    setAutos(entries)
  }, [entries])

  if (!autos || isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <Layout>
      <Container fluid={true}>
        <Header />
      </Container>
      <Container fluid={true} className="p-3 pt-4 dashtablas">
        <h2>Vehículos</h2>
      </Container>
      <Container className="p-0 pt-4 pb-4 dashtablas">
        <Row>
          <Col md={3}>
            <h3>Editar</h3>
            <RegistroEditarVehiculo />
          </Col>
          <Col>
            <Row>
              {autos.map(auto => (
                <Col key={auto.id} md={3}>
                  <TarjetaAdmin
                    link={`/producto/${auto.id}`}
                    modelo={auto.modelo}
                    precio={auto.precio}
                    kilometros={auto.kilometros}
                    anio={auto.anio}
                    imagen={auto.imagen}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}