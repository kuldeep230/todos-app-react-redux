import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./components/TodosApp";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoApp />
        </div>
      </Provider>
    );
  }
}

export default App;
