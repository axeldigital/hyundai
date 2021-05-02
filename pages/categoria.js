import {useEffect, useState} from 'react'
import Layout from '../components/layout'
import BreadCrumb from '../components/breadCrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tarjeta from "../components/tarjeta"
import Filtros from "../components/filtros"

export default function Categoria() {
  const [autos, setAutos] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [precio, setPrecio] = useState(50000)
  const [kilometros, setKilometros] = useState(0)
  const [anio, setAnio] = useState(2015)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://hyundai-seminuevos-default-rtdb.firebaseio.com/autos.json'
    ).then((response) => response.json())
    .then(data => {
      const transformedAutos = []
      for(const key in data){
        transformedAutos.push({
          id: key, 
          modelo: data[key].modelo,
          anio: data[key].anio,
          precio: data[key].precio,
          kilometros: data[key].kilometros,
        })
      }
      setAutos(transformedAutos)
      setIsLoading(false)
    })
  }, [])

  if(isLoading){
    return(
      <p>....Loading</p>
    )
  }

  if(!autos){
    return(
      <p>....Loading</p>
    )
  }

  console.log(autos)

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
                  <Tarjeta link="/producto" precio={auto.precio} kilometros={auto.kilometros} />
                </Col>
              ))}
              
            </Row>
            <Row>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
            </Row>
            <Row className="mt-3 mb-5">
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
              <Col>
                <Tarjeta link="/producto" precio={precio} kilometros={kilometros} />
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
      
    </Layout>
  )
}
