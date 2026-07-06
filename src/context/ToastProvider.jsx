import { Children, useState } from "react";
import ToastContext from "./ToastContext";
import Toast from "../components/Toast";

export function ToastProvider() {
  const [toast, setToast] = useState({
    message: "",
    type: "success",
    visible: false,
  });

  function showToast(message, type = "success") {
    setToast({
      message,
      type,
      visible: true,
    });

    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, visible: false }));
    }, 3000);
  }
  return (
    <ToastContext.Provider value={{ showToast }}>
      {Children}
      <Toast toast={toast} />
    </ToastContext.Provider>
  );
}
