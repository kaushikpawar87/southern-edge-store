import { useState } from "react";
import ToastContext from "./ToastContext";
import Toast from "../components/Toast";

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    title: "",
    message: "",
    type: "success",
    visible: false,
  });

  function showToast({ title, message, type = "success", duration = 3000 }) {
    setToast({
      title,
      message,
      type,
      visible: true,
    });

    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, visible: false }));
    }, duration);
  }

  function hideToast() {
    setToast((prevToast) => ({ ...prevToast, visible: false }));
  }

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Toast toast={toast} onClose={hideToast} />
    </ToastContext.Provider>
  );
}
