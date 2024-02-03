import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductsList from "./components/ProductList/ProductsList";
import Cart from "./components/Cart/Cart";

import "./App.css";
import CartContextProvider from "./context/CartContext";
import Loader from "./components/Loader";
import My404Component from "./components/My404Component";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && !error && (
        <CartContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<ProductsList products={products} />} />
              <Route path="*" element={<My404Component />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      )}
    </>
  );
}

export default App;
