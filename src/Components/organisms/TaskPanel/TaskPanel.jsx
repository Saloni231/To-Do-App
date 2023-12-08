import React from "react";
import { PropTypes } from "prop-types";
import NoItem from "../../molecules/NoItem/NoItem";
import ItemList from "../ItemList/ItemList";
import "./TaskPanel.scss";

const TaskPanel = ({ tasks }) => {
  return (
    <div className="task_panel">
      {tasks.length > 0 ? <ItemList tasks={tasks} /> : <NoItem />}
    </div>
  );
};

TaskPanel.propTypes = {
  tasks: PropTypes.array,
};

TaskPanel.defaultProps = {
  tasks: [],
};

export default TaskPanel;
