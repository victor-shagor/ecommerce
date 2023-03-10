import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../context/cartContext';

const NavBar = ({toggleCart}) => {

  const { cartItems } = useContext(CartContext)

    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav className='cursor-pointer' onClick={toggleCart}><FaShoppingCart color='white' size='30'/><Badge bg="primary">{cartItems.length||0}</Badge></Nav>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;