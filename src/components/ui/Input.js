import React from "react";
import { InputStyles } from "./InputStyles";

const Input = ({ type, value, id, onChange, onBlur }) => (
  <InputStyles
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
);

export default Input;
