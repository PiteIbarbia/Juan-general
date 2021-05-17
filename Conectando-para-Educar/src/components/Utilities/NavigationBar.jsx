import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Nav, Button, FormControl, NavDropdown } from 'react-bootstrap';
import logo from '../../img-jpg/Logo-CONECTANDO-PARA-EDUCAR.jpg';

export default function NavigattionBar(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/SaberMas">Saber más</Nav.Link>
          <NavDropdown title="Proyectos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/SantiagoDelEstero">Santiago del Estero</NavDropdown.Item>
            <NavDropdown.Item href="/BarrioLaCava">Barrio "La Cava"</NavDropdown.Item>
            <NavDropdown.Item href="/RicardoRojas">Ricardo Rojas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Contacto">Contacto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
    </Navbar>
    </div>
  )
}