import React from "react";
import { useField } from "formik";

export const TextInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={className || ""}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
