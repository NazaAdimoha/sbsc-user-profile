import React from "react";
import './AuthInput.css';

const AuthInput = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <div style={{marginBottom: "0.4rem", width: "100%"}}>
      <label>{label}</label>
      <input className="auth--input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthInput;
