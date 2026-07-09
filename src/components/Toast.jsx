import "../styles/toast.css";

function Toast({ toast, onClose }) {
  if (!toast.visible) {
    return null;
  }

  return (
    <div className={`toast toast-${toast.type}`}>
      <div className="toast-content">
        <strong>{toast.title}</strong>
        <p>{toast.message}</p>
      </div>
      <button onClick={onClose}>x</button>
    </div>
  );
}

export default Toast;
