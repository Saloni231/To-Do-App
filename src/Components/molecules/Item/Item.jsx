import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { PropTypes } from "prop-types";
import IconsPanel from "../IconsPanel/IconsPanel";
import TaskDesc from "../TaskDesc/TaskDesc";
import "./Item.scss";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../../../Store/ActionTypes";

const Item = ({ task }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(task.status === "Completed");

  const handleChange = () => {
    setChecked(!checked);
    if (checked) {
      dispatch({
        type: ActionTypes.TASK_INCOMPLETE,
        payload: { ...task },
      });
    } else {
      dispatch({
        type: ActionTypes.TASK_COMPLETE,
        payload: { ...task },
      });
    }
  };

  const handleTaskEdit = () => {
    dispatch({
      type: ActionTypes.OPEN_MODAL_EDIT,
      payload: task,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: ActionTypes.REMOVE_TASK,
      payload: task,
    });
  };

  useEffect(() => {
    setChecked(task.status === "Completed");
  }, [task]);

  return (
    <div className="items">
      <Checkbox
        onChange={handleChange}
        checked={checked}
        className={"checkbox"}
      />
      <TaskDesc task={task} completed={task.status === "Completed"} />
      <IconsPanel handleEdit={handleTaskEdit} handleDelete={handleDelete} />
    </div>
  );
};

Item.propTypes = {
  task: PropTypes.object,
};

Item.defaultProps = {
  task: {},
};

export default Item;
