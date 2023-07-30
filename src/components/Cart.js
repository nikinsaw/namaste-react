import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="w-2/5 mx-auto bg-white">
      <div className="p-4">Cart</div>
      <button className="px-4 py-3 bg-black text-white rounded-lg"
        onClick={handleClearCart}>Clear Cart</button>
      <ItemList items={cartItems} />
      {cartItems.length === 0 && <h1 className="py-4">Cart is empty add items to the cart!</h1>}
    </div>
  )
}

export default Cart;