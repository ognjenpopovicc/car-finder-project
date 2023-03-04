import React from "react";
// import { useState } from "react";

const SelectInput = React.forwardRef((props, ref) => {
  /*
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);

    if (props.onChange) {
      props.onChange();
    }
  };
  */

  const disabled = () => {
    if (props.disabled) {
      return true;
    }

    return false;
  };

  const required = () => {
    if (props.required) {
      return true;
    }

    return false;
  };

  return (
    <select
      className={`input ${props.className || ""}`}
      name={props.name}
      id={props.id}
      ref={ref}
      onChange={props.onChange}
      disabled={disabled()}
      required={required()}
      defaultValue={props.defaultValue || ""}
    >
      <option disabled={true} hidden={true} value=""></option>
      {props.values.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
  );
});

export default SelectInput;
