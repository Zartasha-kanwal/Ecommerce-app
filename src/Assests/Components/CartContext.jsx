import { createContext, useEffect, useState, useContext } from "react";

/* 1. Create the Context object */
export const CartContext = createContext();

/* 2. Provider component that wraps the whole app */
export default function CartProvider({ children }) {
  // ——— State ———
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  /* keep localStorage in sync */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ——— Actions ———
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  /* NEW: remove an item entirely */
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  /* NEW: increase quantity by 1 */
  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  /* NEW: decrease quantity but never below 1 */
  const decreaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );

  /* keep updateQty for manual input fields */
  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Number(qty) } : item
      )
    );

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); 
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        updateQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
