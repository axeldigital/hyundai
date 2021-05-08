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

import {
  ReactiveBase,
  SelectedFilters,
  ResultList,
  ReactiveList,
} from '@appbaseio/reactivesearch';

export default function Categoria() {
  const [autos, setAutos] = useState()
  const [filtroautos, setFiltroAutos] = useState()
  const { entries, isLoading } = useEntries()
  const [precio, setPrecio] = useState(50000)
  const [kilometros, setKilometros] = useState(0)
  const [anio, setAnio] = useState()
  const [modelo, setModelo] = useState("")

  useEffect(() => {
    setAutos(entries)
  }, [entries])

  

  const filtroPrecio = (price) => {
    let target = parseInt(price.target.value)
    console.log(target)

    const newList = [...autos];
    console.log(newList)
    const itemIndex = newList.filter(item => item.precio < target);

    console.log(itemIndex)
    setPrecio(target)

    if (itemIndex.length) {
      setAutos(itemIndex)
    } else {
      setAutos(entries)
    }

  }

  {/* 
  const filtroanio = (aniox) => {
    setAutos(entries)
    console.log(autos)
    let filtraAnio = autos.filter(filteranio => filteranio.anio === aniox );
    //console.log(autos)
    //setAutos(...filtraAnio)
  }
  */}

  if (!autos || isLoading) {
    return (
      <Loader />
    )
  }

  console.log(autos)

  return (
    <ReactiveBase
      app="good-books-ds"
      url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
      enableAppbase
    >
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
                loskilometros={() => setKilometros(kilometros + 10000)}
                kilometros={kilometros}
                elAnio={(anio) => filtroanio(anio)}
                anio={anio}
                elModelo={(par) => setModelo(par)}
                modelo={modelo}
              />
            </Col>
            <Col>
              <BreadCrumb valor="/categoria" />
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
              <Row>
                <SelectedFilters />
                <ReactiveList
                  componentId="SearchResult"
                  dataField="original_title"
                  from={0}
                  size={3}
                  className="result-list-container"
                  pagination
                  react={{
                    and: 'Automóviles',
                  }}
                  render={({ data }) => (
                    <ReactiveList.ResultListWrapper>
                      {data.map(item => (
                        <ResultList key={item.id}>
                          {item.id}
                        </ResultList>
							        ))}
                    </ReactiveList.ResultListWrapper>
					        )}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    </ReactiveBase>
  )
}
