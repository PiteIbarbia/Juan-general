import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap';
import logo from '../img-jpg/Logo-CONECTANDO-PARA-EDUCAR.jpg';

export default function NavigattionBar(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Saber más</Nav.Link>
          <Nav.Link href="#features">Proyectos</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
    </Navbar>
    </div>
  )
}