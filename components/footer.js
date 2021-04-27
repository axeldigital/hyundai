import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
  return (
    <div>
      <footer className="elfooter">
        <div>
          <h4>Modelos</h4>
          <ul>
            <li><p>Todos los Vehículos</p></li>
            <li><p>Autos</p></li>
            <li><p>SUVs</p></li>
          </ul>
        </div>
        <div>
          <h4>Compra</h4>
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
          <h4>Servicio</h4>
          <ul>
            <li><p>Agendar cita</p></li>
            <li><p>Garantía</p></li>
            <li><p>Protección en llantas</p></li>
            <li><p>Asistencia en el camino</p></li>
          </ul>
        </div>
        <div>
          <h4>Nosotros</h4>
          <ul>
            <li><p>Agendar cita</p></li>
            <li><p>Garantía</p></li>
            <li><p>Protección en llantas</p></li>
            <li><p>Asistencia en el camino</p></li>
          </ul>
        </div>
        <div>
          <h4>Hyundai Live</h4>
          <ul>
            <li><p>Agendar cita</p></li>
            <li><p>Garantía</p></li>
            <li><p>Protección en llantas</p></li>
            <li><p>Asistencia en el camino</p></li>
          </ul>
        </div>
      </footer>
      <div className="redes">
        <ul>
          <li>
            <Link href="/">
              wefwefwefwe
            </Link>
          </li>
        </ul>
      </div>
      <div className="legales">
        <ul>
          <li>
            <Link href="">
              Mapa de sitio
            </Link>
          </li>
          <li>
            <Link href="">
              Aviso Legal
            </Link>
          </li>
          <li>
            <Link href="">
              Términos de Uso
            </Link>
          </li>
          <li>
            <Link href="">
              Privacidad
            </Link>
          </li>
          <li>
            <Link href="">
              Política de Cookies
            </Link>
          </li>
        </ul>
      </div>
      <div className="terminos">
        <p>Hyundai es una marca registrada de Hyundai Motor Company. Todos los derechos reservados, ©2021 Hyundai Motor México.</p>
      </div>
    </div>
  )
}