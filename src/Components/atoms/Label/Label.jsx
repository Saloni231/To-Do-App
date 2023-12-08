import React from "react";
import { PropTypes } from "prop-types";
import "./Label.scss";

const Label = ({ value, className }) => {
  return <label className={`label ${className}`}>{value}</label>;
};

Label.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  value: "",
  className: "",
};

export default Label;
