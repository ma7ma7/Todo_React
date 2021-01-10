import React, { Component } from "react";

class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state.newTodo);
  }

  onChangeText(evt) {
    this.setState({ newTodo: evt.target.value });
  }

  handleChange(evt) {
    this.onChangeText(evt);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="todo" style={{ color: "#fff" }}>
            New Todo
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="todo"
            id="todo"
            placeholder="Put a new todo Here"
            value={this.state.newTodo}
          />
        </div>
      </form>
    );
  }
}

export default ListForm;
