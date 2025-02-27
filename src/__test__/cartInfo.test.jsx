import { render, screen } from "@testing-library/react";
import CartInfo from "../components/modal/CartInfo";
import { useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";

// useDispatch mockla
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));
describe("Cartinfo Component", () => {
  const dispatchMock = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("total price and delivery are rendered correctly", () => {
    const cart = [
      { id: 1, name: "Vanilla", price: 5, amount: 2 },
      { id: 2, name: "Chocolate", price: 6, amount: 1 },
    ];
    const close = jest.fn();
    render(<CartInfo cart={cart} close={close} />);
    expect(screen.getByTestId("subtotal")).toHaveTextContent("10$");
    expect(screen.getByTestId("shipping")).toHaveTextContent("5$");
    expect(screen.getByTestId("total")).toHaveTextContent("15$");
  });

  test("order button works", async () => {
    const user = userEvent.setup();

    const cart = [
      { id: 1, name: "Vanilla", price: 5, amount: 2 },
      { id: 2, name: "Chocalate", price: 6, amount: 1 },
    ];

    const close = jest.fn();

    render(<CartInfo cart={cart} close={close} />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(dispatchMock).toHaveBeenCalled();
    expect(close).toHaveBeenCalled();
  });

  test("when no item, order button is inactive", () => {
    const cart = [];

    const close = jest.fn();

    render(<CartInfo cart={cart} close={close} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("if total price is above 50$, delivery is free", () => {
    const cart = [
      { id: 1, name: "Vanilla", price: 5, amount: 8 },
      { id: 2, name: "Chocolate", price: 6, amount: 2 },
    ];

    const close = jest.fn();

    render(<CartInfo cart={cart} close={close} />);
    expect(screen.getByTestId("shipping")).toHaveTextContent("Free");
  });
});