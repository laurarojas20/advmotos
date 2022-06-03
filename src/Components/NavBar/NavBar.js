import { Navbar } from "react-bootstrap" 
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand> <Link to= {`/`}> ADVMotos </Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to={`../indumentaria`}> Indumentaria </Link></Nav.Link>
      <Nav.Link><Link to={`../performance`}> Performance </Link></Nav.Link>
      <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
        <NavDropdown.Item> <Link to= {`../accesorios/parabrisas`}> Parabrisas </Link> </NavDropdown.Item>
        <NavDropdown.Item> <Link to= {`../accesorios/cubre-puños`}> Cubre puños </Link> </NavDropdown.Item>
        <NavDropdown.Item> <Link to= {`../accesorios/portaequipaje-baul`}> Portaequipajes y baules</Link> </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item> <Link to= {`../accesorios/defensas`}> Defensas </Link> </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      
        <Nav.Link href= "#"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> 
        </Nav.Link>
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar