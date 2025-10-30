import { Component } from "react";

export default class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.textValue.trim()) return;

    this.props.onSubmit(this.state.textValue);

    this.setState({ textValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
        />
        <button type="submit">Додати</button>
      </form>
    );
  }
}
