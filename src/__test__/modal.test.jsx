import { render, screen } from "@testing-library/react";
import Modal from "../components/modal/Modal";
import { useSelector } from "react-redux";
import CartItem from "../components/modal/CartItem";
import CartInfo from "../components/modal/CartInfo";
import userEvent from "@testing-library/user-event";


jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));//useselector u mock haline getirdim bunu kullanilabilir yaptim. artik kullanmak istedigim yerde useSelector.mockReturnValue() demem yeterli. 

jest.mock("../components/modal/cartItem", () => () => <h1>Cart Item</h1>);
jest.mock("../components/modal/cartInfo", () => () => <h1>Cart Info</h1>);// bu componentlar icerisinde dinamik seyler olabilir. dispatch selcetor navigate gibi. bu yuzden bunlari da mocluyorum ki hata vermesin bu test. su an bunlari testlemiyorum sadece iclerinde h1 varmis gibi davraniyorum

describe("Modal Component", () => {
  const closeMock = jest.fn();

  it("depending on isOpen, modal is rendered", () => {
    useSelector.mockReturnValue({ cart: [] }); //mockladigim useselector ile redux tan datanin bir kopyasini alacagim.{ cart: [] }
    const { rerender } = render(<Modal isOpen={false} close={closeMock} />);
    expect(screen.queryByTestId("modal")).toBeNull();
    rerender(<Modal isOpen={true} close={closeMock} />);
    screen.getByTestId("modal");
  });

  it("when x is clicked, modal is closed", async () => {
    useSelector.mockReturnValue({ cart: [] });//bos yada dolu olmasi onemli degil cartin birsey return etmesi yeterli
    const user = userEvent.setup();
    render(<Modal isOpen={true} close={closeMock} />);
    const closeBtn = screen.getByTestId("close");
    await user.click(closeBtn);
    expect(closeMock).toHaveBeenCalled();
  });

  it("whether basket has something or not, modal gives notifictaion", () => {
    useSelector.mockReturnValue({ cart: [] });//item yok ise uyari mesaji vardir.
    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);
    screen.getByText(/yet/i);
    useSelector.mockReturnValue({ cart: [1, 2, 3, 4] });//icinde ne oldugu kac tane oldugu onemli degil, item olmasi yeterli
    rerender(<Modal isOpen={true} close={closeMock} />);
    expect(screen.queryByText(/yet/i)).toBeNull();//dolu ise uyari mesaji yoktur
  });

  it("if something is in the basket, for each item one cart is rendered", () => {
    useSelector.mockReturnValue({ cart: [1, 2, 3, 4] });
    render(<Modal isOpen={true} close={closeMock} />);
    const items = screen.getAllByRole("heading", { name: "Cart Item" });  //item var mi kontrol ediyorum. icinde h1 yazili olan item var mi diye bakmak yeterli su an icin itemin ici beni ilgilendirmiyor. her item icin bunu sagliyorsa true donmeli test bu yuzden getAllByRole dedim
    expect(items.length).toBe(4);//4 tane item var, diyelim ki 
  });
});