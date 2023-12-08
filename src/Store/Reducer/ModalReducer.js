import * as Actions from "../ActionTypes";

export const modalReducer = (
  state = { open: false, task: {}, edit: false },
  action
) => {
  switch (action.type) {
    case Actions.OPEN_MODAL_CREATE:
      return {
        open: true,
        ...state.task,
        ...state.edit,
      };
    case Actions.OPEN_MODAL_EDIT:
      return {
        open: true,
        task: action.payload,
        edit: true,
      };
    case Actions.CLOSE_MODAL:
      return {
        open: false,
        ...state.task,
        ...state.edit,
      };
    default:
      return state;
  }
};
