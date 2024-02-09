// CustomInput.js
import React from "react";
import "./styles.css";

const CustomInput = ({ label, onChange, value, placeholder, isSecure = false }) => {
  return (
    <div className="inputContainer">
      <label className="input-box-label">{label}</label>
      <input
        className="inputBox"
        type="text"
        value={value}
        onChange={onChange}
        secureTextEntry={isSecure}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
