import "./styles/Product.css";

export default function Product({ product, cartItems, setCartItems }) {
  const addToCart = () => {
    setCartItems({ ...cartItems, [product.id]: { ...product, quantity: 1 } });
  };
  const removeFromCart = () => {
    delete cartItems[product.id];
    setCartItems({ ...cartItems });
  };
  return (
    <div className="product">
      <div className="d-grid top">
        <div className="img-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="title-price">
          <div className="title">{product.title}</div>
          <div className="title">${product.price}</div>
        </div>
      </div>
      <hr />
      <div className="d-grid bottom">
        <div className="description">{product.description}</div>
        {cartItems[product.id] ? (
          <button className="btn add-to-cart" onClick={removeFromCart}>
            Remove
          </button>
        ) : (
          <button className="btn add-to-cart" onClick={addToCart}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
