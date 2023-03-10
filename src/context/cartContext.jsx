import { createContext, useMemo, useState } from "react";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "../utils/products";

export const CartContext = createContext(null);

const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));

const setCartItemsToStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(cartItemsFromStorage || []);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (product) => {
    const productExist = cartItems.find((el) => el.id === product.id);
    if (productExist) {
      const updatedCartProduct = increaseCartItemQuantity(product, cartItems);
      setCartItems(updatedCartProduct);
      setCartItemsToStorage(updatedCartProduct);
    } else {
      setCartItems([{ ...product, quantity: 1 }, ...cartItems]);
      setCartItemsToStorage([{ ...product, quantity: 1 }, ...cartItems]);
    }
    setShowCart(true);
  };

  const handleIncreaseQuantity = (product) => {
    const updatedCartProduct = increaseCartItemQuantity(product, cartItems);
    setCartItems(updatedCartProduct);
    setCartItemsToStorage(updatedCartProduct);
  };

  const handleDecreaseQuantity = (product) => {
    const updatedCartProduct = decreaseCartItemQuantity(product, cartItems);
    setCartItems(updatedCartProduct);
    setCartItemsToStorage(updatedCartProduct);
  };

  const handleRemoveCartItem = (product) => {
    const updatedCartProduct = removeCartItem(product, cartItems);
    setCartItems(updatedCartProduct);
    setCartItemsToStorage(updatedCartProduct);
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const cartPriceTotal = useMemo(() =>{
    const total = cartItems.reduce((acc, el)=> acc+(el.quantity*el.price),0).toFixed(2)
    let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
  });
    return USDollar.format(total)
  },[cartItems] )

  const contextValue = {
    cartItems,
    handleAddToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveCartItem,
    toggleCart,
    showCart,
    handleClearCart,
    cartPriceTotal
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
