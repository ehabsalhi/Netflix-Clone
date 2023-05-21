import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Navibar() {
  return (
     <Navbar bg="light" expand="lg">
     <Container>
       {/* <Navbar.Brand href="/">NETFLIX</Navbar.Brand> */}
       <Link to="/" className="navbar-brand">NETFLIX</Link>

       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
         <Link to="/" className="nav-link">Home</Link>
         <Link to="/favorite" className="nav-link">Favorite</Link>
           {/* <Nav.Link href="/favorite">Favorite</Nav.Link> */}
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  )
}
