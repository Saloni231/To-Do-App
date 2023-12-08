import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../atoms/Header/Header";
import ActionPanel from "../molecules/ActionPanel/ActionPanel";
import AddTaskModal from "../organisms/AddTaskModal/AddTaskModal";
import TaskPanel from "../organisms/TaskPanel/TaskPanel";
import * as Actions from "../../Store/ActionTypes";

const ToDo = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks);
  const openModal = useSelector((state) => state.modal.open);
  const filterTask = useSelector((state) => state.filter.tasks);

  const handleSelect = (e) => {
    switch (e.target.value) {
      case "Completed":
        dispatch({
          type: Actions.COMPLETED,
          payload: tasks,
        });
        break;
      case "Incomplete":
        dispatch({
          type: Actions.INCOMPLETE,
          payload: tasks,
        });
        break;
      default:
        dispatch({
          type: Actions.ALL,
          payload: tasks,
        });
        break;
    }
  };

  useEffect(() => {
    const selectbox = document.getElementById("selectbox");
    const selectValue = selectbox.options[selectbox.selectedIndex].textContent;
    switch (selectValue) {
      case "Completed":
        dispatch({
          type: Actions.COMPLETED,
          payload: tasks,
        });
        break;
      case "Incomplete":
        dispatch({
          type: Actions.INCOMPLETE,
          payload: tasks,
        });
        break;
      default:
        dispatch({
          type: Actions.ALL,
          payload: tasks,
        });
        break;
    }
  }, [tasks]);

  return (
    <React.Fragment>
      {openModal && <AddTaskModal />}
      <Header title={"todo list"} />
      <ActionPanel handleSelect={handleSelect} />
      <TaskPanel tasks={filterTask} />
    </React.Fragment>
  );
};

export default ToDo;
