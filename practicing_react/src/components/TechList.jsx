import React, { Component } from "react";

import TechItem from "./TechItem";

export default class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Nativee", "Test"],
  };

  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount() {}

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

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter((techFilter) => techFilter !== tech),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech) => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
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
