import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FilterReducer } from "./Reducer/FilterReducer";
import { modalReducer } from "./Reducer/ModalReducer";
import { TaskReducer } from "./Reducer/TaskReducer";

const store = createStore(
  combineReducers({
    task: TaskReducer,
    modal: modalReducer,
    filter: FilterReducer,
  }), applyMiddleware(thunk)
);

export default store;
