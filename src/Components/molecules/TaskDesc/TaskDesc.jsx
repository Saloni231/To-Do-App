import React from "react";
import { PropTypes } from "prop-types";
import Label from "../../atoms/Label/Label";
import "./TaskDesc.scss";

const TaskDesc = ({ task, completed }) => {
  return (
    <div className="task-desc">
      <Label
        value={task.name}
        className={`taskname ${completed ? "completed" : ""}`}
      />
      <Label value={task.date} className={"taskname"} />
    </div>
  );
};

TaskDesc.propTypes = {
  task: PropTypes.object,
  completed: PropTypes.bool,
};

TaskDesc.defaultProps = {
  task: {},
  completed: false,
};

export default TaskDesc;
