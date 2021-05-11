import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

export default function FormaDistribuidor() {

  const [enviardtt, setEnviardtt] = useState(false)

  const enviardt = (e) => {
    console.log(e)
    setEnviardtt(true)
  }

  return (
    <>
      {enviardtt ?
        <h3 className="text-center" style={{color: '#999'}}>Gracias!, en breve uno de nuestros representantes se pondrá en contacto con usted!</h3>
        :
        <Form onSubmit={enviardt} className="p-2">
          <h5>Datos personales</h5>
          <Row>
            <Col md={3}>
              <Form.Control as="select">
                <option>Sr.</option>
                <option>Sra.</option>
                <option>Lic.</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail" className="m-0">
                <Form.Label className="p-0">Nombre:</Form.Label>
                <Form.Control type="text" required="required" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail" className="m-0">
                <Form.Label className="p-0">Apellidos:</Form.Label>
                <Form.Control type="text" required="required" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail" className="m-0">
                <Form.Label className="p-0">Celular:</Form.Label>
                <Form.Control type="text" required="required" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail" className="m-0">
                <Form.Label className="p-0">Email:</Form.Label>
                <Form.Control type="text" required="required" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formBasicEmail" className="m-0">
                <Form.Label className="p-0">C.P.</Form.Label>
                <Form.Control type="text" required="required" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1" className="m-0">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} required="required" />
              </Form.Group>
            </Col>
          </Row>
          <p className="pt-2"><small>Dejar un comentario (Opcional)</small></p>
          <Modal.Footer>
            <Button type="submit" variant="primary" className="w-100">Enviar</Button>
          </Modal.Footer>
        </Form>
      }
    </>
  )
}