import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "../../atoms/CloseIcon/CloseIcon";
import Label from "../../atoms/Label/Label";
import AddTaskButtons from "../../molecules/AddTaskButtons/AddTaskButton";
import Status from "../../molecules/Status/Status";
import TaskName from "../../molecules/TaskName/TaskName";

import * as ActionTypes from "../../../Store/ActionTypes";

import { taskStatus } from "../../../Utility/Status";

import "./AddTaskModal.scss";

const AddTaskModal = () => {
  const dispatch = useDispatch();

  const task = useSelector((state) => state.modal.task);

  const [taskName, setTaskName] = useState(task ? task.name : "");
  const [status, setStatus] = useState(task ? task.status : taskStatus[0]);

  const editFlag = useSelector((state) => state.modal.edit);

  const handleClose = () => {
    dispatch({
      type: ActionTypes.CLOSE_MODAL,
      payload: "",
    });
  };

  const handleSubmit = () => {
    if (editFlag) {
      dispatch({
        type: ActionTypes.EDIT_TASK,
        payload: {
          id: task.id,
          name: taskName,
          status: status,
          date: task.date,
        },
      });
    } else {
      const taskId = Math.random() * 100;
      const date = new Date();
      dispatch({
        type: ActionTypes.ADD_TASK,
        payload: {
          id: taskId,
          name: taskName,
          status: status,
          date: date.toUTCString(),
        },
      });
    }
    handleClose();
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
    e.preventDefault();
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    e.preventDefault();
  };

  const handleDisableCondn = () => {
    if (editFlag) {
      return taskName === task.name && status === task.status;
    } else {
      return taskName.length < 1;
    }
  };

  return (
    <div className="addTaskModal">
      <CloseIcon handleClose={handleClose} />
      <div className="backdrop" onClick={handleClose} />
      <div className="task_modal">
        <Label
          value={editFlag ? "Update TODO" : "Add TODO"}
          className={"Add_Todo_Label"}
        />
        <TaskName task={taskName} setChange={handleTaskNameChange} />
        <Status
          taskStatus={taskStatus}
          status={status}
          setSelect={handleStatusChange}
        />
        <AddTaskButtons
          editFlag={editFlag}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          disable={handleDisableCondn()}
        />
      </div>
    </div>
  );
};

export default AddTaskModal;
