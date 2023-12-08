import React from "react";
import { PropTypes } from "prop-types";
import "./SelectBox.scss";

const SelectBox = ({ options, status, className, handleSelect }) => {
  return (
    <select
      id="selectbox"
      className={`selectBox ${className}`}
      onChange={handleSelect}
      defaultValue={status}
    >
      {options.map((opt) => {
        return <option value={opt}>{opt}</option>;
      })}
    </select>
  );
};

SelectBox.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
  handleSelect: PropTypes.func,
};

SelectBox.defaultProps = {
  options: [],
  className: "",
  handleSelect: () => null,
};

export default SelectBox;
