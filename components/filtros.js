import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FavoritosCategoria from './favoritosCategoria';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export default function Filtros(
  {
    contador,
    precio,
    kilometros,
    loskilometros,
    elAnio,
    anio,
    elModelo,
    modelo,
    transmision,
    laTransmision
  }) {

  const [estado, setEstados] = useState([])
  const [value, setValue] = useState({ min: 2, max: 10 })

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
          {/* 
          <div className="d-flex align-items-center justify-content-between">
            <FavoritosCategoria />
          </div>
          <hr />
          */}
          <p className="p-0 m-0 pl-0 mb-2"><small>Precio</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3">$0.00</button> -
            <button className="btn btn-default bg-white ml-3">{formatter.format(precio)}</button>
          </div>

          <div className="mt-3">
            <Form className="mt-3">
              <Form.Group controlId="formBasicRange1">
                <Form.Control
                  type="range"
                  defaultValue={precio}
                  min="0"
                  max="500000"
                  step="5"
                  onChange={contador}
                />
              </Form.Group>
            </Form>
          </div>
          <hr />
          <p className="p-0 m-0 pl-2 mb-2"><small>Kilometraje máximo</small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white mr-3">0</button> -
            <button className="btn btn-default bg-white ml-3">{kilometros}</button>
          </div>
          <div className="mt-3">
            <Form className="mt-3">
              <Form.Group controlId="formBasicRange">
                <Form.Control
                  type="range"
                  defaultValue={kilometros}
                  min="0"
                  max="500000"
                  step="5"
                  onChange={loskilometros}
                />
              </Form.Group>
            </Form>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Año <span className="font-bold">{anio}</span></small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn btn-default bg-white p-2 mr-2 w-100"
              onClick={() => elAnio(2022)}
            >
              2022
            </button>
            <button
              className="btn btn-default bg-white p-2 w-100"
              onClick={() => elAnio(2021)}
            >
              2021
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button
              className="btn btn-default bg-white p-2 mr-2 w-100"
              onClick={() => elAnio(2020)}
            >
              2020
            </button>
            <button
              className="btn btn-default bg-white p-2 w-100"
              onClick={() => elAnio(2019)}
            >
              2019
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button
              className="btn btn-default bg-white p-2 mr-2 w-100"
              onClick={() => elAnio(2018)}
            >
              2018
            </button>
            <button
              className="btn btn-default bg-white p-2 w-100"
              onClick={() => elAnio(2017)}
            >
              2017
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button
              className="btn btn-default bg-white p-2 mr-2 w-100"
              onClick={() => elAnio(2016)}
            >
              2016
            </button>
            <button
              className="btn btn-default bg-white p-2 w-100"
              onClick={() => elAnio(2015)}
            >
              2015
            </button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Modelo <span className="font-bold">{modelo}</span></small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white p-2 mr-2 w-100" onClick={() => elModelo('TUCSON⁠')}>TUCSON⁠</button>
            <button className="btn btn-default bg-white p-2 w-100" onClick={() => elModelo('CRETA⁠')}>CRETA⁠</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white p-2 mr-2 w-100" onClick={() => elModelo('SANTA FE')}>SANTA FE</button>
            <button className="btn btn-default bg-white p-2 w-100" onClick={() => elModelo('GRAND I10 HB')}>GRAND I10 HB</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white p-2 mr-2 w-100" onClick={() => elModelo('GRAND I10 SD')}>GRAND I10 SD</button>
            <button className="btn btn-default bg-white p-2 w-100" onClick={() => elModelo('ACCENT SD')}>ACCENT SD</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white p-2 mr-2 w-100" onClick={() => elModelo('ACCENT HB')}>ACCENT HB</button>
            <button className="btn btn-default bg-white p-2 w-100" onClick={() => elModelo('ELANTRA')}>ELANTRA</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-default bg-white p-2 mr-2 w-100" onClick={() => elModelo('IONIQ')}>IONIQ</button>
            <button className="btn btn-default bg-white p-2 mr-2 w-100" onClick={() => elModelo('IX35')}>IX35</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Transmisión <span className="font-bold">{transmision}</span></small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-default bg-white p-2 mr-2 w-100" onClick={() => laTransmision('Manual')}>Manual</button>
            <button className="btn btn-default bg-white p-2 w-100" onClick={() => laTransmision('Automática')}>Automática</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Distribuidor</small></p>
          <Form.Group controlId="formBasicEmail">
            <Form.Control as="select">
              <option>EXCELENCIA CDMX TEPEPAN</option>
              <option>FARRERA MÉRIDA</option>
              <option>PLASENCIA GUADALAJARA</option>
              <option>PREMIER CULIACÁN</option>
              <option>CLEBER MTY PENTA SENDERO</option>
              <option>SONI QUERÉTARO</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

    </Container>
  )
}