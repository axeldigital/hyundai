import Layout from '../components/layout'
import BreadCrumb from '../components/breadCrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Tarjeta from "../components/tarjeta"
import Filtros from "../components/filtros"

export default function Categoria() {
  const [count, setCount] = useState(0);
  const [precio, setPrecio] = useState(50000)
  return (
    <Layout>
      <Container fluid={true} className="destacados">
        <BreadCrumb />
        <Row className="m-0 p-0">
          <Col md={3} sm={3}>
            <Filtros contador={() => setPrecio(precio + 1)} precio />
          </Col>
          <Col>
            <Row>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} />
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
      
    </Layout>
  )
}
