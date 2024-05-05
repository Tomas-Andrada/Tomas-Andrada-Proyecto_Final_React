import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const calculateTotals = () => {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const total = cart.reduce((total, item) => total + (item.quantity * item.precio), 0);
      setTotals({ totalQuantity, total });
    };

    calculateTotals();
  }, [cart]);

  const [totals, setTotals] = useState({
    totalQuantity: 0,
    total: 0
  });

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      const updatedItems = cart.map(i => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity
          };
        }
        return i; // ¡Asegúrate de devolver el elemento original si no cumple la condición!
      });
      setCart(updatedItems);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity: totals.totalQuantity, total: totals.total, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};