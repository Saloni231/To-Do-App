import React from "react";
import { PropTypes } from "prop-types";
import "./Header.scss";

const Header = ({ title }) => {
  return <div className="header_wrapper">{title}</div>;
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "",
};

export default Header;
