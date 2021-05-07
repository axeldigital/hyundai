import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'

export default function RowTablaLeadsImagen() {
  const [show, setShow] = useState(false);
  return (
    <tr>
      <td>
        <img src="https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/home/carrusel/santa-fe-2020-1600X590.jpg" className="img-fluid" alt="" title="" />
      </td>
      <td className="text-center">
        <p>Grand i10 MidTA</p>
      </td>
      <td>
        <p>2020</p>
      </td>
      <td>
        <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus nec metus scelerisque laoreet euismod sit amet diam. Sed ac convallis enim. Mauris porta odio vitae magna faucibus, vitae varius ante iaculis. Nam vehicula accumsan eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed convallis magna. Vestibulum dignissim malesuada est non pellentesque. Proin vel lectus ipsum.</small></p>
      </td>
    </tr>
  )
}