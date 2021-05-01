import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Header() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Row className="usuario">
      <Col md={3} className="d-flex justify-content-center align-items-center">
        <Link href="/admin/dashboard">
          <img src="/logo-hyundai-blanco.svg" alt="hyndai seminuevos" title="hyundai seminuevos" style={{
            width: '150px'
          }} />
        </Link>
      </Col>
      <Col className="d-flex justify-content-end align-items-center headdash">
        <ul>
          <li>
            <p><b>Bienvenido: </b> Gerardo Lopez Monreal</p>
          </li>
          <li>
            <p><b>Administrador</b></p>
          </li>
          <li className="menudash">
            <Nav activeKey="1" onSelect={handleSelect}>
              <NavDropdown title="Menú" id="nav-dropdown">
                <NavDropdown.Item href="/admin" className="d-flex">
                  <img src="/iconos/home-solid.svg" className="pr-2" alt="" title="" />
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin" className="d-flex">
                  <img src="/iconos/tasks-solid.svg" className="pr-2" alt="" title="" />
                  Administrador
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin" className="d-flex">
                  <img src="/iconos/car-solid.svg" className="pr-2" alt="" title="" />
                  Vehículos
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                  <img src="/iconos/check-circle-regular.svg" className="pr-2" alt="" title="" />
                  Validación
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </li>
          <li>
            <Link href="/admin">
              <p className="btn-salir"><b>Salir</b></p>
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  )
}