import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function RegistroEditarVehiculo() {
  return (
    <Form className="bg-light p-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Modelo</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Año</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Distribuidor</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Link href="/admin/vehiculos">
        <a className="btn btn-primary" style={{ fontSize: '0.8rem'}}>
          Agregar Nuevo Vehículo
        </a>
      </Link>
      <Link href="/admin/vehiculos">
        <a className="btn btn-primary mt-3 w-100" style={{ fontSize: '0.8rem'}}>
          Buscar
        </a>
      </Link>
    </Form>
  )
}