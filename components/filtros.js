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

export default function Filtros({
  contador,
  precio,
  kilometros,
  loskilometros,
  elAnio,
  anio,
  elModelo,
  modelo,
  transmision,
  laTransmision,
  activado,
  elActivado
}) {

  const [estado, setEstados] = useState([])
  const [value, setValue] = useState({ min: 2, max: 10 })

  console.log(anio)

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
            <button className="btn btn-default bg-white ml-3">{kilometros}</button>
          </div>
          <div className="mt-3">
            <Form className="mt-3">
              <Form.Group controlId="formBasicRange">
                <Form.Control
                  type="range"
                  defaultValue={kilometros}
                  min="0"
                  max="100000"
                  step="50"
                  onChange={loskilometros}
                />
              </Form.Group>
            </Form>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Año <span className="font-bold">{anio}</span></small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className={`btn btn-default bg-white p-2 mr-2 w-100 ${anio == 2022 ? 'prendido' : 'noprendido'}`}
              onClick={() => elAnio(2022)}
            >
              2022
            </button>
            <button
              className={`btn btn-default bg-white p-2 mr-2 w-100 ${anio == 2021 ? 'prendido' : 'noprendido'}`}
              onClick={() => elAnio(2021)}
            >
              2021
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button
              className={`btn btn-default bg-white p-2 mr-2 w-100 ${anio == 2020 ? 'prendido' : 'noprendido'}`}
              onClick={() => elAnio(2020)}
            >
              2020
            </button>
            <button
              className={`btn btn-default bg-white p-2 mr-2 w-100 ${anio == 2019 ? 'prendido' : 'noprendido'}`}
              onClick={() => elAnio(2019)}
            >
              2019
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button
              className={`btn btn-default bg-white p-2 mr-2 w-100 ${anio == 2018 ? 'prendido' : 'noprendido'}`}
              onClick={() => elAnio(2018)}
            >
              2018
            </button>
            <button
              className={`btn btn-default bg-white p-2 mr-2 w-100 ${anio == 2017 ? 'prendido' : 'noprendido'}`}
              onClick={() => elAnio(2017)}
            >
              2017
            </button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Modelo <span className="font-bold">{modelo}</span></small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'TUCSON⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('TUCSON⁠')}>TUCSON⁠</button>
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'CRETA⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('CRETA⁠')}>CRETA⁠</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'SANTA FE⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('SANTA FE')}>SANTA FE</button>
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'GRAND I10 HB⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('GRAND I10 HB')}>GRAND I10 HB</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'GRAND I10 SD⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('GRAND I10 SD')}>GRAND I10 SD</button>
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'ACCENT SD⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('ACCENT SD')}>ACCENT SD</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'ACCENT HB⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('ACCENT HB')}>ACCENT HB</button>
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'ELANTRA⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('ELANTRA')}>ELANTRA</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'IONIQ⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('IONIQ')}>IONIQ</button>
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${modelo == 'IX35⁠' ? 'prendido' : 'noprendido'}`} onClick={() => elModelo('IX35')}>IX35</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Transmisión <span className="font-bold">{transmision}</span></small></p>
          <div className="d-flex align-items-center justify-content-center">
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${transmision == 'Manual⁠' ? 'prendido' : 'noprendido'}`} onClick={() => laTransmision('Manual')}>Manual</button>
            <button className={`btn btn-default bg-white p-2 mr-2 w-100 ${transmision == 'Automática⁠' ? 'prendido' : 'noprendido'}`} onClick={() => laTransmision('Automática')}>Automática</button>
          </div>
          <hr />
          <p className="p-0 m-0 pl-0 mb-2"><small>Localización</small></p>
          <Form.Group controlId="formBasicEmail">
          <Form.Control as="select">
                      {estado.map(edo => (
                        <option key={edo.code}>{edo.name}</option>
                      ))}
                    </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control as="select">
              <option>Álvaro Obregón</option>
              <option>Cuajimalpa</option>
              <option>Cuauhtemoc</option>
              <option>Gustavo A. Madero</option>
              <option>Iztacalco</option>
              <option>Iztapalapa</option>
              <option>Tlahuac</option>
              <option>Tlalpan</option>
              <option>Venustiano Carranza</option>
              <option>Xochimilco</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

    </Container>
  )
}