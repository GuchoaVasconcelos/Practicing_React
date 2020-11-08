import React, { Component } from "react";

export default class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Nativee", "Test"],
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
