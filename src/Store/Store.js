import { legacy_createStore as createStore, combineReducers } from "redux";
import { FilterReducer } from "./Reducer/FilterReducer";
import { modalReducer } from "./Reducer/ModalReducer";
import { TaskReducer } from "./Reducer/TaskReducer";

const store = createStore(
  combineReducers({
    task: TaskReducer,
    modal: modalReducer,
    filter: FilterReducer,
  })
);

export default store;
