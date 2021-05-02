import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FormaDistribuidor() {
  return (
    <Form className="bg-light p-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Nombre Completo:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="p-0">Correo electrónico:</Form.Label>
        <Form.Control type="mail" />
      </Form.Group>
    </Form>
  )
}