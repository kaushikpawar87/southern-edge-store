function Button(type = "button", children, onClick) {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
