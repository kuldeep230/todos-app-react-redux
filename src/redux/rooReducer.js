import { combineReducers } from "redux";
import todoReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
