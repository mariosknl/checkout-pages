import React from "react";

import { InputStyles } from "./InputStyles";

const FormField = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label> <br />
      <InputStyles id={name} name={name} {...rest} />
    </div>
  );
};

export default FormField;
