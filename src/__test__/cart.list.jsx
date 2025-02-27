import { render, screen } from "@testing-library/react";
import Cart from "../components/list/Cart";
import { useDispatch } from "react-redux";
import { mockData } from "../utils/constants";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Cart tests", () => {
  const dispatchMock = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("İtem details are rendered correctly", () => {
    render(<Cart item={mockData[0]} />);
    screen.getByRole("heading", { name: "Golden Honey Almond" });
    screen.getByText("₺25 / ball");
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/ice-1.png");
  });
  it("invisibility of button changes according to click situation", async () => {
    userEvent.setup();
    render(<Cart item={mockData[0]} />);
    const basketBtn = screen.getByRole("button", { name: /cart/i });
    expect(basketBtn).toHaveClass("invisible");
    const cornetBtn = screen.getByRole("button", { name: /cornet/i });
    await userEvent.click(cornetBtn);
    expect(basketBtn).not.toHaveClass("invisible");
    await userEvent.click(cornetBtn);
    expect(basketBtn).toHaveClass("invisible");
  });

  it("dispatch action is rendered", () => {});
});