import {  fireEvent, render, screen } from "@testing-library/react";
import {  CartContextProvider } from "../context/cartContext";
import CartItems from "../components/CartItem";

jest.mock("axios", () => {
  return {
    __esModule: true
  }});

describe("Cart component", () => {

  it("should render cartitem", async () => {

    render(
      <CartContextProvider>
        <CartItems product={{title:'test title'}} />
      </CartContextProvider>
    );

    expect(screen.getByTestId("cart-item")).toBeInTheDocument();
  });

  it("confirmation modal should show when delete button is clicked", async () => {
    const { findByTestId } = render(
        <CartContextProvider>
        <CartItems product={{title:'test title'}} />
      </CartContextProvider>
    );

    const remove = await findByTestId("remove-btn");
    fireEvent.click(remove);

    expect(screen.getByTestId("confirmation-modal")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const { container } = render(
      <CartContextProvider value={{cartItems:[]}}>
      <CartItems product={{title: 'title'}} />
    </CartContextProvider>
      );;
    expect(container).toMatchSnapshot();
  });
});
