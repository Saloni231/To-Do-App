import React from "react";
import { PropTypes } from "prop-types";
import Button from "../../atoms/Button/Button";
import "./AddTaskButton.scss";

const AddTaskButtons = ({ editFlag, handleSubmit, handleClose, disable }) => {
  return (
    <div className="button_task">
      <Button
        label={editFlag ? "Update Task" : "Add Task"}
        className={disable ? "disable" : "task_button"}
        onClick={handleSubmit}
      />
      <Button
        label={"Cancel"}
        className={"cancel_button"}
        onClick={handleClose}
      />
    </div>
  );
};

AddTaskButtons.propTypes = {
  editFlag: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  disable: PropTypes.bool,
};

AddTaskButtons.defaultProps = {
  editFlag: false,
  handleSubmit: () => null,
  handleClose: () => null,
  disable: false,
};

export default AddTaskButtons;
