import React from "react";

const TextInput = ({name, onChange, placeholder, value, type = "text"}) => {
  return (
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
