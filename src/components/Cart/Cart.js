import CartItem from "./CartItem";
import "./styles/Cart.css";
import emptyCart from "../../images/empty-cart.jpg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const items = Object.values(cartItems);
  return (
    <>
      {items.length > 0 ? (
        <div className="cart-items-list products-list">
          {items.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <img src={emptyCart} alt="Cart is empty" />
        </div>
      )}
    </>
  );
}
