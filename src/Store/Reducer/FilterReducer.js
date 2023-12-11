import * as FilterActions from "../ActionTypes";

export const FilterReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case FilterActions.FILTER:
      return {
        tasks: action.payload,
      };
    default:
      return state;
  }
};
