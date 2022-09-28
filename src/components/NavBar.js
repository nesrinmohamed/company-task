import React from 'react'
import { NavLink  } from 'react-router-dom'
import './css/Navbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
function NavBar() {

  return (

    <Navbar bg="dark" variant='dark' expand="lg">
    <Container>
      <Navbar.Brand to="/">Shopping Cart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/addproduct">Add Product</NavLink>
        </Nav>
       <div className="btns my-4">
  <NavLink to='/login'>Login</NavLink> 
  <NavLink to='/signup'>Signup</NavLink> 
    
   </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default NavBar
