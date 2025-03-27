import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cardSlice";
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return cartItems.length == 0 ? (
    <div className="m-40  p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 text-lg">
          Looks like you haven't added anything to your cart yet.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md">
            Start Ordering
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-8/12 p-4 mx-auto my-8">
      <div className="font-bold uppercase flex gap-4 items-center text-2xl">
        <h1>Cart</h1>
      </div>
      <div>
        <ItemList items={cartItems} />
      </div>

      <div className="w-4/12 gap-4 flex">
        <button className="w-full p-2 m-2 rounded-md bg-green-50  border-green-700 border-1 hover:bg-green-700 hover:cursor-pointer hover:text-white">
          Proceed
        </button>
        <button
          className="w-full p-2 m-2 rounded-md bg-red-50 border-red-700 border-1 hover:bg-red-700 hover:cursor-pointer hover:text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
