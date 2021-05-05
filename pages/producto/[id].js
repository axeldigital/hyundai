import { useEffect, useState } from 'react'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageGallery from 'react-image-gallery';
import BreadCrumb from '../../components/breadCrumb'
import Banner from '../../components/banner';
import FiltrosProductos from '../../components/filtrosProductos';
import { useRouter } from 'next/router'
import Loader from '../../components/loader'

const images = [
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/9.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/6.jpg',
  },
  {
    original: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
    thumbnail: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/tucson-2022/beauty/1440x810/7.jpg',
  }
];

import { useProducto } from '../../lib/swr-hooks'

export default function Producto() {
  const [auto, setAuto] = useState()
  const router = useRouter()
  const id = router.query.id
  const { entrie, isLoading } = useProducto(id)

  console.log(id)
  console.log(entrie)

  useEffect(() => {
    setAuto(entrie)
  }, [auto])

  const anterior = () => {
    console.log("modelo anterior")
  }

  const siguiente = () => {
    console.log("modelo siguiente")
  }

  if (!entrie || isLoading) {
    return (
      <Loader />
    )
  }

  const images = [
    {
      original: entrie.imagen,
      thumbnail: entrie.imagen,
    },
  ];

  return (
    <Layout>
      <Container className="destacados">
        
        <Row className="p-0 m-0">
          <Col>
            <h2 className="m-0 p-3 pt-4 w-100 text-center">Modelos</h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <BreadCrumb />
          </Col>
        </Row>
        <Row className="p-0 m-0">
          <Col md={9} sm={9}>
            <div className="d-flex justify-content-between">
              <h5 className="m-0 p-0 pb-2">{entrie.modelo}</h5>
              <p className="m-0 p-0 d-flex justify-content-between"><small>Marcar como favorito</small> <span className="lnr lnr-star ml-1"></span></p>
            </div>
            <ImageGallery items={images} />
            <Row className="mt-3 mb-5">
              <Col>
                <p className="text-left m-0 p-0"><small>Descarga ficha técnica</small></p>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <span className="lnr lnr-chevron-left pr-3" onClick={anterior}></span>
                <p className="text-center m-0 p-0">Ver más modelos</p>
                <span className="lnr lnr-chevron-right pl-3" onClick={siguiente}></span>
              </Col>
              <Col>
                <p className="text-right m-0 p-0"><small>Compartir</small></p>
              </Col>
            </Row>
            <Row>
              <div className="bannercontenedor producto">
                <div className="bannerx">
                  <Banner
                    icono="/iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="/iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="/iconos/icono_beneficiosdelprograma.svg"
                    titulo="Beneficios del programa"
                    boton="Búsqueda Inteligente"
                  />
                </div>
              </div>
            </Row>
          </Col>
          <Col md={3} sm={3} className="p-0">
            <FiltrosProductos
              precio={entrie.precio}
              modelo={entrie.modelo}
              ano={entrie.anio}
              kilometros={entrie.kilometros}
              transmision={entrie.transmision}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
