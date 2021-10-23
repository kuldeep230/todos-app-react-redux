import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <li>{todo.content}</li>
    </div>
  );
};

export default Todo;
