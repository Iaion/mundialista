import React from 'react';
import "../estilos/Nav.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavMnd() {
  return (
    <Navbar id="principal" expand="lg"  >
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbar-toggler" />
        <Navbar.Collapse id="navbar-toggler">
          <Nav className="flex-column">           
            <Nav.Link className="vertical-text mx-auto">
             <Link to="/crew" style={{ textDecoration: 'none' }}>
              Crew
              </Link>
            </Nav.Link>
            <Nav.Link className="vertical-text mx-auto">
              <Link to="/videos" style={{ textDecoration: 'none' }}>
              Videos
              </Link>
            </Nav.Link>
            <Nav.Link className="vertical-text mx-auto">
              <Link to="/discos" style={{  textDecoration: 'none' }}>                
              Discos
              </Link>
            </Nav.Link>
            <Nav.Link className="vertical-text mx-auto">
              <Link to="/Cypher" style={{  textDecoration: 'none'}}>                
              Cypher
              </Link>
            </Nav.Link>
            <Nav.Link className="vertical-text mx-auto">
              <Link to="/Eventos" style={{  textDecoration: 'none'}}>                
              Eventos
              </Link>
            </Nav.Link>
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMnd;
