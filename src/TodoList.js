import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListForm from "./ListForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "Learn JS", isDone: false, id: uuidv4() },
        { title: "Learn React", isDone: false, id: uuidv4() },
        { title: "Learn Redux", isDone: false, id: uuidv4() },
      ],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  handleDeleteItem(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState((oldState) => ({
      todos: [...newTodos],
    }));
  }

  deleteItem(id) {
    this.handleDeleteItem(id);
  }

  onSubmit(newTodo) {
    const receivedTodo = {
      title: newTodo,
      isDone: false,
      id: uuidv4(),
    };

    this.setState((oldState) => ({
      todos: [...oldState.todos, receivedTodo],
    }));
  }

  onCheck(id) {
    const oldState = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    this.setState({ todos: [...oldState] });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <div className="item TodoList-item" key={todo.id}>
        <div className="right floated">
          <i className="ui icon pencil alternate"></i>
          <i
            className="ui icon close"
            onClick={() => this.deleteItem(todo.id)}
          ></i>
        </div>
        <div className="content">
          <p
            onClick={() => this.onCheck(todo.id)}
            className={`${todo.isDone ? "isDone" : ""}`}
          >
            {todo.title}
          </p>
        </div>
      </div>
    ));

    return (
      <div className="ui container TodoList" style={{ width: "300px" }}>
        <h1
          className="ui huge header center aligned"
          style={{ marginTop: "20px", color: "#ecf0f1" }}
        >
          To do List
        </h1>

        <div className="ui middle aligned divided list">{todos}</div>

        <ListForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default TodoList;
