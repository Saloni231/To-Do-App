import * as FilterActions from "../ActionTypes";

export const FilterReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case FilterActions.COMPLETED:
      return {
        tasks: action.payload
          ? action.payload.filter((item) => item.status === "Completed")
          : [],
      };
    case FilterActions.INCOMPLETE:
      return {
        tasks: action.payload
          ? action.payload.filter((item) => item.status === "Incomplete")
          : [],
      };
    case FilterActions.ALL:
      return {
        tasks: action.payload,
      };
    default:
      return state;
  }
};
