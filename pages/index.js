import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import SliderEntrada from "../components/sliderEntrada"
import Tarjeta from "../components/tarjeta"
import Banner from '../components/banner'
import Loader from '../components/loader'

import { useEntries } from '../lib/swr-hooks'

export default function Home() {
  const [autos, setAutos] = useState()
  const { entries, isLoading } = useEntries()

  useEffect(() => {
    setAutos(entries)
  }, [entries])

  if (!autos || isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <Layout titulo="">
      <SliderEntrada className="mt-3" />
      <Container className="destacados">
        <Row>
          <Col>
            <h3 className="text-center p-4 mt-4">Modelos</h3>
          </Col>
        </Row>
        <Row>
          {autos.map(auto => (
            <Col key={auto.id} md={3}>
              <Tarjeta
                link="/categoria"
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
            <div style={{ float: "right", marginRight: '50px' }}>
              <Link href="/categoria">
                <Button variant="primary" className="favoritos">Ver todo el inventario</Button>
              </Link>
            </div>
          </Col>
          <Col>
            <div style={{ float: "left", marginLeft: '50px' }}>
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
            linker="/programa"
          />
          <div className="linea"></div>
          <Banner
            icono="iconos/icono_beneficiosdelprograma.svg"
            titulo="Beneficios del programa"
            boton="Búsqueda Inteligente"
            linker="/beneficios"
          />
          <div className="linea"></div>
          <Banner
            icono="iconos/162puntos.svg"
            titulo="Certificación de Seminuevos"
            boton="Certificación de Seminuevos"
            linker="/certificacion"
          />
        </div>
        <div className="bannerx">
          <div className="linea"></div>
          <Banner
            icono="iconos/registrar.svg"
            titulo="Registro de Seminuevos"
            boton="Búsqueda Inteligente"
            linker="/registrar"
          />
          <div className="linea"></div>
          <Banner
            icono="iconos/contacto.svg"
            titulo="Contacta un distribuidor"
            boton="Búsqueda Inteligente"
            linker="/registro"
          />
        </div>
        <Col className="d-flex politica">
          <Row>
            <Link href="https://www.hyundai.com.mx/privacidad/">
              <a>
                Política de privacidad <img src="/iconos/infp.svg" alt="Hyundai México" title="Hyundai México" style={{ width: '15px', marginLeft: '10px', marginRight: '7px' }} />
              </a>
            </Link>
            <Link href="https://www.hyundai.com.mx/terminos/">
              <a>
                Términos y condiciones <img src="/iconos/infp.svg" alt="Hyundai México" title="Hyundai México" style={{ width: '15px', marginLeft: '10px', marginRight: '7px' }} />
              </a>
            </Link>
          </Row>
        </Col>
      </div>
    </Layout>
  )
}
{/* 
export async function getStaticProps(context) {
  
  const { entries, isLoading } = useEntries()

  if (!entries) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  
  const { entries, isLoading } = useEntries()
  return {
    props: { entries }, // will be passed to the page component as props
  }
  
}
*/}