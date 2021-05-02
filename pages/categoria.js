import {useEffect, useState} from 'react'
import useSWR from 'swr'
import Layout from '../components/layout'
import BreadCrumb from '../components/breadCrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tarjeta from "../components/tarjeta"
import Filtros from "../components/filtros"
import Loader from '../components/loader'

import { useEntries } from '../lib/swr-hooks'

export default function Categoria() {
  const [autos, setAutos] = useState()
  const { entries, isLoading } = useEntries()
  const [precio, setPrecio] = useState(50000)
  const [kilometros, setKilometros] = useState(0)
  const [anio, setAnio] = useState(2015)

  useEffect(() => {
    setAutos(entries)
  }, [entries])

  if(!autos || isLoading){
    return(
      <Loader />
    )
  }

  return (
    <Layout>
      <Container fluid={true} className="destacados">
        <BreadCrumb />
        <Row className="m-0 p-0">
          <Col md={3} sm={3}>
            <Filtros 
              contador={() => setPrecio(precio + 1000)} 
              precio={precio}
              loskilometros={() => setKilometros(kilometros + 10000)}
              kilometros={kilometros}
              elAnio={(par) => setAnio(par)}
              anio={anio}
            />
          </Col>
          <Col>
            <Row>
              {autos.map(auto => (
                <Col key={auto.id} md={4}>
                  <Tarjeta 
                    link="/producto" 
                    modelo={auto.modelo}
                    precio={auto.precio} 
                    kilometros={auto.kilometros}
                    anio={auto.anio}
                    imagen={auto.imagen}
                  />
                </Col>
              ))}
            </Row>
            
          </Col>
        </Row>

      </Container>
      
    </Layout>
  )
}
