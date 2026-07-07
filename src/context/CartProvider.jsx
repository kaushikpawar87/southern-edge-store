import { useCallback } from "react";
import { CartContext } from "./CartContext.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const increaseQuantity = useCallback(
    (productId) => {
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
    },
    [setCartItems],
  );

  const decreaseQuantity = useCallback(
    (productId) => {
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
    },
    [setCartItems],
  );

  const addToCart = useCallback(
    (product) => {
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
    },
    [setCartItems],
  );

  const removeFromCart = useCallback(
    (productId) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId),
      );
    },
    [setCartItems],
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        subTotal,
        orderTotal,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
