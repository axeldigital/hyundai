import {useEffect, useState} from 'react'
import useSWR from 'swr'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import SliderEntrada from "../components/sliderEntrada"
import Tarjeta from "../components/tarjeta"
import Banner from '../components/banner'

import { useEntries } from '../lib/swr-hooks'

export default function Home() {
  const [autos, setAutos] = useState()
  const [isLoader, setIsLoading] = useState(false)
  const { entries, isLoading } = useEntries()

  const { data, error } = useSWR('https://hyundai-seminuevos-default-rtdb.firebaseio.com/autos.json')

  console.log('ENTRADAS: ' + JSON.stringify(entries))

  useEffect(() => {
    setIsLoading(true)
    if(data){
      const transformedAutos = []
      for(const key in data){
        transformedAutos.push({
          id: key, 
          modelo: data[key].modelo,
          anio: data[key].anio,
          precio: data[key].precio,
          kilometros: data[key].kilometros,
          imagen: data[key].imagen,
        })
      }
      setAutos(transformedAutos)
      setIsLoading(false)
    }
  }, [data])

  if(error){
    return(
      <p>No hay datos</p>
    )
  }

  if(!data || isLoader || !autos){
    return(
      <p>Cargando</p>
    )
  }

  return (
    <Layout titulo="">
      <SliderEntrada className="mt-3" />
      <Container className="destacados">
        <Row>
          <Col>
            <h3 className="text-center p-3">Modelos</h3>
          </Col>
        </Row>
        <Row>
              {autos.map(auto => (
                <Col key={auto.id} md={3}>
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
      </Container>
      <Container>
        <Row className="mt-3 mb-5">
          <Col>
            <div style={{float: "right"}}>
              <Link href="/categoria">
                  <Button variant="primary" className="favoritos">Ver todo el inventario</Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div style={{float: "left"}}>
              <Link href="/categoria">
                  <Button variant="primary" className="favoritos">Ver favoritos</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bannercontenedor">
        <h4>Conoce Hyundai Promise</h4>
        <div className="bannerx">
          <Banner 
            icono="iconos/icono_queeselprograma.svg"
            titulo="¿Qué es el programa Hyundai Promise?"
            boton="Búsqueda Inteligente"
          />
          <div className="linea"></div>
          <Banner 
            icono="iconos/icono_beneficiosdelprograma.svg"
            titulo="Beneficios del programa"
            boton="Búsqueda Inteligente"
          />
          <div className="linea"></div>
          <Banner 
            icono="iconos/certificacion.svg"
            titulo="¿En qué consiste la certificación?"
            boton="Búsqueda Inteligente"
          />
        </div>
        <div className="bannerx">
          <Banner 
            icono="iconos/162puntos.svg"
            titulo="Revisión de 162 puntos"
            boton="Búsqueda Inteligente"
          />
          <div className="linea"></div>
          <Banner 
            icono="iconos/registrar.svg"
            titulo="Quiero registrar mi auto"
            boton="Búsqueda Inteligente"
          />
          <div className="linea"></div>
          <Banner 
            icono="iconos/contacto.svg"
            titulo="Quiero registrar mi auto"
            boton="Búsqueda Inteligente"
          />
        </div>
        <Col className="d-flex politica">
          <Row>
            Política de privacidad - Términos y condiciones
          </Row>
        </Col>
      </div>
      
    </Layout>
  )
}
