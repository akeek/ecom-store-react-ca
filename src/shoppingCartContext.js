import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();
export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const discardFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, clearCart, discardFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
