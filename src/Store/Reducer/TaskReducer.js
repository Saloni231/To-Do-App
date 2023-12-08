import * as ActionTypes from "../ActionTypes";

export const TaskReducer = (state = { tasks: [] }, action) => {
  const index =
    state.tasks &&
    state.tasks.findIndex((item) => item.id === action.payload.id);
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case ActionTypes.EDIT_TASK:
      return {
        tasks: [
          ...state.tasks.slice(0, index),
          action.payload,
          ...state.tasks.slice(index + 1),
        ],
      };
    case ActionTypes.REMOVE_TASK:
      return {
        tasks: [
          ...state.tasks.slice(0, index),
          ...state.tasks.slice(index + 1),
        ],
      };
    case ActionTypes.TASK_COMPLETE:
      return {
        tasks: [
          ...state.tasks.slice(0, index),
          { ...state.tasks[index], status: "Completed" },
          ...state.tasks.slice(index + 1),
        ],
      };
    case ActionTypes.TASK_INCOMPLETE:
      return {
        tasks: [
          ...state.tasks.slice(0, index),
          { ...state.tasks[index], status: "Incomplete" },
          ...state.tasks.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};
