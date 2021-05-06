import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'

export default function RowTablaRoles() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const alerta = () => {
    alert('Mensaje')
  }
  return (
    <tr>
      <td>Usuario</td>
      <td style={{width: '10%'}}>
      <Button variant="primary" type="submit" style={{fontSize:'0.8rem'}}>
        Editar
      </Button>
      </td>
    </tr>
  )
}