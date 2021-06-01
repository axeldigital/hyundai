import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';

export default function RowTabla({usuario}) {
  const { nombre, apellidos } = usuario

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const alerta = () => {
    alert('Mensaje')
  }

  const handleBorrar = (id) => {
    axios.delete(`https://seminuevos.hyundai.com.mx/hyundai_back/api/delete_user.php?id=${id}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        })
  }

  return (
    <tr>
      <td className="text-center align-middle" style={{width: '5%'}}>
        <img src="/iconos/envelope-solid.svg" alt="hyndai seminuevos" title="hyundai seminuevos" onClick={alerta} style={{width: '20px'}} />
      </td>
      <td className="align-middle">{nombre}, {apellidos}</td>
      <td style={{width: '10%'}}>
      <Link 
        href="/admin/editarusuario"
        className="btn btn-primary"
        variant="primary" 
        type="submit" 
        style={{fontSize:'0.8rem'
      }}>
        <Button variant="primary" type="submit" style={{fontSize:'0.8rem'}}>
        Editar
        </Button>
        
      </Link>
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
          <Button variant="primary" onClick={() => handleBorrar(usuario.id)}>
            Eliminar Usuario
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  )
}