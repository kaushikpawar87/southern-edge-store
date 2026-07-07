import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./styles/global.css";
import { CartProvider } from "./context/CartProvider.jsx";
import ProductProvider from "./context/ProductsProvider.jsx";
import { WishlistProvider } from "./context/WishListProvider.jsx";
import { ToastProvider } from "./context/ToastProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <WishlistProvider>
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
        </WishlistProvider>
      </ToastProvider>
    </BrowserRouter>
    ,
  </StrictMode>,
);
