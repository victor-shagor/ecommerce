import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LinesEllipsis from "react-lines-ellipsis";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/cartContext";

const ProductCard = ({ product }) => {
  const { handleAddToCart, cartItems } = useContext(CartContext)
  const { rating, title, price, category, description, image } = product;
  const cartItem = cartItems.find(item => item.id === product.id)
  const buttonText = cartItem ? `Add to cart(${cartItem?.quantity})`: 'Add to cart'
  return (
        <Card className="product-card" data-testid="product-card">
          <Card.Img variant="top" src={image} height="300" />
          <Card.Body>
            <Card.Title>
              <LinesEllipsis text={title} maxLine="1" ellipsis="..." />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted" data-testid="product-category">
              Category: {category}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Rating: {`${rating.rate}(${rating.count})`}
            </Card.Subtitle>
            <Card.Text>
              <LinesEllipsis text={description} maxLine="3" ellipsis="..." />
            </Card.Text>
            <div className="price-cont">
             <span className="font-weight-bold text-dark price">${price}</span>
             <Button data-testid="add-btn" className="cart-button" onClick={() => handleAddToCart(product)} variant="primary"><FaShoppingCart className="cart-icon"/>{buttonText}</Button> 
            </div>
            
          </Card.Body>
        </Card>
  );
};

export default ProductCard;
