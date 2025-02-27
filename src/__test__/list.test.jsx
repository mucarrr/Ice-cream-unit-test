import { render, screen, waitFor } from "@testing-library/react";
import List from "../components/list/List";
import api from "../utils/api";
import { mockData } from "../utils/constants";
import Cart from "../components/list/Cart";

jest.mock("../utils/api");
jest.mock("../components/list/Cart");

describe("List components tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  }); // her test oncesinde mocklari temizle yeniden baslat 

  it("loader is rendering", async () => {
    api.get.mockResolvedValueOnce({ data: [] });
    render(<List />);
    screen.getByTestId("listLoader");
    await waitFor(() => {
      expect(screen.queryByTestId("listLoader")).toBeNull();
    });
  });

  it("error component is rendering", async () => {
    const errMsg = "network is timed out";
    api.get.mockRejectedValueOnce(new Error(errMsg));
    render(<List />);
    await waitFor(() => screen.getByTestId("error"));
  });

  it("is reponse is success, cards are rendering", async () => {
    Cart.mockImplementation(({ item }) => <div>{item.name}</div>);
    api.get.mockResolvedValueOnce({ data: mockData });
    render(<List />);
    await waitFor(() => {
      mockData.forEach((item) => {
        screen.getByText(item.name); 
      });
    });
  });
}); // cart icerigi icin ayri test yapacagiz. burada cart basiliyor mu sadece bunu test ettigimiz icin map icinde name olmasi yeterli dedik