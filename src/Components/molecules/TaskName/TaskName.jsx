import React from "react";
import { PropTypes } from "prop-types";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
import "./TaskName.scss";

const TaskName = ({ task, setChange }) => {
  return (
    <div className="task_name">
      <Label value={"Title : "} className={"title"} />
      <Input type={"text"} value={task} handleChange={setChange} />
    </div>
  );
};

TaskName.propTypes = {
  task: PropTypes.object,
  setChange: PropTypes.func,
};

TaskName.defaultProps = {
  task: {},
  setChange: () => {},
};

export default TaskName;
