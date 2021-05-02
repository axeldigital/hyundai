import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function RegistroVehiculo() {
  return (
    <Form className="bg-light p-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Precio</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
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
        <Form.Label className="p-0">Versión</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Kilometros</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Color</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Transmisión</Form.Label>
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
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Fecha</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrar
  </Button>
    </Form>
  )
}