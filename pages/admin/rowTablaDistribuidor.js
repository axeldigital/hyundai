import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function RowTablaDistribuidor() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const alerta = () => {
    alert('Mensaje')
  }
  return (
    <tr>
      <td>Pellentesque ut ornare libero....</td>
      <td style={{width: '10%'}}>
      <Button variant="primary" type="submit" style={{fontSize:'0.8rem'}}>
        Editar
      </Button>
      </td>
      <td style={{width: '10%'}}>
      <Button variant="primary" type="submit" style={{fontSize:'0.8rem'}} onClick={handleShow}>
        Eliminar
      </Button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Eliminar Distribuidor
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  )
}