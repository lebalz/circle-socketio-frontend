import React from "react";
import "./styles.css";
import CircleForm from "./components/CircleForm";
import Circle from "./components/Circle";
import socketioClient from "socket.io-client";

export const API_URL = "localhost:4001";

export default class App extends React.Component {
  state = {
    circles: []
  };

  constructor() {
    super();
    this.socket = socketioClient(API_URL);
  }

  componentDidMount() {
    this.socket.on("circle_data", data => this.setState({ circles: data }));
  }

  addCircle = circle => {
    this.socket.emit("add_circle", circle);
  };

  render() {
    return (
      <div className="App">
        <div id="dashboard">
          {this.state.circles.map((circel, index) => (
            <Circle key={index} circle={circel} />
          ))}
        </div>
        <CircleForm addCircle={this.addCircle} />
      </div>
    );
  }
}
