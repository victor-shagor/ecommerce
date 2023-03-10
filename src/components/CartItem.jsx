import React, { useContext, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md"
import { CgRemoveR, CgAddR } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import ConfirmationModal from "./ConfirmationModal";
import { CartContext } from "../context/cartContext";

const CartItem = ({ product }) => {
  const { handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveCartItem } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () =>{
    setShowModal(!showModal)
  }
  const { image, title, price, quantity } = product;
  return (
    <>
    <ListGroup className="mb-3" data-testid="cart-item">
        <ListGroup.Item>
      <div className="d-flex align-items-center">
        <img className="p-2" src={image} alt="" height="100" />
        <p>{title}</p>
      </div>
      <p>${price}</p>
      <div className="d-flex justify-content-between">
      <Button data-testid="remove-btn" onClick={toggleModal} className="remove-btn" variant="outline-danger"><MdOutlineDeleteOutline className="align-top" size="20" color="red"/>Remove</Button>
        <div className="d-flex flex-row">
        <CgRemoveR size="25" color="#0d6efd" onClick={()=>handleDecreaseQuantity(product)}/>
          <p>{quantity}</p>
        <CgAddR size="25" color="#0d6efd" onClick={()=>handleIncreaseQuantity(product)}/>
        </div>
      </div>
      </ListGroup.Item>
      </ListGroup>
      <ConfirmationModal handleClose={toggleModal} handleConfirm={() => handleRemoveCartItem(product)} show={showModal} text="Are you sure you want to remove this item?"/>
      </>
  );
};

export default CartItem;
