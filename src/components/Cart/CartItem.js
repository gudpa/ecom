import "./styles/CartItem.css";

import deleteIcon from "../../images/delete.png";

export default function CartItem({ item, cartItems, setCartItems }) {
  const incItem = () => {
    cartItems[item.id].quantity++;
    setCartItems({ ...cartItems });
  };
  const decItem = () => {
    cartItems[item.id].quantity--;
    if (cartItems[item.id].quantity === 0) {
      delete cartItems[item.id];
    }
    setCartItems({ ...cartItems });
  };
  const removeItem = () => {
    delete cartItems[item.id];
    setCartItems({ ...cartItems });
  };
  return (
    <div className="product">
      <div className="d-grid top">
        <div className="img-container">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="title-price">
          <div className="title">{item.title}</div>
          <div className="title">${item.price}</div>
        </div>
      </div>
      <hr />
      <div className="d-grid cart-item-btn-container">
        <button className="btn remove-btn" onClick={removeItem}>
          Remove
        </button>
        <div></div>
        <button className="btn dec-btn" onClick={decItem}>
          -
        </button>
        <div>{item.quantity}</div>
        <button className="btn inc-btn" onClick={incItem}>
          +
        </button>
      </div>
    </div>
  );
}
