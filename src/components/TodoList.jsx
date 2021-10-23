import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos && todos.length
          ? todos.map((todo) => <Todo key={`todo- ${todo.id}`} todo={todo} />)
          : "No Todos, yay!!!"}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { allIds, byIds } = state.todos || {};
  const todos =
    allIds && allIds.length
      ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null))
      : null;
  return {
    todos,
  };
};

export default connect(mapStateToProps, null)(TodoList);
