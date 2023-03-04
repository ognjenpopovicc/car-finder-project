const Label = (props) => {
  return (
    <label className={`label ${props.className || ""}`} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default Label;
