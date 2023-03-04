const Button = (props) => {
  const disabled = () => {
    if (props.disabled) {
      return true;
    }

    return false;
  };

  return (
    <button
      className={`button ${props.className || ""}`}
      type={props.type || `button`}
      onClick={props.onClick}
      disabled={disabled()}
    >
      {props.children}
    </button>
  );
};

export default Button;
