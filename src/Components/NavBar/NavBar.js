import { Navbar } from "react-bootstrap" 
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { Container } from "react-bootstrap"

const NavBar = () => {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> ADVMotos </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"> Pestaña 1 </Nav.Link>
      <Nav.Link href="#pricing"> Pestaña 2 </Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"> Pestaña Drop1 </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"> Pestaña Drop2 </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"> PEstaña Drop3 </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"> Pestaña separada Drop4 </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"> Pestaña derecha </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar