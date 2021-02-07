import React from "react";
import { useField } from "formik";

const SelectCountry = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label id="countryLabel" htmlFor={props.id || props.name}>
        {label}
        <select {...field} {...props} className="drowdown" />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export { SelectCountry };
