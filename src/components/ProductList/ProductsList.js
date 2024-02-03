import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import Product from "./Product";

import "./styles/ProductsList.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function ProductsList({ products }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [start, setStart] = useState(0);
  const size = 6;
  useEffect(() => {
    setDisplayProducts(
      products.filter((product, i) => i >= start && i < start + size)
    );
  }, [start, products]);
  return (
    <>
      <div className="products-list">
        {displayProducts.map((product) => (
          <Product
            product={product}
            key={product.id}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      {products.length > size && (
        <Pagination
          start={start}
          setStart={setStart}
          total={products.length}
          size={size}
        />
      )}
    </>
  );
}
