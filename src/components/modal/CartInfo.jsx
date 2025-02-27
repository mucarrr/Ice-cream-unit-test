import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const CartInfo = ({ cart, close }) => {
  const subTotal = cart.reduce((total, item) => total + item.price * item.amount, 0);
  const shipping = subTotal > 50 || subTotal === 0 ? 0 : 5;
  const total = subTotal + shipping;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createOrder());
    toast.success("Order in progress");
    close();
  };

  return (
    <div className="py-5 text-lg">
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Total Price</span>
        <span data-testid="subtotal" className="font-semibold text-gray-700">
          {subTotal}$
        </span>
      </p>

      <p className="flex justify-between py-2">
        <span className="text-gray-500 font-semibold">Delivery</span>
        <span data-testid="shipping" className="font-semibold text-gray-700">
          {subTotal > 50 ? "Free" : `${shipping}$`}
        </span>
      </p>

      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Total</span>
        <span data-testid="total" className="font-semibold text-gray-700 text-2xl">
          {total}₺
        </span>
      </p>

      <button
        disabled={subTotal === 0}
        onClick={handleClick}
        className="bg-red-500 mt-4 w-full p-2 rounded-md text-white hover:bg-red-600 transition disabled:bg-red-300"
      >
        Order
      </button>
    </div>
  );
};

export default CartInfo;