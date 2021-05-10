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
  const [autosdefault, setAutosdefault] = useState()
  const [autos, setAutos] = useState()
  const [filtroautos, setFiltroAutos] = useState()
  const { entries, isLoading } = useEntries()
  const [precio, setPrecio] = useState(50000)
  const [kilometros, setKilometros] = useState(0)
  const [anio, setAnio] = useState()
  const [modelo, setModelo] = useState()
  const [transmision, setTransmision] = useState()

  useEffect(() => {
    setAutos(entries)
    setAutosdefault(entries)
  }, [entries])

  const filtroPrecio = (price) => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
    let target = parseInt(price.target.value)
    setPrecio(target)
    setFiltroAutos(autos.filter(filteranio => filteranio.precio < target ))
  }

  const filtroKilometros = (kilometros) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    let target = parseInt(kilometros.target.value)
    setKilometros(target)
    setFiltroAutos(autos.filter(filteranio => filteranio.kilometros < target ))
  }
  
  const filtroanio = (aniox) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    setAutos(autosdefault)
    setAnio(aniox)
    setFiltroAutos(autos.filter(filteranio => filteranio.anio == aniox ))
  }

  const filtroModelo = (modelo) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    setModelo(modelo)
    setFiltroAutos(autos.filter(filteranio => filteranio.modelo == modelo ))
  }

  const filtroTransmision = (transmision) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    setTransmision(transmision)
    setFiltroAutos(autos.filter(filteranio => filteranio.transmision == transmision ))
  }

  if (!autos || isLoading) {
    return (
      <Loader />
    )
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
                contador={(precio) => filtroPrecio(precio)}
                precio={precio}
                loskilometros={(kilometros) => filtroKilometros(kilometros)}
                kilometros={kilometros}
                elAnio={(anio) => filtroanio(anio)}
                anio={anio}
                elModelo={(par) => filtroModelo(par)}
                modelo={modelo}
                transmision={transmision}
                laTransmision={(transmision) => filtroTransmision(transmision)}
              />
            </Col>
            <Col>
              <BreadCrumb />
              <Row>
                {filtroautos ? 
                filtroautos.map(auto => (
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
                ))
                :
                autos.map(auto => (
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
              <Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
  )
}
