import "../styles/toast.css";

function Toast({ toast, onClose }) {
  if (!toast.visible) {
    return null;
  }

  return (
    <div className={`toast toast-${toast.type}`}>
      <div className="toast-icon">✅</div>
      <div className="toast-body">
        <h4>{toast.title}</h4>
        <p>{toast.message}</p>
      </div>
      <button className="toast-close" onClick={onClose}>
        x
      </button>
    </div>
  );
}

export default Toast;
