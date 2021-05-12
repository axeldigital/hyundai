import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

export default function FormaDistribuidor() {
  const [estado, setEstados] = useState([])
  const [enviardtt, setEnviardtt] = useState(false)

  const enviardt = (e) => {
    console.log(e)
    setEnviardtt(true)
  }
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/astockwell/countries-and-provinces-states-regions/master/countries/mexico.json')
      .then(response => response.json())
      .then(data =>
        setEstados(data)
      );
  }, [])

  return (
    <>
      {enviardtt ?
        <h3 className="text-center" style={{ color: '#999' }}>Gracias!, en breve uno de nuestros representantes se pondrá en contacto con usted!</h3>
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
          <Row>
            <Col>
              <p className="pt-2"><small>Dejar un comentario (Opcional)</small></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <small><p className="m-0 p-0 d-flex align-items-center"><Form.Check aria-label="option 1" /> Deseo que me ofrezcan más modelos</p></small>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Label>Localización</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select">
                {estado.map(edo => (
                  <option key={edo.code}>{edo.name}</option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Ciudad</Form.Label>
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
            </Col>
          </Row>
          <Modal.Footer className="p-0 m-0 mt-4">
            <Button type="submit" variant="primary" className="w-100 m-0" style={{ fontSize: '0.8rem' }}>Enviar</Button>
          </Modal.Footer>
        </Form>
      }
    </>
  )
}