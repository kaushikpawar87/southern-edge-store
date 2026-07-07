import { useState } from "react";
import ToastContext from "./ToastContext";
import Toast from "../components/Toast";

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    message: "",
    type: "success",
    visible: false,
  });

  function showToast(message, type = "success") {
    console.log("showToast called:", message);
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
      {children}
      <Toast toast={toast} />
    </ToastContext.Provider>
  );
}
