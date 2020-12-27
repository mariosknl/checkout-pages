import React from "react";
import { useField } from "formik";

export const TextInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  console.log(props);

  return (
    <div className={className || ""}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error && "inputError"}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
