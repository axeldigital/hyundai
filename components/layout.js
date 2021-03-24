import Head from 'next/head'
import Header from './header'
import styles from '../styles/Home.module.css'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HYUNDAI SEMINUEVOS | INNOCEAN MÉXICO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansText-Regular.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansText-Medium.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansText-Bold.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansText-Italic.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansText-MediumItalic.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansText-BoldItalic.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansHead-Light.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansHead-Regular.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansHead-Medium.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="http://www.hyundai.com.mx/etc.clientlibs/hyundai/common/clientlibs/clientlib-dependencies/resources/fonts/HyundaiSansHead-Bold.woff2" as="font" type="font/woff2" crossorigin/>
      </Head>


      <main className="contenedor">
        {children}
      </main>

      <footer className="elfooter d-none">
        <div>
          <h2>SEMINUEVOS HYUNDAI</h2>
          <hr/>
        </div>
        <div>
          <h4>MODELOS</h4>
          <ul>
            <li><p>Todos los Vehículos</p></li>
            <li><p>Autos</p></li>
            <li><p>SUVs</p></li>
          </ul>
        </div>
        <div>
          <h4>COMPRA</h4>
          <ul>
            <li><p>Distribuidores</p></li>
            <li><p>Configurador</p></li>
            <li><p>Promociones</p></li>
            <li><p>Solicitar cotización</p></li>
            <li><p>Prueba de manejo</p></li>
            <li><p>Financiamientos</p></li>
            <li><p>Seguros</p></li>
          </ul>
        </div>
        <div>
          <h4>SERVICIO</h4>
          <ul>
            <li><p>Agendar cita</p></li>
            <li><p>Garantía</p></li>
            <li><p>Protección en llantas</p></li>
            <li><p>Asistencia en el camino</p></li>
          </ul>
        </div>
        <div>
          <h4>NOSOTROS</h4>
          <ul>
            <li><p>Agendar cita</p></li>
            <li><p>Garantía</p></li>
            <li><p>Protección en llantas</p></li>
            <li><p>Asistencia en el camino</p></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
