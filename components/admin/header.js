import { useEffect, useState } from 'react'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  const [usuario, setUsuario] = useState({})
  const [submenux, setSubmenux] = useState(false)
  useEffect(() => {
    const id = sessionStorage.getItem('id');
    const nombre = sessionStorage.getItem('nombre');
    const email = sessionStorage.getItem('email');
    setUsuario({ id, nombre, email })
  }, [usuario])
  const ensenarSubmenu = () => {
    setSubmenux(!submenux)
  }
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
            <p><b>Bienvenido: </b>{usuario.email} ({usuario.id})</p>
          </li>
          <li>
            <p><b>Administrador</b></p>
          </li>
          <li className="menudash">
            <Nav activeKey="1">
              <NavDropdown title="Menú" id="nav-dropdown">
                <NavDropdown.Item href="/admin/dashboard" className="d-flex">
                  <img src="/iconos/home-solid.svg" className="pr-2" alt="" title="" />
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-submenu">
                  <img src="/iconos/tasks-solid.svg" className="pr-2" alt="" title="" />
                  Administración
                  <div className={`subermenu ${submenux}`}>
                    <ul>
                      <li>
                        <Link href="/admin/distribuidores">
                          Distribuidores
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/usuarios">
                          Usuarios
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/roles">
                          Roles
                        </Link>
                      </li>
                    </ul>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/vehiculosgeneral" className="d-flex">
                  <img src="/iconos/car-solid.svg" className="pr-2" alt="" title="" />
                  Vehículos
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/validacion" className="d-flex">
                  <img src="/iconos/check-circle-regular.svg" className="pr-2" alt="" title="" />
                  Validación
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/leads" className="d-flex">
                  <img src="/iconos/check-circle-regular.svg" className="pr-2" alt="" title="" />
                  Leads
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </li>
          <li>
            <Link href="/admin">
              <p className="btn-salir"><b>Salir</b></p>
            </Link>
          </li>
          <li>
            
          </li>
        </ul>
      </Col>
    </Row>
  )
}