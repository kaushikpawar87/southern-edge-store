function Toast({ toast }) {
  if (!toast.visble) {
    return null;
  }

  return <div className={`toast toast-${toast.type}`}>{toast.message}</div>;
}

export default Toast;
