import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function RegistroEditarVehiculo() {
  return (
    <Form className="bg-light p-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Modelo</Form.Label>
        <Form.Control as="select">
          <option>TUCSON</option>
          <option>CRETA</option>
          <option>SANTA FE</option>
          <option>GRAND I10 HB</option>
          <option>GRAND I10 SD⁠</option>
          <option>ACCENT SD⁠</option>
          <option>ACCENT HB⁠</option>
          <option>ELANTRA⁠</option>
          <option>IONIQ⁠</option>
          <option>IX35⁠</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Año</Form.Label>
        <Form.Control as="select">
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Distribuidor</Form.Label>
        <Form.Control as="select">
          <option>EXCELENCIA CDMX TEPEPAN</option>
          <option>FARRERA MÉRIDA</option>
          <option>PLASENCIA GUADALAJARA</option>
          <option>PREMIER CULIACÁN</option>
          <option>CLEBER MTY PENTA SENDERO</option>
          <option>SONI QUERÉTARO</option>
        </Form.Control>
      </Form.Group>
      <Link href="/admin/vehiculos">
        <a className="btn btn-primary" style={{ fontSize: '0.8rem' }}>
          Agregar Nuevo Vehículo
        </a>
      </Link>
      <Link href="/admin/vehiculos">
        <a className="btn btn-primary mt-3 w-100" style={{ fontSize: '0.8rem' }}>
          Buscar
        </a>
      </Link>
    </Form>
  )
}