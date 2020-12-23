import React from "react";

const Input = ({ id, label, name, value, type }) => {
  return (
    <form>
      <input type={type} id={id} name={name} value={value} />
      <label htmlFor={name}>{label}</label>
      <br />
    </form>
  );
};

export { Input };
