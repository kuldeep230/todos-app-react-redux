import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/todos/todosActions";

const AddTodo = ({ bringAddTodo }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (input) => {
    setInputText(input);
  };

  const handleClick = () => {
    bringAddTodo(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        value={inputText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    bringAddTodo: (content) => {
      dispatch(addTodo(content));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
