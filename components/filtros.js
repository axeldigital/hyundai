import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function Filtros() {
  return (
    <Container className="filtros">
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-between">
            <p className="p-0 m-0 pl-2"><small>Favoritos</small></p>
            <span className="lnr lnr-star"></span>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Precio</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3">$ 100,000</button> -
            <button className="btn btn-default bg-white ml-3">$ 100,000</button>
          </div>
          <Form className="mt-3">
            <Form.Group controlId="formBasicRange">
              <Form.Control type="range" />
            </Form.Group>
          </Form>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Kilometraje máximo</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3">$ 100,000</button> -
            <button className="btn btn-default bg-white ml-3">$ 100,000</button>
          </div>
          <Form className="mt-3">
            <Form.Group controlId="formBasicRange">
              <Form.Control type="range" />
            </Form.Group>
          </Form>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Año</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3 w-100">2021</button> -
            <button className="btn btn-default bg-white ml-3 w-100">2020</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100">2019</button> -
            <button className="btn btn-default bg-white ml-3 w-100">2018</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100">2017</button> -
            <button className="btn btn-default bg-white ml-3 w-100">2016</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Modelo</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3 w-100">TUCSON</button> -
            <button className="btn btn-default bg-white ml-3 w-100">CRETA</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100">SANTA FE</button> -
            <button className="btn btn-default bg-white ml-3 w-100">GRAND I10 HB</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100">GRAND I10 SD</button> -
            <button className="btn btn-default bg-white ml-3 w-100">ACCENT SD</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100">ACCENT HB</button> -
            <button className="btn btn-default bg-white ml-3 w-100">ELANTRA</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100">IONIC</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Transmisión</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3 w-100">Manual</button> -
            <button className="btn btn-default bg-white ml-3 w-100">Automática</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Localización</small></p>
          <Form.Group>
            <Form.Control as="select">
              <option>Estado</option>
            </Form.Control>
            <Form.Control as="select" className="mt-3">
              <option>Estado</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

    </Container>
  )
}