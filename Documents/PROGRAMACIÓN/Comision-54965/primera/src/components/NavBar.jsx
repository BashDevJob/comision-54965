import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Tienda Fung</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <link to='/'>Tienda</link>
              </Nav.Link>
            <Nav.Link href="#link">
              <link to='/'>informacion de Cultivo</link>
            </Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <link to='/category/miselio'>Miselio</link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <link to='/category/kits'>kit de cultivo</link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <link to='/category/sustrato'>Sustratos</link>
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <link to='/category/materialEsteril'>Material esterilizado</link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;