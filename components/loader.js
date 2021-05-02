import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Loader() {
  return (
    <Container className="loader">
      <Row>
        <Col>
          <img src="/iconos/loader.gif" alt="hyndai seminuevos" title="hyundai seminuevos"/>
          <br/>
          <br/>
          <img src="/logo-hyundai.svg" alt="hyndai seminuevos" title="hyundai seminuevos" style={{
            width: '250px'
          }} />
          <h2 className="pt-3 pb-0 m-0">SEMINUEVOS<br/>CARGANDO EL CONTENIDO</h2>
        </Col>
      </Row>
    </Container>
  )
}