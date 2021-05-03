import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function RegistroDistribuidor() {
  return (
    <Form className="bg-light p-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Ubicación</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrar
  </Button>
    </Form>
  )
}