import React from "react";
import { PropTypes } from "prop-types";
import "./Button.scss";

const Button = ({ label, className, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  className: "",
  onClick: () => null,
};

export default Button;
