import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import BreadCrumb from '../components/breadCrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TarjetaCategoria from "../components/tarjetaCategoria"
import Filtros from "../components/filtros"
import Loader from '../components/loader'

import { useEntries } from '../lib/swr-hooks'

export default function Categoria() {
  const [autos, setAutos] = useState()
  const { entries, isLoading } = useEntries()
  const [precio, setPrecio] = useState(50000)
  const [kilometros, setKilometros] = useState(0)
  const [anio, setAnio] = useState()
  const [modelo, setModelo] = useState("")

  useEffect(() => {
    setAutos(entries)
  }, [entries])

  if (!autos || isLoading) {
    return (
      <Loader />
    )
  }

  const filtroPrecio = (price) => {
    let lastNum = 1000000

    if(lastNum > precio){
      setPrecio(precio + 20000)
    } else {
      setPrecio(precio - 20000)
    }
    
    let filtraPrecio = autos.filter(filterprecio => filterprecio.precio > precio );
    setAutos(filtraPrecio)
  }

  return (
    <Layout>
      <Container className="destacados">
        <Row>
          <h2 className="m-0 p-3 pt-4 w-100 text-center">Modelos</h2>
        </Row>
        <Row className="m-0 p-0">
          <Col md={3} sm={3} className="m-0 p-0">
            <Filtros
              contador={() => filtroPrecio(precio)}
              precio={precio}
              loskilometros={() => setKilometros(kilometros + 10000)}
              kilometros={kilometros}
              elAnio={(par) => setAnio(par)}
              anio={anio}
              elModelo={(par) => setModelo(par)}
              modelo={modelo}
            />
          </Col>
          <Col>
            <BreadCrumb />
            <Row>
              {autos.map(auto => (
                <Col key={auto.id} md={3}>
                  <TarjetaCategoria
                    link={`/producto/${auto.id}`}
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
