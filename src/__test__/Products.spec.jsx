import {  fireEvent, render, screen } from "@testing-library/react";
import {  CartContext, CartContextProvider } from "../context/cartContext";
import ProductCard from "../components/ProductCard";

jest.mock("axios", () => {
  return {
    __esModule: true
  }});

describe("Product component", () => {

  it("should render product card", async () => {

    render(
      <CartContextProvider>
        <ProductCard product={{title:'test title', category: "test category", rating:{}}} />
      </CartContextProvider>
    );

    expect(screen.getByTestId("product-card")).toBeInTheDocument();
    expect(screen.getByTestId("product-category").innerHTML).toBe('Category: test category');
  });

  it("should trigger add to cart function", async () => {
    const handleAddToCart = jest.fn()
    const cartItems = []
    const { findByTestId } = render(
        <CartContext.Provider value={{handleAddToCart, cartItems}}>
        <ProductCard product={{title:'test title', rating:{}}} />
      </CartContext.Provider>
    );

    const add = await findByTestId("add-btn");
    fireEvent.click(add);

    expect(handleAddToCart).toHaveBeenCalled()
  });

  it("renders correctly", () => {
    const { container } = render(
      <CartContextProvider >
      <ProductCard product={{title:'test title', rating:{}}} />
    </CartContextProvider>
      );;
    expect(container).toMatchSnapshot();
  });
});
