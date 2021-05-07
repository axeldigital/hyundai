import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function BreadCrumb({id, modelo}){
  const router = useRouter();
  const [ruta, setRuta] = useState([])
  useEffect(() => {
    setRuta(router.pathname.split("/"))
    console.log(ruta)
  }, [])
  return(
    <Row className="breadcrumb">
      <Col className="p-0">
        <ul>
          <li>
            <Link href="/">
              <a>
                <span className="lnr lnr-chevron-right pr-1"></span> Inicio
              </a>
            </Link>
          </li>
          {ruta.map(rut => (
            <li key={rut}>
              <Link href={`/${ruta}`}>
                <a>
                  <span className="lnr lnr-chevron-right pr-1"></span> {id}
                </a>
              </Link>
            </li>
          ))}
          <li>{modelo}</li>
        </ul>
      </Col>
    </Row>
  )
}