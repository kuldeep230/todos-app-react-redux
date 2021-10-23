import { ADD_TODO, TOGGLE_TODO } from "./todosTypes";

let nextTodoId = 0;

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};
