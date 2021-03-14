import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Header(){
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src="logo-hyundai.svg" alt="hyndai seminuevos" title="hyundai seminuevos" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Seminuevos</Nav.Link>
          <Nav.Link href="#link">Concesionarios</Nav.Link>
          <NavDropdown title="Hyundai Promise" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Búsqueda Inteligente" className="mr-sm-2" />
          <Button variant="outline-secondary">
            <span className="lnr lnr-magnifier"></span>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}