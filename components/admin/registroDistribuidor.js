import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function RegistroDistribuidor() {
  return (
    <Form className="bg-light p-2 pl-3 pr-3">
      <Form.Row className="justify-content-evenly">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="p-0">Nombre:</Form.Label>
          <Form.Control type="number" className="w-100" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="p-0">Dirección:</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form.Row>
    </Form>
  )
}