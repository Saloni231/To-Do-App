import React from "react";
import { PropTypes } from "prop-types";
import "./Input.scss";

const Input = ({ type, value, handleChange }) => {
  return (
    <input
      className="input_field"
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  value: "",
  handleChange: () => null,
};

export default Input;
