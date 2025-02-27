import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "../components/modal/CartItem";
import AmountPicker from "../components/modal/amountPicker";

// AmountPicker bileşenini mock'lıyoruz
jest.mock("../components/modal/amountPicker", () => {
  return function DummyAmountPicker(props) {
    return <div data-testid="amount-picker-mock">{JSON.stringify(props)}</div>;
  };
});

describe("CartItem", () => {
  const itemCup = {
    image: "https://example.com/coffee.jpg",
    name: "Coffee",
    type: "cup",
    price: 10,
    amount: 2,
  };

  const itemCornet = {
    image: "https://example.com/tea.jpg",
    name: "Tea",
    type: "cornet",
    price: 15,
    amount: 3,
  };

  test('item.type "cup" olduğunda doğru render ediliyor', () => {
    render(<CartItem item={itemCup} />);

    // Resmin doğru src ile render edildiğini kontrol ediyoruz
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", itemCup.image);

    // Ürün adının h1 etiketi içinde render edildiğini kontrol ediyoruz
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(itemCup.name);

    // item.type "cup" olduğunda "cup" yazısı görüntülenmeli
    expect(screen.getByText("cup")).toBeInTheDocument();

    // Fiyatın (price * amount) doğru hesaplanarak render edildiğini kontrol ediyoruz
    const totalPrice = itemCup.price * itemCup.amount;
    expect(screen.getByText(`${totalPrice}$`)).toBeInTheDocument(); // $ sembolü ile düzeltildi

    // AmountPicker bileşeninin mock versiyonunun render edildiğini kontrol ediyoruz
    const amountPickerMock = screen.getByTestId("amount-picker-mock");
    expect(amountPickerMock).toBeInTheDocument();
    expect(amountPickerMock).toHaveTextContent(`"amount":${itemCup.amount}`);
  });

  test('item.type "cornet" olduğunda doğru render ediliyor', () => {
    render(<CartItem item={itemCornet} />);

    // Resmin doğru src ile render edildiğini kontrol ediyoruz
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", itemCornet.image);

    // Ürün adının h1 etiketi içinde render edildiğini kontrol ediyoruz
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(itemCornet.name);

    // item.type "cornet" olduğunda "cornet" yazısı görüntülenmeli
    expect(screen.getByText("cornet")).toBeInTheDocument();

    // Fiyatın (price * amount) doğru hesaplanarak render edildiğini kontrol ediyoruz
    const totalPrice = itemCornet.price * itemCornet.amount;
    expect(screen.getByText(`${totalPrice}$`)).toBeInTheDocument(); // $ sembolü ile düzeltildi

    // AmountPicker bileşeninin mock versiyonunun render edildiğini kontrol ediyoruz
    const amountPickerMock = screen.getByTestId("amount-picker-mock");
    expect(amountPickerMock).toBeInTheDocument();
    expect(amountPickerMock).toHaveTextContent(`"amount":${itemCornet.amount}`);
  });
});