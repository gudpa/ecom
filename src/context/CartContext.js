import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
