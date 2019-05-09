import React, { useState, useRef } from "react";

import "./Input.css";

const Input = ({ label }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue("");
    inputRef.current.focus();
  };

  return (
    <span className="clearable-input__container">
      <label htmlFor={`${label}-input`} className="clearable-input__label">
        {label}
      </label>
      <input
        id={`${label}-input`}
        className="clearable-input__input"
        type="text"
        autoComplete="off"
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
      {value !== "" && (
        <button
          type="button"
          className="clearable-input__clear-button"
          onMouseDown={e => e.preventDefault()}
          onClick={clear}
        >
          X
        </button>
      )}
    </span>
  );
};

export default Input;
