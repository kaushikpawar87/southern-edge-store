import "../styles/toast.css";

function Toast({ toast }) {
  if (!toast.visible) {
    return null;
  }

  return <div className={`toast toast-${toast.type}`}>{toast.message}</div>;
}

export default Toast;
