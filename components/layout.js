import Head from 'next/head'
import Header from './header'
import Submenu from './submenu'
import Footer from './footer'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HYUNDAI SEMINUEVOS | INNOCEAN MÉXICO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <link
          rel="preload"
          href="/fonts/HyundaiSansHeadOffice-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/HyundaiSansHeadOffice-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/HyundaiSansHeadOffice-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/HyundaiSansHeadOffice-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      {/*<Header />*/}
      <Submenu />

      <main className="contenedor">
        {children}
      </main>

      {/*<Footer />*/}
    </div>
  )
}
