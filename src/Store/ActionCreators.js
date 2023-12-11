import * as ActionTypes from "./ActionTypes";
export const filterData = (value, data) => (dispatch) => {
  let result = data.length > 0 ? data : [];
  if (value !== "All") {
    result =
      data.length > 0 ? data.filter((item) => item.status === value) : [];
  }

  dispatch({
    type: ActionTypes.FILTER,
    payload: result,
  });
};
