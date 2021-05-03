import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export default function Filtros(
  {
    contador, 
    precio, 
    loskilometros, 
    kilometros,
    elAnio,
    anio,
    elModelo,
    modelo
  }) {

  const [estado, setEstados] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/astockwell/countries-and-provinces-states-regions/master/countries/mexico.json')
    .then(response => response.json())
    .then(data => 
      setEstados(data)
    );
  }, [])

  return (
    <Container className="filtros mb-5">
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-between">
            <p className="p-0 m-0 pl-2"><small>Favoritos</small></p>
            <span className="lnr lnr-star" onClick={contador}></span>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Precio</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3">$50,000</button> -
            <button className="btn btn-default bg-white ml-3">{formatter.format(precio)}</button>
          </div>
          <Form className="mt-3">
            <Form.Group controlId="formBasicRange">
              <Form.Control type="range" onChange={contador} />
            </Form.Group>
          </Form>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Kilometraje máximo</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3">10,000</button> -
            <button className="btn btn-default bg-white ml-3">{kilometros}</button>
          </div>
          <Form className="mt-3">
            <Form.Group controlId="formBasicRange" onChange={loskilometros}>
              <Form.Control type="range" />
            </Form.Group>
          </Form>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Año <span className="font-bold">{anio}</span></small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button 
              className="btn btn-default bg-white mr-3 w-100"
              onClick={() => elAnio(2021)}  
            >
                2021
            </button> 
            <button 
              className="btn btn-default bg-white ml-3 w-100"
              onClick={() => elAnio(2020)}
              >
                2020
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
          <button 
              className="btn btn-default bg-white mr-3 w-100"
              onClick={() => elAnio(2019)}  
            >
                2019
            </button> 
            <button 
              className="btn btn-default bg-white ml-3 w-100"
              onClick={() => elAnio(2018)}
              >
                2018
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
          <button 
              className="btn btn-default bg-white mr-3 w-100"
              onClick={() => elAnio(2017)}  
            >
                2017
            </button> 
            <button 
              className="btn btn-default bg-white ml-3 w-100"
              onClick={() => elAnio(2016)}
              >
                2016
            </button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Modelo {modelo}</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3 w-100" onClick={() => elModelo('TUCSON')}>TUCSON</button> 
            <button className="btn btn-default bg-white ml-3 w-100" onClick={() => elModelo('CRETA')}>CRETA</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100" onClick={() => elModelo('SANTA FE')}>SANTA FE</button> 
            <button className="btn btn-default bg-white ml-3 w-100" onClick={() => elModelo('GRAND I10 HB')}>GRAND I10 HB</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100" onClick={() => elModelo('GRAND I10 SD')}>GRAND I10 SD</button> 
            <button className="btn btn-default bg-white ml-3 w-100" onClick={() => elModelo('ACCENT SD')}>ACCENT SD</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100" onClick={() => elModelo('ACCENT HB')}>ACCENT HB</button> 
            <button className="btn btn-default bg-white ml-3 w-100" onClick={() => elModelo('ELANTRA')}>ELANTRA</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white mr-3 w-100" onClick={() => elModelo('IONIQ')}>IONIQ</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Transmisión</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3 w-100">Manual</button> 
            <button className="btn btn-default bg-white ml-3 w-100">Automática</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Localización</small></p>
          <Form.Group>
            <Form.Control as="select">
              {estado.map(edo => (
                <option key={edo.code}>{edo.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

    </Container>
  )
}