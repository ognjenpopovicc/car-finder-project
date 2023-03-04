const InputBox = (props) => {
  return (
    <div className={`input-box ${props.className || ""}`}>{props.children}</div>
  );
};

export default InputBox;
