import {  fireEvent, render, screen } from "@testing-library/react";
import {  CartContextProvider } from "../context/cartContext";
import ConfirmationModal from "../components/ConfirmationModal";

jest.mock("axios", () => {
  return {
    __esModule: true
  }});

describe("Modal component", () => {

  it("should render confirmation modal", async () => {
    const handleClose = jest.fn()
    render(
      <CartContextProvider>
        <ConfirmationModal text='test body' show={true}  handleClose={handleClose} />
      </CartContextProvider>
    );

    expect(screen.getByTestId("confirmation-modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal-body").innerHTML).toBe('test body');
  });

  it("confirmation modal should not render if show is false", async () => {
     render(
        <CartContextProvider>
        <ConfirmationModal show={false} />
      </CartContextProvider>
    );

    expect(()=>screen.getByTestId("confirmation-modal")).toThrow();
  });

  it(" handleclose should be called", async () => {
    const handleClose = jest.fn()
    const { findByTestId } = render(
        <CartContextProvider>
        <ConfirmationModal text='test body' show={true}  handleClose={handleClose} />
      </CartContextProvider>
    );

    const close = await findByTestId("handle-close");
    fireEvent.click(close);

    expect(handleClose).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const { container } = render(
      <CartContextProvider value={{cartItems:[]}}>
      <ConfirmationModal show={true} />
    </CartContextProvider>
      );;
    expect(container).toMatchSnapshot();
  });
});
