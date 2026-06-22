import { useEffect, useState } from "react";
import { CartContext } from "./CartContext.js";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function increaseQuantity(productId) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function handleAddToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveFromCart(productId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleRemoveFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
