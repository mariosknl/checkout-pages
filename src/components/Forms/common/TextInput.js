import React from "react";
import { useField } from "formik";

import { red } from "../../../utils";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={red[400]}>{meta.error}</div>
      ) : null}
    </>
  );
};
