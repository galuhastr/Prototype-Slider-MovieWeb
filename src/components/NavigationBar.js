import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap"

const NavigationBar = () => {
    return (
      <div>
        <Navbar className="navbar" variant="dark">
          <Container>
            <NavbarBrand className="">PROTOTYPE CINEMA CMXI</NavbarBrand>
            <Nav>
             <Nav.Link>New Release</Nav.Link>
             <Nav.Link>Trending</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}

export default NavigationBar