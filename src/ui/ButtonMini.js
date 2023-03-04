const ButtonMini = (props) => {
  return (
    <button
      className={`button-mini ${props.className || ""}`}
      type={props.type || `button`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonMini;
