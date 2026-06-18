function FormInput({ type = "text", placeholder, value, name, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default FormInput;
