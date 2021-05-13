import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Favoritos() {

  const [favorito, setFavorito] = useState(false)
  const [show, setShow] = useState(false);

  const fav = () => {
    setFavorito(!favorito)
    //setShow(true)
  }

  const handleClose = () => setShow(false);

  return (
    <>
      <p className="m-0 p-0 d-flex justify-content-center align-items-center float-right" onClick={fav} style={{cursor: 'pointer'}}>
        <small className="mr-2">Favoritos</small>
        {favorito ? 
          <img src="/iconos/star-solid.svg" style={{width: '17px'}} alt="" title="" />
          :
          <span className='lnr lnr-star-empty ml-1'></span>
        }
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias!, Agregado a favoritos...</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}