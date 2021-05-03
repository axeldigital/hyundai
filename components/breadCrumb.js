import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function BreadCrumb(){
  const router = useRouter();
  const [ruta, setRuta] = useState([])
  useEffect(() => {
    setRuta(router.pathname.split("/"))
  }, [])
  return(
    <Row className="breadcrumb">
      <Col>
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
              <Link href={`/${rut}`}>
                <a>
                  <span className="lnr lnr-chevron-right pr-1"></span> {rut}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}