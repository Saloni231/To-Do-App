import React from "react";
import { PropTypes } from "prop-types";
import Label from "../../atoms/Label/Label";
import SelectBox from "../SelectBox/SelectBox";
import "./Status.scss";

const Status = ({ taskStatus, status, setSelect }) => {
  return (
    <div className="status">
      <Label value={"Status : "} className={"title"} />
      <SelectBox
        options={taskStatus}
        status={status}
        className={"statusBox"}
        handleSelect={setSelect}
      />
    </div>
  );
};

Status.propTypes = {
  taskStatus: PropTypes.string,
  status: PropTypes.string,
  setSelect: PropTypes.func,
};

Status.defaultProps = {
  taskStatus: "",
  status: "",
  setSelect: () => {},
};

export default Status;
