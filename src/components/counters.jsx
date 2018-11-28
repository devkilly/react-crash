import React, { Component } from "react";
import Counter from "./counterComponent.jsx";

class Counters extends Component {
  state = {};

  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}
