import "../styles/toast.css";

function Toast({ toast }) {
  if (!toast.visible) {
    return null;
  }

  return (
    <div className={`toast toast-${toast.type}`}>
      <div className="toast-content">
        <strong>{toast.title}</strong>
        <p>{toast.message}</p>
      </div>
      <button onClick={onclose}>x</button>
    </div>
  );
}

export default Toast;
