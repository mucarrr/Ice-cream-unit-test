import { render, screen } from "@testing-library/react";
import Selector from "../components/list/Selector";
import userEvent from "@testing-library/user-event";

const mockFn = jest.fn();

describe("Selector component", () => {
  it("when cornet selected, bg-color changes", () => {
    render(<Selector selectedType="cornet" handleType={() => {}} />);
    //selector orjinalde hangi proplara sahipse onlari burda almaliyim
    //selector cornet type i aldiginda dogru siniflari calistiriyor mu
    const cornetBtn = screen.getByRole("button", { name: /cornet/i });
    expect(cornetBtn).toHaveClass("bg-white text-black");
     //selector cup type i aldiginda dogru siniflari calistiriyor mu
    const cupBtn = screen.getByRole("button", { name: /cup/i });
    expect(cupBtn).not.toHaveClass("bg-white text-black");
  });

  it("when cup selected, bg-color changes", () => {
    render(<Selector selectedType="cup" handleType={() => {}} />);
    const cornetBtn = screen.getByRole("button", { name: /cornet/i });
    expect(cornetBtn).not.toHaveClass("bg-white text-black");
    const cupBtn = screen.getByRole("button", { name: /cup/i });
    expect(cupBtn).toHaveClass("bg-white text-black");
  });

  it("when buttons are clicked, function works correctly according to their types", async () => {// tiklama sonucu dogru parametreleri aliyor mu
    const user = userEvent.setup();

    render(<Selector selectedType={null} handleType={mockFn} />);
    const cupBtn = screen.getByRole("button", { name: /cup/i });
    const cornetBtn = screen.getByRole("button", { name: /cornet/i });
    await user.click(cupBtn);
    expect(mockFn).toHaveBeenCalledWith("cup");
    await user.click(cornetBtn);
    expect(mockFn).toHaveBeenCalledWith("cornet");
  });
});