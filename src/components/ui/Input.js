import React from "react";

const Input = ({ type, value, id, onChange, onBlur }) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
);

export default Input;
