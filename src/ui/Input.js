import React from "react";

const Input = React.forwardRef((props, ref) => {
  const required = () => {
    if (props.required) {
      return true;
    }

    return false;
  };

  const disabled = () => {
    if (props.disabled) {
      return true;
    }

    return false;
  };

  return (
    <input
      name={props.name}
      className={`input ${props.className || ""}`}
      type={props.type || `text`}
      id={props.id}
      defaultValue={props.defaultValue}
      required={required()}
      disabled={disabled()}
      ref={ref}
      min={props.min}
      onChange={props.onChange}
      value={props.value}
    >
      {props.children}
    </input>
  );
});

export default Input;
