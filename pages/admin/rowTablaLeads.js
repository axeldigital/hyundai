import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'

export default function RowTablaLeads() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const alerta = () => {
    alert('Mensaje')
  }
  return (
    <tr>
      <td className="text-center">
        <p>Grand i10 MidTA</p>
      </td>
      <td>
        <p>2020</p>
      </td>
      <td>
        <p>10,000 km</p>
      </td>
      <td>
        <p>5 de Mayo de 2021</p>
      </td>
      <td>
        <p>Lorem Ipsum</p>
      </td>
      <td>
        <p>Lorem Ipsum</p>
      </td>
    </tr>
  )
}