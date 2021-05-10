import { useEffect, useState } from 'react'
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageGallery from 'react-image-gallery';
import BreadCrumb from '../../components/breadCrumb'
import Banner from '../../components/banner';
import FiltrosProductos from '../../components/filtrosProductos';
import Favoritos from '../../components/favoritos';
import { useRouter } from 'next/router'
import Link from 'next/link'
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

  useEffect(() => {
    setAuto(entrie)
  }, [auto])

  const anterior = () => {
    const ant = parseInt(id) - 1
    console.log(ant)
    if(ant === 0){
      router.push(`/producto/8`)
    } else {
      router.push(`/producto/${ant}`)
    }
    
  }

  const siguiente = () => {
    const sig = parseInt(id) + 1
    if(sig === 9){
      router.push(`/producto/1`)
    } else {
      router.push(`/producto/${sig}`)
    }
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

  const options = {
    config: [{
      facebook: {
        socialShareUrl: 'https://peterpeterparker.io'
      }
    }, {
      twitter: {
        socialShareUrl: 'https://peterpeterparker.io'
      }
    }]
  };

  return (
    <Layout>
      <Container className="destacados">
        <Row className="p-0 m-0">
          <Col>
            <h2 className="m-0 p-3 pt-4 w-100 text-center font-bold">Modelo</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <BreadCrumb modelo={entrie.modelo}/>
          </Col>
        </Row>
        <Row className="p-0 m-0">
          <Col md={9} sm={9}>
            <div className="d-flex justify-content-between">
              <h5 className="m-0 p-0 pb-2 tituloprod">{entrie.modelo}</h5>
              <Favoritos />
            </div>
            <ImageGallery items={images} />
            <Row className="mt-3 mb-5">
              <Col>
                <p className="text-left m-0 p-0">
                  <small className="pr-2">Descarga ficha técnica</small>
                  <Link href="/">
                    <img src="/iconos/file-download-solid.svg" alt="" title="" />
                  </Link>
                </p>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <span className="lnr lnr-chevron-left pr-3" onClick={anterior}></span>
                <p className="text-center m-0 p-0">Ver más modelos</p>
                <span className="lnr lnr-chevron-right pl-3" onClick={siguiente}></span>
              </Col>
              <Col>
                <p className="text-right m-0 p-0">
                  <small className="pr-2">Compartir</small>
                  <web-social-share show={true} share={options}>
                    <img src="/iconos/share-alt-solid.svg" alt="" title="" />
                  </web-social-share>
                </p>
              </Col>
            </Row>
            <Row>
              <div className="bannercontenedor producto">
                <div className="bannerx">
                  <Banner
                    icono="/iconos/pin-color.svg"
                    size="40px"
                    titulo="Asistencia vial"
                    boton="Búsqueda Inteligente"
                    linker="/beneficios"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="/iconos/check-color.svg"
                    size="50px"
                    titulo="Inspección completa de sistemas"
                    boton="Búsqueda Inteligente"
                    linker="/beneficios"
                  />
                  <div className="linea"></div>
                  <Banner
                    icono="/iconos/clock-color.svg"
                    size="59px"
                    titulo="Garantía extendida"
                    boton="Búsqueda Inteligente"
                    linker="/beneficios"
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
              distribuidor={entrie.distribuidor}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
