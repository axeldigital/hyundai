import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function Filtros(){
  return(
    <Container className="filtros">
      <Row>
        <Col>
        <Form className="flex flex-column">
            <Col><h2>Selecciona tu Hyundai:</h2></Col>
            <Col>
              <Form.Control as="select" size="sm" custom>
                <option>Seleccionar Modelo</option>
                <option>Autos</option>
                <option>SUV's</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select" size="sm" custom>
                <option>Seleccionar Año</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select" size="sm" custom>
                <option>Seleccionar Distribuidor</option>
                <option>Autos</option>
                <option>SUV's</option>
              </Form.Control>
            </Col>
          
        </Form>
        </Col>
      </Row>
    </Container>
  )
}