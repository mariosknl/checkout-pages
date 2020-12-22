import React from "react";

const Input = ({ id, label, name, value }) => {
  return (
    <form>
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={name}>{label}</label>
      <br />
    </form>
  );
};

export { Input };
