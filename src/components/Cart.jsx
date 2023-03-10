import React, { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "react-bootstrap/Button";
import ConfirmationModal from './ConfirmationModal';
import { CartContext } from '../context/cartContext';
import CartItem from './CartItem';


const Cart = ({show, handleClose}) => {
  const { cartItems, handleClearCart, cartPriceTotal } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () =>{
    setShowModal(!showModal)
  }
  return (
    <>
      <Offcanvas data-testid="sidebar" show={show} onHide={handleClose} className="p-3 overflow-auto">
      <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cartItems.map(product =>(
          <CartItem product={product} key={product.id}/>
        ))}
      {cartItems.length > 0 &&<p>Total: {cartPriceTotal}</p>}
      {cartItems.length > 0 && <Button className='mt-5' onClick={toggleModal} >Clear Cart</Button>}
      </Offcanvas.Body>
      </Offcanvas>
      <ConfirmationModal handleClose={toggleModal} handleConfirm={handleClearCart} show={showModal} text="Are you sure you want to clear all the items in your cart?"/>
    </>
  );
}

export default Cart