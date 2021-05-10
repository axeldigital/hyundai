import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function BreadCrumb(){
  const router = useRouter();
  const [ruta, setRuta] = useState([])
  console.log(router.pathname)
  useEffect(() => {
    setRuta(router.pathname)
    console.log(ruta)
  }, [ruta])

  if(!ruta){
    return(
      'la ruta'
    )
  }

  return(
    <Row className="breadcrumb">
      <Col className="p-0">
        <ul>
          <li>
            <Link href={ruta}>
              <a>
                <span className="lnr lnr-chevron-right pr-1"></span> {ruta}
              </a>
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  )
}